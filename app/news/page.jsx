"use client";

import { useEffect, useMemo, useState } from "react";
import { getSupabase } from "@/lib/supabaseClient";

// ---- shared styles: identical look to Login/Admin cards ----
const cardCls =
  "relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow p-6 transition hover:shadow-lg hover:-translate-y-[2px]";
const pillCls =
  "text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-800";
const chipBase =
  "text-sm px-3 py-1 rounded-full border transition";
const chipActive =
  "bg-primary text-white border-primary";
const chipIdle =
  "bg-transparent text-primary border-primary hover:bg-primary/10";

// helpers
function splitAndSort(rows) {
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

  activeCoupons.sort((a, b) => {
    const aTime = a.expires_at ? new Date(a.expires_at).getTime() : Number.MAX_SAFE_INTEGER;
    const bTime = b.expires_at ? new Date(b.expires_at).getTime() : Number.MAX_SAFE_INTEGER;
    return aTime - bTime || new Date(b.created_at) - new Date(a.created_at);
  });

  nonCoupons.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  expiredCoupons.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return { activeCoupons, nonCoupons, expiredCoupons };
}

function isExpired(row) {
  return row.is_coupon && row.expires_at && new Date(row.expires_at) < new Date();
}

function getDisplayTags(row) {
  const base = (row.tags || []).slice();
  if (row.is_coupon && !isExpired(row) && !base.some(t => t.toLowerCase() === "coupon")) base.push("Coupon");
  if (isExpired(row) && !base.some(t => t.toLowerCase() === "coupon (expired)")) base.push("Coupon (Expired)");
  return base;
}

export default function NewsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState("");

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) { setLoading(false); return; }

    let mounted = true;
    (async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (!mounted) return;
      if (!error) setRows(data || []);
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, []);

  const allTags = useMemo(() => {
    const set = new Set();
    let sawActive = false, sawExpired = false;

    for (const r of rows) {
      (r.tags || []).forEach(t => set.add(t));
      if (r.is_coupon) {
        if (isExpired(r)) sawExpired = true; else sawActive = true;
      }
    }
    if (sawActive) set.add("Coupon");
    if (sawExpired) set.add("Coupon (Expired)");

    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [rows]);

  const filtered = useMemo(() => {
    if (!activeTag) return rows;
    const tagLower = activeTag.toLowerCase();
    if (tagLower === "coupon") return rows.filter(r => r.is_coupon && !isExpired(r));
    if (tagLower === "coupon (expired)") return rows.filter(r => r.is_coupon && isExpired(r));
    return rows.filter(r => (r.tags || []).some(t => t.toLowerCase() === tagLower));
  }, [rows, activeTag]);

  const { activeCoupons, nonCoupons, expiredCoupons } = useMemo(
    () => splitAndSort(filtered),
    [filtered]
  );
  const display = [...activeCoupons, ...nonCoupons, ...expiredCoupons];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Consistent header block */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-primary">News & Updates</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-200">
          Latest announcements, events, and occasional promotions.
        </p>
      </header>

      {/* Tag filters */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setActiveTag("")}
          className={`${chipBase} ${!activeTag ? chipActive : chipIdle}`}
        >
          All
        </button>
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTag(t)}
            className={`${chipBase} ${activeTag === t ? chipActive : chipIdle}`}
          >
            {t}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul className="space-y-6">
          {display.map((p) => {
            const expired = isExpired(p);
            const tags = getDisplayTags(p);

            return (
              <li
                key={p.id}
                className={
                  cardCls +
                  (expired
                    ? " border-gray-300 bg-gray-50 dark:bg-gray-800/40 opacity-85 grayscale"
                    : "")
                }
              >
                {/* Expired ribbon */}
                {expired && (
                  <div className="absolute -top-2 -right-2">
                    <div className="rotate-12 rounded bg-gray-200 text-gray-700 text-[10px] font-semibold px-2 py-1 shadow">
                      EXPIRED
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{p.title}</h2>
                    {!!tags.length && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {tags.map((t) => (
                          <button
                            key={t}
                            onClick={() => setActiveTag(t)}
                            className={pillCls}
                            title={`Filter by ${t}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {p.is_coupon && (
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        expired
                          ? "bg-gray-300 text-gray-700"
                          : "bg-green-200 text-green-900"
                      }`}
                    >
                      {expired ? "Coupon (Expired)" : "Coupon"}
                    </span>
                  )}
                </div>

                {p.image_url && (
                  <div className={`mt-4 ${expired ? "opacity-80" : ""}`}>
                    <img
                      src={p.image_url}
                      alt={p.title}
                      className="rounded-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                )}

                {p.body && (
                  <p
                    className={`mt-4 whitespace-pre-line ${
                      expired
                        ? "text-gray-500 dark:text-gray-300"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {p.body}
                  </p>
                )}

                <div className="mt-4 text-xs text-gray-500">
                  Posted {new Date(p.created_at).toLocaleString()}
                  {p.is_coupon && p.expires_at && (
                    <> • Expires {new Date(p.expires_at).toLocaleString()}</>
                  )}
                </div>
              </li>
            );
          })}
          {!display.length && (
            <li className={cardCls}>
              <p className="text-gray-600 dark:text-gray-300">No posts found.</p>
            </li>
          )}
        </ul>
      )}
    </main>
  );
}
