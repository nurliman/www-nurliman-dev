const { src, dest, series, parallel } = require("gulp");
const purgecss = require("gulp-purgecss");
const through = require("through2");
const Critters = require("critters");
const htmlmin = require("gulp-html-minifier-terser");

function inlineCriticalCss() {
  const critters = new Critters({
    inlineFonts: true,
    path: "./dist",
    publicPath: "/",
    preload: "body",
  });

  return src("dist/**/*.html")
    .pipe(
      through.obj((chunk, _, cb) => {
        critters
          .process(String(chunk.contents))
          .then((res) => {
            chunk.contents = Buffer.from(res, "utf8");
            cb(null, chunk);
          })
          .catch((err) => cb(err));
      }),
    )
    .pipe(dest("dist"));
}

function purgeCss() {
  return src("dist/assets/*.css")
    .pipe(
      purgecss({
        content: ["dist/**/*.html", "dist/**/entry.*.js", "dist/**/chunk.*.js"],
        safelist: [/^ps/],
      }),
    )
    .pipe(dest("dist/assets"));
}

function minifyHtml() {
  return src("dist/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        ignoreCustomComments: [/^!/, /^#$/, /^\/$/],
        minifyJS: true,
      }),
    )
    .pipe(dest("dist", { overwrite: true }));
}

exports.optimize = series(inlineCriticalCss, parallel(minifyHtml, purgeCss));
