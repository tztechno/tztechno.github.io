document.addEventListener('DOMContentLoaded', () => {
  // --- Translations (JP & EN) ---
  const translations = {
    ja: {
      nav_overview: "概要",
      nav_features: "特徴",
      nav_modes: "運転モード",
      nav_course: "コースガイド",
      nav_specs: "動作環境",
      nav_faq: "FAQ",
      launch_app: "購入はこちら",
      btn_buy: "購入はこちら",
      hero_tag: "リアル東京 3D都市モデル × 首都高 17.5km フル周回",
      hero_title: "リアルな東京の夜を、<br><span class='gradient-text'>フォーミュラマシンで駆け抜けろ。</span>",
      hero_desc: "Project PLATEAUの3D都市モデル実データをベースに再現された首都高周回コース（約17.5km）。最先端の3DグラフィックスとMuJoCo物理エンジンによるリアルな走行で、東京のハイウェイを疾走するデスクトップ・シミュレーター（macOS / Windows）。",
      btn_play_now: "購入はこちら",
      stat_distance: "コース全長",
      stat_modes: "運転モード",
      stat_max_speed: "最高速度",
      stat_fidelity: "リアル都市データ",
      metrics_1_title: "17.5 km",
      metrics_1_desc: "首都高フルループ周回",
      metrics_2_title: "320 km/h",
      metrics_2_desc: "超高速フォーミュラ走行",
      metrics_3_title: "3 Modes",
      metrics_3_desc: "完全自動・半自動・手動",
      metrics_4_title: "Mac / Win",
      metrics_4_desc: "買い切りデスクトップアプリ",
      feat_tag: "CORE FEATURES",
      feat_title: "最先端技術が融合するドライビング体験",
      feat_desc: "高精細な3D都市モデル、緻密なコーナリング物理、昼夜・雨天のダイナミックな環境変化を余すところなく体験できます。",
      f1_title: "リアルな東京3D都市モデル",
      f1_desc: "実測データから生成されたレインボーブリッジ、東京タワー、林立する高層ビル群、複雑な高架ジャンクションを圧倒的スケールで再現。沿道の有名施設には名前も表示。",
      f2_title: "3段階のドライビング制御",
      f2_desc: "安全な高速巡航をこなす完全自動（AUTO）、加速スリルを味わう半自動（SEMI）、腕が試される完全手動（MANUAL）をワンキーで切り替え。",
      f3_title: "ダイナミック天候＆グリップ変化",
      f3_desc: "昼・夕暮れ・夜のライティング遷移に加え、雨天時にはリアルな路面反射とウェットコンディション（グリップが65%に低下）をシミュレート。夜はヘッドライトが点灯。",
      f4_title: "4視点マルチカメラ",
      f4_desc: "後方追従、低重心なコックピット視点、コース全体を見渡す上空カメラ、マウスで自由自在に見回せるフリーカメラを搭載。",
      f5_title: "本格HUD・テレメトリ解析",
      f5_desc: "横Gメーター、カーブごとの推奨安全速度サジェスト、ミニマップ、セクター別ラップタイム計測などレーシング計器を完備。",
      f6_title: "ネイティブデスクトップアプリ",
      f6_desc: "Apple Silicon Mac / Windows 向けのネイティブデスクトップアプリ。3D都市モデルと物理エンジンを同梱し、インストール後はオフラインで動作します。",
      f7_title: "有名施設の名前表示",
      f7_desc: "PLATEAUの建物名・計測高さから、沿道の約30の有名施設に名前を表示。フジテレビ、東京タワー、スカイツリーなどを目印に走れます。BキーでON/OFF。",
      f8_title: "夜間ヘッドライト",
      f8_desc: "夜になるとマシンのヘッドライトが自動で点灯し、前方の路面を照らします。暗い高架や橋の上でも、カーブの先まで見通せます。",
      course_tag: "COURSE GUIDE",
      course_title: "首都高 17.5km ループ 全6区間",
      course_desc: "芝浦JCTからレインボーブリッジを渡り、湾岸線、深川線、箱崎JCT、銀座の地下掘割を経て浜崎橋へと戻る名コース。",
      env_tag: "WEATHER & TIME",
      env_title: "リアルタイム環境シミュレーション",
      env_desc: "時間帯や天候によって路面コンディションと景観が劇的に変化します。夜はヘッドライトが前方を照らし、雨天時はブレーキングと横G管理が勝敗を分けます。",
      modes_tag: "DRIVING STYLES",
      modes_title: "あなたの好みに合わせた3つの走行モード",
      modes_desc: "走行中いつでも「M」キーひとつで切り替え可能。景色を楽しみたい初心者からタイムアタックに挑む上級者まで。",
      specs_tag: "PLATFORMS & SPECS",
      specs_title: "動作環境・対応プラットフォーム",
      specs_desc: "Apple Silicon Mac と Windows に対応したネイティブデスクトップアプリ。一度の購入で永続的にご利用いただけます。",
      faq_tag: "FAQ",
      faq_title: "よくあるご質問",
      faq_desc: "操作方法やシステム要件についてのお問い合わせ",
      cta_title: "東京の夜景へ、今すぐ飛び込もう。",
      cta_desc: "リアルな首都高を最高320km/hで駆け抜ける極上のドライビング体験を、あなたのMac / Windows PCで。",
      cta_btn_main: "購入はこちら",
    },
    en: {
      nav_overview: "Overview",
      nav_features: "Features",
      nav_modes: "Driving Modes",
      nav_course: "Course Guide",
      nav_specs: "Specs",
      nav_faq: "FAQ",
      launch_app: "Buy Now",
      btn_buy: "Buy Now",
      sysreq_download: "Approx. 30MB (.dmg / .exe)",
      hero_tag: "3D Tokyo Digital Twin × 17.5km Shuto Expressway Circuit",
      hero_title: "Race Through Tokyo's Night<br><span class='gradient-text'>In a High-Speed Formula Car.</span>",
      hero_desc: "An authentic 17.5km Shuto Expressway loop recreated with high-precision 3D city data from Project PLATEAU. A native desktop simulator for macOS and Windows with cutting-edge 3D graphics and realistic MuJoCo vehicle physics.",
      btn_play_now: "Buy Now",
      stat_distance: "Total Distance",
      stat_modes: "Drive Modes",
      stat_max_speed: "Top Speed",
      stat_fidelity: "City Data",
      metrics_1_title: "17.5 km",
      metrics_1_desc: "Full Shuto Expressway Loop",
      metrics_2_title: "320 km/h",
      metrics_2_desc: "Formula Car Velocity",
      metrics_3_title: "3 Modes",
      metrics_3_desc: "Full Auto, Semi-Auto, Manual",
      metrics_4_title: "Mac / Win",
      metrics_4_desc: "One-Time Purchase Desktop App",
      feat_tag: "CORE FEATURES",
      feat_title: "State-of-the-Art Driving Simulation",
      feat_desc: "High-resolution 3D city models, precise lateral-G physics, and dynamic daylight/rain environment transitions.",
      f1_title: "Real 3D Tokyo Cityscape",
      f1_desc: "Recreating Tokyo Tower, Rainbow Bridge, skyline towers, and multi-tier elevated junctions with exact geographic fidelity. Famous landmarks along the route are labelled by name.",
      f2_title: "3-Tier Driving Control",
      f2_desc: "Switch on the fly between Autonomous cruise (AUTO), assisted throttle thrill (SEMI), or pure manual mastery (MANUAL).",
      f3_title: "Dynamic Weather & Wet Grip",
      f3_desc: "Seamless lighting transitions from Day to Golden Hour to Night. Rain alters visual reflections and reduces tire grip by 35%. Headlights come on at night.",
      f4_title: "4 Multi-Angle Cameras",
      f4_desc: "Chase Cam, low-slung Cockpit view, Overhead satellite angle, and fully orbitable Free Cam with mouse controls.",
      f5_title: "Professional Racing HUD",
      f5_desc: "Real-time G-force telemetry, safe cornering speed suggestions, live sector lap times, and dynamic mini-map.",
      f6_title: "Native Desktop App",
      f6_desc: "Native desktop app for Apple Silicon Macs and Windows. The 3D city model and physics engine are bundled, so it runs offline once installed.",
      f7_title: "Landmark Name Tags",
      f7_desc: "About 30 famous landmarks along the route — Fuji TV, Tokyo Tower, Skytree and more — are labelled using PLATEAU building names and measured heights. Toggle with the B key.",
      f8_title: "Night Headlights",
      f8_desc: "At night the car's headlights switch on automatically and light up the road ahead, even on dark viaducts and bridges.",
      course_tag: "COURSE GUIDE",
      course_title: "17.5km Shuto Loop — 6 Iconic Sectors",
      course_desc: "From Shibaura JCT over the Rainbow Bridge, cruising Wangan and Fukagawa, navigating Hakozaki JCT, through Ginza tunnels back to Hamazakibashi.",
      env_tag: "WEATHER & TIME",
      env_title: "Real-Time Environmental Simulator",
      env_desc: "Lighting and grip dynamics shift dramatically. Headlights light the road at night, and wet asphalt demands calculated braking and lateral G-force control.",
      modes_tag: "DRIVING STYLES",
      modes_title: "3 Distinct Modes Tailored for Every Driver",
      modes_desc: "Switch anytime mid-race with the 'M' key. Enjoy cinematic city views or push the limits of tire adhesion in manual mode.",
      specs_tag: "PLATFORMS & SPECS",
      specs_title: "System Requirements & Platforms",
      specs_desc: "A native desktop app for Apple Silicon Macs and Windows. Buy once, keep it forever.",
      faq_tag: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Find quick answers regarding controls, platform support, and features.",
      cta_title: "Dive Into Tokyo's Neon Highways Today.",
      cta_desc: "Feel the rush of formula racing at up to 320 km/h on Tokyo's real expressways — right on your Mac or Windows PC.",
      cta_btn_main: "Buy Now",
      hl1_title: "Low Nose-Level Cockpit View<br>with a Real-Time Racing HUD",
      hl1_desc: "Feel the speed from just above the asphalt. The speedometer at the bottom shows throttle, brake, lateral G and a safe-speed marker for each corner, and warns you when you go over it. Gear, engine RPM and the current sector name appear top-left.",
      hl1_p1: "Real-time safe-speed indicator based on the lateral-G limiter (0.5G–2.2G)",
      hl1_p2: "Traction control (TCS) &amp; anti-lock brakes (ABS) always active",
      hl1_p3: "Best-lap saving &amp; automatic shortcut detection",
      hl2_title: "Landmarks Along the Route<br>Named from PLATEAU Building Data",
      hl2_desc: "About 30 famous landmarks visible from the expressway — Fuji TV, Tokyo Big Sight, the Shiodome towers, Tokyo Tower, Tokyo Skytree and more — are labelled by name. Names and heights come from Project PLATEAU building data (building names and measured heights).",
      hl2_p1: "Toggle with the B key. The setting is remembered next time you launch",
      hl2_p2: "Names appear only while the building is visible and hide automatically behind buildings and in tunnels",
      hl2_p3: "Named landmarks are always rendered, even far away. Tokyo Skytree, whose tower is missing from PLATEAU, is recreated too",
      hl3_title: "Headlights On at Night,<br>Lighting the Road Ahead",
      hl3_desc: "Set the time to Night and the car's headlights switch on automatically, lighting the road and the curves ahead even on dark viaducts and bridges.",
      hl3_p1: "Automatic at night, with a “Headlights on” indicator in the HUD",
      hl3_p2: "Low-beam style light pattern that looks natural even from the cockpit",
      hl3_p3: "Together with window lights, street lamps and city glow, Tokyo's night comes alive",
      mode_tab_auto: "🤖 Full Auto (AUTO)",
      mode_tab_semi: "⚡ Semi-Auto (SEMI)",
      mode_tab_manual: "🔥 Full Manual (MANUAL)",
      mode_th_steer: "Steering",
      mode_th_speed: "Speed Control",
      mode_th_keys: "Keys",
      mode_th_for: "Recommended For",
      mode_auto_title: "Full Auto Mode (AUTO)",
      mode_auto_desc: "The AI controls steering, throttle and braking along the optimal racing line within the lateral-G limiter. It slows to a safe speed before sharp curves so it never touches the wall — perfect for taking in the Tokyo cityscape.",
      mode_auto_steer: "Fully automatic (follows the racing line)",
      mode_auto_speed: "Fully automatic (target speed adjustable 50–320 km/h)",
      mode_auto_keys: "↑ / ↓ target speed, [ / ] lateral-G limit",
      mode_auto_for: "Sightseers and anyone who wants to admire the 3D city model",
      mode_semi_title: "Semi-Auto Mode (SEMI)",
      mode_semi_desc: "Steering follows the ideal line automatically while you handle the throttle and brake. Watch the safe-speed indicator and see how late you can brake into each corner.",
      mode_semi_steer: "Automatic (same ideal line as Full Auto)",
      mode_semi_speed: "Manual (throttle &amp; brake)",
      mode_semi_keys: "W / ↑ throttle, S / ↓ brake",
      mode_semi_for: "Anyone who wants easy speed and thrills",
      mode_manual_title: "Full Manual Mode (MANUAL)",
      mode_manual_desc: "Control steering, throttle and brake entirely by hand. Steering response adapts to speed, while ABS and traction control keep the car stable at the limit.",
      mode_manual_steer: "Manual (speed-sensitive steering assist)",
      mode_manual_speed: "Manual (full throttle &amp; full brake)",
      mode_manual_keys: "A / D / ← / → steer, W / S / ↑ / ↓ throttle / brake",
      mode_manual_for: "Experts chasing the fastest lap record",
      course_s1_name: "Route 11 Daiba Line (Shibaura JCT → Rainbow Bridge)",
      course_s1_sub: "3.5 km / Rainbow Bridge views 50m above the bay",
      course_s2_name: "Bayshore Route (Ariake JCT → Tatsumi JCT)",
      course_s2_sub: "2.5 km / High-speed waterfront section",
      course_s3_name: "Route 9 Fukagawa Line (Tatsumi JCT → Hakozaki JCT)",
      course_s3_sub: "6.3 km / Long elevated canal-side straight",
      course_s4_name: "Route 6 Mukojima Line (Hakozaki JCT → Edobashi JCT)",
      course_s4_sub: "0.9 km / Massive multi-level junction",
      course_s5_name: "C1 Inner Circular Route (Edobashi JCT → Ginza Trenches)",
      course_s5_sub: "3.7 km / Technical sunken section between towers",
      course_s6_name: "Route 1 Haneda Line (Ginza → Hamazakibashi JCT → Shibaura)",
      course_s6_sub: "0.8 km / Final sprint closing the loop",
      course_metric_length: "Length",
      course_metric_speed: "Top Speed (approx.)",
      course_metric_gear: "Recommended Gear",
      env_time_label: "TIME OF DAY (T key)",
      env_weather_label: "WEATHER CONDITIONS (Y key)",
      env_btn_day: "☀️ Day",
      env_btn_sunset: "🌇 Sunset",
      env_btn_night: "🌃 Night",
      env_btn_clear: "✨ Clear / Overcast",
      env_btn_rain: "🌧️ Rain &amp; Wet",
      env_grip: "Tire Grip",
      env_visibility: "Visibility",
      env_safe_speed: "Safe Cornering Speed (approx.)",
      env_rain_note: "In the rain, tire grip drops to 65% and braking distances grow significantly. Auto mode also lowers its cruising speed for safety.",
      gallery_title: "Game Screens",
      gallery_desc: "All real in-game screenshots (generated from PLATEAU buildings, GSI aerial photos and OpenStreetMap road geometry)",
      gallery_c1: "From the Rainbow Bridge towards Odaiba, with Fuji TV labelled",
      gallery_c2: "Cockpit view and HUD on the C1 Inner Loop near Shiodome",
      gallery_c3: "Route 11 Daiba Line at sunset (Shibaura loop)",
      gallery_c4: "Route 9 Fukagawa Line on a rainy night, headlights lighting the road",
      gallery_c5: "Shiodome towers (PLATEAU) and landmark names seen from above Hama-rikyu",
      gallery_c6: "Approaching Hamazakibashi JCT — only visible landmarks are named",
      gallery_c7: "The Rainbow Bridge at night under headlights (cockpit view)",
      plat_mac_desc: "Lightweight desktop edition optimized for M1 / M2 / M3 / M4 chips.",
      plat_win_desc: "Standalone installer for Windows 10 / 11.",
      sysreq_title: "Recommended System Requirements",
      sysreq_gpu: "WebGL 2.0 capable GPU (2GB+ VRAM)",
      sysreq_input: "Keyboard + mouse",
      faq_q1: "Q. How big is the download, and do I need internet?",
      faq_a1: "A. The installer is about 30MB (macOS .dmg / Windows .exe). The 3D city model and physics engine are bundled in the app, so it runs offline once installed.",
      faq_q3: "Q. Can I hide the building names shown while driving?",
      faq_a3: "A. Yes. Press B to toggle landmark names; the setting is saved. About 30 famous landmarks along the route are named from Project PLATEAU building data, and each name is shown only while its building is visible — names disappear behind buildings and in tunnels.",
      faq_q4: "Q. Isn't it hard to drive in the dark at night?",
      faq_a4: "A. Set the time to Night (T key) and the car's headlights switch on automatically to light the road ahead. Street lamps and building window lights also come on, so you drive through a true night-time Shuto scene.",
      faq_q5: "Q. What happens if I spin or run off the course?",
      faq_a5: "A. If the car rolls over or leaves the road, it automatically recovers to the nearest lane after 1.5 seconds. You can also press R at any time to reset to the lane center instantly (the reset lap becomes invalid).",
      faq_q6: "Q. Where are lap times saved?",
      faq_a6: "A. Your personal best lap is saved automatically on your PC. Only valid laps that pass the mid-course checkpoint are recorded.",
      footer_desc: "A next-generation racing &amp; driving simulator for macOS and Windows, built on Project PLATEAU 3D city models.",
      footer_specs: "System Requirements",
      footer_release: "Release Notes"
    }
  };

  let currentLang = 'ja';

  // --- Course Data ---
  const courseData = {
    s1: {
      ja: {
        title: "S1: 11号台場線 (芝浦JCT → レインボーブリッジ)",
        desc: "芝浦JCTのタイトな360度ループを上り、海面から約50mの高さに架かるレインボーブリッジへ。東京湾と夜景を一望できる爽快な絶景区間です。",
        length: "3.5 km",
        speed: "290 km/h",
        gear: "6th - 7th",
        difficulty: "★★☆☆☆"
      },
      en: {
        title: "S1: Route 11 Daiba Line (Shibaura JCT → Rainbow Bridge)",
        desc: "Climb the 360-degree loop at Shibaura JCT onto the iconic Rainbow Bridge, 50 meters above Tokyo Bay. Unrivaled panoramic views of Tokyo Tower and waterfront skyline.",
        length: "3.5 km",
        speed: "290 km/h",
        gear: "6th - 7th",
        difficulty: "★★☆☆☆"
      },
      img: "./assets/sunset_rainbow_bridge.jpg"
    },
    s2: {
      ja: {
        title: "S2: 湾岸線 (有明JCT → 辰巳JCT)",
        desc: "広大な直線が続く高速セクション。最高320km/hでのハイスピード巡航と、辰巳JCTの高速ブラインドコーナーへのブレーキングが鍵となります。",
        length: "2.5 km",
        speed: "320 km/h",
        gear: "7th - 8th",
        difficulty: "★★★☆☆"
      },
      en: {
        title: "S2: Bayshore Route (Ariake JCT → Tatsumi JCT)",
        desc: "Wide high-speed straightaways allowing speeds up to 320 km/h, leading into the technical fast sweepers of Tatsumi JCT.",
        length: "2.5 km",
        speed: "320 km/h",
        gear: "7th - 8th",
        difficulty: "★★★☆☆"
      },
      img: "./assets/hero_shutoko.jpg"
    },
    s3: {
      ja: {
        title: "S3: 9号深川線 (辰巳JCT → 箱崎JCT)",
        desc: "運河沿いの高架を一直線に駆け抜けるロングストレート。下町の景観と高層タワーマンション群を両脇に見ながらリズミカルに走ります。",
        length: "6.3 km",
        speed: "320 km/h",
        gear: "7th",
        difficulty: "★★☆☆☆"
      },
      en: {
        title: "S3: Route 9 Fukagawa Line (Tatsumi JCT → Hakozaki JCT)",
        desc: "An elevated highway section spanning canals and urban waterways. Smooth high-speed rhythmic cruising through eastern Tokyo.",
        length: "6.3 km",
        speed: "320 km/h",
        gear: "7th",
        difficulty: "★★☆☆☆"
      },
      img: "./assets/rain_night.jpg"
    },
    s4: {
      ja: {
        title: "S4: 6号向島線・箱崎 (箱崎JCT → 江戸橋JCT)",
        desc: "首都高の名所『箱崎ロータリー』と立体多層ジャンクション。複雑な分岐と狭い車線幅、連続する中速S字コーナーが集中力を試します。",
        length: "0.9 km",
        speed: "240 km/h",
        gear: "4th - 5th",
        difficulty: "★★★★☆"
      },
      en: {
        title: "S4: Route 6 Mukojima Line (Hakozaki JCT → Edobashi JCT)",
        desc: "The famous multi-level labyrinth of Hakozaki Junction. Demanding precise braking, tight lane discipline, and rapid steering transitions.",
        length: "0.9 km",
        speed: "240 km/h",
        gear: "4th - 5th",
        difficulty: "★★★★☆"
      },
      img: "./assets/cockpit_hud.jpg"
    },
    s5: {
      ja: {
        title: "S5: C1 都心環状線 (江戸橋JCT → 銀座・京橋)",
        desc: "銀座・日本橋の地下や掘割（地面より低い半地下構造）を抜けるテクニカル区間。ビルの谷間とトンネル照明のコントラストが美しい名所です。",
        length: "3.7 km",
        speed: "220 km/h",
        gear: "3rd - 5th",
        difficulty: "★★★★★"
      },
      en: {
        title: "S5: C1 Inner Circular Route (Edobashi → Ginza Trenches)",
        desc: "Sunken highway trenches beneath the streets of Ginza and Kyobashi. Highly technical chicane sections with towering buildings above.",
        length: "3.7 km",
        speed: "220 km/h",
        gear: "3rd - 5th",
        difficulty: "★★★★★"
      },
      img: "./assets/city_mesh_overview.jpg"
    },
    s6: {
      ja: {
        title: "S6: 1号羽田線 (銀座 → 浜崎橋JCT → 芝浦)",
        desc: "フィニッシュストレートへの助走区間。浜崎橋JCTの合流を抜け、スタートライン（11号台場線入口）へと戻る高速ループの完結セクター。",
        length: "0.8 km",
        speed: "280 km/h",
        gear: "5th - 6th",
        difficulty: "★★★☆☆"
      },
      en: {
        title: "S6: Route 1 Haneda Line (Ginza → Hamazakibashi → Shibaura)",
        desc: "The final sprint connecting through Hamazakibashi back to the start line at Shibaura, completing the 17.5km loop.",
        length: "0.8 km",
        speed: "280 km/h",
        gear: "5th - 6th",
        difficulty: "★★★☆☆"
      },
      img: "./assets/landmark_names.jpg"
    }
  };

  // --- Multi-Language Toggle ---
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  const originalTitle = document.title;
  // Keep the original (Japanese) markup so keys without a ja entry can be restored
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.dataset.i18nJa = el.innerHTML;
  });
  function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const html = (translations[lang] && translations[lang][key]) || (lang === 'ja' ? el.dataset.i18nJa : null);
      if (html) el.innerHTML = html;
    });
    document.documentElement.lang = lang;
    document.title = lang === 'ja' ? originalTitle : 'SHUTOKO TOKYO LOOP | 3D City Model Shuto Expressway Racing Simulator';
    if (langSwitchBtn) {
      langSwitchBtn.textContent = lang === 'ja' ? '🌐 EN / 日本語' : '🌐 JP / English';
    }
    // Update active course preview
    const activeCourseBtn = document.querySelector('.course-item-btn.active');
    if (activeCourseBtn) {
      const secKey = activeCourseBtn.getAttribute('data-section');
      updateCoursePreview(secKey);
    }
  }

  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ja' ? 'en' : 'ja';
      updateLanguage(newLang);
    });
  }

  // --- Course Selector Interaction ---
  const courseButtons = document.querySelectorAll('.course-item-btn');
  const coursePreviewImg = document.getElementById('coursePreviewImg');
  const coursePreviewTitle = document.getElementById('coursePreviewTitle');
  const coursePreviewDesc = document.getElementById('coursePreviewDesc');
  const courseMetricLength = document.getElementById('courseMetricLength');
  const courseMetricSpeed = document.getElementById('courseMetricSpeed');
  const courseMetricGear = document.getElementById('courseMetricGear');

  function updateCoursePreview(sectionKey) {
    const data = courseData[sectionKey];
    if (!data) return;
    const localized = data[currentLang] || data.ja;
    if (coursePreviewImg) coursePreviewImg.src = data.img;
    if (coursePreviewTitle) coursePreviewTitle.textContent = localized.title;
    if (coursePreviewDesc) coursePreviewDesc.textContent = localized.desc;
    if (courseMetricLength) courseMetricLength.textContent = localized.length;
    if (courseMetricSpeed) courseMetricSpeed.textContent = localized.speed;
    if (courseMetricGear) courseMetricGear.textContent = localized.gear;
  }

  courseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      courseButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const secKey = btn.getAttribute('data-section');
      updateCoursePreview(secKey);
    });
  });

  // --- Driving Modes Tabs ---
  const modeTabBtns = document.querySelectorAll('.mode-tab-btn');
  const modeTabContents = document.querySelectorAll('.mode-tab-content');

  modeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMode = btn.getAttribute('data-mode');
      modeTabBtns.forEach(b => b.classList.remove('active'));
      modeTabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetContent = document.getElementById(`mode-${targetMode}`);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // --- Environment Interactive Simulator ---
  const timeBtns = document.querySelectorAll('[data-time]');
  const weatherBtns = document.querySelectorAll('[data-weather]');
  const envShowcaseImg = document.getElementById('envShowcaseImg');
  const envGripValue = document.getElementById('envGripValue');
  const envGripBar = document.getElementById('envGripBar');
  const envVisibilityValue = document.getElementById('envVisibilityValue');
  const envVisibilityBar = document.getElementById('envVisibilityBar');
  const envSafeSpeedValue = document.getElementById('envSafeSpeedValue');

  let activeTime = 'night';
  let activeWeather = 'clear';

  function updateEnvironmentState() {
    let imgSrc = './assets/hero_shutoko.jpg';
    let grip = 100;
    let visibility = 95;
    let safeSpeed = '240 km/h';

    if (activeWeather === 'rain') {
      grip = 65;
      visibility = 60;
      safeSpeed = '160 km/h';
      imgSrc = './assets/rain_night.jpg';
    } else {
      if (activeTime === 'sunset') {
        imgSrc = './assets/sunset_rainbow_bridge.jpg';
        visibility = 90;
        safeSpeed = '230 km/h';
      } else if (activeTime === 'day') {
        imgSrc = './assets/city_mesh_overview.jpg';
        visibility = 100;
        safeSpeed = '250 km/h';
      } else {
        imgSrc = './assets/night_headlights.jpg';
        visibility = 85;
        safeSpeed = '240 km/h';
      }
    }

    if (envShowcaseImg) envShowcaseImg.src = imgSrc;
    if (envGripValue) envGripValue.textContent = `${grip}%`;
    if (envGripBar) {
      envGripBar.style.width = `${grip}%`;
      envGripBar.style.background = grip < 70 ? 'linear-gradient(90deg, #ff1e56, #ff7700)' : 'linear-gradient(90deg, #00f0ff, #00ff88)';
    }
    if (envVisibilityValue) envVisibilityValue.textContent = `${visibility}%`;
    if (envVisibilityBar) envVisibilityBar.style.width = `${visibility}%`;
    if (envSafeSpeedValue) envSafeSpeedValue.textContent = safeSpeed;
  }

  timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTime = btn.getAttribute('data-time');
      updateEnvironmentState();
    });
  });

  weatherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      weatherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeWeather = btn.getAttribute('data-weather');
      updateEnvironmentState();
    });
  });

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Hero Live Telemetry Simulation Effect ---
  const liveSpeed = document.getElementById('liveTelemetrySpeed');
  const liveGForce = document.getElementById('liveTelemetryGForce');
  if (liveSpeed && liveGForce) {
    setInterval(() => {
      const baseSpeed = 288;
      const speedVariation = Math.floor(Math.random() * 9) - 4;
      liveSpeed.textContent = `${baseSpeed + speedVariation} km/h`;

      const gVal = (1.4 + Math.random() * 0.3).toFixed(2);
      liveGForce.textContent = `${gVal} G`;
    }, 450);
  }
});
