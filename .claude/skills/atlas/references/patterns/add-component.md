# add-component Pattern

> Add a new presentational React component.

## Purpose

Components render data passed via props. They live in `src/components/`, are PascalCase, default
export, and declare a local `interface Props`. Application/data state stays out of them (it lives
in `App.tsx` or `src/data/`).

## File Convention

**Location:** `src/components/{Name}.tsx`
**Naming:** PascalCase file and component name
**Tests:** none (no test framework configured)

## Structure

```tsx
import type { SomeType } from "../types";   // or a data module

interface Props {
  items: SomeType[];
  onSelect: (id: string) => void;
}

export default function MyComponent({ items, onSelect }: Props) {
  // local UI state only (open/copied/filter), never app data
  return <section className="my-component">...</section>;
}
```

## Critical Conventions

1. **Default export**, imported by path: `import MyComponent from "./MyComponent"`.
2. **Local `interface Props`** above the component — no shared props module exists.
3. **Presentational only:** accept data via props; keep at most local UI state. Decision-tree path
   state belongs to `App.tsx`.
4. **Style with `className`** against `src/styles.css`; toggle classes with template strings. No
   CSS modules, no styled-components.
5. **Clipboard / async UI** wrapped in try/catch with graceful no-op (see `SayCard`, `CallLog`).
6. **Accessibility:** set `aria-pressed` / `aria-expanded` on toggle buttons.

## Anti-Patterns

| Don't | Do Instead | Why |
|-------|------------|-----|
| Hold decision-tree/path state in a component | Lift it to `App.tsx`, pass via props | Single source of truth; components are stateless renderers |
| Add a new card-list component for tip-like data | Reuse `Blocks` with new data + categories | `Blocks` is the shared accordion seam |
| Inline styles / new styling library | Add classes to `src/styles.css` | Project uses one global stylesheet |

## Implementation Checklist

- [ ] Create `src/components/{Name}.tsx` (PascalCase, default export)
- [ ] Declare local `interface Props`
- [ ] Add needed classes to `src/styles.css`
- [ ] Import & render from `App.tsx` (or a parent component)
- [ ] `pnpm build`

## Reference Implementations

| File | Demonstrates |
|------|--------------|
| `src/components/StepCard.tsx` | Props-driven render, conditional child component |
| `src/components/Blocks.tsx` | Local UI state (filter/open), reusable over data |
| `src/components/SayCard.tsx` | Clipboard + transient "copied" state, null render guard |

## Validation

```bash
pnpm build
```

## Related Patterns

- [add-view](./add-view.md) — wire the component into a top-level view
