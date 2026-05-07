const gradeOrder = ["D-", "D+", "C-", "C+", "B-", "B+", "A-", "A+", "S-", "S+"];

function gradeAtLeast(actual, minimum) {
  return gradeOrder.indexOf(actual) >= gradeOrder.indexOf(minimum);
}

function evaluateQcds(metrics) {
  const grades = metrics.qcds.grades;
  return Object.entries(grades).map(([key, grade]) => ({
    key,
    grade,
    passes: gradeAtLeast(grade, "A-")
  }));
}

module.exports = { gradeOrder, gradeAtLeast, evaluateQcds };

