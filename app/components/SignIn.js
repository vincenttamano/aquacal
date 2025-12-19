"use client";

import { useState } from "react";

export default function SignIn({ visible, onClose, onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!visible) return null;

  function submit(e) {
    e.preventDefault();
    if (!username) return;
    // Simple client-side sign-in: persist username in localStorage
    try {
      localStorage.setItem("aqualcal_user", username);
    } catch (err) {
      console.error(err);
    }
    onSignIn?.(username);
    onClose?.();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-black">
        <h3 className="text-xl font-semibold mb-4 text-black">Sign In</h3>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2 text-black placeholder-black"
            placeholder="Username"
            autoFocus
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border rounded px-3 py-2 text-black placeholder-black"
            placeholder="Password"
          />
          <div className="flex gap-3 justify-end mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded bg-gray-200 text-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 rounded bg-gray-300 text-black"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
