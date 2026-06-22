import { useMemo, useState } from "react";
import { SCRIPT, ROOT_ID } from "./data/script";
import type { PathStep } from "./types";
import StepCard from "./components/StepCard";
import CallLog from "./components/CallLog";
import Blocks from "./components/Blocks";
import PayScheme from "./components/PayScheme";
import { TIPS, TIP_CATEGORIES } from "./data/tips";
import { AMBAX, AMBAX_CATEGORIES } from "./data/ambax";

type View = "script" | "tips" | "ambax";

export default function App() {
  const [view, setView] = useState<View>("script");
  const [path, setPath] = useState<PathStep[]>([{ nodeId: ROOT_ID, optionId: null }]);

  function selectOption(stepIndex: number, optionId: string) {
    const node = SCRIPT[path[stepIndex].nodeId];
    const option = node.options.find((o) => o.id === optionId);

    // Обрезаем путь после выбранного шага (смена выбора сбрасывает каскад ниже)
    const newPath: PathStep[] = path
      .slice(0, stepIndex + 1)
      .map((s, i) => (i === stepIndex ? { ...s, optionId } : s));

    if (option?.next && SCRIPT[option.next]) {
      newPath.push({ nodeId: option.next, optionId: null });
    }
    setPath(newPath);
  }

  function reset() {
    setPath([{ nodeId: ROOT_ID, optionId: null }]);
  }

  function back() {
    if (path.length <= 1) return;
    // Убираем последний шаг и сбрасываем выбор у нового последнего
    setPath(
      path.slice(0, -1).map((s, i, arr) => (i === arr.length - 1 ? { ...s, optionId: null } : s))
    );
  }

  // Сценарий звонка: реплики выбранных вариантов, у которых есть текст say
  const logLines = useMemo(() => {
    const out: { title: string; say: string }[] = [];
    for (const step of path) {
      if (!step.optionId) continue;
      const node = SCRIPT[step.nodeId];
      const opt = node.options.find((o) => o.id === step.optionId);
      if (opt?.say) out.push({ title: node.title, say: opt.say });
    }
    return out;
  }, [path]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <div>
            <h1>Скрипт продаж</h1>
            <p className="subtitle">
              Интерактивный помощник менеджера · по тренингу Е. Колотилова «Эффективные продажи b2b»
            </p>
          </div>
          <div className="header-actions">
            <div className="view-switch">
              <button
                type="button"
                className={`tab${view === "script" ? " active" : ""}`}
                onClick={() => setView("script")}
              >
                Скрипт
              </button>
              <button
                type="button"
                className={`tab${view === "tips" ? " active" : ""}`}
                onClick={() => setView("tips")}
              >
                Советы
              </button>
              <button
                type="button"
                className={`tab${view === "ambax" ? " active" : ""}`}
                onClick={() => setView("ambax")}
              >
                Амбакс
              </button>
            </div>
            {view === "script" && (
              <>
                <button className="btn ghost" type="button" onClick={back} disabled={path.length <= 1}>
                  ← Назад
                </button>
                <button className="btn" type="button" onClick={reset}>
                  Сбросить
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {view === "script" && (
        <>
          <main className="app-main">
            <div className="flow">
              {path.map((step, i) => (
                <StepCard
                  key={`${step.nodeId}-${i}`}
                  index={i}
                  node={SCRIPT[step.nodeId]}
                  selectedOptionId={step.optionId}
                  onSelect={(optionId) => selectOption(i, optionId)}
                />
              ))}
            </div>

            <CallLog lines={logLines} />
          </main>

          <footer className="app-footer">
            Выберите вариант — подгрузится следующий шаг (дерево). Реплики копируются по кнопке.
          </footer>
        </>
      )}

      {view === "tips" && (
        <>
          <main className="app-main single">
            <Blocks items={TIPS} categories={TIP_CATEGORIES} />
          </main>
          <footer className="app-footer">
            Советы и рекомендации из лекции — отдельно от 10 шаблонов возражений.
          </footer>
        </>
      )}

      {view === "ambax" && (
        <>
          <main className="app-main single">
            <div className="page-intro">
              <h2>Амбакс · построение отдела продаж</h2>
              <p>
                Отдельные кейсы спикера для руководителя: как искать и собеседовать
                сотрудников, мотивировать, платить и управлять отделом. Это не скрипты
                звонков.
              </p>
            </div>
            <PayScheme />
            <Blocks items={AMBAX} categories={AMBAX_CATEGORIES} />
          </main>
          <footer className="app-footer">
            Кейсы по управлению и найму (логистический проект «Амбакс»).
          </footer>
        </>
      )}
    </div>
  );
}
