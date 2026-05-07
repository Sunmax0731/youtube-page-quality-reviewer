const assert = require("assert");
const fs = require("fs");
const { profile } = require("../src/product-profile");
const { evaluateBatch } = require("../src/core/audit-engine");

const scenarios = JSON.parse(fs.readFileSync("samples/representative-suite.json", "utf8"));
const requiredIds = ["happy-path", "missing-required", "warning", "mixed-batch"];
assert.deepStrictEqual(scenarios.map((s) => s.id), requiredIds);

for (const scenario of scenarios) {
  const actual = evaluateBatch(profile, scenario.input);
  assert.strictEqual(actual.overall, scenario.expected.overall, scenario.id);
  assert.deepStrictEqual(actual.counts, scenario.expected.counts, scenario.id);
}

console.log(`representative-suite: ${scenarios.length} scenarios passed`);

