# add-content-item Pattern

> Add a tip (Tips view) or a management case (Ambax view).

## Purpose

Tips and Ambax cards are flat, categorized data rendered by the shared `Blocks` accordion. Adding
one means appending an object to the `TIPS` array (`src/data/tips.ts`) or the `AMBAX` array
(`src/data/ambax.ts`). No component change needed.

## File Convention

**Location:** `src/data/tips.ts` or `src/data/ambax.ts`
**Shape:** the shared `Tip` interface — `{ id, category, title, body }` (ambax.ts imports `Tip` from tips.ts)

## Structure

```ts
{
  id: "unique-slug",                 // unique within this array
  category: "Психология продаж",     // MUST exist in the matching *_CATEGORIES tuple
  title: "Короткий заголовок",
  body: "Полный текст совета/кейса.",
},
```

## Critical Conventions

1. **Category must be registered.** A card's `category` becomes a filter chip only if it is in the
   corresponding tuple (`TIP_CATEGORIES` or `AMBAX_CATEGORIES`). An unlisted category renders only
   under the "Все" filter.
2. **Unique `id`.** `Blocks` uses `id` as the open/closed accordion key; duplicates break toggling.
3. **Same shape both files.** Both arrays use the `Tip` interface; keep `{id, category, title, body}`.
4. **Tips ≠ Ambax content.** Tips = objection/call advice; Ambax = building/managing a sales team.
   Put it in the right file. The `start`/script tree is separate (see add-script-node).

## Adding a brand-new category

1. Add the string to the `*_CATEGORIES` tuple (it is `as const` — order is the chip order).
2. Use that exact string as the `category` on your new card(s).

## Anti-Patterns

| Don't | Do Instead | Why |
|-------|------------|-----|
| Use a category not in the tuple | Add it to `*_CATEGORIES` first | Otherwise no filter chip; card hidden unless "Все" |
| Reuse an existing `id` | Pick a unique slug | `id` is the accordion key |
| Add call-script branching here | Use `src/data/script.ts` | Cards are flat; the tree is a graph |

## Implementation Checklist

- [ ] Choose the right file (`tips.ts` vs `ambax.ts`)
- [ ] Ensure `category` exists in the matching `*_CATEGORIES` tuple (add it if new)
- [ ] Append the card object with a unique `id`
- [ ] `pnpm build`

## Reference Implementations

| File | Demonstrates |
|------|--------------|
| `src/data/tips.ts` | `Tip` interface, `TIP_CATEGORIES` tuple, `TIPS` array |
| `src/data/ambax.ts` | Reusing `Tip`, separate `AMBAX_CATEGORIES`/`AMBAX` |

## Validation

```bash
pnpm build
```

## Related Patterns

- [add-view](./add-view.md) — if a new content set deserves its own tab
