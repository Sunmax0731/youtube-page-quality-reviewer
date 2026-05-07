# ユーザーガイド

## 基本操作

1. 代表データまたは実データJSONを準備する。
2. `node src/cli/index.js <json>` を実行する。
3. pass / warning / fail を確認する。
4. warning は手動確認、fail は必須項目修正を行う。

## 判定の読み方

- pass: 公開前または納品前の最低条件を満たす。
- warning: 自動判定だけでは判断できない確認が残る。
- fail: 必須項目不足により進めない。

