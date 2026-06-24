# components

> **Location**: `src/components/`
> **File Count**: 5
> **Confidence**: high

## Purpose

All presentational React components. Each takes data via props and holds at most a little local
UI state (open accordion id, "copied" flash, active filter). None own application data — the
decision-tree path lives in `App.tsx`, content lives in `src/data/`.

## Directory Structure

```
src/components/
├── StepCard.tsx    # one script step: prompt + option buttons; expands SayCard for active option
├── SayCard.tsx     # "Скажите клиенту" block with copy-to-clipboard + optional note
├── CallLog.tsx     # right-rail aggregated call script; "Копировать всё"
├── Blocks.tsx      # shared filterable accordion of cards (used by Tips AND Ambax)
└── PayScheme.tsx   # Ambax-only static pay-model table (local const data)
```

## Key Files

| File | Purpose |
|------|---------|
| `src/components/StepCard.tsx` | Renders a `ScriptNode`: badge, title, situation, prompt, and an option list of buttons. Active option reveals `<SayCard>`. Props: `{ index, node, selectedOptionId, onSelect }` |
| `src/components/SayCard.tsx` | Shows the `say` line + copy button (1.5s "Скопировано ✓" flash) and optional `note`. Returns null if neither present |
| `src/components/CallLog.tsx` | Renders `lines: {title, say}[]` as an ordered list; copies all joined with `• `. Empty-state message when no lines |
| `src/components/Blocks.tsx` | Generic accordion over `items: Tip[]` + `categories`. Filter chips (`Все` + categories), one card open at a time. Used for both tips and ambax |
| `src/components/PayScheme.tsx` | Static Ambax pay-scheme cards + accelerator `<table>`. Data is a local `const accelerator` array, not from `src/data/` |

## File Patterns

| Pattern | Example | Count |
|---------|---------|-------|
| `src/components/*.tsx` (PascalCase, default export, local `interface Props`) | `src/components/StepCard.tsx` | 5 |

## Conventions observed

- **Default export** per file; imported by file path (`import StepCard from "./StepCard"`).
- **Local `interface Props`** declared above the component — never a shared props module.
- **Styling** is `className` strings against `src/styles.css`. Active/open states use template
  strings like `` `option-btn${active ? " active" : ""}` ``.
- **Clipboard** uses `navigator.clipboard.writeText` wrapped in try/catch (graceful no-op).
- **Accessibility**: buttons set `aria-pressed` / `aria-expanded` for toggle state.

## Related Domains

- [app-shell](./app-shell.md) — `App.tsx` composes these and supplies props
- [content-data](./content-data.md) — `Blocks` consumes the `Tip` shape; `StepCard` consumes `ScriptNode`

## Observations

- `Blocks` is the reuse seam: tips and ambax differ only in data + categories, not rendering.
  A new card-style view should reuse `Blocks` rather than add a component.
- `PayScheme` is the exception — it hardcodes its own table data inline instead of importing
  from `src/data/`. Follow `Blocks`/data separation for anything dynamic.
