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

type SmtpMailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

type MicrosoftMailConfig = {
  clientId: string;
  clientSecret: string;
  tenantId: string;
  from: string;
  to: string;
};

type MailPayload = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

function getSharedMailboxSettings() {
  const from = process.env.MAIL_FROM_EMAIL ?? process.env.FORM_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL ?? process.env.FORM_TO_EMAIL;

  if (!from || !to) {
    return null;
  }

  return { from, to };
}

function getMicrosoftMailConfig(): MicrosoftMailConfig | null {
  const shared = getSharedMailboxSettings();
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
  const tenantId = process.env.MICROSOFT_TENANT_ID;

  if (!shared || !clientId || !clientSecret || !tenantId) {
    return null;
  }

  return {
    clientId,
    clientSecret,
    tenantId,
    from: shared.from,
    to: shared.to,
  };
}

function getSmtpMailConfig(): SmtpMailConfig | null {
  const shared = getSharedMailboxSettings();
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!shared || !host || !user || !pass) {
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
    from: shared.from,
    to: shared.to,
  };
}

function buildInternalEmailText(submission: InterestSubmission) {
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

function buildInternalEmailHtml(submission: InterestSubmission) {
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

function buildAutoReplyText(submission: InterestSubmission) {
  return [
    `Hi ${submission.name},`,
    "",
    "Thanks for reaching out to Premier Tennis League.",
    "",
    "This is an automatic confirmation that your inquiry was received. PTL will review your message and follow up as launch details, team-building opportunities, and market information develop.",
    "",
    `Interest Type: ${submission.interestType}`,
    `City: ${submission.city || "Not provided"}`,
    "",
    "If you need to add anything else, reply to this email and it will go straight to the PTL inbox.",
    "",
    "Premier Tennis League",
  ].join("\n");
}

function buildAutoReplyHtml(submission: InterestSubmission) {
  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a;">
      <h2 style="margin-bottom: 16px;">Thanks for contacting Premier Tennis League</h2>
      <p style="margin: 0 0 16px; line-height: 1.7;">Hi ${escapeHtml(submission.name)},</p>
      <p style="margin: 0 0 16px; line-height: 1.7;">
        This is an automatic confirmation that PTL received your inquiry. The team will review your message and follow up as launch details, team-building opportunities, and market information develop.
      </p>
      <div style="margin: 20px 0; padding: 16px; border: 1px solid #dbe3ee; background: #f8fafc; max-width: 640px;">
        <p style="margin: 0 0 8px; font-weight: 700;">What we received</p>
        <p style="margin: 0; line-height: 1.7;">Interest Type: ${escapeHtml(submission.interestType)}</p>
        <p style="margin: 0; line-height: 1.7;">City: ${escapeHtml(submission.city || "Not provided")}</p>
      </div>
      <p style="margin: 0; line-height: 1.7;">
        If you need to add anything else, simply reply to this email and it will go straight to the PTL inbox.
      </p>
      <p style="margin: 20px 0 0; line-height: 1.7;">Premier Tennis League</p>
    </div>
  `;
}

async function fetchMicrosoftAccessToken(config: MicrosoftMailConfig) {
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const response = await fetch(
    `https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    },
  );

  if (!response.ok) {
    throw new Error("Unable to authenticate with Microsoft Graph.");
  }

  const result = (await response.json()) as { access_token?: string };

  if (!result.access_token) {
    throw new Error("Microsoft Graph access token was missing.");
  }

  return result.access_token;
}

async function sendMicrosoftMail(
  config: MicrosoftMailConfig,
  payload: MailPayload,
) {
  const accessToken = await fetchMicrosoftAccessToken(config);
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(config.from)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: payload.subject,
          body: {
            contentType: "HTML",
            content: payload.html,
          },
          toRecipients: [
            {
              emailAddress: {
                address: payload.to,
              },
            },
          ],
          replyTo: payload.replyTo
            ? [
                {
                  emailAddress: {
                    address: payload.replyTo,
                  },
                },
              ]
            : undefined,
        },
        saveToSentItems: true,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Microsoft Graph sendMail request failed.");
  }
}

async function sendInterestSubmissionEmail(submission: InterestSubmission) {
  const config = getSmtpMailConfig();

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
    text: buildInternalEmailText(submission),
    html: buildInternalEmailHtml(submission),
  });

  await transporter.sendMail({
    from: config.from,
    to: submission.email,
    replyTo: config.to,
    subject: "We received your Premier Tennis League inquiry",
    text: buildAutoReplyText(submission),
    html: buildAutoReplyHtml(submission),
  });
}

export async function dispatchInterestSubmission(submission: InterestSubmission) {
  const microsoftConfig = getMicrosoftMailConfig();
  const smtpConfig = getSmtpMailConfig();

  if (microsoftConfig) {
    await sendMicrosoftMail(microsoftConfig, {
      to: microsoftConfig.to,
      replyTo: submission.email,
      subject: `PTL interest: ${submission.name} (${submission.interestType})`,
      text: buildInternalEmailText(submission),
      html: buildInternalEmailHtml(submission),
    });

    await sendMicrosoftMail(microsoftConfig, {
      to: submission.email,
      replyTo: microsoftConfig.to,
      subject: "We received your Premier Tennis League inquiry",
      text: buildAutoReplyText(submission),
      html: buildAutoReplyHtml(submission),
    });

    return { mode: "microsoft-email" as const };
  }

  if (smtpConfig) {
    await sendInterestSubmissionEmail(submission);
    return { mode: "smtp-email" as const };
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("Email configuration is required in production.");
  }

  const filePath = await saveInterestSubmission(submission);
  return { mode: "file" as const, filePath };
}
