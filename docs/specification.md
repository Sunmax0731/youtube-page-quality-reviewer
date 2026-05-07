# 仕様

## Input Model

- `samples/representative-suite.json` はシナリオ配列を持つ。
- 各シナリオは `input.items[]`、`expected.overall`、`expected.counts` を持つ。
- product profile は `src/product-profile/profile.json` に配置する。

## Output Model

- pass: 必須項目がそろい、警告もない。
- warning: 必須項目はそろうが、サムネイル、説明文、埋め込み表示など手動確認が必要です。
- fail: 必須項目が不足している。

## Representative Scenarios

| Scenario | Overall | Pass | Warning | Fail |
| --- | --- | ---: | ---: | ---: |
| happy-path | pass | 1 | 0 | 0 |
| missing-required | fail | 0 | 0 | 1 |
| warning | warning | 0 | 1 | 0 |
| mixed-batch | fail | 1 | 1 | 1 |

## Option Comparison

| Option | 内容 | 評価 |
| --- | --- | --- |
| A | ホスト固有機能だけを先に作る | 自動検証が弱く release evidence が残りにくい |
| B | 共通 audit core と host shell を分ける | closed alpha で検証しやすく、後続UI拡張も容易 |
| C | ドキュメントだけを先に整備する | 実装と代表データが不足する |

Chosen option: B。理由は、代表シナリオ、CLI、host shell、docs を同じ品質ゲートで検証できるためです。

