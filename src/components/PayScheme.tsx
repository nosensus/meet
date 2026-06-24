// Sotuvchi to'lov sxemasining vizual ko'rinishi (Ambaks 2-ma'ruza bo'yicha).
// Raqamlar shartli — «akselerator» mexanikasini ko'rsatish uchun.
import type { Lang } from "../i18n";

interface AccRow {
  plan: string;
  rate: string;
  bonus: string;
  note: string;
}
interface Rule {
  term?: string;
  text: string;
}
interface PayContent {
  title: string;
  sub: string;
  cards: { label: string; value: string; note: string }[];
  ops: string[]; // separators between cards
  formula: string;
  accTitle: string;
  tableHead: [string, string, string, string];
  accelerator: AccRow[];
  rules: Rule[];
}

const PAY: Record<Lang, PayContent> = {
  ru: {
    title: "Схема оплаты продавца",
    sub: "Модель должна стимулировать лучших и отпугивать бездельников, и быть привязана к плану (квоте). Цифры условные.",
    cards: [
      { label: "Условный годовой доход", value: "12 000 €", note: "≈ 1 000 €/мес" },
      { label: "Оклад (постоянная)", value: "500 €/мес", note: "50%" },
      { label: "Процент (переменная)", value: "1% с продаж", note: "50% · ≈ 500 €/мес" },
    ],
    ops: ["=", "+"],
    formula: "Квота (годовой план) = 600 000 € · 1% от квоты как раз даёт вторую половину дохода.",
    accTitle: "Акселератор — прогрессия за перевыполнение плана",
    tableHead: ["Выполнение плана", "Ставка %", "Milestone-бонус", "Комментарий"],
    accelerator: [
      { plan: "до 100%", rate: "1%", bonus: "—", note: "базовая ставка" },
      { plan: "100–140%", rate: "+2%", bonus: "+1 оклад", note: "включается акселератор" },
      { plan: "140–160%", rate: "+3%", bonus: "+1 оклад", note: "«настоящее счастье»" },
      { plan: "> 160%", rate: "возврат на базу", bonus: "—", note: "объявить заранее (ошибка планирования)" },
    ],
    rules: [
      {
        term: "Акселератор",
        text: " повышает % на каждом пороге сверх 100% плана — продавцу выгодно продавать больше (постоянные расходы не растут → прибылью можно делиться). Это убирает текучку: «счастье копится здесь».",
      },
      {
        term: "Milestone-бонус",
        text: " — дополнительный оклад при достижении порога (один оклад за «камень»).",
      },
      {
        term: "KPI",
        text: " — максимум 3 (лучше 1–2): например, «20% объёма — на нужную услугу». Не выполняешь KPI → идёшь по нижней ставке без акселератора (это не штраф, а отсутствие доп-мотивации). При 3 KPI можно разрешить не выполнять один в квартал.",
      },
      {
        term: "Защита от «придержать сделки»",
        text: ": пока не сделан, скажем, порог N% — проценты копятся на отдельном счёте и выплачиваются задним числом.",
      },
      {
        text: "«Ни одна компания не разорилась оттого, что много платила продавцам — разорялись оттого, что платили мало».",
      },
    ],
  },
  uz: {
    title: "Sotuvchi to'lov sxemasi",
    sub: "Model eng yaxshilarni rag'batlantirib, dangasalarni qo'rqitishi va rejaga (kvotaga) bog'langan bo'lishi kerak. Raqamlar shartli.",
    cards: [
      { label: "Shartli yillik daromad", value: "12 000 €", note: "≈ 1 000 €/oy" },
      { label: "Maosh (doimiy)", value: "500 €/oy", note: "50%" },
      { label: "Foiz (o'zgaruvchan)", value: "sotuvdan 1%", note: "50% · ≈ 500 €/oy" },
    ],
    ops: ["=", "+"],
    formula: "Kvota (yillik reja) = 600 000 € · kvotadan 1% aynan daromadning ikkinchi yarmini beradi.",
    accTitle: "Akselerator — rejani oshirib bajargani uchun progressiya",
    tableHead: ["Reja bajarilishi", "Stavka %", "Milestone-bonus", "Izoh"],
    accelerator: [
      { plan: "100% gacha", rate: "1%", bonus: "—", note: "bazaviy stavka" },
      { plan: "100–140%", rate: "+2%", bonus: "+1 maosh", note: "akselerator yoqiladi" },
      { plan: "140–160%", rate: "+3%", bonus: "+1 maosh", note: "«haqiqiy baxt»" },
      { plan: "> 160%", rate: "bazaga qaytish", bonus: "—", note: "oldindan e'lon qiling (rejalashtirish xatosi)" },
    ],
    rules: [
      {
        term: "Akselerator",
        text: " rejaning 100% dan oshgan har bir bosqichida % ni oshiradi — sotuvchiga ko'proq sotish foydali (doimiy xarajatlar o'smaydi → foyda bilan bo'lishish mumkin). Bu kadrlar oqovini yo'qotadi: «baxt shu yerda to'planadi».",
      },
      {
        term: "Milestone-bonus",
        text: " — bosqichga yetganda qo'shimcha maosh (har bir «tosh» uchun bitta maosh).",
      },
      {
        term: "KPI",
        text: " — ko'pi bilan 3 ta (yaxshisi 1–2): masalan, «hajmning 20% — kerakli xizmatga». KPI ni bajarmasang → akseleratorsiz quyi stavkada yurasan (bu jarima emas, qo'shimcha motivatsiyaning yo'qligi). 3 ta KPI bo'lsa, chorakda bittasini bajarmaslikka ruxsat berish mumkin.",
      },
      {
        term: "«Bitimlarni ushlab qolish»dan himoya",
        text: ": masalan, N% bosqichga yetmaguncha — foizlar alohida hisobda to'planadi va keyinroq, o'tgan davr uchun to'lanadi.",
      },
      {
        text: "«Hech bir kompaniya sotuvchilarga ko'p to'lagani uchun sinmagan — kam to'lagani uchun singan».",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

export default function PayScheme({ lang }: Props) {
  const t = PAY[lang];
  return (
    <section className="payscheme">
      <h3>{t.title}</h3>
      <p className="payscheme-sub">{t.sub}</p>

      <div className="pay-cards">
        <div className="pay-card">
          <span className="pay-card-label">{t.cards[0].label}</span>
          <span className="pay-card-value">{t.cards[0].value}</span>
          <span className="pay-card-note">{t.cards[0].note}</span>
        </div>
        <div className="pay-op">{t.ops[0]}</div>
        <div className="pay-card">
          <span className="pay-card-label">{t.cards[1].label}</span>
          <span className="pay-card-value">{t.cards[1].value}</span>
          <span className="pay-card-note">{t.cards[1].note}</span>
        </div>
        <div className="pay-op">{t.ops[1]}</div>
        <div className="pay-card">
          <span className="pay-card-label">{t.cards[2].label}</span>
          <span className="pay-card-value">{t.cards[2].value}</span>
          <span className="pay-card-note">{t.cards[2].note}</span>
        </div>
      </div>
      <p className="payscheme-formula">{t.formula}</p>

      <h4>{t.accTitle}</h4>
      <div className="table-wrap">
        <table className="pay-table">
          <thead>
            <tr>
              {t.tableHead.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.accelerator.map((r) => (
              <tr key={r.plan}>
                <td>{r.plan}</td>
                <td className="cell-rate">{r.rate}</td>
                <td>{r.bonus}</td>
                <td className="cell-note">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="pay-rules">
        {t.rules.map((rule, i) => (
          <li key={i}>
            {rule.term ? <b>{rule.term}</b> : null}
            {rule.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
