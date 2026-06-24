import { useMemo, useState } from "react";
import { SCRIPT, ROOT_ID } from "./data/script";
import { SCRIPT_UZ } from "./data/script.uz";
import type { PathStep } from "./types";
import StepCard from "./components/StepCard";
import CallLog from "./components/CallLog";
import Blocks from "./components/Blocks";
import PayScheme from "./components/PayScheme";
import { TIPS, TIP_CATEGORIES } from "./data/tips";
import { TIPS_UZ, TIP_CATEGORIES_UZ } from "./data/tips.uz";
import { AMBAX, AMBAX_CATEGORIES } from "./data/ambax";
import { AMBAX_UZ, AMBAX_CATEGORIES_UZ } from "./data/ambax.uz";
import { UI, LANGS, loadLang, saveLang } from "./i18n";
import type { Lang } from "./i18n";

type View = "script" | "tips" | "ambax";

export default function App() {
  const [view, setView] = useState<View>("script");
  const [lang, setLang] = useState<Lang>(loadLang);
  const [path, setPath] = useState<PathStep[]>([{ nodeId: ROOT_ID, optionId: null }]);

  const t = UI[lang];

  // Контент по выбранному языку. Ключи узлов/категорий совпадают между языками,
  // поэтому смена языка не ломает уже пройденный путь.
  const script = lang === "uz" ? SCRIPT_UZ : SCRIPT;
  const tips = lang === "uz" ? TIPS_UZ : TIPS;
  const tipCategories = lang === "uz" ? TIP_CATEGORIES_UZ : TIP_CATEGORIES;
  const ambax = lang === "uz" ? AMBAX_UZ : AMBAX;
  const ambaxCategories = lang === "uz" ? AMBAX_CATEGORIES_UZ : AMBAX_CATEGORIES;

  function changeLang(next: Lang) {
    setLang(next);
    saveLang(next);
  }

  function selectOption(stepIndex: number, optionId: string) {
    const node = script[path[stepIndex].nodeId];
    const option = node.options.find((o) => o.id === optionId);

    // Обрезаем путь после выбранного шага (смена выбора сбрасывает каскад ниже)
    const newPath: PathStep[] = path
      .slice(0, stepIndex + 1)
      .map((s, i) => (i === stepIndex ? { ...s, optionId } : s));

    if (option?.next && script[option.next]) {
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
      const node = script[step.nodeId];
      const opt = node.options.find((o) => o.id === step.optionId);
      if (opt?.say) out.push({ title: node.title, say: opt.say });
    }
    return out;
  }, [path, script]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <div>
            <h1>{t.appTitle}</h1>
            <p className="subtitle">{t.subtitle}</p>
          </div>
          <div className="header-actions">
            <div className="view-switch">
              <button
                type="button"
                className={`tab${view === "script" ? " active" : ""}`}
                onClick={() => setView("script")}
              >
                {t.tabScript}
              </button>
              <button
                type="button"
                className={`tab${view === "tips" ? " active" : ""}`}
                onClick={() => setView("tips")}
              >
                {t.tabTips}
              </button>
              <button
                type="button"
                className={`tab${view === "ambax" ? " active" : ""}`}
                onClick={() => setView("ambax")}
              >
                {t.tabAmbax}
              </button>
            </div>
            {view === "script" && (
              <>
                <button className="btn ghost" type="button" onClick={back} disabled={path.length <= 1}>
                  {t.back}
                </button>
                <button className="btn" type="button" onClick={reset}>
                  {t.reset}
                </button>
              </>
            )}
            <div className="lang-switch" role="group" aria-label="Language">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`lang-btn${lang === l.code ? " active" : ""}`}
                  aria-pressed={lang === l.code}
                  onClick={() => changeLang(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>
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
                  node={script[step.nodeId]}
                  selectedOptionId={step.optionId}
                  onSelect={(optionId) => selectOption(i, optionId)}
                  t={t}
                />
              ))}
            </div>

            <CallLog lines={logLines} t={t} />
          </main>

          <footer className="app-footer">{t.footerScript}</footer>
        </>
      )}

      {view === "tips" && (
        <>
          <main className="app-main single">
            <Blocks key={`tips-${lang}`} items={tips} categories={tipCategories} allLabel={t.filterAll} />
          </main>
          <footer className="app-footer">{t.footerTips}</footer>
        </>
      )}

      {view === "ambax" && (
        <>
          <main className="app-main single">
            <div className="page-intro">
              <h2>{t.ambaxIntroTitle}</h2>
              <p>{t.ambaxIntroBody}</p>
            </div>
            <PayScheme lang={lang} />
            <Blocks key={`ambax-${lang}`} items={ambax} categories={ambaxCategories} allLabel={t.filterAll} />
          </main>
          <footer className="app-footer">{t.footerAmbax}</footer>
        </>
      )}
    </div>
  );
}
