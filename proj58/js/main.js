/**
 * Cyber Matrix - Shibuya Scramble Crossing 3D Desktop Landing Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLanguage();
  initHeroShowcase();
  initSignalSimulation();
  initViewpointExplorer();
  initBuildingInspector();
  initFaqAccordion();
});

/* ==========================================================================
   1. Navbar Scroll Effect
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   2. Bilingual Translation (JP / EN)
   ========================================================================== */
const I18N = {
  ja: {
    navFeatures: "特徴",
    navViews: "7方位ビュー",
    navTech: "シミュレーション技術",
    navGuide: "導入・操作",
    navSpecs: "システム要件",
    navPricing: "価格",
    buyCta: "macOS版を購入する (¥150)",
    backToStore: "ストアトップに戻る",
    heroBadge: "3D DIGITAL TWIN • PLATEAU 実測都市シミュレーター",
    heroTitlePrefix: "Shibuya Scramble Crossing 3D",
    heroTitleSub: "Simulator Desktop",
    heroDesc: "世界で最も有名な交差点「渋谷スクランブル交差点」とその周辺（半径650m）を3Dで忠実再現。国土交通省PLATEAU実測データによる精密建築群、実際の信号サイクルに完全同期した歩行者・車両トラフィック、JR山手線高架鉄道運行、交差点中心（目の高さ1.6m）の7方位ビュー、昼夜切替を完全ローカルで体験できる至高のデスクトップシミュレーター。",
    heroBuyBtn: "macOS版を購入する (¥150 Stripe決済)",
    heroExploreBtn: "機能・スクリーンショットを見る",
    heroMeta1: "Apple Silicon & Intel 両対応",
    heroMeta2: "完全オフライン動作",
    heroMeta3: "買い切り / 永続ライセンス",
    tabOrbit: "俯瞰 3D Orbit",
    tabNight: "シネマティック夜景",
    tabStreet: "交差点 1.6m 目線",
    
    // Live Signal Simulator
    signalSectionBadge: "REAL-TIME TRAFFIC ENGINE",
    signalSectionTitle: "実信号サイクル同期シミュレーション",
    signalPhase1: "歩行者 青信号 (一斉斜め横断)",
    signalPhase2: "歩行者 点滅 (横断完了フェーズ)",
    signalPhase3: "全赤 (全方向停止 / 安全クリア)",
    signalPhase4: "車道 道玄坂 ⇔ 旧大山街道 (東西青)",
    signalPhase5: "全赤 (全方向停止 / 安全クリア)",
    signalPhase6: "車道 公園通り ⇔ 神宮通り (南北青)",
    signalDescPed: "最大1,200人規模の歩行者が一斉に斜め横断を開始。リアルタイムな人数カウントと衝突回避AIが稼働。",
    signalDescVehicles: "乗用車・タクシー・路線バス・広告アドトラックが左側通行・実道路幅に沿ってスムーズに走行。",
    signalDescRed: "交差点内の安全確保のため全方向赤信号へ移行。JR山手線電車の高架発着が継続。",
    pedCountLabel: "交差点内 横断歩行者数",

    // Viewpoints
    viewSectionBadge: "GROUND LEVEL 1.6M PANORAMA",
    viewSectionTitle: "交差点中心・目の高さ1.6m 7方位ビュー",
    viewSectionSub: "交差点の真ん中に立った歩行者目線（高さ1.6m）から、渋谷の象徴的ランドマーク群へワンタッチで視点を切り替え。自由なオービット回転や見上げ・見下ろしにも完全対応。",
    
    // Features
    featBadge: "ULTRA REALISTIC TWIN FEATURES",
    featTitle: "なぜデスクトップ版（DL版）なのか？",
    featSub: "ブラウザ版では到達できない圧倒的な描写力・レスポンス・完全ローカルセキュリティを実現。",
    
    f1Title: "国土交通省 PLATEAU 実測 3D 都市モデル (LOD2)",
    f1Desc: "渋谷区最新のPLATEAU実測データに基づき、半径650mの建築群を実寸の高さと屋根・庇・看板形状（LOD2）で緻密に描画。国土地理院のシームレス航空写真メッシュと完全同期。",
    
    f2Title: "実信号サイクル同期 ＆ 車両・鉄道の複合トラフィック",
    f2Desc: "歩行者青（32秒）→点滅（6秒）→東西車道（22秒）→南北車道（21秒）の精密サイクル。JR山手線・埼京線が25秒間駅に停車し、5種類のアドトラックや路線バスが走ります。",
    
    f3Title: "瞬時 HUD 建物情報アナライザー",
    f3Desc: "3D空間内の建物をクリックすると、名称・実測高さ・交差点中心からの距離と方位角・PLATEAU用途区分を瞬時にHUDパネルへオーバーレイ表示。",
    
    f4Title: "シネマティック夜景 ＆ 4倍速・一時停止・車経路可視化",
    f4Desc: "ビル窓明かりや大型ビジョンが輝く夜景モード、時間の4倍速送り、一時停止中の自由カメラ操作、路面上の車両走行軌道・停止線の可視化ラインを搭載。",
    
    f5Title: "完全オフライン・ゼロ遅延・プライバシー保護",
    f5Desc: "外部通信を一切行わないため、セキュリティが厳しい環境やオフラインでもフル機能で動作。Universal BinaryによりM1/M2/M3/M4およびIntel Macで60FPS動作。",
    
    // Architecture
    archBadge: "DATA ENGINE & PIPELINE",
    archTitle: "精密データを支える4大基盤",
    archSub: "公的実測データと最適化エンジンが融合した次世代デジタルツイン設計。",
    
    // Guide
    guideBadge: "QUICK START & CONTROLS",
    guideTitle: "簡単導入 ＆ マウス・トラックパッド操作",
    guideStep1Title: "1. DMGを開いてアプリへドラッグ",
    guideStep1Desc: "ダウンロードした .dmg ファイルを開き、Shibuya Crossing 3D のアイコンを「アプリケーション」フォルダへドラッグ＆ドロップします。",
    guideStep2Title: "2. 初回起動（Gatekeeper解除）",
    guideStep2Desc: "初回起動時は、Finderでアプリを右クリック（control+クリック）→「開く」を選ぶか、システム設定の「プライバシーとセキュリティ」から「このまま開く」をクリックします。",
    guideStep3Title: "3. 直感的な3Dカメラ操作",
    guideStep3Desc: "左ドラッグで回転、右ドラッグ（または2本指ドラッグ）で移動、ホイール（ピンチ）で拡大縮小。交差点目線では見回し操作が可能。",
    
    gatekeeperTitle: "初回起動時のセキュリティについて",
    gatekeeperDesc: "本アプリは公証サーバーへの通信を不要とする完全オフライン設計のため、macOSの「開発元を検証できません」画面が出ることがあります。上記「2. 初回起動」の手順で安全に起動できます（2回目以降は通常通りダブルクリックで起動します）。",

    // Pricing
    pricingBadge: "ONE-TIME PURCHASE",
    pricingTitle: "Shibuya Scramble Crossing 3D",
    pricingSub: "一度の購入で永久利用可能・追加課金なしの完全買い切り型デスクトップアプリ",
    priceAmount: "150",
    priceUnit: "(税込)",
    pricingCta: "macOS版を購入する (Stripe決済)",
    
    pFeat1: "macOS Universal Binary (Apple Silicon / Intel 両対応)",
    pFeat2: "国土交通省 PLATEAU 実測 LOD2 建築データ内蔵",
    pFeat3: "国土地理院 航空写真メッシュ ＆ JR山手線運行エンジン",
    pFeat4: "交差点中心 1.6m 目線 7方位ビュー ＆ シネマティック夜景",
    pFeat5: "完全オフライン動作・追加サブスクリプション課金ゼロ",
    pFeat6: "Stripe暗号化決済 ＆ 即時DMGダウンロード",
    
    // FAQ
    faqTitle: "よくあるご質問 (FAQ)",
    faq1Q: "Q. どのMacで動作しますか？",
    faq1A: "macOS 11 Big Sur 以降に対応しています。Apple Silicon (M1 / M2 / M3 / M4) および Intelプロセッサの両方に最適化された Universal Binary です。",
    faq2Q: "Q. インターネット接続は必要ですか？",
    faq2A: "いいえ、購入後の動作にインターネット接続は一切不要です。オフライン環境でもすべての3Dモデル、トラフィック、視点切替がフルスピードで動作します。",
    faq3Q: "Q. 将来的な追加料金やサブスクリプションはありますか？",
    faq3A: "一切ありません。150円の完全買い切りで、永久にご利用いただけます。",
    faq4Q: "Q. 教育目的や商用プレゼンテーションで利用できますか？",
    faq4A: "はい。都市計画の研究、プレゼンテーション、教育資料、映像背景などにご活用いただけます（出典：国土地理院 / 国土交通省 PLATEAU / OpenStreetMap）。"
  },

  en: {
    navFeatures: "Features",
    navViews: "7 Viewpoints",
    navTech: "Tech Engine",
    navGuide: "Quick Start",
    navSpecs: "System Specs",
    navPricing: "Pricing",
    buyCta: "Buy macOS App ($1.00 / ¥150)",
    backToStore: "Back to Store Top",
    heroBadge: "3D DIGITAL TWIN • PLATEAU MEASURED URBAN SIMULATOR",
    heroTitlePrefix: "Shibuya Scramble Crossing 3D",
    heroTitleSub: "Simulator Desktop",
    heroDesc: "A faithful 3D reproduction of the world's most famous intersection, Shibuya Scramble Crossing, and its surroundings (650m radius). Powered by MLIT PLATEAU surveyed 3D data, synchronized real-world traffic signals, pedestrian crowd dynamics, JR Yamanote Line viaduct rail, eye-level (1.6m) 7-viewpoint tour, and cinematic day/night modes in a 100% native offline desktop app.",
    heroBuyBtn: "Purchase macOS Edition (Stripe ¥150)",
    heroExploreBtn: "Explore Features & Screenshots",
    heroMeta1: "Apple Silicon & Intel Universal",
    heroMeta2: "100% Offline Capable",
    heroMeta3: "Lifetime Single Purchase",
    tabOrbit: "3D Orbit Aerial",
    tabNight: "Cinematic Night",
    tabStreet: "1.6m Street Level",
    
    // Live Signal Simulator
    signalSectionBadge: "REAL-TIME TRAFFIC ENGINE",
    signalSectionTitle: "Real-Time Signal Cycle Simulation",
    signalPhase1: "Pedestrian Walk (All Crosswalks)",
    signalPhase2: "Pedestrian Flashing (Clear Phase)",
    signalPhase3: "All-Red (Clear Intersection)",
    signalPhase4: "Dogenzaka ⇔ Kyu-Oyama Road (East-West)",
    signalPhase5: "All-Red (Clear Intersection)",
    signalPhase6: "Koen-dori ⇔ Jingu-dori (North-South)",
    signalDescPed: "Up to 1,200 pedestrians cross simultaneously in all directions. Real-time collision avoidance AI and active counter enabled.",
    signalDescVehicles: "Cars, taxis, route buses, and moving ad trucks navigate realistic lanes following left-hand traffic rules.",
    signalDescRed: "All vehicle and pedestrian phases red for safe cross-traffic clearance. JR Yamanote trains operate continuously.",
    pedCountLabel: "Active Pedestrians in Intersection",

    // Viewpoints
    viewSectionBadge: "GROUND LEVEL 1.6M PANORAMA",
    viewSectionTitle: "Center of Shibuya: 1.6m Eye-Level 7 Viewpoints",
    viewSectionSub: "Stand right in the middle of Shibuya Scramble Crossing at eye height (1.6m). Switch instantly between the 7 primary landmark orientations or freely rotate in full 3D.",
    
    // Features
    featBadge: "ULTRA REALISTIC TWIN FEATURES",
    featTitle: "Why the Native Desktop Edition?",
    featSub: "Unmatched 60 FPS performance, zero-latency rendering, and complete offline privacy impossible in web browsers.",
    
    f1Title: "MLIT PLATEAU Measured 3D Urban Model (LOD2)",
    f1Desc: "Based on Japan's official PLATEAU 2025 CityGML data. Real-world heights, roof geometries, and signage for every building within a 650m radius, mapped onto GSI seamless aerial mesh.",
    
    f2Title: "Synced Traffic Signals & Multi-Modal Transit AI",
    f2Desc: "32s Walk → 6s Flash → 22s East-West Vehicles → 21s North-South Vehicles. JR Yamanote and Saikyo Line trains halt for 25s at Shibuya Station, joined by 5 types of dynamic ad trucks.",
    
    f3Title: "Instant Building HUD Inspector",
    f3Desc: "Click any building in the 3D scene to instantly inspect its name, measured height, azimuth angle, distance from intersection center, and PLATEAU usage category.",
    
    f4Title: "Cinematic Night Mode, 4x Speed & Route Overlay",
    f4Desc: "Neon-lit night mode with glowing jumbo screens and office windows. Features 4x time acceleration, freeze-frame with free camera control, and ground vehicle trajectory vectors.",
    
    f5Title: "100% Offline, Zero Latency & Universal Binary",
    f5Desc: "No network requests made during execution. Runs smoothly at 60 FPS on both Apple Silicon (M1/M2/M3/M4) and Intel Macs with zero subscription fees.",
    
    // Architecture
    archBadge: "DATA ENGINE & PIPELINE",
    archTitle: "Built on 4 Solid Data Foundations",
    archSub: "Merging authoritative survey data with a high-performance WebGL/Metal rendering pipeline.",
    
    // Guide
    guideBadge: "QUICK START & CONTROLS",
    guideTitle: "Easy Installation & Controls Guide",
    guideStep1Title: "1. Open DMG & Drag to Applications",
    guideStep1Desc: "Open the downloaded .dmg file and drag the Shibuya Crossing 3D icon into your macOS Applications folder.",
    guideStep2Title: "2. First Launch (Gatekeeper)",
    guideStep2Desc: "On first launch, right-click (control+click) Shibuya Crossing 3D → select 'Open', or allow it under macOS System Settings > Privacy & Security.",
    guideStep3Title: "3. Intuitive Camera Controls",
    guideStep3Desc: "Left-drag to rotate, right-drag (or two-finger drag) to pan, scroll wheel or pinch to zoom. Smoothly look around in eye-level mode.",
    
    gatekeeperTitle: "Regarding macOS First-Launch Security",
    gatekeeperDesc: "Because this app is designed for 100% offline security without calling remote notarization verification servers, macOS may display an unidentified developer prompt. Follow step 2 above for safe execution.",

    // Pricing
    pricingBadge: "ONE-TIME PURCHASE",
    pricingTitle: "Shibuya Scramble Crossing 3D",
    pricingSub: "Permanent single-purchase license. No subscriptions or recurring fees.",
    priceAmount: "150",
    priceUnit: "(tax incl.)",
    pricingCta: "Buy macOS App (Stripe ¥150)",
    
    pFeat1: "macOS Universal Binary (Apple Silicon & Intel)",
    pFeat2: "MLIT PLATEAU Surveyed LOD2 3D Buildings Built-in",
    pFeat3: "GSI Orthophoto Mesh & JR Yamanote Rail Engine",
    pFeat4: "1.6m Center Eye-Level 7 Viewpoints & Night Mode",
    pFeat5: "100% Offline Native Execution, Zero Subscriptions",
    pFeat6: "Encrypted Stripe Checkout & Instant DMG Download",
    
    // FAQ
    faqTitle: "Frequently Asked Questions (FAQ)",
    faq1Q: "Q. Which Mac models are supported?",
    faq1A: "Requires macOS 11 Big Sur or newer. It is packaged as a Universal Binary optimized for both Apple Silicon (M1/M2/M3/M4) and Intel processors.",
    faq2Q: "Q. Is an internet connection required?",
    faq2A: "No. After downloading the app, all 3D geometry, textures, simulation logic, and viewpoint cameras run completely offline.",
    faq3Q: "Q. Are there any in-app purchases or recurring subscriptions?",
    faq3A: "None. It is a one-time purchase of ¥150 for lifetime access.",
    faq4Q: "Q. Can I use this for presentations, educational, or commercial work?",
    faq4A: "Yes. You can freely use screenshots, video recordings, and demonstrations for research, urban planning presentations, or educational content."
  }
};

