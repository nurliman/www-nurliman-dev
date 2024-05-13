export function minifyHtml(html: string): string {
  if (!html) return html;
  if (typeof html !== "string") return html;

  const stripchars = ["\\n", "\\t", "\\r", "\n", "\r", "\t", "  "] as const;

  for (let i = 0, len = stripchars.length; i < len; i++) {
    const char = stripchars[i];
    while (html.indexOf(char) > -1) {
      html = html.split(char).join(" ");
    }
  }

  if (html.indexOf("> <") > -1) {
    html = html.split("> <").join("><");
  }

  return html;
}
