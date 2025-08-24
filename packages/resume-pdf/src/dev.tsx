/**
 * This file is the entry point for the Resume PDF development server.
 * It sets up the React root element and renders the Resume component.
 *
 * It is included in `dev.html` for local development and preview.
 */

import { createRoot } from "react-dom/client";
import Resume from "./Resume.tsx";

function start() {
  const root = createRoot(document.getElementById("root")!);
  // 210mm is the width of A4 paper, 24mm is the margin around the page
  root.render(<Resume className="mx-auto max-w-[210mm] p-[24mm]" />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
