# テスト計画

## Automated

```powershell
cd D:\AI\ChromeExtension\youtube-page-quality-reviewer
npm test
```

検証対象:

- mojibake checker
- happy-path
- missing-required
- warning
- mixed-batch
- docs ZIP generation
- QCDS A-以上判定

## Manual

手動テストは Codex 側では未実施です。実施手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` を使用します。

