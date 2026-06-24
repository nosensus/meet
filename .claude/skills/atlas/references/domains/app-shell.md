# app-shell

> **Location**: `src/`
> **File Count**: 4
> **Confidence**: high

## Purpose

The application shell. It owns three things the rest of the app depends on:

1. **View switching** — a `View = "script" | "tips" | "ambax"` union in `App.tsx`, toggled by
   header tabs. Each view renders an inline `{view === "..." && (...)}` block. No router.
2. **Decision-tree traversal state** — `path: PathStep[]`, the breadcrumb of visited script
   nodes and the option chosen at each. `selectOption`, `back`, and `reset` mutate it.
3. **Shared types & entry** — `types.ts` defines the script-graph contracts; `main.tsx` mounts
   `<App/>`; `styles.css` is the one global stylesheet.

## Directory Structure

```
src/
├── App.tsx       # shell component (160 lines)
├── main.tsx      # ReactDOM.createRoot(#root)
├── types.ts      # ScriptOption, ScriptNode, ScriptGraph, PathStep
└── styles.css    # all styles (BEM-ish class names)
```

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | View tabs + decision-tree state machine (`selectOption`/`back`/`reset`) + `logLines` memo that builds the call script from chosen options |
| `src/types.ts` | `ScriptOption` (id/label/say?/note?/next?), `ScriptNode` (id/title/situation?/prompt/options), `ScriptGraph = Record<string, ScriptNode>`, `PathStep` (nodeId/optionId) |
| `src/main.tsx` | React 18 entry, `StrictMode`, imports `styles.css` |
| `src/styles.css` | Global styles for every component class |

## How the decision tree works

- `path` starts as `[{ nodeId: ROOT_ID, optionId: null }]`.
- `selectOption(stepIndex, optionId)` sets the choice at that step, **truncates everything below
  it** (changing an earlier answer resets the cascade), then pushes the option's `next` node if it
  exists in `SCRIPT`.
- `back()` pops the last step and clears the choice on the new last step.
- `logLines` (a `useMemo`) walks `path` and collects `{title, say}` for every chosen option that
  carries a `say` string — this is what `CallLog` renders.

## File Patterns

| Pattern | Example | Count |
|---------|---------|-------|
| Shell/entry modules | `src/App.tsx` | 4 |

## Common Tasks

### Add a new top-level view
See [patterns/add-view.md](../patterns/add-view.md). Extend `View`, add a tab, add a section.

### Change script-graph shape
Edit `src/types.ts` — but note `App.tsx`, `StepCard`, and `data/script.ts` all conform to it.

## Related Domains

- [components](./components.md) — App renders these; passes `path`-derived props down
- [content-data](./content-data.md) — App imports `SCRIPT`/`ROOT_ID`, `TIPS`, `AMBAX`

## Observations

- `App.tsx` reads `SCRIPT[step.nodeId]` and `node.options.find(...)` without null guards; it
  trusts `data/script.ts` to be internally consistent.
- State is plain `useState`; there is no Redux/Zustand/Context. Adding cross-view shared state
  would start here.
