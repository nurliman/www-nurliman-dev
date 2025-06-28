import fs from "node:fs/promises";
import path from "node:path";
import { globby } from "globby";
import { generateIndexFile } from "./templateGenerator";
import { processTemplate } from "./templateProcessor";
import type { BuildOptions, BuildResult } from "./types";

export class EmailTemplateBuilder {
  private options: Required<BuildOptions>;

  constructor(options: BuildOptions = {}) {
    this.options = {
      templatesGlob: options.templatesGlob || "./src/templates/**/*.tsx",
      outputDir: options.outputDir || "./dist",
      verbose: options.verbose || false,
    };
  }

  build = async (): Promise<BuildResult[]> => {
    // Create output directory
    await fs.mkdir(this.options.outputDir, { recursive: true });

    // Find template files
    const templatePaths = await globby(this.options.templatesGlob, { absolute: true });

    if (this.options.verbose) {
      console.log(`Found ${templatePaths.length} template(s)`);
    }

    // Process all templates
    const results: BuildResult[] = [];
    for (const filepath of templatePaths) {
      const result = await processTemplate(filepath, this.options.outputDir, this.options.verbose);
      results.push(result);
    }

    // Generate index file for successful builds
    const successfulResults = results.filter((r) => r.success);
    if (successfulResults.length > 0) {
      await this.generateIndex(successfulResults);
    }

    this.printSummary(results);
    return results;
  };

  private generateIndex = async (results: BuildResult[]): Promise<void> => {
    const templateNames = results.map((r) => r.templateName);
    const indexContent = await generateIndexFile(templateNames);
    const indexPath = path.join(this.options.outputDir, "index.ts");

    await fs.writeFile(indexPath, indexContent);

    if (this.options.verbose) {
      console.log(`📋 Generated index file: ${indexPath}`);
      console.log(`   Re-exports: ${templateNames.join(", ")}`);
    }
  };

  private printSummary = (results: BuildResult[]): void => {
    if (!this.options.verbose) return;

    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    console.log(`\n🎉 Processed ${successful.length} templates successfully`);

    if (failed.length > 0) {
      console.log(`❌ ${failed.length} failed:`);
      failed.forEach((r) => console.log(`   - ${r.filename}: ${r.error}`));
    }
  };
}
