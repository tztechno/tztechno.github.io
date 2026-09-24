/**
 * Osaka Itami Airport Flight Departure Simulator - LP Interactive Logic
 * Features:
 *  - Cyber Matrix Flight Vector Canvas Background
 *  - Real-time 60FPS Primary Flight Display (PFD) Canvas Simulator
 *  - Web Audio Procedural Jet Turbine Sound Synthesizer
 *  - Interactive Flight Controls (Auto SID Replay / Manual Stick / Throttle / Flaps / Gear)
 *  - Full Japanese / English Bilingual i18n with LocalStorage Persistence
 *  - Accordion, Smooth Scroll, and Mobile Navigation
 */

// ============================================================================
// 1. i18n Translation Dictionary (Japanese / English)
// ============================================================================
const i18nData = {
  ja: {
    navDemo: "体験HUDシミュレーター",
    navFeatures: "特徴・強み",
    navRoute: "出発ルート(SID)",
    navAvionics: "計器・操作",
    navCompare: "製品比較",
    navPricing: "価格・DL",
    navFaq: "よくある質問",
    navGetNow: "今すぐ購入 ➔",
    langSwitchText: "English",

    heroBadge: "PRECISION FLIGHT SIMULATION SERIES | DESKTOP EDITION",
    heroTitle: `<span class="text-white font-orbitron">Osaka Itami Airport</span><br><span class="gradient-text neon-text">Flight Departure Simulator</span>`,
    heroLead: `大阪国際空港（伊丹 - RJOO）滑走路 32L からの離陸滑走、迫力の武庫川左旋回、そして神戸方面への上昇ルートを高精度に再現。<br class="desktop-br">国土地理院の実測DEM標高と航空写真、本格6自由度空力モデル、PFD/HUD計器、6視点カメラを搭載した完全ローカル・買い切りのネイティブ・フライトシミュレーター。`,
    heroTag1: "本格 6自由度(6-DOF) 空力演算",
    heroTag2: "国土地理院 10m DEM地形 ＆ 航空写真",
    heroTag3: "実機仕様 PFD / HUD コックピット計器",
    heroTag4: "Tauri 2.0 超軽量・高FPS・完全オフライン",
    heroCtaSub: "BUY DESKTOP EDITION / 買い切り ¥1,980",
    heroCtaMain: "公式ストアで購入・即時ダウンロード",
    heroCtaDemo: "ブラウザでHUDを即体験",
    platformTitle: "対応環境:",
    heroFloatingBadge: "RJOO RWY 32L TAKEOFF CORE",
    heroStatus: "AVIONICS & PHYSICS ACTIVE",

    statLatency: "超低遅延・Tauriネイティブ",
    statPhysics: "本格空力物理エンジン",
    statTerrain: "国土地理院 実測標高メッシュ",
    statCameras: "6視点カメラ切替システム",
    statPriceVal: "¥1,980",
    statPrice: "永久ライセンス・買い切り",

    demoBadge: "INTERACTIVE AVIONICS PLAYGROUND",
    demoTitle: `ブラウザ上で体感！ <span class="gradient-text">実機仕様 PFD ＆ 出発フライトシミュレーター</span>`,
    demoDesc: "スロットルを上げて滑走路32Lから離陸！自動SID飛行デモの再生や、矢印キー／マウスドラッグでの手動操縦、リアルなジェットエンジン音の試聴が可能です。",
    demoWpLabel: "ACTIVE PHASE",
    demoFlightModeLabel: "操縦モード選択 (Flight Mode):",
    demoModeAuto: "AUTO SID FLIGHT",
    demoModeManual: "MANUAL 6-DOF FLIGHT",
    demoModeAutoBtn: "自動SID離陸デモ",
    demoModeManualBtn: "手動操縦 (6自由度)",
    demoThrottleLabel: "スロットル推力 (Throttle / N1):",
    demoFlapsLabel: "フラップ (Flaps):",
    demoGearLabel: "降着装置 (Landing Gear):",
    demoCameraLabel: "カメラ視点プリセット (Camera Views):",
    demoBtnRestart: "Takeoff Replay / 離陸リセット",
    demoBtnPause: "一時停止",
    demoAudioBtn: "ENGINE SOUND: ON",
    demoStatusAuto: "自動SID離陸中: 滑走路32Lから離陸後、武庫川上空を左旋回して神戸方面へ上昇します。",
    demoStatusManual: "手動操縦中: [W/S]または[↑/↓]でピッチ、[A/D]または[←/→]でロール、画面ドラッグでも操縦可能！",

    featuresBadge: "CORE CAPABILITIES",
    featuresTitle: `伊丹の空を極限のリアルで再現する <span class="gradient-text">6大アドバンテージ</span>`,
    featuresDesc: "巨大なインストール容量や高額な月額課金は不要。国土地理院実測DEMと精密空力モデルをTauri 2.0で超軽量にPCローカル実行。",
    feat1Title: "国土地理院 10m DEM地形<br>＆ 衛星オルソ航空写真",
    feat1Text: "伊丹空港（RJOO）、猪名川、武庫川、六甲山系、大阪平野の実測標高メッシュを精密にメッシュ化。衛星オルソ画像テクスチャとの融合により、実物さながらの立体的起伏とランドマークを忠実に再現。",
    feat1Tag: "#実測DEM標高 #オルソ衛星メッシュ #六甲山系",
    feat2Title: "本格 6自由度 (6-DOF)<br>航空力学物理演算",
    feat2Text: "主翼迎角、失速特性、対気速度、ピッチ・ロール・ヨーの慣性モーメント、フラップ展開時の揚力増加と誘導抗力、ギアの空気抵抗を毎フレーム物理演算。手動飛行時のリアルな操縦レスポンスを体感できます。",
    feat2Tag: "#6DOF空力モデル #フラップ揚力 #リアル慣性",
    feat3Title: "実機仕様 PFD / HUD<br>コックピット計器システム",
    feat3Text: "現代旅客機のグラスコックピットに準拠したPrimary Flight Display（PFD）を搭載。人工水平儀、対気速度（IAS）、気圧高度（ALT）、昇降率（V/S）、磁方位コンパス（HDG）をリアルタイムに直読可能。",
    feat3Tag: "#グラスコックピット #PFD/HUD #人工水平儀",
    feat4Title: "臨場感あふれる<br>6視点カメラ切り替え",
    feat4Text: "チェイス後方視点、操縦桿を握るパイロット視点、主翼とエンジンのしなりを体感するウィング視点、滑走路脇で見送る管制塔タワー視点、乗客目線の客室窓視点、全方位フリー視点を瞬時に切り替え可能。",
    feat4Tag: "#コックピット視点 #ウィングビュー #タワー定点",
    feat5Title: "昼夜・夕景・気象環境<br>リアルタイム大気レンダリング",
    feat5Text: "快晴のデイフライト、大阪平野をオレンジに染めるサンセット夕景、空港誘導路灯や都市の灯火が煌めくナイトフライト、雲海・フォグをシームレスに切り替え。時間帯に応じたドラマティックなフライトを演出。",
    feat5Tag: "#昼夜サイクル #夕景ライティング #滑走路誘導灯",
    feat6Title: "Tauri 2.0 ネイティブ高速動作<br>＆ 完全買い切り永久版",
    feat6Text: "Rust + Tauri 2.0 による極小ファイルサイズ（Mac 9.4MB / Win 4.6MB）と低メモリ消費。ブラウザ不要で瞬時に起動し、低スペックPCでも60+ FPSの超滑らかな描画を実現。追加課金ゼロの買い切り永久版。",
    feat6Tag: "#容量わずか数MB #高速起動 #完全買い切り",

    routeBadge: "FLIGHT PROFILE & NAVIGATION",
    routeTitle: `伊丹名物・武庫川左旋回 <span class="gradient-text">出発ルート(SID)完全解説</span>`,
    routeDesc: "市街地騒音軽減と地形回避のため設定された伊丹空港（RJOO）32L独自の出発飛行プロファイルを忠実に再現しています。",
    phase1Title: "滑走路32L 加速滑走 〜 初期上昇区間",
    phase1Text: "磁方位 320° に向けスロットルTOGA（100%）で加速滑走。対気速度 145kt（Vr）到達時に機首上げ（Rotation）を行い、上昇角 7.5° でポジティブクライムを開始。安全高度到達後にギアを格納（Gear UP）します。",
    phase2Title: "武庫川上空 左旋回変向区間",
    phase2Text: "伊丹名物の急激な騒音配慮・左旋回を開始。バンク角 18.0°、旋回半径 1,000m、旋回角 90° で武庫川の上空をトレースしながら西へと進路を変向。六甲山系の南麓を見渡す迫力のパノラマが広がります。",
    phase3Title: "神戸方面 出発上昇区間",
    phase3Text: "旋回完了後、水平翼姿勢（Wings Level）に復帰し、出発方位 230.0°（神戸・瀬戸内海方面）へ向けて上昇角 6.0° で巡航高度へ向けた安定した巡航上昇フェーズへと移行します。",

    avionicsBadge: "FLIGHT DECK & SHORTCUTS",
    avionicsTitle: `操縦系統 ＆ <span class="gradient-text">キーボードショートカット一覧</span>`,
    avionicsDesc: "直感的なキーボード操作で、本格的な6自由度フライトや各種計器・カメラ視点を自在にコントロールできます。",

    compareBadge: "BENCHMARK & VALUE",
    compareTitle: `他フライトシミュレーターとの <span class="gradient-text">徹底スペック比較</span>`,
    compareDesc: "大容量ストレージや高額PCを要求する巨大シミュレーターと一線を画す、圧倒的な軽快さと手軽さを実現。",

    priceTag: "PERMANENT LICENSE • ONE-TIME PURCHASE",
    priceTitle: "Osaka Itami Flight Departure Simulator",
    priceSub: "一度の購入で永久利用可能。サブスクリプションや追加課金なしの完全買い切り型です。",
    priceTax: "(税込・買い切り)",

    trust1: "Stripe暗号化決済",
    trust2: "決済後 即時ダウンロード",
    trust3: "永久アップデート無償",
    trust4: "完全オフライン動作保証",

    faqBadge: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: `よくあるご質問 <span class="gradient-text">(FAQ)</span>`,
    faqDesc: "ご購入前・インストール時によくいただく質問と回答をまとめました。",
    faq1Q: "Q. MacとWindowsの両方で動作しますか？",
    faq1A: "はい、macOS（Apple Silicon M1/M2/M3/M4 および Intel Mac）と Windows 10/11（64bit）の両プラットフォームにネイティブ対応しています。ご購入時にご利用のOS用インストーラーをダウンロードいただけます。",
    faq2Q: "Q. ハイスペックなゲーミングPCが必要ですか？",
    faq2A: "不要です。本作は軽量なTauri 2.0フレームワークと最適化されたThree.js WebGLパイプラインを採用しているため、一般的なノートPC（Intel UHD Graphics / Apple M1内蔵GPUなど）でも60 FPSの非常に滑らかな動作が可能です。",
    faq3Q: "Q. ジョイスティックやゲームパッドに対応していますか？",
    faq3A: "キーボード操作（W/A/S/D・矢印キー）、マウスによるフリールック・操縦に標準対応しているほか、標準的なUSBゲームパッド（DirectInput / XInput）でのピッチ・ロール入力にも対応しています。",
    faq4Q: "Q. なぜファイルサイズが数MBと圧倒的に小さいのですか？",
    faq4A: "OS標準のネイティブWebビューを活用するTauri 2.0アーキテクチャと、国土地理院DEMデータの高度な圧縮・最適化アルゴリズムを採用しているためです。重厚なChromiumブラウザを内包せず、無駄な数GBのダウンロードを一切必要としません。",
    faq5Q: "Q. 購入後の決済方法とダウンロード手順は？",
    faq5A: "決済は国際規格の安全なStripe決済（クレジットカード、Apple Pay、Google Pay対応）を利用しています。お支払い完了後、即座にダウンロード画面が表示され、登録メールアドレスにも永続ダウンロードリンクが送信されます。"
  },

  en: {
    navDemo: "Live PFD Demo",
    navFeatures: "Features",
    navRoute: "SID Route",
    navAvionics: "Controls",
    navCompare: "Comparison",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navGetNow: "Buy Now ➔",
    langSwitchText: "日本語",

    heroBadge: "PRECISION FLIGHT SIMULATION SERIES | DESKTOP EDITION",
    heroTitle: `<span class="text-white font-orbitron">Osaka Itami Airport</span><br><span class="gradient-text neon-text">Flight Departure Simulator</span>`,
    heroLead: `Faithfully experience Runway 32L takeoff, the iconic sharp Mukogawa River left turn, and high-altitude climb toward Kobe at Osaka International Airport (RJOO).<br class="desktop-br">Powered by GSI 10m DEM real terrain, satellite ortho mesh, 6-DOF aerodynamics, PFD/HUD instruments, and 6 camera views in a native desktop app.`,
    heroTag1: "Authentic 6-DOF Aerodynamics Physics",
    heroTag2: "GSI 10m DEM Elevation & Satellite Ortho Mesh",
    heroTag3: "Glass Cockpit PFD & HUD Avionics Suite",
    heroTag4: "Tauri 2.0 Ultra-Lightweight & 100% Offline",
    heroCtaSub: "BUY DESKTOP EDITION / ¥1,980 One-Time",
    heroCtaMain: "Buy on Official Store & Instant Download",
    heroCtaDemo: "Try Live PFD Demo",
    platformTitle: "Supported Platforms:",
    heroFloatingBadge: "RJOO RWY 32L TAKEOFF CORE",
    heroStatus: "AVIONICS & PHYSICS ACTIVE",

    statLatency: "Zero Latency Tauri Native",
    statPhysics: "6-DOF Aerodynamics Physics",
    statTerrain: "GSI 10m DEM Elevation Mesh",
    statCameras: "6 Camera View Modes",
    statPriceVal: "¥1,980",
    statPrice: "Lifetime License • One-Time",

    demoBadge: "INTERACTIVE AVIONICS PLAYGROUND",
    demoTitle: `Experience Live! <span class="gradient-text">Primary Flight Display & Takeoff Sim</span>`,
    demoDesc: "Advance throttle to 100% TOGA and take off from Runway 32L! Watch the automated SID departure profile or take manual 6-DOF control via keyboard and mouse drag with realistic synthesized engine audio.",
    demoWpLabel: "ACTIVE PHASE",
    demoFlightModeLabel: "Flight Mode Selector:",
    demoModeAuto: "AUTO SID FLIGHT",
    demoModeManual: "MANUAL 6-DOF FLIGHT",
    demoModeAutoBtn: "Auto SID Takeoff Demo",
    demoModeManualBtn: "Manual 6-DOF Stick",
    demoThrottleLabel: "Engine Throttle (N1 / Thrust):",
    demoFlapsLabel: "Flaps Position:",
    demoGearLabel: "Landing Gear:",
    demoCameraLabel: "Camera View Presets:",
    demoBtnRestart: "Takeoff Replay / Reset",
    demoBtnPause: "Pause Flight",
    demoAudioBtn: "ENGINE SOUND: ON",
    demoStatusAuto: "Auto SID Takeoff Active: Rolling down 32L, rotating at 145kt, banking left over Mukogawa River toward Kobe.",
    demoStatusManual: "Manual Flight Active: Use [W/S] or [↑/↓] for pitch, [A/D] or [←/→] for roll. Drag on PFD to steer!",

    featuresBadge: "CORE CAPABILITIES",
    featuresTitle: `Recreating Itami Skies with Extreme Fidelity <span class="gradient-text">6 Key Advantages</span>`,
    featuresDesc: "No 150GB installs or monthly fees. Tauri 2.0 brings GSI real-world elevation and aerodynamic physics locally to your PC with instantaneous startup.",
    feat1Title: "GSI 10m DEM Elevation<br>& Satellite Ortho Imagery",
    feat1Text: "High-resolution 3D mesh generated from Geospatial Information Authority of Japan elevation data and satellite textures, reproducing Inagawa River, Mukogawa River, Rokko Mountains, and Osaka Plain with absolute fidelity.",
    feat1Tag: "#GSI DEM Mesh #Satellite Ortho #Rokko Range",
    feat2Title: "Authentic 6-DOF<br>Aerodynamic Physics",
    feat2Text: "Real-time calculation of lift, induced drag, angle of attack, stall characteristics, pitch/roll/yaw inertia, flap deployment lift enhancement, and landing gear parasite drag on every single frame.",
    feat2Tag: "#6-DOF Aero #Flap Lift #Real Inertia",
    feat3Title: "Aviation Glass Cockpit<br>PFD / HUD Instruments",
    feat3Text: "Primary Flight Display (PFD) modeled after modern jet airliners. Real-time artificial horizon, airspeed tape (IAS), barometric altitude (ALT), vertical speed (V/S), and magnetic heading compass.",
    feat3Tag: "#Glass Cockpit #PFD/HUD #Artificial Horizon",
    feat4Title: "Immersive 6 Camera<br>Viewpoint Modes",
    feat4Text: "Instantly switch between Chase Follow, Pilot Cockpit View, Wing Engine View, Airport Tower View, Passenger Cabin Window, and 360° Free Orbit View.",
    feat4Tag: "#Cockpit View #Wing View #Tower Cam",
    feat5Title: "Day/Night, Sunset &<br>Dynamic Atmosphere",
    feat5Text: "Seamlessly transition between clear daylight, golden sunset illuminating the Osaka Plain, nighttime city lights and illuminated runway beacons, and atmospheric fog.",
    feat5Tag: "#Day/Night Cycle #Sunset Golden Hour #Runway Lights",
    feat6Title: "Tauri 2.0 Native Speed<br>& Permanent License",
    feat6Text: "Ultra-compact build size (Mac 9.4MB / Win 4.6MB) with minimal RAM overhead. Runs smoothly at 60+ FPS even on standard laptops without heavy browser overhead. 100% one-time purchase.",
    feat6Tag: "#Few MB Size #Instant Launch #One-Time Buy",

    routeBadge: "FLIGHT PROFILE & NAVIGATION",
    routeTitle: `Itami's Iconic Mukogawa Turn <span class="gradient-text">Departure SID Profile</span>`,
    routeDesc: "Faithfully reproduces the specialized Standard Instrument Departure designed for noise abatement and terrain clearance over the Osaka metropolitan area.",
    phase1Title: "Runway 32L Takeoff Roll to Initial Climb",
    phase1Text: "Accelerate on magnetic heading 320° with full TOGA thrust. Rotate at Vr 145 kts and establish positive climb angle at +7.5°. Retract landing gear after reaching safe altitude.",
    phase2Title: "Mukogawa River Left Turn Bank",
    phase2Text: "Initiate Itami's signature noise-abatement left turn with 18.0° bank angle and 1,000m turn radius, tracking over the Mukogawa River towards the west while enjoying panoramic views of Mount Rokko.",
    phase3Title: "Kobe En-Route Climb Out",
    phase3Text: "Roll wings level to departure heading 230.0° (toward Kobe & Seto Inland Sea) and continue smooth en-route climb at +6.0° pitch angle toward cruising altitude.",

    avionicsBadge: "FLIGHT DECK & SHORTCUTS",
    avionicsTitle: `Flight Deck Controls & <span class="gradient-text">Keyboard Shortcuts</span>`,
    avionicsDesc: "Intuitive keyboard and mouse mapping for responsive 6-DOF handling, camera switching, and avionics control.",

    compareBadge: "BENCHMARK & VALUE",
    compareTitle: `Comprehensive Benchmark <span class="gradient-text">Comparison Matrix</span>`,
    compareDesc: "Standing apart from bulky 150GB simulators with lightning-fast load times, lightweight footprint, and zero monthly fees.",

    priceTag: "PERMANENT LICENSE • ONE-TIME PURCHASE",
    priceTitle: "Osaka Itami Flight Departure Simulator",
    priceSub: "Lifetime access with a single purchase. No recurring subscriptions or hidden microtransactions.",
    priceTax: "(Tax Incl. • One-Time)",

    trust1: "Stripe Encrypted Checkout",
    trust2: "Instant Download After Payment",
    trust3: "Lifetime Free Updates",
    trust4: "100% Offline Guaranteed",

    faqBadge: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: `Frequently Asked Questions <span class="gradient-text">(FAQ)</span>`,
    faqDesc: "Answers to common questions about compatibility, installation, and performance.",
    faq1Q: "Q. Does it run on both Mac and Windows?",
    faq1A: "Yes, native installers are provided for macOS (Apple Silicon M1/M2/M3/M4 & Intel Mac) and Windows 10/11 (64-bit). You can download your platform installer immediately upon checkout.",
    faq2Q: "Q. Do I need an expensive high-end gaming PC?",
    faq2A: "No. Thanks to the ultra-lightweight Tauri 2.0 framework and optimized Three.js WebGL pipeline, it runs smoothly at 60 FPS on standard laptops with integrated graphics (Intel UHD / Apple M1/M2).",
    faq3Q: "Q. Are flight joysticks and gamepads supported?",
    faq3A: "Yes, keyboard (WASD / Arrows) and mouse steering are supported out of the box, along with standard USB/Bluetooth game controllers (DirectInput / XInput) for pitch and roll inputs.",
    faq4Q: "Q. Why is the installer size only a few megabytes?",
    faq4A: "Because Tauri 2.0 utilizes the OS-native webview without bundling heavy Chromium binaries, paired with efficient binary compression for the GSI DEM terrain matrix.",
    faq5Q: "Q. How do payment and downloading work?",
    faq5A: "Payment is securely handled via Stripe (Credit Cards, Apple Pay, Google Pay). Once completed, you are instantly redirected to the download page and a permanent access link is emailed to you."
  }
};

