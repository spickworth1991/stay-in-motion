// src/components/LiteYouTube.jsx
import { useEffect, useRef, useState } from "react";

export default function LiteYouTube({ id, title = "YouTube video" }) {
  const [loaded, setLoaded] = useState(false);  // iframe has been inserted
  const [overlayVisible, setOverlayVisible] = useState(true);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  // Thumbnails: mq=320x180, hq=480x360, sd=640x480
  const thumbMQ = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`; // 320w
  const thumbHQ = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; // 480w
  const thumbSD = `https://i.ytimg.com/vi/${id}/sddefault.jpg`; // 640w

  const loadIframe = () => {
    setLoaded(true);
  };

  // Load YouTube Iframe API only after iframe is shown (on first click)
  useEffect(() => {
    if (!loaded) return;

    const ensureYTApi = () =>
      new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve(window.YT);
          return;
        }
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });

    let player;
    ensureYTApi().then((YT) => {
      player = new YT.Player(iframeRef.current, {
        events: {
          onReady: () => {
            playerRef.current = player;
            // Start playing immediately on first load
            player.playVideo();
          },
          onStateChange: (e) => {
            // https://developers.google.com/youtube/iframe_api_reference#onStateChange
            const state = e.data;
            if (state === YT.PlayerState.PLAYING) setOverlayVisible(false);
            if (state === YT.PlayerState.PAUSED || state === YT.PlayerState.ENDED) {
              setOverlayVisible(true);
            }
          },
        },
      });
    });

    return () => {
      // Best-effort cleanup
      try {
        player && player.destroy && player.destroy();
      } catch {}
    };
  }, [loaded]);

  // Before the iframe is inserted, show a lightweight button with the thumbnail
  if (!loaded) {
    return (
      <button
        type="button"
        onClick={loadIframe}
        className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group"
        aria-label={`Play video: ${title}`}
      >
        <img
          src={thumbHQ}
          srcSet={`${thumbMQ} 320w, ${thumbHQ} 480w, ${thumbSD} 640w`}
          sizes="(max-width: 640px) 100vw, 768px"
          alt={title}
          width="640"
          height="480"
          decoding="async"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full px-4 py-2 bg-white/95 text-black text-sm sm:text-base shadow">
            ▶ Watch Clinic Tour
          </span>
        </div>
      </button>
    );
  }

  // After the iframe is inserted, keep an overlay that re-appears on pause/end
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        // IMPORTANT: enablejsapi for state detection + modest UI
        id={`yt-${id}`}
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1&modestbranding=1&rel=0&playsinline=1`}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
      {overlayVisible && (
        <button
          type="button"
          onClick={() => playerRef.current && playerRef.current.playVideo()}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
          aria-label="Resume video"
        >
          <span className="rounded-full px-4 py-2 bg-white/95 text-black text-sm sm:text-base shadow">
            ▶ Watch Clinic Tour
          </span>
        </button>
      )}
    </div>
  );
}
