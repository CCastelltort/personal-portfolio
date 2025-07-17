'use client';

import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

  if (
    !form.current ||
    !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
    !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  ) {
    console.error('Missing EmailJS configuration or form ref.');
    setError(true);
    return;
  }

  setLoading(true);

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSent(true);
      setError(false);
      form.current?.reset();
    })
    .catch(() => {
      setError(true);
      setSent(false);
    })
    .finally(() => setLoading(false));
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-white text-center mb-4">
        Submit this form to send me an email!
      </h2>
      
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-xl mx-auto mt-8 text-white"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-white/30 border border-white hover:bg-white/50"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-white/30 border border-white hover:bg-white/50 "
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="p-3 rounded bg-white/30 border border-white hover:bg-white/50"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {sent && (
        <p className="text-green-400 text-center mt-4">
          ✅ Message sent successfully!
        </p>
      )}
      {error && (
        <p className="text-red-400 text-center mt-4">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </>
  );
};

export default ContactForm;
