const WEEKDAY_TW = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

export const parseDate = (value: string): Date => new Date(`${value}T00:00:00`);

export const formatMonthDay = (value: string): string => {
  const d = parseDate(value);
  return `${d.getMonth() + 1}/${d.getDate()}`;
};

export const formatWeekday = (value: string): string => {
  const d = parseDate(value);
  return WEEKDAY_TW[d.getDay()];
};

export const diffDays = (fromDate: string, toDate: string): number => {
  const from = parseDate(fromDate).getTime();
  const to = parseDate(toDate).getTime();
  const dayMs = 1000 * 60 * 60 * 24;
  return Math.floor((to - from) / dayMs);
};
