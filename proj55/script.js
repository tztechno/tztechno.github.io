/**
 * INTERSECTION ACCIDENT SIMULATOR - INTERACTIVE LOGIC & I18N
 */

// ==========================================
// 1. I18N TRANSLATION DICTIONARY
// ==========================================
const translations = {
  ja: {
    // Navigation
    nav_features: "特徴・機能",
    nav_radar: "死角レーダー体験",
    nav_physics: "物理演算",
    nav_modes: "運転モード",
    nav_specs: "仕様・環境",
    nav_faq: "FAQ",
    nav_cta: "製品ページへ ↗",

    // Hero
    hero_badge: "MuJoCo WASM 物理演算 × Three.js 3D レンダリング",
    hero_title_prefix: "死角に潜む",
    hero_title_highlight1: "衝突の瞬間",
    hero_title_mid: "を、",
    hero_title_highlight2: "本物の物理演算",
    hero_title_suffix: "で解き明かす",
    hero_subtitle: "片側2車線の交差点・8の字周回街区を舞台に、リアルタイム視線Raycast解析と剛体物理シミュレーションを融合。事故原因の直感的な体感とデータ検証を実現した次世代シミュレーター。",
    hero_btn_primary: "製品詳細・ダウンロードはこちら ↗",
    hero_btn_secondary: "死角レーダーを体験する ↓",
    hud_tag_visible: "視界捕捉: 12 台",
    hud_tag_blind: "死角警告: 2 台 (大型車後方)",
    hud_tag_telemetry: "MuJoCo 物理: 60 FPS 安定",

    // Metrics
    metric_1_val: "60 FPS",
    metric_1_label: "MuJoCo WASM 剛体物理演算",
    metric_2_val: "100%",
    metric_2_label: "リアルタイム視線Raycast死角解析",
    metric_3_val: "4 視点",
    metric_3_label: "運転席 / 追従 / 自由 / 交差点定点",
    metric_4_val: "3 モード",
    metric_4_label: "自動周回 / ペダル判断 / 完全手動",

    // Interactive Demo
    demo_tag: "INTERACTIVE DEMO",
    demo_title: "ブラウザ上で体感する「死角の恐怖」",
    demo_desc: "対向の大型トラックの背後に隠れる二輪車（バイク）。スライダーを動かして自車のドライバー視点からレイキャスト（視線）がどう遮られるかをリアルタイムにお試しください。",
    demo_legend_visible: "視認可能 (Visible)",
    demo_legend_blind: "死角・遮断 (Blind Spot)",
    demo_legend_ego: "自車 (Ego)",
    demo_ctrl_title: "シミュレーション制御",
    demo_ctrl_desc: "スライダーで車両位置を動かすと、Raycast判定がリアルタイムに更新されます。",
    demo_slider_truck: "対向大型トラックの位置 (Y座標)",
    demo_slider_bike: "対向バイクの位置 (Y座標)",
    demo_slider_turn: "自車の右折進行度 (%)",
    demo_alert_blind: "⚠️ 警告: バイクが大型トラックの完全な死角に入っています！右折すると右直事故が発生します。",
    demo_alert_clear: "✅ 安全確認: バイクが自車の直接視界に入っています。",

    // Features
    feat_tag: "CORE CAPABILITIES",
    feat_title: "事故原因の究明と安全教育に特化した高度な機能群",
    feat_desc: "単なるゲームではなく、科学的アプローチに基づいた視線追跡・物理演算・シナリオカスタマイズを提供。",
    feat_1_title: "リアルタイム視線・死角レーダー",
    feat_1_desc: "MuJoCo の `mj_ray` 機能により、運転席の視点から各対象への視線を毎フレーム追跡。ピラーや大型車の陰に隠れた対象を緑/赤の線で即座に判定・可視化します。",
    feat_2_title: "高精度 MuJoCo 剛体物理演算",
    feat_2_desc: "車両のサスペンション挙動、タイヤ摩擦力、車重移動、そして衝突時の激しいインパルスと跳ね返りを WebAssembly 物理エンジンで忠実に再現します。",
    feat_3_title: "3段階の運転コントロール",
    feat_3_desc: "AIによる完全自動走行(Auto)、判断タイミングのみを操作する(Pedal)、ハンドルとペダルをフル操作する(Manual)の3つの運転モードをシームレスに切替可能。",
    feat_4_title: "4種類のダイナミックカメラ",
    feat_4_desc: "運転者のリアルな目線(Driver)、車体後方(Chase)、マウスで全方位を観察する(Orbit)、南東電柱のCCTV交通カメラ(Corner)を即座にスイッチ可能。",
    feat_5_title: "多彩な交通・事故パラメータ制御",
    feat_5_desc: "交通量、大型車比率、バイク比率、自車Gap許容秒数、ドライバー反応遅延時間、黄信号突入率など多岐にわたる危険パラメータを自由に調合できます。",
    feat_6_title: "精密リプレイ & WebM動画出力",
    feat_6_desc: "直近の走行と衝突シーンをフレーム単位で巻き戻し・再生。JSONデータとしての保存・読込や、高画質WebM動画ファイルへの書き出しに対応。",

    // Deep Dive
    deep_tag: "ACCIDENT ANATOMY",
    deep_title: "なぜ「右直事故」は防げないのか？",
    deep_desc: "交差点事故の中で最も死亡重傷率が高い「右折車と直進二輪車の衝突（いわゆるサンキュー事故・死角事故）」。本シミュレーターは人間の認知限界と物理的死角を科学的に明らかにします。",
    deep_pill_1_title: "二輪車の速度・距離錯覚",
    deep_pill_1_desc: "バイクは車体が小さいため、実際よりも「遠く・遅く」見える錯覚が生じ、無理な右折判断を誘発します。",
    deep_pill_2_title: "大型車による幾何学的遮蔽",
    deep_pill_2_desc: "対向の右折待ちトラックの陰にバイクが隠れると、直前の約1.5秒前まで完全に視界から消滅します。",
    deep_pill_3_title: "ピラー死角と視認遅延",
    deep_pill_3_desc: "Aピラー（フロントピラー）の幅と頭部移動の遅れにより、歩行者や自転車を見落とす現象を運転席視点で体感可能。",

    // Modes & Cameras
    modes_tag: "MODES & CAMERAS",
    modes_title: "目的や検証シナリオに応じた柔軟なインターフェース",
    modes_desc: "教育研修、工学分析、直感体験の各フェーズに最適な視点と操作系を提供。",
    mode_1_title: "🤖 自動モード (Auto)",
    mode_1_desc: "対向車の接近速度や死角、安全ギャップ（Gap）をAIが自動計算して8の字コースを周回。安全運転アルゴリズムのベンチマークになります。",
    mode_2_title: "🦶 ペダルモード (Pedal)",
    mode_2_desc: "ステアリングは自動ですが、加速・維持・ブレーキのタイミングをプレイヤーが判断。対向車の隙間を突く「判断の難しさ」を直感体験できます。",
    mode_3_title: "🎮 手動モード (Manual)",
    mode_3_desc: "ハンドル操舵（←/→）とペダル操作を完全にコントロール。周回コースを外れて街区全体（±170m）を自由に探索・走行可能。",

    // Use Cases
    usecase_tag: "USE CASES",
    usecase_title: "幅広い安全教育と研究開発で活用",
    usecase_1_title: "自動車教習所・安全運転研修",
    usecase_1_desc: "受講生に対し、言葉や2D図面では伝わりにくい「トラックの陰からの急な飛び出し」や「運転席からの死角」をリアルに体感させ、危険予測能力を高めます。",
    usecase_2_title: "運送・物流・法人ドライバー教育",
    usecase_2_desc: "大型車特有の死角、左折時の二輪巻き込み事故防止、交差点進入速度の重要性を定量的なパラメータとリプレイで反省・教育できます。",
    usecase_3_title: "自動運転・ADAS シナリオ検証",
    usecase_3_desc: "MuJoCoの物理エンジンと視線判定をベースに、死角から急加速するバイク等のエッジケースシナリオにおけるセンサー遮蔽状態を検証。",
    usecase_4_title: "交通工学・大学・研究機関",
    usecase_4_desc: "交差点信号サイクル、交通密度、ギャップ受け入れ時間（Accepted Gap）が事故発生率に及ぼす影響をシミュレーション統計で評価。",

    // Specs
    specs_tag: "SPECIFICATIONS",
    specs_title: "システム仕様とプラットフォーム対応",
    spec_box_1_title: "💻 動作環境",
    spec_k_os: "対応OS",
    spec_v_os: "macOS (Apple Silicon / Intel), Windows 10/11",
    spec_k_arch: "アーキテクチャ",
    spec_v_arch: "Tauri v2 (Rust) / Standalone App & Web",
    spec_k_install: "配布形式",
    spec_v_install: "DMG / NSIS .exe / MSI / Web",

    spec_box_2_title: "⚙️ コアエンジン",
    spec_k_physics: "物理エンジン",
    spec_v_physics: "MuJoCo WASM (Rigid Body Dynamics)",
    spec_k_graphics: "3Dグラフィックス",
    spec_v_graphics: "Three.js (WebGL 2.0)",
    spec_k_raycast: "視線判定",
    spec_v_raycast: "Realtime mj_ray Raycasting",

    spec_box_3_title: "🎥 入出力・メディア",
    spec_k_video: "動画エクスポート",
    spec_v_video: "WebM 形式 (フレームレート同期)",
    spec_k_replay: "リプレイログ",
    spec_v_replay: "JSON セッション保存・読み込み",
    spec_k_lang: "多言語対応",
    spec_v_lang: "日本語 / English 切替可能",

    // FAQ
    faq_tag: "FAQ",
    faq_title: "よくあるご質問",
    faq_1_q: "Q1. デスクトップ版とWeb版の違いは何ですか？",
    faq_1_a: "デスクトップ版（macOS / Windows）は軽量かつ高速なTauriフレームワークでビルドされており、リプレイのローカルファイル保存やWebM動画の高速書き出し、オフラインでの安定動作に最適化されています。",
    faq_2_q: "Q2. どのような物理モデルが使用されていますか？",
    faq_2_a: "DeepMind社が開発・オープンソース化した世界トップクラスの物理エンジン「MuJoCo」をWebAssembly形式で採用しています。剛体の接触力、摩擦係数、サスペンションの減衰、衝突時の運動量保存則を厳密に計算します。",
    faq_3_q: "Q3. 交通パラメータはリアルタイムに変更できますか？",
    faq_3_a: "はい。シミュレーション稼働中であっても『S』キーまたは設定ボタンから、交通量やトラックの比率、自車の判断間隔（Gap）などを即座に変更し、状況変化をリアルタイムに観察できます。",
    faq_4_q: "Q4. 事故の瞬間を動画として保存できますか？",
    faq_4_a: "はい。リプレイモード（Rキー）から任意のカメラアングルを選び、「⏺ 動画」ボタンを押すことで高画質なWebM形式で事故シーンをエクスポート可能です。",
    faq_5_q: "Q5. ソフトウェアの入手・購入はどこから行えますか？",
    faq_5_a: "Cyber Matrix 公式製品ページ（https://cyber-matrix.netlify.app/products/intersection）にて最新版のダウンロードや詳細仕様の確認が可能です。",

    // CTA
    cta_title: "交差点事故シミュレーターを今すぐ手に入れよう",
    cta_subtitle: "死角を科学し、事故のない未来へ。Cyber Matrix 公式製品ページから詳細情報をご確認いただけます。",
    cta_btn: "Cyber Matrix 公式製品ページへ ↗",

    // Footer
    footer_desc: "リアルタイム物理演算と視線Raycast解析による交差点事故・死角体験シミュレーター。",
    footer_quick_links: "クイックリンク",
    footer_resources: "リソース",
    footer_contact: "製品リンク",
    footer_rights: "All rights reserved.",
    page_title: "Intersection Accident Simulator | 交通事故・死角体験シミュレーター",
    page_desc: "MuJoCo物理エンジン(WASM)とThree.jsによる左側通行交差点の交通事故・死角体験シミュレーター。リアルタイム視線Raycast解析で事故原因を科学的に可視化。",
    page_keywords: "MuJoCo, 交通事故シミュレーター, 死角体験, 交差点事故, 右直事故, 視線Raycast, Three.js, Tauri, 安全運転教育"
  },

  en: {
    // Navigation
    nav_features: "Features",
    nav_radar: "Blind Spot Radar",
    nav_physics: "Physics",
    nav_modes: "Driving Modes",
    nav_specs: "Tech Specs",
    nav_faq: "FAQ",
    nav_cta: "Visit Product ↗",

    // Hero
    hero_badge: "MuJoCo WASM Physics × Three.js 3D Rendering",
    hero_title_prefix: "Uncover",
    hero_title_highlight1: "Blind-Spot Collisions",
    hero_title_mid: "with",
    hero_title_highlight2: "Real Rigid-Body Physics",
    hero_title_suffix: "",
    hero_subtitle: "An advanced traffic accident simulator on a dual-lane intersection loop, combining real-time sightline raycasting and high-fidelity physics for intuitive hazard awareness and empirical safety analysis.",
    hero_btn_primary: "Explore on Cyber-Matrix ↗",
    hero_btn_secondary: "Try Radar Demo ↓",
    hud_tag_visible: "Visible: 12 Targets",
    hud_tag_blind: "Blind Spot: 2 Targets (Behind Truck)",
    hud_tag_telemetry: "MuJoCo Physics: 60 FPS Stable",

    // Metrics
    metric_1_val: "60 FPS",
    metric_1_label: "MuJoCo WASM Physics Engine",
    metric_2_val: "100%",
    metric_2_label: "Real-time Sightline Raycasting",
    metric_3_val: "4 Views",
    metric_3_label: "Driver / Chase / Orbit / CCTV Corner",
    metric_4_val: "3 Modes",
    metric_4_label: "Autonomous / Pedal Gap / Manual",

    // Interactive Demo
    demo_tag: "INTERACTIVE DEMO",
    demo_title: "Experience the Blind Spot Hazard in Browser",
    demo_desc: "A motorcycle concealed behind an opposing heavy truck. Adjust the sliders to see how the ego driver's raycast line-of-sight is dynamically blocked in real time.",
    demo_legend_visible: "Direct Sight (Visible)",
    demo_legend_blind: "Blind Spot (Blocked)",
    demo_legend_ego: "Ego Vehicle",
    demo_ctrl_title: "Simulation Controls",
    demo_ctrl_desc: "Move sliders to adjust vehicle coordinates and witness instant Raycast updates.",
    demo_slider_truck: "Opposing Truck Position (Y-Axis)",
    demo_slider_bike: "Opposing Motorcycle Position (Y-Axis)",
    demo_slider_turn: "Ego Vehicle Turn Progress (%)",
    demo_alert_blind: "⚠️ WARNING: Motorcycle is completely hidden in the truck's blind spot! Right-turn collision imminent.",
    demo_alert_clear: "✅ CLEAR: Motorcycle is within driver's direct line of sight.",

    // Features
    feat_tag: "CORE CAPABILITIES",
    feat_title: "Built for Crash Analysis and Hazard Perception Training",
    feat_desc: "Far beyond a simple video game: delivering scientific sightline analysis, rigid-body physics, and full parametric flexibility.",
    feat_1_title: "Real-Time Sightline & Radar",
    feat_1_desc: "Harnesses MuJoCo's `mj_ray` to cast continuous sightlines from the driver's eye position to every traffic entity, classifying line of sight as clear (green) or blocked (red).",
    feat_2_title: "MuJoCo WASM Physics Engine",
    feat_2_desc: "Simulates vehicle suspension dynamics, tire grip and friction, weight transfer, and violent impulse reactions upon impact via high-performance WebAssembly.",
    feat_3_title: "3 Driving Control Modes",
    feat_3_desc: "Seamlessly switch between AI autonomous loop navigation (Auto), human gap-acceptance judgment (Pedal), and full free-roam manual steering (Manual).",
    feat_4_title: "4 Dynamic Camera Angles",
    feat_4_desc: "Switch perspectives in real time: first-person Driver cockpit, third-person Chase, free-angle Orbit camera, or fixed south-east CCTV Corner view.",
    feat_5_title: "Comprehensive Traffic Customization",
    feat_5_desc: "Tune traffic density, truck ratio, motorcycle share, accepted gap threshold, driver reaction latency, and yellow-light runners to recreate specific hazards.",
    feat_6_title: "Frame-Accurate Replay & WebM Export",
    feat_6_desc: "Scrub back and forth through past driving sessions, save/load JSON records, or render and export high-bitrate WebM video clips directly.",

    // Deep Dive
    deep_tag: "ACCIDENT ANATOMY",
    deep_title: "The Science Behind Right-Turn ('SMIDSY') Crashes",
    deep_desc: "Right-turn collisions across oncoming lanes represent one of the most fatal accident typologies. This simulator visualizes the precise cognitive and physical causes.",
    deep_pill_1_title: "Size & Speed Perception Illusions",
    deep_pill_1_desc: "Due to small frontal profiles, oncoming motorcycles appear deceptively farther away and slower than their actual approach speed.",
    deep_pill_2_title: "Geometric Occlusion by Large Vehicles",
    deep_pill_2_desc: "Opposing trucks turning or waiting in the intersection completely mask approaching motorcycles until 1.5 seconds before impact.",
    deep_pill_3_title: "A-Pillar Blind Spots",
    deep_pill_3_desc: "Experience how windshield structural pillars block pedestrians and bicycles in the driver cockpit perspective.",

    // Modes & Cameras
    modes_tag: "MODES & CAMERAS",
    modes_title: "Tailored for Education, Engineering, and Intuitive Testing",
    modes_desc: "Providing optimal vantage points and control fidelity for safety training, research, and interactive exploration.",
    mode_1_title: "🤖 Auto Mode",
    mode_1_desc: "AI driver autonomously navigates the town loop, evaluating oncoming traffic speeds, sightlines, and safe gap margins.",
    mode_2_title: "🦶 Pedal Mode",
    mode_2_desc: "Steering is automated while throttle and braking are in your hands. Test your split-second judgment when crossing oncoming traffic.",
    mode_3_title: "🎮 Manual Mode",
    mode_3_desc: "Full manual steering and pedal control. Break away from the loop and freely explore the entire town layout (±170 m).",

    // Use Cases
    usecase_tag: "USE CASES",
    usecase_title: "Applied in Safety Training and Autonomous Research",
    usecase_1_title: "Driving Schools & Safety Seminars",
    usecase_1_desc: "Give students an indelible, visceral experience of blind spots and sudden pop-outs that 2D diagrams can never communicate.",
    usecase_2_title: "Fleet & Commercial Driver Training",
    usecase_2_desc: "Demonstrate heavy vehicle sightline occlusion and curb hugging for left-turn motorcycle entrapment prevention.",
    usecase_3_title: "Autonomous Vehicles & ADAS R&D",
    usecase_3_desc: "Stress-test occlusion reasoning, sensor field-of-view limits, and edge-case crash scenarios based on true physics.",
    usecase_4_title: "Traffic Engineering & Academia",
    usecase_4_desc: "Measure how gap acceptance parameters and intersection signal phases correlate with collision probability.",

    // Specs
    specs_tag: "SPECIFICATIONS",
    specs_title: "System Specifications & Cross-Platform Support",
    spec_box_1_title: "💻 Environments",
    spec_k_os: "Supported OS",
    spec_v_os: "macOS (Apple Silicon / Intel), Windows 10/11",
    spec_k_arch: "Architecture",
    spec_v_arch: "Tauri v2 (Rust) / Standalone App & Web",
    spec_k_install: "Packages",
    spec_v_install: "DMG / NSIS .exe / MSI / Web",

    spec_box_2_title: "⚙️ Core Engine",
    spec_k_physics: "Physics Engine",
    spec_v_physics: "MuJoCo WASM (Rigid Body Dynamics)",
    spec_k_graphics: "3D Graphics",
    spec_v_graphics: "Three.js (WebGL 2.0)",
    spec_k_raycast: "Sightlines",
    spec_v_raycast: "Realtime mj_ray Raycasting",

    spec_box_3_title: "🎥 Media & Export",
    spec_k_video: "Video Export",
    spec_v_video: "WebM Format (Frame-rate locked)",
    spec_k_replay: "Replay Log",
    spec_v_replay: "JSON Session Save / Load",
    spec_k_lang: "Languages",
    spec_v_lang: "Japanese / English Switchable",

    // FAQ
    faq_tag: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_1_q: "Q1. What is the difference between the Desktop and Web versions?",
    faq_1_a: "The Desktop app (macOS / Windows) is built with Tauri for maximum lightweight performance, local file system saving for session logs, and stable offline execution.",
    faq_2_q: "Q2. What physics engine powers the simulator?",
    faq_2_a: "It runs Google DeepMind's industry-standard MuJoCo physics engine compiled to WebAssembly, providing exact rigid body contact dynamics and impulse calculation.",
    faq_3_q: "Q3. Can traffic parameters be adjusted in real time?",
    faq_3_a: "Yes. By pressing the 'S' key or Settings button, you can adjust traffic flow, truck ratios, gap acceptance, and driver reaction delays on the fly.",
    faq_4_q: "Q4. Can I export recorded crash moments as video?",
    faq_4_a: "Yes. In Replay Mode (press 'R'), you can choose any camera angle and click '⏺ Video' to export high-quality WebM videos.",
    faq_5_q: "Q5. Where can I download or purchase the software?",
    faq_5_a: "You can download and view product details directly on the Cyber Matrix official store: https://cyber-matrix.netlify.app/products/intersection.",

    // CTA
    cta_title: "Get Intersection Simulator Today",
    cta_subtitle: "Master hazard perception through science and physics. Visit the official Cyber Matrix product page.",
    cta_btn: "Visit Cyber Matrix Product Page ↗",

    // Footer
    footer_desc: "Real-time physics and sightline raycasting simulator for intersection accidents and blind-spot awareness.",
    footer_quick_links: "Quick Links",
    footer_resources: "Resources",
    footer_contact: "Product Link",
    footer_rights: "All rights reserved.",
    page_title: "Intersection Accident Simulator | Crash & Blind-Spot Simulator",
    page_desc: "High-fidelity intersection accident and blind-spot simulator powered by MuJoCo WASM physics engine and Three.js 3D rendering with real-time sightline raycast analysis.",
    page_keywords: "MuJoCo, traffic accident simulator, blind spot simulation, intersection crash, SMIDSY accident, sightline raycast, Three.js, Tauri, driver safety education"
  }
};

