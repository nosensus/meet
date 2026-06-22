import { useState } from "react";

interface Props {
  say?: string;
  note?: string;
}

export default function SayCard({ say, note }: Props) {
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
            <span>Скажите клиенту</span>
            <button className="copy-btn" onClick={copy} type="button">
              {copied ? "Скопировано ✓" : "Копировать"}
            </button>
          </div>
          <p className="say-text">{say}</p>
        </div>
      )}
      {note && (
        <p className="say-note">
          <span className="note-tag">подсказка</span> {note}
        </p>
      )}
    </div>
  );
}
