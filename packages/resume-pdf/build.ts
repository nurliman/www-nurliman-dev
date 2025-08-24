import { $ } from "bun";
import puppeteer from "puppeteer";
import { renderToString } from "react-dom/server";
import Resume from "./src/Resume.tsx";

console.log("🚀 Starting resume PDF generation...");

// Render React component to HTML string
const resumeHTML = renderToString(Resume());

// Generate Tailwind CSS from source file
const css = await $`tailwindcss -i src/Resume.css`.text();

// Create complete HTML document with embedded styles
const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Nurliman Diara Aria - Resume</title>
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${resumeHTML}
    </body>
  </html>`;

// Write HTML files to dist for debugging
await Bun.write("dist/resume.html", html);

// Launch Puppeteer browser instance
const browser = await puppeteer.launch({
  args: puppeteer.defaultArgs(),
  defaultViewport: {
    deviceScaleFactor: 1,
    hasTouch: false,
    height: 1080,
    isLandscape: false,
    isMobile: false,
    width: 1920,
  },
  headless: "shell", // Use shell mode for better compatibility
});

// Create new page and set content
const page = await browser.newPage();
await page.setContent(html);

// Generate PDF with specified settings
const pdf = await page.pdf({
  format: "A4",
  margin: {
    top: "24mm",
    right: "24mm",
    bottom: "24mm",
    left: "24mm",
  },
  printBackground: true,
});

// Clean up browser resources
await browser.close();

// Write PDF to output directory
await Bun.write("dist/resume.pdf", pdf);
console.log("✅ Resume PDF generated successfully!");
console.log("📁 Output files: dist/resume.pdf, dist/resume.html");
