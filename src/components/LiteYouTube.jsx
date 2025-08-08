// src/components/LiteYouTube.jsx
import { useState } from "react";

export default function LiteYouTube({ id, title }) {
  const [activated, setActivated] = useState(false);

  // Build thumbnail URL
  const thumbnail = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;

  return (
    <div
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg"
      style={{ cursor: activated ? "auto" : "pointer" }}
      onClick={() => setActivated(true)}
    >
      {!activated ? (
        <>
          {/* Preload + high fetch priority */}
          <link
            rel="preload"
            as="image"
            href={thumbnail}
            fetchpriority="high"
            imagesrcset={`${thumbnail} 1x, https://i.ytimg.com/vi/${id}/hqdefault.jpg 2x`}
            imagesizes="(max-width: 768px) 100vw, 640px"
          />

          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-white opacity-90 hover:opacity-100 transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
