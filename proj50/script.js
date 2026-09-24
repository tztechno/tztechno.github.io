/**
 * Tokyo Haneda Airport (RJTT) Flight Landing Simulator - Landing Page Script
 * Features:
 *  - Full Japanese / English Bilingual i18n System with LocalStorage Memory
 *  - Cyber Matrix Flight Vector Animated Canvas Background
 *  - 60FPS Primary Flight Display (PFD) HUD & Runway Landing Simulator on Canvas
 *  - Realistic PAPI 4-Light Indicator & ILS Glideslope Calculation
 *  - Touchdown Landing Scoring System (Vertical Speed, Centerline, Touchdown Zone)
 *  - 4 Preset Landing Scenarios (34L Bay Curve, 34R ILS, 16L City RNAV, TOGA Go-Around)
 *  - Manual 6-DOF Keyboard & Touch/Mouse Flight Controls
 *  - Web Audio Procedural Jet Turbine & Touchdown Sound Synthesizer
 *  - Responsive Mobile Navigation & FAQ Accordion
 */

// ============================================================================
// 1. i18n Translation Dictionary (Japanese / English)
// ============================================================================
const i18nData = {
  ja: {
    // Navigation
    navDemo: "体験HUDシミュレーター",
    navFeatures: "特徴・強み",
    navRoute: "着陸ルート",
    navAvionics: "計器・操作",
    navCompare: "製品比較",
    navPricing: "価格・DL",
    navFaq: "よくある質問",
    navGetNow: "今すぐ購入 ➔",
    langSwitchText: "English",

    // Hero Section
    heroBadge: "PRECISION FLIGHT SIMULATION SERIES | DESKTOP EDITION",
    heroTitle: `<span class="text-white font-orbitron">Tokyo Haneda Airport</span><br><span class="gradient-text neon-text">Flight Landing Simulator</span>`,
    heroLead: `羽田空港（RJTT）滑走路 34L/34R/16L への進入・着陸アプローチを高精度に再現。<br class="desktop-br">国土地理院の実測DEM地形メッシュ・東京湾航空写真、本格6自由度空力モデル、PAPI/ILS計器アプローチ、接地採点、昼夜天候変化、6視点カメラを完全ローカルで搭載したネイティブ・デスクトップ版フライトシミュレーター。`,
    heroTag1: "本格 6自由度(6-DOF) 空力＆地面効果",
    heroTag2: "国土地理院 10m DEM地形 ＆ 東京湾航空写真",
    heroTag3: "実機仕様 PFD / HUD ＆ 高精度 PAPI 誘導",
    heroTag4: "Tauri 2.0 超軽量・高FPS・完全オフライン",
    heroCtaSub: "BUY DESKTOP EDITION / 買い切り ¥1,980",
    heroCtaMain: "公式ストアで購入・即時ダウンロード",
    heroCtaDemo: "ブラウザでHUDを即体験",
    platformTitle: "対応環境:",
    heroFloatingBadge: "RJTT RUNWAY 34L/34R LANDING CORE",
    heroStatus: "AVIONICS & LANDING SCORE ACTIVE",

    // Stats Bar
    statLatency: "超低遅延・Tauriネイティブ",
    statPhysics: "本格空力＆地面効果",
    statTerrain: "国土地理院 実測標高メッシュ",
    statCameras: "6視点カメラ＆4着陸シナリオ",
    statPriceVal: "¥1,980",
    statPrice: "永久ライセンス・買い切り",

    // Demo Section
    demoBadge: "INTERACTIVE AVIONICS PLAYGROUND",
    demoTitle: `ブラウザ上で体感！ <span class="gradient-text">実機仕様 PFD ＆ 羽田着陸シミュレーター</span>`,
    demoDesc: "羽田名物の東京湾旋回や都心進入をブラウザ上でシミュレーション！4つの進入シナリオ切替、PAPI進入角灯の確認、手動フレア操作、着陸スコア採点、ジェットエンジン音の試聴が可能です。",
    demoWpLabel: "ACTIVE APPROACH",
    demoScenarioTitle: "進入シナリオ選択 (Approach Scenario):",
    scen34L: "34L 東京湾旋回 (Bay Curve)",
    scen34LDesc: "房総沖から東京湾90°旋回で進入",
    scen34R: "34R 直線ILS (Straight ILS)",
    scen34RDesc: "東京湾海上から高精度ILS進入",
    scen16L: "16L 都心進入 (City RNAV)",
    scen16LDesc: "新宿・品川上空を通過する3.45°降下",
    scenGoAround: "TOGA 復行 (Go-Around)",
    scenGoAroundDesc: "決心高度での着陸復行・フル推力上昇",

    demoModeLabel: "操縦モード (Flight Mode):",
    demoModeAutoBtn: "自動アプローチ再生",
    demoModeManualBtn: "手動操縦 (6自由度)",

    demoThrottleLabel: "スロットル推力 (Throttle):",
    demoFlapsLabel: "フラップ設定 (Flaps):",
    demoGearLabel: "ランディングギア (Gear):",
    demoLightingLabel: "時間帯・照明 (Environment):",
    lightDay: "昼間",
    lightSunset: "夕景",
    lightNight: "夜景",

    demoBtnFlare: "FLARE & TOUCHDOWN / 接地採点テスト",
    demoBtnRestart: "Replay / アプローチ初期化",
    demoAudioBtnOn: "ENGINE SOUND: ON",
    demoAudioBtnOff: "ENGINE SOUND: OFF",
    demoStatusAuto: "自動進入中: PAPI進入角灯（白2・赤2）とILSグライドスロープに従って降下中。",
    demoStatusManual: "手動操縦中: [W/S]機首上げ下げ、[A/D]ロール、画面ドラッグでも操縦可能！適正速度138ktでフレア接地を行ってください。",

    // Score Modal
    scoreModalTitle: "LANDING SCORE REPORT",
    scoreVsLabel: "接地垂直降下率 (Vertical Speed):",
    scoreAlignLabel: "中心線偏差 (Centerline Deviation):",
    scoreZoneLabel: "接地帯ゾーン (Touchdown Zone):",
    scoreIasLabel: "接地時対気速度 (Touchdown Speed):",
    scoreBtnClose: "CLOSE REPORT / 計器画面に戻る",

    // Features Section
    featuresBadge: "CORE CAPABILITIES",
    featuresTitle: `羽田の空を極限のリアルで再現する <span class="gradient-text">6大アドバンテージ</span>`,
    featuresDesc: "巨大なストレージ容量や高額な月額課金は不要。国土地理院実測DEMと精密6自由度空力モデルをTauri 2.0で超軽量にPCローカル実行。",
    feat1Title: "国土地理院 10m DEM地形<br>＆ 東京湾・都心航空写真",
    feat1Text: "羽田空港（RJTT）、東京湾アクアライン（海ほたる）、房総半島、レインボーブリッジ、新宿・渋谷・品川の高精度メッシュを再現。立体的起伏とリアルな夜景イルミネーションが眼下に広がります。",
    feat1Tag: "#実測DEM標高 #東京湾オルソメッシュ #都心3D",
    feat2Title: "本格 6自由度 (6-DOF) 空力<br>＆ 地面効果（Ground Effect）",
    feat2Text: "主翼迎角、失速特性、フラップ展開時の揚力増加と誘導抗力、スポイラーによる揚力減衰、接地直前の地面効果クッション現象（Ground Effect）までを精緻に物理演算。本格的なフレア接地を体感できます。",
    feat2Tag: "#6DOF空力 #地面効果 #逆噴射リバース",
    feat3Title: "実機仕様 PFD / HUD<br>＆ 高精度 PAPI 進入角灯",
    feat3Text: "人工水平儀、対気速度（IAS）、気圧高度（ALT）、昇降率（VSI）、ILSグライドスロープ・ローカライザーをリアルタイム表示。実物仕様の4灯式PAPI（白2・赤2で適正角3.0°）による正確な進入誘導を搭載。",
    feat3Tag: "#PFD/HUD #PAPI4灯誘導 #ILS計器進入",
    feat4Title: "リアルタイム着陸採点<br>＆ 接地テレメトリ解析",
    feat4Text: "接地瞬間の沈下率（Vertical Speed）、滑走路センターラインからの偏位、接地帯（タッチダウンゾーン）、進入速度を自動解析。極上接地「バターランディング」からランクS〜Fの厳格な採点が行われます。",
    feat4Tag: "#着陸採点 #バターランディング #沈下率解析",
    feat5Title: "臨場感あふれる6視点カメラ<br>＆ 昼夕夜ライティング",
    feat5Text: "チェイス後方視点、操縦桿を握るパイロット視点、右主翼・客席パッセンジャー視点、高さ115mの羽田新管制塔視点、滑走路端スポット視点、全方位フリー視点を瞬時に切り替え可能。",
    feat5Tag: "#コックピット視点 #115m新管制塔 #主翼ビュー",
    feat6Title: "Tauri 2.0 ネイティブ高速動作<br>＆ 完全買い切り永久版",
    feat6Text: "Rust + Tauri 2.0 による極小ファイルサイズ（Mac 10MB / Win 5MB）と低メモリ消費。ブラウザ不要で瞬時に起動し、低スペックPCでも60+ FPSの超滑らかな描画を実現。追加課金ゼロの買い切り永久版。",
    feat6Tag: "#容量わずか数MB #高速起動 #完全買い切り",

    // Approach Scenarios Section
    routeBadge: "APPROACH & NAVIGATION",
    routeTitle: `羽田名物アプローチ <span class="gradient-text">着陸シナリオ完全解説</span>`,
    routeDesc: "東京国際空港（羽田 - RJTT）で実際に運用されている代表的な着陸アプローチプロファイルを忠実に再現しています。",
    route1Title: "34L 東京湾旋回（Tokyo Bay Curve Approach）",
    route1Text: "房総半島沖から海ほたる上空を経て東京湾上空へ降下。羽田名物「東京湾90°右旋回（ベイカーブ）」でA滑走路（34L）の進入軸へ滑らかにアラインし、進入角3.0°で着陸進入を行います。",
    route2Title: "34R 直線ILS進入（Straight ILS Approach）",
    route2Text: "東京湾海上からC滑走路（34R）へ一直線に進入する標準計器進入ルート。高精度のILSローカライザー・グライドスロープとPAPI計器誘導に従って長大な滑走路へアプローチします。",
    route3Title: "16L 都心進入（Tokyo City RNAV Approach）",
    route3Text: "新宿・代々木・品川・大井埠頭の真上を縦断降下する話題の新進入ルート。眼下に都心の高層ビル群を望みながら、通常より急な進入角 3.45° でB滑走路（16L）へアプローチします。",
    route4Title: "TOGA 復行（Missed Approach / Go-Around）",
    route4Text: "決心高度（約150ft）で不安定進入・突風により着陸復行を発令。フル推力（TOGA）で急上昇し、ギア・フラップを格納しながら東京湾沖合へ安全離脱する緊急プロシージャです。",

    // Avionics & Shortcuts Section
    avionicsBadge: "FLIGHT DECK & SHORTCUTS",
    avionicsTitle: `進入角灯(PAPI)の見方 ＆ <span class="gradient-text">操作一覧</span>`,
    avionicsDesc: "PAPI 4灯のカラーパターンによる進入高度判定と、直感的なキーボード操作でリアルな操縦を楽しめます。",
    papiTitle: "PAPI (進入角指示灯) 判定ガイド",
    papi4W: "高すぎる (Too High)",
    papi4WAdv: "スロットルを少し絞り、降下率を増やす",
    papi3W1R: "やや高い (Slightly High)",
    papi3W1RAdv: "緩やかに適正パスへ合流",
    papi2W2R: "適正パス (On Glide Path: 3.0°)",
    papi2W2RAdv: "理想的な進入角度。現在のピッチと出力を維持",
    papi1W3R: "やや低い (Slightly Low)",
    papi1W3RAdv: "スロットルを少し足して高度を補正",
    papi4R: "低すぎる / 危険 (Too Low / Danger)",
    papi4RAdv: "すぐに機首を上げ、推力を増して上昇パスへ復帰",

    shortcutsTitle: "キーボードショートカット一覧",

    // Comparison Section
    compareBadge: "BENCHMARK & VALUE",
    compareTitle: `他フライトシミュレーターとの <span class="gradient-text">徹底スペック比較</span>`,
    compareDesc: "大容量ストレージや高額PCを要求する巨大シミュレーターと一線を画す、圧倒的な軽快さと手軽さを実現。",

    // Pricing Section
    priceTag: "PERMANENT LICENSE • ONE-TIME PURCHASE",
    priceTitle: "Tokyo Haneda Flight Landing Simulator",
    priceSub: "一度の購入で永久利用可能。サブスクリプションや追加課金なしの完全買い切り型です。",
    priceTax: "(税込・買い切り)",
    btnWinText: "Windows版を購入する (Stripe決済)",
    btnMacText: "macOS版を購入する (Stripe決済)",
    trust1: "Stripe暗号化決済",
    trust2: "決済後 即時ダウンロード",
    trust3: "永久アップデート無償",
    trust4: "完全オフライン動作保証",

    // FAQ Section
    faqBadge: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: `よくあるご質問 <span class="gradient-text">(FAQ)</span>`,
    faqDesc: "ご購入前・インストール時によくいただく質問と回答をまとめました。",
    faq1Q: "Q. MacとWindowsの両方に対応していますか？",
    faq1A: "はい、macOS（Apple Silicon M1/M2/M3/M4 および Intel Mac）と Windows 10/11（64bit）の両プラットフォームにネイティブ対応しています。ご購入時にご利用のOS用インストーラーを即座にダウンロードいただけます。",
    faq2Q: "Q. ハイスペックなゲーミングPCが必要ですか？",
    faq2A: "不要です。本作は軽量なTauri 2.0フレームワークと最適化されたThree.js WebGLパイプラインを採用しているため、一般的なノートPC（Intel UHD Graphics / Apple M1内蔵GPUなど）でも60 FPSの非常に滑らかな動作が可能です。",
    faq3Q: "Q. ジョイスティックやゲームパッドに対応していますか？",
    faq3A: "キーボード操作（W/A/S/D・矢印キー）、マウスによる操縦に標準対応しているほか、標準的なUSBゲームパッド（DirectInput / XInput）でのピッチ・ロール入力にも対応しています。",
    faq4Q: "Q. なぜファイルサイズが数MBと圧倒的に小さいのですか？",
    faq4A: "OS標準のネイティブWebビューを活用するTauri 2.0アーキテクチャと、国土地理院DEMデータの高度な圧縮・最適化アルゴリズムを採用しているためです。重厚なChromiumブラウザを内包せず、無駄な数GBのダウンロードを一切必要としません。",
    faq5Q: "Q. 購入後の決済方法とダウンロード手順は？",
    faq5A: "決済は国際規格の安全なStripe決済（クレジットカード、Apple Pay、Google Pay対応）を利用しています。お支払い完了後、即座にダウンロード画面が表示され、登録メールアドレスにも永続ダウンロードリンクが送信されます。"
  },

  en: {
    // Navigation
    navDemo: "Live PFD Demo",
    navFeatures: "Features",
    navRoute: "Approaches",
    navAvionics: "Avionics",
    navCompare: "Comparison",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navGetNow: "Buy Now ➔",
    langSwitchText: "日本語",

    // Hero Section
    heroBadge: "PRECISION FLIGHT SIMULATION SERIES | DESKTOP EDITION",
    heroTitle: `<span class="text-white font-orbitron">Tokyo Haneda Airport</span><br><span class="gradient-text neon-text">Flight Landing Simulator</span>`,
    heroLead: `Faithfully experience precision approach and landing onto Tokyo Haneda Airport (RJTT) Runways 34L, 34R, and 16L.<br class="desktop-br">Powered by GSI 10m DEM real terrain, Tokyo Bay satellite ortho mesh, 6-DOF aerodynamics with Ground Effect, PAPI/ILS instruments, landing scoring, and 6 camera views in a native desktop app.`,
    heroTag1: "Authentic 6-DOF Aerodynamics & Ground Effect",
    heroTag2: "GSI 10m DEM Elevation & Tokyo Bay Ortho Mesh",
    heroTag3: "Glass Cockpit PFD & Precision PAPI Guidance",
    heroTag4: "Tauri 2.0 Ultra-Lightweight & 100% Offline",
    heroCtaSub: "BUY DESKTOP EDITION / ¥1,980 One-Time",
    heroCtaMain: "Buy on Official Store & Instant Download",
    heroCtaDemo: "Try Live PFD Demo",
    platformTitle: "Supported Platforms:",
    heroFloatingBadge: "RJTT RUNWAY 34L/34R LANDING CORE",
    heroStatus: "AVIONICS & LANDING SCORE ACTIVE",

    // Stats Bar
    statLatency: "Zero Latency Tauri Native",
    statPhysics: "6-DOF Aerodynamics & Ground Effect",
    statTerrain: "GSI 10m DEM Elevation Mesh",
    statCameras: "6 Camera Views & 4 Approaches",
    statPriceVal: "¥1,980",
    statPrice: "One-Time Permanent License",

    // Demo Section
    demoBadge: "INTERACTIVE AVIONICS PLAYGROUND",
    demoTitle: `Experience in Browser! <span class="gradient-text">Glass Cockpit PFD & Landing Simulator</span>`,
    demoDesc: "Simulate Haneda's famous Tokyo Bay 90° curve or RNAV city approach right inside your browser! Switch scenarios, verify PAPI 4-light glidepath, perform manual flare, and test real-time touchdown scoring.",
    demoWpLabel: "ACTIVE APPROACH",
    demoScenarioTitle: "Approach Scenario Selection:",
    scen34L: "34L Tokyo Bay Curve",
    scen34LDesc: "90° bay curve lineup from Boso",
    scen34R: "34R Straight ILS",
    scen34RDesc: "Precision ILS glideslope approach",
    scen16L: "16L City RNAV",
    scen16LDesc: "3.45° steep descent over Shinjuku",
    scenGoAround: "TOGA Go-Around",
    scenGoAroundDesc: "Missed approach climb at Decision Height",

    demoModeLabel: "Flight Mode:",
    demoModeAutoBtn: "Auto Approach Replay",
    demoModeManualBtn: "Manual 6-DOF Flight",

    demoThrottleLabel: "Throttle (N1 %):",
    demoFlapsLabel: "Flaps Setting:",
    demoGearLabel: "Landing Gear:",
    demoLightingLabel: "Time of Day / Lighting:",
    lightDay: "Day",
    lightSunset: "Sunset",
    lightNight: "Night",

    demoBtnFlare: "FLARE & TOUCHDOWN / Test Landing Score",
    demoBtnRestart: "Replay / Reset Approach",
    demoAudioBtnOn: "ENGINE SOUND: ON",
    demoAudioBtnOff: "ENGINE SOUND: OFF",
    demoStatusAuto: "Auto Approach: Following 3.0° ILS glideslope and PAPI guidance (2 White, 2 Red).",
    demoStatusManual: "Manual Flight: [W/S] Pitch, [A/D] Roll, or drag canvas. Maintain 138 kt approach speed for butter flare.",

    // Score Modal
    scoreModalTitle: "LANDING SCORE REPORT",
    scoreVsLabel: "Touchdown Vertical Speed:",
    scoreAlignLabel: "Centerline Alignment:",
    scoreZoneLabel: "Touchdown Zone:",
    scoreIasLabel: "Touchdown Airspeed:",
    scoreBtnClose: "CLOSE REPORT / Return to Avionics",

    // Features Section
    featuresBadge: "CORE CAPABILITIES",
    featuresTitle: `Recreating Tokyo Sky with Utmost Realism <span class="gradient-text">6 Key Advantages</span>`,
    featuresDesc: "No huge gigabyte downloads or recurring subscriptions. Real GSI DEM elevation and 6-DOF flight physics executed locally at high FPS with Tauri 2.0.",
    feat1Title: "GSI 10m DEM Elevation<br>& Tokyo Bay Aerial Ortho Mesh",
    feat1Text: "High-precision DEM elevation mesh and satellite ortho imagery covering Haneda Airport (RJTT), Tokyo Bay Aqua-Line, Boso Peninsula, Rainbow Bridge, and Shinjuku/Shinagawa skyline.",
    feat1Tag: "#RealDEMElevation #TokyoBayMesh #City3D",
    feat2Title: "Authentic 6-DOF Aerodynamics<br>& Ground Effect Cushion",
    feat2Text: "Precise physics simulation of angle of attack, stall characteristics, flap lift/drag polar, spoiler lift dump, reverse thrust, and the distinct ground effect cushion right before touchdown.",
    feat2Tag: "#6DOFAerodynamics #GroundEffect #ThrustReverser",
    feat3Title: "Glass Cockpit PFD / HUD<br>& Precision PAPI 4-Light System",
    feat3Text: "Primary Flight Display (PFD) with artificial horizon, airspeed tape, barometric altitude, vertical speed indicator, and real 4-light PAPI visual guidance (2 White / 2 Red for optimal 3.0° glide).",
    feat3Tag: "#PFDHUD #PAPI4Lights #ILSApproach",
    feat4Title: "Real-Time Touchdown Scoring<br>& Landing Telemetry Analysis",
    feat4Text: "Instant evaluation of vertical touchdown descent rate, runway centerline deviation, touchdown zone distance, and approach speed. Scores from S-Rank Butter Landing to F-Rank Overrun.",
    feat4Tag: "#LandingScore #ButterLanding #DescentRate",
    feat5Title: "Immersive 6 Camera Views<br>& Dynamic Day/Sunset/Night",
    feat5Text: "Seamlessly switch between Chase view, Cockpit pilot perspective, Passenger wing view, 115m Haneda Tower view, Runway spotter view, and 360° free orbit camera.",
    feat5Tag: "#CockpitView #115mTower #WingCam",
    feat6Title: "Tauri 2.0 Native Performance<br>& Permanent One-Time License",
    feat6Text: "Ultra-compact file size (Mac 10MB / Win 5MB) and minimal memory footprint built on Rust + Tauri 2.0. Instant launch and smooth 60+ FPS on standard laptops with zero recurring fees.",
    feat6Tag: "#OnlyFewMB #InstantLaunch #OneTimePurchase",

    // Approach Scenarios Section
    routeBadge: "APPROACH & NAVIGATION",
    routeTitle: `Haneda Signature Approaches <span class="gradient-text">Flight Profiles</span>`,
    routeDesc: "Faithful recreation of actual real-world operational landing approaches at Tokyo International Airport (Haneda - RJTT).",
    route1Title: "34L Tokyo Bay Curve Approach",
    route1Text: "Descend from Boso Peninsula over Tokyo Bay, execute the famous 90° right curve (Bay Curve) to align with Runway 34L centerline, and establish a 3.0° precision descent.",
    route2Title: "34R Straight ILS Approach",
    route2Text: "Standard straight-in instrument landing approach from Tokyo Bay onto Runway 34R, guided by precision ILS localizer, glideslope diamonds, and PAPI lights.",
    route3Title: "16L Tokyo City RNAV Approach",
    route3Text: "The spectacular RNAV city approach passing directly above Shinjuku, Yoyogi, and Shinagawa skyscrapers with a steeper 3.45° glidepath onto Runway 16L.",
    route4Title: "TOGA Missed Approach / Go-Around",
    route4Text: "Emergency missed approach procedure triggered at Decision Height (150ft) due to windshear, executing maximum TOGA thrust climb and retraction toward safe Tokyo Bay holding.",

    // Avionics & Shortcuts Section
    avionicsBadge: "FLIGHT DECK & SHORTCUTS",
    avionicsTitle: `PAPI Light Guide & <span class="gradient-text">Keyboard Shortcuts</span>`,
    avionicsDesc: "Master the 4-light PAPI visual glideslope indicator and standard flight deck keyboard controls.",
    papiTitle: "PAPI (Precision Approach Path Indicator) Guide",
    papi4W: "Too High",
    papi4WAdv: "Reduce throttle slightly and increase descent rate",
    papi3W1R: "Slightly High",
    papi3W1RAdv: "Gently merge back onto nominal glidepath",
    papi2W2R: "On Glide Path (3.0°)",
    papi2W2RAdv: "Ideal approach slope. Maintain pitch & thrust",
    papi1W3R: "Slightly Low",
    papi1W3RAdv: "Add slight throttle to regain glidepath",
    papi4R: "Too Low / Dangerous",
    papi4RAdv: "Pitch up immediately and increase power",

    shortcutsTitle: "Keyboard Shortcut Mappings",

    // Comparison Section
    compareBadge: "BENCHMARK & VALUE",
    compareTitle: `Comprehensive Benchmark <span class="gradient-text">vs Other Simulators</span>`,
    compareDesc: "Unrivaled agility, instant startup, and lightweight precision without demanding hundreds of gigabytes of disk space.",

    // Pricing Section
    priceTag: "PERMANENT LICENSE • ONE-TIME PURCHASE",
    priceTitle: "Tokyo Haneda Flight Landing Simulator",
    priceSub: "One-time purchase for lifetime access. No subscriptions or recurring fees.",
    priceTax: "(Tax Included • Permanent)",
    btnWinText: "Buy Windows Edition (Stripe Checkout)",
    btnMacText: "Buy macOS Edition (Stripe Checkout)",
    trust1: "Stripe Encrypted Checkout",
    trust2: "Instant Download After Payment",
    trust3: "Free Lifetime Updates",
    trust4: "100% Offline Standalone",

    // FAQ Section
    faqBadge: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: `Frequently Asked <span class="gradient-text">Questions (FAQ)</span>`,
    faqDesc: "Answers to common questions regarding installation, requirements, and features.",
    faq1Q: "Q. Does it run on both Mac and Windows?",
    faq1A: "Yes, it runs natively on macOS (Apple Silicon M1/M2/M3/M4 & Intel) and Windows 10/11 (64-bit). You will receive instant download access for both installers.",
    faq2Q: "Q. Do I need an expensive high-end gaming PC?",
    faq2A: "No! Thanks to the ultra-efficient Tauri 2.0 framework and optimized WebGL rendering, it runs smoothly at 60 FPS even on regular office laptops and Apple M1 internal GPUs.",
    faq3Q: "Q. Are flight joysticks and game controllers supported?",
    faq3A: "Yes, keyboard (W/A/S/D & arrow keys) and mouse navigation are supported out of the box, as well as standard USB flight joysticks and gamepads.",
    faq4Q: "Q. Why is the download size only a few megabytes?",
    faq4A: "It utilizes the OS-native system Webview via Tauri 2.0 and highly optimized compressed DEM elevation tiles, eliminating the need to bundle multi-gigabyte Chromium runtimes.",
    faq5Q: "Q. What is the purchase process and delivery?",
    faq5A: "Payments are processed securely through Stripe (Credit Card, Apple Pay, Google Pay). Upon completion, you will immediately be directed to the download screen and receive an email with your permanent download link."
  }
};

