"use client";

import { useState } from "react";
import Link from "next/link";
import SignIn from "./SignIn";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [signInVisible, setSignInVisible] = useState(false); // sign-in modal

  const linkClasses =
    "text-sky-100 hover:text-white font-semibold tracking-wide transition-colors duration-200";

  const signInButtonClasses =
    "bg-white text-sky-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-sky-100 transition";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-sky-700 to-sky-600 px-6 py-4 shadow-md backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-white flex items-center gap-2 tracking-tight"
            aria-label="AquaCal home"
          >
            <span className="drop-shadow-sm">💧</span>
            <span>AquaCal</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            <li><Link href="/" className={linkClasses}>Home</Link></li>
            <li><Link href="/WaterTracker" className={linkClasses}>Tracker</Link></li>
            <li><Link href="/About" className={linkClasses}>About</Link></li>
            <li><Link href="/Contact" className={linkClasses}>Contact</Link></li>

            {/* Sign In Button */}
            <li>
              <button
                className={signInButtonClasses}
                onClick={() => setSignInVisible(true)}
              >
                Sign In
              </button>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-[3px] bg-white rounded" />
            <span className="w-6 h-[3px] bg-white rounded" />
            <span className="w-6 h-[3px] bg-white rounded" />
          </button>

          {/* Mobile Menu */}
          {open && (
            <div className="absolute top-full mt-2 right-6 bg-gradient-to-br from-sky-700 to-sky-600 rounded-2xl p-6 md:hidden shadow-xl border border-white/10 backdrop-blur z-[999]">
              <ul className="flex flex-col gap-4 text-lg">
                <li><Link href="/" className={linkClasses}>Home</Link></li>
                <li><Link href="/WaterTracker" className={linkClasses}>Tracker</Link></li>
                <li><Link href="/About" className={linkClasses}>About</Link></li>
                <li><Link href="/Contact" className={linkClasses}>Contact</Link></li>
                <li>
                  <button
                    className={signInButtonClasses}
                    onClick={() => setSignInVisible(true)}
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Sign In Modal */}
      <SignIn
        visible={signInVisible}
        onClose={() => setSignInVisible(false)}
        onSignIn={(username) => console.log("Signed in as:", username)}
      />
    </>
  );
}
