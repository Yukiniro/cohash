import { test, expect } from "vitest";
import { hashBuffer, hashFile } from "../src/hash.mjs";
import { readFile } from "node:fs/promises";

const filePath1 = "./public/test-1.js";
const filePath2 = "./public/test-2.js";

test("hashBuffer", async () => {
  const fileBuffer1 = await readFile(filePath1);
  const fileBuffer2 = await readFile(filePath2);
  const hash1 = hashBuffer(fileBuffer1);
  const hash2 = hashBuffer(fileBuffer2);
  expect(hash1).toBe(
    "18c7ab0054c4b3b68f1ae6523a94e8b4373855b22f12e4bfda776f3a53295c1e"
  );
  expect(hash2).toBe(
    "f9809b010c11f87ee3ceda699012bb797bf4a3b861380831c84e6ad8616d5cf2"
  );
});

test("hashFile buffer", async () => {
  const hashValue = await hashFile(filePath1);
  expect(hashValue).toBe(
    "18c7ab0054c4b3b68f1ae6523a94e8b4373855b22f12e4bfda776f3a53295c1e"
  );
});

test("hashFile stream", async () => {
  const hashValue = await hashFile(filePath1, true);
  expect(hashValue).toBe(
    "18c7ab0054c4b3b68f1ae6523a94e8b4373855b22f12e4bfda776f3a53295c1e"
  );
});
