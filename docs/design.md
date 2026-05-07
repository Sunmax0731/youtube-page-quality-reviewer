# 設計

## Design Direction

公開ページQA の利用者が最初に見るべき情報は、対象、状態、次アクションです。closed alpha では派手な見た目より、失敗、警告、成功の判別を安定させます。

## UI / UX Options

| Option | 内容 | 採否 |
| --- | --- | --- |
| 1 | ホスト内パネル中心 | 採用。対象ホスト内の作業文脈に合う。 |
| 2 | CLI中心 | 採用。自動テストと release evidence を残しやすい。 |
| 3 | 大型ダッシュボード | 不採用。closed alpha では範囲過大。 |

## Chosen Layout

- Primary action: 代表データまたは現在対象の検品を実行する。
- Result view: pass / warning / fail の数と理由を表示する。
- Evidence: Markdown レポート、QCDS metrics、traceability、release checklist に残す。

