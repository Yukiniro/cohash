import { readFile } from "node:fs/promises";
import { createHash } from "crypto";

const filePath = "./public/audioChunkMerge.min.js";
const fileBuffer = await readFile(filePath);
const hash = createHash("sha256");
hash.update(fileBuffer);
console.log(hash.digest("hex"));
