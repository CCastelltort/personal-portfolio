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
          className="p-3 rounded bg-white/30 border border-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-white/30 border border-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="p-3 rounded bg-white/30 border border-white"
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition"
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