let currentLang = 'ja';

// ==========================================
// 2. LANGUAGE SWITCHER IMPLEMENTATION
// ==========================================
function setLanguage(lang, updateUrl = false) {
  if (!translations[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem('intersection_lp_lang', lang);
  } catch (e) {}

  if (updateUrl && window.history && window.history.replaceState) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  }

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update Title and Meta Tags
  if (translations[lang].page_title) {
    document.title = translations[lang].page_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang].page_desc) {
    metaDesc.setAttribute('content', translations[lang].page_desc);
  }
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && translations[lang].page_keywords) {
    metaKeywords.setAttribute('content', translations[lang].page_keywords);
  }
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && translations[lang].page_title) {
    ogTitle.setAttribute('content', translations[lang].page_title);
  }
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && translations[lang].page_desc) {
    ogDesc.setAttribute('content', translations[lang].page_desc);
  }

  // Trigger radar UI update to refresh alert box text in current lang
  if (typeof updateRadarSimulation === 'function') {
    updateRadarSimulation();
  }
}

// ==========================================
// 3. INTERACTIVE RADAR / BLIND SPOT SIMULATION
// ==========================================
const canvas = document.getElementById('radarCanvas');
let ctx = null;
if (canvas) {
  ctx = canvas.getContext('2d');
}

