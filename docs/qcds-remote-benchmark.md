# QCDS Remote Benchmark

対象外の成熟 repo から、closed alpha の基準として以下を採用します。

| Repo | URL | 採用した基準 |
| --- | --- | --- |
| movie-telop-transcriber | https://github.com/Sunmax0731/movie-telop-transcriber | 代表データ、実測レポート、release属性、manual verification を証跡化する運用 |
| codex-remote-android | https://github.com/Sunmax0731/codex-remote-android | QCDS hardening、release precheck、security evidence、traceability を docs に残す運用 |

この repo では上記を、`samples/representative-suite.json`、`docs/qcds-strict-metrics.json`、`docs/qcds-regression-baseline.json`、`docs/security-privacy-checklist.md`、`docs/traceability-matrix.md`、release notes、docs ZIP に落とし込みます。

ZIPサイズ、生成時刻、環境依存パスは固定評価根拠にしません。

