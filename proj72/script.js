// i18n Dictionary for Miyako Tsunami LP
const translations = {
  ja: {
    // Nav
    navFeatures: "津波物理 & 防潮堤",
    navScenarios: "南海トラフ・2011震災・L2",
    navHazard: "ハザード比較",
    navTech: "技術仕様",
    navDownload: "デスクトップ版を購入",
    langToggle: "English",

    // Hero
    heroTag: "PLATEAU × 国土地理院 DEM5A × 浅水長波物理モデル",
    heroTitle: "巨大津波が来襲するとき、<br><span class=\"text-gradient\">防潮堤は何を守るのか。</span>",
    heroLead: "岩手県宮古市・田老地区（旧田老防潮堤・万里の長城）および宮古港・鍬ヶ崎・閉伊川河口域における津波の海岸押し寄せと防潮堤の治水・防御機能を観察・解析。国土地理院 5m レーザー標高 (DEM5A) と PLATEAU 3D 都市モデル、浅水変形・越流力学に基づくリアルタイム海洋物理シミュレーションを融合しました。",
    heroCtaBuy: "デスクトップ版を購入する (¥980)",
    heroCtaMore: "シミュレーションの仕組みを見る",
    heroPlatforms: "macOS (Apple Silicon dmg) · Windows 10/11 (exe) · 買い切り ¥980",

    // Stats
    statDemVal: "5m レーザー",
    statDemLabel: "標高解像度 (DEM5A)",
    statDemDesc: "国土地理院 基盤地図情報実測",

    statSeawallVal: "海抜 10.0 m",
    statSeawallLabel: "旧田老防潮堤 天端標高",
    statSeawallDesc: "世界的に知られた万里の長城",

    statAreaVal: "宮古港 × 田老",
    statAreaLabel: "2大沿岸重要拠点",
    statAreaDesc: "宮古湾・閉伊川河口から田老湾まで網羅",

    statModelVal: "局所慣性モデル",
    statModelLabel: "浅水長波 2次元流体解析",
    statModelDesc: "de Almeida et al. θ重み付きスキーム",

    statExportVal: "4K / 60fps",
    statExportLabel: "MP4動画 & CSV出力",
    statExportDesc: "WebCodecs高速録画 & Excel対応CSV",

    // Features Section
    featKicker: "CORE CAPABILITIES",
    featTitle: "海岸堤防と津波の攻防を、科学的に可視化",
    featLead: "津波の来襲から海岸浅水変形、防潮堤の越流、市街地浸水、引き波のプロセスを、物理方程式とリアルタイム3Dで直感的に追究できます。",

    // Feature 1
    f1Num: "01 / SEAWALL & TERRAIN GEOMETRY",
    f1Title: "田老防潮堤「万里の長城」× 宮古港 2大沿岸地域の精緻な3D化",
    f1Desc: "昭和三陸津波後に築かれた田老地区の第1防潮堤（海抜10.0m）に加え、宮古市最大の市街地・港湾部である宮古港（出崎埠頭・藤原埠頭・鍬ヶ崎・閉伊川河口）の2大エリアを完全収録。OpenStreetMapと国土地理院DEM5Aの微地形から防潮堤の正確な稜線を整合し、急峻な三陸リアス地形を忠実に再現しています。",
    f1p1: "国土地理院 5m レーザー標高 (DEM5A) による精密な標高グリッド",
    f1p2: "PLATEAU 3D都市モデルの建物を配置し、浸水深でリアルタイム警戒色変化",
    f1p3: "防潮堤高さスライダー（0m〜22m）で動的な防潮堤改変・治水効果実験が可能",
    badge1: "高精度 DEM5A × OSM",

    // Feature 2
    f2Num: "02 / PHYSICS DYNAMICS",
    f2Title: "共通沖合深海震源モデル & 浅水変形・越流力学のリアルタイム解析",
    f2Desc: "三陸沖日本海溝の震源域から伝播し、重茂半島を迂回して宮古湾口から湾奥へ一直線に突入する東日本大震災の物理伝播メカニズムを再現。浅水変形（Greenの法則）と防潮堤天端の越流現象を解き明かします。波の来襲方向（宮古港では50°中心に左右90度幅、16方位コンパス対応）や波高・周期も自由にカスタム可能です。",
    f2p1: "CFL条件に応じた自動時間刻み調整による高精度かつ安定な数値計算",
    f2p2: "Web Worker による別スレッド計算で、60fpsのスムーズな描画・カメラ操作を維持",
    f2p3: "波源赤枠フレーム・観測ブイ・3D大型矢印のリアルタイム旋回と波先端距離表示",
    badge2: "三陸沖共通深海震源 × 局所慣性モデル",

    // Feature 3
    f3Num: "03 / HAZARD & GROUND TRUTH",
    f3Title: "公表ハザードマップ & 2011年実測痕跡・5m高解像度浸水深との精密照合",
    f3Desc: "岩手県公表の津波浸水想定ハザードマップ（標準8区分凡例）、復興支援調査アーカイブの宮古市100mメッシュ実績浸水深、さらに5mメッシュ高精度実績データ（再現率・CSI・浸水深RMSEをリアルタイム統計表示）、東日本大震災直後（2011年3月）の地理院空中写真をワンクリックでオーバーレイ表示できます。",
    f3p1: "津波痕跡調査の実測水位（59地点）との差分（平均差・RMSE）をリアルタイム評価",
    f3p2: "5mメッシュ実績浸水深との一致度（再現率・空振り・見逃し面積・CSI）を自動算定",
    f3p3: "震災直後のオルソ航空写真（toho1）のがれき分布と計算浸水域を直接対比",
    badge3: "実測 & ハザードマップ比較",

    // Feature 4
    f4Num: "04 / WAVE SOURCE COUPLING & LAB",
    f4Title: "南海トラフ波源CSVの連携・インポート ＆ 人工波発生機能",
    f4Desc: "広域シミュレーター（nankai_trough等）が出力した時系列波源データCSV（宮古沖・最大波高4.08m）を直接読み込み、市街地への浸水影響を精緻にシミュレーション。任意のCSVファイルをドラッグ＆ドロップして波高・流速・流向を再現できるほか、水面をクリックして人工波・波紋を起こすインタラクティブな実験機能も搭載。タイマーには「計算時間 (LAP)」と「地震発生後」をリアルタイム併記します。",
    f4p1: "nankai_troughアプリ出力CSVに対応（Trimmed版 53.8分 / Full 2時間タイムライン）",
    f4p2: "水面クリックによる人工波（パルス津波）の発生とリアルタイム波紋伝播",
    f4p3: "シミュレーション経過時間と地震発生後時間（Time since EQ）のデュアルタイマー併記",
    badge4: "波源CSV連携 × 人工波発生",

    // Scenarios
    scenKicker: "TSUNAMI SCENARIOS",
    scenTitle: "歴史的津波の再現から、最大想定L2の防災シミュレーション",
    scenLead: "過去の教訓と未来の防災計画を検証するための、多彩な津波シナリオプリセットを標準搭載。",
    scen0Badge: "NEW 波源連携",
    scen0Title: "南海トラフ巨大地震連動 (nankai_trough波源)",
    scen0Meta: "沖合波高 4.08m · 2時間フルタイムライン / 境界CSV連携",
    scen0Desc: "nankai_troughアプリが出力した宮古沖の時系列波源データを使用。地震発生から約18分で最大波高4.08m（引き波後）が到達し、旧田老防潮堤の防御力と市街地氾濫を精密に検証。",
    scen1Badge: "実測照合済み",
    scen1Title: "東日本大震災 (2011年再現)",
    scen1Meta: "沖合波高 8.0m · 実測59地点キャリブレーション",
    scen1Desc: "田老地区の実測津波痕跡データ（信頼度A・B）に最も一致する沖合境界波高を設定。田老防潮堤を越流し市街地を呑み込んだ巨大津波の挙動を忠実に再現します。",

    scen2Badge: "最大級津波",
    scen2Title: "想定最大規模 L2津波 (岩手県公表)",
    scen2Meta: "沖合波高 19.5m · 最大クラスの巨大津波",
    scen2Desc: "発生頻度は極めて低いものの甚大な被害をもたらす最大クラスの津波。住民の高台避難や避難路の安全性検証に不可欠なシナリオです。",

    scen3Badge: "施設計画基準",
    scen3Title: "施設計画規模 L1津波",
    scen3Meta: "沖合波高 14.0m · 防潮堤設計波",
    scen3Desc: "新田老防潮堤（天端標高 T.P.+14.7m）などの海岸保全施設を設計する際の基準となる津波。防潮堤の防御限界と越流マージンを検証できます。",

    scen4Badge: "防潮堤防護の歴史",
    scen4Title: "チリ地震津波 (1960年再現)",
    scen4Meta: "波高 5.5m · 田老地区 無被害の実績",
    scen4Desc: "旧田老防潮堤（10m）が津波を完全に阻止し、田老町が世界にその名を知られるきっかけとなった歴史的津波の防潮プロセスを検証できます。",

    // Tech
    techKicker: "ARCHITECTURE & TECHNOLOGY",
    techTitle: "先端地理空間技術と流体ソルバーの融合",
    techLead: "Web標準技術の極限性能を引き出し、ブラウザおよびネイティブデスクトップで快適に動作するアーキテクチャ。",
    tech1Title: "Three.js & WebGL2 シェーダー",
    tech1Desc: "数万ポリゴンの地形メッシュとPLATEAU建築群、動的津波水面を滑らかな60fpsでGPUレンダリング。低負荷かつフォトリアルな津波表現を実現。",
    tech2Title: "Web Worker 非同期流体ソルバー",
    tech2Desc: "浅水長波方程式の局所慣性モデル（de Almeida et al.）をWeb Worker内で独立並列実行。描画スレッドを一切ブロックせず、長時間のシミュレーションも安定駆動。",
    tech3Title: "Tauri v2 デスクトップ環境",
    tech3Desc: "Rustベースの極めて軽量・高速なデスクトップランタイム。わずか数十MBの軽量バイナリでオフライン完全動作と高速データ出力を実現。",
    tech4Title: "WebCodecs & 4K動画エクスポート",
    tech4Desc: "mp4-muxer とハードウェア支援エンコードにより、キーフレーム補間や旋回カメラの津波シミュレーション動画を最大4K/60fpsでMP4書き出し。",
    tech5Title: "地点観察 & Excel CSV出力",
    tech5Desc: "地図上の任意の地点をクリックするだけで時系列水深グラフを表示。経過時間・波高・遡上高・浸水面積・浸水棟数をExcel対応UTF-8 BOM付きCSVで即座に出力。",
    tech6Title: "国土地理院 DEM5A & JGD2011",
    tech6Desc: "平面直角座標系第X系（EPSG:6678）とWGS84を高精度変換。国土地理院5mレーザー標高、東日本大震災空中写真、復興支援アーカイブ実績浸水深と完全一致。",

    // Store
    storeBadge: "DESKTOP APP EDITION",
    storeTitle: "宮古・田老津波 3Dシミュレーター デスクトップ版",
    storeDesc: "オフライン環境での完全動作、高精度シミュレーション、長時間の動画エクスポート、CSV解析データ出力に対応したデスクトップ専用パッケージ。",
    storeTax: "（税込・買い切りライセンス）",
    storeBtnBuy: "購入・ダウンロード（Stripe決済）",
  },
  en: {
    // Nav
    navFeatures: "Physics & Seawall",
    navScenarios: "Nankai · 2011 · L2",
    navHazard: "Hazard Map Audit",
    navTech: "Tech Specs",
    navDownload: "Buy Desktop App",
    langToggle: "日本語",

    // Hero
    heroTag: "PLATEAU × GSI JAPAN DEM5A × SHALLOW WATER DYNAMICS",
    heroTitle: "When Massive Tsunamis Strike,<br><span class=\"text-gradient\">What Does the Great Wall Protect?</span>",
    heroLead: "Observe and analyze tsunami surge behavior and the defensive mechanisms of Taro's legendary 10m Great Seawall in Miyako City, Iwate. Integrating GSI Japan 5m LiDAR elevation, PLATEAU 3D buildings, and 2D local-inertia shallow water physics in real time.",
    heroCtaBuy: "Purchase Desktop App (¥980)",
    heroCtaMore: "Explore Simulation Mechanics",
    heroPlatforms: "macOS (Apple Silicon dmg) · Windows 10/11 (exe) · Lifetime ¥980",

    // Stats
    statDemVal: "5m LiDAR",
    statDemLabel: "Terrain Resolution (DEM5A)",
    statDemDesc: "Geospatial Information Authority of Japan",

    statSeawallVal: "10.0 m A.S.L.",
    statSeawallLabel: "Old Taro Seawall Crest",
    statSeawallDesc: "World-famous 'Great Wall of Taro'",

    statAreaVal: "Miyako & Taro",
    statAreaLabel: "Two Major Coastal Hubs",
    statAreaDesc: "Full coverage from Miyako Bay to Taro Bay",

    statModelVal: "Local Inertia",
    statModelLabel: "2D Shallow Water Equations",
    statModelDesc: "de Almeida et al. θ-weighted scheme",

    statExportVal: "4K / 60fps",
    statExportLabel: "MP4 Video & CSV Export",
    statExportDesc: "WebCodecs hardware encode & Excel CSV",

    // Features Section
    featKicker: "CORE CAPABILITIES",
    featTitle: "Scientifically Visualizing the Clash of Seawall & Tsunami",
    featLead: "From offshore surge propagation and shoaling amplification to seawall overflow, urban inundation, and receding backwash — investigated with rigorous physics and realtime 3D.",

    // Feature 1
    f1Num: "01 / SEAWALL & TERRAIN GEOMETRY",
    f1Title: "Dual-Region 3D Modeling: Taro Great Wall & Miyako Port Hub",
    f1Desc: "Comprehensive 3D coverage of both Taro's historic 10.0m seawall and Miyako's primary port/urban center (Dezaki Pier, Kuwagasaki, Hei River mouth). Mapped from OpenStreetMap, GSI DEM5A laser profiling, and aerial survey data to reproduce steep ria cliffs and coastal floodplains.",
    f1p1: "Sub-meter precision terrain grid powered by GSI Japan 5m laser profiling",
    f1p2: "PLATEAU 3D LOD1 building meshes dynamically shaded by flood depth alerts",
    f1p3: "Interactive seawall elevation slider (0m - 22m) for dynamic flood defense experiments",
    badge1: "LiDAR DEM5A × OSM",

    // Feature 2
    f2Num: "02 / PHYSICS DYNAMICS",
    f2Title: "Shared Deep-Ocean Epicenter Model & 2D Hydrodynamic Solver",
    f2Desc: "Reproduces the 2011 tsunami mechanics propagating from the Sanriku Japan Trench, bypassing the mountainous Omoe Peninsula to surge straight into Miyako Bay. Features dynamic wave direction controls (±90° range around 50° NE with 16-point compass for Miyako Port) alongside custom wave height and period.",
    f2p1: "Adaptive CFL time-stepping ensuring unconditional numerical stability",
    f2p2: "Dedicated Web Worker thread execution maintaining smooth 60fps rendering",
    f2p3: "Real-time rotatable offshore source frame, observation buoys, and 3D propagation arrows",
    badge2: "Shared Epicenter Model",

    // Feature 3
    f3Num: "03 / HAZARD & GROUND TRUTH",
    f3Title: "Official Hazard Map & 2011 High-Res 5m Inundation Benchmarking",
    f3Desc: "Directly overlay Iwate Prefecture's official tsunami hazard maps, 100m reconstruction archive grids, and high-resolution 5m inundation depth data with real-time statistical evaluation (Hit rate, False alarm, CSI, RMSE) alongside post-disaster ortho aerial imagery.",
    f3p1: "Real-time error metrics (mean bias, RMSE) against 59 surveyed watermarks in Taro",
    f3p2: "Cell-by-cell 5m mesh accuracy scoring (hit rate, missed flood, CSI score)",
    f3p3: "Direct debris field correlation using ortho-rectified aerial photography from 2011",
    badge3: "Surveyed Ground Truth",

    // Feature 4
    f4Num: "04 / WAVE SOURCE COUPLING & LAB",
    f4Title: "Nankai Trough Wave CSV Coupling, Import & Wave Maker Lab",
    f4Desc: "Directly couples with boundary wave CSV files exported by macro ocean simulators (e.g. nankai_trough app, peak 4.08m at Miyako offshore) to predict urban inundation. Drag-and-drop custom wave CSVs to simulate varying amplitudes, 2D velocity vectors (U/V), and 360-degree bearings. Also features an interactive wave-maker mode where clicking water surfaces spawns artificial ripple pulses. Displays dual timers for both calculation LAP time and absolute time elapsed since earthquake origin.",
    f4p1: "Full support for nankai_trough CSV outputs (53.8-min trimmed and 2-hour full timelines)",
    f4p2: "Interactive wave maker: click water to inject pulse ripples and observe seawall impact",
    f4p3: "Dual real-time HUD timers: Simulation LAP time alongside time since earthquake origin",
    badge4: "Wave CSV Coupling & Wave Maker",

    // Scenarios
    scenKicker: "TSUNAMI SCENARIOS",
    scenTitle: "From Historic Disasters to Maximum Probable L2 Scenarios",
    scenLead: "Pre-configured scenarios designed for disaster education and future resilience evaluation.",
    scen0Badge: "NEW Coupling",
    scen0Title: "Nankai Trough Megathrust (nankai_trough Wave Source)",
    scen0Meta: "Offshore Height 4.08m · 2-Hour Timeline / Boundary CSV Coupling",
    scen0Desc: "Driven by offshore time-series boundary CSV from nankai_trough app. Peak wave of 4.08m arrives ~18 min after rupture following initial drawdown, testing historic 10m seawall resilience against trans-regional waves.",
    scen1Badge: "Calibrated to 2011",
    scen1Title: "Great East Japan Earthquake (2011)",
    scen1Meta: "Offshore Height 8.0m · Calibrated across 59 survey stations",
    scen1Desc: "Configured to match surveyed high watermarks across Taro. Faithfully reproduces overtopping of the 10m seawall and rapid urban flooding.",

    scen2Badge: "Maximum Probable",
    scen2Title: "Worst-Case L2 Scenario (Iwate Official)",
    scen2Meta: "Offshore Height 19.5m · Mega-tsunami class",
    scen2Desc: "A rare but catastrophic mega-tsunami scenario for validating evacuation routes and hill refuge zones.",

    scen3Badge: "Design Standard",
    scen3Title: "Design Benchmark L1 Scenario",
    scen3Meta: "Offshore Height 14.0m · Infrastructure Design Wave",
    scen3Desc: "Benchmark wave used in designing modern coastal defenses such as the new Taro seawall (T.P.+14.7m).",

    scen4Badge: "Historic Defense",
    scen4Title: "Chilean Earthquake Tsunami (1960)",
    scen4Meta: "Wave Height 5.5m · Zero damage in Taro",
    scen4Desc: "The historic tsunami where Taro's 10m seawall completely halted the waves, making the town world-renowned.",

    // Tech
    techKicker: "ARCHITECTURE & TECHNOLOGY",
    techTitle: "State-of-the-art Geospatial Visuals Meets Fluid Numerics",
    techLead: "Harnessing modern Web standards and native acceleration for high-performance desktop analytics.",
    tech1Title: "Three.js & WebGL2 Custom Shaders",
    tech1Desc: "GPU rendering of massive terrain meshes, PLATEAU buildings, and dynamic wave displacement at silky-smooth 60fps.",
    tech2Title: "Web Worker Asynchronous Fluid Solver",
    tech2Desc: "Non-blocking background simulation of 2D shallow water equations ensures uninterrupted camera navigation.",
    tech3Title: "Tauri v2 Native Desktop Shell",
    tech3Desc: "Ultra-lean Rust backend delivering zero-latency desktop workflows with minimal RAM footprint.",
    tech4Title: "WebCodecs Hardware 4K MP4 Encoder",
    tech4Desc: "Direct GPU video export supporting smooth camera keyframe interpolation and orbit animations up to 4K 60fps.",
    tech5Title: "Station Observation & Excel CSV",
    tech5Desc: "Click any point on the map to inspect hydrographs and export full time-series data with Excel UTF-8 BOM.",
    tech6Title: "GSI DEM5A & EPSG:6678 (Zone X)",
    tech6Desc: "Rigorous cartographic reprojection preserving centimeter-level height integrity across official datasets.",

    // Store
    storeBadge: "DESKTOP APP EDITION",
    storeTitle: "Miyako Taro Tsunami 3D Desktop Edition",
    storeDesc: "Complete standalone offline package for GIS researchers, civil engineers, educators, and disaster prevention teams.",
    storeTax: "(Tax included · Perpetual license)",
    storeBtnBuy: "Purchase & Download (Stripe)",
  }
};

let currentLang = 'ja';

function updateLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang] || translations.ja;

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ja' ? 'en' : 'ja';
      updateLanguage(nextLang);
    });
  }
});
