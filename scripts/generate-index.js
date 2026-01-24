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

// Native Index Generation
const nativeIconsDir = path.resolve("src/native-icons");
try {
  const nativeFiles = readdirSync(nativeIconsDir).filter((f) =>
    f.endsWith(".tsx"),
  );

  const nativeExports = nativeFiles
    .map((file) => {
      const name = path.basename(file, ".tsx");
      return `export { default as ${name} } from "./native-icons/${name}";`;
    })
    .join("\n");

  writeFileSync(path.resolve("src/index.native.ts"), nativeExports + "\n");
  console.log("✅ Native Index file generated successfully!");
} catch (error) {
  // Directory might not exist yet if only web build was run, or in first run
  console.log(
    "⚠️  Could not generate native index (directory might not exist yet):",
    error.message,
  );
}
