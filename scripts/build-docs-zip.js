const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const repo = path.basename(root);
const dist = path.join(root, "dist");
fs.mkdirSync(dist, { recursive: true });
const zip = path.join(dist, `${repo}-docs.zip`);
if (fs.existsSync(zip)) fs.unlinkSync(zip);
execFileSync("powershell", [
  "-NoProfile",
  "-ExecutionPolicy",
  "Bypass",
  "-Command",
  "$ErrorActionPreference='Stop'; Compress-Archive -Path 'docs','README.md','AGENTS.md','SKILL.md','samples' -DestinationPath " + JSON.stringify(zip) + " -Force"
], { cwd: root, stdio: "inherit" });
console.log(`docs zip: ${zip}`);