// State for simulation demo
const simState = {
  truckY: 130,      // Truck position on oncoming lane
  bikeY: 70,        // Bike position (behind truck)
  turnProgress: 35, // Ego vehicle right turn %
  radarPulse: 0
};

function initRadarDemo() {
  if (!canvas || !ctx) return;

  // Resize canvas according to device pixel ratio
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    drawRadar();
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Bind Sliders
  const truckSlider = document.getElementById('truckSlider');
  const bikeSlider = document.getElementById('bikeSlider');
  const turnSlider = document.getElementById('turnSlider');

  if (truckSlider) {
    truckSlider.addEventListener('input', (e) => {
      simState.truckY = parseFloat(e.target.value);
      document.getElementById('truckVal').textContent = `${simState.truckY}m`;
      updateRadarSimulation();
    });
  }

  if (bikeSlider) {
    bikeSlider.addEventListener('input', (e) => {
      simState.bikeY = parseFloat(e.target.value);
      document.getElementById('bikeVal').textContent = `${simState.bikeY}m`;
      updateRadarSimulation();
    });
  }

  if (turnSlider) {
    turnSlider.addEventListener('input', (e) => {
      simState.turnProgress = parseFloat(e.target.value);
      document.getElementById('turnVal').textContent = `${simState.turnProgress}%`;
      updateRadarSimulation();
    });
  }

  // Animation Loop for Radar Pulse
  function animateRadar() {
    simState.radarPulse = (simState.radarPulse + 0.02) % 1;
    drawRadar();
    requestAnimationFrame(animateRadar);
  }
  requestAnimationFrame(animateRadar);
}

