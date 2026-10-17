/* ==========================================================================
   CYBER MATRIX: JAPAN 3D MAP & PLATEAU VIEWER - LP CLIENT JAVASCRIPT
   Interactive Simulator, Realtime Telemetry, Audio Synthesizer & Starfield
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initSimulator();
  initTerminalStream();
  initAudio();
  initFaqAccordion();
  initFloatingCta();
  initI18n();
});

/* --------------------------------------------------------------------------
   1. Starfield & Cyber Grid Background Canvas
   -------------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const starCount = Math.floor(Math.min(width, 1400) / 10);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.15 + 0.03,
      pulse: Math.random() * 0.02 + 0.005,
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Subtle space gradient
    const gradient = ctx.createRadialGradient(
      width * 0.5,
      height * 0.2,
      50,
      width * 0.5,
      height * 0.5,
      Math.max(width, height)
    );
    gradient.addColorStop(0, 'rgba(12, 28, 54, 0.25)');
    gradient.addColorStop(1, 'rgba(2, 6, 18, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Stars
    for (let star of stars) {
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }

      star.alpha += star.pulse;
      if (star.alpha > 0.9 || star.alpha < 0.2) star.pulse = -star.pulse;

      ctx.fillStyle = `rgba(180, 230, 255, ${Math.max(0.1, star.alpha)})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   2. Interactive HUD Simulator
   -------------------------------------------------------------------------- */
const cityData = {
  tokyo: {
    name: 'TOKYO METROPOLIS',
    nameJp: '東京都（千代田区・港区・渋谷区・新宿区）',
    lat: '35° 41\' 22" N',
    lon: '139° 41\' 30" E',
    alt: 485,
    zone: 'ZONE-A / METRO CAPITAL',
    bldgs: '1,894,200 棟',
    lod: 'LOD2 ACTIVE (HIGH SPEC)',
    radarPos: { x: 72, y: 55 },
    img: 'assets/plateau_city_twin.jpg',
    insp: {
      name: '虎ノ門ヒルズ ステーションタワー',
      height: '266.0 m',
      floors: '地上49階 / 地下4階',
      id: 'gml:bldg_13103_2023_008942',
    },
  },
  osaka: {
    name: 'OSAKA METROPOLIS',
    nameJp: '大阪市（梅田・中之島・難波・阿倍野）',
    lat: '34° 41\' 37" N',
    lon: '135° 30\' 07" E',
    alt: 320,
    zone: 'ZONE-B / KANSAI HUB',
    bldgs: '612,450 棟',
    lod: 'LOD2 ACTIVE',
    radarPos: { x: 50, y: 64 },
    img: 'assets/plateau_city_twin.jpg',
    insp: {
      name: 'あべのハルカス',
      height: '300.0 m',
      floors: '地上60階 / 地下5階',
      id: 'gml:bldg_27100_2022_004123',
    },
  },
  kyoto: {
    name: 'KYOTO HISTORIC',
    nameJp: '京都市（京都駅・四条烏丸・東山）',
    lat: '35° 00\' 42" N',
    lon: '135° 46\' 05" E',
    alt: 180,
    zone: 'ZONE-K / CULTURAL TWIN',
    bldgs: '510,120 棟',
    lod: 'LOD2 ACTIVE',
    radarPos: { x: 52, y: 62 },
    img: 'assets/plateau_city_twin.jpg',
    insp: {
      name: '京都タワー (Kyoto Tower)',
      height: '131.0 m',
      floors: '展望9階 / 鉄骨造',
      id: 'gml:bldg_26100_2022_001955',
    },
  },
  nagoya: {
    name: 'NAGOYA METRO',
    nameJp: '名古屋市（名駅・栄・中区）',
    lat: '35° 10\' 49" N',
    lon: '136° 54\' 24" E',
    alt: 420,
    zone: 'ZONE-C / CHUBU METRO',
    bldgs: '741,080 棟',
    lod: 'LOD2 ACTIVE',
    radarPos: { x: 60, y: 60 },
    img: 'assets/plateau_city_twin.jpg',
    insp: {
      name: 'ミッドランドスクエア',
      height: '247.0 m',
      floors: '地上47階 / 地下6階',
      id: 'gml:bldg_23100_2023_003112',
    },
  },
  fuji: {
    name: 'MT. FUJI SUMMIT',
    nameJp: '富士山頂・駿河湾上空',
    lat: '35° 21\' 38" N',
    lon: '138° 43\' 39" E',
    alt: 3776,
    zone: 'ZONE-F / HIGHEST ELEVATION',
    bldgs: '18 棟 (気象観測所等)',
    lod: 'DEM TERRAIN + LOD1',
    radarPos: { x: 67, y: 59 },
    img: 'assets/hero_japan_orbit.jpg',
    insp: {
      name: '富士山特別地域気象観測所',
      height: '3,776.2 m ASL',
      floors: '標高日本最高地点',
      id: 'gml:bldg_fuji_summit_01',
    },
  },
  orbit: {
    name: 'ORBITAL SPACE VIEW',
    nameJp: '宇宙軌道・日本列島全俯瞰',
    lat: '35° 00\' 00" N',
    lon: '138° 00\' 00" E',
    alt: 2200000,
    zone: 'LEO ORBIT / 2,200 KM',
    bldgs: '全国 3,500万棟 (LOD1/2)',
    lod: 'ALL JAPAN SEAMLESS STREAM',
    radarPos: { x: 50, y: 50 },
    img: 'assets/hero_japan_orbit.jpg',
    insp: {
      name: '日本列島観測ジオターゲット',
      height: '高度 2,200 km (軌道上空)',
      floors: 'NASA VIIRS 夜間光 + Esri',
      id: 'target:japan_archipelago_leo',
    },
  },
};

