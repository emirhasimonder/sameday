"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Do not play on responsive screens
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    
    video.load();
    video.play().catch(() => {});
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden bg-ink lg:block">
      <video
        ref={videoRef}
        src="/hero-video.mp4?v=warehouse-v1"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="size-full object-cover opacity-70"
      />
      {/* Light gradient overlay to ensure text contrast while keeping video clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
    </div>
  );
}
