"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabaseClient";

function getSiteOrigin() {
  if (typeof window !== "undefined") return window.location.origin;
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000"
  );
}

const cardCls =
  "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow p-8 w-full max-w-md";
const labelCls = "text-sm text-gray-600 dark:text-gray-300";
const inputCls =
  "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 " +
  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition";
const btnPrimaryCls =
  "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-semibold text-white " +
  "hover:brightness-110 active:brightness-95 transition shadow";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("Sending magic link…");

    const supabase = getSupabase();
    if (!supabase) {
      setMsg("Please open this page in a browser.");
      return;
    }

    const site = getSiteOrigin();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${site}/admin/posts` },
    });

    setMsg(error ? error.message : "Check your email for the magic link.");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Sign in with a one-time magic link sent to your email.
        </p>
      </div>

      <section className={cardCls}>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-left">
            <span className={labelCls}>Email address</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputCls}
              placeholder="you@yourdomain.com"
              autoComplete="email"
            />
          </label>

          <button className={`${btnPrimaryCls} w-full`} type="submit">
            Send Magic Link
          </button>

          {msg && (
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300 text-center">
              {msg}
            </p>
          )}
        </form>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Trouble? Check your spam folder or contact the site developer.
        </p>
      </section>
    </main>
  );
}
