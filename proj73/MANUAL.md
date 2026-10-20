# 南海トラフ津波広域伝播シミュレーター 操作マニュアル
# Nankai Trough Tsunami Simulator - User Manual

本シミュレーターの操作マニュアルは、**日本語版** および **英語版 (English)** の両方をご用意しております。
以下のリンクからそれぞれの詳細マニュアルをご参照ください。

Detailed documentation is available in both **Japanese** and **English**. Please refer to the respective manuals below:

* 🇯🇵 **[日本語マニュアル (Japanese Manual)](./MANUAL_JA.md)**
  * はじめに・2段階シミュレーション構想
  * 動作環境・インストール手順（Web版 / macOS DMG / Windows EXE）
  * 画面構成と基本操作（地震シナリオ、Mw/すべり量調整、観測点追加）
  * 市街地連携用 CSV エクスポート仕様（方式A: 全期間 / 方式B: 市街地連携用トリミング）
  * 物理モデル・数値解法（Okadaモデル、SWE、C-grid、Shapiroフィルター）
  * よくある質問 (FAQ)

* 🇺🇸 **[English User Manual](./MANUAL_EN.md)**
  * Introduction & Two-Phase Simulation Architecture
  * Requirements & Installation (Web / macOS DMG / Windows EXE)
  * UI Overview & Operations (Scenarios, Mw/Slip tuning, Custom points)
  * Phase 2 City Inundation CSV Export (Mode A: Full / Mode B: Trimmed)
  * Physics & Numerical Methods (Okada, SWE, C-grid, Shapiro filter)
  * Frequently Asked Questions (FAQ)

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
# macOS: ルートの NankaiTroughTsunami.dmg を開いて直接インストール可能
# 開発・ビルドコマンド:
cd nankai_trough_desktop
npm install
npm run tauri dev    # 開発起動 / Dev mode
npm run tauri build  # パッケージビルド (DMG / EXE)
```
