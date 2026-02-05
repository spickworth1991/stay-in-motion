// app/privacy/page.jsx

export const metadata = {
  title: "SMS & Email Privacy Policy | Stay in Motion PT",
  description:
    "SMS & Email Privacy Policy for Stay in Motion PT, including consent, opt-out, data use, and retention.",
  alternates: { canonical: "https://stayinmotionpt.com/privacy" },
  openGraph: {
    url: "https://stayinmotionpt.com/privacy",
    title: "SMS & Email Privacy Policy | Stay in Motion PT",
    description:
      "SMS & Email Privacy Policy for Stay in Motion PT, including consent, opt-out, data use, and retention.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <section className="section">
      <div className="container-site">
        {/* Hero */}
        <div className="text-center mb-8">
          <span className="badge">Privacy & Communications</span>
          <h1 className="h1 mt-3">SMS &amp; Email Privacy Policy</h1>
          <p className="lead mt-3">
            Business: <strong>Stay in Motion PT</strong> <span className="mx-2">•</span>
            Website: <strong>StayinmotionPT.com</strong> <span className="mx-2">•</span>
            Effective Date: <strong>February 04, 2026</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: quick actions */}
          <aside className="card p-6 lg:sticky lg:top-20 self-start">
            <h2 className="h3 mb-2">Questions?</h2>
            <p className="text-muted">
              If you have questions about this policy or our communication practices,
              contact us using the information listed on our website.
            </p>

            <div className="mt-5 grid gap-3">
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
              <a href="tel:7342513046" className="btn btn-outline">
                Call (734) 251-3046
              </a>
              <a href="/schedule" className="btn btn-outline">
                Schedule
              </a>
              <a
                href="/docs/privacy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Privacy Policy (PDF)
              </a>

            </div>

            <div className="divider-subtle mt-6 pt-6">
              <p className="text-sm text-muted">
                RingCentral is used solely as a service provider for SMS delivery.
                We do not sell or rent your information.
              </p>
            </div>
          </aside>

          {/* Right: policy content */}
          <div className="lg:col-span-2">
            <div className="card p-6">
              <div className="grid gap-6">
                <PolicySection title="SMS Communications Consent">
                  <p>
                    By providing your mobile phone number and opting in, you consent to
                    receive SMS (text) messages from Stay in Motion PT using RingCentral.
                    These messages may include appointment confirmations and reminders,
                    scheduling or service-related notifications, customer support responses,
                    and informational or promotional messages (if applicable). Consent to
                    receive SMS messages is not a condition of purchase.
                  </p>
                </PolicySection>

                <PolicySection title="SMS Information We Collect">
                  <p>
                    We may collect your mobile phone number, name (if provided), and message
                    interaction data such as delivery status and opt-in/opt-out records.
                  </p>
                </PolicySection>

                <PolicySection title="SMS Use, Frequency & Fees">
                  <p>
                    SMS information is used solely to deliver messages you have consented to
                    receive and to maintain compliance records. Message frequency may vary.
                    Message and data rates may apply depending on your mobile carrier.
                  </p>
                </PolicySection>

                <PolicySection title="SMS Opt-Out & Help">
                  <p>
                    You may opt out at any time by replying <strong>STOP</strong>. Reply{" "}
                    <strong>HELP</strong> for assistance. Once opted out, you will no longer
                    receive SMS messages unless you re-opt in.
                  </p>
                </PolicySection>

                <PolicySection title="Email Communications Policy">
                  <p>
                    When you provide your email address to Stay in Motion PT, you consent to
                    receive email communications that may include appointment confirmations,
                    scheduling information, service updates, educational content, and marketing
                    or promotional messages (if applicable). Email communications are used to
                    support your relationship with our practice.
                  </p>
                </PolicySection>

                <PolicySection title="Email Opt-Out">
                  <p>
                    You may opt out of marketing or promotional emails at any time by using the
                    unsubscribe link included in our emails. Transactional or service-related emails
                    (such as appointment confirmations or required notices) may still be sent as necessary.
                  </p>
                </PolicySection>

                <PolicySection title="Data Sharing & Privacy">
                  <p>
                    We do not sell, rent, or share your phone number, email address, or consent data
                    with third parties for their marketing purposes. Your information is used only for
                    communication with Stay in Motion PT and to comply with legal, regulatory, and carrier
                    requirements. RingCentral acts solely as a service provider for SMS delivery.
                  </p>
                </PolicySection>

                <PolicySection title="Data Security & Retention">
                  <p>
                    We take reasonable administrative and technical measures to protect your personal
                    information. Communication consent records are retained as required by applicable laws
                    and regulations.
                  </p>
                </PolicySection>

                <PolicySection title="Changes to This Policy">
                  <p>
                    We may update this policy from time to time. Updates will be posted on our website
                    with a revised effective date.
                  </p>
                </PolicySection>

                <PolicySection title="Contact Information">
                  <p>
                    Our business address, email address, and phone number are listed on our website:
                    <strong> StayinmotionPT.com</strong>. If you have questions about this policy or our
                    communication practices, please contact us using the information provided there.
                  </p>
                </PolicySection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className="divider-subtle pt-6 first:pt-0 first:border-t-0">
      <h2 className="h3 mb-2">{title}</h2>
      <div className="text-muted leading-relaxed">{children}</div>
    </section>
  );
}