let currentLang = localStorage.getItem('itami_lp_lang') || 'ja';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('itami_lp_lang', lang);
  document.documentElement.lang = lang;
  const dict = i18nData[lang];

  // Update plain text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update HTML elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update document title and meta description
  if (lang === 'ja') {
    document.title = "Osaka Itami Airport (RJOO) Flight Departure Simulator | 大阪国際空港 32L 出発フライトシミュレーター";
  } else {
    document.title = "Osaka Itami Airport (RJOO) Flight Departure Simulator | 32L SID Desktop Edition";
  }

  // Update language switch button text
  document.querySelectorAll('.lang-switch-btn .lang-label').forEach(el => {
    el.textContent = dict.langSwitchText;
  });
}

// Language switch handlers
document.querySelectorAll('.lang-switch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nextLang = currentLang === 'ja' ? 'en' : 'ja';
    updateLanguage(nextLang);
  });
});

// ============================================================================
// 2. Interactive Background Canvas Animation
// ============================================================================
function initBackgroundCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particles: Flight Vector Sparks & Beacon Lights
  const particles = [];
  const numParticles = 60;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4 + 0.3,
      vy: (Math.random() - 0.5) * 0.4 - 0.2,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(245, 158, 11, ' : 'rgba(6, 182, 212, ',
      alpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01
    });
  }

  let radarAngle = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Subtle Perspective Grid Floor
    ctx.save();
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.45)';
    ctx.lineWidth = 1;
    const gridSpacing = 64;
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Radar Sweep Line from Center
    radarAngle += 0.008;
    ctx.save();
    const cx = width * 0.8;
    const cy = height * 0.4;
    const radius = 280;

    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
    grad.addColorStop(0, 'rgba(245, 158, 11, 0.08)');
    grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    // Radar line
    const lx = cx + Math.cos(radarAngle) * radius;
    const ly = cy + Math.sin(radarAngle) * radius;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(lx, ly);
    ctx.stroke();
    ctx.restore();

    // Particles loop
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += Math.sin(radarAngle * 2) * p.pulseSpeed;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const currentAlpha = Math.max(0.1, Math.min(0.7, p.alpha));
      ctx.fillStyle = p.color + currentAlpha + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// ============================================================================
