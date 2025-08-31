export function toLocalDayKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function fromLocalDayKey(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}