let currentLang = 'ja';

function initLanguage() {
  const jpBtns = document.querySelectorAll('.lang-btn-jp');
  const enBtns = document.querySelectorAll('.lang-btn-en');

  function setLanguage(lang) {
    currentLang = lang;
    const dict = I18N[lang];
    if (!dict) return;

    // Toggle button active classes
    jpBtns.forEach(b => b.classList.toggle('active', lang === 'ja'));
    enBtns.forEach(b => b.classList.toggle('active', lang === 'en'));

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Update document lang
    document.documentElement.lang = lang;
  }

  jpBtns.forEach(b => b.addEventListener('click', () => setLanguage('ja')));
  enBtns.forEach(b => b.addEventListener('click', () => setLanguage('en')));
}

/* ==========================================================================
   3. Hero Showcase Image Switcher
   ========================================================================== */
function initHeroShowcase() {
  const tabs = document.querySelectorAll('.showcase-tab-btn');
  const showcaseImg = document.getElementById('heroShowcaseImg');
  const hudStatus = document.getElementById('hudShowcaseStatus');

  const modes = {
    orbit: {
      img: 'images/shibuya_hero_sim.png',
      status: '<i class="fa-solid fa-cube text-cyan-400"></i> 俯瞰 3D オービット (昼景)',
      statusEn: '<i class="fa-solid fa-cube text-cyan-400"></i> 3D Orbit View (Daylight)'
    },
    night: {
      img: 'images/shibuya_night_mode.png',
      status: '<i class="fa-solid fa-moon text-purple-400"></i> シネマティック夜景モード',
      statusEn: '<i class="fa-solid fa-moon text-purple-400"></i> Cinematic Night Mode'
    },
    street: {
      img: 'images/shibuya_street_view.png',
      status: '<i class="fa-solid fa-street-view text-pink-400"></i> 交差点中心 1.6m 目線',
      statusEn: '<i class="fa-solid fa-street-view text-pink-400"></i> Center Eye-Level 1.6m'
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const mode = tab.getAttribute('data-mode');
      if (!modes[mode]) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      showcaseImg.style.opacity = '0.3';
      setTimeout(() => {
        showcaseImg.src = modes[mode].img;
        showcaseImg.style.opacity = '1';
        if (hudStatus) {
          hudStatus.innerHTML = currentLang === 'en' ? modes[mode].statusEn : modes[mode].status;
        }
      }, 150);
    });
  });
}