// ============================================================================
// 2. Global State & Language Management
// ============================================================================
let currentLang = 'ja';

function initI18n() {
  const savedLang = localStorage.getItem('cm_haneda_lang');
  if (savedLang && (savedLang === 'ja' || savedLang === 'en')) {
    currentLang = savedLang;
  } else {
    const browserLang = navigator.language || navigator.userLanguage || '';
    if (browserLang.startsWith('en')) {
      currentLang = 'en';
    } else {
      currentLang = 'ja';
    }
  }
  updateLanguageUI();

  // Bind Language Buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'ja' ? 'en' : 'ja';
      localStorage.setItem('cm_haneda_lang', currentLang);
      updateLanguageUI();
    });
  });
}

function updateLanguageUI() {
  const dict = i18nData[currentLang];
  document.documentElement.lang = currentLang;

  // Text contents
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // HTML contents
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Button language switcher labels
  document.querySelectorAll('.lang-toggle-btn .lang-label').forEach(el => {
    el.textContent = dict.langSwitchText;
  });

  // Update Status Banner
  updateStatusBanner();
}

// ============================================================================
// 3. Cyber Matrix Animated Canvas Background
// ============================================================================
function initCyberBackground() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const numParticles = 45;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4 - 0.2; // Slight upward drift
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.4 ? 'rgba(6, 182, 212, ' : 'rgba(16, 185, 129, ';
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#06b6d4';
      ctx.fill();
    }
  }

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  let time = 0;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Subtle Vector Grid
    const gridSize = 64;
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Connecting lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    time += 0.01;
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================================================
// 4. Web Audio Procedural Sound Synthesizer
// ============================================================================
let audioCtx = null;
let soundEnabled = false;
let jetEngineNoiseNode = null;
let jetEngineGain = null;
let jetFilter = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function startJetEngineSound() {
  if (!audioCtx || !soundEnabled) return;
  stopJetEngineSound();

  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  jetFilter = audioCtx.createBiquadFilter();
  jetFilter.type = 'lowpass';
  jetFilter.frequency.setValueAtTime(320, audioCtx.currentTime);

  jetEngineGain = audioCtx.createGain();
  jetEngineGain.gain.setValueAtTime(0.08, audioCtx.currentTime);

  whiteNoise.connect(jetFilter);
  jetFilter.connect(jetEngineGain);
  jetEngineGain.connect(audioCtx.destination);

  whiteNoise.start();
  jetEngineNoiseNode = whiteNoise;
}

