# sales-script - Technology Observations

> Observed technologies and patterns in this codebase. Documents WHAT is used, not WHY it was chosen.

**Generated:** 2026-06-24
**Note:** Decision rationale cannot be extracted from code. For architectural decisions, consult team documentation or ADRs if available.

---

## Framework & Language

**Observed:** React 18.3 + TypeScript 5.6

**Evidence:**
- `package.json` deps: `react`/`react-dom` `^18.3.1`; devDeps `typescript ^5.6.3`, `@types/react*`
- `src/main.tsx` uses `ReactDOM.createRoot(...).render(<React.StrictMode>...)` (React 18 API)
- `tsconfig.json`: `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `jsx: react-jsx`

**Notable Patterns:**
- Function components only; hooks (`useState`, `useMemo`). No class components.
- Strict TS with unused-symbol checks — dead imports/params fail the build.

---

## Build & Tooling

**Observed:** Vite 5 + pnpm

**Evidence:**
- `vite.config.ts` with `@vitejs/plugin-react`; `base: "/meet/"` (GitHub Pages subpath)
- `pnpm-lock.yaml` present; `package.json` `pnpm.onlyBuiltDependencies: ["esbuild"]`
- Build script `"build": "tsc && vite build"` — type-check then bundle

**Configuration:** `vite.config.ts`, `tsconfig.json`

---

## State Management

**Observed:** Local React state only (no library)

**Evidence:**
- No Redux/Zustand/MobX/Context in `package.json` or source
- App-level state is a single `useState<PathStep[]>` in `src/App.tsx`
- Components hold isolated local UI state (`Blocks` filter/open, `SayCard` copied flag)

**Notable Patterns:**
- Decision-tree traversal is a derived/immutable-update pattern over a `path` array.

---

## Styling

**Observed:** Single global CSS stylesheet

**Evidence:**
- One `src/styles.css` (~10.8 KB) imported once in `src/main.tsx`
- Components use `className` strings, often template-literal toggled (`active`/`open`)
- No CSS modules, Tailwind, or CSS-in-JS

---

## Routing

**Observed:** None

**Evidence:**
- No `react-router` (or similar) dependency
- Navigation is a `View` union + `useState` with inline `{view === "..." && ...}` blocks in `App.tsx`

---

## Data / Content

**Observed:** Static typed TypeScript datasets (no backend)

**Evidence:**
- No fetch/axios/API client; no server code
- Content lives in `src/data/script.ts` (graph), `tips.ts`, `ambax.ts` (card arrays)
- `script.ts` is a hand-maintained `Record<string, ScriptNode>` of ~25 nodes (865 lines)

---

## Testing

**Observed:** None configured

**Evidence:**
- No test runner (vitest/jest) in `package.json`; no test files
- `tsc` (via `pnpm build`) is the only automated correctness gate

---

## Deployment

**Observed:** GitHub Pages via GitHub Actions

**Evidence:**
- `.github/` workflow directory present
- `vite.config.ts` `base: "/meet/"` matches a project-pages subpath

---

## What This Document Does NOT Include

The following cannot be reliably extracted from code analysis:

- **Decision rationale** - Why these technologies were chosen over alternatives
- **Trade-off analysis** - What was gained or sacrificed
- **Historical context** - What preceded current implementations
- **Future plans** - Intended migrations or deprecations

For this information, consult team documentation, ADRs, git history, or team members.
