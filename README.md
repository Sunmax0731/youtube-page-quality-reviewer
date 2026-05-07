# 公開ページ・YouTube・表示品質レビュー

youtube-page-quality-reviewer は YouTube投稿者、LP運用者、公開前レビュー担当者 向けの closed alpha プロダクトです。URL、ページ種別、表示品質シグナル、修正メモを集め、公開前に見落としを分類する。

## Source

- PICKUP Rank: 41
- Domain / Idea No: ChromeExtension / 6
- Repository: youtube-page-quality-reviewer
- 主な公開先: Chrome Web Store
- created_idea: `D:/AI/ChromeExtension/created_idea_006_youtube-page-quality-reviewer`
- 同梱ZIP: `D:/AI/ChromeExtension/created_idea_006_youtube-page-quality-reviewer/idea_006_youtube-page-quality-reviewer.zip`
- 開始時 README: 存在しない


## Alpha Scope

- 代表シナリオ4件の自動検証
- 必須項目不足、警告、混在バッチの分類
- extension/ のホスト連携シェル
- QCDS、security/privacy、traceability、release checklist、manual test docs
- docs ZIP: `dist/youtube-page-quality-reviewer-docs.zip`

## Commands

```powershell
npm test
node src/cli/index.js samples/representative-suite.json
npm run build:docs
```

手動テストは Codex 側では未実施です。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` にあります。

