# 東京都 ルートナビ — 使用マニュアル / Tokyo Route Finder — User Manual

本ドキュメントは、**東京都 ルートナビ（Tokyo Route Finder）** の日本語・英語併記の使用マニュアルです。  
アプリ画面右上の **「使い方マニュアル / User Manual」** ボタンからも、同じ内容をいつでも閲覧できます。

---

## 🇯🇵 日本語マニュアル (Japanese User Manual)

### 1. アプリの概要
**東京都 ルートナビ** は、東京都全域（23区・多摩エリア）および周辺地域において、**出発地（地点A）** から **目的地（地点B）** までの経路を **「徒歩（人）」** または **「自動車（車）」** で探索し、**2通りのルート候補** を地図上で比較できるWebアプリケーションです。

### 2. 起動方法
```bash
cd tokyo_route
npm install
npm run dev
```
ブラウザで表示されたURL（通常 `http://localhost:5173`）を開きます。

### 3. 画面の基本操作

#### ① 言語の切り替え（日本語 ⇔ 英語）
- 左サイドバー上部の **「English / 日本語」** ボタンを押すと、画面表示・スポット名・ナビゲーション案内（右左折などのステップ表示）が即座に日英で切り替わります。

#### ② 移動手段の切り替え（徒歩 / 自動車）
- **「徒歩（人）」タブ**: 歩道・公園内の遊歩道（代々木公園、上野恩賜公園など）・階段・横断歩道などを通り、車の一方通行規制に縛られず**最短距離**となるルートを算出します。
- **「自動車（車）」タブ**: 車道のみを通行し、一方通行規制や交差点での右左折コストを守りながら、幹線道路（明治通り・青山通り・環状七号線・首都高速など）を優先して**所要時間が短いルート**を算出します。

#### ③ 地点A（出発地）・地点B（目的地）の指定方法（3通り）
1. **地図クリック / ピンのドラッグ移動**
   - 地点Aまたは地点Bのカード内にある **「地図で指定」** をクリックして対象を選び、右側の地図上の任意の場所をクリックするとピンが移動します。
   - 地図上の赤いピン（**A**）や濃紺のピン（**B**）を直接マウスでドラッグ＆ドロップして場所を動かすことも可能です。
2. **東京都内の主要スポット（18箇所）から選択**
   - プルダウンメニューから、東京駅・新宿駅・東京都庁・渋谷駅・代々木公園・明治神宮・表参道ヒルズ・東京タワー・六本木ヒルズ・池袋駅・上野公園・浅草寺・東京スカイツリー・秋葉原駅・お台場海浜公園・下北沢駅・吉祥寺駅・立川駅をワンクリックで選択できます。
3. **住所・駅名・施設名のフリーワード検索**
   - 検索欄に「東京ドーム」「羽田空港」「三鷹の森ジブリ美術館」などの名称や住所を入力し、`Enter` キーまたは虫眼鏡ボタンを押すと候補リストが表示されます。候補をクリックするとその地点にピンが移動します。
4. **A・Bの入れ替え**
   - 中央の **「A・Bを入れ替え」** ボタンを押すと、出発地と目的地を反転して再検索します。

#### ④ 2通りのルート候補の比較と詳細ナビ
- **第1候補（ネオンマゼンタ色 `#FF007F`）**: 最も所要時間が短い推奨ルートです。
- **第2候補（ビビッドブルー色 `#0055FF`）**: 第1候補とは別の道路を経由する代替ルートです。
- 左側のルートカード、または地図上のルート線をクリックすると、選択中のルートがハイライト（実線＋二重縁取り）されます。
- カード下部の **「詳細な経路ナビ（Nステップ）」** をクリックすると、出発から到着までの交差点ごとの右左折・直進案内と区間距離が一覧表示されます。

---

## 🌐 English User Manual

### 1. Overview
**Tokyo Route Finder** is an interactive route planning web application covering all of Tokyo (the 23 Special Wards, the Tama Area, and surrounding regions). It calculates and visually compares **2 distinct route candidates** from **Origin (Point A)** to **Destination (Point B)** for either **Walking (Foot)** or **Driving (Car)**.

### 2. Getting Started
```bash
cd tokyo_route
npm install
npm run dev
```
Open the local URL displayed in your terminal (typically `http://localhost:5173`) in your web browser.

### 3. How to Use

#### ① Switching Languages (Japanese ⇔ English)
- Click the **“English / 日本語”** button in the top-right corner of the left sidebar to switch all UI labels, preset landmark names, and turn-by-turn navigation instructions between Japanese and English.

#### ② Choosing Travel Mode (Walking vs. Driving)
- **Walking (Foot)**: Prioritizes the **shortest distance** using sidewalks, pedestrian streets, stairs, and park pathways (e.g., inside Yoyogi Park or Ueno Park), ignoring vehicle one-way street restrictions.
- **Driving (Car)**: Strictly follows vehicle roads and one-way regulations, prioritizing faster arterial roads and highways to minimize **estimated travel time**.

#### ③ Setting Point A (Origin) & Point B (Destination) — 3 Ways
1. **Click on Map / Drag Pins**
   - Click **“Pick on Map”** on either the Point A or Point B card, then click anywhere on the map to place the pin.
   - You can also directly drag and drop the Red Pin (**A**) or Dark Navy Pin (**B**) anywhere on the map.
2. **Select from 18 Major Tokyo Landmarks (Presets)**
   - Use the dropdown menu to quickly select major hubs across Tokyo: Tokyo Station, Shinjuku Station, Tokyo Metropolitan Government Building, Shibuya Station, Yoyogi Park, Meiji Jingu, Omotesando Hills, Tokyo Tower, Roppongi Hills, Ikebukuro Station, Ueno Park, Senso-ji (Asakusa), Tokyo Skytree, Akihabara Station, Odaiba Marine Park, Shimokitazawa Station, Kichijoji Station, and Tachikawa Station.
3. **Free-Text Address / Place Search**
   - Type any station, address, or landmark name in Tokyo into the search input and press `Enter` (or click the search button). Select a result from the dropdown list to set the point.
4. **Swap A & B**
   - Click the **“Swap A & B”** button between the two cards to reverse your origin and destination.

#### ④ Comparing the 2 Route Candidates & Turn-by-Turn Directions
- **Option 1 (Neon Magenta `#FF007F`)**: The recommended fastest route.
- **Option 2 (Electric Blue `#0055FF`)**: An alternative route taking different streets.
- Click either route card in the sidebar or click the route polyline directly on the map to focus on that route.
- Click **“Turn-by-Turn Directions (N steps)”** at the bottom of a route card to expand step-by-step street instructions and segment distances.

