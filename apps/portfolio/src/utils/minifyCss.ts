export function minifyCss(css: string): string {
  if (!css) return css;
  if (typeof css !== "string") return css;
  return css.trim().replace(/\s*([;,{}])\s*/g, "$1");
}
