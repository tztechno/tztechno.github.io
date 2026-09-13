// i18n Dictionary for Terrain Rainfall-Runoff Simulator Landing Page
const translations = {
  ja: {
    // Meta & Brand
    pageTitle: "Terrain Rainfall-Runoff Simulator — 地形 降雨流出3Dシミュレーター",
    brandName: "RainSimulator",
    brandSubtitle: "3D地形 降雨流出シミュレーター",

    // Navigation
    navFeatures: "特徴",
    navDetails: "コア機能",
    navDemo: "体験デモ",
    navUseCases: "活用シーン",
    navCompare: "比較",
    navPricing: "価格・購入",
    navFaq: "FAQ",
    navBuyBtn: "今すぐ購入 ¥1,980",

    // Hero Section
    heroBadge: "デスクトップ専用 高精度物理シミュレーター",
    heroTitle: "3D地形 × 浅水方程式。<br><span class=\"gradient-text\">降雨と水の流れ</span>をリアルタイム可視化",
    heroSubtitle: "DEMやOBJなどの3D地形データに雨を降らせ、水がどのように集まり、流れていくかを浅水方程式（仮想パイプモデル）で高精度に物理シミュレーション。直感的なGUI、MP4動画出力、浸水ピーク解析までローカル環境で完全完結。",
    heroBuyCta: "今すぐ購入する（¥1,980）",
    heroDemoCta: "機能デモを体験する",
    heroMetaPlatforms: "Windows 10/11 & macOS (Apple Silicon / Intel) 対応",
    heroMetaOffline: "完全オフライン動作・データ外部送信なし",
    heroMetaOneTime: "買い切り価格・追加課金なし",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "浅水方程式",
    stat1Desc: "Virtual Pipe Modelによる高速・安定した流体数値計算",
    stat2Number: "3D",
    stat2Label: "リアルタイム地形描画",
    stat2Desc: "Three.jsによる標高カラーマップ＆直感的な回転・ズーム",
    stat3Number: "0 sec",
    stat3Label: "クラウド遅延ゼロ",
    stat3Desc: "すべての処理がお手元のPCローカルで安全かつ高速に完結",
    stat4Number: "4+",
    stat4Label: "多彩な解析マップ出力",
    stat4Desc: "流出動画・最大水深・流路網・遅延ピーク水位上昇マップ",

    // Core Features
    featuresSectionBadge: "CORE CAPABILITIES",
    featuresSectionTitle: "研究から実務まで。直感と精度を両立した機能群",
    featuresSectionSubtitle: "専門的な流体シミュレーションを、誰でも数クリックで直感的に扱えるモダンなデスクトップUIに凝縮しました。",

    feat1Title: "3D地形インポート & リアルタイムプレビュー",
    feat1Desc: "QGISやBlenderから出力したOBJメッシュやDEMデータを即座に読み込み。標高に応じたカラーマップ（青=低地、茶〜白=高地）で3Dプレビュー。手元にデータがなくても、ボタン一つで複雑な谷を持つサンプル地形を自動生成できます。",
    feat1Tag: "3D OBJ / DEM対応",

    feat2Title: "直感的な降雨・環境パラメータ制御",
    feat2Desc: "天気予報でおなじみの「降雨強度 (mm/h)」や「降雨継続時間」を設定可能。さらに蒸発・浸透損失量、時間刻み dt、パイプ断面積係数を細かく調整でき、舗装路面から山林地まで多様な透水条件を柔軟にシミュレーションします。",
    feat2Tag: "物理パラメータ自在",

    feat3Title: "降雨流出アニメーション (MP4/GIF出力)",
    feat3Desc: "陰影起伏図（ヒルシェード）に時間変化する水深を重ね合わせた高品質な流出アニメーションを生成。固定カラースケールにより、一目で水深の変化が把握可能。プレゼンや教材、論文報告に使えるMP4/GIF形式で書き出せます。",
    feat3Tag: "MP4 / GIF 動画書き出し",

    feat4Title: "インタラクティブ最大水深 & ピーク時刻解析",
    feat4Desc: "シミュレーション全体の最大水深ヒートマップを生成。マップ上の任意の地点をクリックするだけで、その地点の「標高」「最大水深」「水深の時系列推移グラフ」、そして雨が止んだ後に訪れる「遅延ピーク時刻」まで精密に解析します。",
    feat4Tag: "地点クリック詳細分析",

    feat5Title: "集水・流路網マップ & 排水遅延アラート",
    feat5Desc: "各セルを通過した流量を時間積算したGIS流路網マップを対数表示。さらに「雨が止んだ後も水位が上昇し続けている危険地点」をオレンジ色で自動ハイライトし、上流からの流入が集中する滞水リスクエリアを瞬時に特定します。",
    feat5Tag: "リスク早期警告",

    feat6Title: "質量収支検証 & 完全ローカルスタンドアロン",
    feat6Desc: "「降雨量 = 貯留 + 流出 + 損失」の質量保存則を自動検証し、数値計算の安定性を可視化。クラウドにデータを一切送信しないTauri + Pythonローカル設計のため、機密性の高い地形データも安全に扱えます。",
    feat6Tag: "ローカル完結・セキュリティ",

    // Interactive Demo Section
    demoSectionBadge: "INTERACTIVE SIMULATOR DEMO",
    demoSectionTitle: "LP上で体験する「地点別ピーク水深解析」",
    demoSectionSubtitle: "下のシミュレーション結果マップの各地点（尾根・斜面・谷底・合流点など）をクリックしてください。<br>地形ごとの水の集まり方や、ピーク時刻のズレをリアルタイムに体験できます。",
    demoMapHint: "マップ上のマーカーまたは任意の地点をクリック",
    demoPointTitle: "選択地点の解析データ",
    demoElevation: "地表標高",
    demoMaxDepth: "最大到達水深",
    demoPeakTime: "最大水深ピーク時刻",
    demoRiskLevel: "浸水リスク判定",
    demoChartTitle: "水深の時系列推移 [m] (シミュレーション時間)",
    demoChartDesc: "※ 尾根は雨天直後にピークを迎えすぐ排水されますが、谷底や合流点は雨が止んだ後も上流からの流入で水位が上昇し続けます。",
    demoSelectRidge: "地点A: 山頂・尾根（即時排水）",
    demoSelectSlope: "地点B: 中腹斜面（一時通過）",
    demoSelectValley: "地点C: 谷底本流（遅延ピーク滞水）",
    demoSelectBasin: "地点D: 出口合流点（最大浸水危険域）",

    // Use Cases
    useCaseSectionBadge: "USE CASES",
    useCaseSectionTitle: "幅広い分野で活用される流水シミュレーション",
    useCaseSectionSubtitle: "専門的な土木防災からクリエイティブ、教育まで、多彩な現場で価値を発揮します。",

    useCase1Title: "防災計画・ハザード事前検討",
    useCase1Desc: "局地的な豪雨（ゲリラ豪雨）が発生した際、どの谷筋に水が集まり、どのタイミングで低地が冠水するかを直感的に事前検証。自治体や自主防災組織の検討資料として。",
    useCase2Title: "土木・建築・敷地造成計画",
    useCase2Desc: "造成地や法面、開発エリアにおける自然排水経路の確認や、雨水貯留施設・側溝配置の初期検討における迅速なシミュレーションツールとして。",
    useCase3Title: "地理・環境・大学での教育・研究",
    useCase3Desc: "水文学や砂防工学、地形学の講義において、雨水流出や浅水方程式の挙動を視覚的に解説するインタラクティブな教材として最適です。",
    useCase4Title: "ゲーム開発・3D環境レベルデザイン",
    useCase4Desc: "3Dゲームのフィールドマップや広大な自然環境において、リアルな川筋の浸食や湖の形成、水たまりの分布を物理ベースで導出・デザイン。",

    // Comparison Table
    compareSectionBadge: "COMPARISON",
    compareSectionTitle: "なぜ RainSimulator なのか？",
    compareSectionSubtitle: "高価で複雑な従来ツールや自作コードの課題をすべて解決。",
    compareThFeature: "機能・特徴",
    compareThApp: "RainSimulator (本アプリ)",
    compareThTrad: "従来型GIS / 流体ソフト",
    compareThScript: "Python自作スクリプト",
    compareRow1Title: "価格体系",
    compareRow1App: "買い切り ¥1,980（追加費用なし）",
    compareRow1Trad: "年数十万円〜数百万円のライセンス",
    compareRow1Script: "無料（膨大な開発・保守コスト）",
    compareRow2Title: "導入・操作性",
    compareRow2App: "GUIで即操作・専門知識不要",
    compareRow2Trad: "専門講習や複雑な設定が必要",
    compareRow2Script: "CUI / コード修正・デバッグ必須",
    compareRow3Title: "3Dプレビュー & 動画出力",
    compareRow3App: "標準搭載 (MP4/GIF/3D回転)",
    compareRow3Trad: "別ソフト連携が必要な場合が多い",
    compareRow3Script: "描画コードの自前実装が必要",
    compareRow4Title: "地点別ピーク時刻解析",
    compareRow4App: "ワンクリック即時グラフ表示",
    compareRow4Trad: "データ抽出・加工が必要",
    compareRow4Script: "手動ログパースが必要",
    compareRow5Title: "動作環境",
    compareRow5App: "Win / Mac デスクトップで即起動",
    compareRow5Trad: "ハイスペックWSや専用環境",
    compareRow5Script: "Python環境構築・依存関係管理",

    // Pricing & Purchase Section
    pricingSectionBadge: "PRICING & GET STARTED",
    pricingSectionTitle: "シンプルで明快な買い切りプライス",
    pricingSectionSubtitle: "サブスクリプションではありません。一度の購入で最新デスクトップアプリを永続利用いただけます。",
    pricingCardTitle: "Terrain Rainfall-Runoff Simulator",
    pricingCardSubtitle: "デスクトップ完全版（Windows & macOS）",
    pricingCurrency: "¥",
    pricingAmount: "1,980",
    pricingTax: "（税込・買い切り）",
    pricingFeature1: "macOS版 インストーラー（.dmg / Apple Silicon & Intel）",
    pricingFeature2: "Windows版 インストーラー（.exe / NSIS Setup）",
    pricingFeature3: "3D OBJインポート & サンプル地形自動生成",
    pricingFeature4: "浅水方程式 降雨流出シミュレーションエンジン",
    pricingFeature5: "MP4 / GIF 降雨流出アニメーション出力",
    pricingFeature6: "最大水深マップ & 地点クリック時系列グラフ解析",
    pricingFeature7: "集水流路網マップ & 水位上昇継続アラート",
    pricingFeature8: "質量収支整合性チェック機能",
    pricingFeature9: "日本語 / 英語 バイリンガルUI対応",
    pricingFeature10: "商用利用可能・完全オフライン動作",
    pricingCtaBtn: "公式ストアで購入する（¥1,980）",
    pricingGuarantee: "Stripeセキュア決済対応 / 即時ダウンロード配信",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "よくあるご質問",
    faqQ1: "どのような地形データ（OBJファイル）に対応していますか？",
    faqA1: "標準的なWavefront OBJ形式のポリゴンメッシュに対応しています。QGISやBlender、GISツールから書き出したDEM地形メッシュをそのまま読み込めます。また、手元に地形データがない場合でも、ワンクリックで谷や尾根を含むリアルなサンプル地形を自動生成してテストできます。",
    faqQ2: "対応しているOSとシステム要件を教えてください。",
    faqA2: "Windows 10 / 11 (64bit) および macOS 12 Monterey 以降 (Apple Silicon M1/M2/M3/M4 および Intel Mac) にネイティブ対応しています。グラフィック性能に応じた快適な動作が可能です。",
    faqQ3: "商用利用や研究発表での利用は可能ですか？",
    faqA3: "はい、可能です。本アプリを用いて生成された画像、動画（MP4/GIF）、解析データ、グラフなどは、商用プロジェクト、報告書、プレゼンテーション、論文、教材等に自由にご利用いただけます。",
    faqQ4: "インターネット接続は必須ですか？",
    faqA4: "いいえ。アプリの起動、3Dプレビュー、物理シミュレーション、結果のレンダリングまですべてローカルPC上で完結します。機密情報を含む地形データも外部に送信される心配はありません。",
    faqQ5: "購入後のアップデートやサポートはありますか？",
    faqA5: "はい。不具合修正やマイナーアップデートは無償で提供されます。ご不明な点やお困りごとは、公式ストアのお問い合わせフォームよりお気軽にご連絡いただけます。",
    faqQ6: "浅水方程式（仮想パイプモデル）とは何ですか？",
    faqA6: "グリッド上の各セル間の水頭差（標高＋水深）に基づいて、仮想的なパイプを介した流量を高速に数値計算する流体モデルです。従来のナビエ・ストークス方程式に比べて極めて計算効率が高く、地形スケールの広域な降雨流出現象をデスクトップPC上で高速かつ安定してシミュレートできます。",

    // Footer
    footerDesc: "3D地形と浅水方程式による次世代の降雨流出シミュレーション・デスクトップアプリケーション。",
    footerLinksTitle: "リンク",
    footerLegalTitle: "インフォメーション",
    footerBuyLink: "公式ストア（購入）",
    footerManualLink: "オンラインマニュアル",
    footerContactLink: "お問い合わせ",
    footerTerms: "利用規約",
    footerPrivacy: "プライバシーポリシー",
    footerCopyright: "© 2026 Cyber Matrix / RainSimulator. All rights reserved."
  },

  en: {
    // Meta & Brand
    pageTitle: "Terrain Rainfall-Runoff Simulator — 3D Topographic Fluid Simulation",
    brandName: "RainSimulator",
    brandSubtitle: "3D Terrain Rainfall-Runoff Simulator",

    // Navigation
    navFeatures: "Features",
    navDetails: "Core Capabilities",
    navDemo: "Live Demo",
    navUseCases: "Use Cases",
    navCompare: "Comparison",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navBuyBtn: "Buy Now ¥1,980 (~$14.99)",

    // Hero Section
    heroBadge: "High-Precision Desktop Fluid Physics Engine",
    heroTitle: "3D Terrain × Shallow Water Equations.<br><span class=\"gradient-text\">Rainfall & Overland Flow</span> Real-Time Visualization",
    heroSubtitle: "Simulate how rain falls, accumulates, and flows across 3D terrain meshes (OBJ/DEM) using 2D shallow-water virtual pipe equations. Features an intuitive GUI, MP4 animation rendering, and delay-peak flood depth analytics — 100% locally on your desktop.",
    heroBuyCta: "Get It Now (¥1,980 / ~$14.99)",
    heroDemoCta: "Try Interactive Demo",
    heroMetaPlatforms: "macOS (Apple Silicon / Intel) & Windows 10/11 Ready",
    heroMetaOffline: "100% Offline & Private (Zero Data Telemetry)",
    heroMetaOneTime: "One-time purchase · Lifetime usage",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "Shallow Water Eq.",
    stat1Desc: "Virtual Pipe Model delivers fast, stable numerical fluid dynamics",
    stat2Number: "3D",
    stat2Label: "Real-time Elevation View",
    stat2Desc: "Interactive Three.js orbit, zoom, and elevation colormap",
    stat3Number: "0 sec",
    stat3Label: "Zero Cloud Latency",
    stat3Desc: "Runs entirely on your local machine with full data privacy",
    stat4Number: "4+",
    stat4Label: "Rich Analytical Maps",
    stat4Desc: "Runoff video, max depth, flow accumulation, and rising water alerts",

    // Core Features
    featuresSectionBadge: "CORE CAPABILITIES",
    featuresSectionTitle: "From Research to Engineering. Intuitive yet Rigorous",
    featuresSectionSubtitle: "We condensed specialized computational fluid dynamics into a sleek, modern desktop app anyone can master in minutes.",

    feat1Title: "3D Terrain Import & Real-Time Preview",
    feat1Desc: "Seamlessly import OBJ meshes exported from QGIS, Blender, or DEM tools. Interactive 3D preview colored by elevation (blue = lowland, brown/white = peaks). Don't have a model ready? Generate realistic valley terrains with a single click.",
    feat1Tag: "3D OBJ / DEM Mesh",

    feat2Title: "Intuitive Rainfall & Environmental Controls",
    feat2Desc: "Set standard meteorological rainfall intensity (mm/h) and duration. Fine-tune evaporation/infiltration loss, numerical time step (dt), and pipe cross-section factor to simulate permeable forests to impervious concrete surfaces.",
    feat2Tag: "Full Physics Control",

    feat3Title: "Rainfall-Runoff Animations (MP4 / GIF Export)",
    feat3Desc: "Render high-resolution flood animations overlaid on shaded topographic hillshades. A fixed color scale ensures depth values remain consistent across frames. Export directly to compact MP4 or GIF for reports and presentations.",
    feat3Tag: "MP4 & GIF Export",

    feat4Title: "Interactive Max Depth & Peak Time Analysis",
    feat4Desc: "Generate peak water depth heatmaps. Click any point on the map to inspect its elevation, max depth, full time-series hydrograph, and exact delayed peak arrival time — revealing how valleys flood long after rainfall ceases.",
    feat4Tag: "Click-Point Hydrograph",

    feat5Title: "Flow Accumulation & Rising Water Alerts",
    feat5Desc: "Inspect logarithmic cumulative drainage networks. The system automatically highlights cells where water levels continue to rise after rain stops in vivid orange, pinpointing dangerous flood-concentration zones.",
    feat5Tag: "Drainage & Hazard Alert",

    feat6Title: "Mass-Balance Validation & 100% Offline Standalone",
    feat6Desc: "Automatic mass-conservation check (Rainfall = Storage + Runoff + Losses) to verify numerical stability. Built with Tauri and Python as a desktop standalone, your sensitive terrain and GIS data never leave your PC.",
    feat6Tag: "Privacy & Numerical Sanity",

    // Interactive Demo Section
    demoSectionBadge: "INTERACTIVE SIMULATOR DEMO",
    demoSectionTitle: "Experience Point-Specific Flood Peak Analysis",
    demoSectionSubtitle: "Click anywhere on the simulation map below (or select presets: Ridge, Mid-slope, Valley, Basin Outlet).<br>Watch how elevation, max depth, hydrograph curves, and peak arrival timings shift dynamically.",
    demoMapHint: "Click markers or anywhere on the map",
    demoPointTitle: "Selected Point Analysis",
    demoElevation: "Surface Elevation",
    demoMaxDepth: "Max Water Depth",
    demoPeakTime: "Peak Arrival Time",
    demoRiskLevel: "Inundation Risk",
    demoChartTitle: "Water Depth Over Time [m] (Simulation Timeline)",
    demoChartDesc: "* Notice how ridges drain immediately during rain, while valley floors experience delayed flood peaks minutes after rain stops.",
    demoSelectRidge: "Point A: Mountain Ridge (Immediate drainage)",
    demoSelectSlope: "Point B: Mid-slope (Transient flow)",
    demoSelectValley: "Point C: Main Valley Floor (Delayed accumulation)",
    demoSelectBasin: "Point D: Basin Outlet (Critical flood zone)",

    // Use Cases
    useCaseSectionBadge: "USE CASES",
    useCaseSectionTitle: "Versatile Applications Across Industries",
    useCaseSectionSubtitle: "Empowering disaster mitigation, civil engineering, education, and 3D level design.",

    useCase1Title: "Disaster Mitigation & Flood Risk Assessment",
    useCase1Desc: "Instantly evaluate how torrential flash floods funnel through micro-valleys and when lowlands will be submerged for municipal hazard planning.",
    useCase2Title: "Civil Engineering & Site Development",
    useCase2Desc: "Verify natural drainage trajectories across excavated slopes, embankments, and planned developments before designing culverts and retention basins.",
    useCase3Title: "Academic Research & Hydrology Education",
    useCase3Desc: "Ideal visual teaching tool for hydrology, erosion dynamics, and shallow-water computational fluid dynamics in universities and schools.",
    useCase4Title: "Game Development & 3D Level Design",
    useCase4Desc: "Generate physically authentic riverbeds, drainage channels, and lake basins across procedural 3D game terrains and open-world landscapes.",

    // Comparison Table
    compareSectionBadge: "COMPARISON",
    compareSectionTitle: "Why RainSimulator?",
    compareSectionSubtitle: "Solve the high cost, steep learning curve, and complex setup of legacy software.",
    compareThFeature: "Feature",
    compareThApp: "RainSimulator (This App)",
    compareThTrad: "Legacy GIS / CFD Suites",
    compareThScript: "Custom Python Scripts",
    compareRow1Title: "Pricing",
    compareRow1App: "One-time ¥1,980 (~$14.99)",
    compareRow1Trad: "$1,000s / year per seat",
    compareRow1Script: "Free (High dev/maintenance cost)",
    compareRow2Title: "Usability",
    compareRow2App: "Instant GUI, zero training needed",
    compareRow2Trad: "Steep learning curve & complex setup",
    compareRow2Script: "Requires coding & debugging",
    compareRow3Title: "3D & Video Output",
    compareRow3App: "Built-in (MP4 / GIF / 3D orbit)",
    compareRow3Trad: "Often requires 3rd party plugins",
    compareRow3Script: "Manual matplotlib rendering",
    compareRow4Title: "Interactive Hydrograph",
    compareRow4App: "1-Click point hydrograph inspection",
    compareRow4Trad: "Cumbersome data query pipelines",
    compareRow4Script: "Custom post-processing scripts",
    compareRow5Title: "Deployment",
    compareRow5App: "Standalone Win/Mac desktop app",
    compareRow5Trad: "High-spec workstation or cloud",
    compareRow5Script: "Dependency hell & venv configuration",

    // Pricing & Purchase Section
    pricingSectionBadge: "PRICING & GET STARTED",
    pricingSectionTitle: "Simple, Transparent One-Time Price",
    pricingSectionSubtitle: "No recurring subscriptions. One purchase grants you perpetual access to the full desktop suite.",
    pricingCardTitle: "Terrain Rainfall-Runoff Simulator",
    pricingCardSubtitle: "Complete Desktop Edition (Windows & macOS)",
    pricingCurrency: "¥",
    pricingAmount: "1,980",
    pricingTax: "(Tax incl. / One-time purchase)",
    pricingFeature1: "macOS Installer (.dmg / Apple Silicon & Intel)",
    pricingFeature2: "Windows Installer (.exe / NSIS Setup)",
    pricingFeature3: "3D OBJ Import & Procedural Sample Terrain Generator",
    pricingFeature4: "2D Shallow-Water Numerical Physics Engine",
    pricingFeature5: "MP4 & GIF Runoff Animation Video Exporter",
    pricingFeature6: "Max Depth Heatmap & Interactive Hydrograph Inspector",
    pricingFeature7: "Flow Accumulation & Post-Rain Rising Water Hazard Map",
    pricingFeature8: "Mass-Conservation Sanity Verification",
    pricingFeature9: "Bilingual English & Japanese Interface",
    pricingFeature10: "Commercial Use Allowed · 100% Offline Standalone",
    pricingCtaBtn: "Purchase on Official Store (¥1,980)",
    pricingGuarantee: "Secured by Stripe / Instant Direct Download",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "Frequently Asked Questions",
    faqQ1: "What 3D terrain file formats are supported?",
    faqA1: "Standard Wavefront OBJ polygon meshes are supported. You can load meshes exported from QGIS, Blender, or DEM terrain tools. If you don't have files ready, the app includes a procedural mountain-valley terrain generator so you can test immediately.",
    faqQ2: "What are the supported operating systems and requirements?",
    faqA2: "Native support for Windows 10/11 (64-bit) and macOS 12 Monterey or later (Apple Silicon M1/M2/M3/M4 and Intel Macs). The app is lightweight and runs smoothly on standard modern hardware.",
    faqQ3: "Can I use the output for commercial or academic publications?",
    faqA3: "Yes! All exported animations, MP4/GIF videos, analytical maps, and data hydrographs can be freely used in commercial client projects, technical reports, presentations, academic papers, and video productions.",
    faqQ4: "Is an internet connection required to run simulations?",
    faqA4: "No. The application is completely standalone and offline. All 3D rendering, shallow-water simulation, and video encoding execute locally on your PC. Sensitive terrain models remain 100% confidential.",
    faqQ5: "Do I get updates and customer support after purchase?",
    faqA5: "Yes. Bug fixes and minor maintenance updates are provided. For inquiries, you can reach out through the official store contact form anytime.",
    faqQ6: "What is the Shallow-Water Virtual Pipe Model?",
    faqA6: "It is an efficient numerical fluid method that calculates water flux between grid cells driven by hydrostatic head differences (elevation + water depth). It provides realistic, physically grounded runoff behavior across macro terrains with orders of magnitude faster computation than full 3D Navier-Stokes solvers.",

    // Footer
    footerDesc: "Next-generation 3D terrain rainfall-runoff fluid simulation desktop application.",
    footerLinksTitle: "Navigation",
    footerLegalTitle: "Information",
    footerBuyLink: "Official Store (Checkout)",
    footerManualLink: "User Manual",
    footerContactLink: "Contact Support",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    footerCopyright: "© 2026 Cyber Matrix / RainSimulator. All rights reserved."
  }
};

let currentLang = 'ja';

function getTranslation(key) {
  if (translations[currentLang] && translations[currentLang][key] !== undefined) {
    return translations[currentLang][key];
  }
  return translations.ja[key] || key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('rain_sim_lp_lang', lang);
  document.documentElement.lang = lang;

  // Update text content for elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(key);
    if (text) {
      el.textContent = text;
    }
  });

  // Update HTML content for elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const html = getTranslation(key);
    if (html) {
      el.innerHTML = html;
    }
  });

  // Update active state on language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dispatch custom event for dynamic components
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function initI18n() {
  const savedLang = localStorage.getItem('rain_sim_lp_lang');
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  let defaultLang = 'ja';

  if (savedLang) {
    defaultLang = savedLang;
  } else if (browserLang.startsWith('en')) {
    defaultLang = 'en';
  }

  setLanguage(defaultLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      setLanguage(selected);
    });
  });
}
