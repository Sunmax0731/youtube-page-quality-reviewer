const { validateRequiredFields } = require("../validators/required-fields");
const { evaluateWarnings } = require("../validators/warning-rules");

function evaluateItem(profile, item) {
  const errors = validateRequiredFields(item, profile.requiredFields);
  const warnings = errors.length > 0 ? [] : evaluateWarnings(item, profile);
  const status = errors.length > 0 ? "fail" : warnings.length > 0 ? "warning" : "pass";
  return {
    id: item.id || "item",
    status,
    errors,
    warnings,
    item
  };
}

function evaluateBatch(profile, input) {
  const items = Array.isArray(input.items) ? input.items : [input.item || input];
  const results = items.map((item) => evaluateItem(profile, item));
  const counts = {
    pass: results.filter((r) => r.status === "pass").length,
    warning: results.filter((r) => r.status === "warning").length,
    fail: results.filter((r) => r.status === "fail").length
  };
  const overall = counts.fail > 0 ? "fail" : counts.warning > 0 ? "warning" : "pass";
  return { overall, counts, results };
}

module.exports = { evaluateItem, evaluateBatch };

