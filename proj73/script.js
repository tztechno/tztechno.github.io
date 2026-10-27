/**
 * Nankai Trough Tsunami Simulator - Landing Page Script
 * Features:
 * - Bilingual (JA/EN) Real-time Language Switcher
 * - Interactive Scenario Tabs
 * - Real-time 2D Wave Equation Canvas Simulation
 */

// --- 1. Bilingual Translations Dictionary ---
const TRANSLATIONS = {
  ja: {
    navFeatures: '特徴',
    navArchitecture: '2段階構想',
    navScenarios: '想定シナリオ',
    navPhysics: '物理モデル',
    navDownload: '購入・入手',
    navDocs: 'マニュアル',
    btnGetApp: '製品ページ・購入',
    heroBadge: 'v1.3.1 最新版: 計算結果を、長さを指定してMP4動画に書き出し',
    heroTitle: "南海トラフから日本全国まで、<br><span class=\"gradient-text\">津波の広がり</span>を計算する。",
    heroDesc: 'Okada弾性転位モデルと2次元長波方程式（浅水方程式）で、日本全国の海域の津波伝播を計算。沖合観測点の水位・流速を、市街地遡上シミュレーション（Phase 2）の境界条件としてそのまま出力します。',
    btnStoreSub: '公式ストア・販売ページ',
    btnStoreMain: '製品版を入手する（cyber-matrix）',
    btnLearnMore: '機能・シミュレーション詳細',
    statSize: '軽量 (約4〜5MB)',
    statDomain: '広域1.5分メッシュ',
    statDomainVal: '日本全国',
    statTimeVal: '120<span class="unit">分</span>',
    statTime: '約1分で一括計算',
    featuresTitle: '4つの主な機能',
    featuresDesc: '論文の式に基づく津波の計算、市街地シミュレーション向けのデータ出力、プレート境界に沿った震源の設定、動画保存ができます。',
    feat1Title: '物理モデルに基づく計算',
    feat1Desc: 'Okada (1985) の弾性転位モデルで、断層運動による海底の隆起・沈降を計算（文献の検算値と一致を確認）。Arakawa C格子上の2次元長波方程式を、緯度ごとの格子間隔補正と半陰解法のマニング摩擦で安定に解きます。',
    feat2Title: 'プレート境界に沿った震源の自動設定',
    feat2Desc: '千島・日本海溝、伊豆・小笠原、南海トラフ・琉球のプレート境界形状（USGS Slab1.0、0.1度格子。Slab2にも対応）を内蔵。「🎯 震源クリック指定」で地図をクリックすると、その地点のプレート境界の深さ・走向・傾斜に沿って、マグニチュードに応じた大きさの断層を自動で配置。手動での微調整もできます。',
    feat3Title: '市街地遡上連携用 CSV 出力',
    feat3Desc: '全期間の時系列（方式A）に加え、第1波到達の2分前を t=0 として主要な波だけを切り出した「市街地連携用波形（方式B）」を出力。水位・東西/南北の流速（U, V）・流向に加え、各行に地震発生からの経過時間も記載します。',
    feat4Title: '動画保存 (MP4) と数値安定化',
    feat4Desc: '計算結果を、選んだ長さ（10〜60秒）のMP4動画にワンクリックで書き出し（再生しながらの録画も可能）。4次Shapiroフィルターで格子規模の数値ノイズだけを取り除き、外周の吸収層で計算範囲の端からの反射を防ぎます。日本全国・120分の計算は約1分。',
    archBadge: 'シミュレーション連携構想',
    archTitle: 'フェーズ1（広域海洋）からフェーズ2（市街地浸水）へ',
    archDesc: '沖合で計算した津波の水位・流速を、沿岸・市街地の浸水シミュレーションへ橋渡しします。',
    compTableTitle: '2つのエクスポート方式の使い分け',
    scenariosTitle: '内閣府想定・歴史地震・全国シナリオ',
    scenariosDesc: '内閣府の南海トラフ巨大地震モデル（ケース①〜⑤の概略再現）、歴史地震、2011年東北地方太平洋沖地震を切り替えて比較できます。',
    demoTitle: '波の広がりの簡易デモ',
    demoDesc: 'クリックした場所から波が広がる様子を、簡易な2次元波動方程式で表示するデモです。実際のアプリとは異なり、断層モデルや実際の海底地形は使っていません（上ほど浅い海として速度だけを変えています）。',
    canvasClickHint: '👆 クリックすると波が発生します',
    storeBadge: '公式ライセンス・販売',
    downloadTitle: '製品版のご購入・入手方法',
    downloadDesc: '製品版アプリ（macOS DMG / Windows EXE。海底地形・プレート境界データを同梱）のご購入・ダウンロードは、公式ストア（cyber-matrix）で承っております。',
    btnBuyMac: '販売ページで購入・入手',
    btnBuyWin: '販売ページで購入・入手',
    docsTitle: 'ドキュメント & マニュアル',
    docsDesc: '詳細な操作マニュアル（日本語・英語）と、物理モデル解説書をご用意しています。',
    heroVisualTitle: 'アプリ実画面',
    heroBadgeScenario: '南海トラフ全域連動 (M9.1)',
    heroBadgeTime: '地震発生から26分',
    archPhase1Desc: '震源断層（Okada） ➔ GEBCO海底地形（日本全国・1.5分メッシュ） ➔ 2次元長波方程式 ➔ 沖合観測点（室戸岬沖・潮岬沖・駿河湾口・宮城中部沖など既定13地点＋任意地点）の水位・流速・流向を時系列で記録。',
    archPhase2Desc: '本システムとは別の高解像度モデル。湾口・沖合の境界から本システムの波形を入力し、街路・防波堤・防潮堤・家屋への浸水深・流速を解析します。',
    phase2ImageNote: '※画像はイメージです',
    compRowsA: '約 2,400 行 (3秒刻み)',
    compRowsB: '主要波の通過まで（最大波の35分後または第1波到達の45分後の遅い方）。各行に地震発生からの経過時間つき',
    scLabelFaults: '断層モデル',
    scLabelSlip: '最大すべり量',
    scLabelHeight: '沖合観測点の最大水位 (計算値)',
    scLabelArrival: '最大波の時刻 (地震発生から)',
    scNote: '※本アプリ（v1.3.1。計算方法は v1.2.0 と同じ）で2時間計算した、沖合の観測点（水深数十〜数千m）の値です。海岸での津波高・遡上高は、浅い海で波が高くなるためこれより大きくなります。',
    macMeta: 'Apple Silicon (M1以降) 対応・macOS 10.15以降',
    physicsDocTitle: '物理モデル解説書 (Markdown・日本語)',
    physicsDocDesc: 'Okada (1985) の式、内閣府モデルの再構成方法、球面座標の長波方程式、数値フィルター・吸収層の検証結果、2011年東北の再現性まで、実装に即して解説。',
    archPhase1Badge: "Phase 1 (本システム)",
    archPhase1Title: "広域の津波伝播シミュレーション",
    archArrowLabel: "境界条件 CSV",
    archPhase2Badge: "Phase 2 (沿岸・都市モデル)",
    archPhase2Title: "市街地の津波遡上・浸水シミュレーション",
    compThMode: "出力方式",
    compThStart: "開始時間 (t=0)",
    compThRows: "データの範囲 (120分の計算)",
    compThUse: "主な用途",
    compModeA: "<span class=\"badge-tag\">方式A</span> <strong>全期間データ</strong>",
    compStartA: "地震発生の瞬間 (t = 0 s)",
    compUseA: "地震直後からの引き波・初動を含む全過程の確認・比較。",
    compModeB: "<span class=\"badge-tag tag-cyan\">方式B</span> <strong>市街地連携用波形</strong>",
    compStartB: "第1波到達の2分前を t = 0 とする",
    compUseB: "Phase 2 の市街地シミュレーションの境界条件。地震前の静かな時間を省き、計算時間を抑えられる。",
    canvasReset: "波面をリセット",
    demoHud: "● 簡易デモ (2次元波動方程式)",
    macTitle: "macOS デスクトップ版",
    macDesc: "Tauri v2 製のデスクトップアプリ。計算はすべてPC内で行い、インターネット接続なしでも動作します。CSV・MP4動画は「ダウンロード」フォルダに保存。",
    macPkg: "パッケージ形式: <strong>DMG (約 5.0 MB / v1.3.1)</strong>",
    winTitle: "Windows デスクトップ版",
    winDesc: "NSIS インストーラー形式。インターネット接続なしでも動作します。CSV・MP4動画は「ダウンロード」フォルダに保存。",
    winPkg: "パッケージ形式: <strong>NSIS セットアップ EXE (約 3.9 MB / v1.3.1)</strong>",
    webTitle: "Webブラウザ & 開発版",
    webDesc: "Node.js があれば、ローカルの開発サーバーで動かせます。",
    webPkg: "ローカル開発サーバー: <code>:5173</code>",
    jaManualTitle: "日本語版 操作マニュアル (HTML & Markdown)",
    jaManualDesc: "画面構成、地震シナリオ、震源断層の設定、動画保存、Phase 2 向けCSV出力、注意事項、FAQ をまとめた日本語の利用ガイド。",
    footerTop: "トップへ戻る",
    footerJaManual: "日本語マニュアル",
    pageTitle: "南海トラフ津波広域伝播シミュレーター | Nankai Trough Tsunami Simulator",
    altHero: "南海トラフ津波広域伝播シミュレーターの画面 (南海トラフ全域連動 M9.1、地震発生から26分)",
    altPhase1: "Phase 1 広域伝播 (内閣府ケース①、地震発生から9分のアプリ画面)",
    altPhase2: "Phase 2 市街地遡上 (イメージ図)"
  },
  en: {
    navFeatures: 'Features',
    navArchitecture: 'Architecture',
    navScenarios: 'Scenarios',
    navPhysics: 'Physics',
    navDownload: 'Pricing / Store',
    navDocs: 'Manuals',
    btnGetApp: 'Product Page / Store',
    heroBadge: 'v1.3.1: Export the Computed Result as an MP4 Video of a Chosen Length',
    heroTitle: "Simulate how <span class=\"gradient-text\">tsunamis spread</span><br>across the seas around Japan.",
    heroDesc: 'Computes tsunami propagation across the seas around all of Japan with the Okada elastic dislocation model and the 2D long-wave (shallow water) equations, and exports offshore water levels and velocities as boundary conditions for Phase-2 urban inundation simulations.',
    btnStoreSub: 'Official Store & Licensing',
    btnStoreMain: 'Get Product on cyber-matrix',
    btnLearnMore: 'Explore Features & Physics',
    statSize: 'Lightweight (about 4-5 MB)',
    statDomain: 'All-Japan 1.5-arcmin',
    statDomainVal: 'All Japan',
    statTimeVal: '120<span class="unit">min</span>',
    statTime: 'Fast-Forward in about 1 min',
    featuresTitle: '4 Main Features',
    featuresDesc: 'Tsunami computation based on published equations, data export for urban simulations, source setup along the plate interface, and video recording.',
    feat1Title: 'Physics-based Computation',
    feat1Desc: 'Computes coseismic seafloor uplift and subsidence with the Okada (1985) dislocation model (verified against the published check values). Solves the 2D long-wave equations on an Arakawa C-grid with latitude-dependent grid spacing and semi-implicit Manning friction.',
    feat2Title: 'Automatic Source Setup on the Plate Interface',
    feat2Desc: 'Built-in plate interface geometry for the Kuril-Japan, Izu-Bonin, and Nankai-Ryukyu subduction zones (USGS Slab1.0, 0.1-degree grid; Slab2 supported). With "🎯 Pick Epicenter", click the map to place a fault sized by magnitude along the local interface depth, strike, and dip, then fine-tune it manually.',
    feat3Title: 'Phase 2 City Run-up CSV Exports',
    feat3Desc: 'In addition to full-timeline data (Mode A), exports trimmed waveforms (Mode B) with t=0 at 2 minutes before the first arrival. Includes water level, east-west/north-south velocity (U, V), flow direction, and the time since the earthquake on every row.',
    feat4Title: 'MP4 Recording & Numerical Stability',
    feat4Desc: 'Export the computed result as an MP4 video of a chosen length (10-60 s) in one click, or record while playing. A 4th-order Shapiro filter removes only grid-scale noise, and an absorbing layer around the domain stops waves from reflecting back. A 120-minute Japan-wide run takes about 1 minute.',
    archBadge: 'Coupled Simulation Pipeline',
    archTitle: 'From Phase 1 (Regional Ocean) to Phase 2 (Urban Inundation)',
    archDesc: 'Passing offshore tsunami water levels and velocities on to coastal and urban inundation models.',
    compTableTitle: 'Choosing Between the 2 CSV Export Modes',
    scenariosTitle: 'Cabinet Office, Historical & Japan-wide Scenarios',
    scenariosDesc: 'Switch between the Cabinet Office Nankai Trough megaquake model (approximate reproduction of Cases 1-5), historical earthquakes, and the 2011 Tohoku-oki earthquake.',
    demoTitle: 'Simplified Wave Demo',
    demoDesc: 'A demo that shows waves spreading from where you click, using a simple 2D wave equation. Unlike the app, it uses no fault model or real bathymetry (only the wave speed changes, with shallower water toward the top).',
    canvasClickHint: '👆 Click to generate waves',
    storeBadge: 'Official Licensing & Store',
    downloadTitle: 'Purchase & License Options',
    downloadDesc: 'The app (macOS DMG / Windows EXE, with bathymetry and plate interface data included) is available from our official store on cyber-matrix.',
    btnBuyMac: 'Purchase on Store (macOS)',
    btnBuyWin: 'Purchase on Store (Windows)',
    docsTitle: 'Documentation & Manuals',
    docsDesc: 'User manuals in Japanese and English, and a physics model specification (Japanese).',
    heroVisualTitle: 'Actual app screen',
    heroBadgeScenario: 'Full Nankai Trough Rupture (M9.1)',
    heroBadgeTime: '26 min after the earthquake',
    archPhase1Desc: 'Source fault (Okada) ➔ GEBCO bathymetry (all of Japan, 1.5-arcmin grid) ➔ 2D long-wave equations ➔ water level, velocity, and flow direction time series at offshore points (13 default points such as Muroto, Shionomisaki, Suruga Bay Mouth, and Central Miyagi, plus any custom point).',
    archPhase2Desc: 'A separate high-resolution model. It takes this system\'s waveforms at the bay mouth or offshore boundary and analyzes inundation depth and velocity over streets, breakwaters, seawalls, and buildings.',
    phase2ImageNote: '* Illustrative image',
    compRowsA: 'About 2,400 rows (every 3 s)',
    compRowsB: 'Until the main waves pass (35 min after the maximum or 45 min after the first arrival, whichever is later). Each row includes the time since the earthquake',
    scLabelFaults: 'Fault model',
    scLabelSlip: 'Max slip',
    scLabelHeight: 'Max offshore water level (computed)',
    scLabelArrival: 'Time of max wave (after the earthquake)',
    scNote: '* Values computed with this app (v1.3.1; same computation as v1.2.0) over 2 hours at offshore points (water depth of tens to thousands of meters). Coastal tsunami heights and run-up are larger because waves grow in shallow water.',
    macMeta: 'Apple Silicon (M1 or later), macOS 10.15+',
    physicsDocTitle: 'Physics Model Specification (Markdown, Japanese)',
    physicsDocDesc: 'Okada (1985) equations, how the Cabinet Office model is reconstructed, long-wave equations in spherical coordinates, filter and absorbing-boundary verification, and the 2011 Tohoku reproduction, as implemented.',
    archPhase1Badge: "Phase 1 (this app)",
    archPhase1Title: "Regional tsunami propagation simulation",
    archArrowLabel: "Boundary condition CSV",
    archPhase2Badge: "Phase 2 (coastal / urban model)",
    archPhase2Title: "Urban tsunami run-up and inundation simulation",
    compThMode: "Export mode",
    compThStart: "Start time (t=0)",
    compThRows: "Data range (120-min run)",
    compThUse: "Main use",
    compModeA: "<span class=\"badge-tag\">Mode A</span> <strong>Full timeline</strong>",
    compStartA: "The moment of the earthquake (t = 0 s)",
    compUseA: "Checking and comparing the whole process, including the initial drawdown right after the earthquake.",
    compModeB: "<span class=\"badge-tag tag-cyan\">Mode B</span> <strong>City simulation wave</strong>",
    compStartB: "2 minutes before the first arrival is t = 0",
    compUseB: "Boundary condition for the Phase 2 urban simulation. Skipping the quiet period before the waves arrive keeps its run time down.",
    canvasReset: "Reset waves",
    demoHud: "● Simplified demo (2D wave equation)",
    macTitle: "macOS desktop app",
    macDesc: "Desktop app built with Tauri v2. All computation runs on your PC and works without an internet connection. CSV files and MP4 videos are saved to the Downloads folder.",
    macPkg: "Package: <strong>DMG (about 5.0 MB / v1.3.1)</strong>",
    winTitle: "Windows desktop app",
    winDesc: "NSIS installer. Works without an internet connection. CSV files and MP4 videos are saved to the Downloads folder.",
    winPkg: "Package: <strong>NSIS setup EXE (about 3.9 MB / v1.3.1)</strong>",
    webTitle: "Web browser & development build",
    webDesc: "Runs on a local development server if you have Node.js.",
    webPkg: "Local dev server: <code>:5173</code>",
    jaManualTitle: "Japanese User Manual (HTML & Markdown)",
    jaManualDesc: "Japanese user guide: screen layout, scenarios, source fault setup, MP4 recording, CSV export for Phase 2, limitations, and FAQ.",
    footerTop: "Back to top",
    footerJaManual: "Japanese Manual",
    pageTitle: "Nankai Trough Tsunami Simulator | Tsunami propagation across Japan",
    altHero: "Screen of the Nankai Trough Tsunami Simulator (Full Nankai Trough Rupture M9.1, 26 min after the earthquake)",
    altPhase1: "Phase 1 regional propagation (app screen, Cabinet Office Case 1, 9 min after the earthquake)",
    altPhase2: "Phase 2 urban run-up (illustrative image)"
  }
};

