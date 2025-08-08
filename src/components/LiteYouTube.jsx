import { useState } from "react";

export default function LiteYouTube({ id, title = "YouTube video" }) {
  const [play, setPlay] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (play) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
        title={title}
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="w-full aspect-video rounded-2xl"
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
      <img
        src={thumb}
        alt={title}
        width="1280"
        height="720"
        decoding="async"
        fetchpriority="high"
        className="w-full h-full object-cover"
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
