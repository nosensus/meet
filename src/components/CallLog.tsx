interface LogLine {
  title: string;
  say: string;
}

interface Props {
  lines: LogLine[];
}

export default function CallLog({ lines }: Props) {
  async function copyAll() {
    const text = lines.map((l) => `• ${l.say}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* noop */
    }
  }

  return (
    <aside className="call-log">
      <div className="call-log-head">
        <h3>Сценарий звонка</h3>
        {lines.length > 0 && (
          <button className="copy-btn" type="button" onClick={copyAll}>
            Копировать всё
          </button>
        )}
      </div>

      {lines.length === 0 ? (
        <p className="call-log-empty">
          Здесь соберутся ваши реплики по мере прохождения скрипта.
        </p>
      ) : (
        <ol className="call-log-list">
          {lines.map((l, i) => (
            <li key={i}>
              <span className="log-stage">{l.title}</span>
              <span className="log-say">{l.say}</span>
            </li>
          ))}
        </ol>
      )}
    </aside>
  );
}
