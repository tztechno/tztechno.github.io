/**
 * Tsunami Propagation Simulator - Landing Page Script
 * - 日本語 / 英語の切り替え (日本語の文言は index.html に書いたものをそのまま使う)
 * - 計算例のタブ
 * - 2次元波動方程式の簡易デモ
 */

// --- 1. Translations (英語のみ。日本語は初期表示の HTML から読み取る) ---------
const TRANSLATIONS = {
  ja: {},
  en: {
    pageTitle: 'Tsunami Propagation Simulator (Worldwide)',
    navFeatures: 'Features',
    navArchitecture: 'Bathymetry',
    navScenarios: 'Examples',
    navDemo: 'Demo',
    navDownload: 'Get it',
    navNotes: 'Notes',
    btnGetApp: 'Product page',
    heroBadge: 'v1.0.0: works worldwide. Pick a source and only the bathymetry of the required area is downloaded',
    heroTitle: 'Compute <span class="gradient-text">tsunami propagation</span><br>from a fault CSV, anywhere in the world.',
    heroDesc: 'Give the source as a fault-parameter CSV or by clicking the map, and the app computes the tsunami with the Okada dislocation model and the 2D long-wave (shallow water) equations. It does not preload global bathymetry: the area around the source is downloaded when you choose it.',
    btnStoreSub: 'macOS desktop app',
    btnStoreMain: 'Get it on the product page',
    btnLearnMore: 'Feature details',
    statDomainVal: 'Worldwide',
    statDomain: 'bathymetry fetched only where needed',
    statSizeVal: '~5<span class="unit">MB</span>',
    statSize: 'macOS DMG',
    statTimeVal: 'up to 12<span class="unit">h</span>',
    statTime: 'simulated time after the earthquake',
    heroVisualTitle: 'Actual app screen',
    altHero: 'Tsunami of the 2010 Maule, Chile earthquake (USGS finite fault), 2 hours after the earthquake',
    heroBadgeScenario: '2010 Maule, Chile (USGS finite fault)',
    heroBadgeTime: '2 hours after the earthquake',
    featuresTitle: 'Four main features',
    featuresDesc: 'Sources anywhere in the world, bathymetry downloaded only where needed, the bundled Japan grid usable as is, and results exported as CSV and video.',
    feat1Title: 'From a fault CSV, anywhere',
    feat1Desc: 'Load a CSV with one rectangular fault per row (position, depth, size, strike, dip, rake, slip; up to 5,000 rows, with optional hypocenter and rupture velocity) to build the source. A script that converts USGS finite-fault models to this format is included. You can also click the map to place a single fault sized for the chosen magnitude.',
    feat2Title: 'Bathymetry only where needed',
    feat2Desc: 'Bundling global bathymetry would be too heavy, so when you choose a source the app downloads only the surrounding area from public elevation tiles and builds the computational grid. Choose the extent (about 6° to 45° around the fault) and the cell count (about 0.5M to 2.5M). Domains crossing the date line are supported, and downloaded tiles are cached.',
    feat3Title: 'Physics-based computation',
    feat3Desc: 'Seafloor uplift and subsidence come from the Okada (1985) dislocation model. The 2D long-wave equations are solved on an Arakawa C-grid with latitude-dependent grid spacing and semi-implicit Manning friction. A 4th-order Shapiro filter removes grid-scale noise and an absorbing layer prevents reflections from the domain edges. Japan is computed on the bundled 1.5-arcmin grid (15-arcsec for Osaka Bay).',
    feat4Title: 'Station CSV export and video',
    feat4Desc: '46 major locations worldwide and 20 in Japan are built in; those inside the domain record water level, flow velocity and direction over time. Add your own points by clicking the map. Export the full time series from t = 0 as CSV, and save the result as an MP4 video of 10 to 60 seconds. The interface switches between Japanese and English.',
    archBadge: 'How bathymetry is handled',
    archTitle: 'Japan is bundled; elsewhere it is fetched for the source',
    archDesc: 'If the fault fits in the bundled Japan grid, the computation runs with no download. Otherwise the bathymetry of the required area is downloaded and the domain switches to it.',
    archPhase1Badge: 'Japan (bundled)',
    archPhase1Title: 'All of Japan, ready at startup',
    archPhase1Desc: '125.6°E–152.9°E, 22.0°N–48.0°N on a 1.5-arcmin grid (about 2.8 km), with a 15-arcsec nested grid for Osaka Bay and the northern Kii Channel. The Nankai Trough and Tohoku presets and the 20 default offshore points work as is.',
    altPhase1: 'Initial water level of the full Nankai Trough rupture (M9.1) on the bundled Japan grid',
    archArrowLabel: 'Fault outside Japan',
    archPhase2Badge: 'World (on demand)',
    archPhase2Title: 'Fetch only the area around the source',
    archPhase2Desc: 'Show the whole world with "🌐 World", then click a source or load a fault CSV: the bathymetry inside the light-blue frame is downloaded and used for the computation. Outside the frame a coarse world map (0.25°) is shown as a backdrop.',
    altPhase2: 'World view; the light-blue frame is the current computational domain',
    compTableTitle: 'Domain size and grid',
    compThMode: 'Setting',
    compThRange: 'Downloaded area',
    compThGrid: 'Typical grid spacing (~1.2M cells)',
    compThUse: 'Good for',
    compModeA: '<strong>Auto</strong>',
    compRangeA: 'Bundled grid if the fault fits in Japan; otherwise about 12° around the fault',
    compGridA: 'Japan ~2.8 km / elsewhere ~3 km',
    compUseA: 'The usual choice',
    compModeB: '<strong>Small / Standard</strong>',
    compRangeB: 'About 6° / 12° around the fault (~670 km / ~1300 km)',
    compGridB: 'About 2–3.5 km (1-arcmin minimum)',
    compUseB: 'Arrival times and heights on coasts near the source',
    compModeC: '<strong>Large / Ocean scale</strong>',
    compRangeC: 'About 25° / 45° around the fault (~2800 km / ~5000 km)',
    compGridC: 'About 6–10 km',
    compUseC: 'Overview of far-field propagation (6 h and 12 h runs)',
    scenariosTitle: 'Examples',
    scenariosDesc: 'Domains and grids from actual runs with the bundled fault CSVs and a clicked source.',
    scLabelFaults: 'Fault model',
    scLabelDomain: 'Domain',
    scLabelGrid: 'Grid',
    scLabelTiles: 'Bathymetry',
    scNote: '* Values from v1.0.0 with "Grid resolution: Standard". Mw is computed from the slip and area in the fault CSV with a rigidity of 40 GPa, so it can differ slightly from published values.',
    altPacific: 'A source (Mw8.8) clicked near the Tonga Trench, computed for 6 hours on an ocean-scale domain',
    pacificCaption: 'A source (Mw8.8) placed by clicking near the Tonga Trench, computed for 6 hours on an ocean-scale domain (136°E to 123°W, crossing the date line)',
    demoTitle: 'Simple wave-spreading demo',
    demoDesc: 'Waves spread from where you click, using a simple 2D wave equation. Unlike the app, it uses no fault model or real bathymetry (the wave speed just decreases toward the top, as if the sea were shallower).',
    demoHud: '● Simple demo (2D wave equation)',
    canvasClickHint: '👆 Click to generate a wave',
    canvasReset: 'Reset',
    storeBadge: 'v1.0.0',
    downloadTitle: 'How to get it',
    downloadDesc: 'The macOS desktop app is available from the product page. Computing outside Japan needs an internet connection to download the bathymetry.',
    macTitle: 'macOS desktop app',
    macMeta: 'Apple Silicon (M1 or later), macOS 10.15+',
    macDesc: 'A Tauri v2 desktop app. All computation runs on your computer. CSV files and MP4 videos are saved to the Downloads folder.',
    macPkg: 'Package: <strong>DMG (about 5.1 MB / v1.0.0)</strong>',
    btnGetMac: 'Get it on the product page',
    notesTitle: 'Notes on use',
    notesDesc: 'Limitations that come from the method and the bathymetry data. Treat the results as a guide to how the tsunami spreads.',
    note1Title: 'Far-field accuracy',
    note1Desc: 'The long-wave equations here include neither the Coriolis force nor dispersion. Arrival times and heights of ocean-crossing tsunamis are approximate, and tsunami heights and run-up at the coast are larger than the offshore values.',
    note2Title: 'Bathymetry data',
    note2Desc: 'Outside Japan the bathymetry comes from Mapzen Terrain Tiles (AWS Open Data; ETOPO1 1-arcmin in the ocean). Small features such as bays and straits are not resolved. The domain can extend to about 78° N/S, and sources to about 72°.',
    note3Title: 'Fault orientation for clicked sources',
    note3Desc: 'Strike and dip are set automatically from the plate interface (USGS Slab) only around Japan. Elsewhere, enter strike, dip and rake under "Custom fault parameters".',
    footerTop: 'Back to top',
    footerData: 'Bathymetry: Mapzen Terrain Tiles',
    footerUsgs: 'Fault models: USGS'
  }
};