let currentCityKey = 'tokyo';

function initSimulator() {
  const cityButtons = document.querySelectorAll('.btn-sim-city');
  const altInput = document.getElementById('sim-alt-slider');
  const altValueLabel = document.getElementById('sim-alt-display');
  const viewport = document.getElementById('sim-viewport');
  const previewImg = document.getElementById('sim-preview-img');

  // Telemetry elements
  const elLat = document.getElementById('sim-val-lat');
  const elLon = document.getElementById('sim-val-lon');
  const elZone = document.getElementById('sim-val-zone');
  const elLod = document.getElementById('sim-val-lod');
  const elBldgs = document.getElementById('sim-val-bldgs');
  const radarDot = document.getElementById('sim-radar-dot');

  // Inspector elements
  const inspName = document.getElementById('sim-insp-name');
  const inspHeight = document.getElementById('sim-insp-height');
  const inspFloors = document.getElementById('sim-insp-floors');
  const inspId = document.getElementById('sim-insp-id');

  function updateCity(key) {
    currentCityKey = key;
    const data = cityData[key];
    if (!data) return;

    // Update active button
    cityButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.city === key);
    });

    // Update Telemetry
    if (elLat) elLat.textContent = data.lat;
    if (elLon) elLon.textContent = data.lon;
    if (elZone) elZone.textContent = data.zone;
    if (elLod) elLod.textContent = data.lod;
    if (elBldgs) elBldgs.textContent = data.bldgs;

    // Update Altitude Slider & Label
    if (altInput && altValueLabel) {
      if (data.alt >= 10000) {
        altInput.value = 100;
        altValueLabel.textContent = (data.alt / 1000).toLocaleString() + ' km';
      } else {
        altInput.value = Math.min(100, Math.max(1, (data.alt / 2000) * 100));
        altValueLabel.textContent = data.alt.toLocaleString() + ' m';
      }
    }

    // Update Preview Image
    if (previewImg) {
      previewImg.src = data.img;
    }

    // Update Inspector
    if (inspName) inspName.textContent = data.insp.name;
    if (inspHeight) inspHeight.textContent = data.insp.height;
    if (inspFloors) inspFloors.textContent = data.insp.floors;
    if (inspId) inspId.textContent = data.insp.id;

    // Update Radar Dot position
    if (radarDot) {
      radarDot.style.left = `${data.radarPos.x}%`;
      radarDot.style.top = `${data.radarPos.y}%`;
    }

    playUiSound(880, 0.08);
  }

  // City button clicks
  cityButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const city = btn.dataset.city;
      updateCity(city);
    });
  });

  // Altitude Slider handler
  if (altInput && altValueLabel) {
    altInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      let calcAlt;
      if (val > 80) {
        calcAlt = Math.round(((val - 80) / 20) * 2200) + ' km';
        if (previewImg) previewImg.src = 'assets/hero_japan_orbit.jpg';
      } else {
        calcAlt = Math.round((val / 80) * 1800 + 40) + ' m';
        if (previewImg && currentCityKey !== 'orbit') {
          previewImg.src = cityData[currentCityKey].img;
        }
      }
      altValueLabel.textContent = calcAlt;
      playUiSound(400 + val * 6, 0.03);
    });
  }

  // Altitude preset clicks
  const altPresets = document.querySelectorAll('.alt-preset-btn');
  altPresets.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetAlt = btn.dataset.alt;
      if (targetAlt === 'orbit') {
        updateCity('orbit');
      } else if (targetAlt === 'high') {
        if (altInput) altInput.value = 75;
        if (altValueLabel) altValueLabel.textContent = '1,500 m';
        playUiSound(720, 0.08);
      } else if (targetAlt === 'street') {
        if (altInput) altInput.value = 10;
        if (altValueLabel) altValueLabel.textContent = '120 m';
        playUiSound(540, 0.08);
      }
    });
  });

  // Shader Style buttons
  const shaderBtns = document.querySelectorAll('.btn-sim-shader');
  shaderBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      shaderBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const style = btn.dataset.style;
      if (viewport) {
        viewport.className = 'sim-viewport style-' + style;
      }
      playUiSound(1040, 0.06);
    });
  });

  // Inspector card random building toggle on click
  const inspBox = document.getElementById('sim-inspector-box');
  if (inspBox) {
    inspBox.style.cursor = 'pointer';
    inspBox.addEventListener('click', () => {
      const buildings = [
        { name: '六本木ヒルズ 森タワー', height: '238.0 m', floors: '地上54階', id: 'gml:bldg_13103_2023_001200' },
        { name: '渋谷スクランブルスクエア', height: '229.7 m', floors: '地上47階', id: 'gml:bldg_13113_2023_004511' },
        { name: '東京スカイツリー', height: '634.0 m', floors: '展望塔', id: 'gml:bldg_13107_2023_000001' },
        { name: '丸の内ビルディング', height: '179.3 m', floors: '地上37階', id: 'gml:bldg_13101_2023_008821' },
      ];
      const randomBldg = buildings[Math.floor(Math.random() * buildings.length)];
      if (inspName) inspName.textContent = randomBldg.name;
      if (inspHeight) inspHeight.textContent = randomBldg.height;
      if (inspFloors) inspFloors.textContent = randomBldg.floors;
      if (inspId) inspId.textContent = randomBldg.id;
      playUiSound(1280, 0.08);
    });
  }
}

