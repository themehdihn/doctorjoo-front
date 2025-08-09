export function toLocalDateShort(date) {
  return new Date(date).toLocaleDateString("fa-IR", {});
}

export function formatToShamsiDate(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