// Line intersection helper
function lineIntersectsRect(p1, p2, rect) {
  // rect: {x, y, w, h}
  const minX = rect.x - rect.w / 2;
  const maxX = rect.x + rect.w / 2;
  const minY = rect.y - rect.h / 2;
  const maxY = rect.y + rect.h / 2;

  function lineIntersectsLine(a1, a2, b1, b2) {
    const denom = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    if (denom === 0) return false;
    const ua = ((b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x)) / denom;
    const ub = ((a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x)) / denom;
    return ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1;
  }

  const rTL = { x: minX, y: minY };
  const rTR = { x: maxX, y: minY };
  const rBL = { x: minX, y: maxY };
  const rBR = { x: maxX, y: maxY };

  return (
    lineIntersectsLine(p1, p2, rTL, rTR) ||
    lineIntersectsLine(p1, p2, rTR, rBR) ||
    lineIntersectsLine(p1, p2, rBR, rBL) ||
    lineIntersectsLine(p1, p2, rBL, rTL)
  );
}

function updateRadarSimulation() {
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  const centerX = width / 2;
  const centerY = height / 2;

  // Ego position (South approach turning right to East)
  const egoT = simState.turnProgress / 100;
  const egoStartX = centerX + 30;
  const egoStartY = centerY + 130;
  const egoTurnX = centerX - 40;
  const egoTurnY = centerY - 10;

  const egoX = egoStartX + (egoTurnX - egoStartX) * egoT;
  const egoY = egoStartY + (egoTurnY - egoStartY) * egoT;

  // Truck position (North approach in lane 1)
  const truckX = centerX - 25;
  const truckY = centerY - simState.truckY;
  const truckW = 32;
  const truckH = 65;

  // Bike position (North approach in lane 2 - straight lane)
  const bikeX = centerX - 60;
  const bikeY = centerY - simState.bikeY;

  // Raycast check: Ray from Ego to Bike
  const isBlocked = lineIntersectsRect(
    { x: egoX, y: egoY },
    { x: bikeX, y: bikeY },
    { x: truckX, y: truckY, w: truckW, h: truckH }
  );

  const alertBox = document.getElementById('radarAlertBox');
  if (alertBox) {
    if (isBlocked) {
      alertBox.className = 'state-alert-box blind-spot';
      alertBox.textContent = translations[currentLang].demo_alert_blind;
    } else {
      alertBox.className = 'state-alert-box clear';
      alertBox.textContent = translations[currentLang].demo_alert_clear;
    }
  }

  simState._lastCalc = { egoX, egoY, truckX, truckY, truckW, truckH, bikeX, bikeY, isBlocked };
}

