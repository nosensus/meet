# add-script-node Pattern

> Add or edit a step/branch in the interactive sales-call decision tree.

## Purpose

The script view is a directed graph traversed at runtime. Adding a step means adding a keyed
`ScriptNode` to the `SCRIPT` record in `src/data/script.ts` and linking it from a parent option's
`next`. No component or App changes are needed — `StepCard` and `App.tsx` render any valid node.

## File Convention

**Location:** `src/data/script.ts` (single file; nodes are keys in the `SCRIPT` object)
**Shape:** governed by `ScriptNode` / `ScriptOption` in `src/types.ts`

## Structure

```ts
my_node: {                         // key MUST match the `id` and be the `next` target
  id: "my_node",
  title: "Заголовок шага",
  situation: "Контекст для сотрудника (optional)",
  prompt: "Подпись к выбору",
  options: [
    {
      id: "opt1",                  // unique within this node
      label: "Что показать в кнопке",
      say: "Реплика клиенту (optional — appears in CallLog)",
      note: "Подсказка, не произносится (optional)",
      next: "another_node",        // optional; omit to make a leaf
    },
  ],
},
```

## Critical Conventions

1. **Key == id == link target.** The object key, the node's `id`, and the parent option's `next`
   must all be the same string.
2. **No dangling pointers.** Every `next` must reference an existing key in `SCRIPT`. `App.tsx`
   does `SCRIPT[step.nodeId]` with no guard — a missing target crashes the view.
3. **Unique option ids.** Within a node, each option `id` is unique; selection and the back/reset
   cascade key off it.
4. **`say` drives the call log.** Only options with a `say` string appear in `CallLog`. Use `note`
   for guidance the rep should not read aloud.
5. **Leaves are intentional.** An option with no `next` ends the branch (the `continue` node is the
   conventional "what next" terminal).

## Anti-Patterns

| Don't | Do Instead | Why |
|-------|------------|-----|
| Point `next` at a non-existent key | Add the target node first, or reuse an existing key | Unguarded `SCRIPT[nodeId]` → runtime crash |
| Reuse an option `id` within a node | Give each option a unique `id` | Used as React key + selection id; collisions break the cascade |
| Put rep guidance in `say` | Use `note` for hints, `say` for the spoken line | `say` is copied to clipboard / call log verbatim |

## Implementation Checklist

- [ ] Add the new node as a key in `SCRIPT`, with matching `id`
- [ ] Set `title`, `prompt`, and (optionally) `situation`
- [ ] Add options with unique `id`s; set `say`/`note`/`next` as needed
- [ ] Link it: add/point a parent option's `next` to the new key
- [ ] Verify all `next` targets exist
- [ ] `pnpm build`

## Reference Implementations

| File | Demonstrates |
|------|--------------|
| `src/data/script.ts` (`start`, `cold`, `objection_type`) | Branching nodes with `next` links |
| `src/data/script.ts` (`obj_expensive`, `cold_secretary`) | Options carrying `say`/`note` |
| `src/data/script.ts` (`continue`) | Leaf/terminal node |

## Validation

```bash
pnpm build
```

## Related Patterns

- [add-view](./add-view.md) — if the new flow warrants its own top-level tab