/* ==========================================================================
   4. Live Traffic Signal Cycle Simulation Widget
   ========================================================================== */
function initSignalSimulation() {
  const lightEl = document.getElementById('simTrafficLight');
  const countdownEl = document.getElementById('simCountdown');
  const phaseTitleEl = document.getElementById('simPhaseTitle');
  const phaseDescEl = document.getElementById('simPhaseDesc');
  const pedCountEl = document.getElementById('simPedCount');
  const stepBars = document.querySelectorAll('.phase-step');

  const PHASES = [
    {
      id: 'ped_green',
      duration: 32,
      lightState: 'state-green',
      lightIcon: '<i class="fa-solid fa-person-walking"></i>',
      titleJa: '歩行者 青信号 (一斉斜め横断)',
      titleEn: 'Pedestrian Walk (Diagonal Crossing Active)',
      descJa: '4本の横断歩道および対角斜め横断が一斉に解禁。最大1,200名の歩行者AIが交差点を行き交います。',
      descEn: 'All 4 crosswalks and diagonal flows active. Up to 1,200 dynamic pedestrians crossing simultaneously.',
      pedBase: 1040,
      pedVariance: 180
    },
    {
      id: 'ped_flash',
      duration: 6,
      lightState: 'state-yellow',
      lightIcon: '<i class="fa-solid fa-person-walking-dashed-line-arrow-right"></i>',
      titleJa: '歩行者 点滅 (横断完了フェーズ)',
      titleEn: 'Pedestrian Flashing (Clearing Crosswalks)',
      descJa: '歩行者信号が点滅。新規進入を停止し、交差点内の歩行者が安全に渡り終えます。',
      descEn: 'Signal flashing. New pedestrians halt at curbs while pedestrians on crosswalks reach sidewalks.',
      pedBase: 420,
      pedVariance: 80
    },
    {
      id: 'all_red_1',
      duration: 4,
      lightState: 'state-red',
      lightIcon: '<i class="fa-solid fa-hand"></i>',
      titleJa: '全赤 (全方向停止 / 安全クリア)',
      titleEn: 'All-Red Clearance Phase',
      descJa: '歩行者・車両すべての信号が赤。交差点内のクリアランスを確保します。',
      descEn: 'All vehicular and pedestrian signals red for absolute clearance safety.',
      pedBase: 0,
      pedVariance: 10
    },
    {
      id: 'veh_dogenzaka',
      duration: 22,
      lightState: 'state-green',
      lightIcon: '<i class="fa-solid fa-car"></i>',
      titleJa: '車道 道玄坂 ⇔ 旧大山街道 (東西青)',
      titleEn: 'Vehicles: Dogenzaka ⇔ Kyu-Oyama (East-West)',
      descJa: '東西方向の車道青信号。道玄坂・文化村通りからの車列、アドトラック、路線バスが直進・左折。',
      descEn: 'East-West vehicle flow green. Buses, taxis, and illuminated ad trucks advance smoothly.',
      pedBase: 0,
      pedVariance: 0
    },
    {
      id: 'all_red_2',
      duration: 4,
      lightState: 'state-red',
      lightIcon: '<i class="fa-solid fa-hand"></i>',
      titleJa: '全赤 (全方向停止 / 安全クリア)',
      titleEn: 'All-Red Clearance Phase',
      descJa: '南北車道への切替前クリアランス。JR山手線高架の電車が発着中。',
      descEn: 'Clearance before North-South switch. JR Yamanote Line trains transit overhead.',
      pedBase: 0,
      pedVariance: 0
    },
    {
      id: 'veh_koendori',
      duration: 21,
      lightState: 'state-green',
      lightIcon: '<i class="fa-solid fa-truck"></i>',
      titleJa: '車道 公園通り ⇔ 神宮通り (南北青)',
      titleEn: 'Vehicles: Koen-dori ⇔ Jingu-dori (North-South)',
      descJa: '南北方向の車道青信号。神宮通り（ハチ公前）南行き・北行きの車両群が走行。',
      descEn: 'North-South traffic green. Vehicles flow past Hachiko Square along Jingu-dori.',
      pedBase: 0,
      pedVariance: 0
    }
  ];

  let currentPhaseIndex = 0;
  let remainingSeconds = PHASES[0].duration;

  function updatePhaseDisplay() {
    const phase = PHASES[currentPhaseIndex];
    if (!phase) return;

    if (lightEl) {
      lightEl.className = `traffic-light-pill ${phase.lightState}`;
      lightEl.innerHTML = phase.lightIcon;
    }
    if (countdownEl) {
      countdownEl.textContent = String(remainingSeconds).padStart(2, '0');
    }
    if (phaseTitleEl) {
      phaseTitleEl.textContent = currentLang === 'en' ? phase.titleEn : phase.titleJa;
    }
    if (phaseDescEl) {
      phaseDescEl.textContent = currentLang === 'en' ? phase.descEn : phase.descJa;
    }
    if (pedCountEl) {
      const peds = phase.pedBase > 0 ? phase.pedBase + Math.floor(Math.sin(remainingSeconds) * phase.pedVariance) : 0;
      pedCountEl.textContent = peds.toLocaleString();
    }

    stepBars.forEach((bar, idx) => {
      bar.classList.toggle('active', idx === currentPhaseIndex);
    });
  }

  setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds <= 0) {
      currentPhaseIndex = (currentPhaseIndex + 1) % PHASES.length;
      remainingSeconds = PHASES[currentPhaseIndex].duration;
    }
    updatePhaseDisplay();
  }, 1000);

  updatePhaseDisplay();
}

