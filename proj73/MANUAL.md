# 南海トラフ津波広域伝播シミュレーター 操作マニュアル
# Nankai Trough Tsunami Simulator - User Manual

本シミュレーターの操作マニュアルは、**日本語版** と **英語版 (English)** があります。

Detailed documentation is available in both **Japanese** and **English**:

* 🇯🇵 **[日本語マニュアル (Japanese Manual)](./MANUAL_JA.md)**
  * はじめに・2段階シミュレーション構想（計算範囲は日本全国）
  * 動作環境・起動方法（Web版 / デスクトップ版）・データの準備
  * 画面構成
  * 地震シナリオ（南海トラフ・歴史地震・2011年東北・内閣府 南海トラフ巨大地震 ケース①〜⑤）
  * 震源断層の設定（震源クリック指定でのプレート境界 (USGS Slab) 自動設定と手動調整）
  * シミュレーションの実行・地図の操作と表示
  * 観測地点と波形グラフ
  * アニメーションの動画保存（MP4）
  * CSV出力（全期間 / 市街地連携用、地震発生からの経過時間つき）
  * 物理モデルの概要・制約と注意事項・FAQ・出典

* 🇺🇸 **[English User Manual](./MANUAL_EN.md)**
  * Introduction & two-phase concept (Japan-wide domain)
  * Requirements, launch (Web / Desktop) & data preparation
  * Screen layout
  * Earthquake scenarios (Nankai Trough, historical events, 2011 Tohoku, Cabinet Office Nankai Trough Megaquake Cases 1–5)
  * Source fault setup (automatic plate-interface setup from USGS Slab with Pick Epicenter, and manual adjustment)
  * Running the simulation, map controls & display
  * Observation points & waveform chart
  * Saving the animation as video (MP4)
  * CSV export (full timeline / city simulation, with time since the earthquake)
  * Physical model overview, limitations, FAQ, references

---

## クイックスタート / Quick Start

### 1. Web版の起動 (Web App)
```bash
cd nankai_trough
npm install
npm run dev
# Browser: http://localhost:5173/
```

### 2. デスクトップ版 (Desktop App - macOS & Windows)
```bash
# macOS: NankaiTroughTsunami_<version>_aarch64.dmg を開いてインストール
# Windows: NankaiTroughTsunami_<version>_x64-setup.exe を実行
# 開発・ビルド / Dev & build:
cd nankai_trough_desktop
npm install
npm run tauri dev    # 開発起動 / Dev mode
npm run tauri build  # パッケージビルド (DMG / EXE)
```
