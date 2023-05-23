import { readFile, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { createHash } from "crypto";

async function hashFile(path, supportStream) {
  if (supportStream) {
    const rs = createReadStream(path);
    return await hashStream(rs);
  } else {
    const fileBuffer = await readFile(path);
    return hashBuffer(fileBuffer);
  }
}

function hashBuffer(buffer) {
  const hash = createHash("sha256");
  hash.update(buffer);
  return hash.digest("hex");
}

async function hashStream(stream) {
  const hash = createHash("sha256");
  await new Promise((resolve, reject) => {
    stream.on("readable", () => {
      try {
        const data = stream.read();
        if (data) {
          hash.update(data);
        } else {
          resolve();
        }
      } catch (e) {
        reject(e);
      }
    });
  });
  return hash.digest("hex");
}

async function cohash(input, flags) {
  const path = input[0];
  const { length, output, stream } = flags;
  console.log(flags);
  const fileBuffer = await readFile(path);
  const hashOriginValue = await hashFile(path, stream);
  const hashValue = hashOriginValue.slice(0, length);
  if (output) {
    const outputPath = output.replace(/\[hash\]/g, hashValue);
    await writeFile(outputPath, fileBuffer);
  } else {
    console.log(hashValue);
  }
}

export { cohash, hashBuffer, hashFile, hashStream };
