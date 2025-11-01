// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

let _supabase = null;

/**
 * Always call this INSIDE client components or effects/handlers.
 * Returns null on the server (during static export), so build won't crash.
 */
export function getSupabase() {
  if (typeof window === "undefined") return null; // SSR/static export: no-op

  if (_supabase) return _supabase;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  if (!url || !anon) {
    console.warn("Supabase env vars missing in browser (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY).");
  }

  _supabase = createClient(url, anon, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
  return _supabase;
}
