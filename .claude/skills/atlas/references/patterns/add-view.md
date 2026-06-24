# add-view Pattern

> Add a new top-level tab/view alongside script / tips / ambax.

## Purpose

Views are not routed — they are inline conditional blocks in `App.tsx` keyed off a `View` union
and a `useState`. Adding one touches only `App.tsx` (plus whatever data/component it renders).

## File Convention

**Location:** `src/App.tsx`
**Mechanism:** extend `type View`, add a tab button, add a `{view === "..." && (...)}` section

## Structure

```tsx
type View = "script" | "tips" | "ambax" | "myview";   // 1. extend union

// 2. add a tab inside .view-switch
<button
  type="button"
  className={`tab${view === "myview" ? " active" : ""}`}
  onClick={() => setView("myview")}
>
  Моя вкладка
</button>

// 3. add the view section (sibling to the existing ones)
{view === "myview" && (
  <main className="app-main single">
    {/* render a component / data here */}
  </main>
)}
```

## Critical Conventions

1. **No router.** Views are ternaries on `view` state; there is no URL, history, or deep-linking.
2. **Header actions are per-view.** Back/Reset buttons are guarded by `view === "script"`. If your
   view needs its own actions, add a matching guard.
3. **Layout classes.** Single-column views use `className="app-main single"`; the script view uses
   the two-column `flow` + `CallLog` layout.
4. **Reuse `Blocks`** for card-list content rather than building a new list component.

## Anti-Patterns

| Don't | Do Instead | Why |
|-------|------------|-----|
| Reach for react-router | Add a `View` union member + ternary | App is intentionally router-free |
| Show script-only buttons in all views | Guard actions with `view === "..."` | Back/Reset only make sense for the tree |
| Build a new accordion component | Pass new data/categories to `Blocks` | `Blocks` already handles filterable cards |

## Implementation Checklist

- [ ] Add the value to `type View`
- [ ] Add a tab button in `.view-switch`
- [ ] Add the `{view === "..." && (...)}` section
- [ ] Guard any view-specific header actions
- [ ] Provide its data (`src/data/`) and/or component (`src/components/`)
- [ ] `pnpm build`

## Reference Implementations

| File | Demonstrates |
|------|--------------|
| `src/App.tsx` (`view === "tips"`) | Minimal data-driven view via `Blocks` |
| `src/App.tsx` (`view === "ambax"`) | View composing `PayScheme` + `Blocks` + intro |
| `src/App.tsx` (`view === "script"`) | Two-column view with its own header actions |

## Validation

```bash
pnpm build
```

## Related Patterns

- [add-component](./add-component.md) — build what the view renders
- [add-content-item](./add-content-item.md) — feed a card-based view
