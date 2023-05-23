import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "crypto";

function hashBuffer(buffer) {
  const hash = createHash("sha256");
  hash.update(buffer);
  return hash.digest("hex");
}

async function cohash(input, flags) {
  const path = input[0];
  const { length, output } = flags;
  const fileBuffer = await readFile(path);
  const hashValue = hashBuffer(fileBuffer).slice(0, length);
  if (output) {
    const outputPath = output.replace(/\[hash\]/g, hashValue);
    await writeFile(outputPath, fileBuffer);
  } else {
    console.log(hashValue);
  }
}

export { cohash, hashBuffer };
