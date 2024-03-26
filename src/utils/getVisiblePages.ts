export function getVisiblePages(
  current: number,
  total: number,
  countNumber: number
): number[] {
  let start = Math.max(1, current - 2);
  const end = Math.min(start + countNumber, total);

  if (end === total) {
    start = Math.max(1, total - countNumber);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