// --- 計算例 (v1.0.0・格子の細かさ「標準」での実行結果) ------------------------
const SCENARIOS = {
  maule_2010: {
    tab_ja: '2010年 チリ・マウレ', tab_en: '2010 Maule, Chile',
    name_ja: '2010年 チリ・マウレ地震', name_en: '2010 Maule, Chile Earthquake', mag: 'Mw 8.8',
    desc_ja: '同梱の断層CSV（USGS有限断層モデルを変換）を選ぶと、断層の周囲の地形を取得して計算します。震源から破壊が伝播する設定で、120分の計算は約40秒でした。',
    desc_en: 'Choosing the bundled fault CSV (converted from the USGS finite-fault model) downloads the bathymetry around the fault. The rupture propagates from the hypocenter; a 120-minute run took about 40 seconds.',
    faults_ja: '小断層 236枚 (USGS)', faults_en: '236 subfaults (USGS)',
    domain_ja: '西経90°〜56°・南緯52°〜21°', domain_en: '90°W–56°W, 52°S–21°S',
    grid_ja: '1147×1046 セル・約3.3km', grid_en: '1147×1046 cells, ~3.3 km',
    tiles_ja: '64タイル (約3秒)', tiles_en: '64 tiles (about 3 s)'
  },
  sumatra_2004: {
    tab_ja: '2004年 スマトラ島沖', tab_en: '2004 Sumatra-Andaman',
    name_ja: '2004年 スマトラ島沖地震', name_en: '2004 Sumatra-Andaman Earthquake', mag: 'Mw 9.1',
    desc_ja: 'スマトラ島沖からアンダマン諸島まで南北に長い断層群。バンダアチェ、プーケット、ポートブレア、コロンボ、チェンナイなどの内蔵地点が計算範囲に入ります。',
    desc_en: 'A long north-south fault system from off Sumatra to the Andaman Islands. Built-in points such as Banda Aceh, Phuket, Port Blair, Colombo and Chennai fall inside the domain.',
    faults_ja: '小断層 440枚 (USGS)', faults_en: '440 subfaults (USGS)',
    domain_ja: '東経79°〜111°・南緯11°〜北緯28°', domain_en: '79°E–111°E, 11°S–28°N',
    grid_ja: '992×1209 セル・約3.6km', grid_en: '992×1209 cells, ~3.6 km',
    tiles_ja: '12タイル', tiles_en: '12 tiles'
  },
  tonga_custom: {
    tab_ja: '震源クリック (トンガ海溝)', tab_en: 'Clicked source (Tonga Trench)',
    name_ja: '震源クリック指定: トンガ海溝付近', name_en: 'Clicked source near the Tonga Trench', mag: 'Mw 8.8',
    desc_ja: '世界地図をクリックして置いた矩形断層1枚（長さ469km・幅161km）。範囲を「大洋規模」にすると、日付変更線をまたぐ太平洋南西部を約10kmメッシュで計算します。6時間の計算は約2分でした。',
    desc_en: 'A single rectangular fault (469 km × 161 km) placed by clicking the world map. With the "Ocean scale" extent, the southwest Pacific across the date line is computed on a ~10 km grid. A 6-hour run took about 2 minutes.',
    faults_ja: '矩形断層 1枚 (スケーリング則)', faults_en: '1 rectangular fault (scaling law)',
    domain_ja: '東経136°〜西経123°・南緯68°〜北緯27°', domain_en: '136°E–123°W, 68°S–27°N',
    grid_ja: '1130×1062 セル・約10km', grid_en: '1130×1062 cells, ~10 km',
    tiles_ja: '35タイル', tiles_en: '35 tiles'
  },
  nankai_full: {
    tab_ja: '南海トラフ (日本域)', tab_en: 'Nankai Trough (Japan)',
    name_ja: '南海トラフ全域連動', name_en: 'Full Nankai Trough Rupture', mag: 'Mw 9.1',
    desc_ja: '断層が日本域に収まるので、同梱の地形でそのまま計算します。大阪湾・紀伊水道北部は15秒メッシュの入れ子格子で計算します。',
    desc_en: 'The faults fit inside Japan, so the bundled bathymetry is used as is. Osaka Bay and the northern Kii Channel are computed on a 15-arcsec nested grid.',
    faults_ja: '4セグメントの簡易モデル', faults_en: 'Simplified 4-segment model',
    domain_ja: '東経125.6°〜152.9°・北緯22.0°〜48.0°', domain_en: '125.6°E–152.9°E, 22.0°N–48.0°N',
    grid_ja: '1093×1040 セル・約2.8km', grid_en: '1093×1040 cells, ~2.8 km',
    tiles_ja: 'ダウンロードなし (同梱)', tiles_en: 'No download (bundled)'
  }
};
let currentLang = 'ja';

