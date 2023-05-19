import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import fileSize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";
import { readFile } from "fs/promises";

const jsonString = await readFile("./package.json", "utf8");
const libraryName = JSON.parse(jsonString).name;

export default {
  input: {
    hash: "src/hash.mjs",
    cli: "src/index.mjs",
  },
  output: [
    {
      entryFileNames: "entry-hash",
      dir: `./dist/hash.cjs`,
      format: "cjs",
    },
    {
      entryFileNames: "entry-hash",
      dir: `./dist/hash.mjs`,
      format: "esm",
    },
    {
      entryFileNames: "entry-hash",
      dir: `./dist/cli/${libraryName}.cjs`,
      format: "cjs",
    },
    {
      entryFileNames: "entry-hash",
      dir: `./dist/cli/${libraryName}.mjs`,
      format: "esm",
    },
  ],
  plugins: [
    json(),
    commonjs(),
    nodeResolve(),
    typescript(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
    fileSize(),
  ],
};
