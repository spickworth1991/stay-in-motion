// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://stayinmotionpt.com/sitemap.xml",
    host: "https://stayinmotionpt.com",
  };
}