/* --------------------------------------------------------------------------
   3. PLATEAU NET STREAM Console Logs
   -------------------------------------------------------------------------- */
function initTerminalStream() {
  const terminal = document.getElementById('sim-terminal-stream');
  if (!terminal) return;

  const logTemplates = [
    '[NET-STREAM] GET https://api.plateauview.mlit.go.jp/datacatalog/3dtiles/13100-bldg-lod2-latest/tileset.json (200 OK, 12ms)',
    '[CACHE-HIT] Spatial Index Zone [35.6812, 139.7671] cached in Local IndexedDB',
    '[CESIUM-CONVERT] Dynamic b3dm to Cesium3DTileset conversion complete (Rendered: 4,120 bldgs)',
    '[TELEMETRY] Sensor array locked onto Chiyoda-ku / Minato-ku border line',
    '[GPU-MEM] VRAM Buffer: 482MB allocated (Cesium 3D Tiles cache nominal @ 60.0 FPS)',
    '[ATMOSPHERE] Sun ray-tracing scatter adjusted for Solar Angle +32.4 deg',
    '[PLATEAU-API] Synchronizing regional LOD1 boundary tiles for Kanto Plain',
  ];

  let index = 0;
  setInterval(() => {
    const p = document.createElement('div');
    p.className = 'terminal-line';
    p.textContent = logTemplates[index % logTemplates.length];
    terminal.appendChild(p);

    if (terminal.children.length > 5) {
      terminal.removeChild(terminal.children[0]);
    }
    index++;
  }, 3200);
}

