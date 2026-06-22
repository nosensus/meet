// Модель скрипта продаж: ориентированный граф «узлов».
// Сотрудник на каждом шаге выбирает вариант из дроп-дауна,
// что подгружает следующий узел (каскад).

export interface ScriptOption {
  /** Уникальный id варианта в пределах узла. */
  id: string;
  /** Текст в дроп-дауне (что произошло / какой ответ выбрать). */
  label: string;
  /** Реплика, которую сотрудник говорит клиенту. */
  say?: string;
  /** Подсказка/комментарий для сотрудника (не произносится). */
  note?: string;
  /** id следующего узла. Если не задан — это «лист», движок предложит продолжение. */
  next?: string;
}

export interface ScriptNode {
  id: string;
  /** Заголовок шага. */
  title: string;
  /** Контекст ситуации для сотрудника. */
  situation?: string;
  /** Подпись к дроп-дауну. */
  prompt: string;
  options: ScriptOption[];
}

export type ScriptGraph = Record<string, ScriptNode>;

/** Один шаг пройденного пути: какой узел и какой вариант выбран. */
export interface PathStep {
  nodeId: string;
  optionId: string | null;
}
