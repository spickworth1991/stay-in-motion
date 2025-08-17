// app/careers/page.jsx
import CareersForm from "@/components/CareersForm";

export const metadata = {
  title: "Careers | Stay in Motion PT",
  description: "Careers - Stay in Motion Physical Therapy.",
  alternates: { canonical: "https://stayinmotionpt.com/careers" },
  openGraph: {
    url: "https://stayinmotionpt.com/careers",
    title: "Careers | Stay in Motion PT",
    description: "Careers - Stay in Motion Physical Therapy.",
    images: [{ url: "/logo.png" }]
  }
};

// Define your openings here (server-safe)
const positions = [
  {
    title: "Physical Therapist (DPT)",
    location: "Garden City, MI — Full-time",
    description:
      "Evaluate, treat, and progress diverse orthopedic and sports cases. Dry needling experience a plus."
  },
  {
    title: "Physical Therapist Assistant (PTA)",
    location: "Garden City, MI — Part-time",
    description:
      "Support plan of care execution, patient education, and progression of exercises under PT supervision."
  }
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <div
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center text-primary flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/photos/careers-hero.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Join Our Team</h1>
        <p className="text-2xl font-bold md:text-xl mt-3 drop-shadow-md max-w-xl">
          Help us redefine recovery with passion, precision, and purpose.
        </p>
      </div>

      {/* Positions */}
      <div className="min-h-screen  py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Current Openings</h2>

        <div className="max-w-4xl mx-auto grid gap-6 mb-12">
          {positions.map((pos, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary">{pos.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">{pos.location}</p>
              <p className="text-gray-700 dark:text-gray-300">{pos.description}</p>
            </div>
          ))}
        </div>

        {/* Application form (client island) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Submit Your Application</h2>
          <CareersForm positions={positions} />
        </div>
      </div>
    </>
  );
}
