export function getMonthMatrix(
  year: number,
  month: number, // 0-based
  weekStartsOn = 0 // 0 = Sunday, 1 = Monday
) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  const start = new Date(first);
  const startOffset = (start.getDay() - weekStartsOn + 7) % 7;
  start.setDate(start.getDate() - startOffset);

  const end = new Date(last);
  const endOffset = (weekStartsOn + 6 - end.getDay() + 7) % 7;
  end.setDate(end.getDate() + endOffset);

  const weeks: Date[][] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return { weeks, first, last };
}