// 3. Web Audio Procedural Jet Turbine Sound Synthesizer
// ============================================================================
class JetSoundEngine {
  constructor() {
    this.ctx = null;
    this.noiseNode = null;
    this.noiseFilter = null;
    this.noiseGain = null;
    this.turbineOsc = null;
    this.turbineGain = null;
    this.rumbleOsc = null;
    this.rumbleGain = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.isMuted = false;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // 1. Noise Generator for Jet Air Rush
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      this.noiseFilter = this.ctx.createBiquadFilter();
      this.noiseFilter.type = 'bandpass';
      this.noiseFilter.frequency.setValueAtTime(800, this.ctx.currentTime);
      this.noiseFilter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      this.noiseGain = this.ctx.createGain();
      this.noiseGain.gain.setValueAtTime(0.4, this.ctx.currentTime);

      this.noiseNode.connect(this.noiseFilter);
      this.noiseFilter.connect(this.noiseGain);
      this.noiseGain.connect(this.masterGain);

      // 2. High Turbine Whine Oscillator
      this.turbineOsc = this.ctx.createOscillator();
      this.turbineOsc.type = 'sawtooth';
      this.turbineOsc.frequency.setValueAtTime(450, this.ctx.currentTime);

      const turbineFilter = this.ctx.createBiquadFilter();
      turbineFilter.type = 'lowpass';
      turbineFilter.frequency.setValueAtTime(1800, this.ctx.currentTime);

      this.turbineGain = this.ctx.createGain();
      this.turbineGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

      this.turbineOsc.connect(turbineFilter);
      turbineFilter.connect(this.turbineGain);
      this.turbineGain.connect(this.masterGain);

      // 3. Low Rumble Sub-Oscillator
      this.rumbleOsc = this.ctx.createOscillator();
      this.rumbleOsc.type = 'triangle';
      this.rumbleOsc.frequency.setValueAtTime(55, this.ctx.currentTime);

      this.rumbleGain = this.ctx.createGain();
      this.rumbleGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

      this.rumbleOsc.connect(this.rumbleGain);
      this.rumbleGain.connect(this.masterGain);

      this.noiseNode.start();
      this.turbineOsc.start();
      this.rumbleOsc.start();
      this.isPlaying = true;
    } catch (e) {
      console.warn("Web Audio initialization skipped:", e);
    }
  }

  update(throttleRatio, airspeed) {
    if (!this.ctx || !this.isPlaying || this.isMuted) return;

    const t = this.ctx.currentTime;
    // Modulate turbine pitch: 400Hz at Idle -> 2200Hz at full TOGA
    const targetFreq = 400 + throttleRatio * 1800 + (airspeed / 250) * 300;
    this.turbineOsc.frequency.setTargetAtTime(targetFreq, t, 0.15);

    // Modulate noise filter cutoff
    const noiseFreq = 600 + throttleRatio * 1400;
    this.noiseFilter.frequency.setTargetAtTime(noiseFreq, t, 0.1);

    // Modulate volume
    const vol = 0.08 + throttleRatio * 0.22;
    this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : vol, t, 0.1);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.18, this.ctx.currentTime, 0.05);
    }
    return !this.isMuted;
  }
}

