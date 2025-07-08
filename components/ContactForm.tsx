'use client';

import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_64w1wgj',
        'template_vypns74',
        form.current,
        'b3O25tS8CBBQnEjbg'
      )
      .then(() => {
        setSent(true);
        setError(false);
        form.current?.reset();
      })
      .catch(() => {
        setError(true);
        setSent(false);
      });
  };

  return (
    <>
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
          className="p-3 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="p-3 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Send Message
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
