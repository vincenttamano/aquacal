"use client";

import { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-8 bg-blue-50 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 reveal">Contact Us</h1>

        {submitted && (
          <p className="mb-4 text-green-700 font-semibold">
            Thank you! Your message has been sent.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-lg shadow reveal"
        >
          {/* Name */}
          <label htmlFor="name" className="text-blue-700 font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border border-blue-300 rounded text-blue-700"
          />

          {/* Email */}
          <label htmlFor="email" className="text-blue-700 font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border border-blue-300 rounded text-blue-700"
          />

          {/* Message */}
          <label htmlFor="message" className="text-blue-700 font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 border border-blue-300 rounded resize-none text-blue-700"
            rows={5}
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
