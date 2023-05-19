import { test, expect } from "vitest";
import { sayHello } from "../src/hash.mjs/index.js";

test("hello world", () => {
  expect(sayHello()).toBe("Hello World");
});
