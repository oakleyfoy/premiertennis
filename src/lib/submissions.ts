import { mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import nodemailer from "nodemailer";

export type InterestSubmission = {
  name: string;
  email: string;
  phone: string;
  city: string;
  role: string;
  interestType: string;
  message: string;
  submittedAt: string;
};

async function readExistingSubmissions(filePath: string) {
  try {
    const existing = await readFile(filePath, "utf8");
    return JSON.parse(existing) as InterestSubmission[];
  } catch {
    return [];
  }
}

async function writeSubmissionFile(
  directory: string,
  submission: InterestSubmission,
) {
  await mkdir(directory, { recursive: true });
  const filePath = path.join(directory, "interest-submissions.json");
  const existing = await readExistingSubmissions(filePath);

  await writeFile(
    filePath,
    JSON.stringify([...existing, submission], null, 2),
    "utf8",
  );

  return filePath;
}

export async function saveInterestSubmission(submission: InterestSubmission) {
  const preferredDir =
    process.env.SUBMISSIONS_DIR ??
    path.join(process.cwd(), "data", "submissions");

  try {
    return await writeSubmissionFile(preferredDir, submission);
  } catch {
    const fallbackDir = path.join(tmpdir(), "ptl-submissions");
    return writeSubmissionFile(fallbackDir, submission);
  }
}

function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.FORM_FROM_EMAIL;
  const to = process.env.FORM_TO_EMAIL;

  if (!host || !user || !pass || !from || !to) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";

  return {
    host,
    port,
    secure,
    user,
    pass,
    from,
    to,
  };
}

function buildEmailText(submission: InterestSubmission) {
  return [
    "New Premier Tennis League interest form submission",
    "",
    `Submitted: ${submission.submittedAt}`,
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone || "Not provided"}`,
    `City: ${submission.city || "Not provided"}`,
    `Role: ${submission.role || "Not provided"}`,
    `Interest Type: ${submission.interestType}`,
    "",
    "Message:",
    submission.message || "No message provided.",
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(submission: InterestSubmission) {
  const rows = [
    ["Submitted", submission.submittedAt],
    ["Name", submission.name],
    ["Email", submission.email],
    ["Phone", submission.phone || "Not provided"],
    ["City", submission.city || "Not provided"],
    ["Role", submission.role || "Not provided"],
    ["Interest Type", submission.interestType],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a;">
      <h2 style="margin-bottom: 16px;">New Premier Tennis League interest form submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 8px 12px; border: 1px solid #dbe3ee; font-weight: 700; width: 180px;">
                    ${escapeHtml(label)}
                  </td>
                  <td style="padding: 8px 12px; border: 1px solid #dbe3ee;">
                    ${escapeHtml(value)}
                  </td>
                </tr>`,
            )
            .join("")}
        </tbody>
      </table>
      <div style="margin-top: 20px;">
        <p style="font-weight: 700; margin-bottom: 8px;">Message</p>
        <p style="margin: 0; line-height: 1.7;">
          ${escapeHtml(submission.message || "No message provided.")}
        </p>
      </div>
    </div>
  `;
}

async function sendInterestSubmissionEmail(submission: InterestSubmission) {
  const config = getMailConfig();

  if (!config) {
    throw new Error("SMTP mail configuration is incomplete.");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: submission.email,
    subject: `PTL interest: ${submission.name} (${submission.interestType})`,
    text: buildEmailText(submission),
    html: buildEmailHtml(submission),
  });
}

export async function dispatchInterestSubmission(submission: InterestSubmission) {
  const mailConfig = getMailConfig();

  if (mailConfig) {
    await sendInterestSubmissionEmail(submission);
    return { mode: "email" as const };
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("SMTP mail configuration is required in production.");
  }

  const filePath = await saveInterestSubmission(submission);
  return { mode: "file" as const, filePath };
}
