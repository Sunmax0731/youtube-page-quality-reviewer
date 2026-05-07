# SKILL

公開ページ・YouTube・表示品質レビュー を保守するときの実行ガイドです。

## Start Order

1. `README.md` を読む。
2. `docs/source-idea-pack.json` で PICKUP 行、created_idea、ZIP、domain docs を確認する。
3. `samples/representative-suite.json` と `src/product-profile/profile.json` を確認する。
4. 変更後は `npm test` を実行する。
5. release 前は `docs/release-checklist.md` と `docs/releases/v0.1.0-alpha.1.md` を更新する。

## Validation Contract

- 代表シナリオは happy-path、missing-required、warning、mixed-batch を必ず維持する。
- QCDS は Quality、Cost、Delivery、Satisfaction を `S+ / S- / A+ / A- / B+ / B- / C+ / C- / D+ / D-` で評価する。
- A- 未満の観点がある場合は `docs/qcds-strict-gap-analysis.md` に理由と改善を記録し、A- 以上へ戻してから release する。
- docs ZIP は `dist/youtube-page-quality-reviewer-docs.zip` に再生成する。

