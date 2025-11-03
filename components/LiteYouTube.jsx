"use client";
import { useEffect, useRef, useState } from "react";

export default function LiteYouTube({ id, title = "YouTube video" }) {
  const [loaded, setLoaded] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  const thumbMQ = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
  const thumbHQ = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const thumbSD = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;

  const loadIframe = () => {
    setLoaded(true);
    setOverlayVisible(false);
  };

  useEffect(() => {
    if (!loaded || !iframeRef.current) return;

    const ensureYTApi = () =>
      new Promise((resolve) => {
        if (window.YT && window.YT.Player) return resolve(window.YT);
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });

    ensureYTApi().then((YT) => {
      const player = new YT.Player(iframeRef.current, {
        events: {
          onReady: () => {
            playerRef.current = player;
            try { player.playVideo(); } catch {}
          }
        }
      });
    });
  }, [loaded]);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video bg-fg">
      {!loaded && (
        <button
          onClick={loadIframe}
          className="absolute inset-0 w-full h-full"
          aria-label={`Play ${title}`}
        >
          <img
            src={thumbSD}
            srcSet={`${thumbMQ} 320w, ${thumbHQ} 480w, ${thumbSD} 640w`}
            sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, 640px"
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              overlayVisible ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="rounded-full p-4 bg-card backdrop-blur text-fg text-xl">
              ▶
            </span>
          </span>
        </button>
      )}

      {loaded && (
        <iframe
          ref={iframeRef}
          title={title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          allowFullScreen
        />
      )}
    </div>
  );
}
