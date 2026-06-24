# add-translation Pattern

> Add a UI string, translate content, or add a whole new language.

## Purpose

The app is bilingual (RU / UZ-latin) with a hand-rolled i18n: a `UI` string dictionary in
`src/i18n.ts` plus parallel content datasets in `src/data/*.uz.ts`. There is no i18n library.

## A. Add or change a UI chrome string

1. Add the field to the `UIStrings` interface in `src/i18n.ts`.
2. Provide a value for **every** language in `UI` (`ru` and `uz`) — TypeScript fails the build
   if one is missing.
3. Consume it via the `t` prop (`t.yourField`). If a new component needs it, thread `t: UIStrings`
   down from `App.tsx` like `StepCard`/`CallLog` do.

## B. Translate content (script / tips / ambax)

Content is **not** in `i18n.ts`. Edit the matching `*.uz.ts` dataset:

- Script step → `src/data/script.uz.ts` (`SCRIPT_UZ`), keeping the **same node key, option `id`s,
  and `next` targets** as `script.ts`.
- Tip / Ambax card → `src/data/tips.uz.ts` / `ambax.uz.ts`, keeping the **same `id`** as the RU twin
  and a `category` that exists in the UZ `*_CATEGORIES` tuple.

`PayScheme` is special: its text lives in `PAY: Record<Lang, PayContent>` inside
`src/components/PayScheme.tsx` (not in a dataset). Edit both language entries there.

## C. Add a whole new language (e.g. `en`)

1. Extend `Lang` and add an entry to `LANGS` in `src/i18n.ts`.
2. Add the full `en` block to `UI` (every `UIStrings` field).
3. Add `script.en.ts` / `tips.en.ts` / `ambax.en.ts` with the same keys/ids as RU.
4. Add the `en` entry to `PAY` in `PayScheme.tsx`.
5. In `App.tsx`, extend the dataset selectors (currently `lang === "uz" ? *_UZ : *`) — consider
   a lookup map once there are 3+ languages.

## Critical Conventions

1. **Key/id parity across languages** — App indexes `script[nodeId]` with no guard; a missing or
   renamed key in a translated dataset crashes the script view.
2. **Categories are per-language** — a card only gets a filter chip if its `category` is in that
   language's `*_CATEGORIES` tuple.
3. **`Blocks` is keyed by lang** in `App.tsx` so its filter state resets on language change — keep
   that `key={...-${lang}}` when adding card-based views.

## Anti-Patterns

| Don't | Do Instead | Why |
|-------|------------|-----|
| Put translated sentences in `i18n.ts` | Put content in `*.uz.ts` datasets; only chrome in `i18n.ts` | Keeps `i18n.ts` small; content stays with its dataset |
| Rename/skip a node key in `*.uz.ts` | Mirror keys exactly from the RU dataset | Unguarded `script[nodeId]` → crash |
| Hardcode a visible string in a component | Add it to `UIStrings` and read `t.x` | Otherwise it can't be translated |

## Implementation Checklist

- [ ] String added to `UIStrings` + all language blocks (if chrome), OR translated in `*.uz.ts` (if content)
- [ ] Keys/ids parallel to the RU dataset; category in the right `*_CATEGORIES` tuple
- [ ] `PayScheme` `PAY` updated if pay-scheme text changed
- [ ] `pnpm build`

## Reference Implementations

| File | Demonstrates |
|------|--------------|
| `src/i18n.ts` | `UIStrings` + `UI` dictionary, localStorage persistence |
| `src/data/script.uz.ts` | Key-parallel translated graph |
| `src/components/PayScheme.tsx` | Self-contained per-language component content |
| `src/App.tsx` | `lang` state, dataset selection, switcher, `Blocks` keyed by lang |

## Validation

```bash
pnpm build
```

## Related Patterns

- [add-content-item](./add-content-item.md) — add a card (remember the UZ twin)
- [add-script-node](./add-script-node.md) — add a node (remember the UZ twin)
- [add-view](./add-view.md) — new view; give `Blocks` a `key={...-${lang}}`
