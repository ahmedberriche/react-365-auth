import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        &copy;{new Date().getFullYear()} Numeryx all rights reserved{" "}
      </div>
    </footer>
  );
}
