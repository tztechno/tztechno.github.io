/**
 * NASA ISS Earth Realtime Viewer - LP Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  const refreshIcons = () => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };
  refreshIcons();

  // 2. Navbar Scroll Glass Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // 3. Interactive Camera View Showcase Tabs
  const navItems = document.querySelectorAll('.camera-nav-item');
  const viewImages = document.querySelectorAll('.camera-img');
  const badgeOverlay = document.getElementById('camera-overlay-badge');

  const CAMERA_BADGE_MAP = {
    cockpit: 'COCKPIT VIEW // LIVE 3D',
    chase: 'CHASE CAM // LIVE 3D',
    overhead: 'GLOBAL OVERVIEW // LIVE 3D',
    nadir: 'EARTH NADIR // LIVE 3D',
    night: 'CITY LIGHTS // LIVE 3D'
  };

  let currentCameraView = 'cockpit';

  const updateCameraBadge = () => {
    if (badgeOverlay) {
      badgeOverlay.textContent = CAMERA_BADGE_MAP[currentCameraView] || 'LIVE 3D';
    }
  };

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetView = item.dataset.view;
      currentCameraView = targetView;

      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update active image
      viewImages.forEach(img => {
        if (img.dataset.view === targetView) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });

      // Update badge text
      updateCameraBadge();
    });
  });

  // 4. Live Simulated Telemetry Ticker (Hero Section)
  const elAlt = document.getElementById('hero-alt');
  const elSpeed = document.getElementById('hero-speed');
  const elUtc = document.getElementById('hero-utc');

  const baseSpeed = 27602;
  const baseAlt = 421.4;

  setInterval(() => {
    const now = new Date();
    if (elUtc) {
      elUtc.textContent = now.toISOString().slice(11, 19) + ' UTC';
    }

    if (elSpeed) {
      const jitter = (Math.random() - 0.5) * 4;
      elSpeed.textContent = (baseSpeed + jitter).toFixed(0).toLocaleString() + ' km/h';
    }

    if (elAlt) {
      const altJitter = (Math.random() - 0.5) * 0.2;
      elAlt.textContent = (baseAlt + altJitter).toFixed(1) + ' km';
    }
  }, 1000);

  // 5. Complete Bilingual (JA / EN) Dictionary
  const LP_TEXTS = {
    ja: {
      pageTitle: 'NASA ISS Earth Realtime Viewer | 国際宇宙ステーション リアルタイム地球観測シミュレーター',
      pageDesc: '国際宇宙ステーション（ISS）から見たリアルタイムの地球の眺めをCesiumJSで3D再現。コックピット視点、後方視点、高精度2D軌道マップ、早回し・巻き戻し、絶景ポイントスキップを体験できるデスクトップシミュレーションアプリ。',
      
      // Navbar
      navFeatures: '機能紹介',
      navViews: '視点切り替え',
      navRadar: '2D軌道マップ',
      navDesktop: 'デスクトップ版',
      btnBuyNav: 'デスクトップ版を購入',
      
      // Hero
      heroTag: 'リアルタイム宇宙ステーション観測',
      heroTitle: '国際宇宙ステーションから、<br><span class="gradient-text">いま、この瞬間の地球を眺める。</span>',
      heroDesc: '高度420kmを秒速7.65kmで周回するISSの視点をリアルタイムに3Dシミュレーション。コックピット視点、後方カメラ、高精度2D軌道マップ、早回し・巻き戻し機能で未知の地球を旅する。',
      btnBuyHero: 'デスクトップ版を購入 (¥150)',
      btnSpecsHero: '動作環境・仕様を見る',
      
      // Key Features Section
      featSectionTag: 'KEY FEATURES',
      featSectionTitle: '本格的な宇宙工学と<br><span class="gradient-text">美麗な3Dグラフィックスの融合</span>',
      featSectionDesc: 'NASAやNORADの公開データと物理モデルを組み合わせ、宇宙飛行士と同じ視界を提供します。',
      
      feat1Title: 'リアルタイム SGP4 軌道伝搬',
      feat1Desc: 'CelesTrak から最新の TLE（2行軌道要素）を取得し、秒速 7.65km で周回する ISS の現在位置と姿勢をミリ秒単位で高精度計算。',
      
      feat2Title: '精密な太陽光・昼夜シミュレーション',
      feat2Desc: '太陽直下点と地球の影（エクリプス）を算出。昼側の大気光と夜側の NASA VIIRS 高解像度都市光を忠実にシミュレート。',
      
      feat3Title: '高精細 2D レーダー軌道マップ',
      feat3Desc: 'Natural Earth 50m ベクター海岸線と国境線を描画。地上可視範囲（フットプリント）や過去・未来の軌道曲線を直感的に把握。',
      
      feat4Title: '早回し・巻き戻しタイムコントロール',
      feat4Desc: '×3, ×5, ×10 の早送りや巻き戻しで、約92.8分の地球1周軌道をわずか数分で体験。LIVEボタンで瞬時に現在時刻へ同期可能。',
      
      feat5Title: '絶景ポイントへクイックジャンプ',
      feat5Desc: '直近の「軌道上の日の出」「日没」、および今後24時間以内で最も日本や北米、欧州、アマゾンに接近する時刻を自動計算してジャンプ。',
      
      feat6Title: '日本語・英語 完全バイリンガル対応',
      feat6Desc: 'ワンクリックで全テレメトリやUIの言語を瞬時に切り替え。世界中のユーザーがストレスなく利用可能です。',
      
      // Camera Views Section
      camSectionTag: 'CAMERA ANGLES',
      camSectionTitle: '宇宙飛行士の目線から、全景まで。<br><span class="gradient-text">5つの多彩なカメラアングル</span>',
      camSectionDesc: 'キューポラ観測モジュールや船体追尾カメラなど、多彩なアングルで地球の表情を堪能できます。',
      
      camCockpitTitle: 'コックピットから (Cupola Cockpit)',
      camCockpitDesc: '宇宙飛行士が眺める進行方向と水平線',
      
      camChaseTitle: '後方から (Chase Cam)',
      camChaseDesc: '巨大な太陽電池パドルと地球の共演',
      
      camOverheadTitle: '上空（遠方）から (Global Overview)',
      camOverheadDesc: '高度3,000kmからの壮大な地球全景',
      
      camNadirTitle: '直下観測カメラ (Earth Nadir)',
      camNadirDesc: '地表・山脈・サンゴ礁・夜景を高解像度観測',
      
      camNightTitle: '夜景・都市光モード (City Lights)',
      camNightDesc: '漆黒の地球に煌めく大都市の夜景',
      
      // 2D Radar Section
      radarSectionTag: '2D RADAR TRACKER',
      radarSectionTitle: 'NASA 管制室品質の<br><span class="gradient-text-gold">高精度 2D レーダーマップ</span>',
      radarSectionDesc: 'Natural Earth 50m スケールの精細なベクター海岸線と国境線上に、ISS の軌道曲線と昼夜境界線をリアルタイム描画します。',
      radarItem1: '<strong>過去45分＆予測95分の航跡ライン</strong>: 水色とゴールドの破線で地球周回ルートを一目で把握。',
      radarItem2: '<strong>地上可視範囲（フットプリント）</strong>: 半径約2,200kmの地平線可視範囲を円形レーダー表示。',
      radarItem3: '<strong>昼夜境界線（ターミネーター）</strong>: 太陽直下点から計算された地球の夜側エリアを半透明シャドウで表現。',
      radarItem4: '<strong>主要宇宙基地マーカー</strong>: 東京/JAXA、ケネディ宇宙センター(KSC)、ヒューストン(JSC)、バイコヌールを表示。',
      
      // Desktop Section
      deskSectionTag: 'DESKTOP EDITION',
      deskSectionTitle: '完全オフラインで動作する<br><span class="gradient-text">macOS ＆ Windows ネイティブアプリ</span>',
      deskSectionDesc: 'Tauri v2 による超軽量・高速設計。買い切り ¥150 で永久にご利用いただけます。',
      
      deskMacTitle: 'macOS Native App',
      deskMacSub: 'Apple Silicon / Intel 最適化',
      deskMacPkgLabel: 'パッケージ形式',
      deskMacPkgVal: '.dmg / .app (Tauri v2)',
      deskMacSizeLabel: 'ファイルサイズ',
      deskMacSizeVal: '軽量約 10MB',
      deskMacOsLabel: 'OS要件',
      deskMacOsVal: 'macOS 10.15 以上',
      deskMacPriceLabel: '価格',
      deskMacPriceVal: '買い切り ¥150 (税込)',
      deskMacBtn: 'macOS版を購入 (¥150)',
      
      deskWinTitle: 'Windows Native App',
      deskWinSub: '64-bit Windows 最適化',
      deskWinPkgLabel: 'パッケージ形式',
      deskWinPkgVal: '.exe / .msi (Tauri v2)',
      deskWinSizeLabel: 'ファイルサイズ',
      deskWinSizeVal: '軽量約 9MB',
      deskWinOsLabel: 'OS要件',
      deskWinOsVal: 'Windows 10 / 11 (64-bit)',
      deskWinPriceLabel: '価格',
      deskWinPriceVal: '買い切り ¥150 (税込)',
      deskWinBtn: 'Windows版を購入 (¥150)',
      
      // CTA Banner
      ctaTitle: '宇宙ステーションの車窓から、地球を見つめよう。',
      ctaDesc: '買い切り ¥150 で永久利用可能。macOS & Windows 対応のネイティブデスクトップアプリです。',
      ctaBuyBtn: 'デスクトップ版を購入する (¥150)',
      
      // Footer
      footerStoreLink: 'デスクトップ版販売ページ',
      footerManualJa: '取扱説明書 (JA)',
      footerManualEn: 'Manual (EN)',
      footerShopLink: 'Cyber Matrix Store',
      footerCopy: '© 2026 NASA ISS Earth Realtime Viewer / Cyber Matrix. Powered by CesiumJS & SGP4 Orbital Mechanics.'
    },
    en: {
      pageTitle: 'NASA ISS Earth Realtime Viewer | Real-time ISS Orbital Simulation',
      pageDesc: 'Photorealistic real-time 3D simulation of Earth from the ISS using CesiumJS. Experience Cupola cockpit view, 2D radar ground track, time travel, and instant scenic jumps in a native desktop app.',
      
      // Navbar
      navFeatures: 'Features',
      navViews: 'Camera Views',
      navRadar: '2D Radar Map',
      navDesktop: 'Desktop App',
      btnBuyNav: 'Buy Desktop App ($1.00 / ¥150)',
      
      // Hero
      heroTag: 'REALTIME ORBITAL OBSERVATION',
      heroTitle: 'Behold the Earth in Real-Time <br><span class="gradient-text">from the International Space Station.</span>',
      heroDesc: 'Experience photorealistic 3D simulation of Earth from the ISS orbiting at 420 km altitude at 7.65 km/s. Featuring Cupola cockpit view, 2D orbital ground track, time travel, and instant scenic jumps.',
      btnBuyHero: 'Buy Desktop App ($1.00 / ¥150)',
      btnSpecsHero: 'System Requirements & Specs',
      
      // Key Features Section
      featSectionTag: 'KEY FEATURES',
      featSectionTitle: 'Where Authentic Orbital Mechanics<br><span class="gradient-text">Meets Stunning 3D Graphics</span>',
      featSectionDesc: 'Combining NASA & NORAD open telemetry with orbital physics models to deliver the exact panoramic view seen by astronauts.',
      
      feat1Title: 'Real-Time SGP4 Orbit Propagation',
      feat1Desc: 'Fetches real-time TLE (Two-Line Elements) from CelesTrak, calculating the ISS position and attitude with millisecond precision at 7.65 km/s.',
      
      feat2Title: 'Precision Solar & Day/Night Lighting',
      feat2Desc: 'Accurately calculates subsolar points and eclipse shadows. Recreates daytime atmospheric glow and night-side NASA VIIRS city lights.',
      
      feat3Title: 'High-Resolution 2D Radar Ground Track',
      feat3Desc: 'Rendered with Natural Earth 50m vector coastlines and borders. Real-time visual footprint horizon and past/future orbital path lines.',
      
      feat4Title: 'Fast-Forward & Rewind Time Control',
      feat4Desc: 'Experience the 92.8-minute orbital revolution in minutes with ×3, ×5, ×10 fast-forward and rewind. Sync to live clock instantly with the LIVE button.',
      
      feat5Title: 'Quick Jump to Orbital Highlights',
      feat5Desc: 'Automatically computes and warps to the next orbital sunrise, sunset, or closest passes over Japan, North America, Europe, and the Amazon.',
      
      feat6Title: 'Fully Bilingual (English / Japanese)',
      feat6Desc: 'Switch telemetry and UI language instantly with a single click, providing a seamless experience for space enthusiasts worldwide.',
      
      // Camera Views Section
      camSectionTag: 'CAMERA ANGLES',
      camSectionTitle: 'From Astronaut Perspective to Global Vista.<br><span class="gradient-text">5 Dynamic Camera Angles</span>',
      camSectionDesc: 'Enjoy rich perspectives of Earth through the Cupola observation module, tracking chase cameras, nadir sensors, and more.',
      
      camCockpitTitle: 'Cupola Cockpit View',
      camCockpitDesc: "Astronaut's forward flight path and horizon vista",
      
      camChaseTitle: 'Station Chase Cam',
      camChaseDesc: 'Massive solar arrays gliding over Earth oceans',
      
      camOverheadTitle: 'Global Overview',
      camOverheadDesc: 'Magnificent orbital vista from 3,000 km altitude',
      
      camNadirTitle: 'Earth Nadir Camera',
      camNadirDesc: 'High-resolution observation of terrain, reefs & cities',
      
      camNightTitle: 'Night & City Lights Mode',
      camNightDesc: 'Glittering constellations of metropolitan city lights',
      
      // 2D Radar Section
      radarSectionTag: '2D RADAR TRACKER',
      radarSectionTitle: 'Mission Control Quality<br><span class="gradient-text-gold">High-Precision 2D Radar Map</span>',
      radarSectionDesc: 'Real-time rendering of ISS ground track and day/night terminator lines atop high-resolution Natural Earth 50m vector coastlines.',
      radarItem1: '<strong>45-min History & 95-min Prediction Track</strong>: Cyan and gold dashed lines visualize full orbital revolutions at a glance.',
      radarItem2: '<strong>Ground Footprint Visibility Circle</strong>: ~2,200 km radius radar circle showing line-of-sight coverage from the station.',
      radarItem3: '<strong>Day/Night Terminator Line</strong>: Dynamically computed subsolar shadow dividing sunlight and eclipse across the globe.',
      radarItem4: '<strong>Major Space Center Markers</strong>: Tokyo/JAXA, Kennedy Space Center (KSC), Houston (JSC), and Baikonur Cosmodrome.',
      
      // Desktop Section
      deskSectionTag: 'DESKTOP EDITION',
      deskSectionTitle: 'Runs Fully Offline<br><span class="gradient-text">macOS & Windows Native Apps</span>',
      deskSectionDesc: 'Ultra-lightweight & blazing fast built on Tauri v2. One-time purchase ($1.00 / ¥150) for lifetime access.',
      
      deskMacTitle: 'macOS Native App',
      deskMacSub: 'Optimized for Apple Silicon & Intel',
      deskMacPkgLabel: 'Package Format',
      deskMacPkgVal: '.dmg / .app (Tauri v2)',
      deskMacSizeLabel: 'File Size',
      deskMacSizeVal: 'Ultra-light ~10MB',
      deskMacOsLabel: 'OS Requirement',
      deskMacOsVal: 'macOS 10.15 or later',
      deskMacPriceLabel: 'Price',
      deskMacPriceVal: '$1.00 / ¥150 (One-time)',
      deskMacBtn: 'Buy for macOS ($1.00 / ¥150)',
      
      deskWinTitle: 'Windows Native App',
      deskWinSub: 'Optimized for 64-bit Windows',
      deskWinPkgLabel: 'Package Format',
      deskWinPkgVal: '.exe / .msi (Tauri v2)',
      deskWinSizeLabel: 'File Size',
      deskWinSizeVal: 'Ultra-light ~9MB',
      deskWinOsLabel: 'OS Requirement',
      deskWinOsVal: 'Windows 10 / 11 (64-bit)',
      deskWinPriceLabel: 'Price',
      deskWinPriceVal: '$1.00 / ¥150 (One-time)',
      deskWinBtn: 'Buy for Windows ($1.00 / ¥150)',
      
      // CTA Banner
      ctaTitle: 'Gaze upon the Earth from the station window.',
      ctaDesc: 'One-time purchase for lifetime access. Native standalone desktop app for macOS & Windows.',
      ctaBuyBtn: 'Buy Desktop App ($1.00 / ¥150)',
      
      // Footer
      footerStoreLink: 'Desktop App Store',
      footerManualJa: 'User Manual (JA)',
      footerManualEn: 'User Manual (EN)',
      footerShopLink: 'Cyber Matrix Store',
      footerCopy: '© 2026 NASA ISS Earth Realtime Viewer / Cyber Matrix. Powered by CesiumJS & SGP4 Orbital Mechanics.'
    }
  };

  // 6. Language Switcher Logic
  const btnLangToggle = document.getElementById('btn-lp-lang');
  
  // Detect language from URL param ?lang=en, localStorage, or browser language
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  const storedLang = localStorage.getItem('lp_lang');
  
  let currentLang = 'ja';
  if (paramLang && (paramLang === 'en' || paramLang === 'ja')) {
    currentLang = paramLang;
  } else if (storedLang && (storedLang === 'en' || storedLang === 'ja')) {
    currentLang = storedLang;
  }

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lp_lang', lang);
    document.documentElement.lang = lang;

    // Update toggle button text
    if (btnLangToggle) {
      btnLangToggle.textContent = lang === 'ja' ? 'EN / 日本語' : 'JA / English';
    }

    const t = LP_TEXTS[lang];
    if (!t) return;

    // Update page title and description
    if (t.pageTitle) {
      document.title = t.pageTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.pageDesc) {
      metaDesc.setAttribute('content', t.pageDesc);
    }

    // Update all elements with data-lp-i18n
    document.querySelectorAll('[data-lp-i18n]').forEach(el => {
      const key = el.dataset.lpI18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Refresh lucide icons in case any were re-rendered
    refreshIcons();
    updateCameraBadge();
  };

  if (btnLangToggle) {
    btnLangToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'ja' ? 'en' : 'ja';
      setLanguage(nextLang);
    });
  }

  // Initial apply
  setLanguage(currentLang);
});
