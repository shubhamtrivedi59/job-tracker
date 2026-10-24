@AGENTS.md

# Job Application Tracker: Next.js learning project

## About me
I'm Shubham, a frontend engineer with 7+ years in React, TypeScript and Angular. I'm comfortable with components, state, styling and testing on the frontend.
I have very little backend experience (servers, server-side APIs, databases, authentication, deployment). This project is how I learn all of that, end to end, using Next.js.

## How to teach me (important)
- Treat me as a beginner in backend, databases and deployment, but not in React. Skip React basics; explain everything server-side from first principles.
- Before each new concept: a short explanation of what it is, why it exists and how it fits the bigger picture. Use simple text diagrams where helpful.
- Relate backend ideas to frontend things I already know when possible.
- Guide, don't build for me. Give small steps, let me write the code, then review it. Only write code when I ask, and keep it small and explained.
- Pace: build-first. Keep theory to a few lines just before it is needed; skip non-critical warm-up exercises and quizzes (asked 2026-10-24).
- After each step, tell me how to check that it works (what to run, what to look at in the browser, terminal or database).
- When something goes wrong, help me read the error and debug it rather than just fixing it.
- At the end of each milestone: a short recap, 3–5 interview questions about it, and a suggested commit message.
- App Router only. Server Components by default; `'use client'` only when needed. Strict TypeScript. Validate all input with Zod.

## The app
A logged-in user tracks job applications: company, role, status, recruiter, email used, whether the employer supports work permits, and notes. A dashboard shows the pipeline (saved, applied, screening, interview, offer, rejected).

## Stack
Next.js (App Router) · TypeScript · Tailwind CSS · PostgreSQL · Prisma · Auth.js · Zod · Vitest · Playwright · GitHub Actions · Vercel · Neon

## Learning path
- **M0 How the web works**: client vs server, HTTP request/response, methods, status codes, headers, JSON, APIs, server rendering. Exercise: inspect requests in the Network tab and explain them.
- **M1 Next.js project and pages**: App Router structure, layouts, pages, dynamic routes, Server vs Client Components. Build `/applications` and `/applications/[id]` with hard-coded data, plus a nav bar.
- **M2 Databases from zero**: tables, keys, types, SQL basics, relations, ORM/Prisma, schema, migrations, seeding, `.env`. Build: Postgres (Neon or Docker), Prisma schema, first migration, seed, Prisma Studio, pages read from DB. Exercise: raw SQL against the same data.
- **M3 Writing data**: form submission, Server Actions, Zod validation server-side, error handling, `useActionState`, `revalidatePath`, caching basics. Build create/edit/delete.
- **M4 Building an API**: REST, Route Handlers, request parsing, status codes, JSON vs files, API route vs Server Action. Build `GET/POST /api/applications`, `GET /api/applications/export` (CSV). Test with curl.
- **M5 Auth**: authn vs authz, sessions vs JWTs, cookies, OAuth, middleware, row-level ownership. Build Auth.js + GitHub login, `User` 1→many `Application`, protect `/applications` and `/dashboard`.
- **M6 Dashboard**: count / group by in the DB, server data → Client Components. Stats cards + pipeline chart. Optional Kanban.
- **M7 Testing and CI**: unit/integration/e2e, test DBs, CI. Vitest + one Playwright test + GitHub Actions (lint, typecheck, tests).
- **M8 Deployment**: build vs runtime, environments, prod env vars, hosted DB, prod migrations, domains/HTTPS, logs. Deploy to Vercel + Neon, GitHub OAuth for prod, README with screenshots and "what I learned".

## Data model (target by M5)
```
User
  id, name, email, image, applications Application[]

Application
  id            String   @id @default(cuid())
  company       String
  role          String
  jobUrl        String?
  status        Status   @default(SAVED)   // SAVED | APPLIED | SCREENING | INTERVIEW | OFFER | REJECTED
  appliedAt     DateTime?
  salaryRange   String?
  recruiterName String?
  emailUsed     String?
  permitSupport Permit   @default(UNKNOWN) // UNKNOWN | YES | NO
  notes         String?
  userId        String   // relation to User
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
```

## Environment notes
- Project lives at `~/Desktop/Learning/job-tracker` (Next.js 16.4.3, created 2026-10-24, git initialised by create-next-app).
- Node: dev server runs on `/usr/local/bin/node` v24. nvm is also installed with default 18.20 — if `node -v` shows 18, run `nvm alias default system` (or `nvm use system`). No Docker: use Neon for Postgres in M2.

## Current status
Milestone 0: done (2026-10-24). Covered: client vs server, HTTP request/response, GET/POST/DELETE, 200/201/404, headers (Accept, Content-Type), SSR vs CSR (JS-disabled experiment), curl.
Milestone 1: in progress. Done: `/applications` list and `/applications/[id]` detail (+ `loading.tsx`) from hard-coded data in `src/lib/applications.ts`. Next: nav bar in `layout.tsx`, then M1 recap. Note: `cacheComponents: true` is on in next.config.ts, so runtime data (params, cookies) must sit under Suspense/loading.tsx.
Update these lines as milestones are completed.
