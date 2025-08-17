export const metadata = {
  title: "Resources | Stay in Motion PT",
  description: "Resources - Stay in Motion Physical Therapy.",
  alternates: { canonical: "https://stayinmotionpt.com/resources" },
  openGraph: {
    url: "https://stayinmotionpt.com/resources",
    title: "Resources | Stay in Motion PT",
    description: "Resources - Stay in Motion Physical Therapy.",
    images: [{ url: "/logo.png" }]
  }
};

// Copied from your old src/pages/Resources.jsx
const docs = [
  {
    title: "Mindful Stretching Guide",
    href: "https://uhs.berkeley.edu/sites/default/files/wellness-mindfulstretchingguide.pdf",
    blurb:
      "A mindful approach to stretching that enhances flexibility, awareness, and neuromuscular coordination."
  },
  {
    title: "Improving Flexibility – Illustrated Guide",
    href: "https://www.fammed.wisc.edu/files/webfm-uploads/documents/outreach/im/tool-improving-flexibility.pdf",
    blurb:
      "Illustrated flexibility techniques from the Osher Center at University of Wisconsin."
  },
  {
    title: "Low Back Pain Exercise Sheet",
    href: "https://uhs.berkeley.edu/sites/default/files/lowbackpain.pdf",
    blurb:
      "Simple stretching routines targeting the lower back—visual and easy to follow."
  },
  {
    title: "Work Rehabilitation Guide (WA State)",
    href: "https://lni.wa.gov/patient-care/treating-patients/treatment-guidelines-and-resources/_docs/WorkRehabGuideline_Final_Formatting_Updates_0423.pdf",
    blurb:
      "Detailed guidance for returning safely to work with injury-adapted tasks."
  },
  {
    title: "Strength Training for Older Adults",
    href: "https://www.atchison.k-state.edu/docs/food_safety_health_nutrition/Strength%20Training%20for%20Older%20Adults.pdf",
    blurb:
      "Evidence-based guide to building strength in aging populations—exercise plans included."
  },
  {
    title: "Outpatient Rehab Therapy Services (Medicare)",
    href: "https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/OutptRehabTherapy-Booklet-MLN905365print-friendly.pdf",
    blurb:
      "Explains outpatient rehab services, billing, documentation, and Medicare procedures."
  },
  {
    title: "Preparing for Tele-Physical Therapy",
    href: "https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-for-physical-therapy/preparing-patients-for-tele-physical-therapy",
    blurb:
      "HHS guide to help patients prepare and feel confident for telehealth PT sessions."
  },
  {
    title: "Walk With Ease – Coaching Manual",
    href: "https://geriatrictoolkit.missouri.edu/consumer/Walk_With_Ease_AF_Manual.pdf",
    blurb:
      "Evidence-based walking program manual to increase safe activity."
  }
];

export default function Page() {
  return (
    <>
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
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  View PDF
                </a>
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
    </>
  );
}
