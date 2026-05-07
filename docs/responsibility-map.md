# 責務分割

| Area | Path | Responsibility |
| --- | --- | --- |
| Product profile | `src/product-profile` | 必須項目、警告項目、対象ユーザー、domain metadata |
| Core | `src/core` | item / batch の評価 |
| Validators | `src/validators` | 必須項目と警告ルール |
| Report | `src/report` | Markdown evidence 生成 |
| Review model | `src/review-model` | QCDS grade 判定 |
| CLI | `src/cli` | JSON入力とレポート出力 |
| Host shell | `extension/` | chrome-extension 用の最小連携面 |
| Docs | `docs` | 要件、仕様、設計、テスト、release evidence |