function stopJetEngineSound() {
  if (jetEngineNoiseNode) {
    try {
      jetEngineNoiseNode.stop();
      jetEngineNoiseNode.disconnect();
    } catch (e) {}
    jetEngineNoiseNode = null;
  }
}

function updateJetSoundPitch(throttlePercent) {
  if (jetFilter && audioCtx) {
    const freq = 280 + (throttlePercent / 100) * 850;
    jetFilter.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.1);
  }
  if (jetEngineGain && audioCtx) {
    const vol = 0.04 + (throttlePercent / 100) * 0.08;
    jetEngineGain.gain.setTargetAtTime(vol, audioCtx.currentTime, 0.1);
  }
}

function playTouchdownSound() {
  if (!audioCtx || !soundEnabled) return;
  // Squeal / Chirp sound on touchdown
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.35);

  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.35);
}

function playPapiChime() {
  if (!audioCtx || !soundEnabled) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(987.77, audioCtx.currentTime); // B5 note
  gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}

// ============================================================================
// 5. 60FPS Primary Flight Display (PFD) HUD & Runway Simulator
// ============================================================================
let simState = {
  mode: 'auto', // 'auto' | 'manual'
  scenario: '34L', // '34L' | '34R' | '16L' | 'goaround'
  env: 'sunset', // 'day' | 'sunset' | 'night'
  
  // Flight telemetry
  altitude: 1250, // ft
  airspeed: 142, // knots
  vs: -720, // ft/min
  pitch: 2.5, // degrees
  roll: 0.0, // degrees
  heading: 338, // degrees
  throttle: 48, // %
  flaps: 30, // 0, 5, 15, 30
  gearDown: true,
  spoilersArmed: true,

  // Scenario timeline
  progress: 0.0, // 0 to 1
  isPaused: false,
  hasLanded: false,
  landingScore: null,

  // Runway alignment & PAPI calculation
  glideslopeDev: 0.0, // -2 (too low) to +2 (too high)
  localizerDev: 0.0, // -2 (left) to +2 (right)
  papiLamps: [true, true, false, false], // [White, White, Red, Red] = 2W2R (Optimal 3.0°)
  
  // Dragging controls for canvas
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0
};

