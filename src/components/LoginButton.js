"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 relative bottom-36 ms-10"
    >
      Sign in with Google
    </button>
  );
}
