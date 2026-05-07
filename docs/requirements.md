# 要件定義

## 目的

公開ページ・YouTube・表示品質レビュー は、YouTube投稿者、LP運用者、公開前レビュー担当者 が URL、ページ種別、表示品質シグナル、修正メモを集め、公開前に見落としを分類する。

## Source

- PICKUP Rank: 41
- Domain / Idea No: ChromeExtension / 6
- Repository: youtube-page-quality-reviewer
- created_idea: `D:/AI/ChromeExtension/created_idea_006_youtube-page-quality-reviewer`
- ZIP: `D:/AI/ChromeExtension/created_idea_006_youtube-page-quality-reviewer/idea_006_youtube-page-quality-reviewer.zip`
- README確認: 開始時点では正式 repo が存在しないため、README.md は存在しない。

## Functional Requirements

- R1: url、pageTitle、publishTarget、qualitySignals を必須項目として検査する。
- R2: 必須項目不足は fail として分類する。
- R3: `needsHumanReview` が true の場合は warning として分類し、手動確認理由を返す。
- R4: 複数アイテムの mixed-batch を pass / warning / fail に集計する。
- R5: 結果を CLI と docs/release evidence で再利用できる形にする。

## Non Functional Requirements

- UTF-8 で Markdown / JSON / JS / HTML / Python を保存する。
- 外部通信を既定で行わず、サンプルとローカル入力だけで検証できる。
- 手動テスト未実施であることを release 前 docs に明記する。

