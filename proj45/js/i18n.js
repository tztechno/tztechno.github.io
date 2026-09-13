// i18n Dictionary and Controller for Terrain Rainfall-Runoff Simulator Desktop Landing Page
const translations = {
  ja: {
    // Meta & Brand
    pageTitle: "Terrain Rainfall-Runoff Simulator Desktop — 3D地形 降雨流出デスクトップシミュレーター",
    brandName: "RainSimulator",
    brandSubtitle: "3D地形 降雨流出デスクトップシミュレーター",

    // Navigation
    navFeatures: "特徴",
    navDetails: "コア機能",
    navDemo: "体験デモ",
    navUseCases: "活用シーン",
    navCompare: "比較",
    navPricing: "価格・購入",
    navFaq: "FAQ",
    navBuyBtn: "購入・ダウンロード",

    // Hero Section
    heroBadge: "Windows & macOS 対応 3D流体力学デスクトップアプリ",
    heroTitle: "3D地形 × 浅水方程式。<br><span class=\"gradient-text\">降雨と水の流れ</span>をリアルタイム高精度解析",
    heroSubtitle: "3D地形図（DEM/OBJメッシュ）に雨を降らせ、水流の集約・流出・浸透を浅水方程式（仮想パイプモデル）で高精度に計算するデスクトップ専用流体力学シミュレーター。完全ローカル実行で機密性を確保し、買い切り永久ライセンスで無制限に解析可能。",
    heroBuyCta: "デスクトップ版を購入する (¥1,980)",
    heroDemoCta: "機能詳細・デモを見る",
    heroMetaPlatforms: "Windows 10/11 & macOS (Apple Silicon / Intel) ネイティブ対応",
    heroMetaOffline: "100% 完全ローカル・オフライン高速演算（外部データ送信なし）",
    heroMetaOneTime: "追加費用なしの永久買い切りライセンス ¥1,980 (税込)",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "浅水方程式",
    stat1Desc: "Virtual Pipe Modelによる高速・安定した流体数値計算",
    stat2Number: "3D",
    stat2Label: "リアルタイム地形描画",
    stat2Desc: "OpenGL/WebGLによる標高カラーマップ＆直感的な回転・ズーム",
    stat3Number: "100%",
    stat3Label: "完全ローカル実行",
    stat3Desc: "地形データや解析結果が外部に送信されない安心のセキュリティ",
    stat4Number: "4+",
    stat4Label: "多彩な解析マップ & 動画出力",
    stat4Desc: "MP4/GIF動画保存・最大水深・流路網・遅延ピーク水位上昇マップ",

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

    feat3Title: "降雨流出アニメーション & 高解像度動画書き出し",
    feat3Desc: "陰影起伏図（ヒルシェード）に時間変化する水深を重ね合わせた高品質な流出アニメーションを生成。固定カラースケールにより、一目で水深の変化が把握可能。結果はMP4/GIF動画として保存でき、プレゼンや教材、論文報告に活用できます。",
    feat3Tag: "リアルタイム流出可視化 & 動画保存",

    feat4Title: "インタラクティブ最大水深 & ピーク時刻解析",
    feat4Desc: "全ステップ中の最大浸水深をヒートマップ化。地図上の任意の地点をクリックするだけで、その地点の地表標高・最大水深・時間変化グラフ（ハイドログラフ）・雨が止んだ後のピーク到達時刻を瞬時に確認できます。",
    feat4Tag: "地点クリック時系列グラフ",

    feat5Title: "集水流路網 & 水位上昇継続アラート",
    feat5Desc: "累積流出量を対数スケールで表示し、地形固有の谷筋や水が集まりやすい流路網を自動描画。さらに「雨が止んだ後も水位が上昇し続けている危険地点」をオレンジ色で強調表示し、遅延ピークのリスクを可視化します。",
    feat5Tag: "流路網 & 滞水ハザード検出",

    feat6Title: "完全ローカル実行 & 質量収支チェック",
    feat6Desc: "降雨総量＝貯留量＋流出量＋損失量の質量保存則が成り立っているかを自動計算し、計算の健全性を検証。完全ローカルPC内演算により、機密性の高い地形データも外部に一切送信されず安全に解析できます。",
    feat6Tag: "高精度数値計算 & 完全ローカル",

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
    compareThApp: "RainSimulator (Desktop)",
    compareColApp: "RainSimulator (Desktop)",
    compareThTrad: "従来の大型水理解析ソフト",
    compareColTraditional: "従来の大型水理解析ソフト",
    compareThScript: "自作Python/MATLABスクリプト",
    compareColScript: "自作Python/MATLABスクリプト",

    compareRow1Title: "導入コスト・価格",
    compareRow1App: "¥1,980（税込・買い切り永久ライセンス）",
    compareRow1Trad: "数十万円〜数百万円 / 年",
    compareRow1Script: "開発工数・人件費大",
    compareRow2Title: "UI・操作性",
    compareRow2App: "直感的なデスクトップGUI（スライダー＆クリック操作）",
    compareRow2Trad: "専門知識と複雑な設定が必須",
    compareRow2Script: "CUI / コード修正が必要",
    compareRow3Title: "流出アニメーション & 動画出力",
    compareRow3App: "リアルタイム3D描画 & MP4/GIF動画出力",
    compareRow3Trad: "別ツールでの後処理が必要",
    compareRow3Script: "描画処理の実装が煩雑",
    compareRow4Title: "地点別ハイドログラフ",
    compareRow4App: "ワンクリック即時グラフ表示 & 詳細解析",
    compareRow4Trad: "データ抽出・加工に手間",
    compareRow4Script: "自前でプロットコード作成",
    compareRow5Title: "動作環境",
    compareRow5App: "Windows / macOS ネイティブ（スタンドアロン起動）",
    compareRow5Trad: "ハイスペック専用PCやサーバー",
    compareRow5Script: "Python環境構築・依存関係管理",
    compareRow6Title: "セキュリティ・機密性",
    compareRow6App: "完全ローカル・データ非送信（100%オフライン動作）",
    compareRow6Trad: "クラウド送信やライセンス認証が必要な場合あり",
    compareRow6Script: "ローカル実行（環境構築が必要）",

    // Pricing & Purchase Section
    pricingSectionBadge: "PRICING & GET STARTED",
    pricingSectionTitle: "シンプルで明快な買い切りプライス",
    pricingSectionSubtitle: "サブスクリプションではありません。1回のお支払いで永久無制限に全機能をご利用いただける買い切りライセンスです。",
    pricingCardTitle: "Terrain Rainfall-Runoff Simulator Desktop",
    pricingCardSubtitle: "Windows & macOS デスクトップ専用版（永久買い切り・商用利用可）",
    pricingCurrency: "¥",
    pricingAmount: "1,980",
    pricingTax: "（税込・買い切り）",
    pricingFeature1: "Windows (exe) & macOS (dmg) ネイティブインストーラー",
    pricingFeature2: "追加月額料金・サブスクなしの永久買い切りライセンス",
    pricingFeature3: "3D OBJインポート & サンプル地形自動生成",
    pricingFeature4: "浅水方程式 降雨流出シミュレーションエンジン（高速ローカル演算）",
    pricingFeature5: "リアルタイム降雨流出アニメーション表示 & MP4/GIF動画保存",
    pricingFeature6: "最大水深マップ & 地点クリック時系列グラフ解析（ハイドログラフ）",
    pricingFeature7: "集水流路網マップ & 水位上昇継続アラート",
    pricingFeature8: "質量収支整合性チェック機能",
    pricingFeature9: "完全ローカル・オフライン動作（機密データの保護）",
    pricingFeature10: "日本語 / 英語 バイリンガルUI & 商用利用可能",
    pricingCtaBtn: "デスクトップ版を購入する (¥1,980)",
    pricingGuarantee: "Stripeセキュア決済対応 / 決済完了後すぐにダウンロード可能",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "よくあるご質問",
    faqQ1: "対応OSおよびシステム要件を教えてください。",
    faqA1: "Windows 10/11 (64bit) または macOS 11以降 (Apple Silicon M1/M2/M3/M4 および Intel CPU) に対応しています。特別なGPUは不要で、一般的なPC環境で軽快に動作します。",
    faqQ2: "どのような地形データ（OBJファイル）に対応していますか？",
    faqA2: "標準的なWavefront OBJ形式のポリゴンメッシュに対応しています。QGISやBlender、GISツールから書き出したDEM地形メッシュをそのまま読み込めます。また、手元に地形データがない場合でも、ワンクリックで谷や尾根を含むリアルなサンプル地形を自動生成してテストできます。",
    faqQ3: "インターネット接続は必要ですか？",
    faqA3: "初回のダウンロードおよび購入時以外、アプリケーションの実行にインターネット接続は一切不要です。完全オフライン環境で安全に動作し、地形データやシミュレーション結果が外部に送信されることはありません。",
    faqQ4: "商用利用や研究発表での利用は可能ですか？",
    faqA4: "はい、可能です。本アプリを用いて生成された画像、解析データ、グラフ、動画などは、商用プロジェクト、報告書、プレゼンテーション、学術論文、教材等に自由にご利用いただけます。",
    faqQ5: "購入後のアップデートや追加料金はありますか？",
    faqA5: "追加の月額料金やサブスクリプションは一切ありません。一度ご購入いただければ、永久無制限で最新バージョンの機能をご利用いただけます。",
    faqQ6: "浅水方程式（仮想パイプモデル）とは何ですか？",
    faqA6: "グリッド上の各セル間の水頭差（標高＋水深）に基づいて、仮想的なパイプを介した流量を高速に数値計算する流体モデルです。従来のナビエ・ストークス方程式に比べて極めて計算効率が高く、地形スケールの広域な降雨流出現象をPCローカル上で高速かつ安定してシミュレートできます。",

    // Footer
    footerDesc: "3D地形と浅水方程式による次世代の降雨流出シミュレーション・デスクトップアプリケーション。",
    footerLinksTitle: "リンク",
    footerLegalTitle: "インフォメーション",
    footerBuyLink: "ストアで購入・ダウンロード",
    footerManualLink: "オンラインマニュアル",
    footerContactLink: "お問い合わせ",
    footerTerms: "利用規約",
    footerPrivacy: "プライバシーポリシー",
    footerCopyright: "© 2026 Cyber Matrix / RainSimulator Desktop. All rights reserved."
  },

  en: {
    // Meta & Brand
    pageTitle: "Terrain Rainfall-Runoff Simulator Desktop — 3D Topographic Fluid Dynamics App",
    brandName: "RainSimulator",
    brandSubtitle: "3D Terrain Rainfall-Runoff Simulator Desktop",

    // Navigation
    navFeatures: "Features",
    navDetails: "Core Capabilities",
    navDemo: "Live Demo",
    navUseCases: "Use Cases",
    navCompare: "Comparison",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navBuyBtn: "Buy & Download",

    // Hero Section
    heroBadge: "Native 3D Fluid Dynamics Desktop App for Windows & macOS",
    heroTitle: "3D Terrain × Shallow Water Equations.<br><span class=\"gradient-text\">Rainfall & Overland Flow</span> High-Precision Simulation",
    heroSubtitle: "Simulate how rain falls, accumulates, and flows across 3D terrain meshes (OBJ/DEM) using 2D shallow-water virtual pipe equations. 100% offline local execution, high-res video export, and a permanent lifetime license.",
    heroBuyCta: "Get Desktop Edition (¥1,980)",
    heroDemoCta: "Explore Live Demo",
    heroMetaPlatforms: "Native Performance on Windows 10/11 & macOS (Apple Silicon / Intel)",
    heroMetaOffline: "100% Local & Offline Physics — Zero Data Uploaded to Cloud",
    heroMetaOneTime: "Lifetime License ¥1,980 (~$14.99) — Zero Recurring Fees",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "Shallow Water Eq.",
    stat1Desc: "Virtual Pipe Model delivers fast, stable numerical fluid dynamics",
    stat2Number: "3D",
    stat2Label: "Real-time Elevation View",
    stat2Desc: "Interactive 3D orbit, zoom, and dynamic colormap rendering",
    stat3Number: "100%",
    stat3Label: "Local & Offline",
    stat3Desc: "Confidential terrain data stays 100% private on your local PC",
    stat4Number: "4+",
    stat4Label: "Analytical Maps & Video",
    stat4Desc: "MP4/GIF export, max depth, flow accumulation, & flood alert maps",

    // Core Features
    featuresSectionBadge: "CORE CAPABILITIES",
    featuresSectionTitle: "From Research to Engineering. Intuitive yet Rigorous",
    featuresSectionSubtitle: "We condensed specialized computational fluid dynamics into a sleek, modern desktop UI anyone can master in seconds.",

    feat1Title: "3D Terrain Import & Real-Time Preview",
    feat1Desc: "Seamlessly import OBJ meshes exported from QGIS, Blender, or DEM tools. Interactive 3D preview colored by elevation (blue = lowland, brown/white = peaks). Don't have a model ready? Generate realistic valley terrains with a single click.",
    feat1Tag: "3D OBJ / DEM Mesh",

    feat2Title: "Intuitive Rainfall & Environmental Controls",
    feat2Desc: "Set standard meteorological rainfall intensity (mm/h) and duration. Fine-tune evaporation/infiltration loss, numerical time step (dt), and pipe cross-section factor to simulate permeable forests to impervious concrete surfaces.",
    feat2Tag: "Full Physics Control",

    feat3Title: "Rainfall-Runoff Animations & High-Res Video Export",
    feat3Desc: "Render high-resolution flood animations overlaid on shaded topographic hillshades. A fixed color scale ensures depth values remain consistent across frames. Export simulations as MP4 or GIF videos for presentations and reports.",
    feat3Tag: "Real-Time Visualization & Video Export",

    feat4Title: "Interactive Max Depth & Peak Time Analysis",
    feat4Desc: "Generate peak water depth heatmaps. Click any point on the map to inspect its elevation, max depth, full time-series hydrograph, and exact delayed peak arrival time — revealing how valleys flood long after rainfall ceases.",
    feat4Tag: "Click-Point Hydrograph",

    feat5Title: "Flow Accumulation & Rising Water Alerts",
    feat5Desc: "Inspect logarithmic cumulative drainage networks. The system automatically highlights cells where water levels continue to rise after rain stops in vivid orange, pinpointing dangerous flood-concentration zones.",
    feat5Tag: "Drainage & Hazard Alert",

    feat6Title: "100% Local Execution & Mass-Balance Sanity Check",
    feat6Desc: "Automatic mass-conservation check (Rainfall = Storage + Runoff + Losses) to verify numerical stability. 100% local computation guarantees proprietary terrain models never leave your computer.",
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
    compareSectionSubtitle: "Eliminate expensive enterprise GIS licenses and tedious custom Python scripting. Enjoy instant, desktop-grade physical simulation.",

    compareThFeature: "Feature",
    compareColFeature: "Feature",
    compareThApp: "RainSimulator (Desktop)",
    compareColApp: "RainSimulator (Desktop)",
    compareThTrad: "Legacy 2D/3D Hydraulic Software",
    compareColTraditional: "Legacy 2D/3D Hydraulic Software",
    compareThScript: "Custom Python / MATLAB Scripts",
    compareColScript: "Custom Python / MATLAB Scripts",

    compareRow1Title: "Pricing & Cost",
    compareRow1App: "¥1,980 (~$14.99) One-Time Lifetime License",
    compareRow1Trad: "$2,000 - $10,000+ / Year",
    compareRow1Script: "High dev & maintenance cost",
    compareRow2Title: "User Interface",
    compareRow2App: "Intuitive Desktop GUI (Sliders & 1-Click Sim)",
    compareRow2Trad: "Steep learning curve & complex setup",
    compareRow2Script: "Command line & code edits required",
    compareRow3Title: "Flow Animation & Video",
    compareRow3App: "Real-time 3D & MP4/GIF video export",
    compareRow3Trad: "Requires 3rd party visualizer plugins",
    compareRow3Script: "Manual matplotlib rendering",
    compareRow4Title: "Interactive Hydrograph",
    compareRow4App: "1-Click point hydrograph inspection",
    compareRow4Trad: "Cumbersome data query pipelines",
    compareRow4Script: "Custom post-processing scripts",
    compareRow5Title: "Deployment & OS",
    compareRow5App: "Native Windows & macOS desktop app",
    compareRow5Trad: "High-spec workstation or server cluster",
    compareRow5Script: "Dependency hell & venv configuration",
    compareRow6Title: "Security & Privacy",
    compareRow6App: "100% Offline & Local (Zero cloud transmission)",
    compareRow6Trad: "Cloud license server or data uploads required",
    compareRow6Script: "Local execution (Environment setup needed)",

    // Pricing & Purchase Section
    pricingSectionBadge: "PRICING & GET STARTED",
    pricingSectionTitle: "Simple, Transparent One-Time Price",
    pricingSectionSubtitle: "No recurring subscriptions. A single one-time purchase grants perpetual lifetime access to all desktop features.",
    pricingCardTitle: "Terrain Rainfall-Runoff Simulator Desktop",
    pricingCardSubtitle: "Windows & macOS Desktop Edition (Perpetual License · Commercial Use Allowed)",
    pricingCurrency: "¥",
    pricingAmount: "1,980",
    pricingTax: "(Tax incl. / One-time purchase)",
    pricingFeature1: "Native Installers for Windows (exe) & macOS (dmg)",
    pricingFeature2: "Perpetual Lifetime License with Zero Recurring Subscriptions",
    pricingFeature3: "3D OBJ Import & Procedural Sample Terrain Generator",
    pricingFeature4: "2D Shallow-Water Physics Engine (Blazing-Fast Local CPU Computation)",
    pricingFeature5: "Real-Time Flow Animation & High-Resolution MP4/GIF Video Export",
    pricingFeature6: "Max Depth Heatmap & Interactive Click-Point Hydrograph",
    pricingFeature7: "Flow Accumulation & Post-Rain Rising Water Hazard Map",
    pricingFeature8: "Mass-Conservation Sanity Verification",
    pricingFeature9: "100% Offline & Local Execution (Proprietary Data Privacy Guaranteed)",
    pricingFeature10: "Bilingual English & Japanese Interface · Commercial Use Included",
    pricingCtaBtn: "Get Desktop Edition (¥1,980)",
    pricingGuarantee: "Secured by Stripe / Instant Direct Download After Checkout",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "Frequently Asked Questions",
    faqQ1: "What are the supported OS and system requirements?",
    faqA1: "Supported on Windows 10/11 (64-bit) and macOS 11+ (both Apple Silicon M1/M2/M3/M4 and Intel chips). It runs smoothly on standard laptops and PCs without requiring a dedicated high-end GPU.",
    faqQ2: "What 3D terrain file formats are supported?",
    faqA2: "Standard Wavefront OBJ polygon meshes are supported. You can load meshes exported from QGIS, Blender, or DEM terrain tools. If you don't have files ready, the app includes a procedural mountain-valley terrain generator so you can test immediately.",
    faqQ3: "Does it require an active internet connection?",
    faqA3: "No. Aside from the initial purchase and download, the application runs 100% offline. No simulation data, terrain models, or analytical results are ever transmitted to any external server.",
    faqQ4: "Can I use the output for commercial or academic publications?",
    faqA4: "Yes! All exported videos, analytical maps, and data hydrographs can be freely used in commercial client projects, technical reports, presentations, academic papers, and video productions.",
    faqQ5: "Are there any hidden fees or subscriptions?",
    faqA5: "No. There are zero subscriptions or recurring fees. Once purchased, you have perpetual access to all present and future simulator features.",
    faqQ6: "What is the Shallow-Water Virtual Pipe Model?",
    faqA6: "It is an efficient numerical fluid method that calculates water flux between grid cells driven by hydrostatic head differences (elevation + water depth). It provides realistic, physically grounded runoff behavior across macro terrains with orders of magnitude faster computation than full 3D Navier-Stokes solvers.",

    // Footer
    footerDesc: "Next-generation 3D terrain rainfall-runoff fluid dynamics desktop application.",
    footerLinksTitle: "Navigation",
    footerLegalTitle: "Information",
    footerBuyLink: "Store (Purchase & Download)",
    footerManualLink: "User Manual",
    footerContactLink: "Contact Support",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    footerCopyright: "© 2026 Cyber Matrix / RainSimulator Desktop. All rights reserved."
  }
};

let currentLang = 'ja';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'ja';
  currentLang = lang;
  try {
    localStorage.setItem('rain_sim_desktop_lang', lang);
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
    savedLang = localStorage.getItem('rain_sim_desktop_lang');
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
