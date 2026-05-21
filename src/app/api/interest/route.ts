import { NextResponse } from "next/server";

import { dispatchInterestSubmission } from "@/lib/submissions";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function verifyRecaptchaToken(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");

  if (!secretKey) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("reCAPTCHA is not configured.");
    }

    return { ok: true as const };
  }

  if (!token) {
    return {
      ok: false as const,
      error: "Please complete the security check and try again.",
    };
  }

  const payload = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: payload,
  });

  if (!response.ok) {
    throw new Error("Unable to verify reCAPTCHA.");
  }

  const result = (await response.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
  };

  if (!result.success) {
    return {
      ok: false as const,
      error: "Security verification failed. Please try again.",
    };
  }

  if (typeof result.score === "number" && result.score < minScore) {
    return {
      ok: false as const,
      error: "Security verification score was too low. Please try again.",
    };
  }

  if (result.action && result.action !== "interest_form") {
    return {
      ok: false as const,
      error: "Security verification did not match the form action.",
    };
  }

  return { ok: true as const };
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
      recaptchaToken: clean(body.recaptchaToken),
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

    const recaptchaCheck = await verifyRecaptchaToken(submission.recaptchaToken);

    if (!recaptchaCheck.ok) {
      return NextResponse.json(
        { ok: false, error: recaptchaCheck.error },
        { status: 400 },
      );
    }

    await dispatchInterestSubmission(submission);

    return NextResponse.json({
      ok: true,
      message:
        "Thanks for reaching out. PTL received your message and sent a confirmation email with next steps.",
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
