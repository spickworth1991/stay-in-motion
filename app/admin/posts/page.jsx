"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

function sortForDisplay(rows) {
  const now = new Date();
  const activeCoupons = [];
  const nonCoupons = [];
  const expiredCoupons = [];

  for (const r of rows) {
    if (r.is_coupon) {
      const expired = r.expires_at ? new Date(r.expires_at) < now : false;
      if (expired) expiredCoupons.push(r);
      else activeCoupons.push(r);
    } else {
      nonCoupons.push(r);
    }
  }

  // Active coupons by soonest to expire, then newest created
  activeCoupons.sort((a, b) => {
    const aTime = a.expires_at ? new Date(a.expires_at).getTime() : Number.MAX_SAFE_INTEGER;
    const bTime = b.expires_at ? new Date(b.expires_at).getTime() : Number.MAX_SAFE_INTEGER;
    return aTime - bTime || new Date(b.created_at) - new Date(a.created_at);
  });

  // Non-coupons newest first
  nonCoupons.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Expired coupons at the very bottom, newest first among expired
  expiredCoupons.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return [...activeCoupons, ...nonCoupons, ...expiredCoupons];
}

export default function AdminPostsPage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Create/edit form state
  const [editing, setEditing] = useState(null); // post or null
  const [form, setForm] = useState({
    title: "", body: "", tags: "", is_coupon: false, expires_at: "", imageFile: null, image_url: ""
  });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user || null));
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    if (!error) setPosts(data || []);
    setLoading(false);
  }
  useEffect(() => { fetchPosts(); }, []);

  function resetForm() {
    setEditing(null);
    setForm({ title: "", body: "", tags: "", is_coupon: false, expires_at: "", imageFile: null, image_url: "" });
  }

  async function handleUploadImage(file) {
    if (!file) return null;

    // Ensure auth (required by storage RLS)
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("You are signed out. Please log in again.");

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const key = `${crypto.randomUUID()}.${ext}`; // inside 'news' bucket (no 'news/' prefix)

    const { error: upErr } = await supabase.storage.from("news").upload(key, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type || "image/jpeg",
    });
    if (upErr) throw upErr;

    const { data: pub } = supabase.storage.from("news").getPublicUrl(key);
    return pub?.publicUrl || null;
  }

  // Helper to build tag array with auto-injected "Coupon"
  function buildTagsArray(raw, isCoupon) {
    // split, trim, dedupe case-insensitive
    const seen = new Set();
    const out = [];

    const push = (t) => {
        const key = t.trim();
        if (!key) return;
        const lower = key.toLowerCase();
        if (!seen.has(lower)) {
        seen.add(lower);
        // normalize to nice case for UI
        out.push(key[0].toUpperCase() + key.slice(1));
        }
    };

    (raw || "")
        .split(",")
        .forEach((t) => push(t));

    if (isCoupon) push("Coupon");

    return out;
    }


  async function handleCreate(e) {
    e.preventDefault();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Please sign in again.");
      location.href = "/admin/login";
      return;
    }

    try {
      let image_url = form.image_url || null;
      if (form.imageFile) image_url = await handleUploadImage(form.imageFile);

      const tags = buildTagsArray(form.tags, form.is_coupon);

      const { error } = await supabase.from("posts").insert({
        title: form.title.trim(),
        body: form.body.trim(),
        image_url,
        is_coupon: !!form.is_coupon,
        expires_at: form.expires_at ? new Date(form.expires_at).toISOString() : null,
        tags
      });
      if (error) throw error;

      resetForm();
      fetchPosts();
    } catch (err) {
      alert(err.message || "Failed to create");
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("Please sign in again.");
      location.href = "/admin/login";
      return;
    }

    try {
      let image_url = form.image_url || editing?.image_url || null;
      if (form.imageFile) image_url = await handleUploadImage(form.imageFile);

      const tags = buildTagsArray(form.tags, form.is_coupon);

      const { error } = await supabase
        .from("posts")
        .update({
          title: form.title.trim(),
          body: form.body.trim(),
          image_url,
          is_coupon: !!form.is_coupon,
          expires_at: form.expires_at ? new Date(form.expires_at).toISOString() : null,
          tags
        })
        .eq("id", editing.id);
      if (error) throw error;

      resetForm();
      fetchPosts();
    } catch (err) {
      alert(err.message || "Failed to update");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (!error) fetchPosts();
  }

  function beginEdit(p) {
    setEditing(p);
    setForm({
      title: p.title || "",
      body: p.body || "",
      image_url: p.image_url || "",
      imageFile: null,
      is_coupon: !!p.is_coupon,
      expires_at: p.expires_at ? new Date(p.expires_at).toISOString().slice(0,16) : "",
      tags: (p.tags || []).join(", ")
    });
  }

  const display = useMemo(() => sortForDisplay(posts), [posts]);

  if (!user) {
    return (
      <main className="max-w-xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Admin</h1>
        <p>You must be signed in. <a href="/admin/login" className="text-primary underline">Go to login</a></p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Posts / Coupons</h1>
        <button
          className="btn btn-ghost"
          onClick={async () => { await supabase.auth.signOut(); location.href = "/admin/login"; }}
        >
          Sign out
        </button>
      </div>

      {/* Create / Edit form */}
      <section className="rounded-xl border border-white/10 bg-white dark:bg-gray-900 p-5 mb-10">
        <h2 className="text-xl font-semibold mb-4">{editing ? "Edit Post" : "Create New"}</h2>

        <form onSubmit={editing ? handleUpdate : handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm">Title *</span>
            <input
              className="w-full border rounded px-3 py-2"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm">Body</span>
            <textarea
              className="w-full border rounded px-3 py-2 h-28"
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
            />
          </label>

          <label className="block">
            <span className="text-sm">Image (optional)</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm({ ...form, imageFile: e.target.files?.[0] || null })}
            />
          </label>

          <div className="flex items-center gap-3">
            <input
              id="is_coupon"
              type="checkbox"
              checked={form.is_coupon}
              onChange={(e) => setForm({ ...form, is_coupon: e.target.checked })}
            />
            <label htmlFor="is_coupon">This is a coupon</label>
          </div>

          <label className="block">
            <span className="text-sm">Expires At (optional)</span>
            <input
              type="datetime-local"
              className="border rounded px-3 py-2 w-full"
              value={form.expires_at}
              onChange={(e) => setForm({ ...form, expires_at: e.target.value })}
            />
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm">Tags (comma-separated)</span>
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Announcement, Event, Coupon"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
            {!!form.is_coupon && (
              <p className="text-xs text-gray-500 mt-1">Tip: “Coupon” will be added automatically.</p>
            )}
          </label>

          <div className="md:col-span-2 flex gap-3">
            <button className="btn btn-primary" type="submit">{editing ? "Save Changes" : "Publish"}</button>
            {editing && (
              <button className="btn btn-ghost" type="button" onClick={resetForm}>Cancel</button>
            )}
          </div>
        </form>
      </section>

      {/* List */}
      <section className="rounded-xl border border-white/10 bg-white dark:bg-gray-900 p-5">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead className="text-sm text-gray-500">
                <tr>
                  <th className="px-3">Title</th>
                  <th className="px-3">Type</th>
                  <th className="px-3">Tags</th>
                  <th className="px-3 whitespace-nowrap">Expires</th>
                  <th className="px-3 whitespace-nowrap">Created</th>
                  <th className="px-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {useMemo(() => sortForDisplay(posts), [posts]).map((p) => {
                  const isExpired = p.is_coupon && p.expires_at && new Date(p.expires_at) < new Date();
                  return (
                    <tr key={p.id} className="align-top">
                      <td className="px-3 font-medium">{p.title}</td>
                      <td className="px-3">
                        {p.is_coupon ? (
                          <span className={`text-xs px-2 py-1 rounded ${isExpired ? "bg-gray-300 text-gray-700" : "bg-green-200 text-green-900"}`}>
                            {isExpired ? "Coupon (Expired)" : "Coupon"}
                          </span>
                        ) : (
                          <span className="text-xs px-2 py-1 rounded bg-blue-200 text-blue-900">Post</span>
                        )}
                      </td>
                      <td className="px-3 text-sm">
                        {[
                          ...(p.tags || []),
                          ...(isExpired ? ["Coupon (Expired)"] : []),
                        ].join(", ") || "—"}
                      </td>
                      <td className="px-3 text-sm">
                        {p.is_coupon && p.expires_at ? new Date(p.expires_at).toLocaleString() : "—"}
                      </td>
                      <td className="px-3 text-sm">{new Date(p.created_at).toLocaleString()}</td>
                      <td className="px-3">
                        <div className="flex items-center gap-2">
                          <button className="text-primary underline underline-offset-4" onClick={() => beginEdit(p)}>
                            Edit
                          </button>
                          <button className="text-red-600 underline underline-offset-4" onClick={() => handleDelete(p.id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {!posts.length && (
                  <tr><td colSpan={6} className="px-3 py-6 text-center text-gray-500">No posts yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
