# Traceability Matrix

| Requirement | Implementation | Test | Docs |
| --- | --- | --- | --- |
| R1 必須項目検査 | `src/validators/required-fields.js` | `missing-required` | `docs/requirements.md` |
| R2 警告分類 | `src/validators/warning-rules.js` | `warning` | `docs/specification.md` |
| R3 バッチ集計 | `src/core/audit-engine.js` | `mixed-batch` | `docs/test-plan.md` |
| R4 レポート出力 | `src/report/report-builder.js` | `node src/cli/index.js` | `docs/user-guide.md` |
| R5 release evidence | `scripts/build-docs-zip.js` | `npm test` | `docs/releases/v0.1.0-alpha.1.md` |