/* ==========================================================================
   5. Interactive 7-Viewpoint Explorer
   ========================================================================== */
function initViewpointExplorer() {
  const VIEWPOINTS = [
    {
      id: 'qfront',
      nameJa: 'Q FRONT (TSUTAYA / 大型ビジョン)',
      nameEn: 'Q FRONT (TSUTAYA & Giant LED Screen)',
      deg: '346° (北北西 / NNW)',
      img: 'images/shibuya_street_view.png',
      distance: '48m',
      height: '133.0m',
      usageJa: '商業・大型スクリーン',
      usageEn: 'Commercial / Mega Display',
      descJa: '交差点の北側にそびえる渋谷の象徴。巨大LEDスクリーン「Q\'S EYE」と曲線ガラスファサードをLOD2形状で完全再現。',
      descEn: 'The iconic northern anchor of Shibuya crossing featuring the massive Q\'S EYE digital billboard and curved glass facade.'
    },
    {
      id: 'seibu',
      nameJa: '西武渋谷店 / 井の頭通り',
      nameEn: 'Seibu Shibuya / Inokashira-dori',
      deg: '12° (北北東 / NNE)',
      img: 'images/shibuya_hud_analysis.png',
      distance: '85m',
      height: '38.4m',
      usageJa: '百貨店・商業施設',
      usageEn: 'Department Store / Retail',
      descJa: '井の頭通りの入口と西武百貨店A館。歩行者天国へと続く賑やかな街並みの奥行きを再現。',
      descEn: 'Looking toward the entrance of Inokashira-dori and Seibu A-Building leading into bustling shopping districts.'
    },
    {
      id: 'jr_viaduct',
      nameJa: 'JR高架鉄道・宮益坂下',
      nameEn: 'JR Viaduct & Miyamasuzaka',
      deg: '84° (東 / East)',
      img: 'images/shibuya_train_rail.png',
      distance: '62m',
      height: '6.6m (高架路面)',
      usageJa: '山手線・埼京線 鉄道高架',
      usageEn: 'JR Yamanote & Saikyo Rail Viaduct',
      descJa: '交差点の東側に位置する重厚なJR高架橋。「JR 渋谷駅」の巨大サイン看板と、定期的に通過・停車する山手線電車をシミュレート。',
      descEn: 'The prominent JR railway viaduct framing the eastern sky, featuring authentic "JR Shibuya Station" bridge signage and train schedules.'
    },
    {
      id: 'scramble_sq',
      nameJa: '渋谷スクランブルスクエア',
      nameEn: 'Shibuya Scramble Square',
      deg: '132° (南東 / SE)',
      img: 'images/shibuya_scramble_square_view.png',
      distance: '110m',
      height: '229.7m (渋谷最高峰)',
      usageJa: '複合超高層ビル・展望台',
      usageEn: 'Skyscraper & Observation Deck',
      descJa: '渋谷エリア最高峰（地上47階・229.7m）の超高層ランドマーク。洗練されたガラスカーテンウォールが青空と夜景に映えます。',
      descEn: 'Shibuya\'s tallest skyscraper (229.7m / 47 floors) dominating the southeastern skyline with glass curtain wall architecture.'
    },
    {
      id: 'hachiko',
      nameJa: '忠犬ハチ公前広場 ＆ 銅像',
      nameEn: 'Hachiko Square & Bronze Statue',
      deg: '176° (南 / South)',
      img: 'images/shibuya_hachiko.png',
      distance: '35m',
      height: '1.6m (台座+秋田犬)',
      usageJa: '観光名所・待合広場',
      usageEn: 'Public Plaza & Monument',
      descJa: '世界中の人々が集うハチ公前広場。御影石の台座、岩の上に座る秋田犬ハチ公像、同心円の石畳とベンチ・植え込みを忠実に立体化。',
      descEn: 'The world-famous meeting point. Faithfully modeled granite pedestal, bronze Akita dog statue, circular cobblestone plaza and seating.'
    },
    {
      id: 'ekimae_bldg',
      nameJa: '渋谷駅前ビル ＆ MAGNET',
      nameEn: 'Shibuya Ekimae Bldg & MAGNET',
      deg: '232° (南西 / SW)',
      img: 'images/shibuya_traffic_paths.png',
      distance: '52m',
      height: '42.1m',
      usageJa: '商業ビル・大型広告ビジョン',
      usageEn: 'Commercial & Billboard Center',
      descJa: 'MAGNET by SHIBUYA109や渋谷駅前ビルなど、スクランブル交差点を囲む多彩な広告ビジョン群と飲食・商業の密集景観。',
      descEn: 'Southwestern commercial hubs including MAGNET by SHIBUYA109 with active digital billboards and dynamic facade reflections.'
    },
    {
      id: 'dogenzaka_109',
      nameJa: '道玄坂・SHIBUYA 109',
      nameEn: 'Dogenzaka & SHIBUYA 109',
      deg: '278° (西 / West)',
      img: 'images/shibuya_adtruck.png',
      distance: '95m',
      height: '50.2m (円筒タワー)',
      usageJa: 'ファッション旗艦ビル',
      usageEn: 'Fashion Landmark Tower',
      descJa: '道玄坂方面を望む西側ビュー。アイコニックなSHIBUYA 109の円筒形シリンダータワーと、文化村通りへと分岐する道路網を再現。',
      descEn: 'Looking west up Dogenzaka towards the iconic cylindrical tower of SHIBUYA 109 and the fork into Bunkamura-dori.'
    }
  ];

  const btns = document.querySelectorAll('.view-item-btn');
  const imgEl = document.getElementById('viewpointImg');
  const titleEl = document.getElementById('viewpointTitle');
  const degEl = document.getElementById('viewpointDeg');
  const distEl = document.getElementById('viewpointDist');
  const heightEl = document.getElementById('viewpointHeight');
  const usageEl = document.getElementById('viewpointUsage');
  const descEl = document.getElementById('viewpointDesc');

  function selectViewpoint(index) {
    const item = VIEWPOINTS[index];
    if (!item) return;

    btns.forEach((b, i) => b.classList.toggle('active', i === index));

    if (imgEl) {
      imgEl.style.opacity = '0.2';
      setTimeout(() => {
        imgEl.src = item.img;
        imgEl.style.opacity = '1';
      }, 150);
    }

    if (titleEl) titleEl.textContent = currentLang === 'en' ? item.nameEn : item.nameJa;
    if (degEl) degEl.textContent = item.deg;
    if (distEl) distEl.textContent = item.distance;
    if (heightEl) heightEl.textContent = item.height;
    if (usageEl) usageEl.textContent = currentLang === 'en' ? item.usageEn : item.usageJa;
    if (descEl) descEl.textContent = currentLang === 'en' ? item.descEn : item.descJa;
  }

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => selectViewpoint(index));
  });
}

