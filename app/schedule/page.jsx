// app/schedule/page.jsx

const PROMPT_EMR_SCHEDULING_URL =
  "https://scheduling.go.promptemr.com/onlineScheduling?w=2535&s=DL";

export const metadata = {
  title: "Schedule",
  description:
    "Schedule an appointment with Stay in Motion Physical Therapy in Wixom, MI.",
  alternates: { canonical: "https://stayinmotionpt.com/schedule" },
  openGraph: {
    url: "https://stayinmotionpt.com/schedule",
    title: "Schedule | Stay in Motion PT",
    description:
      "Schedule an appointment with Stay in Motion Physical Therapy in Wixom, MI.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function SchedulePage() {
  return (
    <section className="section">
      <div className="container-site">
        {/* Hero */}
        <div className="text-center mb-8">
          <span className="badge">Secure online scheduling</span>
          <h1 className="h1 mt-3">Schedule an Appointment</h1>
          <p className="lead mt-3">
            Book online in minutes. For your privacy, PromptEMR will ask for a
            phone number and date of birth to verify your identity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: premium guidance */}
          <div className="card p-6 lg:col-span-1">
            <h2 className="h3">Before you book</h2>
            <p className="text-muted mt-2">
              This quick verification step helps protect your health
              information.
            </p>

            <div className="divider-subtle mt-6 pt-6">
              <h3 className="font-semibold">What you’ll need</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• A mobile number to receive a confirmation code</li>
                <li>• Your date of birth</li>
                <li>• About 30 seconds for verification</li>
              </ul>
            </div>

            <div className="divider-subtle mt-6 pt-6">
              <h3 className="font-semibold">Prefer to schedule by phone?</h3>
              <p className="text-sm text-muted mt-2">
                Call us and we’ll get you set up.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  className="btn btn-primary"
                  href="tel:+17342513046"
                >
                  Call (734) 251-3046
                </a>
                <a
                  className="btn btn-outline"
                  href={PROMPT_EMR_SCHEDULING_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in New Tab
                </a>
              </div>

              <p className="text-xs text-muted mt-3">
                If the embedded scheduler doesn’t load (some browsers block
                third‑party embeds), use “Open in New Tab.”
              </p>
            </div>
          </div>

          {/* Right: embedded scheduler */}
          <div className="card p-3 sm:p-4 lg:col-span-2">
            <div className="flex items-center justify-between gap-3 px-2 pb-3">
              <div>
                <h2 className="h3">Secure Scheduler</h2>
                <p className="text-sm text-muted mt-1">
                  Powered by PromptEMR
                </p>
              </div>
              <a
                className="btn btn-outline hidden sm:inline-flex"
                href={PROMPT_EMR_SCHEDULING_URL}
                target="_blank"
                rel="noreferrer"
              >
                New Tab
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden ring-subtle">
              <iframe
                title="Stay in Motion PT — PromptEMR Scheduling"
                src={PROMPT_EMR_SCHEDULING_URL}
                className="w-full"
                style={{ height: "980px" }}
                loading="lazy"
                // NOTE: we intentionally avoid restrictive sandboxing; the scheduler needs scripts/forms.
                allow="clipboard-write; payment;"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 sm:hidden">
              <a
                className="btn btn-outline w-full"
                href={PROMPT_EMR_SCHEDULING_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open Scheduler in New Tab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
