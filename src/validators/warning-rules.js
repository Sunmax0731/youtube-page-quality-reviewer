function evaluateWarnings(item, profile) {
  const warnings = [];
  if (item[profile.warningField] === true) {
    warnings.push({ code: "manual-review", field: profile.warningField, message: profile.warningMessage });
  }
  return warnings;
}

module.exports = { evaluateWarnings };

