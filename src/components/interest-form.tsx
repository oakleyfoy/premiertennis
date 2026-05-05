"use client";

import { useState } from "react";

type FormPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  role: string;
  interestType: string;
  message: string;
  company: string;
};

const initialState: FormPayload = {
  name: "",
  email: "",
  phone: "",
  city: "",
  role: "",
  interestType: "",
  message: "",
  company: "",
};

export function InterestForm() {
  const [form, setForm] = useState<FormPayload>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setMessage(result.error ?? "Unable to submit the form right now.");
        return;
      }

      setStatus("success");
      setMessage(result.message ?? "Your message has been sent.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage(
        "Unable to submit the form right now. Please try again or email info@tennispl.com directly.",
      );
    }
  }

  function updateField<K extends keyof FormPayload>(field: K, value: FormPayload[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[#111827] outline-none transition placeholder:text-slate-400 focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/35"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[#111827] outline-none transition placeholder:text-slate-400 focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/35"
            placeholder="you@example.com"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[#111827] outline-none transition placeholder:text-slate-400 focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/35"
            placeholder="Optional"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">City</span>
          <input
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className="w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[#111827] outline-none transition placeholder:text-slate-400 focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/35"
            placeholder="Where are you based?"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Role</span>
          <select
            value={form.role}
            onChange={(event) => updateField("role", event.target.value)}
            className="w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[#111827] outline-none transition focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/35"
          >
            <option value="">Select one</option>
            <option value="captain">Captain</option>
            <option value="player">Player</option>
            <option value="facility">Facility or club</option>
            <option value="partner">Partner or sponsor</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Interest Type</span>
          <select
            required
            value={form.interestType}
            onChange={(event) => updateField("interestType", event.target.value)}
            className="w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[#111827] outline-none transition focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/35"
          >
            <option value="">Select one</option>
            <option value="start-team">Start a team</option>
            <option value="pilot-city">Pilot city interest</option>
            <option value="captain-info">Captain questions</option>
            <option value="facility-partnership">Facility or partnership</option>
            <option value="general">General inquiry</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-700">Message</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full rounded-xl border border-[#E5E1D8] bg-white px-4 py-3 text-[#111827] outline-none transition placeholder:text-slate-400 focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/35"
          placeholder="Tell PTL a little about your interest, city, team, or partnership idea."
        />
      </label>

      <div className="hidden">
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-ptl-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Submitting..." : "Submit Interest"}
        </button>

        {message ? (
          <p
            className={`text-sm leading-6 ${
              status === "success" ? "text-[#1F2933]" : "text-rose-500"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
