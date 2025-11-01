"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("Sending magic link…");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000"}/admin/posts` }
    });
    setMsg(error ? error.message : "Check your email for the magic link.");
  }

  return (
    <main className="max-w-sm mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="you@yourdomain.com"
        />
        <button className="btn btn-primary w-full" type="submit">Send Magic Link</button>
        {msg && <p className="text-sm mt-2">{msg}</p>}
      </form>
    </main>
  );
}
