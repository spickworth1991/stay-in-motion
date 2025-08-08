// src/pages/Resources.jsx
import { Link } from "react-router-dom";

export default function Resources() {
  const docs = [
    {
      title: "Posture & Ergonomics Guide",
      href: "/docs/Stanford-University-Ergonomic-Posture-iPDF.pdf",
      blurb:
        "Quick posture checkpoints and workstation tweaks to reduce neck, shoulder, and low‑back strain.",
    },
    {
      title: "4‑Day Reflective Practices Diary",
      href: "/docs/TAB-3-Reflective-Practices.pdf",
      blurb:
        "A short, structured journal to track habits, stress, and activity patterns that influence pain.",
    },
    {
      title: "Daily Pain Diary (NHS Fife)",
      href: "/docs/pain-diary.pdf",
      blurb:
        "Simple daily log for pain intensity, triggers, and medication—great for spotting trends.",
    },
    {
      title: "Pain Diary for Interventional Procedures",
      href: "/docs/Pain-Diary-for-Interventional-Pain-Procedures.pdf",
      blurb:
        "Use before/after injections or procedures to measure effectiveness and guide next steps.",
    },
    {
      title: "Clinicians Pain Diary (2023)",
      href: "/docs/Clinicians_Pain_Diary_2023.pdf",
      blurb:
        "Clinician‑oriented worksheet for more detailed pain characteristics and functional limits.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        Resources &amp; Tools
      </h1>

      <div className="space-y-6">
        {docs.map((d) => (
          <article
            key={d.href}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-primary mb-1">{d.title}</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{d.blurb}</p>

            <div className="flex gap-3">
              {/* View (opens in new tab) */}
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                View PDF
              </a>

              {/* Download (forces save when supported) */}
              <a
                href={d.href}
                download
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:from-accent hover:to-primary transition"
              >
                Download
              </a>
            </div>
          </article>
        ))}
      </div>

  
    </section>
  );
}
