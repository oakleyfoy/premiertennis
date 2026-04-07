import { NextResponse } from "next/server";

import { dispatchInterestSubmission } from "@/lib/submissions";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (clean(body.company)) {
      return NextResponse.json({ ok: true });
    }

    const submission = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      city: clean(body.city),
      role: clean(body.role),
      interestType: clean(body.interestType),
      message: clean(body.message),
      submittedAt: new Date().toISOString(),
    };

    if (!submission.name || submission.name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!submission.email || !isValidEmail(submission.email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!submission.interestType) {
      return NextResponse.json(
        { ok: false, error: "Please choose what you are contacting PTL about." },
        { status: 400 },
      );
    }

    await dispatchInterestSubmission(submission);

    return NextResponse.json({
      ok: true,
      message:
        "Thanks for reaching out. PTL has received your message and can follow up as launch details are finalized.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong while submitting the form. Please try again or email info@tennispl.com directly.",
      },
      { status: 500 },
    );
  }
}
