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
  input: "src/hash.mjs",
  output: [
    {
      file: `./dist/hash.cjs`,
      format: "cjs",
    },
    {
      file: `./dist/hash.mjs`,
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
