#!/usr/bin/env node
import { version } from "@package.json";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { EmailTemplateBuilder } from "./builder";
import type { BuildOptions } from "./types";

const NAME = "builder/cli";

const cli = yargs(hideBin(process.argv))
  .scriptName(NAME)
  .usage("Usage: $0 <command> [options]")
  .version(version)
  .help("help")
  .alias("h", "help")
  .alias("v", "version")
  .describe("templates", "Glob pattern for template files")
  .demandCommand(1, "You need to specify a command to run")
  .strict()
  .fail((msg, err, yargs) => {
    if (err) throw err;
    console.error(`❌ Error: ${msg}`);
    console.error();
    yargs.showHelp();
    process.exit(1);
  });

// Build command
cli.command(
  "build [templates]",
  "Build email templates from React components",
  (yargs) => {
    return yargs
      .positional("templates", {
        describe: "Glob pattern for template files",
        type: "string",
        default: "./src/templates/**/*.tsx",
      })
      .option("output", {
        alias: "o",
        describe: "Output directory for built templates",
        type: "string",
        default: "./dist",
      })
      .option("verbose", {
        alias: "V",
        describe: "Enable verbose logging",
        type: "boolean",
        default: false,
      })
      .option("quiet", {
        alias: "q",
        describe: "Suppress all output except errors",
        type: "boolean",
        default: false,
      })
      .example([
        ["$0 build", "Build templates using default settings"],
        ["$0 build './templates/**/*.tsx'", "Build templates from custom path"],
        ["$0 build -o ./build", "Build to custom output directory"],
        ["$0 build --verbose", "Build with detailed logging"],
        ["$0 build --quiet", "Build with minimal output"],
      ]);
  },
  async (argv) => {
    const options: BuildOptions = {
      templatesGlob: argv.templates,
      outputDir: argv.output,
      verbose: argv.verbose && !argv.quiet,
    };

    if (!argv.quiet) {
      console.log("🏗️  Building email templates...");
      console.log(`📁 Templates: ${options.templatesGlob}`);
      console.log(`📦 Output: ${options.outputDir}`);
      if (options.verbose) {
        console.log("🔍 Verbose mode enabled");
      }
      console.log();
    }

    const builder = new EmailTemplateBuilder(options);

    try {
      const results = await builder.build();
      const failed = results.filter((r) => !r.success);
      const successful = results.filter((r) => r.success);

      if (!argv.quiet) {
        if (successful.length > 0) {
          console.log(
            `✅ Successfully built ${successful.length} template${successful.length === 1 ? "" : "s"}`,
          );
        }

        if (failed.length > 0) {
          console.log(
            `❌ Failed to build ${failed.length} template${failed.length === 1 ? "" : "s"}:`,
          );
          failed.forEach((r) => {
            console.log(`   • ${r.filename}: ${r.error}`);
          });
        }
      }

      if (failed.length > 0) {
        process.exit(1);
      }
    } catch (error) {
      console.error("❌ Build failed:", error instanceof Error ? error.message : error);
      process.exit(1);
    }
  },
);

// Info command
cli.command(
  "info",
  "Show information about the email builder",
  () => {},
  () => {
    console.log("📧 Email Template Builder");
    console.log();
    console.log("This tool builds email templates from React components.");
    console.log("It processes TypeScript/React files and generates optimized email templates.");
    console.log();
    console.log("Default configuration:");
    console.log("  • Templates glob: ./src/templates/**/*.tsx");
    console.log("  • Output directory: ./dist");
    console.log("  • Verbose logging: disabled");
    console.log();
    console.log(`Use '${NAME} build --help' for detailed build options.`);
  },
);

// List command
cli.command(
  "list [templates]",
  "List available email templates without building them",
  (yargs) => {
    return yargs
      .positional("templates", {
        describe: "Glob pattern for template files",
        type: "string",
        default: "./src/templates/**/*.tsx",
      })
      .option("verbose", {
        alias: "V",
        describe: "Show detailed information about each template",
        type: "boolean",
        default: false,
      });
  },
  async (argv) => {
    const { globby } = await import("globby");

    try {
      const templatePaths = await globby(argv.templates, { absolute: false });

      if (templatePaths.length === 0) {
        console.log(`📭 No templates found matching pattern: ${argv.templates}`);
        return;
      }

      console.log(
        `📄 Found ${templatePaths.length} template${templatePaths.length === 1 ? "" : "s"}:`,
      );
      console.log();

      templatePaths.forEach((path, index) => {
        const number = (index + 1).toString().padStart(2, " ");
        console.log(`  ${number}. ${path}`);
      });

      if (argv.verbose) {
        console.log();
        console.log(`Use '${NAME} build' to process these templates.`);
      }
    } catch (error) {
      console.error("❌ Failed to list templates:", error instanceof Error ? error.message : error);
      process.exit(1);
    }
  },
);

// Export the CLI for testing
export { cli };

// Run CLI if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  cli.parse();
}
