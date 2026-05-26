"use client";

import { useState, type FormEvent } from "react";
import {
  indianStates,
  KARTA_ACCESS_EMAIL,
  programOptions,
  schoolTypes,
} from "@/lib/apply";

const inputClass =
  "w-full rounded-lg border border-karta-gray bg-white px-4 py-3 text-karta-text shadow-sm focus:border-karta-primary focus:outline-none focus:ring-1 focus:ring-karta-primary";

const labelClass = "mb-2 block text-sm font-medium text-karta-text";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-karta-primary/20 bg-karta-light p-8 text-center md:p-10">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-karta-primary text-2xl font-bold text-karta-text">
          ✓
        </div>
        <h3 className="text-2xl font-semibold text-karta-text">Application submitted</h3>
        <p className="mt-3 text-karta-muted">
          Thank you for applying to the Karta Access Program. Our team will review your
          application and contact you within 2–3 weeks.
        </p>
        <p className="mt-4 text-sm text-karta-muted">
          Questions? Email{" "}
          <a
            href={`mailto:${KARTA_ACCESS_EMAIL}`}
            className="font-medium text-karta-primary hover:underline"
          >
            {KARTA_ACCESS_EMAIL}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-karta-primary hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error ? (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      ) : null}

      <fieldset className="space-y-6">
        <legend className="text-sm font-semibold uppercase tracking-wide text-karta-primary">
          Personal details
        </legend>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              required
              className={inputClass}
              placeholder="Your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              required
              className={inputClass}
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              pattern="[0-9+\s()-]{10,15}"
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="dateOfBirth" className={labelClass}>
              Date of birth <span className="text-red-500">*</span>
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="gender" className={labelClass}>
              Gender <span className="text-red-500">*</span>
            </label>
            <select id="gender" name="gender" required className={inputClass}>
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other / Prefer not to say</option>
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="text-sm font-semibold uppercase tracking-wide text-karta-primary">
          Academic details
        </legend>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="state" className={labelClass}>
              State <span className="text-red-500">*</span>
            </label>
            <select id="state" name="state" required className={inputClass}>
              <option value="">Select your state</option>
              {indianStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="district" className={labelClass}>
              District / City <span className="text-red-500">*</span>
            </label>
            <input
              id="district"
              name="district"
              required
              className={inputClass}
              placeholder="Your district or city"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="currentClass" className={labelClass}>
              Current class / year <span className="text-red-500">*</span>
            </label>
            <select id="currentClass" name="currentClass" required className={inputClass}>
              <option value="">Select</option>
              <option value="XI">Class XI</option>
              <option value="XII">Class XII</option>
              <option value="UG1">Undergraduate Year 1</option>
              <option value="UG2">Undergraduate Year 2</option>
              <option value="UG3+">Undergraduate Year 3+</option>
            </select>
          </div>
          <div>
            <label htmlFor="schoolType" className={labelClass}>
              School type <span className="text-red-500">*</span>
            </label>
            <select id="schoolType" name="schoolType" required className={inputClass}>
              <option value="">Select school type</option>
              {schoolTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="school" className={labelClass}>
            School / institution name <span className="text-red-500">*</span>
          </label>
          <input
            id="school"
            name="school"
            required
            className={inputClass}
            placeholder="e.g. Jawahar Navodaya Vidyalaya, Patna"
          />
        </div>

        <div>
          <label htmlFor="program" className={labelClass}>
            Program applying for <span className="text-red-500">*</span>
          </label>
          <select id="program" name="program" required className={inputClass}>
            <option value="">Select a program</option>
            {programOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="text-sm font-semibold uppercase tracking-wide text-karta-primary">
          About you
        </legend>
        <div>
          <label htmlFor="guardianName" className={labelClass}>
            Parent / guardian name
          </label>
          <input
            id="guardianName"
            name="guardianName"
            className={inputClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="guardianPhone" className={labelClass}>
            Parent / guardian phone
          </label>
          <input
            id="guardianPhone"
            name="guardianPhone"
            type="tel"
            className={inputClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            Why do you want to join Karta? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            minLength={50}
            className={`${inputClass} resize-y`}
            placeholder="Tell us about your background, academic goals, and how Karta can support your journey (minimum 50 characters)..."
          />
        </div>
      </fieldset>

      <label className="flex items-start gap-3 text-sm text-karta-muted">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          className="mt-1 h-4 w-4 rounded border-karta-gray accent-[#fd9a00]"
        />
        <span>
          I understand that to become a Karta Scholar, I must first be an active member of
          the Karta Access Program. I confirm that the information provided is accurate.
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-full bg-karta-primary px-8 py-4 text-base font-semibold text-karta-text transition-colors hover:bg-karta-primary-dark disabled:opacity-60 md:w-auto"
      >
        {loading ? "Submitting..." : "Submit application"}
      </button>
    </form>
  );
}
