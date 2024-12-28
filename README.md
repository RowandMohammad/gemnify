```markdown
# Gemnify

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=vercel&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-payments-blueviolet?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](./LICENSE)

**Gemnify** is a full-stack SaaS application that **supercharges developer collaboration** on GitHub repositories through AI-driven features. Built with **Next.js 15**, **Google Gemini AI**, **Assembly AI**, **Stripe**, and **Clerk** authentication, Gemnify provides end-to-end functionality, including commit summaries, repository-specific Q&A, meeting transcripts, and a **credit-based** payment system.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Project Architecture](#project-architecture)  
4. [Prerequisites & Setup](#prerequisites--setup)  
5. [Environment Variables](#environment-variables)  
6. [Getting Started](#getting-started)  
7. [Usage](#usage)  
8. [Deployment](#deployment)  
9. [Project Structure](#project-structure)  
10. [Contributing](#contributing)  
11. [License](#license)  
12. [Contact](#contact)  

---

## Features

1. **AI-Powered GitHub Repository Insights**  
   - **Commit Summaries**: Automatically summarizes commit histories using the Google Gemini LLM.  
   - **Repo Q&A**: Ask repository-specific questions, reference relevant files, and receive accurate, context-rich answers.

2. **Collaboration Tools**  
   - **Meeting Transcripts**: Upload team meeting audio files; transcripts and summaries are generated via Assembly AI.  
   - **Team Management**: Invite teammates and manage multiple members in a project. Keep track of code changes seamlessly.

3. **Payment & Credits**  
   - **Stripe Integration**: Users can purchase credits. Each repository file or transcription costs a set number of credits.  
   - **Credit Balance**: Real-time updates to user credits after indexing files or uploading meetings.

4. **Authentication & Security**  
   - **Clerk** for user registration and login (Google OAuth, email/password, etc.).  
   - Protected routes ensure only authenticated users can create or archive projects, manage credits, and handle meeting uploads.

5. **Modern UI & Theming**  
   - **Shadcn/UI** + **Tailwind CSS** integration for a polished, component-based design system.

6. **Database & Deployment**  
   - **NeonDB (PostgreSQL)** for storing user data, project details, vector embeddings, and credit balances.  
   - **pgvector** extension for retrieval-augmented generation (RAG) queries on codebase & transcripts.  
   - Deployed on **Vercel** for seamless hosting and scaling.

---

## Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/), [React 18](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/)  
- **Backend**: [Next.js App Router](https://nextjs.org/docs/app), [Clerk](https://clerk.com/), [Stripe](https://stripe.com/), [Assembly AI](https://www.assemblyai.com/), [Google Gemini AI](https://ai.google/), [Prisma](https://www.prisma.io/)  
- **Database**: [NeonDB (PostgreSQL)](https://neon.tech/), [pgvector](https://github.com/pgvector/pgvector)  
- **Authentication**: [Clerk.js](https://clerk.com/)  
- **Deployment**: [Vercel](https://vercel.com/)  
- **Version Control & CI/CD**: GitHub, GitHub Actions  

---

## Project Architecture

```

```

---

## Prerequisites & Setup

1. **Node.js & Package Manager**  
   - Install [Node.js](https://nodejs.org/en/) (v16+).  
   - You can use `npm`, `pnpm`, or [bun](https://bun.sh/).

2. **Database**  
   - **NeonDB** for PostgreSQL.  
   - Enable **pgvector** extension for vector embeddings.

3. **API Keys**  
   - **Clerk**: Obtain your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.  
   - **Stripe**: Get your `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, and set up a webhook.  
   - **Google Gemini AI**: Obtain your `GEMINI_API_KEY`.  
   - **Assembly AI**: Obtain your `ASSEMBLYAI_API_KEY`.  
   - **Firebase** (optional, if storing meeting audio in Firebase Storage).

---

## Environment Variables

Create a `.env` (or `.env.local`) with the following:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Database
DATABASE_URL=postgresql://<USER>:<PASSWORD>@<HOST>/<DB_NAME>

# Google Gemini
GEMINI_API_KEY=...

# Assembly AI
ASSEMBLYAI_API_KEY=...

# Firebase (if used)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
# etc.

# Next.js
NEXT_PUBLIC_APP_URL=https://<your-production-domain>.vercel.app
```

---

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/gemnify.git
   cd gemnify
   ```

2. **Install Dependencies**

   ```bash
   # Using npm, pnpm, or bun
   npm install
   # pnpm install
   # bun install
   ```

3. **Setup `.env`**  
   - Copy `.env.example` to `.env` and fill in the required values.

4. **Prisma Migration**

   ```bash
   npx prisma db push
   # or: npx prisma migrate dev
   ```

5. **Run Development Server**

   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Usage

1. **Sign Up / Sign In**  
   - Powered by Clerk (Google OAuth, etc.).

2. **Create a Project**  
   - Provide a GitHub repo URL (public or private).  
   - Gemnify indexes your repository (files cost credits).

3. **Ask Questions (Repo Q&A)**  
   - Powered by Google Gemini.  
   - Saves Q&As for future reference.

4. **Meeting Upload**  
   - Upload `.mp3` meeting recordings.  
   - Assembly AI processes transcripts & issues.

5. **Invite Team Members**  
   - Share an invite link; collaborators can sign in and join your project.

6. **Archive Projects**  
   - Projects can be archived to hide them from the dashboard.

7. **Buy Credits**  
   - Stripe checkout integration.  
   - Each file or meeting transcript deducts credits.

---

## Deployment

### Vercel

1. **Push to GitHub**  
   - Connect your repo to Vercel.  
   - Configure environment variables in the Vercel dashboard.

2. **Stripe Webhook**  
   - In Stripe, set your webhook to `https://<your-vercel-domain>/api/webhook/stripe`.  
   - Copy the signing secret to `STRIPE_WEBHOOK_SECRET`.

3. **Done**  
   - Enjoy automatic SSL and CI/CD from Vercel.

---

## Project Structure

```

```

---

## Contributing

1. **Fork & Branch**  
   - Fork the repo and create a new branch for your feature/fix.

2. **Make Changes & Test**  
   - Ensure everything runs smoothly locally.

3. **Open a Pull Request**  
   - Provide clear info on what changed, how to test, and why.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

**Author**: [Rowand Mohammad](https://rowandsmohammad.com)  

Feel free to reach out with questions or suggestions!
```
