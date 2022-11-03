import React from "react";

export default function Player({ src, type }) {
  return (
    <div className="player-content">
      <video width="100%" controls>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