/* --------------------------------------------------------------------------
   4. Cyber Audio Synthesizer (Web Audio API)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let isAudioEnabled = true;

function initAudio() {
  const soundBtn = document.getElementById('btn-sound-toggle');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    soundBtn.classList.toggle('active', isAudioEnabled);
    soundBtn.innerHTML = isAudioEnabled
      ? '<i class="fa-solid fa-volume-high"></i> <span>AUDIO ON</span>'
      : '<i class="fa-solid fa-volume-xmark"></i> <span>MUTED</span>';

    if (isAudioEnabled) playUiSound(600, 0.1);
  });
}

function playUiSound(freq = 800, duration = 0.05) {
  if (!isAudioEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may be restricted before user interaction
  }
}

/* --------------------------------------------------------------------------
   5. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach((i) => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
        playUiSound(700, 0.05);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Floating CTA Bar
   -------------------------------------------------------------------------- */
function initFloatingCta() {
  const bar = document.getElementById('floating-cta-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  });
}

/* --------------------------------------------------------------------------
   7. Bilingual (JP / EN) Text Toggle
   -------------------------------------------------------------------------- */
let currentLang = 'ja';

const translations = {
  ja: {
    heroKicker: 'CYBER MATRIX DESKTOP & WEB SERIES',
    heroTitle: '宇宙軌道2,200kmから、<br><span class="gradient-text-cyan">路地のPLATEAU 3Dモデルまで。</span>',
    heroSub: 'CesiumJS 3Dエンジンと国土交通省 Project PLATEAU 公式配信APIがダイレクト融合。宇宙ステーション高度から日本列島全体を俯瞰し、ズームインで実測3D都市モデルがリアルタイムに立ち並ぶサイバー航空宇宙デジタルツイン。',
    btnStore: 'Cyber Matrix ストアで購入',
    btnDemo: 'インタラクティブ体験',
    featKicker: 'CORE CAPABILITIES',
    featTitle: '4つの圧倒的デジタルツイン技術',
    pricingTitle: '日本列島の3DデジタルツインをあなたのPCに',
  },
  en: {
    heroKicker: 'CYBER MATRIX DESKTOP & WEB SERIES',
    heroTitle: 'From 2,200km Orbit Down to <br><span class="gradient-text-cyan">PLATEAU 3D Urban Model.</span>',
    heroSub: 'CesiumJS 3D engine seamlessly integrated with MLIT Project PLATEAU API. Experience the Japanese archipelago from low Earth orbit and zoom down to real-world 3D architectural cityscapes.',
    btnStore: 'Get on Cyber Matrix Store',
    btnDemo: 'Launch Interactive Demo',
    featKicker: 'CORE CAPABILITIES',
    featTitle: '4 Extreme Digital Twin Engines',
    pricingTitle: 'Deploy Japan 3D Digital Twin to Your PC',
  },
};

function initI18n() {
  const langBtn = document.getElementById('btn-lang-toggle');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    langBtn.innerHTML = `<i class="fa-solid fa-globe"></i> <span>${currentLang.toUpperCase()}</span>`;

    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n-key]').forEach((el) => {
      const key = el.dataset.i18nKey;
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    playUiSound(920, 0.08);
  });
}
