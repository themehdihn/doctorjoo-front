export function toLocalDateShort(date) {
  return new Date(date).toLocaleDateString("fa-IR", {});
}

export function toLocalDateTime(date) {
  const d = new Date(date);
  return d.toLocaleString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}


export function formatToShamsiDate(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
