import { readdirSync, writeFileSync } from "fs";
import path from "path";

const iconsDir = path.resolve("src/icons");
const files = readdirSync(iconsDir).filter((f) => f.endsWith(".tsx"));

const exports = files
  .map((file) => {
    const name = path.basename(file, ".tsx");
    return `export { default as ${name} } from "./icons/${name}";`;
  })
  .join("\n");

writeFileSync(path.resolve("src/index.ts"), exports + "\n");

console.log("✅ Index file generated successfully!");
