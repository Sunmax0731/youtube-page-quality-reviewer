# AGENTS

この repo は `youtube-page-quality-reviewer` の closed alpha 実装単位です。

## Scope

- Root: `D:\AI\ChromeExtension\youtube-page-quality-reviewer`
- Domain: ChromeExtension
- Product kind: chrome-extension
- Source pack: `D:/AI/ChromeExtension/created_idea_006_youtube-page-quality-reviewer/idea_006_youtube-page-quality-reviewer.zip`
- Public repo: `https://github.com/Sunmax0731/youtube-page-quality-reviewer`

## Working Rules

- README、AGENTS、SKILL、docs を同じ変更単位で更新する。
- created_idea は `D:/AI/ChromeExtension/created_idea_006_youtube-page-quality-reviewer` を正とし、同梱 ZIP の `metadata.json` と repo 名が一致することを確認する。
- ZIPサイズや生成時刻のように揺れる値を QCDS の固定評価根拠にしない。
- mojibake 判定は `npm test` 内の `scripts/check-mojibake.js` で行う。
- 手動テストは Codex では実施しない。未実施項目を docs に残して release notes にも転記する。
- 作業ブランチは `codex/closed-alpha-release` の1本だけを使い、完了後にローカル/リモートから削除する。
- Git on Windows may warn that generated JSON LF will be replaced by CRLF. Treat this as line-ending normalization only; rerun `npm test` to regenerate docs ZIP and do not use newline-only churn as QCDS evidence.
