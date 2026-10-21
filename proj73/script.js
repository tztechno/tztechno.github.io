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
    heroBadge: 'v1.1.0 最新版: USGS Slab2・内閣府11領域・MP4録画搭載',
    heroTitle: '南海トラフ巨大津波を、<br><span class="gradient-text">極限の解像度</span>で可視化する。',
    heroDesc: 'Okada弾性転位モデルと2次元非線形浅水流方程式（SWE）を融合。外洋深海から沿岸各地への広域津波伝播を瞬時に解析し、宮古津波型・市街地遡上シミュレーション（Phase 2）へとシームレスに接続します。',
    btnStoreSub: '公式ストア・販売ページ',
    btnStoreMain: '製品版を入手する（cyber-matrix）',
    btnLearnMore: '機能・シミュレーション詳細',
    statSize: '超軽量 (3.7MB〜)',
    statDomain: '広域1.5分メッシュ',
    statTime: '数秒で一括高速計算',
    featuresTitle: '4つの核心技術とアドバンテージ',
    featuresDesc: '学術基準の物理モデル、実務に即した連携出力、プレート境界の立体モデル、そしてモダンな高速実行環境を兼ね備えています。',
    feat1Title: '厳密な物理数値モデル',
    feat1Desc: '岡田（Okada 1985）弾性転位モデルにより断層パラメータから初期海底地殻変動を算出。スタガード格子（Arakawa C-grid）を用いた2次元非線形浅水流方程式（SWE）と半陰解法マニング摩擦項で、浅瀬から海溝深海まで絶対発散しない安定した時間発展を実現。',
    feat2Title: 'USGS Slab2 プレート境界補間',
    feat2Desc: '沈み込むフィリピン海プレートおよび太平洋プレートの3次元形状データ（0.1度格子）を内蔵。「🎯 震源クリック指定」で地図上をクリックするだけで、プレート深さ・走向（strike）・傾斜（dip）を瞬時に双線形補間して物理的に妥当な断層面を自動構成。',
    feat3Title: '市街地遡上連携用 CSV 出力',
    feat3Desc: '全期間時系列（方式A）に加え、第1波到達前2分を t=0 に正規化して無駄な初期時間を省いた「市街地連携用トリミング波形（方式B）」を出力。水位だけでなく東西・南北の流速ベクトル（U, V）や流向を含み、Phase 2 の都市浸水シミュレーターに即座に直結。',
    feat4Title: '動画保存 (MP4) & 超高速計算',
    feat4Desc: 'WebCodecs と MP4-Muxer による高速ハードウェアエンコードを搭載し、アニメーションをMP4動画としてワンクリックで直接保存。急深崖の数値ノイズを消去するShapiroフィルターを備え、120分の物理計算も数秒で一括実行できます。',
    archBadge: 'シミュレーション連携構想',
    archTitle: 'フェーズ1（広域海洋）からフェーズ2（市街地浸水）へ',
    archDesc: '南海トラフ軸で発生した津波エネルギーを、沿岸港湾・市街地構造物の破壊シミュレーションへと橋渡しします。',
    compTableTitle: '2つのエクスポート方式の使い分け',
    scenariosTitle: '内閣府想定・歴史地震・全国シナリオ',
    scenariosDesc: '内閣府モデル（全11ケース）から歴史地震、2011年東北沖地震までワンクリックで切り替えて波形を比較できます。',
    demoTitle: 'インタラクティブ波面シミュレーター',
    demoDesc: 'マップ内をクリックすると、任意の震源から津波が広域に同心円状に伝播する物理波紋を体験できます。',
    canvasClickHint: '👆 キャンバスをクリックして津波を発生',
    storeBadge: '公式ライセンス・販売',
    downloadTitle: '製品版のご購入・入手方法',
    downloadDesc: '製品版アプリ（macOS DMG / Windows EXE / フルデータセット）のご購入・ダウンロードは、公式ストア（cyber-matrix）にて承っております。',
    btnBuyMac: '販売ページで購入・入手',
    btnBuyWin: '販売ページで購入・入手',
    docsTitle: 'ドキュメント & マニュアル',
    docsDesc: '詳細な操作マニュアル、物理方程式、CSVフォーマット仕様書をご用意しています。'
  },
  en: {
    navFeatures: 'Features',
    navArchitecture: 'Architecture',
    navScenarios: 'Scenarios',
    navPhysics: 'Physics',
    navDownload: 'Pricing / Store',
    navDocs: 'Manuals',
    btnGetApp: 'Product Page / Store',
    heroBadge: 'v1.1.0 Release: USGS Slab2, Cabinet Office 11 Cases & MP4 Recording',
    heroTitle: 'Visualizing Nankai Mega-Tsunamis<br>with <span class="gradient-text">Extreme Precision</span>.',
    heroDesc: 'Fusing the Okada elastic half-space dislocation model with 2D non-linear shallow water equations (SWE). Solves broad-scale deep-ocean propagation to coastal gauges instantaneously, coupling directly into Phase-2 urban inundation solvers.',
    btnStoreSub: 'Official Store & Licensing',
    btnStoreMain: 'Get Product on cyber-matrix',
    btnLearnMore: 'Explore Features & Physics',
    statSize: 'Ultra-light (3.7MB+)',
    statDomain: 'All-Japan 1.5-arcmin',
    statTime: 'Fast-Forward in Seconds',
    featuresTitle: '4 Core Technologies & Advantages',
    featuresDesc: 'Combining academic-grade hydrodynamics, production-ready boundary exports, 3D plate geometry, and a high-performance desktop framework.',
    feat1Title: 'Rigorous Hydrodynamic Solver',
    feat1Desc: 'Computes coseismic seabed uplift from Okada (1985) dislocation parameters. Solves 2D non-linear shallow water equations on a staggered Arakawa C-grid with semi-implicit Manning friction, ensuring strict stability across trenches and shoals.',
    feat2Title: 'USGS Slab2 Plate Geometry',
    feat2Desc: 'Integrates 3D interface depth and strike/dip data (0.1-degree grid). With "🎯 Pick Epicenter", simply click on the map to automatically interpolate depth, strike, and dip for realistic subduction fault modeling.',
    feat3Title: 'Phase 2 City Run-up CSV Exports',
    feat3Desc: 'In addition to full-timeline data (Mode A), exports trimmed effective waveforms (Mode B) shifted to t=0 at 2 minutes before arrival. Includes water elevation, East-West/North-South velocity vectors (U, V), and directional compass headings.',
    feat4Title: 'MP4 Video Recording & Fast Solver',
    feat4Desc: 'Hardware-accelerated MP4 video encoding powered by WebCodecs & MP4-Muxer for one-click animation recording. Features Shapiro filtering to suppress 2Δx noise while solving 120 minutes in seconds.',
    archBadge: 'Coupled Simulation Pipeline',
    archTitle: 'From Phase 1 (Ocean Basin) to Phase 2 (City Inundation)',
    archDesc: 'Bridging megathrust rupture energy directly into localized coastal harbor and building inundation models.',
    compTableTitle: 'Choosing Between the 2 CSV Export Modes',
    scenariosTitle: 'Cabinet Office, Historical & Japan-wide Scenarios',
    scenariosDesc: 'Switch between Cabinet Office megaquake cases, historical ruptures, and the 2011 Tohoku event in a single click.',
    demoTitle: 'Interactive Wavefront Simulator',
    demoDesc: 'Click anywhere inside the simulation box to generate custom concentric tsunami wave ripples in real-time.',
    canvasClickHint: '👆 Click on the canvas to trigger tsunamis',
    storeBadge: 'Official Licensing & Store',
    downloadTitle: 'Purchase & License Options',
    downloadDesc: 'Production editions (macOS DMG / Windows EXE / Full Datasets) are available via our official store on cyber-matrix.',
    btnBuyMac: 'Purchase on Store (macOS)',
    btnBuyWin: 'Purchase on Store (Windows)',
    docsTitle: 'Documentation & Manuals',
    docsDesc: 'Comprehensive user guides, hydrodynamic governing equations, and CSV specification manuals available.'
  }
};

