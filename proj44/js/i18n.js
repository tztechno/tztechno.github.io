// i18n Dictionary and Controller for Terrain Rainfall-Runoff Simulator Landing Page
const translations = {
  ja: {
    // Meta & Brand
    pageTitle: "Terrain Rainfall-Runoff Simulator — 地形 降雨流出3D Webシミュレーター",
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
    navBuyBtn: "シミュレーターを起動 / 購入",

    // Hero Section
    heroBadge: "ブラウザで即座に動く 3D物理シミュレーター",
    heroTitle: "3D地形 × 浅水方程式。<br><span class=\"gradient-text\">降雨と水の流れ</span>をリアルタイム可視化",
    heroSubtitle: "DEMやOBJなどの3D地形データに雨を降らせ、水がどのように集まり、流れていくかを浅水方程式（仮想パイプモデル）で高精度に物理シミュレーション。ブラウザ上で直感的に操作でき、無料お試し＆PRO買い切りライセンス対応。",
    heroBuyCta: "シミュレーターを起動する（3回無料）",
    heroDemoCta: "機能詳細を見る",
    heroMetaPlatforms: "Mac, Windows, iPad 等 全ブラウザ対応 (インストール不要)",
    heroMetaOffline: "高速ブラウザ内演算・リアルタイム3D可視化",
    heroMetaOneTime: "3回無料お試し可能・買い切り¥1,980",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "浅水方程式",
    stat1Desc: "Virtual Pipe Modelによる高速・安定した流体数値計算",
    stat2Number: "3D",
    stat2Label: "リアルタイム地形描画",
    stat2Desc: "Three.jsによる標高カラーマップ＆直感的な回転・ズーム",
    stat3Number: "0 sec",
    stat3Label: "セットアップ不要",
    stat3Desc: "ブラウザを開くだけで即座にシミュレーション開始",
    stat4Number: "4+",
    stat4Label: "多彩な解析マップ出力",
    stat4Desc: "流出動画・最大水深・流路網・遅延ピーク水位上昇マップ",

    // Core Features
    featuresSectionBadge: "CORE CAPABILITIES",
    featuresSectionTitle: "研究から実務まで。直感と精度を両立した機能群",
    featuresSectionSubtitle: "専門的な流体シミュレーションを、誰でも数クリックで直感的に扱えるモダンなWeb UIに凝縮しました。",

    feat1Title: "3D地形インポート & リアルタイムプレビュー",
    feat1Desc: "QGISやBlenderから出力したOBJメッシュやDEMデータを即座に読み込み。標高に応じたカラーマップ（青=低地、茶〜白=高地）で3Dプレビュー。手元にデータがなくても、ボタン一つで複雑な谷を持つサンプル地形を自動生成できます。",
    feat1Tag: "3D OBJ / DEM対応",

    feat2Title: "直感的な降雨・環境パラメータ制御",
    feat2Desc: "天気予報でおなじみの「降雨強度 (mm/h)」や「降雨継続時間」を設定可能。さらに蒸発・浸透損失量、時間刻み dt、パイプ断面積係数を細かく調整でき、舗装路面から山林地まで多様な透水条件を柔軟にシミュレーションします。",
    feat2Tag: "物理パラメータ自在",

    feat3Title: "降雨流出アニメーション (動画・可視化)",
    feat3Desc: "陰影起伏図（ヒルシェード）に時間変化する水深を重ね合わせた高品質な流出アニメーションを生成。固定カラースケールにより、一目で水深の変化が把握可能。プレゼンや教材、論文報告に使える結果をブラウザ上で直接確認できます。",
    feat3Tag: "リアルタイム流出可視化",

    feat4Title: "インタラクティブ最大水深 & ピーク時刻解析",
    feat4Desc: "全ステップ中の最大浸水深をヒートマップ化。地図上の任意の地点をクリックするだけで、その地点の地表標高・最大水深・時間変化グラフ（ハイドログラフ）・雨が止んだ後のピーク到達時刻を瞬時に確認できます。",
    feat4Tag: "地点クリック時系列グラフ",

    feat5Title: "集水流路網 & 水位上昇継続アラート",
    feat5Desc: "累積流出量を対数スケールで表示し、地形固有の谷筋や水が集まりやすい流路網を自動描画。さらに「雨が止んだ後も水位が上昇し続けている危険地点」をオレンジ色で強調表示し、遅延ピークのリスクを可視化します。",
    feat5Tag: "流路網 & 滞水ハザード検出",

    feat6Title: "質量収支チェック & インストール不要のセキュア動作",
    feat6Desc: "降雨総量＝貯留量＋流出量＋損失量の質量保存則が成り立っているかを自動計算し、計算の健全性を検証。ブラウザ内演算により、機密性の高い地形データも外部に漏洩せず安全に解析できます。",
    feat6Tag: "高精度数値計算 & 安全動作",

    // Interactive Demo Section
    demoSectionBadge: "INTERACTIVE SIMULATOR DEMO",
    demoSectionTitle: "LP上で体験する「地点別ピーク水深解析」",
    demoSectionSubtitle: "下のシミュレーション結果マップ上で任意の場所をクリック（またはプリセットを選択）してください。<br>標高や最大水深、水深推移グラフ、雨が止んだ後のピーク到達時刻がリアルタイムに変化します。",
    demoMapHint: "マップ上のマーカーまたは任意の地点をクリック",
    demoSelectRidge: "地点A: 山頂・尾根（即時排水）",
    demoSelectSlope: "地点B: 中腹斜面（一時通過）",
    demoSelectValley: "地点C: 谷底本流（遅延ピーク滞水）",
    demoSelectBasin: "地点D: 出口合流点（最大浸水危険域）",
    demoPresetRidge: "① 尾根部（浸水なし）",
    demoPresetMidslope: "② 斜面中腹（一時的冠水）",
    demoPresetValley: "③ 主谷筋（激しい集水）",
    demoPresetBasin: "④ 流域出口（遅延ピーク）",

    demoCardTitle: "地点別 水深・流出解析データ",
    demoElevation: "地表標高",
    demoMaxDepth: "最大到達水深",
    demoPeakTime: "最大水深ピーク時刻",
    demoRiskLevel: "浸水リスク判定",
    demoCardElevation: "地表標高",
    demoCardMaxDepth: "最大水深",
    demoCardPeakTime: "最大水深 発生時刻",
    demoCardSlopeStatus: "滞水ステータス",
    demoChartTitle: "水深の時系列推移 [m] (シミュレーション時間)",
    demoChartDesc: "※ 尾根は雨天直後にピークを迎えすぐ排水されますが、谷底や合流点は雨が止んだ後も上流からの流入で水位が上昇し続けます。",
    demoCardChartTitle: "水深の時間変化（ハイドログラフ）",
    demoCardChartXAxis: "経過時間（分）",
    demoCardChartYAxis: "水深 (m)",
    demoChartHint: "● 最大水深の発生タイミング",

    // Use Cases Section
    useCaseSectionBadge: "USE CASES & APPLICATIONS",
    usecasesSectionBadge: "USE CASES & APPLICATIONS",
    useCaseSectionTitle: "幅広い分野で活用される物理シミュレーション",
    usecasesSectionTitle: "幅広い分野で活用される物理シミュレーション",
    useCaseSectionSubtitle: "土木・防災から教育、3D制作まで。正確な水理計算を手軽にビジネスや研究へ導入。",
    usecasesSectionSubtitle: "土木・防災から教育、3D制作まで。正確な水理計算を手軽にビジネスや研究へ導入。",

    useCase1Title: "土木・建設・開発計画",
    usecase1Title: "土木・建設・開発計画",
    useCase1Desc: "造成地や造成計画の3Dモデル上で降雨時の集水経路や冠水リスクを事前検証。雨水排水施設計画や浸水想定の事前シミュレーションに。",
    usecase1Desc: "造成地や造成計画の3Dモデル上で降雨時の集水経路や冠水リスクを事前検証。雨水排水施設計画や浸水想定の事前シミュレーションに。",

    useCase2Title: "地域防災・ハザード評価",
    usecase2Title: "地域防災・ハザード評価",
    useCase2Desc: "地形データから雨が止んだ後も水が集まり続ける危険箇所や、谷筋の集中流路を特定。避難計画策定や防災ハザードマップの精度向上に。",
    usecase2Desc: "地形データから雨が止んだ後も水が集まり続ける危険箇所や、谷筋の集中流路を特定。避難計画策定や防災ハザードマップの精度向上に。",

    useCase3Title: "大学・研究機関・教育教材",
    usecase3Title: "大学・研究機関・教育教材",
    useCase3Desc: "水文学・地形学・流体力学の教育において、浅水方程式と地表流の挙動をビジュアルに理解できるインタラクティブ教材として。",
    usecase3Desc: "水文学・地形学・流体力学の教育において、浅水方程式と地表流の挙動をビジュアルに理解できるインタラクティブ教材として。",

    useCase4Title: "ゲーム・メタバース・CG制作",
    usecase4Title: "ゲーム・メタバース・CG制作",
    useCase4Desc: "プロシージャル地形や3Dワールドにおける自然な川の侵食経路・湖の滞水判定など、物理的に正しい水流マップの生成に。",
    usecase4Desc: "プロシージャル地形や3Dワールドにおける自然な川の侵食経路・湖の滞水判定など、物理的に正しい水流マップの生成に。",

    // Comparison Section
    compareSectionBadge: "WHY RAINSIMULATOR",
    compareSectionTitle: "従来の手法との違い",
    compareSectionSubtitle: "高額な専用GISソフトや難解なスクリプト開発の手間を排除。圧倒的な導入の手軽さと使いやすさを提供します。",

    compareThFeature: "評価項目",
    compareColFeature: "評価項目",
    compareThApp: "RainSimulator (Web)",
    compareColApp: "RainSimulator (Web)",
    compareThTrad: "従来の大型水理解析ソフト",
    compareColTraditional: "従来の大型水理解析ソフト",
    compareThScript: "自作Python/MATLABスクリプト",
    compareColScript: "自作Python/MATLABスクリプト",

    compareRow1Title: "導入コスト・価格",
    compareRow1App: "¥1,980（買い切り / 3回無料）",
    compareRow1Trad: "数十万円〜数百万円 / 年",
    compareRow1Script: "開発工数・人件費大",
    compareRow2Title: "UI・操作性",
    compareRow2App: "直感的な3D Web UI（クリック操作）",
    compareRow2Trad: "専門知識と複雑な設定が必須",
    compareRow2Script: "CUI / コード修正が必要",
    compareRow3Title: "流出アニメーション可視化",
    compareRow3App: "リアルタイム3D描画・可視化",
    compareRow3Trad: "別ツールでの後処理が必要",
    compareRow3Script: "描画処理の実装が煩雑",
    compareRow4Title: "地点別ハイドログラフ",
    compareRow4App: "ワンクリック即時グラフ表示",
    compareRow4Trad: "データ抽出・加工に手間",
    compareRow4Script: "自前でプロットコード作成",
    compareRow5Title: "動作環境",
    compareRow5App: "ブラウザでURLを開くだけ（インストール不要）",
    compareRow5Trad: "ハイスペック専用PCやサーバー",
    compareRow5Script: "Python環境構築・依存関係管理",

    // Pricing & Purchase Section
    pricingSectionBadge: "PRICING & GET STARTED",
    pricingSectionTitle: "シンプルで明快な買い切りプライス",
    pricingSectionSubtitle: "サブスクリプションではありません。初回3回は完全無料で体験可能。1回のお支払いで永久無制限ライセンス（PRO）にアップグレードできます。",
    pricingCardTitle: "Terrain Rainfall-Runoff Simulator",
    pricingCardSubtitle: "Webブラウザ完全版（Mac / Windows / iPad 対応・インストール不要）",
    pricingCurrency: "¥",
    pricingAmount: "1,980",
    pricingTax: "（税込・買い切り）",
    pricingFeature1: "ブラウザから即座に起動（インストール・環境構築不要）",
    pricingFeature2: "初回3回まで無料お試しシミュレーション可能",
    pricingFeature3: "3D OBJインポート & サンプル地形自動生成",
    pricingFeature4: "浅水方程式 降雨流出シミュレーションエンジン（高速ブラウザ内演算）",
    pricingFeature5: "リアルタイム降雨流出アニメーション表示 & 結果可視化",
    pricingFeature6: "最大水深マップ & 地点クリック時系列グラフ解析（ハイドログラフ）",
    pricingFeature7: "集水流路網マップ & 水位上昇継続アラート",
    pricingFeature8: "質量収支整合性チェック機能",
    pricingFeature9: "日本語 / 英語 バイリンガルUI対応",
    pricingFeature10: "商用利用可能・追加月額費用なしの永久買い切りライセンス",
    pricingCtaBtn: "Webアプリを開く（3回無料・¥1,980）",
    pricingGuarantee: "Stripeセキュア決済対応 / 決済完了後すぐにPROアンロック",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "よくあるご質問",
    faqQ1: "どのような地形データ（OBJファイル）に対応していますか？",
    faqA1: "標準的なWavefront OBJ形式のポリゴンメッシュに対応しています。QGISやBlender、GISツールから書き出したDEM地形メッシュをそのまま読み込めます。また、手元に地形データがない場合でも、ワンクリックで谷や尾根を含むリアルなサンプル地形を自動生成してテストできます。",
    faqQ2: "対応しているブラウザ・デバイス要件を教えてください。",
    faqA2: "Mac, Windows, iPad, Chromebook等のモダンブラウザ（Chrome, Safari, Edge, Firefox）に対応しています。インストールや環境構築は一切不要で、URLを開くだけですぐに動作します。",
    faqQ3: "商用利用や研究発表での利用は可能ですか？",
    faqA3: "はい、可能です。本アプリを用いて生成された画像、解析データ、グラフなどは、商用プロジェクト、報告書、プレゼンテーション、論文、教材等に自由にご利用いただけます。",
    faqQ4: "無料枠と有料ライセンスの違いは何ですか？",
    faqA4: "初回3回までは全機能を完全無料でお試しいただけます。3回消費後は、1,980円（税込）の買い切り決済を行っていただくことで、利用回数制限が永久に解除され（PRO）、無制限にシミュレーションを実行できるようになります。",
    faqQ5: "購入後のアップデートや追加料金はありますか？",
    faqA5: "追加の月額料金やサブスクリプションは一切ありません。一度ご購入いただければ、永久無制限で最新バージョンの機能をご利用いただけます。",
    faqQ6: "浅水方程式（仮想パイプモデル）とは何ですか？",
    faqA6: "グリッド上の各セル間の水頭差（標高＋水深）に基づいて、仮想的なパイプを介した流量を高速に数値計算する流体モデルです。従来のナビエ・ストークス方程式に比べて極めて計算効率が高く、地形スケールの広域な降雨流出現象をブラウザ上で高速かつ安定してシミュレートできます。",

    // Footer
    footerDesc: "3D地形と浅水方程式による次世代の降雨流出シミュレーション・Webアプリケーション。",
    footerLinksTitle: "リンク",
    footerLegalTitle: "インフォメーション",
    footerBuyLink: "Webシミュレーター（起動・購入）",
    footerLaunchLink: "Webシミュレーター起動",
    footerManualLink: "オンラインマニュアル",
    footerContactLink: "お問い合わせ",
    footerTerms: "利用規約",
    footerPrivacy: "プライバシーポリシー",
    footerCopyright: "© 2026 RainSimulator. All rights reserved."
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
    navBuyBtn: "Launch Simulator / Buy",

    // Hero Section
    heroBadge: "Instant In-Browser 3D Physics Simulation Engine",
    heroTitle: "3D Terrain × Shallow Water Equations.<br><span class=\"gradient-text\">Rainfall & Overland Flow</span> Real-Time Visualization",
    heroSubtitle: "Simulate how rain falls, accumulates, and flows across 3D terrain meshes (OBJ/DEM) using 2D shallow-water virtual pipe equations. Instant in-browser physics, 3 free trial runs, and permanent lifetime PRO license support.",
    heroBuyCta: "Launch Web Simulator (3 Free Runs)",
    heroDemoCta: "Explore Live Demo",
    heroMetaPlatforms: "Works on Mac, Windows, iPad & All Modern Browsers",
    heroMetaOffline: "Fast Client-Side Physics · Real-Time 3D View",
    heroMetaOneTime: "3 Free Runs · Lifetime PRO ¥1,980",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "Shallow Water Eq.",
    stat1Desc: "Virtual Pipe Model delivers fast, stable numerical fluid dynamics",
    stat2Number: "3D",
    stat2Label: "Real-time Elevation View",
    stat2Desc: "Interactive Three.js orbit, zoom, and elevation colormap",
    stat3Number: "0 sec",
    stat3Label: "Zero Setup Required",
    stat3Desc: "Open in any browser and start simulating immediately",
    stat4Number: "4+",
    stat4Label: "Rich Analytical Maps",
    stat4Desc: "Runoff video, max depth, flow accumulation, and rising water alerts",

    // Core Features
    featuresSectionBadge: "CORE CAPABILITIES",
    featuresSectionTitle: "From Research to Engineering. Intuitive yet Rigorous",
    featuresSectionSubtitle: "We condensed specialized computational fluid dynamics into a sleek, modern Web UI anyone can master in seconds.",

    feat1Title: "3D Terrain Import & Real-Time Preview",
    feat1Desc: "Seamlessly import OBJ meshes exported from QGIS, Blender, or DEM tools. Interactive 3D preview colored by elevation (blue = lowland, brown/white = peaks). Don't have a model ready? Generate realistic valley terrains with a single click.",
    feat1Tag: "3D OBJ / DEM Mesh",

    feat2Title: "Intuitive Rainfall & Environmental Controls",
    feat2Desc: "Set standard meteorological rainfall intensity (mm/h) and duration. Fine-tune evaporation/infiltration loss, numerical time step (dt), and pipe cross-section factor to simulate permeable forests to impervious concrete surfaces.",
    feat2Tag: "Full Physics Control",

    feat3Title: "Rainfall-Runoff Animations (Live Video / Visuals)",
    feat3Desc: "Render high-resolution flood animations overlaid on shaded topographic hillshades. A fixed color scale ensures depth values remain consistent across frames. Inspect live flows directly in your browser for reports and presentations.",
    feat3Tag: "Real-Time Visualization",

    feat4Title: "Interactive Max Depth & Peak Time Analysis",
    feat4Desc: "Generate peak water depth heatmaps. Click any point on the map to inspect its elevation, max depth, full time-series hydrograph, and exact delayed peak arrival time — revealing how valleys flood long after rainfall ceases.",
    feat4Tag: "Click-Point Hydrograph",

    feat5Title: "Flow Accumulation & Rising Water Alerts",
    feat5Desc: "Inspect logarithmic cumulative drainage networks. The system automatically highlights cells where water levels continue to rise after rain stops in vivid orange, pinpointing dangerous flood-concentration zones.",
    feat5Tag: "Drainage & Hazard Alert",

    feat6Title: "Mass-Balance Validation & Zero-Install Privacy",
    feat6Desc: "Automatic mass-conservation check (Rainfall = Storage + Runoff + Losses) to verify numerical stability. Client-side execution ensures your proprietary terrain models never leave your browser.",
    feat6Tag: "Privacy & Numerical Sanity",

    // Interactive Demo Section
    demoSectionBadge: "INTERACTIVE SIMULATOR DEMO",
    demoSectionTitle: "Experience Point-Specific Flood Peak Analysis",
    demoSectionSubtitle: "Click anywhere on the simulation map below (or select presets: Ridge, Mid-slope, Valley, Basin Outlet).<br>Watch how elevation, max depth, hydrograph curves, and peak arrival timings shift dynamically.",
    demoMapHint: "Click markers or anywhere on the map",
    demoSelectRidge: "Point A: Ridge Top (Immediate runoff)",
    demoSelectSlope: "Point B: Mid Slope (Transient flow)",
    demoSelectValley: "Point C: Main Valley (Heavy pooling)",
    demoSelectBasin: "Point D: Basin Outlet (Delayed peak)",
    demoPresetRidge: "① Ridge Top (Immediate runoff)",
    demoPresetMidslope: "② Mid Slope (Transient flow)",
    demoPresetValley: "③ Main Valley (Heavy pooling)",
    demoPresetBasin: "④ Basin Outlet (Delayed peak)",

    demoCardTitle: "Point Hydrodynamic Analytics",
    demoElevation: "Elevation",
    demoMaxDepth: "Max Depth",
    demoPeakTime: "Peak Arrival Time",
    demoRiskLevel: "Flood Risk Level",
    demoCardElevation: "Elevation",
    demoCardMaxDepth: "Max Depth",
    demoCardPeakTime: "Peak Arrival Time",
    demoCardSlopeStatus: "Water Status",
    demoChartTitle: "Water Depth Over Time [m] (Simulation Time)",
    demoChartDesc: "※ Ridge tops drain quickly after rain, while valley floors and basin outlets continue to rise due to delayed upstream inflow.",
    demoCardChartTitle: "Water Depth Over Time (Hydrograph)",
    demoCardChartXAxis: "Simulation Time (Minutes)",
    demoCardChartYAxis: "Depth (m)",
    demoChartHint: "● Time of Peak Inundation",

    // Use Cases Section
    useCaseSectionBadge: "USE CASES & APPLICATIONS",
    usecasesSectionBadge: "USE CASES & APPLICATIONS",
    useCaseSectionTitle: "Versatile Applications in Engineering & Science",
    usecasesSectionTitle: "Versatile Applications in Engineering & Science",
    useCaseSectionSubtitle: "From civil engineering and disaster risk assessment to education and 3D level design.",
    usecasesSectionSubtitle: "From civil engineering and disaster risk assessment to education and 3D level design.",

    useCase1Title: "Civil Engineering & Site Development",
    usecase1Title: "Civil Engineering & Site Development",
    useCase1Desc: "Verify stormwater drainage paths, ponding risks, and gutter layouts on 3D site models prior to construction.",
    usecase1Desc: "Verify stormwater drainage paths, ponding risks, and gutter layouts on 3D site models prior to construction.",

    useCase2Title: "Flood Hazard Assessment & Urban Safety",
    usecase2Title: "Flood Hazard Assessment & Urban Safety",
    useCase2Desc: "Pinpoint flood concentration zones and delayed peak arrival times in valleys to improve evacuation planning and local hazard mapping.",
    usecase2Desc: "Pinpoint flood concentration zones and delayed peak arrival times in valleys to improve evacuation planning and local hazard mapping.",

    useCase3Title: "Academic Research & University Education",
    usecase3Title: "Academic Research & University Education",
    useCase3Desc: "Ideal interactive teaching tool for hydrology, geomorphology, and fluid dynamics courses to visually explore shallow water equations.",
    usecase3Desc: "Ideal interactive teaching tool for hydrology, geomorphology, and fluid dynamics courses to visually explore shallow water equations.",

    useCase4Title: "Game Worlds, Metaverse & CG Production",
    usecase4Title: "Game Worlds, Metaverse & CG Production",
    useCase4Desc: "Derive physically realistic river channels, erosion valleys, and lake pooling on procedural 3D terrain meshes.",
    usecase4Desc: "Derive physically realistic river channels, erosion valleys, and lake pooling on procedural 3D terrain meshes.",

    // Comparison Section
    compareSectionBadge: "WHY RAINSIMULATOR",
    compareSectionTitle: "How It Compares",
    compareSectionSubtitle: "Eliminate expensive enterprise GIS licenses and tedious custom Python scripting. Enjoy instant, browser-based physical simulation.",

    compareThFeature: "Feature",
    compareColFeature: "Feature",
    compareThApp: "RainSimulator (Web)",
    compareColApp: "RainSimulator (Web)",
    compareThTrad: "Legacy 2D/3D Hydraulic Software",
    compareColTraditional: "Legacy 2D/3D Hydraulic Software",
    compareThScript: "Custom Python / MATLAB Scripts",
    compareColScript: "Custom Python / MATLAB Scripts",

    compareRow1Title: "Pricing & Cost",
    compareRow1App: "¥1,980 (~$14.99) One-Time · 3 Free Runs",
    compareRow1Trad: "$2,000 - $10,000+ / Year",
    compareRow1Script: "High dev & maintenance cost",
    compareRow2Title: "User Interface",
    compareRow2App: "Intuitive 3D Web UI (1-Click Sim)",
    compareRow2Trad: "Steep learning curve & complex setup",
    compareRow2Script: "Command line & code edits required",
    compareRow3Title: "Flow Animation",
    compareRow3App: "Real-time 3D & in-browser visual playback",
    compareRow3Trad: "Requires 3rd party visualizer plugins",
    compareRow3Script: "Manual matplotlib rendering",
    compareRow4Title: "Interactive Hydrograph",
    compareRow4App: "1-Click point hydrograph inspection",
    compareRow4Trad: "Cumbersome data query pipelines",
    compareRow4Script: "Custom post-processing scripts",
    compareRow5Title: "Deployment",
    compareRow5App: "Instant in-browser URL (Zero installation)",
    compareRow5Trad: "High-spec workstation or server cluster",
    compareRow5Script: "Dependency hell & venv configuration",

    // Pricing & Purchase Section
    pricingSectionBadge: "PRICING & GET STARTED",
    pricingSectionTitle: "Simple, Transparent One-Time Price",
    pricingSectionSubtitle: "No recurring subscriptions. Start with 3 free trial runs, then upgrade once for permanent lifetime PRO access.",
    pricingCardTitle: "Terrain Rainfall-Runoff Simulator",
    pricingCardSubtitle: "Full Web Browser Edition (Mac, Windows, iPad · No Installation Required)",
    pricingCurrency: "¥",
    pricingAmount: "1,980",
    pricingTax: "(Tax incl. / One-time purchase)",
    pricingFeature1: "Instant in-browser launch (Zero installation or setup)",
    pricingFeature2: "3 Free Trial Simulation Runs Included",
    pricingFeature3: "3D OBJ Import & Procedural Sample Terrain Generator",
    pricingFeature4: "2D Shallow-Water Physics Engine (Blazing-Fast Client Computation)",
    pricingFeature5: "Real-Time Rainfall-Runoff Simulation Animation",
    pricingFeature6: "Max Depth Heatmap & Interactive Click-Point Hydrograph",
    pricingFeature7: "Flow Accumulation & Post-Rain Rising Water Hazard Map",
    pricingFeature8: "Mass-Conservation Sanity Verification",
    pricingFeature9: "Bilingual English & Japanese Interface",
    pricingFeature10: "Commercial Use Allowed · Lifetime License with No Monthly Fees",
    pricingCtaBtn: "Open Web App (3 Free Runs · ¥1,980)",
    pricingGuarantee: "Secured by Stripe / Instant PRO Activation",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "Frequently Asked Questions",
    faqQ1: "What 3D terrain file formats are supported?",
    faqA1: "Standard Wavefront OBJ polygon meshes are supported. You can load meshes exported from QGIS, Blender, or DEM terrain tools. If you don't have files ready, the app includes a procedural mountain-valley terrain generator so you can test immediately.",
    faqQ2: "What browsers and devices are supported?",
    faqA2: "Supported on all modern browsers (Chrome, Safari, Edge, Firefox) across Mac, Windows, iPad, and Chromebooks. No software installation or environment configuration is needed.",
    faqQ3: "Can I use the output for commercial or academic publications?",
    faqA3: "Yes! All exported animations, analytical maps, and data hydrographs can be freely used in commercial client projects, technical reports, presentations, academic papers, and video productions.",
    faqQ4: "How does the free tier vs. PRO license work?",
    faqA4: "You get 3 full simulation runs completely free. Once you use the 3 trial runs, a single one-time payment of ¥1,980 (~$14.99) unlocks unlimited lifetime simulations (PRO).",
    faqQ5: "Are there any hidden fees or subscriptions?",
    faqA5: "No. There are zero subscriptions or recurring fees. Once purchased, you have perpetual access to all present and future simulator updates.",
    faqQ6: "What is the Shallow-Water Virtual Pipe Model?",
    faqA6: "It is an efficient numerical fluid method that calculates water flux between grid cells driven by hydrostatic head differences (elevation + water depth). It provides realistic, physically grounded runoff behavior across macro terrains with orders of magnitude faster computation than full 3D Navier-Stokes solvers.",

    // Footer
    footerDesc: "Next-generation 3D terrain rainfall-runoff fluid simulation Web application.",
    footerLinksTitle: "Navigation",
    footerLegalTitle: "Information",
    footerBuyLink: "Web Simulator (Launch & Buy)",
    footerLaunchLink: "Launch Web Simulator",
    footerManualLink: "User Manual",
    footerContactLink: "Contact Support",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    footerCopyright: "© 2026 RainSimulator. All rights reserved."
  }
};

let currentLang = 'ja';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'ja';
  currentLang = lang;
  try {
    localStorage.setItem('rain_sim_lang', lang);
  } catch (e) {}

  document.documentElement.lang = lang;

  // Update text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update language buttons state
  const btnJa = document.getElementById('lang-btn-ja');
  const btnEn = document.getElementById('lang-btn-en');
  if (btnJa) btnJa.classList.toggle('active', lang === 'ja');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');

  // Dispatch event for other components (e.g. demo chart)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function initI18n() {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('rain_sim_lang');
  } catch (e) {}

  const browserLang = (navigator.language || '').toLowerCase().startsWith('ja') ? 'ja' : 'en';
  const initialLang = savedLang || browserLang || 'ja';

  const btnJa = document.getElementById('lang-btn-ja');
  const btnEn = document.getElementById('lang-btn-en');

  if (btnJa) {
    btnJa.addEventListener('click', () => setLanguage('ja'));
  }
  if (btnEn) {
    btnEn.addEventListener('click', () => setLanguage('en'));
  }

  setLanguage(initialLang);
}

window.translations = translations;
window.setLanguage = setLanguage;
window.initI18n = initI18n;
