
# Template_JS

This repository is a template for building full-stack applications using SST (Serverless Stack) with separate `backend`, `frontend`, and `shared` workspaces. It includes TypeScript, testing with Vitest, linting with Biome, and sensible defaults for infrastructure and deployment.

## Quick start

1. Install dependencies (root uses npm workspaces):

```bash
npm install
```

2. Start local development (SST):

```bash
npm run dev
```

3. Run backend tests:

```bash
cd backend
npm test
```

## Important scripts

The root `package.json` exposes common scripts. Notable ones:

- `npm run prep` — install dependencies
- `npm run dev` — run `sst dev` for local development
- `npm run deploy` — deploy with SST
- `npm run remove` — remove deployed stacks
- `npm run lint` — run Biome checks and auto-fix where possible

There are also workspace-specific scripts in `backend`, `frontend`, and `shared`.

## Project structure (high level)

- `infra/` — SST infra entry (`infra/index.ts`).
- `backend/` — backend workspace (handlers, tests, services).
- `frontend/` — frontend workspace.
- `shared/` — shared types and utilities used by both frontend and backend.
- `logger/`, `utils/`, `types/`, `constants/` — repository-wide helpers.

## GitHub Copilot instructions

This repository includes a targeted Copilot instruction file to help AI assistants produce code consistent with the project's conventions and constraints. See `.github/COPILOT_INSTRUCTIONS.md` for guidance on style, testing, commit messages, and common patterns.

When using Copilot or any AI pair programmer with this repo, prefer small, focused suggestions and include tests for new behavior. Don't commit secrets or credentials. Follow the repo's linting and formatting rules before opening a PR.

## Contributing

1. Create a branch from `setup-init` (or the appropriate branch).
2. Run tests and linters locally.
3. Open a PR with a clear description and include tests for new logic.

## License

MIT