// --- 2. Language Switcher ---
function captureJapanese() {
  const ja = TRANSLATIONS.ja;
  ja.pageTitle = document.title;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    ja[el.getAttribute('data-i18n')] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    ja[el.getAttribute('data-i18n-alt')] = el.getAttribute('alt');
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('btn-lang-ja')?.classList.toggle('active', lang === 'ja');
  document.getElementById('btn-lang-en')?.classList.toggle('active', lang === 'en');

  const dict = TRANSLATIONS[lang];
  if (dict.pageTitle) document.title = dict.pageTitle;
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key]) el.setAttribute('alt', dict[key]);
  });
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('.scenario-tab-btn').forEach((btn) => {
    const sc = SCENARIOS[btn.getAttribute('data-scenario')];
    if (sc) btn.textContent = lang === 'ja' ? sc.tab_ja : sc.tab_en;
  });
  const activeTab = document.querySelector('.scenario-tab-btn.active');
  updateScenarioCard(activeTab ? activeTab.getAttribute('data-scenario') : 'maule_2010');
}

// --- 3. Example tabs ---
function updateScenarioCard(key) {
  const data = SCENARIOS[key];
  if (!data) return;
  const pick = (name) => data[`${name}_${currentLang}`];
  document.getElementById('sc-name').textContent = pick('name');
  document.getElementById('sc-mag').textContent = data.mag;
  document.getElementById('sc-desc').textContent = pick('desc');
  document.getElementById('sc-faults').textContent = pick('faults');
  document.getElementById('sc-domain').textContent = pick('domain');
  document.getElementById('sc-grid').textContent = pick('grid');
  document.getElementById('sc-tiles').textContent = pick('tiles');
}

