# 手動テスト

Codex 側では手動テスト未実施です。

## 作業ディレクトリ

`D:\AI\ChromeExtension\youtube-page-quality-reviewer`

## 必要ファイル

- `package.json`
- `samples/representative-suite.json`
- `src/product-profile/profile.json`
- `extension/`
- `docs/release-checklist.md`

## セットアップ手順

1. 作業ディレクトリ `D:\AI\ChromeExtension\youtube-page-quality-reviewer` で `npm test` を実行します。
2. Chrome の `chrome://extensions` を開き、Developer mode を有効にします。
3. `extension/` を Load unpacked で読み込みます。
4. 任意の公開ページまたはYouTubeページを開き、ポップアップと content script の表示を確認します。

## 実施手順

1. `npm test` が通ることを確認する。
2. `node src/cli/index.js samples/representative-suite.json` を実行する。
3. 出力された Markdown レポートで4シナリオの分類を確認する。
4. Chrome拡張を読み込み、ポップアップで現在ページの情報が保存されることを確認する。

## 期待結果

- happy-path は pass。
- missing-required は fail。
- warning は warning。
- mixed-batch は pass 1、warning 1、fail 1。
- docs ZIP が `dist/youtube-page-quality-reviewer-docs.zip` に存在する。

## 未実施の手動確認項目

- 実ホスト上の表示確認
- 実データでの分類妥当性確認
- BOOTHまたはChrome Web Store向け説明文の最終確認
- ユーザー環境でのインストール手順確認

