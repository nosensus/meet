// Визуальная схема оплаты продавца (по лекции Амбакс 2).
// Цифры условные — для иллюстрации механики «акселератора».

const accelerator = [
  { plan: "до 100%", rate: "1%", bonus: "—", note: "базовая ставка" },
  { plan: "100–140%", rate: "+2%", bonus: "+1 оклад", note: "включается акселератор" },
  { plan: "140–160%", rate: "+3%", bonus: "+1 оклад", note: "«настоящее счастье»" },
  { plan: "> 160%", rate: "возврат на базу", bonus: "—", note: "объявить заранее (ошибка планирования)" },
];

export default function PayScheme() {
  return (
    <section className="payscheme">
      <h3>Схема оплаты продавца</h3>
      <p className="payscheme-sub">
        Модель должна стимулировать лучших и отпугивать бездельников, и быть привязана к плану
        (квоте). Цифры условные.
      </p>

      <div className="pay-cards">
        <div className="pay-card">
          <span className="pay-card-label">Условный годовой доход</span>
          <span className="pay-card-value">12 000 €</span>
          <span className="pay-card-note">≈ 1 000 €/мес</span>
        </div>
        <div className="pay-op">=</div>
        <div className="pay-card">
          <span className="pay-card-label">Оклад (постоянная)</span>
          <span className="pay-card-value">500 €/мес</span>
          <span className="pay-card-note">50%</span>
        </div>
        <div className="pay-op">+</div>
        <div className="pay-card">
          <span className="pay-card-label">Процент (переменная)</span>
          <span className="pay-card-value">1% с продаж</span>
          <span className="pay-card-note">50% · ≈ 500 €/мес</span>
        </div>
      </div>
      <p className="payscheme-formula">
        Квота (годовой план) = 600 000 € · 1% от квоты как раз даёт вторую половину дохода.
      </p>

      <h4>Акселератор — прогрессия за перевыполнение плана</h4>
      <div className="table-wrap">
        <table className="pay-table">
          <thead>
            <tr>
              <th>Выполнение плана</th>
              <th>Ставка %</th>
              <th>Milestone-бонус</th>
              <th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {accelerator.map((r) => (
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
        <li>
          <b>Акселератор</b> повышает % на каждом пороге сверх 100% плана — продавцу выгодно
          продавать больше (постоянные расходы не растут → прибылью можно делиться). Это убирает
          текучку: «счастье копится здесь».
        </li>
        <li>
          <b>Milestone-бонус</b> — дополнительный оклад при достижении порога (один оклад за «камень»).
        </li>
        <li>
          <b>KPI</b> — максимум 3 (лучше 1–2): например, «20% объёма — на нужную услугу». Не
          выполняешь KPI → идёшь по нижней ставке без акселератора (это не штраф, а отсутствие
          доп-мотивации). При 3 KPI можно разрешить не выполнять один в квартал.
        </li>
        <li>
          <b>Защита от «придержать сделки»</b>: пока не сделан, скажем, порог N% — проценты копятся
          на отдельном счёте и выплачиваются задним числом.
        </li>
        <li>«Ни одна компания не разорилась оттого, что много платила продавцам — разорялись оттого, что платили мало».</li>
      </ul>
    </section>
  );
}
