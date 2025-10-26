// app/thanks/page.jsx

export const metadata = {
  title: "Thanks | Stay in Motion PT",
  description: "We received your message and will get back to you shortly.",
  alternates: { canonical: "https://stayinmotionpt.com/thanks" },
  openGraph: {
    url: "https://stayinmotionpt.com/thanks",
    title: "Thanks | Stay in Motion PT",
    description: "We received your message and will get back to you shortly.",
    images: [{ url: "/logo.png" }]
  }
};

export default function Page() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle background rings / gradients that work in light & dark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 10%, rgba(60,173,186,0.15), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(255,153,102,0.10), transparent 65%)"
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 md:px-8 py-20 text-center">
        {/* Logo */}
        <img
          src="/logo_noBG.png"
          alt="Stay in Motion Physical Therapy"
          className="mx-auto h-16 w-auto mb-6 drop-shadow-sm"
          width={160}
          height={64}
          loading="lazy"
          decoding="async"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
          Thanks for reaching out!
        </h1>

        {/* Copy */}
        <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
          We received your message and will get back to you shortly.
          If it’s urgent, feel free to call us at{" "}
          <a href="tel:+1-734-215-7546" className="underline decoration-2 underline-offset-2">
            (734) 215-7546
          </a>.
        </p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30" />

        {/* Next steps / CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5 hover:from-accent hover:to-primary"
          >
            Back to Home
          </a>
          <a
            href="/services"
            className="inline-block px-6 py-3 rounded-full border border-primary/30 text-primary dark:text-white/90 bg-white/70 dark:bg-gray-800/50 backdrop-blur hover:border-accent/50 transition"
          >
            Explore Services
          </a>
        </div>

        {/* Subtle badge */}
        <p className="mt-10 text-sm text-gray-600 dark:text-gray-400">
          Stay in Motion Physical Therapy • Wixom, MI
        </p>
      </div>
    </section>
  );
}
