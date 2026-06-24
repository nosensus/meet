import { useState } from "react";
import type { UIStrings } from "../i18n";

interface Props {
  say?: string;
  note?: string;
  t: UIStrings;
}

export default function SayCard({ say, note, t }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!say) return;
    try {
      await navigator.clipboard.writeText(say);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard может быть недоступен — игнорируем */
    }
  }

  if (!say && !note) return null;

  return (
    <div className="say-card">
      {say && (
        <div className="say-main">
          <div className="say-label">
            <span>{t.sayToClient}</span>
            <button className="copy-btn" onClick={copy} type="button">
              {copied ? t.copied : t.copy}
            </button>
          </div>
          <p className="say-text">{say}</p>
        </div>
      )}
      {note && (
        <p className="say-note">
          <span className="note-tag">{t.hint}</span> {note}
        </p>
      )}
    </div>
  );
}
