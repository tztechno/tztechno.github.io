# connect4_cube_LP

"Cyber Connect 4 Cube" のランディングページ。`index.html` 一枚に完結した静的ページ（画像もbase64で埋め込み済み、ビルド不要）。

- プレイ導線: 「今すぐ無料でプレイ」ボタン → https://cyber-connect4-cube.netlify.app/
- フォント: Google Fonts (Rajdhani / Manrope / JetBrains Mono) をCDN読み込み、それ以外は完全に自己完結

## ローカルで確認

`index.html` をブラウザで直接開くだけ。

```bash
open index.html
```

## デプロイ（Netlify）

このディレクトリごと新規サイトとして接続するだけ（`netlify.toml` に `publish = "."` を設定済み、ビルドコマンド不要）。
