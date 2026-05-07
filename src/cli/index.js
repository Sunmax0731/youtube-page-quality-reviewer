#!/usr/bin/env node
const fs = require("fs");
const { profile } = require("../product-profile");
const { evaluateBatch } = require("../core/audit-engine");
const { buildMarkdownReport } = require("../report/report-builder");

const file = process.argv[2] || "samples/representative-suite.json";
const scenarios = JSON.parse(fs.readFileSync(file, "utf8"));
const suiteResults = scenarios.map((scenario) => ({
  id: scenario.id,
  expected: scenario.expected,
  actual: evaluateBatch(profile, scenario.input)
}));

console.log(buildMarkdownReport(profile, suiteResults));

