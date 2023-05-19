#! /usr/bin/env node
import meow from "meow";
import { cohash } from "./hash.mjs";

const cli = meow(
  `
	Usage
	  $ cohash <input>

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
      output: { shortFlag: "o" },
    },
  }
);

cohash(cli.input, cli.flags);
