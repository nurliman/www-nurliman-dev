export type ComponentProp = {
  name: string;
  type: string;
  optional: boolean;
};

export type BuildResult = {
  templateName: string;
  filename: string;
  outputPath: string;
  success: boolean;
  error?: string;
};

export type BuildOptions = {
  templatesGlob?: string;
  outputDir?: string;
  verbose?: boolean;
};