// Scenario Database for Interactive Tabs
// 値は本アプリ v1.2.0 (v1.3.1 も計算方法は同じ) で2時間計算した沖合観測点の最大水位とその時刻
const SCENARIOS = {
  nankai_full: {
    name_ja: '南海トラフ全域連動 (M9.1)',
    name_en: 'Full Nankai Trough Rupture (M9.1)',
    tab_ja: '全域連動 (M9.1)',
    tab_en: 'Full Rupture (M9.1)',
    mag: 'Mw 9.1',
    desc_ja: '東海・東南海・南海・日向灘の4セグメントが同時に破壊する簡易モデル（内閣府の公式モデルとは別）。',
    desc_en: 'Simplified model in which four segments (Tokai, Tonankai, Nankai, Hyuga-nada) rupture at once. Not the official Cabinet Office model.',
    faults_ja: '4 セグメント',
    faults_en: '4 segments',
    slip: '20 m',
    height_ja: '5.1 m (尾鷲沖) / 4.5 m (室戸岬沖・潮岬沖)',
    height_en: '5.1 m (off Owase) / 4.5 m (off Muroto, Shionomisaki)',
    arrival_ja: '6〜14 分 (潮岬沖 6分・尾鷲沖 11分・室戸岬沖 14分)',
    arrival_en: '6-14 min (Shionomisaki 6, Owase 11, Muroto 14)'
  },
  cabinet_c1: {
    name_ja: '内閣府 南海トラフ巨大地震 ケース① (Mw9.1)',
    name_en: 'Cabinet Office Nankai Trough Megaquake Case 1 (Mw9.1)',
    tab_ja: '内閣府ケース① (Mw9.1)',
    tab_en: 'Cabinet Office Case 1 (Mw9.1)',
    mag: 'Mw 9.1',
    desc_ja: '内閣府 (2012) のケース①「駿河湾～紀伊半島沖」に大すべり域 (約20m)・超大すべり域 (約40m) を置くモデルを、公表された設定ルールから概略再現。破壊開始点から 2.5 km/s で破壊が伝播します。',
    desc_en: 'Approximate reproduction, from the published rules, of Cabinet Office (2012) Case 1 with large-slip (~20 m) and very-large-slip (~40 m) areas from Suruga Bay to off the Kii Peninsula. Rupture spreads at 2.5 km/s from the rupture start point.',
    faults_ja: '小断層 165 枚 (概略再現)',
    faults_en: '165 subfaults (approximate)',
    slip: '40 m',
    height_ja: '5.3 m (浜松沖) / 5.1 m (駿河湾口・尾鷲沖)',
    height_en: '5.3 m (off Hamamatsu) / 5.1 m (Suruga Bay Mouth, off Owase)',
    arrival_ja: '2〜15 分 (駿河湾口 2分・浜松沖 14分)',
    arrival_en: '2-15 min (Suruga Bay Mouth 2, Hamamatsu 14)'
  },
  tohoku_2011: {
    name_ja: '2011年 東北地方太平洋沖地震 (M9.0)',
    name_en: '2011 Tohoku-oki Earthquake (M9.0)',
    tab_ja: '2011年東北沖 (M9.0)',
    tab_en: '2011 Tohoku (M9.0)',
    mag: 'Mw 9.0',
    desc_ja: '日本海溝沿いの岩手沖〜茨城沖の連動破壊を4枚の断層で近似。すべり量は GPS 波浪計の最大波高に合わせて調整（宮城中部沖: 計算 6.1 m / 観測 5.7 m）。',
    desc_en: 'The Japan Trench rupture from off Iwate to off Ibaraki approximated by four faults, with slip tuned to the peak heights recorded by GPS wave gauges (off Central Miyagi: computed 6.1 m / observed 5.7 m).',
    faults_ja: '4 断層',
    faults_en: '4 faults',
    slip: '24 m',
    height_ja: '6.1 m (宮城中部沖) / 6.0 m (宮城北部沖) / 5.9 m (釜石沖)',
    height_en: '6.1 m (Central Miyagi) / 6.0 m (Northern Miyagi) / 5.9 m (Kamaishi)',
    arrival_ja: '19〜27 分 (宮古沖 19分・宮城中部沖 27分)',
    arrival_en: '19-27 min (Miyako 19, Central Miyagi 27)'
  },
  tonankai: {
    name_ja: '1944年 昭和東南海地震型 (M8.2)',
    name_en: '1944 Showa-Tonankai Type (M8.2)',
    tab_ja: '昭和東南海 (M8.2)',
    tab_en: 'Showa-Tonankai (M8.2)',
    mag: 'Mw 8.2',
    desc_ja: '熊野灘〜潮岬沖の1枚の断層によるモデル。地図には気象庁の震源（深さ40km）を表示します。',
    desc_en: 'Single-fault model off Kumano-nada and Shionomisaki. The JMA hypocenter (40 km deep) is shown on the map.',
    faults_ja: '1 断層',
    faults_en: '1 fault',
    slip: '9.5 m',
    height_ja: '3.0 m (尾鷲沖) / 2.0 m (潮岬沖)',
    height_en: '3.0 m (off Owase) / 2.0 m (off Shionomisaki)',
    arrival_ja: '5〜10 分 (潮岬沖 5分・尾鷲沖 10分)',
    arrival_en: '5-10 min (Shionomisaki 5, Owase 10)'
  },
  nankai_single: {
    name_ja: '1946年 昭和南海地震型 (M8.4)',
    name_en: '1946 Showa-Nankai Type (M8.4)',
    tab_ja: '昭和南海 (M8.4)',
    tab_en: 'Showa-Nankai (M8.4)',
    mag: 'Mw 8.4',
    desc_ja: '潮岬沖の震源から西へ破壊が進んだ史実に合わせ、紀伊水道沖〜足摺岬沖に1枚の断層を配置したモデル。',
    desc_en: 'Single fault from off the Kii Channel to off Ashizuri, placed so that its east end contains the hypocenter off Shionomisaki, matching the historical westward rupture.',
    faults_ja: '1 断層',
    faults_en: '1 fault',
    slip: '9.0 m',
    height_ja: '2.3 m (室戸岬沖) / 1.6 m (足摺岬沖)',
    height_en: '2.3 m (off Muroto) / 1.6 m (off Ashizuri)',
    arrival_ja: '15〜16 分',
    arrival_en: '15-16 min'
  },
  tokai: {
    name_ja: '想定東海地震 (M8.0)',
    name_en: 'Anticipated Tokai Earthquake (M8.0)',
    tab_ja: '東海地震 (M8.0)',
    tab_en: 'Tokai (M8.0)',
    mag: 'Mw 8.0',
    desc_ja: '駿河トラフから遠州灘にかけて破壊する想定地震（1枚の断層）。',
    desc_en: 'Anticipated earthquake rupturing from the Suruga Trough to Enshu-nada (single fault).',
    faults_ja: '1 断層',
    faults_en: '1 fault',
    slip: '7.0 m',
    height_ja: '1.6 m (浜松沖) / 1.1 m (駿河湾口)',
    height_en: '1.6 m (off Hamamatsu) / 1.1 m (Suruga Bay Mouth)',
    arrival_ja: '4〜11 分 (駿河湾口 4分・浜松沖 11分)',
    arrival_en: '4-11 min (Suruga Bay Mouth 4, Hamamatsu 11)'
  }
};
let currentLang = 'ja';

