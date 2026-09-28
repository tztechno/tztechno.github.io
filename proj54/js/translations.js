const translations = {
  en: {
    // Navigation
    navFeatures: "Features",
    navPhysics: "Physics & Tech",
    navViews: "Cameras",
    navCircuit: "Monaco Track",
    navControls: "Controls",
    navFaq: "FAQ",
    navCta: "Launch App",
    
    // Hero
    heroBadge: "🏎️ Real-Time MuJoCo WASM Physics Simulator",
    heroTitleLine1: "CONQUER MONACO",
    heroTitleLine2: "IN PURE PHYSICS.",
    heroSubtitle: "Experience the world's most prestigious street circuit in your browser and desktop. Powered by MuJoCo WebAssembly physics engine and Three.js 3D rendering.",
    heroCtaPrimary: "Drive Monaco Now",
    heroCtaSecondary: "Explore Features",
    
    // Telemetry Box
    telemetryTopSpeed: "TOP SPEED",
    telemetryPhysicsRate: "PHYSICS RATE",
    telemetryLapDistance: "CIRCUIT LENGTH",
    telemetryModes: "DRIVE MODES",
    telemetryModesVal: "Manual / AI Demo",
    
    // Key highlights
    statSpeed: "300+ km/h",
    statSpeedLabel: "Realistic Top Speed",
    statPhysics: "1000 Hz",
    statPhysicsLabel: "MuJoCo WASM Physics Loop",
    statTrack: "3,211 m",
    statTrackLabel: "Precision Elevation Trace",
    statViews: "3 Views",
    statViewsLabel: "Cockpit, Chase, Trackside",

    // Section 1: Features
    featuresTag: "ENGINEERED FOR EXCELLENCE",
    featuresTitle: "Next-Gen Racing Simulation",
    featuresSubtitle: "Built from the ground up with cutting-edge web technologies, bringing professional robotics physics directly to your screen.",
    
    feat1Title: "MuJoCo WASM Physics",
    feat1Desc: "Google DeepMind's benchmark multi-joint physics engine running in WebAssembly. Accurate suspension, downforce, multi-wheel traction, and collision dynamics.",
    
    feat2Title: "Satellite-Calibrated Terrain",
    feat2Desc: "Built with NASA SRTM 1″ elevation data and blended with European Space Agency Sentinel-2 satellite imagery for Monaco's iconic hills and Mediterranean coastline.",
    
    feat3Title: "Dual Driving Modes",
    feat3Desc: "Test your skill in precision Manual mode with speed-sensitive steering, or sit back and observe the AI Demo Autopilot carving the optimal racing line.",
    
    feat4Title: "Speed-Sensitive Steering",
    feat4Desc: "High-speed stability management automatically limits maximum wheel angle at velocity, mimicking real-world aerodynamic vehicle dynamics.",
    
    feat5Title: "Triple Dynamic Cameras",
    feat5Desc: "Switch seamlessly between immersive helmet Cockpit view, dynamic Chase cam, and smart spectator Trackside cameras situated around the circuit.",
    
    feat6Title: "Overhead Radar & HUD",
    feat6Desc: "Real-time telemetry showing live speed (km/h), current & best lap times, steering angle telemetry, and top-down 150m radar tracking.",

    // Section 2: Technology Deep Dive
    techTag: "UNDER THE HOOD",
    techTitle: "Robotics Physics Meets 3D Web Graphics",
    techSubtitle: "How modern WebAssembly and Three.js make impossible web simulations a reality.",
    techCard1Title: "Full MJCF Vehicle Model",
    techCard1Desc: "The F1 car is modeled with rigid bodies, four independent suspension joints, steering actuators, tire friction cones, and downforce aerodynamics calculated at sub-millisecond timesteps.",
    techCard2Title: "Real-World Monaco Elevation",
    techCard2Desc: "The circuit center line is mapped across heightfield elevation grids. Road cambers, tunnel gradients, and waterfront chicane dips mirror the true geography of the Principality.",
    techCard3Title: "Seamless Cross-Platform",
    techCard3Desc: "Runs instantly in any modern web browser with zero installation, and is available as a native high-performance standalone app for macOS and Windows.",
    
    // Section 3: Views Gallery
    viewsTag: "IMMERSIVE PERSPECTIVES",
    viewsTitle: "Experience Every Angle of the Grand Prix",
    viewsSubtitle: "Switch views on the fly with a single keystroke or click to feel the raw speed and beauty of Monaco.",
    tabCockpit: "🪖 Cockpit View",
    tabChase: "🚗 Chase View",
    tabTrackside: "🎥 Trackside View",
    
    viewCockpitTitle: "Driver's Eye Helmet Cam",
    viewCockpitDesc: "Sit inside the cockpit. Feel the rush as guardrails flash by at 280 km/h and navigate the famous low-speed Fairmont Hairpin inches from the barrier.",
    viewChaseTitle: "Dynamic Chase Camera",
    viewChaseDesc: "Positioned right behind the rear wing. Perfect for mastering your braking points, steering balance, and appreciating the car's suspension reaction.",
    viewTracksideTitle: "TV Broadcast Trackside Posts",
    viewTracksideDesc: "Spectate like a VIP. Smart cameras placed across Grand Hotel, Casino Square, and the Tunnel automatically track the car as it roars past.",

    // Section 4: Circuit Guide
    trackTag: "CIRCUIT DE MONACO",
    trackTitle: "Master the Crown Jewel of Motorsport",
    trackSubtitle: "3.2 kilometers of unforgiving asphalt, zero run-off areas, and legendary corners where millimetre precision makes all the difference.",
    corner1Name: "Sainte-Dévote (Turn 1)",
    corner1Desc: "Tight uphill 90-degree right hander. Heavy braking zone right after start/finish straight.",
    corner2Name: "Casino Square (Turn 4)",
    corner2Desc: "Blinded crest and rapid right turn past the famous Monte Carlo Casino.",
    corner3Name: "Fairmont Hairpin (Turn 6)",
    corner3Desc: "The slowest and most famous hairpin corner in all of motorsport (~45 km/h).",
    corner4Name: "The Tunnel & Chicane (Turn 9-11)",
    corner4Desc: "Full throttle blast under the tunnel followed by intense braking into Nouvelle Chicane.",
    corner5Name: "La Rascasse & Anthony Noghès",
    corner5Desc: "Tricky tight turns wrapping around the harbor restaurant leading back onto the pit straight.",

    // Section 5: Controls
    controlsTag: "INTUITIVE CONTROLS",
    controlsTitle: "Master the Machine",
    controlsSubtitle: "Designed for effortless keyboard navigation or mouse/touch control.",
    keySteer: "Steer Left / Right",
    keySteerDesc: "Smooth progressive angle adjustment",
    keyCenter: "Center Steering",
    keyCenterDesc: "Instantly return wheels to straight forward",
    keyAccel: "Accelerate (Pedal)",
    keyAccelDesc: "Gradual 0-100 km/h burst in 3.0s",
    keyHold: "Cruise Hold",
    keyHoldDesc: "Lock current speed automatically",
    keyBrake: "Brake / Decel",
    keyBrakeDesc: "Smooth deceleration to complete stop",
    keyReverse: "Reverse Gear",
    keyReverseDesc: "Low-speed reverse (up to 30 km/h) for barrier recovery",
    keyCamera: "Cycle Camera",
    keyCameraDesc: "Toggle between Cockpit, Chase & Trackside",
    keyMode: "Toggle Mode",
    keyModeDesc: "Instant handoff between Manual and AI Demo",

    // Section 6: Platforms & CTA
    platformTag: "AVAILABLE EVERYWHERE",
    platformTitle: "Play in Browser or Native Desktop",
    platformSubtitle: "Zero setup required. Experience instant thrills in your favorite browser or install native apps for macOS and Windows.",
    platformWeb: "Web Browser (Chrome, Safari, Edge, Firefox)",
    platformMac: "macOS (Apple Silicon & Intel)",
    platformWin: "Windows 10 / 11 (64-bit)",

    // Section 7: FAQ
    faqTag: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Everything You Need to Know",
    faq1Q: "Do I need to install anything to play?",
    faq1A: "No! Monaco Drive runs natively in any modern web browser with WebGL and WebAssembly support. Simply click the Launch App button and you're ready to drive.",
    faq2Q: "How does the physics engine work?",
    faq2A: "Monaco Drive utilizes the official @mujoco/mujoco WASM build of Google DeepMind's MuJoCo physics engine. It computes rigid-body dynamics, tire contacts, suspension springs, and downforce aerodynamics at 1000 Hz.",
    faq3Q: "Can I switch between AI Demo and Manual mode while driving?",
    faq3A: "Yes! You can toggle between Manual and AI Demo at any point. When switching to Manual, the system smoothly maintains your current speed and centers the steering for a seamless takeover.",
    faq4Q: "What happens if I hit a guardrail or roll over?",
    faq4A: "A collision warning and alert sound triggers. If you get stuck against a barrier, switch to Reverse (◀ 后退) and Accelerate to back out, or press Reset (↺) to return to the start line.",

    // Final CTA
    finalCtaTag: "START YOUR ENGINE",
    finalCtaTitle: "Ready to Take on the Streets of Monaco?",
    finalCtaSubtitle: "Jump into the cockpit right now. Free, instant, and powered by world-class physics.",
    finalCtaBtn: "Play Monaco Drive Now",
    finalCtaSubtext: "Instant launch • No account required • Full WebAssembly & Three.js experience",

    // Footer
    footerDesc: "High-precision F1 street circuit simulator powered by MuJoCo WASM and Three.js.",
    footerLinksTitle: "Quick Links",
    footerCreditsTitle: "Credits & Sources",
    footerCredit1: "Physics: MuJoCo (@mujoco/mujoco, Google DeepMind)",
    footerCredit2: "Elevation: NASA SRTM 1″ Global DEM",
    footerCredit3: "Satellite: Sentinel-2 cloudless (EOX / ESA)",
    footerCredit4: "Rendering: Three.js WebGL",
    footerRights: "© 2026 Monaco Drive. All rights reserved."
  },
  ja: {
    // Navigation
    navFeatures: "特徴",
    navPhysics: "物理演算・技術",
    navViews: "カメラ視点",
    navCircuit: "モナココース",
    navControls: "操作方法",
    navFaq: "よくある質問",
    navCta: "アプリを開く",
    
    // Hero
    heroBadge: "🏎️ 高精度 MuJoCo WASM 物理エンジン搭載 F1シミュレーター",
    heroTitleLine1: "モナコ市街地を",
    heroTitleLine2: "極限の物理で駆け抜けろ。",
    heroSubtitle: "ブラウザとデスクトップで体感する、世界最高峰の市街地サーキット。Google DeepMind発の高精度物理エンジン「MuJoCo (WASM)」と「Three.js」が織りなす究極のリアリティ。",
    heroCtaPrimary: "今すぐモナコを走る",
    heroCtaSecondary: "機能を見る",
    
    // Telemetry Box
    telemetryTopSpeed: "最高速度",
    telemetryPhysicsRate: "物理演算レート",
    telemetryLapDistance: "コース総延長",
    telemetryModes: "走行モード",
    telemetryModesVal: "手動運転 / AIデモ",
    
    // Key highlights
    statSpeed: "300+ km/h",
    statSpeedLabel: "実車さながらの最高速",
    statPhysics: "1000 Hz",
    statPhysicsLabel: "MuJoCo WASM 高速物理ループ",
    statTrack: "3,211 m",
    statTrackLabel: "精密標高トレースサーキット",
    statViews: "3視点",
    statViewsLabel: "運転席・後方・定点カメラ",

    // Section 1: Features
    featuresTag: "洗練されたシミュレーション性能",
    featuresTitle: "次世代 Web レーシング体験",
    featuresSubtitle: "最先端のWeb技術により、本格的なロボティクス物理演算をブラウザ上でそのまま実現しました。",
    
    feat1Title: "MuJoCo WASM 物理エンジン",
    feat1Desc: "Google DeepMindの高精度多体物理エンジンをWebAssemblyでリアルタイム実行。サスペンション、接地圧、ダウンフォース、接触挙動を高精度に計算します。",
    
    feat2Title: "衛星・標高データ完全再現",
    feat2Desc: "NASA SRTM 1″標高データと欧州宇宙機関（ESA）Sentinel-2衛星画像を融合。モナコ特有の高低差と地中海の美しい風景を忠実に再現。",
    
    feat3Title: "2つの走行モード",
    feat3Desc: "極限のドライビングに挑む「🎮 手動運転」と、AIが理想のレーシングラインをトレースする「🤖 AIデモ走行」。走行中いつでも即座に切り替え可能。",
    
    feat4Title: "車速感応ステアリング制御",
    feat4Desc: "実車と同様に、速度が上がるほど最大舵角を自動制限。高速走行時の安定性を確保し、本格的なコーナリング感覚を味わえます。",
    
    feat5Title: "3つの臨場感あふれるカメラ視点",
    feat5Desc: "迫力満点の🪖 運転席（Cockpit）、操作しやすい🚗 後方追従（Chase）、テレビ中継のような🎥 定点観戦（Trackside）を1キーで切り替え可能。",
    
    feat6Title: "上空レーダーマップ & HUD",
    feat6Desc: "上空150mからの俯瞰マップで自車位置を把握。車速（km/h）、ラップタイム（現在/前回/ベスト）、前輪舵角をリアルタイム表示。",

    // Section 2: Technology Deep Dive
    techTag: "テクノロジーの真髄",
    techTitle: "ロボティクス物理演算 × 3Dグラフィックス",
    techSubtitle: "ブラウザの限界を超えるWebAssemblyとThree.jsの融合。",
    techCard1Title: "精密なMJCF車両モデル",
    techCard1Desc: "F1マシンは4輪独立サスペンション、ステアリングアクチュエータ、タイヤ摩擦円、ダウンフォース空力特性をミリ秒単位で厳密に計算しています。",
    techCard2Title: "リアルなモナコの高低差",
    techCard2Desc: "SRTM標高グリッド上にサーキットの中心線を忠実に配置。坂道の上り下り、トンネルの傾斜、ヌーヴェル・シケインの起伏をリアルに体感できます。",
    techCard3Title: "Web & デスクトップ両対応",
    techCard3Desc: "インストール不要でブラウザから即座に遊べるWeb版に加え、macOS（Apple Silicon/Intel）およびWindows対応の高速デスクトップ版もラインナップ。",
    
    // Section 3: Views Gallery
    viewsTag: "マルチアングル体験",
    viewsTitle: "グランプリの熱気を感じる3つの視点",
    viewsSubtitle: "クリックやショートカットキーひとつで視点を切り替え、多彩なドライビングアングルを楽しめます。",
    tabCockpit: "🪖 運転席視点 (Cockpit)",
    tabChase: "🚗 後方視点 (Chase)",
    tabTrackside: "🎥 定点視点 (Trackside)",
    
    viewCockpitTitle: "ドライバーズ・アイ（ヘルメット視点）",
    viewCockpitDesc: "ステアリングとガードレールが目前に迫る圧倒的な迫力。時速280kmでトンネルを駆け抜け、名物ヘアピンの縁石を攻める極上のスリルを体験。",
    viewChaseTitle: "後方追従カメラ（チェイス視点）",
    viewChaseDesc: "マシンのリアウィング後方からの視点。ブレーキングポイントやステアリング舵角、サスペンションのストローク挙動を確認しながら走るのに最適です。",
    viewTracksideTitle: "TV中継風 定点カメラ（トラックサイド）",
    viewTracksideDesc: "カジノ・スクエアやグランドホテル、トンネル出口などに設置された定点観戦カメラ。走り去るF1マシンを華麗に自動追従します。",

    // Section 4: Circuit Guide
    trackTag: "モナコ市街地サーキット",
    trackTitle: "世界で最も名高い難攻不落のストリート",
    trackSubtitle: "全長3.2km、エスケープゾーン皆無のガードレールに囲まれた伝説の市街地サーキット。",
    corner1Name: "サント・デボート (第1コーナー)",
    corner1Desc: "ホームストレート直後の急減速を要する右直角コーナー。登り坂へのアプローチが勝負の鍵。",
    corner2Name: "カジノ・スクエア (第4コーナー)",
    corner2Desc: "高級ホテルとモナコ・カジノ前を通過する見通しの利かない高速ブラインドコーナー。",
    corner3Name: "フェアモント・ヘアピン (第6コーナー)",
    corner3Desc: "全サーキット中で最も低速（約45km/h）かつステアリングを限界まで切り込む名物ヘアピン。",
    corner4Name: "トンネル & ヌーヴェル・シケイン",
    corner4Desc: "全開加速で駆け抜ける暗闇のトンネルから、強烈なブレーキングで飛び込む港沿いのシケイン。",
    corner5Name: "ラ・ラスカス & アントニー・ノゲス",
    corner5Desc: "港のレストラン横を回り込むテクニカルな複合コーナー。ホームストレートへの立ち上がりが重要。",

    // Section 5: Controls
    controlsTag: "直感的な操作性",
    controlsTitle: "自在に操るコントロール",
    controlsSubtitle: "キーボードやマウスで快適に操作できる設計。",
    keySteer: "ステアリング (左右)",
    keySteerDesc: "キーボード ← / → またはスライダーで舵角をスムーズに調整",
    keyCenter: "ハンドル中央復帰",
    keyCenterDesc: "C キーで瞬時にステアリングを直進状態へ戻す",
    keyAccel: "アクセル (加速)",
    keyAccelDesc: "Space / W キーで加速。0→100km/h 約3秒の爽快な加速感",
    keyHold: "クルーズホールド (速度維持)",
    keyHoldDesc: "H キーで現在の車速を自動キープ（クルーズコントロール）",
    keyBrake: "ブレーキ (減速)",
    keyBrakeDesc: "B キーで停止までスムーズに安全減速",
    keyReverse: "バック (後退)",
    keyReverseDesc: "R キーで後退モードへ。ガードレール接触時の脱出に便利",
    keyCamera: "カメラ切り替え",
    keyCameraDesc: "V キーで運転席・後方・定点カメラを瞬時にローテーション",
    keyMode: "モード切り替え",
    keyModeDesc: "M キーで手動運転とAIデモ走行をいつでもシームレス交代",

    // Section 6: Platforms & CTA
    platformTag: "マルチプラットフォーム対応",
    platformTitle: "ブラウザでも、デスクトップアプリでも",
    platformSubtitle: "面倒な事前インストールは不要。ブラウザですぐに遊べるほか、ネイティブ動作のデスクトップ版もご利用いただけます。",
    platformWeb: "Webブラウザ版（Chrome, Safari, Edge, Firefox）",
    platformMac: "macOS版（Apple Silicon & Intel）",
    platformWin: "Windows 10 / 11 版（64-bit）",

    // Section 7: FAQ
    faqTag: "よくあるご質問",
    faqTitle: "FAQ",
    faq1Q: "遊ぶためにアプリのインストールは必要ですか？",
    faq1A: "いいえ！WebGLおよびWebAssemblyに対応した最新のブラウザであれば、インストール不要で「アプリを開く」ボタンからそのままお楽しみいただけます。",
    faq2Q: "物理エンジンはどのようなものを使用していますか？",
    faq2A: "Google DeepMind開発の高精度物理シミュレーションエンジン「MuJoCo」の公式WebAssembly版（@mujoco/mujoco）を採用しています。1000Hzの高精度ループでマシンの挙動をリアルタイム計算しています。",
    faq3Q: "走行中にAIデモと手動運転を切り替えられますか？",
    faq3A: "はい！走行中いつでも相互に切り替え可能です。AIデモから手動運転に切り替えた際は、現在の速度を維持したままスムーズに操縦を引き継げます。",
    faq4Q: "壁（ガードレール）にぶつかった時はどうすればいいですか？",
    faq4A: "アラート音と警告が表示されます。壁に引っかかった場合は「◀ 後退」を選んで「🔺 加速」でバックして脱出するか、「↺ リセット」でスタート位置に戻ることができます。",

    // Final CTA
    finalCtaTag: "エンジンを始動せよ",
    finalCtaTitle: "モナコ市街地サーキットへ、今すぐ挑戦しよう",
    finalCtaSubtitle: "ブラウザを開けばそこはモナコ。最高峰の物理演算シミュレーションを今すぐ無料で体験してください。",
    finalCtaBtn: "Monaco Drive を今すぐプレイ",
    finalCtaSubtext: "即座に起動 • アカウント登録不要 • WebAssembly & Three.js フル稼働",

    // Footer
    footerDesc: "MuJoCo WASM と Three.js で実現した、最高峰のモナコ市街地F1サーキットシミュレーター。",
    footerLinksTitle: "クイックリンク",
    footerCreditsTitle: "出典・クレジット",
    footerCredit1: "物理演算: MuJoCo (@mujoco/mujoco, Google DeepMind)",
    footerCredit2: "標高データ: NASA SRTM 1″ Global DEM",
    footerCredit3: "衛星画像: Sentinel-2 cloudless (EOX / ESA)",
    footerCredit4: "レンダリング: Three.js WebGL",
    footerRights: "© 2026 Monaco Drive. All rights reserved."
  }
};
