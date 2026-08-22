# CYBER YOLO — Landing Page

[cyber-yolo.netlify.app](https://cyber-yolo.netlify.app/)（`../yolo-web-tool`）を紹介する静的なランディングページです。ビルド不要のプレーンな HTML/CSS/JS のみで構成しています。

## ローカルで確認

```bash
npx serve .
# もしくは
python3 -m http.server 8080
```

## デプロイ

ビルド不要の静的サイトなので、このフォルダをそのまま Netlify / Vercel / GitHub Pages などにデプロイできます。

- Netlify: このフォルダをドラッグ&ドロップ、または `Build command` なし・`Publish directory` を `.` に設定
- ツール本体（アプリ）へのリンクは `index.html` 内の `https://cyber-yolo.netlify.app/` を参照しています。URLが変わる場合は一括置換してください。

## ファイル構成

- `index.html` — ページ本体
- `styles.css` — スタイル（`../yolo-web-tool` のカラーパレット・フォントに合わせたサイバーパンク調デザイン）
- `script.js` — スクロール時のフェードインだけを行う最小限のJS
- `assets/favicon.svg` — `../yolo-web-tool/public/favicon.svg` と共通のファビコン
