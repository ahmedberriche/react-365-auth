import React from "react";

export default function Player({ src, index }) {
  return (
    <video width="100%" controls>
      <source src={src} type="video/mp4" />
    </video>
  );
}