const jetAudio = new JetSoundEngine();

// ============================================================================
// 4. Primary Flight Display (PFD) Canvas Simulation Engine
// ============================================================================
class FlightSimHUD {
  constructor() {
    this.canvas = document.getElementById('pfdCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // Flight State
    this.flightMode = 'auto'; // 'auto' | 'manual'
    this.isPaused = false;
    this.simTime = 0; // seconds

    // Dynamic Telemetry
    this.ias = 0;          // Airspeed (knots)
    this.altitude = 50;    // Altitude (feet MSL, Itami runway ~50ft)
    this.pitch = 0;       // Pitch angle (degrees, + is up)
    this.roll = 0;        // Roll/Bank angle (degrees, - is left bank)
    this.heading = 320;   // Magnetic Heading (degrees, RWY 32L = 320°)
    this.vs = 0;          // Vertical Speed (feet/min)
    this.throttle = 100;  // Throttle 0-100%
    this.flaps = 5;       // Flaps 0, 5, 15
    this.gear = true;     // Gear down
    this.gForce = 1.0;
    this.phase = 1;

    // Control Inputs for Manual Flight
    this.targetPitch = 0;
    this.targetRoll = 0;
    this.keysPressed = {};

    this.initControls();
    this.initInteraction();
    this.startLoop();
  }

  initControls() {
    // Keyboard listener for manual flying
    window.addEventListener('keydown', (e) => {
      this.keysPressed[e.key.toLowerCase()] = true;
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 's', 'a', 'd'].includes(e.key.toLowerCase())) {
        if (this.flightMode === 'auto') {
          this.setFlightMode('manual');
        }
      }
      // Start audio on first interaction
      jetAudio.init();
    });

