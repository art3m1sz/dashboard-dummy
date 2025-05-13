"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border border-gray-200 rounded-xl mx-8 my-6">
      <div className="mx-auto px-8 py-6 flex justify-between items-center">
        <div className="space-x-6">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-900 font-semibold transition"
          >
            Home
          </Link>
          <Link
            href="/user"
            className="text-blue-700 hover:text-blue-900 font-semibold transition"
          >
            User
          </Link>
          <Link
            href="/blog"
            className="text-blue-700 hover:text-blue-900 font-semibold transition"
          >
            Blog
          </Link>
          <Link
            href="/forumjb"
            className="text-blue-700 hover:text-blue-900 font-semibold transition"
          >
            Forum Jual Beli
          </Link>
          <Link
            href="/forumdiskusi"
            className="text-blue-700 hover:text-blue-900 font-semibold transition"
          >
            Forum Diskusi
          </Link>
          <Link
            href="/riwayatchat"
            className="text-blue-700 hover:text-blue-900 font-semibold transition"
          >
            Chat History
          </Link>
          <Link
            href="/chatai"
            className="text-blue-700 hover:text-blue-900 font-semibold transition"
          >
            Chat AI
          </Link>
        </div>
      </div>
    </nav>
  );
}
