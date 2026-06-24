---
name: atlas
description: Codebase navigation for sales-script. Use FIRST for "where is", "find", "locate", "what file", "how does X work", pattern lookup, or exploring this React/TypeScript sales-script app. Routes to domain docs without file searches.
---

# sales-script Codebase Discovery

Interactive B2B sales-script assistant (React 18 + TypeScript + Vite, no backend).
Three views: an interactive sales-call **decision tree** (script), **tips**, and **Ambax**
sales-team management cases. All content is typed data in `src/data/`.
**Bilingual (RU / UZ-latin)** via parallel datasets + a UI-string dictionary; language
state lives in `App.tsx` and persists to localStorage.

## Project Structure

```
src/
├── App.tsx            # Shell: view switching + language state + decision-tree path
├── main.tsx           # React entry point
├── types.ts           # Script graph types (ScriptNode, ScriptOption, PathStep)
├── i18n.ts            # Lang type, LANGS, load/saveLang, UI strings dict (ru/uz)
├── styles.css         # Single global stylesheet
├── components/        # Presentational components (take localized text via props)
│   ├── StepCard.tsx   #   one script step; forwards `t` to SayCard
│   ├── SayCard.tsx    #   "say to client" + copy button
│   ├── CallLog.tsx    #   accumulated call script (copy all)
│   ├── Blocks.tsx     #   shared filterable accordion (tips + ambax)
│   └── PayScheme.tsx  #   Ambax pay-model table (own RU/UZ content, `lang` prop)
└── data/              # Typed content datasets — RU + parallel .uz.ts (same keys/ids)
    ├── script.ts / script.uz.ts   #   SCRIPT / SCRIPT_UZ: ~25-node graph
    ├── tips.ts / tips.uz.ts        #   TIPS(+CATEGORIES) / *_UZ
    └── ambax.ts / ambax.uz.ts      #   AMBAX(+CATEGORIES) / *_UZ (reuses Tip type)
```

No router, no state library, no test suite. `pnpm build` (= `tsc && vite build`) is the validation gate.

## Domain Router

Read ONLY the relevant reference based on query keywords:

| Keywords | Reference |
|----------|-----------|
| app, shell, view, tab, navigation, path state, traverse, back, reset, types, entry, lang, language, switcher | [references/domains/app-shell.md](references/domains/app-shell.md) |
| component, StepCard, SayCard, CallLog, Blocks, PayScheme, accordion, copy button, UI | [references/domains/components.md](references/domains/components.md) |
| script, node, tree, objection, tips, ambax, content, data, card, category | [references/domains/content-data.md](references/domains/content-data.md) |
| i18n, translation, locale, uz, uzbek, ru, language, UI strings, t() | [references/domains/i18n.md](references/domains/i18n.md) |

## Pattern Router

For implementation tasks, read the relevant pattern guide:

| Task | Pattern Guide |
|------|---------------|
| Add/edit a step in the sales-call decision tree | [references/patterns/add-script-node.md](references/patterns/add-script-node.md) |
| Add a new presentational component | [references/patterns/add-component.md](references/patterns/add-component.md) |
| Add a tip or Ambax management case | [references/patterns/add-content-item.md](references/patterns/add-content-item.md) |
| Add a new top-level view/tab | [references/patterns/add-view.md](references/patterns/add-view.md) |
| Add a UI string or a new language | [references/patterns/add-translation.md](references/patterns/add-translation.md) |

## Schema Reference

For file patterns, technologies, validation commands, and anti-patterns: [references/schema.yaml](references/schema.yaml)

## Implementation Pre-flight

When asked to **implement, create, add, or modify** code (not just questions):

1. **Check pattern match** — read `keyword_index` in [references/schema.yaml](references/schema.yaml).
2. **Surface context** — if matched, note the pattern's `file_convention`, `registration`
   steps, `example_files`, and `anti_patterns_summary`.
3. **Quick reference** — study one `example_file`, keep anti-patterns visible, run `pnpm build`.

### Skip Conditions

Skip pre-flight when the request is exploratory ("where is", "how does"), the user already
invoked a spec workflow, or they say "just do it".

## Notes

- **Content is data, not markup.** Editing the sales script, tips, or cases means editing
  `src/data/*.ts`, never JSX. Components are generic renderers.
- **`script.ts` integrity is load-bearing.** `App.tsx` indexes `SCRIPT[nodeId]` with no guard;
  a `next` pointing at a missing key crashes the view. See the add-script-node pattern.
- **Single source of truth for state.** Decision-tree traversal lives entirely in `App.tsx`
  (`path: PathStep[]`). Components are stateless except for local UI toggles.
- **Bilingual via parallel datasets.** Each `src/data/*.ts` has a `*.uz.ts` twin with identical
  node keys / option ids / card ids (only text differs), so switching language never breaks an
  in-progress path. `App.tsx` picks the dataset by `lang`; UI chrome comes from `UI[lang]` in
  `src/i18n.ts`; `PayScheme` carries its own RU/UZ content. Keep the two datasets key-parallel.
