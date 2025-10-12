#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcDir = path.resolve(root, "registry/vue/v1/ui");
const destRoot = path.resolve(root, "packages/ui/src/components");
const packageIndex = path.resolve(root, "packages/ui/src/index.ts");

function toPascalCase(str) {
  return str
    .replace(/[-_]+/g, " ")
    .replace(/\s+(.)(\w*)/g, (_m, p1, p2) => p1.toUpperCase() + p2)
    .replace(/^(.)/, m => m.toUpperCase());
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyComponent(file) {
  const base = path.basename(file, ".vue"); // e.g., button
  const compName = toPascalCase(base); // e.g., Button
  const srcPath = path.join(srcDir, file);
  const destDir = path.join(destRoot, base);
  const destFile = path.join(destDir, `${base}.vue`);
  const indexFile = path.join(destDir, "index.ts");

  await ensureDir(destDir);
  const contents = await fs.readFile(srcPath, "utf8");
  await fs.writeFile(destFile, contents, "utf8");
  const exportLine = `export { default as ${compName} } from './${base}.vue'\n`;
  await fs.writeFile(indexFile, exportLine, "utf8");
  return { base, compName };
}

async function main() {
  await ensureDir(destRoot);
  const entries = await fs.readdir(srcDir);
  const vueFiles = entries.filter(f => f.endsWith(".vue"));
  const exported = [];
  for (const f of vueFiles) {
    const info = await copyComponent(f);
    exported.push(info);
  }

  // Write root index.ts aggregating component folder exports
  const lines = `${exported
    .map(({ base }) => `export * from './components/${base}'`)
    .join("\n")}\n`;
  await fs.writeFile(packageIndex, lines, "utf8");
  console.warn(`Synced ${exported.length} components to packages/ui`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
