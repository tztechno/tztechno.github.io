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
      launch_app: "今すぐ体験する",
      hero_tag: "リアル東京 3D都市モデル × 首都高 17.5km フル周回",
      hero_title: "リアルな東京の夜を、<br><span class='gradient-text'>フォーミュラマシンで駆け抜けろ。</span>",
      hero_desc: "Project PLATEAUの3D都市モデル実データをベースに再現された首都高周回コース（約17.5km）。最先端のWebGLグラフィックスとリアルな走行物理で、ブラウザから即座に東京のハイウェイを疾走するシミュレーター体験。",
      btn_play_now: "ブラウザで体験する (無料)",
      btn_product_details: "プロダクト詳細を見る",
      stat_distance: "コース全長",
      stat_modes: "運転モード",
      stat_max_speed: "最高速度",
      stat_fidelity: "リアル都市データ",
      metrics_1_title: "17.5 km",
      metrics_1_desc: "首都高フルループ周回",
      metrics_2_title: "350+ km/h",
      metrics_2_desc: "超高速フォーミュラ走行",
      metrics_3_title: "3 Modes",
      metrics_3_desc: "完全自動・半自動・手動",
      metrics_4_title: "0 Install",
      metrics_4_desc: "ブラウザ即起動 & アプリ版",
      feat_tag: "CORE FEATURES",
      feat_title: "最先端技術が融合するドライビング体験",
      feat_desc: "高精細な3D都市モデル、緻密なコーナリング物理、昼夜・雨天のダイナミックな環境変化を余すところなく体験できます。",
      f1_title: "リアルな東京3D都市モデル",
      f1_desc: "実測データから生成されたレインボーブリッジ、東京タワー、林立する高層ビル群、複雑な高架ジャンクションを圧倒的スケールで再現。",
      f2_title: "3段階のドライビング制御",
      f2_desc: "安全な高速巡航をこなす完全自動（AUTO）、加速スリルを味わう半自動（SEMI）、腕が試される完全手動（MANUAL）をワンキーで切り替え。",
      f3_title: "ダイナミック天候＆グリップ変化",
      f3_desc: "昼・夕暮れ・夜のライティング遷移に加え、雨天時にはリアルな路面反射とウェットコンディション（グリップ力65%低下）をシミュレート。",
      f4_title: "4視点マルチカメラ",
      f4_desc: "後方追従、低重心なコックピット視点、コース全体を見渡す上空カメラ、マウスで自由自在に見回せるフリーカメラを搭載。",
      f5_title: "本格HUD・テレメトリ解析",
      f5_desc: "横Gメーター、カーブごとの推奨安全速度サジェスト、ミニマップ、セクター別ラップタイム計測などレーシング計器を完備。",
      f6_title: "クロスプラットフォーム",
      f6_desc: "PCブラウザですぐに遊べるWebGL版に加え、Apple Silicon Mac / Windows 向けの超高速ネイティブデスクトップアプリも提供。",
      course_tag: "COURSE GUIDE",
      course_title: "首都高 17.5km ループ 全6区間",
      course_desc: "芝浦JCTからレインボーブリッジを渡り、湾岸線、深川線、箱崎JCT、銀座の地下掘割を経て浜崎橋へと戻る名コース。",
      env_tag: "WEATHER & TIME",
      env_title: "リアルタイム環境シミュレーション",
      env_desc: "時間帯や天候によって路面コンディションと景観が劇的に変化します。雨天時はブレーキングと横G管理が勝敗を分けます。",
      modes_tag: "DRIVING STYLES",
      modes_title: "あなたの好みに合わせた3つの走行モード",
      modes_desc: "走行中いつでも「M」キーひとつで切り替え可能。景色を楽しみたい初心者からタイムアタックに挑む上級者まで。",
      specs_tag: "PLATFORMS & SPECS",
      specs_title: "動作環境・対応プラットフォーム",
      specs_desc: "ブラウザひとつでどこからでもアクセス。より安定したフレームレートを求める方には専用デスクトップ版も用意。",
      faq_tag: "FAQ",
      faq_title: "よくあるご質問",
      faq_desc: "操作方法やシステム要件についてのお問い合わせ",
      cta_title: "東京の夜景へ、今すぐ飛び込もう。",
      cta_desc: "インストール不要。ブラウザを開くだけで、リアルな首都高を350km/hで駆け抜ける極上のドライビング体験が始まります。",
      cta_btn_main: "今すぐ無料でプレイする",
      cta_btn_matrix: "Cyber Matrix 公式ページへ"
    },
    en: {
      nav_overview: "Overview",
      nav_features: "Features",
      nav_modes: "Driving Modes",
      nav_course: "Course Guide",
      nav_specs: "Specs",
      nav_faq: "FAQ",
      launch_app: "Launch App Now",
      hero_tag: "3D Tokyo Digital Twin × 17.5km Shuto Expressway Circuit",
      hero_title: "Race Through Tokyo's Night<br><span class='gradient-text'>In a High-Speed Formula Car.</span>",
      hero_desc: "An authentic 17.5km Shuto Expressway loop recreated with high-precision 3D city data from Project PLATEAU. Experience cutting-edge WebGL graphics and realistic vehicle physics instantly in your browser.",
      btn_play_now: "Launch in Browser (Free)",
      btn_product_details: "View Product Details",
      stat_distance: "Total Distance",
      stat_modes: "Drive Modes",
      stat_max_speed: "Top Speed",
      stat_fidelity: "City Data",
      metrics_1_title: "17.5 km",
      metrics_1_desc: "Full Shuto Expressway Loop",
      metrics_2_title: "350+ km/h",
      metrics_2_desc: "Formula Car Velocity",
      metrics_3_title: "3 Modes",
      metrics_3_desc: "Full Auto, Semi-Auto, Manual",
      metrics_4_title: "0 Install",
      metrics_4_desc: "Instant WebGL & Native Apps",
      feat_tag: "CORE FEATURES",
      feat_title: "State-of-the-Art Driving Simulation",
      feat_desc: "High-resolution 3D city models, precise lateral-G physics, and dynamic daylight/rain environment transitions.",
      f1_title: "Real 3D Tokyo Cityscape",
      f1_desc: "Recreating Tokyo Tower, Rainbow Bridge, skyline towers, and multi-tier elevated junctions with exact geographic fidelity.",
      f2_title: "3-Tier Driving Control",
      f2_desc: "Switch on the fly between Autonomous cruise (AUTO), assisted throttle thrill (SEMI), or pure manual mastery (MANUAL).",
      f3_title: "Dynamic Weather & Wet Grip",
      f3_desc: "Seamless lighting transitions from Day to Golden Hour to Night. Rain alters visual reflections and reduces tire grip by 35%.",
      f4_title: "4 Multi-Angle Cameras",
      f4_desc: "Chase Cam, low-slung Cockpit view, Overhead satellite angle, and fully orbitable Free Cam with mouse controls.",
      f5_title: "Professional Racing HUD",
      f5_desc: "Real-time G-force telemetry, safe cornering speed suggestions, live sector lap times, and dynamic mini-map.",
      f6_title: "Cross-Platform Freedom",
      f6_desc: "Play instantly in modern WebGL2 browsers, or download ultra-smooth native binaries for macOS (Apple Silicon) and Windows.",
      course_tag: "COURSE GUIDE",
      course_title: "17.5km Shuto Loop — 6 Iconic Sectors",
      course_desc: "From Shibaura JCT over the Rainbow Bridge, cruising Wangan and Fukagawa, navigating Hakozaki JCT, through Ginza tunnels back to Hamazakibashi.",
      env_tag: "WEATHER & TIME",
      env_title: "Real-Time Environmental Simulator",
      env_desc: "Lighting and grip dynamics shift dramatically. Wet asphalt demands calculated braking and lateral G-force control.",
      modes_tag: "DRIVING STYLES",
      modes_title: "3 Distinct Modes Tailored for Every Driver",
      modes_desc: "Switch anytime mid-race with the 'M' key. Enjoy cinematic city views or push the limits of tire adhesion in manual mode.",
      specs_tag: "PLATFORMS & SPECS",
      specs_title: "System Requirements & Platforms",
      specs_desc: "Zero-install web access on any standard PC browser. Dedicated standalone desktop editions available for optimal frame rates.",
      faq_tag: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Find quick answers regarding controls, platform support, and features.",
      cta_title: "Dive Into Tokyo's Neon Highways Today.",
      cta_desc: "No installation required. Launch straight from your browser and feel the rush of 350 km/h formula racing in Tokyo.",
      cta_btn_main: "Play Online For Free",
      cta_btn_matrix: "Official Cyber Matrix Page"
    }
  };

  let currentLang = 'ja';

  // --- Course Data ---
  const courseData = {
    s1: {
      ja: {
        title: "S1: 11号台場線 (芝浦JCT → レインボーブリッジ)",
        desc: "芝浦JCTのタイトな360度ループを上り、海面から約50mの高さに架かるレインボーブリッジへ。東京湾と夜景を一望できる爽快な絶景区間です。",
        length: "3.2 km",
        speed: "290 km/h",
        gear: "6th - 7th",
        difficulty: "★★☆☆☆"
      },
      en: {
        title: "S1: Route 11 Daiba Line (Shibaura JCT → Rainbow Bridge)",
        desc: "Climb the 360-degree loop at Shibaura JCT onto the iconic Rainbow Bridge, 50 meters above Tokyo Bay. Unrivaled panoramic views of Tokyo Tower and waterfront skyline.",
        length: "3.2 km",
        speed: "290 km/h",
        gear: "6th - 7th",
        difficulty: "★★☆☆☆"
      },
      img: "./assets/sunset_rainbow_bridge.jpg"
    },
    s2: {
      ja: {
        title: "S2: 湾岸線 (有明JCT → 辰巳JCT)",
        desc: "広大な直線が続く高速セクション。最高速350km/hオーバーでのハイスピード巡航と、辰巳JCTの高速ブラインドコーナーへのブレーキングが鍵となります。",
        length: "3.8 km",
        speed: "350+ km/h",
        gear: "7th - 8th",
        difficulty: "★★★☆☆"
      },
      en: {
        title: "S2: Bayshore Route (Ariake JCT → Tatsumi JCT)",
        desc: "Wide high-speed straightaways allowing speeds above 350 km/h, leading into the technical fast sweepers of Tatsumi JCT.",
        length: "3.8 km",
        speed: "350+ km/h",
        gear: "7th - 8th",
        difficulty: "★★★☆☆"
      },
      img: "./assets/hero_shutoko.jpg"
    },
    s3: {
      ja: {
        title: "S3: 9号深川線 (辰巳JCT → 箱崎JCT)",
        desc: "運河沿いの高架を一直線に駆け抜けるロングストレート。下町の景観と高層タワーマンション群を両脇に見ながらリズミカルに走ります。",
        length: "3.5 km",
        speed: "320 km/h",
        gear: "7th",
        difficulty: "★★☆☆☆"
      },
      en: {
        title: "S3: Route 9 Fukagawa Line (Tatsumi JCT → Hakozaki JCT)",
        desc: "An elevated highway section spanning canals and urban waterways. Smooth high-speed rhythmic cruising through eastern Tokyo.",
        length: "3.5 km",
        speed: "320 km/h",
        gear: "7th",
        difficulty: "★★☆☆☆"
      },
      img: "./assets/city_mesh_overview.jpg"
    },
    s4: {
      ja: {
        title: "S4: 6号向島線・箱崎 (箱崎JCT → 江戸橋JCT)",
        desc: "首都高の名所『箱崎ロータリー』と立体多層ジャンクション。複雑な分岐と狭い車線幅、連続する中速S字コーナーが集中力を試します。",
        length: "2.1 km",
        speed: "240 km/h",
        gear: "4th - 5th",
        difficulty: "★★★★☆"
      },
      en: {
        title: "S4: Route 6 Mukojima Line (Hakozaki JCT → Edobashi JCT)",
        desc: "The famous multi-level labyrinth of Hakozaki Junction. Demanding precise braking, tight lane discipline, and rapid steering transitions.",
        length: "2.1 km",
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
        length: "2.9 km",
        speed: "220 km/h",
        gear: "3rd - 5th",
        difficulty: "★★★★★"
      },
      en: {
        title: "S5: C1 Inner Circular Route (Edobashi → Ginza Trenches)",
        desc: "Sunken highway trenches beneath the streets of Ginza and Kyobashi. Highly technical chicane sections with towering buildings above.",
        length: "2.9 km",
        speed: "220 km/h",
        gear: "3rd - 5th",
        difficulty: "★★★★★"
      },
      img: "./assets/rain_night.jpg"
    },
    s6: {
      ja: {
        title: "S6: 1号羽田線 (銀座 → 浜崎橋JCT → 芝浦)",
        desc: "フィニッシュストレートへの助走区間。浜崎橋JCTの合流を抜け、スタートライン（11号台場線入口）へと戻る高速ループの完結セクター。",
        length: "2.0 km",
        speed: "280 km/h",
        gear: "5th - 6th",
        difficulty: "★★★☆☆"
      },
      en: {
        title: "S6: Route 1 Haneda Line (Ginza → Hamazakibashi → Shibaura)",
        desc: "The final sprint connecting through Hamazakibashi back to the start line at Shibaura, completing the 17.5km loop.",
        length: "2.0 km",
        speed: "280 km/h",
        gear: "5th - 6th",
        difficulty: "★★★☆☆"
      },
      img: "./assets/hero_shutoko.jpg"
    }
  };

  // --- Multi-Language Toggle ---
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    if (langSwitchBtn) {
      langSwitchBtn.textContent = lang === 'ja' ? 'EN / 日本語' : 'JP / English';
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
        imgSrc = './assets/cockpit_hud.jpg';
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
