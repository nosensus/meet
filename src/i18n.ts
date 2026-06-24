// Языки интерфейса и словарь «хромированных» строк (шапка, табы, подписи кнопок).
// Контент (скрипт, советы, кейсы) живёт отдельными датасетами в src/data/*.uz.ts.
// Til interfeysi va UI matnlari lug'ati (header, tablar, tugma yozuvlari).

export type Lang = "ru" | "uz";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

export const DEFAULT_LANG: Lang = "ru";
const STORAGE_KEY = "sales-script-lang";

/** Прочитать сохранённый язык (или дефолт). */
export function loadLang(): Lang {
  if (typeof localStorage === "undefined") return DEFAULT_LANG;
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "ru" || saved === "uz" ? saved : DEFAULT_LANG;
}

/** Сохранить выбранный язык. */
export function saveLang(lang: Lang): void {
  if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_KEY, lang);
}

export interface UIStrings {
  // Шапка / навигация
  appTitle: string;
  subtitle: string;
  tabScript: string;
  tabTips: string;
  tabAmbax: string;
  back: string;
  reset: string;
  // Подвалы
  footerScript: string;
  footerTips: string;
  footerAmbax: string;
  // Интро страницы «Амбакс»
  ambaxIntroTitle: string;
  ambaxIntroBody: string;
  // SayCard
  sayToClient: string;
  copy: string;
  copied: string;
  hint: string;
  // CallLog
  callScript: string;
  copyAll: string;
  callLogEmpty: string;
  // Blocks (фильтр)
  filterAll: string;
}

export const UI: Record<Lang, UIStrings> = {
  ru: {
    appTitle: "Скрипт продаж",
    subtitle:
      "Интерактивный помощник менеджера · по тренингу Е. Колотилова «Эффективные продажи b2b»",
    tabScript: "Скрипт",
    tabTips: "Советы",
    tabAmbax: "Амбакс",
    back: "← Назад",
    reset: "Сбросить",
    footerScript:
      "Выберите вариант — подгрузится следующий шаг (дерево). Реплики копируются по кнопке.",
    footerTips: "Советы и рекомендации из лекции — отдельно от 10 шаблонов возражений.",
    footerAmbax: "Кейсы по управлению и найму (логистический проект «Амбакс»).",
    ambaxIntroTitle: "Амбакс · построение отдела продаж",
    ambaxIntroBody:
      "Отдельные кейсы спикера для руководителя: как искать и собеседовать сотрудников, мотивировать, платить и управлять отделом. Это не скрипты звонков.",
    sayToClient: "Скажите клиенту",
    copy: "Копировать",
    copied: "Скопировано ✓",
    hint: "подсказка",
    callScript: "Сценарий звонка",
    copyAll: "Копировать всё",
    callLogEmpty: "Здесь соберутся ваши реплики по мере прохождения скрипта.",
    filterAll: "Все",
  },
  uz: {
    appTitle: "Sotuv skripti",
    subtitle:
      "Menejer uchun interaktiv yordamchi · E. Kolotilov treningi «B2B samarali sotuvlar» asosida",
    tabScript: "Skript",
    tabTips: "Maslahatlar",
    tabAmbax: "Ambaks",
    back: "← Orqaga",
    reset: "Tozalash",
    footerScript:
      "Variantni tanlang — keyingi qadam yuklanadi (daraxt). Replikalar tugma orqali nusxalanadi.",
    footerTips: "Ma'ruzadagi maslahat va tavsiyalar — 10 ta e'tiroz shablonidan alohida.",
    footerAmbax: "Boshqaruv va ishga olish bo'yicha keyslar (logistika loyihasi «Ambaks»).",
    ambaxIntroTitle: "Ambaks · sotuv bo'limini qurish",
    ambaxIntroBody:
      "Rahbar uchun spikerning alohida keyslari: xodimlarni qanday izlash va suhbatdan o'tkazish, motivatsiya berish, to'lash va bo'limni boshqarish. Bu qo'ng'iroq skriptlari emas.",
    sayToClient: "Mijozga ayting",
    copy: "Nusxalash",
    copied: "Nusxalandi ✓",
    hint: "maslahat",
    callScript: "Qo'ng'iroq ssenariysi",
    copyAll: "Hammasini nusxalash",
    callLogEmpty: "Skriptdan o'tgan sari replikalaringiz shu yerda to'planadi.",
    filterAll: "Hammasi",
  },
};