function initPfdSimulator() {
  const canvas = document.getElementById('pfd-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * (window.devicePixelRatio || 1);
    canvas.height = rect.height * (window.devicePixelRatio || 1);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Setup Keyboard Listeners for Manual Flight
  window.addEventListener('keydown', (e) => {
    if (simState.mode !== 'manual') return;
    const key = e.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') {
      simState.pitch -= 0.8;
      e.preventDefault();
    } else if (key === 's' || key === 'arrowdown') {
      simState.pitch += 0.8;
      e.preventDefault();
    } else if (key === 'a' || key === 'arrowleft') {
      simState.roll -= 1.8;
      e.preventDefault();
    } else if (key === 'd' || key === 'arrowright') {
      simState.roll += 1.8;
      e.preventDefault();
    } else if (key === 'r') {
      simState.throttle = Math.min(100, simState.throttle + 5);
      updateThrottleUI();
    } else if (key === 'f') {
      simState.throttle = Math.max(0, simState.throttle - 5);
      updateThrottleUI();
    }
  });

  // Canvas Mouse & Touch Dragging for Pitch / Roll control
  canvas.addEventListener('mousedown', (e) => {
    simState.isDragging = true;
    simState.dragStartX = e.clientX;
    simState.dragStartY = e.clientY;
    initAudio();
  });
  window.addEventListener('mousemove', (e) => {
    if (!simState.isDragging || simState.mode !== 'manual') return;
    const dx = e.clientX - simState.dragStartX;
    const dy = e.clientY - simState.dragStartY;
    simState.roll += dx * 0.08;
    simState.pitch -= dy * 0.05;
    simState.dragStartX = e.clientX;
    simState.dragStartY = e.clientY;
  });
  window.addEventListener('mouseup', () => {
    simState.isDragging = false;
  });

  // Touch Support
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      simState.isDragging = true;
      simState.dragStartX = e.touches[0].clientX;
      simState.dragStartY = e.touches[0].clientY;
      initAudio();
    }
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (!simState.isDragging || simState.mode !== 'manual' || e.touches.length === 0) return;
    const dx = e.touches[0].clientX - simState.dragStartX;
    const dy = e.touches[0].clientY - simState.dragStartY;
    simState.roll += dx * 0.08;
    simState.pitch -= dy * 0.05;
    simState.dragStartX = e.touches[0].clientX;
    simState.dragStartY = e.touches[0].clientY;
  }, { passive: true });
  window.addEventListener('touchend', () => {
    simState.isDragging = false;
  });

  // Main 60FPS Simulation Loop
  let lastTime = performance.now();
  function loop(currentTime) {
    const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
    lastTime = currentTime;

    if (!simState.isPaused) {
      updateFlightPhysics(dt);
    }
    renderPFD(ctx, canvas.width, canvas.height);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

// Update Flight Physics based on Scenario / Manual Input
function updateFlightPhysics(dt) {
  if (simState.hasLanded) return;

  if (simState.mode === 'auto') {
    simState.progress += dt * 0.035; // ~28s complete approach
    if (simState.progress > 1.0) {
      triggerTouchdownScore();
      return;
    }

    const t = simState.progress;

    if (simState.scenario === '34L') {
      // 34L Tokyo Bay Curve Approach
      // Starts at 1,500ft over Bay, turns 90 degrees right, aligns with 34L
      if (t < 0.45) {
        // Turning Phase
        simState.roll = 16.0 * Math.sin((t / 0.45) * Math.PI);
        simState.heading = 260 + (t / 0.45) * 78; // 260 -> 338
        simState.altitude = 1500 - t * 800;
        simState.pitch = 1.5;
        simState.vs = -680;
      } else {
        // Final Glide Phase
        simState.roll *= 0.85;
        simState.heading = 338;
        const finalT = (t - 0.45) / 0.55;
        simState.altitude = Math.max(10, 700 * (1 - finalT));
        simState.pitch = 2.5 + (1 - finalT) * 0.5;
        simState.vs = -650;
      }
      simState.airspeed = 138 + Math.sin(t * 10) * 1.5;
      simState.throttle = 46;
    } else if (simState.scenario === '34R') {
      // 34R Straight ILS Approach
      simState.roll = Math.sin(t * 8) * 1.2;
      simState.heading = 338;
      simState.altitude = Math.max(10, 1400 * (1 - t));
      simState.vs = -720;
      simState.pitch = 2.8;
      simState.airspeed = 140;
      simState.throttle = 48;
    } else if (simState.scenario === '16L') {
      // 16L City RNAV Approach (Steeper 3.45° descent)
      simState.roll = Math.sin(t * 6) * 2.0;
      simState.heading = 158;
      simState.altitude = Math.max(10, 1800 * (1 - t));
      simState.vs = -880; // Steeper
      simState.pitch = 1.8;
      simState.airspeed = 142;
      simState.throttle = 40;
    } else if (simState.scenario === 'goaround') {
      // TOGA Missed Approach
      if (t < 0.25) {
        simState.altitude = Math.max(150, 400 - t * 800);
        simState.pitch = 1.0;
      } else {
        // Go-around full climb
        simState.throttle = 98;
        simState.pitch = 12.5;
        simState.vs = +2200;
        simState.altitude += dt * 2200 / 60;
        simState.airspeed = Math.min(185, simState.airspeed + dt * 8);
        simState.gearDown = false;
        simState.flaps = 15;
      }
    }
  } else {
    // MANUAL FLIGHT MODE
    // Aerodynamics damping & gravity
    const targetVS = (simState.throttle - 50) * 20 + (simState.pitch - 2.5) * 180;
    simState.vs += (targetVS - simState.vs) * dt * 2.0;
    simState.altitude += (simState.vs / 60) * dt;
    simState.altitude = Math.max(0, simState.altitude);

    // Speed physics
    const targetIAS = 120 + (simState.throttle * 0.45) - (simState.pitch * 2.0);
    simState.airspeed += (targetIAS - simState.airspeed) * dt * 0.8;

    // Heading integration
    simState.heading = (simState.heading + (simState.roll * 0.08) * dt * 20) % 360;
    if (simState.heading < 0) simState.heading += 360;

    // Roll centering tendency
    if (!simState.isDragging) {
      simState.roll *= 0.96;
    }

    // Ground contact check
    if (simState.altitude <= 5 && !simState.hasLanded) {
      triggerTouchdownScore();
    }
  }

  // Update PAPI calculation
  // Target glide: 3.0 deg = ~318 ft per nautical mile.
  const idealAltForPhase = simState.mode === 'auto' ? (simState.scenario === '16L' ? 1800 * (1 - simState.progress) : 1400 * (1 - simState.progress)) : 600;
  const altDiff = simState.altitude - idealAltForPhase;

  if (altDiff > 250) {
    simState.papiLamps = [true, true, true, true]; // 4 White (Too High)
  } else if (altDiff > 80) {
    simState.papiLamps = [true, true, true, false]; // 3 White 1 Red (Slightly High)
  } else if (altDiff > -80) {
    simState.papiLamps = [true, true, false, false]; // 2 White 2 Red (ON GLIDE PATH)
  } else if (altDiff > -250) {
    simState.papiLamps = [true, false, false, false]; // 1 White 3 Red (Slightly Low)
  } else {
    simState.papiLamps = [false, false, false, false]; // 4 Red (Too Low / Danger)
  }

  // Engine sound pitch
  updateJetSoundPitch(simState.throttle);
}

// Trigger Touchdown Scoring
function triggerTouchdownScore() {
  simState.hasLanded = true;
  playTouchdownSound();

  const vs = Math.abs(simState.vs);
  const centerlineDev = Math.abs(simState.roll * 0.8 + (Math.random() * 2 - 1)).toFixed(1);
  const touchZoneM = (320 + Math.random() * 80).toFixed(0);
  const touchSpeed = simState.airspeed.toFixed(0);

  let rank = 'A';
  let score = 88;
  let title = 'EXCELLENT APPROACH & LANDING';

  if (vs <= 160 && centerlineDev < 2.0) {
    rank = 'S';
    score = 98;
    title = 'BUTTER LANDING! 極上の接地';
  } else if (vs <= 280) {
    rank = 'A';
    score = 89;
    title = 'SMOOTH TOUCHDOWN 安定した着陸';
  } else if (vs <= 450) {
    rank = 'B';
    score = 78;
    title = 'ACCEPTABLE TOUCHDOWN 良好な着陸';
  } else if (vs <= 750) {
    rank = 'C';
    score = 62;
    title = 'FIRM / HARD LANDING やや強い接地衝撃';
  } else {
    rank = 'F';
    score = 35;
    title = 'CRITICAL HARD LANDING 接地衝撃過大';
  }

  // Display Score Modal
  const modal = document.getElementById('score-modal');
  if (modal) {
    document.getElementById('score-rank').textContent = rank;
    document.getElementById('score-rank').className = `score-rank-badge rank-${rank.toLowerCase()}`;
    document.getElementById('score-title').textContent = title;
    document.getElementById('score-vs-val').textContent = `-${vs.toFixed(0)} ft/min`;
    document.getElementById('score-align-val').textContent = `${centerlineDev} m offset`;
    document.getElementById('score-zone-val').textContent = `${touchZoneM} m from threshold`;
    document.getElementById('score-ias-val').textContent = `${touchSpeed} kt`;
    modal.classList.add('active');
  }
}

// Render PFD Cockpit Canvas
function renderPFD(ctx, w, h) {
  ctx.save();
  ctx.scale(1, 1);

  // Background sky & ground
  let skyColor1 = '#0f3156';
  let skyColor2 = '#1b5a8f';
  let groundColor = '#3a2717';
  let horizonColor = '#06b6d4';

  if (simState.env === 'sunset') {
    skyColor1 = '#1f1338';
    skyColor2 = '#9a3412';
    groundColor = '#24140c';
    horizonColor = '#fb923c';
  } else if (simState.env === 'night') {
    skyColor1 = '#030712';
    skyColor2 = '#08142b';
    groundColor = '#050b14';
    horizonColor = '#38bdf8';
  }

  // ADI Horizon Transform
  const cx = w * 0.5;
  const cy = h * 0.48;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((-simState.roll * Math.PI) / 180);

  const pitchOffset = simState.pitch * (h * 0.018);

  // Sky
  const skyGrad = ctx.createLinearGradient(0, -h, 0, pitchOffset);
  skyGrad.addColorStop(0, skyColor1);
  skyGrad.addColorStop(1, skyColor2);
  ctx.fillStyle = skyGrad;
  ctx.fillRect(-w, -h * 2, w * 2, h * 2 + pitchOffset);

  // Ground
  const groundGrad = ctx.createLinearGradient(0, pitchOffset, 0, h);
  groundGrad.addColorStop(0, '#1c150c');
  groundGrad.addColorStop(1, groundColor);
  ctx.fillStyle = groundGrad;
  ctx.fillRect(-w, pitchOffset, w * 2, h * 2);

  // Horizon Line
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(-w, pitchOffset);
  ctx.lineTo(w, pitchOffset);
  ctx.stroke();

  // Pitch Ladder
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = `${Math.max(10, w * 0.024)}px 'Share Tech Mono', monospace`;
  ctx.textAlign = 'center';

  const pitchStep = h * 0.038;
  for (let deg = -30; deg <= 30; deg += 5) {
    if (deg === 0) continue;
    const y = pitchOffset - (deg * pitchStep) / 5;
    const lineWidth = Math.abs(deg) % 10 === 0 ? w * 0.16 : w * 0.09;

    ctx.beginPath();
    ctx.moveTo(-lineWidth, y);
    ctx.lineTo(lineWidth, y);
    ctx.stroke();

    if (Math.abs(deg) % 10 === 0) {
      ctx.fillText(Math.abs(deg).toString(), -lineWidth - 14, y + 4);
      ctx.fillText(Math.abs(deg).toString(), lineWidth + 14, y + 4);
    }
  }

  // 3D Perspective Runway & PAPI on Horizon
  renderPerspectiveRunway(ctx, pitchOffset, w, h);

  ctx.restore();

  // Non-rotating Overlays (Aircraft Symbol, Tapes, HUD Readouts)
  renderAircraftSymbol(ctx, cx, cy, w);
  renderAirspeedTape(ctx, w, h);
  renderAltitudeTape(ctx, w, h);
  renderVerticalSpeedTape(ctx, w, h);
  renderHeadingCompass(ctx, w, h);
  renderPapiHUD(ctx, w, h);
  renderILSIndicators(ctx, cx, cy, w, h);
  renderHUDTelemetry(ctx, w, h);

  ctx.restore();
}

// 3D Wireframe Runway on Horizon
function renderPerspectiveRunway(ctx, pitchY, w, h) {
  const alt = Math.max(1, simState.altitude);
  const scale = Math.min(1.0, 1200 / (alt + 300));

  const rwY = pitchY + 2;
  const rwW = w * 0.12 * scale;
  const rwH = h * 0.35 * scale;

  ctx.fillStyle = '#0f172a';
  ctx.strokeStyle = '#06b6d4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-rwW * 0.25, rwY);
  ctx.lineTo(rwW * 0.25, rwY);
  ctx.lineTo(rwW, rwY + rwH);
  ctx.lineTo(-rwW, rwY + rwH);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Runway Centerline
  ctx.strokeStyle = '#38bdf8';
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(0, rwY);
  ctx.lineTo(0, rwY + rwH);
  ctx.stroke();
  ctx.setLineDash([]);
}

// Yellow Cockpit Aircraft Symbol (Crosshairs)
function renderAircraftSymbol(ctx, cx, cy, w) {
  ctx.strokeStyle = '#facc15';
  ctx.fillStyle = '#facc15';
  ctx.lineWidth = 4;

  const size = w * 0.08;

  // Center Dot
  ctx.beginPath();
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fill();

  // Left Wing
  ctx.beginPath();
  ctx.moveTo(cx - size - 8, cy);
  ctx.lineTo(cx - 20, cy);
  ctx.lineTo(cx - 20, cy + 12);
  ctx.stroke();

  // Right Wing
  ctx.beginPath();
  ctx.moveTo(cx + size + 8, cy);
  ctx.lineTo(cx + 20, cy);
  ctx.lineTo(cx + 20, cy + 12);
  ctx.stroke();
}

// Airspeed Tape on Left
function renderAirspeedTape(ctx, w, h) {
  const tapeW = w * 0.13;
  const tapeX = w * 0.03;
  const tapeY = h * 0.15;
  const tapeH = h * 0.65;

  ctx.fillStyle = 'rgba(2, 6, 23, 0.75)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(tapeX, tapeY, tapeW, tapeH);
  ctx.strokeRect(tapeX, tapeY, tapeW, tapeH);

  // Speed Ticks
  const cy = tapeY + tapeH * 0.5;
  const speed = simState.airspeed;
  const pxPerKnot = tapeH / 60;

  ctx.fillStyle = '#fff';
  ctx.font = `${Math.max(10, w * 0.022)}px 'Share Tech Mono', monospace`;
  ctx.textAlign = 'right';

  for (let spd = Math.floor((speed - 30) / 10) * 10; spd <= speed + 30; spd += 10) {
    const y = cy - (spd - speed) * pxPerKnot;
    if (y >= tapeY && y <= tapeY + tapeH) {
      ctx.beginPath();
      ctx.moveTo(tapeX + tapeW - 10, y);
      ctx.lineTo(tapeX + tapeW, y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.stroke();
      ctx.fillText(spd.toString(), tapeX + tapeW - 14, y + 4);
    }
  }

  // Current Speed Box
  ctx.fillStyle = '#06b6d4';
  ctx.fillRect(tapeX, cy - 14, tapeW + 8, 28);
  ctx.fillStyle = '#020617';
  ctx.font = `bold ${Math.max(12, w * 0.028)}px 'Orbitron', sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(Math.round(speed).toString(), tapeX + tapeW * 0.5 + 4, cy + 5);
}

// Altitude Tape on Right
function renderAltitudeTape(ctx, w, h) {
  const tapeW = w * 0.16;
  const tapeX = w * 0.81;
  const tapeY = h * 0.15;
  const tapeH = h * 0.65;

  ctx.fillStyle = 'rgba(2, 6, 23, 0.75)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(tapeX, tapeY, tapeW, tapeH);
  ctx.strokeRect(tapeX, tapeY, tapeW, tapeH);

  const cy = tapeY + tapeH * 0.5;
  const alt = simState.altitude;
  const pxPer100Ft = tapeH / 10;

  ctx.fillStyle = '#fff';
  ctx.font = `${Math.max(10, w * 0.022)}px 'Share Tech Mono', monospace`;
  ctx.textAlign = 'left';

  for (let a = Math.floor((alt - 500) / 100) * 100; a <= alt + 500; a += 100) {
    const y = cy - ((a - alt) / 100) * pxPer100Ft;
    if (y >= tapeY && y <= tapeY + tapeH) {
      ctx.beginPath();
      ctx.moveTo(tapeX, y);
      ctx.lineTo(tapeX + 10, y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.stroke();
      ctx.fillText(a.toString(), tapeX + 14, y + 4);
    }
  }

  // Current Alt Box
  ctx.fillStyle = '#10b981';
  ctx.fillRect(tapeX - 8, cy - 14, tapeW + 8, 28);
  ctx.fillStyle = '#020617';
  ctx.font = `bold ${Math.max(12, w * 0.028)}px 'Orbitron', sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(Math.round(alt).toString(), tapeX + tapeW * 0.5, cy + 5);
}

// Vertical Speed Indicator Tape (Far Right)
function renderVerticalSpeedTape(ctx, w, h) {
  const vsiX = w * 0.975;
  const vsiY = h * 0.25;
  const vsiH = h * 0.45;

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(vsiX, vsiY);
  ctx.lineTo(vsiX, vsiY + vsiH);
  ctx.stroke();

  // VSI Indicator pointer
  const cy = vsiY + vsiH * 0.5;
  const vsiClamped = Math.max(-2000, Math.min(2000, simState.vs));
  const pointerY = cy - (vsiClamped / 2000) * (vsiH * 0.5);

  ctx.fillStyle = '#38bdf8';
  ctx.beginPath();
  ctx.moveTo(vsiX - 10, pointerY);
  ctx.lineTo(vsiX, pointerY - 6);
  ctx.lineTo(vsiX, pointerY + 6);
  ctx.closePath();
  ctx.fill();
}

// Heading Compass Tape on Bottom
function renderHeadingCompass(ctx, w, h) {
  const boxW = w * 0.5;
  const boxX = w * 0.25;
  const boxY = h * 0.85;
  const boxH = h * 0.11;

  ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
  ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(boxX, boxY, boxW, boxH);
  ctx.strokeRect(boxX, boxY, boxW, boxH);

  const cx = boxX + boxW * 0.5;
  const hdg = simState.heading;
  const pxPerDeg = boxW / 40;

  ctx.fillStyle = '#fff';
  ctx.font = `${Math.max(10, w * 0.02)}px 'Share Tech Mono', monospace`;
  ctx.textAlign = 'center';

  for (let d = Math.floor((hdg - 20) / 5) * 5; d <= hdg + 20; d += 5) {
    const normD = (d % 360 + 360) % 360;
    const x = cx + (d - hdg) * pxPerDeg;
    if (x >= boxX && x <= boxX + boxW) {
      ctx.beginPath();
      ctx.moveTo(x, boxY);
      ctx.lineTo(x, boxY + (normD % 10 === 0 ? 10 : 5));
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.stroke();

      if (normD % 10 === 0) {
        let label = (normD / 10).toString().padStart(2, '0');
        if (normD === 0) label = 'N';
        if (normD === 90) label = 'E';
        if (normD === 180) label = 'S';
        if (normD === 270) label = 'W';
        ctx.fillText(label, x, boxY + 22);
      }
    }
  }

  // Current HDG Box
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(cx - 18, boxY, 36, 16);
  ctx.fillStyle = '#020617';
  ctx.font = `bold ${Math.max(10, w * 0.02)}px 'Orbitron', sans-serif`;
  ctx.fillText(Math.round(hdg).toString().padStart(3, '0'), cx, boxY + 12);
}

// Real PAPI Indicator Lights on Top Left of PFD
function renderPapiHUD(ctx, w, h) {
  const papiX = w * 0.03;
  const papiY = h * 0.03;

  ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
  ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
  ctx.lineWidth = 1;
  ctx.fillRect(papiX, papiY, w * 0.28, h * 0.1);
  ctx.strokeRect(papiX, papiY, w * 0.28, h * 0.1);

  ctx.fillStyle = '#38bdf8';
  ctx.font = `bold ${Math.max(9, w * 0.018)}px 'Orbitron', sans-serif`;
  ctx.textAlign = 'left';
  ctx.fillText('PAPI 3.0° GLIDESLOPE', papiX + 8, papiY + 14);

  // 4 Lamps
  const lampRadius = Math.max(5, w * 0.013);
  const startX = papiX + 16;
  const lampY = papiY + h * 0.06;

  for (let i = 0; i < 4; i++) {
    const lx = startX + i * (lampRadius * 2.8);
    const isWhite = simState.papiLamps[i];

    ctx.beginPath();
    ctx.arc(lx, lampY, lampRadius, 0, Math.PI * 2);
    ctx.fillStyle = isWhite ? '#ffffff' : '#ef4444';
    ctx.shadowBlur = 10;
    ctx.shadowColor = isWhite ? '#ffffff' : '#ef4444';
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

// ILS Glideslope & Localizer Diamonds
function renderILSIndicators(ctx, cx, cy, w, h) {
  // Glideslope Diamond (Right of Attitude indicator)
  const gsX = cx + w * 0.22;
  const gsDevY = cy - (simState.glideslopeDev * (h * 0.08));

  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.moveTo(gsX, gsDevY - 6);
  ctx.lineTo(gsX + 6, gsDevY);
  ctx.lineTo(gsX, gsDevY + 6);
  ctx.lineTo(gsX - 6, gsDevY);
  ctx.closePath();
  ctx.fill();

  // Localizer Diamond (Bottom of Attitude indicator)
  const locY = cy + h * 0.26;
  const locDevX = cx + (simState.localizerDev * (w * 0.08));

  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.moveTo(locDevX - 6, locY);
  ctx.lineTo(locDevX, locY - 6);
  ctx.lineTo(locDevX + 6, locY);
  ctx.lineTo(locDevX, locY + 6);
  ctx.closePath();
  ctx.fill();
}

// Telemetry Labels on Top Right
function renderHUDTelemetry(ctx, w, h) {
  const x = w * 0.97;
  const y = h * 0.04;

  ctx.fillStyle = 'rgba(6, 182, 212, 0.95)';
  ctx.font = `bold ${Math.max(10, w * 0.02)}px 'Orbitron', sans-serif`;
  ctx.textAlign = 'right';

  let scenText = 'RJTT 34L BAY CURVE';
  if (simState.scenario === '34R') scenText = 'RJTT 34R ILS APPR';
  if (simState.scenario === '16L') scenText = 'RJTT 16L RNAV CITY';
  if (simState.scenario === 'goaround') scenText = 'TOGA MISSED APPR';

  ctx.fillText(scenText, x, y + 10);

  ctx.fillStyle = '#94a3b8';
  ctx.font = `${Math.max(9, w * 0.017)}px 'Share Tech Mono', monospace`;
  ctx.fillText(`FLAP ${simState.flaps}° | GEAR ${simState.gearDown ? 'DN' : 'UP'} | N1 ${simState.throttle}%`, x, y + 26);
}

// ============================================================================
// 6. UI Controls & Scenario Interaction
// ============================================================================
function initUIControls() {
  // Scenario Selection Tabs
  document.querySelectorAll('.scenario-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.scenario-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const scen = btn.getAttribute('data-scenario');
      simState.scenario = scen;
      resetFlightDemo();
    });
  });

  // Mode Switch (Auto / Manual)
  const modeAutoBtn = document.getElementById('mode-auto-btn');
  const modeManualBtn = document.getElementById('mode-manual-btn');
  if (modeAutoBtn && modeManualBtn) {
    modeAutoBtn.addEventListener('click', () => {
      modeAutoBtn.classList.add('active');
      modeManualBtn.classList.remove('active');
      simState.mode = 'auto';
      updateStatusBanner();
    });
    modeManualBtn.addEventListener('click', () => {
      modeManualBtn.classList.add('active');
      modeAutoBtn.classList.remove('active');
      simState.mode = 'manual';
      updateStatusBanner();
    });
  }

  // Sliders
  const throttleRange = document.getElementById('throttle-range');
  if (throttleRange) {
    throttleRange.addEventListener('input', (e) => {
      simState.throttle = parseInt(e.target.value);
      updateThrottleUI();
    });
  }

  // Flap Buttons
  document.querySelectorAll('[data-flap]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-flap]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      simState.flaps = parseInt(btn.getAttribute('data-flap'));
    });
  });

  // Gear Button
  const gearBtn = document.getElementById('gear-toggle-btn');
  if (gearBtn) {
    gearBtn.addEventListener('click', () => {
      simState.gearDown = !simState.gearDown;
      gearBtn.classList.toggle('active', simState.gearDown);
      gearBtn.textContent = simState.gearDown ? 'GEAR DOWN' : 'GEAR UP';
    });
  }

  // Lighting Buttons
  document.querySelectorAll('[data-lighting]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-lighting]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      simState.env = btn.getAttribute('data-lighting');
    });
  });

  // Action Buttons
  const flareBtn = document.getElementById('btn-flare');
  if (flareBtn) {
    flareBtn.addEventListener('click', () => {
      triggerTouchdownScore();
    });
  }

  const restartBtn = document.getElementById('btn-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      resetFlightDemo();
    });
  }

  const audioBtn = document.getElementById('btn-audio');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      initAudio();
      audioBtn.classList.toggle('active', soundEnabled);
      const dict = i18nData[currentLang];
      audioBtn.querySelector('span').textContent = soundEnabled ? dict.demoAudioBtnOn : dict.demoAudioBtnOff;
      if (soundEnabled) {
        startJetEngineSound();
      } else {
        stopJetEngineSound();
      }
    });
  }

  // Score Modal Close
  const closeScoreBtn = document.getElementById('score-modal-close');
  if (closeScoreBtn) {
    closeScoreBtn.addEventListener('click', () => {
      document.getElementById('score-modal').classList.remove('active');
      resetFlightDemo();
    });
  }

  // Mobile Hamburger Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    // Close nav on clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Scrollspy & Navbar Shadow
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function updateThrottleUI() {
  const range = document.getElementById('throttle-range');
  const valText = document.getElementById('throttle-val-text');
  if (range) range.value = simState.throttle;
  if (valText) valText.textContent = `${simState.throttle}% N1`;
}

function resetFlightDemo() {
  simState.progress = 0.0;
  simState.hasLanded = false;
  simState.isPaused = false;
  simState.altitude = simState.scenario === '16L' ? 1800 : (simState.scenario === '34L' ? 1500 : 1400);
  simState.airspeed = 142;
  simState.vs = -700;
  simState.pitch = 2.5;
  simState.roll = 0.0;
  simState.heading = simState.scenario === '16L' ? 158 : (simState.scenario === '34L' ? 260 : 338);
  simState.throttle = 48;
  const modal = document.getElementById('score-modal');
  if (modal) modal.classList.remove('active');
  updateThrottleUI();
  updateStatusBanner();
}

function updateStatusBanner() {
  const banner = document.getElementById('demo-status-text');
  if (!banner) return;
  const dict = i18nData[currentLang];
  banner.textContent = simState.mode === 'auto' ? dict.demoStatusAuto : dict.demoStatusManual;
}

// ============================================================================
// 7. Initialization
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initCyberBackground();
  initPfdSimulator();
  initUIControls();
});
