// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

/**
 * <SEO
 *   title="Page Title | Stay in Motion PT"
 *   description="Concise, benefit-focused description."
 *   canonical="https://stayinmotionpt.com/page"
 *   ogImage="https://stayinmotionpt.com/og/default.jpg"
 *   jsonLd={{ ...optional JSON-LD... }}
 * />
 */
export default function SEO({ title, description, canonical, ogImage, jsonLd }) {
  const siteName = "Stay in Motion Physical Therapy";
  return (
    <Helmet>
      {/* Indexable by default */}
      <meta name="robots" content="index, follow" />

      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={siteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Optional JSON-LD */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
