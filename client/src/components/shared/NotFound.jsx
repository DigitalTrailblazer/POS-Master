import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-5xl font-bold mb-4 text-yellow-400">
        404
      </h1>

      <p className="text-lg text-blue-300 mb-6 max-w-sm text-center">
        The page you're trying to reach doesn't exist or might have been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
