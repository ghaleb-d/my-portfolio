"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { FaPaperPlane } from "react-icons/fa";
import { InlineWidget } from "react-calendly";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });
import {
    validateName,
    validateEmail,
    validateSubject,
    validateMessage,
  } from "../../utils/validation";
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };
  // handle submit for the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!validateName(form.name)) {
      newErrors.name = "Name may only contain letters and spaces.";
      valid = false;
    }
    if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }
    if (!validateSubject(form.subject)) {
        newErrors.subject = "Subject cannot be empty.";
        valid = false;
      }
      if (!validateMessage(form.message)) {
        newErrors.message = "Message cannot be empty.";
        valid = false;
      }

    setErrors(newErrors);
    if (!valid) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Mail API error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className={`relative min-h-screen flex flex-col ${montserrat.className}`}>
      <Navigation />
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 pt-16 space-y-16">
          <section className="max-w-7xl mx-auto bg-gray-50 px-4 py-16">
            <h2
              className={`
                flex items-center justify-center gap-3
                text-4xl md:text-5xl font-bold text-center mb-16
                tracking-wide text-black leading-relaxed py-2
              `}
            >
              <FaPaperPlane className="w-6 h-6 text-gray-900" />
              Contact Me
            </h2>

            {/* feedback */}
            {status === "success" && (
              <div className="max-w-lg mx-auto mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been sent.
              </div>
            )}
            {status === "error" && (
              <div className="max-w-lg mx-auto mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Oops! Something went wrong. Please try again.
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="max-w-lg mx-auto bg-white border border-gray-200 rounded-2xl p-6 mb-12 shadow-sm"
            >
              {/* Name */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  placeholder="Your name"
                  onChange={handleChange}
                  className={`
                    w-full border rounded-md p-2 focus:outline-none focus:ring-2
                    ${errors.name
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-gray-400"}
                  `}
                />
                {errors.name && (
                  <p className="mt-1 text-red-600 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className={`
                    w-full border rounded-md p-2 focus:outline-none focus:ring-2
                    ${errors.email
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-gray-400"}
                  `}
                />
                {errors.email && (
                  <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Subject</label>
                <input
                  name="subject"
                  placeholder="Message subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`
                    w-full border rounded-md p-2 focus:outline-none focus:ring-2
                    ${errors.subject
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-gray-400"}
                  `}
                />
                {errors.subject && (
                  <p className="mt-1 text-red-600 text-sm">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  placeholder="Enter your message here"
                  onChange={handleChange}
                  className={`
                    w-full border rounded-md p-2 focus:outline-none focus:ring-2
                    ${errors.message
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-gray-400"}
                  `}
                />
                {errors.message && (
                  <p className="mt-1 text-red-600 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition disabled:opacity-50"
              >
                <FaPaperPlane />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Calendly */}
            <div className="max-w-lg mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Book a Meeting
              </h3>
              <InlineWidget url="https://calendly.com/your-username/30min" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