function drawRadar() {
  if (!ctx || !canvas) return;

  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const centerX = width / 2;
  const centerY = height / 2;

  ctx.clearRect(0, 0, width, height);

  // Background Grid & Radar Circles
  ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)';
  ctx.lineWidth = 1;

  for (let r = 40; r < 300; r += 50) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Crosshairs
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();

  // Radar Pulse Wave
  ctx.beginPath();
  ctx.arc(centerX, centerY, simState.radarPulse * 280, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(0, 242, 254, ${0.4 * (1 - simState.radarPulse)})`;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw Roads (Dual Lane Intersection)
  const roadW = 160;
  ctx.fillStyle = '#0a1224';
  // North-South
  ctx.fillRect(centerX - roadW / 2, 0, roadW, height);
  // East-West
  ctx.fillRect(0, centerY - roadW / 2, width, roadW);

  // Road Borders
  ctx.strokeStyle = 'rgba(0, 242, 254, 0.25)';
  ctx.lineWidth = 2;
  // NS borders
  ctx.strokeRect(centerX - roadW / 2, 0, roadW, height);
  // EW borders
  ctx.strokeRect(0, centerY - roadW / 2, width, roadW);

  // Lane Divider Dashes
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.setLineDash([8, 8]);
  // Centerlines
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, centerY - roadW / 2);
  ctx.moveTo(centerX, centerY + roadW / 2);
  ctx.lineTo(centerX, height);
  ctx.moveTo(0, centerY);
  ctx.lineTo(centerX - roadW / 2, centerY);
  ctx.moveTo(centerX + roadW / 2, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
  ctx.setLineDash([]);

  // Get coordinates
  if (!simState._lastCalc) updateRadarSimulation();
  const { egoX, egoY, truckX, truckY, truckW, truckH, bikeX, bikeY, isBlocked } = simState._lastCalc;

  // 1. Draw Truck (Opposing heavy vehicle)
  ctx.save();
  ctx.translate(truckX, truckY);
  ctx.fillStyle = '#f59e0b'; // Amber truck
  ctx.fillRect(-truckW / 2, -truckH / 2, truckW, truckH);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 2;
  ctx.strokeRect(-truckW / 2, -truckH / 2, truckW, truckH);

  // Truck Label
  ctx.fillStyle = '#000';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('TRUCK', 0, 3);
  ctx.restore();

  // 2. Draw Motorcycle (Opposing through-traffic)
  ctx.save();
  ctx.translate(bikeX, bikeY);
  ctx.fillStyle = isBlocked ? '#ff3366' : '#a855f7';
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Motorcycle Label
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('BIKE', 0, 18);
  ctx.restore();

  // 3. Draw Ego Vehicle (Turning Right)
  ctx.save();
  ctx.translate(egoX, egoY);
  const angle = (simState.turnProgress / 100) * (Math.PI / 2);
  ctx.rotate(-angle);
  ctx.fillStyle = '#00f2fe';
  ctx.fillRect(-14, -24, 28, 48);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.strokeRect(-14, -24, 28, 48);

  // Ego Driver Marker (Right hand drive or driver seat position)
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(6, -6, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#060913';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('EGO', 0, 4);
  ctx.restore();

  // 4. Draw Raycast Sightline Laser
  ctx.beginPath();
  ctx.moveTo(egoX, egoY);
  ctx.lineTo(bikeX, bikeY);

  if (isBlocked) {
    // BLOCKED: Neon Red with Dash
    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 4]);
    ctx.shadowColor = '#ff3366';
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;

    // Red Blind Spot X indicator on the ray intersection
    ctx.fillStyle = '#ff3366';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('✕ BLOCKED', (egoX + bikeX) / 2 - 20, (egoY + bikeY) / 2);
  } else {
    // CLEAR: Neon Green
    ctx.strokeStyle = '#00ff87';
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    ctx.shadowColor = '#00ff87';
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Green Sightline Check
    ctx.fillStyle = '#00ff87';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('✓ VISIBLE', (egoX + bikeX) / 2 - 20, (egoY + bikeY) / 2);
  }
}

// ==========================================
// 4. FAQ ACCORDION LOGIC
// ==========================================
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ==========================================
// 5. NAVBAR SCROLL & MOBILE MENU
// ==========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

// ==========================================
// 6. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Determine initial language: URL query > localStorage > navigator.language > 'ja'
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  let initialLang = 'ja';

  if (paramLang === 'en' || paramLang === 'ja') {
    initialLang = paramLang;
  } else {
    try {
      const stored = localStorage.getItem('intersection_lp_lang');
      if (stored === 'en' || stored === 'ja') {
        initialLang = stored;
      } else if (navigator.language && !navigator.language.startsWith('ja')) {
        initialLang = 'en';
      }
    } catch (e) {}
  }

  setLanguage(initialLang, false);

  // Bind Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang, true);
    });
  });

  initRadarDemo();
  initFaq();
  initNavbar();
});