// --- 2. Language Switcher Logic ---
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Toggle button active state
  document.getElementById('btn-lang-ja')?.classList.toggle('active', lang === 'ja');
  document.getElementById('btn-lang-en')?.classList.toggle('active', lang === 'en');

  // Replace text in elements with data-i18n
  const dict = TRANSLATIONS[lang];
  if (dict.pageTitle) document.title = dict.pageTitle;
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key]) el.setAttribute('alt', dict[key]);
  });
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update scenario tab buttons text
  document.querySelectorAll('.scenario-tab-btn').forEach((btn) => {
    const key = btn.getAttribute('data-scenario');
    if (SCENARIOS[key]) {
      btn.textContent = lang === 'ja' ? SCENARIOS[key].tab_ja : SCENARIOS[key].tab_en;
    }
  });

  // Update current scenario card text
  const activeTab = document.querySelector('.scenario-tab-btn.active');
  const scKey = activeTab ? activeTab.getAttribute('data-scenario') : 'nankai_full';
  updateScenarioCard(scKey);
}

// --- 3. Scenario Tab Switcher ---
function updateScenarioCard(key) {
  const data = SCENARIOS[key];
  if (!data) return;

  document.getElementById('sc-name').textContent = currentLang === 'ja' ? data.name_ja : data.name_en;
  document.getElementById('sc-mag').textContent = data.mag;
  document.getElementById('sc-desc').textContent = currentLang === 'ja' ? data.desc_ja : data.desc_en;
  document.getElementById('sc-faults').textContent = currentLang === 'ja' ? data.faults_ja : data.faults_en;
  document.getElementById('sc-slip').textContent = data.slip;
  document.getElementById('sc-height').textContent = currentLang === 'ja' ? data.height_ja : data.height_en;
  document.getElementById('sc-arrival').textContent = currentLang === 'ja' ? data.arrival_ja : data.arrival_en;
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Language button events
  document.getElementById('btn-lang-ja')?.addEventListener('click', () => setLanguage('ja'));
  document.getElementById('btn-lang-en')?.addEventListener('click', () => setLanguage('en'));

  // Scenario tab events
  const tabBtns = document.querySelectorAll('.scenario-tab-btn');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const scKey = btn.getAttribute('data-scenario');
      updateScenarioCard(scKey);
    });
  });

  // 初期表示 (日本語の文言とシナリオカード)
  setLanguage('ja');
  // Init Interactive Wave Canvas
  initWaveCanvas();
});

