import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-200 py-8 border-t reveal">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: About */}
        <div>
          <h3 className="font-bold text-lg text-blue-800 mb-2">About AquaCal</h3>
          <p className="text-blue-700 text-sm">
            AquaCal helps you stay hydrated daily with an easy-to-use tracker, reminders, and progress charts.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-lg text-blue-800 mb-2">Quick Links</h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/watertracker" className="hover:underline">Tracker</a></li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h3 className="font-bold text-lg text-blue-800 mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-blue-700 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-black text-sm text-center">
        © {new Date().getFullYear()} AquaCal. All rights reserved.
      </div>
    </footer>
  );
}
