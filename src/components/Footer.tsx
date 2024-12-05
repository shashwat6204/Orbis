import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      Orbis © {new Date().getFullYear()}
    </footer>
  );
}
