# GitHub Copilot / AI Assistant Instructions for Template_JS

This file provides guidance for GitHub Copilot and other AI pair-programming assistants when making suggestions or generating code for this repository. Follow these rules to keep contributions consistent, safe, and easy to review.

## Goals

- Keep the codebase TypeScript-first, typed, and readable.
- Prefer explicit, small changes with accompanying tests.
- Avoid introducing new runtime dependencies unless necessary.
- Do not add secrets, credentials, or environment-specific values to the code.

## Project conventions

- Type: ES modules (package.json `type: "module"`).
- Linting & formatting: Biome is used for checks and autofixes.
- Testing: Vitest is used in `backend` (and workspace). Provide tests for new logic.
- Workspaces: Root uses npm workspaces — backend, frontend, shared.

## Files & locations

- Put shared types and utilities in `shared/` and import them from packages when appropriate.
- Backend handlers and services belong in `backend/`.
- Frontend code goes into `frontend/`.
- Infrastructure code lives in `infra/`.

## Coding style

- Prefer small, focused PRs. Keep changes atomic and limited to the feature or fix.
- Use TypeScript types and Zod for runtime validation when user input or external data is involved.
- Keep functions pure where possible and avoid side effects in library code.
- Document non-obvious behavior with a short comment and/or tests.

## Testing

- Always include at least one unit test for new functions or logic.
- Use Vitest test patterns consistent with the repo. Keep tests fast and deterministic.

## Commit messages and PR descriptions

- Use conventional commits style where possible (e.g., `feat:`, `fix:`, `chore:`).
- Provide a short description and motivation for the change in PR body.

## Security and secrets

- Never suggest adding secrets, API keys, or credentials in code. Use environment variables and the project's config resolver (`utils/configResolver.ts`) patterns.

## Example prompts for Copilot

- "Add a unit test for `src/utils/format.ts` that asserts that empty input returns an empty string and that whitespace is trimmed." 
- "Create a small helper in `shared/` that safely parses JSON and returns a zod-validated type or throws a clear error." 

## What to avoid

- Large refactors without tests and a clear plan.
- Adding non-essential dependencies.
- Making infra changes (SST stack changes) without a matching dev/test plan.

## Reviewer checklist (for maintainers)

- Changes are typed and include tests.
- Linting passes (run `npm run lint`).
- No secrets included.
- Commit messages follow conventions.

If anything here is unclear, open an issue in the repository so maintainers can update this guidance.
