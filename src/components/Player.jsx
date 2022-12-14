import React from "react";

export default function Player({ src, muted, autoPlay, loop, controls }) {
  return (
    <video
      width="100%"
      controls={controls}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
    >
      <source src={src} />
    </video>
  );
}
