export const C = {
  em:  "#10b981",
  ind: "#6366f1",
  amb: "#f59e0b",
  pnk: "#ec4899",
  tel: "#14b8a6",
};

export function rgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}`
    : "16,185,129";
}