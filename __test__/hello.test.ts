import { test, expect } from "vitest";
import { hashBuffer } from "../src/hash.mjs";
import { readFile } from "node:fs/promises";

test("hashBuffer", async () => {
  const fileBuffer1 = await readFile("./public/test-1.js");
  const fileBuffer2 = await readFile("./public/test-2.js");
  const hash1 = hashBuffer(fileBuffer1);
  const hash2 = hashBuffer(fileBuffer2);
  expect(hash1).toBe(
    "18c7ab0054c4b3b68f1ae6523a94e8b4373855b22f12e4bfda776f3a53295c1e"
  );
  expect(hash2).toBe(
    "f9809b010c11f87ee3ceda699012bb797bf4a3b861380831c84e6ad8616d5cf2"
  );
});
