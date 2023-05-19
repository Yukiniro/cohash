#! /usr/bin/env node
import meow from "meow";
import { hash } from "./hash.mjs";

const cli = meow(
  `
	Usage
	  $ cohash <input>

	Examples
	  $ hash ./test.js
	  🌈 unicorns 🌈
`
);

hash(cli.input.at(0));
