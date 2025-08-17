import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] md:min-h-[78vh] px-4 md:px-8 py-16 bg-cream dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        {/* Card */}
        <section className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-gray-800">
          {/* Decorative gradient ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, var(--tw-gradient-from) 0%, transparent 70%)",
              // Tailwind variables via utility classes below:
            }}
          />
          <div className="from-primary/30 to-accent/30" />

          <div className="relative p-6 sm:p-10">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/logo_noBG.png"
                alt="Stay in Motion Physical Therapy"
                className="h-48 w-auto md:h-48"
              />
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-center text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white">
              404 — Page Not Found
            </h1>

            {/* Copy */}
            <p className="mt-3 text-center text-gray-700 dark:text-gray-300">
              The page you’re looking for doesn’t exist or may have been moved.
              Let’s get you back on track.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-primary to-accent shadow-lg transition-transform duration-300 hover:from-accent hover:to-primary hover:-translate-y-0.5"
              >
                Go Home
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-full border border-primary/50 dark:border-white/20 text-primary dark:text-gray-100 hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "FAQ", href: "/faq" },
                { name: "Insurance", href: "/insurance" },
                { name: "Resources", href: "/resources" },
                { name: "Careers", href: "/careers" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/40 hover:border-accent/60 hover:bg-white dark:hover:bg-gray-700 transition-colors px-4 py-3 flex items-center justify-between"
                >
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    {link.name}
                  </span>
                  <span className="text-accent group-hover:text-primary transition-colors">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Subtle bottom note */}
        <p className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
          If you typed the address, double-check the spelling. If you followed a link,
          it may be outdated.
        </p>
      </div>
    </main>
  );
}
