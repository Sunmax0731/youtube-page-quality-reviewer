const fs = require("fs");
const path = require("path");

const bad = [0x7e27, 0x90e2, 0x9aeb, 0xfffd].map((cp) => String.fromCodePoint(cp));
const exts = new Set([".md", ".json", ".js", ".html", ".css", ".py"]);
const root = path.resolve(__dirname, "..");
const skip = new Set([".git", "node_modules", "dist"]);
const offenders = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (exts.has(path.extname(entry.name))) {
      const text = fs.readFileSync(full, "utf8");
      if (bad.some((pattern) => text.includes(pattern))) offenders.push(path.relative(root, full));
    }
  }
}

walk(root);
if (offenders.length) {
  console.error("mojibake fragments found:");
  for (const file of offenders) console.error(" - " + file);
  process.exit(1);
}
console.log("mojibake-check: passed");

