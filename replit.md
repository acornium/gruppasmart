# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Landing page for SMART Development — an investment-focused real estate developer and asset manager.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite, Tailwind CSS, Framer Motion, react-hook-form

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── landing/            # SMART Development investment landing page
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Landing Page (artifacts/landing)

Investment landing page for SMART Development company (warehouse, logistics, and retail real estate developer/manager). Positioned to attract private investors, HNWI, and investment funds.

### Sections
1. **Hero** — Main headline about diversified investments, key stats (15+ years, 500k m², 20+ assets, 12-18% yield), CTA buttons
2. **About / Investment Model** — 4 feature cards describing investment approach
3. **Portfolio** — 6 asset cards (warehouses, logistics parks, industrial parks, retail, residential)
4. **For Investors** — 3 tiers: private (from 5M RUB), HNWI (from 50M), institutional (from 500M)
5. **Contact Form** — Full inquiry form with investor type, investment volume, request type; submits to `/api/contact`
6. **Footer** — Company info, nav links, disclaimer

### Tech
- React + Vite, Tailwind CSS with custom navy/gold color palette
- Framer Motion animations
- react-hook-form + Zod validation
- API: POST `/api/contact` (saves to PostgreSQL `contacts` table)

## Database Schema

### `contacts` table
- `id` (serial, PK)
- `name`, `email`, `phone`
- `investor_type` (enum: private/hnwi/fund/other)
- `investment_volume` (text)
- `message` (text)
- `request_type` (enum: invest/presentation/contact)
- `created_at` (timestamp)

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)
Express 5 API server. Routes: health check, contact form submission.

### `artifacts/landing` (`@workspace/landing`)
React + Vite investment landing page. All text in Russian.

### `lib/db` (`@workspace/db`)
Database layer using Drizzle ORM with PostgreSQL. Schema: contacts table.

### `lib/api-spec` (`@workspace/api-spec`)
OpenAPI 3.1 spec with endpoints: GET /healthz, POST /contact.

### `lib/api-zod` (`@workspace/api-zod`)
Generated Zod schemas: HealthCheckResponse, SubmitContactFormBody, SubmitContactFormResponse.

### `lib/api-client-react` (`@workspace/api-client-react`)
Generated React Query hooks: useHealthCheck, useSubmitContactForm.
