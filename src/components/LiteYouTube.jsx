import { useState } from "react";

export default function LiteYouTube({ id, title = "YouTube video" }) {
  const [play, setPlay] = useState(false);

  // Thumbnails: mqdefault=320x180, hqdefault=480x360, sddefault=640x480
  const thumbHQ = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const thumbMQ = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

  if (play) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
        title={title}
        className="w-full aspect-video rounded-2xl"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group"
      aria-label={`Play video: ${title}`}
    >
      {/* LCP image */}
      <img
        src={thumbHQ}
        srcSet={`${thumbMQ} 320w, ${thumbHQ} 480w`}
        sizes="(max-width: 480px) 320px, 480px"
        alt={title}
        width="480"   // intrinsic size matches hqdefault
        height="360"
        decoding="async"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full p-4 bg-white/90 group-hover:bg-white transition-colors">
          <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