/* ==========================================================================
   6. Building HUD Inspector Interactive Card
   ========================================================================== */
function initBuildingInspector() {
  const BUILDINGS = {
    qfront: {
      name: 'Q-FRONT',
      height: '133.0 m (地上8階 / 地下3階)',
      heightEn: '133.0 m (8F / 3B)',
      distance: '48.2 m',
      azimuth: '346° (北北西)',
      azimuthEn: '346° (NNW)',
      usage: '商業・TSUTAYA・大型スクリーン',
      usageEn: 'Commercial / Mega Screen',
      lod: 'PLATEAU LOD2 (実測屋根・庇)'
    },
    scramble: {
      name: '渋谷スクランブルスクエア',
      height: '229.7 m (地上47階 / 地下7階)',
      heightEn: '229.7 m (47F / 7B)',
      distance: '110.5 m',
      azimuth: '132° (南東)',
      azimuthEn: '132° (SE)',
      usage: 'オフィス・商業・展望台 (SHIBUYA SKY)',
      usageEn: 'Offices / Retail / Observatory',
      lod: 'PLATEAU LOD2 (高精度外形)'
    },
    magnet: {
      name: 'MAGNET by SHIBUYA109',
      height: '34.8 m (地上7階 / 地下2階)',
      heightEn: '34.8 m (7F / 2B)',
      distance: '52.1 m',
      azimuth: '232° (南西)',
      azimuthEn: '232° (SW)',
      usage: '商業・アパレル・展望デッキ',
      usageEn: 'Commercial / Fashion / Rooftop',
      lod: 'PLATEAU LOD2 (実測看板・ファサード)'
    },
    shibuya109: {
      name: 'SHIBUYA 109',
      height: '50.2 m (地上8階 / 地下2階)',
      heightEn: '50.2 m (8F / 2B)',
      distance: '95.4 m',
      azimuth: '278° (西)',
      azimuthEn: '278° (West)',
      usage: 'ファッション旗艦ビル',
      usageEn: 'Fashion Flagship Store',
      lod: 'PLATEAU LOD2 (円筒シリンダー形状)'
    }
  };

  const tabs = document.querySelectorAll('.inspector-tab-btn');
  const nameVal = document.getElementById('hudValName');
  const heightVal = document.getElementById('hudValHeight');
  const distVal = document.getElementById('hudValDist');
  const azVal = document.getElementById('hudValAzimuth');
  const usageVal = document.getElementById('hudValUsage');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const bldgId = tab.getAttribute('data-bldg');
      const bldg = BUILDINGS[bldgId];
      if (!bldg) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (nameVal) nameVal.textContent = bldg.name;
      if (heightVal) heightVal.textContent = currentLang === 'en' ? bldg.heightEn : bldg.height;
      if (distVal) distVal.textContent = bldg.distance;
      if (azVal) azVal.textContent = currentLang === 'en' ? bldg.azimuthEn : bldg.azimuth;
      if (usageVal) usageVal.textContent = currentLang === 'en' ? bldg.usageEn : bldg.usage;
    });
  });
}

/* ==========================================================================
   7. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}