// Scenario Database for Interactive Tabs
const SCENARIOS = {
  nankai_full: {
    name_ja: '南海トラフ全域連動 (M9.1)',
    name_en: 'Full Nankai Trough Megaquake (M9.1)',
    tab_ja: '全域連動 (M9.1)',
    tab_en: 'Full Rupture (M9.1)',
    mag: 'Mw 9.1',
    desc_ja: '駿河湾から日向灘に至るトラフ軸全域（東海・東南海・南海・日向灘の4セグメント）が一斉に破壊する内閣府想定クラスの最大規模地震。最大すべり量20m。',
    desc_en: 'Simultaneous rupture across all four segments from Suruga Bay to Hyuganada. Maximum Cabinet Office scenario with up to 20m dislocation slip.',
    faults_ja: '4 セグメント (全域連動)',
    faults_en: '4 Segments (Full Basin)',
    slip: '20.0 m',
    height_ja: '20m+ (高知・和歌山・静岡)',
    height_en: '20m+ (Kochi, Wakayama, Shizuoka)',
    arrival_ja: '約 3〜5 分',
    arrival_en: 'Approx. 3 - 5 min'
  },
  cabinet_c1: {
    name_ja: '内閣府想定 ケース① (M9.1)',
    name_en: 'Cabinet Office Case 1 (M9.1)',
    tab_ja: '内閣府ケース① (M9.1)',
    tab_en: 'Cabinet Case 1 (M9.1)',
    mag: 'Mw 9.1',
    desc_ja: '内閣府検討会「ケース①：駿河湾〜愛知県東部沖に大すべり域・超大すべり域」。最大すべり量41.4m（超大すべり域）。静岡・愛知・三重の津波高が極大化。',
    desc_en: 'Cabinet Office Case 1: Large & extreme slip zones located off Suruga Bay and eastern Aichi. Max slip 41.4m, maximizing surges across Shizuoka and Tokai coasts.',
    faults_ja: '11 領域モデル (大すべり東寄り)',
    faults_en: '11-Zone Model (East Large Slip)',
    slip: '41.4 m (超大すべり域)',
    height_ja: '30m+ (静岡・三重・高知)',
    height_en: '30m+ (Shizuoka, Mie, Kochi)',
    arrival_ja: '約 2〜4 分',
    arrival_en: 'Approx. 2 - 4 min'
  },
  tohoku_2011: {
    name_ja: '2011年東北地方太平洋沖地震 (M9.0)',
    name_en: '2011 Tohoku-oki Earthquake (M9.0)',
    tab_ja: '2011年東北沖 (M9.0)',
    tab_en: '2011 Tohoku (M9.0)',
    mag: 'Mw 9.0',
    desc_ja: '三陸沖から茨城沖に至る日本海溝沿いの超巨大連動破壊。宮城沖で最大すべり25m超。東北太平洋沿岸から関東・北海道へ巨大津波が押し寄せた実績地震。',
    desc_en: '2011 megathrust earthquake along the Japan Trench from Sanriku to Ibaraki. Massive seabed uplift driving devastating tsunamis across Eastern Japan.',
    faults_ja: '5 セグメント連動 (三陸〜茨城沖)',
    faults_en: '5 Segments (Sanriku to Ibaraki)',
    slip: '25.0 m',
    height_ja: '15m - 30m+ (岩手・宮城・福島)',
    height_en: '15m - 30m+ (Iwate, Miyagi, Fukushima)',
    arrival_ja: '約 25〜30 分 (沿岸GPS波浪計)',
    arrival_en: 'Approx. 25 - 30 min (Coastal Buoy)'
  },
  tonankai: {
    name_ja: '1944年昭和東南海地震 (M8.2)',
    name_en: '1944 Showa-Tonankai Earthquake (M8.2)',
    tab_ja: '昭和東南海 (M8.2)',
    tab_en: 'Showa-Tonankai (M8.2)',
    mag: 'Mw 8.2',
    desc_ja: '1944年昭和東南海地震型。熊野灘〜潮岬沖を波源とする大規模地震。三重県・和歌山県沿岸に巨大な第1波が直撃します。',
    desc_en: '1944 Showa-Tonankai rupture model. Centered offshore Kumano-nada and Shionomisaki, unleashing extreme first waves toward Mie and Wakayama coasts.',
    faults_ja: '1 セグメント (東南海断層)',
    faults_en: '1 Segment (Tonankai Fault)',
    slip: '9.5 m',
    height_ja: '10m - 15m (三重・和歌山)',
    height_en: '10m - 15m (Mie, Wakayama)',
    arrival_ja: '約 6〜8 分',
    arrival_en: 'Approx. 6 - 8 min'
  },
  nankai_single: {
    name_ja: '1946年昭和南海地震 (M8.4)',
    name_en: '1946 Showa-Nankai Earthquake (M8.4)',
    tab_ja: '昭和南海 (M8.4)',
    tab_en: 'Showa-Nankai (M8.4)',
    mag: 'Mw 8.4',
    desc_ja: '1946年昭和南海地震型。室戸岬〜足摺岬沖の高知沖を波源とする地震。四国太平洋沿岸および紀伊水道への大規模侵入を再現。',
    desc_en: '1946 Showa-Nankai rupture model. Centered off Kochi and Shikoku, causing massive surge waves entering the Kii Channel and Tosa Bay.',
    faults_ja: '1 セグメント (南海断層)',
    faults_en: '1 Segment (Nankai Fault)',
    slip: '11.0 m',
    height_ja: '12m - 18m (高知・徳島)',
    height_en: '12m - 18m (Kochi, Tokushima)',
    arrival_ja: '約 5〜10 分',
    arrival_en: 'Approx. 5 - 10 min'
  },
  tokai: {
    name_ja: '想定東海地震 (M8.0)',
    name_en: 'Anticipated Tokai Earthquake (M8.0)',
    tab_ja: '東海地震 (M8.0)',
    tab_en: 'Tokai (M8.0)',
    mag: 'Mw 8.0',
    desc_ja: '駿河トラフから遠州灘にかけて破壊する想定地震。静岡県沿岸および駿河湾口に短時間で高波高津波が到達します。',
    desc_en: 'Anticipated Tokai earthquake rupturing from Suruga Trough to Enshu-nada. Delivers rapid, high-crest surges directly into Suruga Bay.',
    faults_ja: '1 セグメント (東海断層)',
    faults_en: '1 Segment (Tokai Fault)',
    slip: '7.0 m',
    height_ja: '8m - 12m (静岡・愛知)',
    height_en: '8m - 12m (Shizuoka, Aichi)',
    arrival_ja: '約 2〜4 分',
    arrival_en: 'Approx. 2 - 4 min'
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
      ctx.fillText('NANKAI TROUGH AXIS (-4500m)', 20, canvas.height - 30);
      ctx.fillText('JAPAN PACIFIC COASTLINE', 20, 40);

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
