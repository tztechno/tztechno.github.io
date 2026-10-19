// i18n Dictionary for Arakawa Flood LP
const translations = {
  ja: {
    // Nav
    navFeatures: "治水のメカニズム",
    navWeir: "越流堤と断面",
    navScenarios: "台風19号検証",
    navTech: "技術仕様",
    navDownload: "デスクトップ版を購入",
    langToggle: "English",

    // Hero
    heroTag: "PLATEAU × 国土地理院 DEM5A × THREE.JS",
    heroTitle: "荒川が溢れるとき、<br><span class=\"text-gradient\">調節池は何を守るのか。</span>",
    heroLead: "荒川第一調節池（彩湖・秋ヶ瀬公園）および越流堤・囲ぎょう堤・本堤の治水メカニズムを、32km × 14km の詳細3D地形と広域168kmの流域パノラマ上で完全シミュレーション。荒川の水位上昇、越流堤からの流入、水理公式に基づく連動計算、下流都心（岩淵水門）の水位低減効果まで、直感的に観察・解析できます。",
    heroCtaBuy: "デスクトップ版を購入する (¥150)",
    heroCtaMore: "治水の仕組みを見る",
    heroPlatforms: "macOS (Apple Silicon / Intel dmg) · Windows 10/11 (exe) · 買い切り ¥150",

    // Stats
    statAreaVal: "32 × 14 km",
    statAreaLabel: "詳細地形解析範囲",
    statAreaDesc: "国土地理院 5m レーザー標高 (DEM5A)",

    statCapVal: "3,900 万 m³",
    statCapLabel: "第一調節池 総貯留容量",
    statCapDesc: "東京ドーム約31杯分の大容量",

    statWeirVal: "A.P. +8.70 m",
    statWeirLabel: "越流堤 天端標高",
    statWeirDesc: "超過洪水時に計画越流を開始",

    statEffectVal: "-38 cm",
    statEffectLabel: "台風19号 水位低減効果",
    statEffectDesc: "岩淵水門（下流都心）の氾濫を阻止",

    statPanoramaVal: "168 km 四方",
    statPanoramaLabel: "荒川流域 背景パノラマ",
    statPanoramaDesc: "秩父山地から東京湾まで俯瞰",

    // Features Section
    featKicker: "CORE FEATURES",
    featTitle: "水害から首都圏を守る、巨大治水インフラの全貌",
    featLead: "ただの氾濫マップではなく、堤防群と調節池が実際にどう連携して洪水を食い止めるかを、物理方程式とリアルタイム3Dで可視化します。",

    // Feature 1
    f1Num: "01 / LEVEE & BASIN GEOMETRY",
    f1Title: "国土地理院 DEM5A 実測による堤防群の精緻な3D化",
    f1Desc: "越流堤（標高 A.P.+8.70m / T.P.+7.57m）、囲ぎょう堤（標高 約A.P.+15.1m）、荒川本堤（標高 約A.P.+15.2m）の法面・天端形状を国土地理院5mレーザー標高タイルから完全再現。掘削された彩湖の湖底形状まで高精度に再現しています。",
    f1p1: "計画越流水位（8.7m）で確実に水を池へ導く越流堤構造",
    f1p2: "荒川本川と調節池を隔て、洪水を安全に封じ込める囲ぎょう堤",
    f1p3: "さいたま・戸田（左岸）および朝霞・和光（右岸）を守り抜く巨大本堤",
    badge1: "高精度 DEM5A",

    // Feature 2
    f2Num: "02 / CROSS SECTION DYNAMICS",
    f2Title: "リアルタイム横断断面図で見る水位と堤防の攻防",
    f2Desc: "画面下部に［朝霞市街地］—［右岸本堤］—［荒川本川］—［越流堤］—［囲ぎょう堤］—［彩湖・秋ヶ瀬公園］—［左岸本堤］—［戸田市街地］を横断するダイナミック断面図を常時描画。本川増水から越流、貯留、本堤防護のメカニズムが一目で分かります。",
    f2p1: "水深スライダー（A.P.+1.5m〜+14.5m）とリアルタイム連動",
    f2p2: "広頂越流堰の水理公式による越流流入量 Q (m³/s) 計算",
    f2p3: "貯留容量曲線（H-V）に基づく調節池水位のダイナミック上昇",
    badge2: "リアルタイム断面",

    // Feature 3
    f3Num: "03 / HISTORICAL REPRODUCTION",
    f3Title: "令和元年 台風19号・過去最大洪水の治水効果を実証",
    f3Desc: "2019年10月、荒川本川の水位が過去最高 A.P.+12.35m に達し、越流堤から約3,500万m³の洪水を調節池に貯留して東京都心の氾濫を防いだ歴史的事例を時系列で精密再現。計画規模(L1)および想定最大規模(L2)洪水にも対応。",
    f3p1: "実測ハイドログラフに基づく時系列アニメーション再生",
    f3p2: "下流都心（岩淵水門・荒川区）の水位低減効果（-ΔH cm）を定量表示",
    f3p3: "30秒刻み計算結果を10分ごとのCSV（UTF-8 BOM付き、Excel対応）で保存",
    badge3: "台風19号 再現",

    // Feature 4
    f4Num: "04 / WIDE BASIN PANORAMA",
    f4Title: "秩父山地から東京湾まで、168km四方の広域背景パノラマ",
    f4Desc: "32km × 14km の詳細3D地形の外側に、荒川流域全体をカバーする 168km 四方のパノラマ背景地形をシームレスに結合。水源の秩父連峰から、調節池群、隅田川分岐点、荒川放水路、そして東京湾へと注ぐ治水の全体像を俯瞰できます。",
    f4p1: "国土地理院 1秒DEMと航空写真による広域テクスチャマッピング",
    f4p2: "ワンクリックで広域パノラマと調節池近接視点をスムーズ遷移",
    f4p3: "施設・水門・橋梁・堤防の3D空間追従ラベル表示",
    badge4: "168km 流域パノラマ",

    // Tech Specs
    techKicker: "ARCHITECTURE & TECH",
    techTitle: "先端ウェブ技術と地理空間データの融合",
    tech1Title: "Three.js & WebGL2 シェーダー",
    tech1Desc: "広大な標高メッシュと法面リボン、動的波紋水面を滑らかな60fpsでGPUレンダリング。低負荷かつフォトリアルな治水ビジュアルを実現。",
    tech2Title: "平面直角座標系 & 標高換算",
    tech2Desc: "国土地理院 EPSG:6677（第IX系）と WGS84 緯度経度を高精度相互変換。東京湾平均海面（T.P.）と荒川水系工事基準面（A.P.）の厳密換算に対応。",
    tech3Title: "Tauri v2 デスクトップ環境",
    tech3Desc: "Rustベースの極めて軽量・高速・セキュアなデスクトップランタイム。メモリ消費を最小限に抑え、オフライン解析やデータ保存を強力サポート。",

    // Scenario Box
    scenKicker: "DISASTER VERIFICATION",
    scenTitle: "令和元年 台風19号 シミュレーション諸元",
    scenBadge: "実測データ完全再現",
    scen1Label: "本川最高水位 (治水橋)",
    scen1Val: "A.P. +12.35 m",
    scen1Note: "越流堤天端(+8.70m)を大幅超過",
    scen2Label: "第一調節池 貯留実績",
    scen2Val: "3,500 万 m³",
    scen2Note: "総容量比 約90%（過去最大）",
    scen3Label: "最大流入量 Qmax",
    scen3Val: "約 1,000 m³/s",
    scen3Note: "本川ピーク流量を大幅カット",
    scen4Label: "下流都心 水位低減効果",
    scen4Val: "約 -38 cm",
    scen4Note: "岩淵水門・下流域の決壊を防護",

    // Store / Purchase Section
    storeKicker: "OFFICIAL DESKTOP APP",
    storeTitle: "デスクトップ版の購入・入手（CYBER MATRIX）",
    storeDesc: "Arakawa Flood デスクトップ版（macOS / Windows）は、公式ストア「CYBER MATRIX」にて買い切り ¥150（永久ライセンス）でご購入いただけます。ご購入後、すぐにインストーラーのダウンロードが開始されます。",
    storePriceVal: "¥150",
    storePriceLabel: "買い切り価格 (税込・永久ライセンス)",
    storeBtn: "CYBER MATRIX で購入する (¥150)",
    storeNote: "macOS (Apple Silicon / Intel dmg) · Windows 10 & 11 (64-bit exe) · オフライン完全動作 · CSV出力対応",

    // Footer
    footerCopyright: "© 2026 Arakawa Flood Project. All rights reserved.",
    footerDataCredits: "データ出典: 国土地理院（基盤地図情報 DEM5A、地理院タイル）、国土交通省 関東地方整備局 荒川調節池工事事務所、PLATEAU、© OpenStreetMap contributors"
  },
  en: {
    // Nav
    navFeatures: "Features",
    navWeir: "Weir & Profile",
    navScenarios: "Typhoon Hagibis",
    navTech: "Tech Specs",
    navDownload: "Buy Desktop App",
    langToggle: "日本語",

    // Hero
    heroTag: "PLATEAU × GSI JAPAN DEM5A × THREE.JS",
    heroTitle: "When the Arakawa Floods,<br><span class=\"text-gradient\">What Does the Basin Protect?</span>",
    heroLead: "A comprehensive 3D flood simulator modeling the Arakawa Retarding Basin (Lake Saiko & Akigase Park), overflow weir, surrounding levee, and primary embankments over a 32km × 14km detailed terrain and 168km regional basin panorama. Observe and analyze river rise, inflow weir hydraulics, retarding storage dynamics, and urban water level reduction downstream.",
    heroCtaBuy: "Buy Desktop Edition (¥150)",
    heroCtaMore: "Explore Features",
    heroPlatforms: "macOS (Apple Silicon / Intel dmg) · Windows 10/11 (exe) · One-time ¥150",

    // Stats
    statAreaVal: "32 × 14 km",
    statAreaLabel: "Detailed Simulation Area",
    statAreaDesc: "GSI Japan 5m Laser DEM (DEM5A)",

    statCapVal: "39 Million m³",
    statCapLabel: "Total Retarding Capacity",
    statCapDesc: "Equivalent to 31 Tokyo Domes",

    statWeirVal: "A.P. +8.70 m",
    statWeirLabel: "Inflow Weir Crest Elevation",
    statWeirDesc: "Initiates planned overflow diversion",

    statEffectVal: "-38 cm",
    statEffectLabel: "Water Level Cut (Typhoon 19)",
    statEffectDesc: "Protected central Tokyo downstream",

    statPanoramaVal: "168 km Basin",
    statPanoramaLabel: "Wide Regional Panorama",
    statPanoramaDesc: "From Chichibu Mountains to Tokyo Bay",

    // Features Section
    featKicker: "CORE FEATURES",
    featTitle: "Unveiling Tokyo's Giant Flood Defense Infrastructure",
    featLead: "Beyond static hazard maps: discover how engineered levees and retarding basins interact dynamically to halt catastrophic inundation using physics formulas and real-time 3D visualization.",

    // Feature 1
    f1Num: "01 / LEVEE & BASIN GEOMETRY",
    f1Title: "Precision 3D Levee Modeling via GSI DEM5A Data",
    f1Desc: "Faithfully models the overflow weir (A.P.+8.70m / T.P.+7.57m), partition levee (approx. A.P.+15.1m), and main river embankments (approx. A.P.+15.2m) derived directly from 5-meter laser elevation survey tiles, including excavated Lake Saiko bathymetry.",
    f1p1: "Engineered overflow weir channeling surplus discharge safely into the basin",
    f1p2: "Partition levee isolating the basin to prevent backflow into the river channel",
    f1p3: "Massive primary embankments shielding Toda, Saitama, and Asaka cities",
    badge1: "Precision DEM5A",

    // Feature 2
    f2Num: "02 / CROSS SECTION DYNAMICS",
    f2Title: "Real-time Dynamic Cross-Section Elevation Profile",
    f2Desc: "A continuous cross-sectional profile spans [Asaka City] — [Right Levee] — [Arakawa River] — [Weir] — [Partition Levee] — [Lake Saiko Basin] — [Left Levee] — [Toda City], illustrating the mechanics of levee protection and basin storage at a glance.",
    f2p1: "Real-time sync with water level slider (A.P.+1.5m to +14.5m)",
    f2p2: "Broad-crested weir hydraulic equation calculation for inflow rate Q (m³/s)",
    f2p3: "Dynamic water depth calculation based on H-V storage curves",
    badge2: "Real-time Profile",

    // Feature 3
    f3Num: "03 / HISTORICAL REPRODUCTION",
    f3Title: "Verification: 2019 Typhoon Hagibis Historical Case",
    f3Desc: "In October 2019, the Arakawa River reached a record A.P.+12.35m, diverting approximately 35 million m³ of floodwater into the basin and protecting metropolitan Tokyo from disastrous overtopping. Also simulates L1 design flood and L2 maximum probable deluge.",
    f3p1: "Time-series hydrograph playback based on real telemetry data",
    f3p2: "Quantitative display of downstream flood stage reduction (-ΔH cm)",
    f3p3: "Direct CSV export at 10-minute intervals (UTF-8 BOM, Excel compatible)",
    badge3: "Typhoon Hagibis",

    // Feature 4
    f4Num: "04 / WIDE BASIN PANORAMA",
    f4Title: "168km Regional Panorama: Chichibu Mountains to Tokyo Bay",
    f4Desc: "Seamlessly blends the 32km × 14km detailed elevation model with a 168km square wide-area basin terrain. Gain full macro-perspective on how water travels from mountain headwaters through retarding basins into Tokyo Bay.",
    f4p1: "1-arc-second elevation DEM and aerial imagery texture mapping",
    f4p2: "One-click smooth transition between panoramic and basin close-up cameras",
    f4p3: "Dynamic 3D geospatial labels tracking landmarks, bridges, and sluice gates",
    badge4: "168km Panorama",

    // Tech Specs
    techKicker: "ARCHITECTURE & TECH",
    techTitle: "Advanced Web Technologies & Geospatial Intelligence",
    tech1Title: "Three.js & WebGL2 Custom Shaders",
    tech1Desc: "High-performance GPU rendering for massive terrain meshes, levee ribbons, and animated water surfaces at a steady 60 fps.",
    tech2Title: "EPSG:6677 Plane Rectangular & A.P./T.P.",
    tech2Desc: "Rigorous coordinate transformation between Japan Plane Rectangular IX and WGS84, plus precise elevation offset conversion between Tokyo Peil (T.P.) and Arakawa Peil (A.P.).",
    tech3Title: "Tauri v2 Desktop Architecture",
    tech3Desc: "Rust-powered lightweight, blazing-fast desktop runtime with ultra-low memory footprint and seamless local data export capabilities.",

    // Scenario Box
    scenKicker: "DISASTER VERIFICATION",
    scenTitle: "Typhoon Hagibis (2019) Simulation Parameters",
    scenBadge: "Telemetry Validated",
    scen1Label: "Peak River Stage (Chisui Bridge)",
    scen1Val: "A.P. +12.35 m",
    scen1Note: "Substantially exceeded weir crest (+8.70m)",
    scen2Label: "Basin Stored Volume",
    scen2Val: "35 Million m³",
    scen2Note: "Approx. 90% capacity (historic record)",
    scen3Label: "Peak Inflow Rate Qmax",
    scen3Val: "Approx. 1,000 m³/s",
    scen3Note: "Shaved off peak flood crest",
    scen4Label: "Downstream Stage Reduction",
    scen4Val: "Approx. -38 cm",
    scen4Note: "Prevented overtopping at Iwabuchi Gate",

    // Store / Purchase Section
    storeKicker: "OFFICIAL DESKTOP APP",
    storeTitle: "Get Desktop Edition (CYBER MATRIX)",
    storeDesc: "Arakawa Flood Desktop (macOS / Windows) is available on CYBER MATRIX store for a one-time perpetual purchase of ¥150. Operates fully offline, supports up to 4K resolution, and exports telemetry CSV data.",
    storePriceVal: "¥150",
    storePriceLabel: "One-Time Purchase (Tax incl. / Perpetual)",
    storeBtn: "Buy on CYBER MATRIX (¥150)",
    storeNote: "macOS (Apple Silicon / Intel dmg) · Windows 10 & 11 (64-bit exe) · Offline Ready · CSV Export",

    // Footer
    footerCopyright: "© 2026 Arakawa Flood Project. All rights reserved.",
    footerDataCredits: "Data Sources: Geospatial Information Authority of Japan (GSI DEM5A & tiles), MLIT Kanto Regional Bureau Arakawa Basin Project Office, PLATEAU, © OpenStreetMap contributors"
  }
};

let currentLang = 'ja';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('arakawa_lp_lang', lang);

  const dict = translations[lang] || translations.ja;

  // Elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  // Restore saved lang or fallback to browser language
  const saved = localStorage.getItem('arakawa_lp_lang');
  if (saved && translations[saved]) {
    setLanguage(saved);
  } else {
    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('en')) {
      setLanguage('en');
    } else {
      setLanguage('ja');
    }
  }

  // Language button toggle
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ja' ? 'en' : 'ja');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Dynamic navbar blur & shadow on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.style.background = 'rgba(7, 12, 24, 0.92)';
      nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      nav.style.background = 'rgba(7, 12, 24, 0.78)';
      nav.style.boxShadow = 'none';
    }
  });
});
