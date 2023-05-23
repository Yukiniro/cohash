#! /usr/bin/env node
import meow from "meow";
import { cohash } from "./hash.mjs";

const cli = meow(
  `
	Usage
	  $ cohash <input>

  Flags
    --version or -v: Log the version of cohash.
    --help or -h: Log help info.
    --output or -o: Specify the address of the generated file. It will log the hash value to the terminal if there is no --output or -o.
    --length or -l: Limit the length of the hash value.
    --stream or -s: Default is true. Whether to read as a file stream.

	Examples
	  $ cohash ./test.js
	  $ cohash ./test.js -l 6
`,
  {
    importMeta: import.meta,
    flags: {
      version: { shortFlag: "v" },
      help: { shortFlag: "h" },
      length: { type: "string", shortFlag: "l" },
      output: { type: "string", shortFlag: "o" },
      stream: { type: "boolean", default: true, shortFlag: "s" },
    },
  }
);

cohash(cli.input, cli.flags);
