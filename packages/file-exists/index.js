#!/usr/bin/env node
import path from "node:path";
import fse from "fs-extra";
import meow from "meow";

const cli = meow(
  `
	Usage
	  $ exists <file-path> [options]

	Options
    --reverse, -r   Reverse output
    --silent, -s    Silent output, except \`onError\` command
    --onError       Execute command on error
    --help          Show this help message

	Examples
	  $ exists ./package.json --reverse
`,
  {
    importMeta: import.meta,
    flags: {
      reverse: {
        type: "boolean",
        shortFlag: "r",
        default: false,
      },
      silent: {
        type: "boolean",
        shortFlag: "s",
        default: false,
      },
      onError: {
        type: "string",
        default: "",
      },
    },
  },
);

/**
 * console wrapper
 * @typedef {"log"|"debug"|"error"|"info"|"warn"} LogType
 * @param {LogType} [type="log"] - console type
 */
const consola = (type = "log", ...args) => {
  if (!cli.flags.silent) {
    console[type]?.(...args);
  }
};
consola.log = (...args) => consola("log", ...args);
consola.info = (...args) => consola("info", ...args);
consola.error = (...args) => consola("error", ...args);

const main = async () => {
  const filePath = cli.input[0];
  const { reverse } = cli.flags;

  // check if argument is not empty
  if (!filePath) {
    consola.error("No file path provided.");
    return cli.showHelp?.();
  }

  const isFileExists = await fse.exists(filePath);
  let exitCode, message;

  if (isFileExists) {
    message = `File "${path.resolve(filePath)}" exists.`;
  } else {
    message = `File "${path.resolve(filePath)}" does not exists.`;
  }

  if (reverse) {
    exitCode = isFileExists ? 1 : 0;
  } else {
    exitCode = isFileExists ? 0 : 1;
  }

  consola.info(message);

  if (cli.flags.onError && exitCode !== 0) {
    consola.info(`Executing command "${cli.flags.onError}"`);
    const { execa } = await import("execa");
    const onErrorReturn = await execa(cli.flags.onError, {
      shell: true,
      stdio: "inherit",
    });

    exitCode = onErrorReturn.exitCode;
  }

  process.exit(exitCode);
};

main();
