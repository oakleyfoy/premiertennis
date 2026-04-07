# Premier Tennis League Site

This project is a redesigned `Next.js` marketing site for Premier Tennis League. It is separate from the current live WordPress site until you choose to deploy it.

## Local Preview

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

Viewing the site locally does not affect the current live website at `https://tennispl.com`.

## Form Behavior

The built-in interest form posts to `src/app/api/interest/route.ts`.

- In production, the form can send submissions by email using SMTP credentials
- Create a local `.env.local` or production env vars using the keys in `.env.example`
- In local development, if SMTP is not configured, submissions fall back to `data/submissions/interest-submissions.json`
- That submissions directory is ignored by git

### SMTP Environment Variables

```bash
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
FORM_FROM_EMAIL=website@tennispl.com
FORM_TO_EMAIL=info@tennispl.com
```

## Production Checks

```bash
npm run lint
npm run build
```

## Deployment Notes

This project is ready to deploy as a standalone Next.js app. Replacing the current live site and connecting the domain will still require:

- a Node-capable host for the Next.js app
- access to the domain or DNS provider for `tennispl.com`
- production SMTP credentials for the contact form

### Replacing the Current WordPress Site

If you only have standard WP Engine WordPress hosting, the recommended path is:

1. Deploy this project to a Node-capable host such as Vercel.
2. Add the SMTP environment variables above.
3. Test the form and all pages on the staging URL.
4. Update DNS for `tennispl.com` to point to the new Next.js host.
5. Remove or retire the old WordPress site once the new site is confirmed live.
