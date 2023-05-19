import { readFile } from "node:fs/promises";
import { createHash } from "crypto";

async function hash(path) {
  const fileBuffer = await readFile(path);
  const hash = createHash("sha256");
  hash.update(fileBuffer);
  return hash.digest("hex");
}

export { hash };
