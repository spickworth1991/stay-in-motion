export default async function sitemap() {
  const base = "https://stayinmotionpt.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/insurance",
    "/faq",
    "/resources",
    "/careers",
    "/contact"
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date().toISOString().slice(0, 10),
    changeFrequency: "monthly",
    priority: p === "" ? 1.0 : 0.7
  }));

  return routes;
}
