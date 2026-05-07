function buildMarkdownReport(profile, suiteResults) {
  const lines = [
    `# ${profile.title} 検証レポート`,
    "",
    `- Repository: ${profile.name}`,
    `- Domain: ${profile.domain}`,
    `- Kind: ${profile.kind}`,
    `- Host: ${profile.host || "n/a"}`,
    "",
    "| Scenario | Overall | Pass | Warning | Fail |",
    "| --- | --- | ---: | ---: | ---: |"
  ];
  for (const result of suiteResults) {
    lines.push(`| ${result.id} | ${result.actual.overall} | ${result.actual.counts.pass} | ${result.actual.counts.warning} | ${result.actual.counts.fail} |`);
  }
  return lines.join("\n");
}

module.exports = { buildMarkdownReport };

