const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { evaluateQcds } = require("../src/review-model/qcds");

const root = path.resolve(__dirname, "..");
const repo = path.basename(root);
const requiredDocs = ["requirements.md","specification.md","design.md","implementation-plan.md","test-plan.md","manual-test.md","installation-guide.md","user-guide.md","release-checklist.md","responsibility-map.md","ui-ux-polish.md","post-mvp-roadmap.md","competitive-benchmark.md","evaluation-criteria.md","qcds-evaluation.md","qcds-remote-benchmark.md","qcds-strict-gap-analysis.md","security-privacy-checklist.md","traceability-matrix.md","strict-manual-test-addendum.md","releases/v0.1.0-alpha.1.md"];
for (const doc of requiredDocs) {
  assert.ok(fs.existsSync(path.join(root, "docs", doc)), `missing docs/${doc}`);
}
const metrics = JSON.parse(fs.readFileSync(path.join(root, "docs/qcds-strict-metrics.json"), "utf8"));
const qcds = evaluateQcds(metrics);
for (const result of qcds) assert.ok(result.passes, `${result.key} is below A-`);
assert.ok(fs.existsSync(path.join(root, "dist", `${repo}-docs.zip`)), "docs zip missing");
assert.strictEqual(metrics.release.manualTestByCodex, "not-run");
console.log("qcds-check: passed");