// --- 4. Interactive 2D Wave Propagation Simulation Canvas ---
function initWaveCanvas() {
  const canvas = document.getElementById('waveCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Grid dimensions
  const gridW = 180;
  const gridH = 90;
  const size = gridW * gridH;

  const eta = new Float32Array(size);
  const etaPrev = new Float32Array(size);
  const depth = new Float32Array(size);

  // Initialize depth profile (Deeper south, shallow north representing Japan coastline)
  for (let r = 0; r < gridH; r++) {
    const normY = r / gridH; // 0: north (shallow / coast), 1: south (deep Nankai Trough)
    for (let c = 0; c < gridW; c++) {
      const idx = r * gridW + c;
      // Continental slope: deep in south (~4000m), shallow in north (~200m)
      const d = 200 + 3800 * Math.pow(normY, 1.8);
      depth[idx] = d;
    }
  }

  // Helper to add an earthquake source dislocation
  function addDislocation(gridX, gridY, radius = 8, amplitude = 4.0) {
    for (let r = -radius * 2; r <= radius * 2; r++) {
      for (let c = -radius * 2; c <= radius * 2; c++) {
        const gx = gridX + c;
        const gy = gridY + r;
        if (gx >= 0 && gx < gridW && gy >= 0 && gy < gridH) {
          const distSq = (c * c) / 2.0 + (r * r); // Elliptical fault shape
          if (distSq < radius * radius) {
            const factor = Math.cos((Math.sqrt(distSq) / radius) * (Math.PI / 2));
            const idx = gy * gridW + gx;
            eta[idx] += amplitude * factor;
            etaPrev[idx] += amplitude * factor;
          }
        }
      }
    }
  }

  // Initial rupture along the Nankai Trough line
  addDislocation(Math.floor(gridW * 0.45), Math.floor(gridH * 0.65), 10, 4.5);
  addDislocation(Math.floor(gridW * 0.65), Math.floor(gridH * 0.55), 8, 3.5);

  // Reset button
  document.getElementById('btn-canvas-reset')?.addEventListener('click', () => {
    eta.fill(0);
    etaPrev.fill(0);
    addDislocation(Math.floor(gridW * 0.5), Math.floor(gridH * 0.6), 10, 4.0);
  });

  // Canvas click listener to spawn waves
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const gx = Math.floor((clickX / rect.width) * gridW);
    const gy = Math.floor((clickY / rect.height) * gridH);
    addDislocation(gx, gy, 8, 5.0);
  });

  // ImageData for ultra-fast direct pixel rendering
  const imgData = ctx.createImageData(gridW, gridH);
  const data = imgData.data;

  const dt = 0.4;
  const cSqBase = 0.18; // Speed coefficient

  function stepPhysics() {
    // 2D Wave equation with damping
    for (let r = 1; r < gridH - 1; r++) {
      const rowOffset = r * gridW;
      for (let c = 1; c < gridW - 1; c++) {
        const idx = rowOffset + c;
        const localC = Math.sqrt(depth[idx] / 4000) * cSqBase;

        const laplacian = (
          eta[idx + 1] + eta[idx - 1] +
          eta[idx + gridW] + eta[idx - gridW] - 4 * eta[idx]
        );

        // Next elevation with numerical damping
        let nextVal = 2 * eta[idx] - etaPrev[idx] + localC * laplacian;
        nextVal *= 0.994; // Mild acoustic dissipation

        etaPrev[idx] = eta[idx];
        eta[idx] = nextVal;
      }
    }
  }

  function renderPixels() {
    for (let i = 0; i < size; i++) {
      const h = eta[i];
      const pIdx = i * 4;

      // Base ocean background (dark navy gradient based on depth)
      const baseBlue = Math.floor(20 + (depth[i] / 4000) * 35);
      let r = 8;
      let g = 14;
      let b = baseBlue;

      if (h > 0.05) {
        // Wave Crest (Red / Coral Glow)
        const intensity = Math.min(1.0, h / 3.0);
        r = Math.floor(r + intensity * (244 - r));
        g = Math.floor(g + intensity * (63 - g));
        b = Math.floor(b + intensity * (94 - b));
      } else if (h < -0.05) {
        // Wave Trough (Deep Cyan / Blue depression)
        const intensity = Math.min(1.0, -h / 2.5);
        r = Math.floor(r + intensity * (6 - r));
        g = Math.floor(g + intensity * (182 - g));
        b = Math.floor(b + intensity * (212 - b));
      }

      data[pIdx] = r;
      data[pIdx + 1] = g;
      data[pIdx + 2] = b;
      data[pIdx + 3] = 255;
    }

    // Draw to offscreen buffer and upscale smoothly to canvas
    createImageBitmap(imgData).then((bmp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height);

      // Draw stylized coast and trench markers
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '11px JetBrains Mono, sans-serif';
      ctx.fillText('DEEP SIDE (~4000 m)', 20, canvas.height - 30);
      ctx.fillText('SHALLOW SIDE (~200 m)', 20, 40);

      // Rupture fault line overlay
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.5)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.25, canvas.height * 0.75);
      ctx.lineTo(canvas.width * 0.85, canvas.height * 0.55);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  function loop() {
    stepPhysics();
    stepPhysics(); // 2 sub-steps per frame for smooth speed
    renderPixels();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
