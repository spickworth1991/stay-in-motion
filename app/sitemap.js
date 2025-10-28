// app/sitemap.js
export default function sitemap() {
  const base = "https://stayinmotionpt.com";

  const paths = [
    "/",            // home
    "/about",
    "/services",
    "/insurance",
    "/faq",
    "/resources",
    "/careers",
    "/contact",
    "/location",    // add this if you create the Location page
  ];

  const today = new Date().toISOString().slice(0, 10);

  return paths.map((p, i) => ({
    url: `${base}${p === "/" ? "" : p}`,
    lastModified: today,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1.0 : 0.7 - i * 0.01, // mild variance is fine, not required
  }));
}