document.addEventListener('DOMContentLoaded', () => {
  captureJapanese();
  document.getElementById('btn-lang-ja')?.addEventListener('click', () => setLanguage('ja'));
  document.getElementById('btn-lang-en')?.addEventListener('click', () => setLanguage('en'));

  const tabBtns = document.querySelectorAll('.scenario-tab-btn');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      updateScenarioCard(btn.getAttribute('data-scenario'));
    });
  });

  setLanguage('ja');
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

  // Initial sources
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

  const etaNext = new Float32Array(size);
  // 外周付近で波を減衰させ、端からの反射を抑える
  const edgeDamp = new Float32Array(size).fill(1);
  const EDGE = 10;
  for (let r = 0; r < gridH; r++) {
    for (let c = 0; c < gridW; c++) {
      const d = Math.min(r, c, gridH - 1 - r, gridW - 1 - c);
      if (d < EDGE) edgeDamp[r * gridW + c] = 1 - 0.12 * ((EDGE - d) / EDGE) ** 2;
    }
  }

  function stepPhysics() {
    // 2D wave equation (leapfrog). 次の時刻は別の配列に求めてから入れ替える
    for (let r = 1; r < gridH - 1; r++) {
      const rowOffset = r * gridW;
      for (let c = 1; c < gridW - 1; c++) {
        const idx = rowOffset + c;
        const localC = Math.sqrt(depth[idx] / 4000) * cSqBase;
        const laplacian = (
          eta[idx + 1] + eta[idx - 1] +
          eta[idx + gridW] + eta[idx - gridW] - 4 * eta[idx]
        );
        etaNext[idx] = (2 * eta[idx] - etaPrev[idx] + localC * laplacian) * 0.998 * edgeDamp[idx];
      }
    }
    for (let i = 0; i < size; i++) {
      etaPrev[i] = eta[i] * edgeDamp[i];
      eta[i] = etaNext[i];
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
