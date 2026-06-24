import type { ScriptNode } from "../types";
import type { UIStrings } from "../i18n";
import SayCard from "./SayCard";

interface Props {
  index: number;
  node: ScriptNode;
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
  t: UIStrings;
}

export default function StepCard({ index, node, selectedOptionId, onSelect, t }: Props) {
  return (
    <section className="step">
      <header className="step-head">
        <span className="step-badge">{index + 1}</span>
        <h2 className="step-title">{node.title}</h2>
      </header>

      {node.situation && <p className="step-situation">{node.situation}</p>}

      <p className="step-prompt">{node.prompt}</p>

      <ul className="option-list">
        {node.options.map((o) => {
          const active = o.id === selectedOptionId;
          return (
            <li key={o.id}>
              <button
                type="button"
                className={`option-btn${active ? " active" : ""}`}
                aria-pressed={active}
                onClick={() => onSelect(o.id)}
              >
                <span className="option-label">{o.label}</span>
                {o.next && <span className="option-arrow">→</span>}
              </button>

              {active && (o.say || o.note) && <SayCard say={o.say} note={o.note} t={t} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