    window.addEventListener('keyup', (e) => {
      this.keysPressed[e.key.toLowerCase()] = false;
    });

    // Audio Toggle Button
    const audioBtn = document.getElementById('audioToggleBtn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        jetAudio.init();
        const isOn = jetAudio.toggleMute();
        const icon = document.getElementById('audioIcon');
        const label = document.getElementById('audioLabel');
        if (isOn) {
          icon.className = 'fa-solid fa-volume-high text-amber-400';
          label.textContent = currentLang === 'ja' ? 'ENGINE SOUND: ON' : 'ENGINE SOUND: ON';
        } else {
          icon.className = 'fa-solid fa-volume-xmark text-slate-500';
          label.textContent = currentLang === 'ja' ? 'ENGINE SOUND: OFF' : 'ENGINE SOUND: OFF';
        }
      });
    }

    // Throttle Range Slider
    const throttleRange = document.getElementById('throttleRange');
    const throttleVal = document.getElementById('throttleVal');
    if (throttleRange && throttleVal) {
      throttleRange.addEventListener('input', (e) => {
        this.throttle = parseInt(e.target.value, 10);
        let tag = this.throttle >= 95 ? '(TOGA)' : (this.throttle >= 70 ? '(CLIMB)' : (this.throttle > 20 ? '(CRUISE)' : '(IDLE)'));
        throttleVal.textContent = `${this.throttle}% ${tag}`;
        document.getElementById('hudThrust').textContent = `${this.throttle}% ${tag}`;
        jetAudio.init();
      });
    }

    // Throttle Quick Preset Pills
    document.querySelectorAll('.throttle-quick-btns .pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.throttle-quick-btns .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const t = parseInt(btn.getAttribute('data-thrust'), 10);
        this.throttle = t;
        if (throttleRange) throttleRange.value = t;
        let tag = t >= 95 ? '(TOGA)' : (t >= 70 ? '(CLIMB)' : (t > 20 ? '(CRUISE)' : '(IDLE)'));
        if (throttleVal) throttleVal.textContent = `${t}% ${tag}`;
        document.getElementById('hudThrust').textContent = `${t}% ${tag}`;
        jetAudio.init();
      });
    });

    // Flap Buttons
    document.querySelectorAll('[data-flap]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-flap]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.flaps = parseInt(btn.getAttribute('data-flap'), 10);
        document.getElementById('hudFlaps').textContent = `${this.flaps}° ${this.flaps === 5 ? '(TAKEOFF)' : ''}`;
      });
    });

    // Gear Toggle Button
    const btnGear = document.getElementById('btnGearToggle');
    if (btnGear) {
      btnGear.addEventListener('click', () => {
        this.gear = !this.gear;
        const lamp = btnGear.querySelector('.gear-lamp');
        const label = document.getElementById('gearBtnLabel');
        const hudGear = document.getElementById('hudGear');
        if (this.gear) {
          btnGear.classList.add('active');
          lamp.classList.add('on');
          label.textContent = 'GEAR DOWN';
          hudGear.textContent = 'DOWN';
          hudGear.className = 'hud-val font-orbitron text-emerald-400';
        } else {
          btnGear.classList.remove('active');
          lamp.classList.remove('on');
          label.textContent = 'GEAR UP';
          hudGear.textContent = 'UP';
          hudGear.className = 'hud-val font-orbitron text-cyan-400';
        }
      });
    }

    // Camera Switch Buttons
    document.querySelectorAll('.btn-cam').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-cam').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Mode Toggle Buttons
    const btnAuto = document.getElementById('btnModeAuto');
    const btnManual = document.getElementById('btnModeManual');
    if (btnAuto && btnManual) {
      btnAuto.addEventListener('click', () => this.setFlightMode('auto'));
      btnManual.addEventListener('click', () => this.setFlightMode('manual'));
    }

    // Playback / Reset
    const btnPlay = document.getElementById('demoPlayBtn');
    const btnPause = document.getElementById('demoPauseBtn');
    if (btnPlay) {
      btnPlay.addEventListener('click', () => {
        this.resetFlight();
        jetAudio.init();
      });
    }
    if (btnPause) {
      btnPause.addEventListener('click', () => {
        this.isPaused = !this.isPaused;
        btnPause.innerHTML = this.isPaused ? '<i class="fa-solid fa-play"></i> 再開' : '<i class="fa-solid fa-pause"></i> 一時停止';
      });
    }
  }

  initInteraction() {
    // Mouse Drag to steer PFD in manual mode
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    this.canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      if (this.flightMode === 'auto') {
        this.setFlightMode('manual');
      }
      jetAudio.init();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = (e.clientX - startX) * 0.15;
      const dy = (e.clientY - startY) * 0.15;
      this.targetRoll = Math.max(-45, Math.min(45, dx));
      this.targetPitch = Math.max(-15, Math.min(25, -dy));
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        this.targetRoll = 0;
      }
    });

    // Touch Support
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        if (this.flightMode === 'auto') {
          this.setFlightMode('manual');
        }
        jetAudio.init();
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length === 0) return;
      const dx = (e.touches[0].clientX - startX) * 0.2;
      const dy = (e.touches[0].clientY - startY) * 0.2;
      this.targetRoll = Math.max(-45, Math.min(45, dx));
      this.targetPitch = Math.max(-15, Math.min(25, -dy));
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
      this.targetRoll = 0;
    });
  }

  setFlightMode(mode) {
    this.flightMode = mode;
    const btnAuto = document.getElementById('btnModeAuto');
    const btnManual = document.getElementById('btnModeManual');
    const badge = document.getElementById('simModeBadge');
    const status = document.getElementById('demoStatusText');
    const dict = i18nData[currentLang];

    if (mode === 'auto') {
      btnAuto.classList.add('active');
      btnManual.classList.remove('active');
      badge.textContent = dict.demoModeAuto;
      badge.style.color = 'var(--neon-cyan)';
      badge.style.borderColor = 'rgba(6, 182, 212, 0.4)';
      status.textContent = dict.demoStatusAuto;
    } else {
      btnAuto.classList.remove('active');
      btnManual.classList.add('active');
      badge.textContent = dict.demoModeManual;
      badge.style.color = 'var(--neon-amber)';
      badge.style.borderColor = 'rgba(245, 158, 11, 0.4)';
      status.textContent = dict.demoStatusManual;
    }
  }

  resetFlight() {
    this.simTime = 0;
    this.ias = 0;
    this.altitude = 50;
    this.pitch = 0;
    this.roll = 0;
    this.heading = 320;
    this.vs = 0;
    this.throttle = 100;
    this.flaps = 5;
    this.gear = true;
    this.gForce = 1.0;
    this.isPaused = false;
    this.updateTimeline(1);
  }

  updateTimeline(activeStep) {
    for (let i = 1; i <= 4; i++) {
      const step = document.getElementById(`step${i}`);
      if (step) {
        if (i === activeStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      }
    }
  }

  updatePhysics(dt) {
    if (this.isPaused) return;

    if (this.flightMode === 'auto') {
      this.simTime += dt;
      const t = this.simTime;

      if (t < 7.0) {
        // Phase 1: Takeoff Roll on Runway 32L
        this.phase = 1;
        this.throttle = 100;
        this.ias = Math.min(145, t * 21.0);
        this.altitude = 50;
        this.pitch = t > 5.5 ? (t - 5.5) * 5.0 : 0;
        this.roll = 0;
        this.heading = 320;
        this.vs = 0;
        this.gForce = 1.05;
        this.gear = true;
        document.getElementById('hudWaypoint').textContent = "PHASE 1: TAKEOFF ROLL (RWY 32L)";
        this.updateTimeline(1);
      } else if (t < 14.0) {
        // Phase 2: Rotation & Initial Positive Climb
        this.phase = 2;
        this.ias = 145 + (t - 7.0) * 5.5;
        this.pitch = 7.5;
        this.roll = 0;
        this.heading = 320;
        this.vs = 1850;
        this.altitude += (this.vs / 60) * dt;
        this.gForce = 1.15;
        if (t > 9.0 && this.gear) {
          this.gear = false;
        }
        document.getElementById('hudWaypoint').textContent = "PHASE 2: ROTATION & CLIMB (+7.5°)";
        this.updateTimeline(2);
      } else if (t < 24.0) {
        // Phase 3: Mukogawa Left Turn (18° Bank, 90° Turn to HDG 230°)
        this.phase = 3;
        this.ias = 180 + (t - 14.0) * 3.5;
        this.pitch = 6.5;
        this.roll = -18.0; // Left bank
        const turnProgress = (t - 14.0) / 10.0;
        this.heading = 320 - turnProgress * 90;
        this.vs = 1600;
        this.altitude += (this.vs / 60) * dt;
        this.gForce = 1.08;
        document.getElementById('hudWaypoint').textContent = "PHASE 3: MUKOGAWA LEFT BANK (18°)";
        this.updateTimeline(3);
      } else if (t < 36.0) {
        // Phase 4: En-route Climb toward Kobe (HDG 230°, Wings Level)
        this.phase = 4;
        this.roll = 0;
        this.heading = 230;
        this.pitch = 6.0;
        this.ias = Math.min(240, 215 + (t - 24.0) * 2.0);
        this.vs = 1450;
        this.altitude += (this.vs / 60) * dt;
        this.gForce = 1.0;
        document.getElementById('hudWaypoint').textContent = "PHASE 4: KOBE CLIMB OUT (HDG 230°)";
        this.updateTimeline(4);
      } else {
        // Loop restart
        this.resetFlight();
      }
    } else {
      // Manual Stick Mode
      // Check keys
      if (this.keysPressed['w'] || this.keysPressed['arrowup']) this.targetPitch = Math.max(-15, this.targetPitch - 0.8);
      if (this.keysPressed['s'] || this.keysPressed['arrowdown']) this.targetPitch = Math.min(25, this.targetPitch + 0.8);
      if (this.keysPressed['a'] || this.keysPressed['arrowleft']) this.targetRoll = Math.max(-45, this.targetRoll - 1.2);
      if (this.keysPressed['d'] || this.keysPressed['arrowright']) this.targetRoll = Math.min(45, this.targetRoll + 1.2);

      // Return to center when keys released
      if (!this.keysPressed['w'] && !this.keysPressed['arrowup'] && !this.keysPressed['s'] && !this.keysPressed['arrowdown']) {
        this.targetPitch *= 0.96;
      }
      if (!this.keysPressed['a'] && !this.keysPressed['arrowleft'] && !this.keysPressed['d'] && !this.keysPressed['arrowright']) {
        this.targetRoll *= 0.94;
      }

      // Smooth interpolation
      this.pitch += (this.targetPitch - this.pitch) * 0.1;
      this.roll += (this.targetRoll - this.roll) * 0.1;

      // Airspeed physics
      const thrustFactor = this.throttle / 100;
      const pitchDrag = Math.sin((this.pitch * Math.PI) / 180);
      const targetSpeed = Math.max(0, thrustFactor * 260 - pitchDrag * 60);
      this.ias += (targetSpeed - this.ias) * 0.05;

      // Vertical speed and altitude
      this.vs = (this.ias / 100) * Math.sin((this.pitch * Math.PI) / 180) * 3500;
      this.altitude = Math.max(0, this.altitude + (this.vs / 60) * dt);

      // Heading turn rate from bank
      const turnRate = Math.tan((-this.roll * Math.PI) / 180) * 1.5;
      this.heading = (this.heading + turnRate * dt * 20 + 360) % 360;

      this.gForce = 1.0 + Math.abs(this.roll / 45) * 0.3 + (this.pitch / 25) * 0.2;
      document.getElementById('hudWaypoint').textContent = `MANUAL: HDG ${Math.round(this.heading)}° • ALT ${Math.round(this.altitude)}FT`;
    }

    // Update HUD readouts
    document.getElementById('hudGForce').textContent = `${this.gForce.toFixed(2)} G`;

    // Update Web Audio Sound
    jetAudio.update(this.throttle / 100, this.ias);
  }

  renderPFD() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2 - 10;

    ctx.clearRect(0, 0, w, h);

    // 1. Artificial Horizon (Pitch & Roll Ball)
    ctx.save();
    // Clip PFD active area inside border
    ctx.beginPath();
    ctx.rect(55, 30, w - 110, h - 80);
    ctx.clip();

    ctx.translate(cx, cy);
    ctx.rotate((this.roll * Math.PI) / 180);

    const pitchPxPerDeg = 4.5;
    const pitchOffset = this.pitch * pitchPxPerDeg;

    // Sky Background Gradient
    const skyGrad = ctx.createLinearGradient(0, -250 + pitchOffset, 0, pitchOffset);
    skyGrad.addColorStop(0, '#0284c7');
    skyGrad.addColorStop(1, '#38bdf8');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(-350, -400 + pitchOffset, 700, 400);

    // Ground Background Gradient
    const gndGrad = ctx.createLinearGradient(0, pitchOffset, 0, 250 + pitchOffset);
    gndGrad.addColorStop(0, '#78350f');
    gndGrad.addColorStop(1, '#451a03');
    ctx.fillStyle = gndGrad;
    ctx.fillRect(-350, pitchOffset, 700, 400);

    // Horizon Line (White)
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-300, pitchOffset);
    ctx.lineTo(300, pitchOffset);
    ctx.stroke();

    // Pitch Ladder Lines (-20 to +20 deg)
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let deg = -20; deg <= 20; deg += 5) {
      if (deg === 0) continue;
      const yPos = pitchOffset - deg * pitchPxPerDeg;
      const lineWidth = Math.abs(deg) % 10 === 0 ? 55 : 30;

      ctx.beginPath();
      if (deg > 0) {
        // Solid line for nose up
        ctx.moveTo(-lineWidth, yPos);
        ctx.lineTo(lineWidth, yPos);
      } else {
        // Dashed line for nose down
        ctx.setLineDash([4, 4]);
        ctx.moveTo(-lineWidth, yPos);
        ctx.lineTo(lineWidth, yPos);
        ctx.setLineDash([]);
      }
      ctx.stroke();

      if (Math.abs(deg) % 10 === 0) {
        ctx.fillText(Math.abs(deg), -lineWidth - 12, yPos);
        ctx.fillText(Math.abs(deg), lineWidth + 12, yPos);
      }
    }

    ctx.restore();

    // 2. Roll Pointer Scale at Top Arc
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1.5;

    const rollRadius = 110;
    ctx.beginPath();
    ctx.arc(0, 0, rollRadius, (-150 * Math.PI) / 180, (-30 * Math.PI) / 180);
    ctx.stroke();

    // Roll Angle Ticks (-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60)
    const rollAngles = [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60];
    rollAngles.forEach(ang => {
      const rad = ((ang - 90) * Math.PI) / 180;
      const r1 = rollRadius;
      const r2 = Math.abs(ang) % 30 === 0 ? rollRadius - 10 : rollRadius - 6;
      ctx.beginPath();
      ctx.moveTo(Math.cos(rad) * r1, Math.sin(rad) * r1);
      ctx.lineTo(Math.cos(rad) * r2, Math.sin(rad) * r2);
      ctx.stroke();
    });

    // Roll Pointer Triangle (Follows roll)
    ctx.rotate((this.roll * Math.PI) / 180);
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(0, -rollRadius + 2);
    ctx.lineTo(-6, -rollRadius + 12);
    ctx.lineTo(6, -rollRadius + 12);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // 3. Central Aircraft Pip Symbol (Yellow)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#fbbf24';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    // Center Pip
    ctx.beginPath();
    ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Left Wing Bar
    ctx.beginPath();
    ctx.rect(-50, -3, 32, 6);
    ctx.fill();
    ctx.stroke();

    // Right Wing Bar
    ctx.beginPath();
    ctx.rect(18, -3, 32, 6);
    ctx.fill();
    ctx.stroke();

    // Flight Director Crossbars (Magenta)
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-35, -this.pitch * 0.5);
    ctx.lineTo(35, -this.pitch * 0.5);
    ctx.moveTo(this.roll * 0.4, -35);
    ctx.lineTo(this.roll * 0.4, 35);
    ctx.stroke();

    ctx.restore();

    // 4. Airspeed Tape (Left Side)
    ctx.save();
    const tapeW = 55;
    const tapeH = h - 60;
    const tapeX = 0;
    const tapeY = 30;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.fillRect(tapeX, tapeY, tapeW, tapeH);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(tapeX, tapeY, tapeW, tapeH);

    // Speed markings (every 10 kts)
    ctx.font = '10px "Share Tech Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';

    const spdPxPerKt = 2.2;
    const minSpd = Math.max(0, Math.floor((this.ias - 40) / 10) * 10);
    const maxSpd = Math.floor((this.ias + 40) / 10) * 10;

    for (let s = minSpd; s <= maxSpd; s += 10) {
      const y = cy - (s - this.ias) * spdPxPerKt;
      if (y >= tapeY && y <= tapeY + tapeH) {
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.moveTo(tapeW - 10, y);
        ctx.lineTo(tapeW, y);
        ctx.stroke();

        ctx.fillText(s, tapeW - 14, y + 3);
      }
    }

    // Vr marker (Rotation speed bug ~145kt)
    const vrY = cy - (145 - this.ias) * spdPxPerKt;
    if (vrY >= tapeY && vrY <= tapeY + tapeH) {
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 9px "Orbitron"';
      ctx.fillText('Vr', tapeW - 32, vrY + 3);
      ctx.fillRect(tapeW - 8, vrY - 2, 8, 4);
    }

    // Digital Speed Readout Window
    ctx.fillStyle = '#020617';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.5;
    ctx.fillRect(tapeX, cy - 14, tapeW + 4, 28);
    ctx.strokeRect(tapeX, cy - 14, tapeW + 4, 28);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 15px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(Math.round(this.ias).toString().padStart(3, '0'), tapeX + 28, cy + 5);

    ctx.restore();

    // 5. Altitude Tape (Right Side)
    ctx.save();
    const altW = 60;
    const altX = w - altW;
    const altY = 30;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.fillRect(altX, altY, altW, tapeH);
    ctx.strokeStyle = '#334155';
    ctx.strokeRect(altX, altY, altW, tapeH);

    // Alt markings (every 100 ft)
    const altPxPerFt = 0.25;
    const minAlt = Math.max(0, Math.floor((this.altitude - 300) / 100) * 100);
    const maxAlt = Math.floor((this.altitude + 300) / 100) * 100;

    ctx.font = '9px "Share Tech Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';

    for (let a = minAlt; a <= maxAlt; a += 100) {
      const y = cy - (a - this.altitude) * altPxPerFt;
      if (y >= altY && y <= altY + tapeH) {
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.moveTo(altX, y);
        ctx.lineTo(altX + 8, y);
        ctx.stroke();

        ctx.fillText(a, altX + 12, y + 3);
      }
    }

    // Digital Altitude Readout Window
    ctx.fillStyle = '#020617';
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 1.5;
    ctx.fillRect(altX - 4, cy - 14, altW + 4, 28);
    ctx.strokeRect(altX - 4, cy - 14, altW + 4, 28);

    ctx.fillStyle = '#06b6d4';
    ctx.font = 'bold 14px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(Math.round(this.altitude).toString().padStart(4, '0'), altX + 30, cy + 5);

    ctx.restore();

    // 6. Compass Heading Tape at Bottom
    ctx.save();
    const compW = w - 120;
    const compH = 34;
    const compX = 60;
    const compY = h - compH;

    ctx.fillStyle = 'rgba(2, 6, 23, 0.9)';
    ctx.fillRect(compX, compY, compW, compH);
    ctx.strokeStyle = '#f59e0b';
    ctx.strokeRect(compX, compY, compW, compH);

    // Compass degree ticks
    const hdgPxPerDeg = 3.2;
    ctx.font = '10px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';

    for (let d = -30; d <= 30; d += 5) {
      const deg = (Math.round(this.heading) + d + 360) % 360;
      const x = cx + d * hdgPxPerDeg;

      if (x >= compX + 5 && x <= compX + compW - 5) {
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.moveTo(x, compY);
        ctx.lineTo(x, compY + (deg % 10 === 0 ? 8 : 4));
        ctx.stroke();

        if (deg % 10 === 0) {
          let label = deg.toString().padStart(3, '0');
          if (deg === 0) label = 'N';
          if (deg === 90) label = 'E';
          if (deg === 180) label = 'S';
          if (deg === 270) label = 'W';
          ctx.fillStyle = (label === 'N' || label === '320' || label === '230') ? '#f59e0b' : '#cbd5e1';
          ctx.fillText(label, x, compY + 22);
        }
      }
    }

    // Center Heading Triangle
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(cx, compY);
    ctx.lineTo(cx - 5, compY - 7);
    ctx.lineTo(cx + 5, compY - 7);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  startLoop() {
    let lastTime = performance.now();
    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      this.updatePhysics(dt);
      this.renderPFD();

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

// ============================================================================
// 5. FAQ Accordion Logic
// ============================================================================
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      } else {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ============================================================================
// 6. Mobile Navigation Hamburger Menu
// ============================================================================
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

// ============================================================================
// DOM Ready Initialization
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set Initial Language
  updateLanguage(currentLang);

  // 2. Initialize Canvas Background
  initBackgroundCanvas();

  // 3. Initialize Interactive PFD Simulator
  new FlightSimHUD();

  // 4. Initialize FAQ Accordion
  initFaqAccordion();

  // 5. Initialize Mobile Hamburger Menu
  initMobileMenu();
});
