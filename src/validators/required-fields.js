function isMissing(value) {
  return value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0);
}

function validateRequiredFields(item, requiredFields) {
  return requiredFields
    .filter((field) => isMissing(item[field]))
    .map((field) => ({ code: "missing-required", field, message: `必須項目 ${field} が不足しています。` }));
}

module.exports = { validateRequiredFields };

