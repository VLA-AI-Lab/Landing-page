'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your API / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
          <svg
            className="size-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-500 text-sm">
          Thank you for reaching out. We&rsquo;ll get back to you within 48
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            required
            className="block w-full rounded-md border border-gray-300 bg-gray-50 text-gray-900 shadow-sm py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD] focus:border-[#7F77DD]"
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            required
            className="block w-full rounded-md border border-gray-300 bg-gray-50 text-gray-900 shadow-sm py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD] focus:border-[#7F77DD]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="block w-full rounded-md border border-gray-300 bg-gray-50 text-gray-900 shadow-sm py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD] focus:border-[#7F77DD]"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="block w-full rounded-md border border-gray-300 bg-gray-50 text-gray-900 shadow-sm py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD] focus:border-[#7F77DD]"
        >
          <option>General Inquiry</option>
          <option>Research Collaboration</option>
          <option>Student Application Inquiry</option>
          <option>Media Request</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="block w-full rounded-md border border-gray-300 bg-gray-50 text-gray-900 shadow-sm py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F77DD] focus:border-[#7F77DD]"
        />
      </div>

      <div className="flex items-start">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#7F77DD] focus:ring-[#7F77DD]"
        />
        <div className="ml-3 text-sm">
          <label htmlFor="privacy" className="font-medium text-gray-700">
            Privacy Policy
          </label>
          <p className="text-gray-500">
            I agree to the processing of my personal data.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 rounded-md shadow-sm text-sm font-bold text-white bg-[#7F77DD] hover:bg-[#6860C7] transition-colors uppercase tracking-wide"
      >
        Send Message
      </button>
    </form>
  );
}
