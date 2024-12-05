import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/pipeline">Pipeline</Link>
      </nav>
    </header>
  );
}
