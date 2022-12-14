import React from "react";

export default function Player({ src, ...restProps }) {
  return (
    <video width="100%" {...restProps}>
      <source src={src} />
    </video>
  );
}
