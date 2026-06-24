# content-data

> **Location**: `src/data/`
> **File Count**: 6 (3 RU + 3 UZ twins)
> **Confidence**: high

## Purpose

The sales-training content itself, stored as typed, version-controlled TypeScript data — there is
no CMS, API, or fetch. Three datasets back the three views, each with a parallel `*.uz.ts`
Uzbek-latin twin selected by language in `App.tsx` (see [i18n](./i18n.md)).

## Directory Structure

```
src/data/
├── script.ts / script.uz.ts   # SCRIPT / SCRIPT_UZ (directed graph) + ROOT_ID
├── tips.ts   / tips.uz.ts      # Tip interface + TIP_CATEGORIES(_UZ) + TIPS(_UZ)
└── ambax.ts  / ambax.uz.ts     # AMBAX(_UZ) + AMBAX_CATEGORIES(_UZ) (reuses Tip)
```

> **UZ twins must stay key-parallel** with their RU original (same node keys, option ids, card
> ids). Only text and category labels differ. `ROOT_ID` and the `Tip`/`ScriptNode` types are
> shared (defined once, in `script.ts` / `tips.ts` / `types.ts`).

## Key Files

| File | Purpose |
|------|---------|
| `src/data/script.ts` | Exports `ROOT_ID = "start"` and `SCRIPT: ScriptGraph` — a `Record<string, ScriptNode>` of ~25 keyed nodes (cold call, presentation, the 10 objection templates, price, closing). Options carry `label`, optional `say` (spoken line) / `note` (hint), and optional `next` (child node key) |
| `src/data/tips.ts` | Exports the `Tip` interface (`{id, category, title, body}`), the `TIP_CATEGORIES` tuple, and the `TIPS` array. The interface is the shared card shape |
| `src/data/ambax.ts` | Imports `Tip` from `tips.ts`; exports `AMBAX_CATEGORIES` tuple and `AMBAX` array. Same card shape, different content (hiring, motivation, pay, management) |

## Data shapes

```ts
// script graph (types.ts)
ScriptGraph = Record<string, ScriptNode>
ScriptNode  = { id, title, situation?, prompt, options: ScriptOption[] }
ScriptOption = { id, label, say?, note?, next? }

// cards (tips.ts) — shared by tips and ambax
Tip = { id: string; category: string; title: string; body: string }
```

## File Patterns

| Pattern | Example | Count |
|---------|---------|-------|
| `src/data/*.ts` (module exporting a typed const dataset) | `src/data/tips.ts` | 3 |

## Critical invariants

- **Graph integrity:** every `option.next` must be an existing key in `SCRIPT`. `App.tsx` indexes
  `SCRIPT[nodeId]` directly with no guard — a dangling pointer crashes the script view.
- **Unique ids:** node keys, option `id`s within a node, and card `id`s within an array must each
  be unique (they are used as React keys and selection identifiers).
- **Categories are a closed set:** a card's `category` shows as a filter chip only if it is also in
  the matching `*_CATEGORIES` tuple; otherwise the card appears only under the "Все" filter.

## Related Domains

- [app-shell](./app-shell.md) — imports `SCRIPT`/`ROOT_ID`, `TIPS`, `AMBAX`
- [components](./components.md) — `StepCard` renders `ScriptNode`; `Blocks` renders `Tip[]`

## Common Tasks

- Edit the call flow → [patterns/add-script-node.md](../patterns/add-script-node.md)
- Add a tip/case → [patterns/add-content-item.md](../patterns/add-content-item.md)

## Observations

- This is where ~80% of real edits happen: the app is essentially a renderer over these three
  files. The content is in Russian (sales training by E. Kolotilov).
- `script.ts` is the largest and most fragile file (865 lines, hand-maintained graph).
