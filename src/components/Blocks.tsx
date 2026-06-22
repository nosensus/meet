import { useMemo, useState } from "react";
import type { Tip } from "../data/tips";

interface Props {
  items: Tip[];
  categories: readonly string[];
}

export default function Blocks({ items, categories }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("Все");

  const tabs = ["Все", ...categories];
  const visible = useMemo(
    () => (filter === "Все" ? items : items.filter((t) => t.category === filter)),
    [filter, items]
  );

  return (
    <div className="tips">
      <div className="tips-filters">
        {tabs.map((c) => (
          <button
            key={c}
            type="button"
            className={`chip${filter === c ? " active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="tips-grid">
        {visible.map((t) => {
          const open = openId === t.id;
          return (
            <article key={t.id} className={`tip-block${open ? " open" : ""}`}>
              <button
                type="button"
                className="tip-head"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : t.id)}
              >
                <span className="tip-cat">{t.category}</span>
                <span className="tip-title">{t.title}</span>
                <span className="tip-toggle">{open ? "−" : "+"}</span>
              </button>
              {open && <p className="tip-body">{t.body}</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
}
