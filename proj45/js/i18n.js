// i18n Dictionary and Controller for Terrain Rainfall-Runoff Simulator Landing Page
const translations = {
  ja: {
    // Meta & Brand
    pageTitle: "Terrain Rainfall-Runoff Simulator — 3D地形 降雨流出シミュレーター（Web版 & デスクトップ版）",
    brandName: "RainSimulator",
    brandSubtitle: "3D地形 降雨流出シミュレーター",

    // Navigation
    navFeatures: "特徴",
    navDetails: "コア機能",
    navDemo: "体験デモ",
    navUseCases: "活用シーン",
    navCompare: "比較",
    navPricing: "価格・エディション",
    navFaq: "FAQ",
    navWebBtn: "🌐 Web版を試す（無料）",
    navDesktopBtn: "💻 デスクトップ版",
    navBuyBtn: "購入・ダウンロード",

    // Hero Section
    heroBadge: "🌐 オンラインWeb版 ＆ 💻 デスクトップ版（Win/Mac）両対応",
    heroTitle: "3D地形 × 浅水方程式。<br><span class=\"gradient-text\">降雨と水の流れ</span>をリアルタイム高精度解析",
    heroSubtitle: "3D地形図（DEM/OBJメッシュ・GeoTIFF）に雨を降らせ、水流の集約・流出・浸透を浅水方程式（仮想パイプモデル）で高精度に計算する流体力学シミュレーター。ブラウザですぐ試せる「Web版」と、完全オフラインで高速動作する「デスクトップ版」をご用意。",
    heroWebCta: "🌐 Web版を今すぐ開く（無料お試し3回）",
    heroBuyCta: "💻 デスクトップ版を購入 (¥1,980)",
    heroDemoCta: "機能詳細・デモを見る",
    heroMetaWeb: "ブラウザで即座に起動（インストール不要・初回3回無料）",
    heroMetaPlatforms: "Windows 10/11 & macOS ネイティブ対応（完全ローカル・機密保護）",
    heroMetaOneTime: "追加費用なしの永久買い切りライセンス ¥1,980 (税込)",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "浅水方程式",
    stat1Desc: "Virtual Pipe Modelによる高速・安定した流体数値計算",
    stat2Number: "3D",
    stat2Label: "リアルタイム地形描画",
    stat2Desc: "OpenGL/WebGLによる標高カラーマップ＆直感的な回転・ズーム",
    stat3Number: "100%",
    stat3Label: "Web & Desktop",
    stat3Desc: "ブラウザから即起動のWeb版と、完全オフラインのデスクトップ版",
    stat4Number: "4+",
    stat4Label: "多彩な解析マップ & 動画出力",
    stat4Desc: "MP4/GIF動画保存・最大水深・流路網・遅延ピーク水位上昇マップ",

    // Core Features
    featuresSectionBadge: "CORE CAPABILITIES",
    featuresSectionTitle: "研究から実務まで。直感と精度を両立した機能群",
    featuresSectionSubtitle: "専門的な流体シミュレーションを、誰でも数クリックで直感的に扱えるモダンなUIに凝縮しました。",

    feat1Title: "3D地形インポート & リアルタイムプレビュー",
    feat1Desc: "QGISやBlenderから出力したOBJメッシュやDEM/GeoTIFFデータを即座に読み込み。標高に応じたカラーマップで3Dプレビュー。手元にデータがなくても、ボタン一つで複雑な谷を持つサンプル地形を自動生成できます。",
    feat1Tag: "3D OBJ / GeoTIFF対応",

    feat2Title: "直感的な降雨・環境パラメータ制御",
    feat2Desc: "天気予報でおなじみの「降雨強度 (mm/h)」や「降雨継続時間」を設定可能。さらに蒸発・浸透損失量、時間刻み dt、パイプ断面積係数を細かく調整でき、舗装路面から山林地まで多様な透水条件を柔軟にシミュレーションします。",
    feat2Tag: "物理パラメータ自在",

    feat3Title: "降雨流出アニメーション & 高解像度動画書き出し",
    feat3Desc: "陰影起伏図（ヒルシェード）に時間変化する水深を重ね合わせた高品質な流出アニメーションを生成。固定カラースケールにより、一目で水深の変化が把握可能。結果はMP4/GIF動画として保存でき、プレゼンや教材、論文報告に活用できます。",
    feat3Tag: "リアルタイム流出可視化 & 動画保存",

    feat4Title: "インタラクティブ最大水深 & ピーク時刻解析",
    feat4Desc: "全ステップ中の最高到達水深マップと、そのピークに達した時刻を瞬時に可視化。マップ上の任意の地点をクリック、または緯度経度・グリッド座標を入力するだけで、そのセルの水深時間変化グラフ（ハイドログラフ）を表示します。",
    feat4Tag: "地点別ハイドログラフ",

    feat5Title: "流路網（Flow Accumulation）解析",
    feat5Desc: "地表を流れた水の総累積通過量を計算し、谷筋や自然の雨水排水経路を明瞭に描画。土砂災害警戒箇所の抽出や排水計画の検討に強力な手がかりを提供します。",
    feat5Tag: "流路ネットワーク抽出",

    feat6Title: "遅延水位上昇（Still-Rising）自動検知",
    feat6Desc: "雨が止んだ後も上流からの流入によって水位が上がり続ける「危険地点」を自動検出し、オレンジ色で警告表示。雨が止んだ直後が最も危険な場所を直感的に特定できます。",
    feat6Tag: "減水期リスク可視化",

    // Interactive Demo Section
    demoSectionBadge: "LIVE INTERACTIVE PREVIEW",
    demoSectionTitle: "リアルタイム計算と可視化を体感",
    demoSectionSubtitle: "雨を降らせ、水が谷筋を伝って流れ落ち、集水域を形成する様子を直感的に観察できます。",
    demoParamTerrain: "地形モデル",
    demoParamTerrainValley: "フラクタル山岳谷地形 (33×33〜400×400)",
    demoParamRain: "降雨強度",
    demoParamDuration: "降雨継続時間",
    demoParamTotalTime: "総解析時間",
    demoTabAnim: "降雨流出アニメーション",
    demoTabDepth: "最大水深マップ",
    demoTabFlow: "集水流路網マップ",
    demoTabRising: "遅延水位上昇マップ",
    demoSimStatusRunning: "物理計算ステップ進行中...",
    demoSimStep: "経過時間: ",
    demoSimPeakDepth: "最大水深: ",
    demoSimMassCheck: "質量収支整合: 100.0%",
    demoNotice: "※ 実際のWebアプリ / デスクトップ版では、お手持ちの3D OBJ/GeoTIFFファイルをドラッグ＆ドロップして即座に解析できます。",
    demoLaunchWebBtn: "🌐 Web版で独自の地形をシミュレーション（無料）",

    // Use Cases
    usecasesSectionBadge: "APPLICATION SCENARIOS",
    usecasesSectionTitle: "幅広い分野で活用される降雨流出シミュレーション",
    usecasesSectionSubtitle: "土木設計、防災計画、学術研究、教育など、地形と雨水が関わるあらゆる現場で活躍します。",
    usecase1Title: "土木・都市計画・排水設計",
    usecase1Desc: "造成地や道路計画における雨水流出経路の特定、調整池の容量検討、側溝・排水設備の配置計画を、高価な大型解析ソフトなしで素早く検討できます。",
    usecase2Title: "ハザードマップ・地域防災検討",
    usecase2Desc: "豪雨時にどの谷筋に水が集中するか、雨が止んだ後にどの低地で浸水が遅れてピークを迎えるかを可視化し、避難計画や地域住民向けの説明資料を作成できます。",
    usecase3Title: "大学・研究機関での水文学研究",
    usecase3Desc: "浅水方程式（仮想パイプモデル）に基づく物理挙動を直感的に検証。質量収支の整合性を確認しながら、降雨パターンの違いによる流出応答を比較実験できます。",
    usecase4Title: "学校教育・理科防災教材",
    usecase4Desc: "「雨が降ると山から川へどのように水が集まるか」を立体的なアニメーションとグラフで生徒に見せることで、直感的な防災教育・水文学教育を実現します。",

    // Comparison Section
    compareSectionBadge: "WHY RAINSIMULATOR",
    compareSectionTitle: "従来手法・高額GISツールとの違い",
    compareSectionSubtitle: "専門的な解析機能を、圧倒的な使いやすさと手頃な買い切り価格で提供します。",
    compareColFeature: "比較項目",
    compareColUs: "RainSimulator (Web/Desktop)",
    compareColTrad: "従来型 2D流体力学ソフト",
    compareColGis: "一般的なGISプラグイン",
    compareRow1Title: "導入費用・ライセンス",
    compareRow1Us: "¥1,980 買い切り永久ライセンス（Web版無料枠あり）",
    compareRow1Trad: "年数十万円〜数百万円のサブスクリプション",
    compareRow1Gis: "GIS本体ライセンス + 有料拡張機能",
    compareRow2Title: "計算速度 & セットアップ",
    compareRow2Us: "ブラウザ即起動 または 数秒で起動（GPU不要）",
    compareRow2Trad: "重厚なメッシュ作成と環境構築に数時間〜数日",
    compareRow2Gis: "複雑なプラグイン依存関係とコマンド設定",
    compareRow3Title: "直感的な3D可視化",
    compareRow3Us: "リアルタイム3Dビューア ＆ 動画・グラフ即時出力",
    compareRow3Trad: "別売りのポストプロセッサが必要",
    compareRow3Gis: "2D平面表示のみ、または静的レンダリング",
    compareRow4Title: "地点別ハイドログラフ解析",
    compareRow4Us: "地図上をクリックするだけで瞬時にグラフ生成",
    compareRow4Trad: "ポイントごとのCSV書き出しと再集計が必要",
    compareRow4Gis: "Pythonスクリプト等による手動集計が必要",
    compareRow5Title: "遅延水位上昇（Still-Rising）検知",
    compareRow5Us: "降雨停止後の継続上昇セルを自動判別・警告",
    compareRow5Trad: "時系列全ステップを手動比較する必要あり",
    compareRow5Gis: "非対応",

    // Pricing Section
    pricingSectionBadge: "EDITIONS & PRICING",
    pricingSectionTitle: "選べる2つの利用スタイル",
    pricingSectionSubtitle: "用途に合わせて「インストール不要のWeb版」または「完全オフラインのデスクトップ版」をお選びいただけます。どちらも買い切り ¥1,980 で永久にご利用いただけます。",

    // Pricing Web Card
    pricingWebBadge: "NO INSTALLATION / オンラインWeb版",
    pricingWebTitle: "RainSimulator Web Edition",
    pricingWebSubtitle: "ブラウザで今すぐ使えるクラウドWebアプリケーション",
    pricingWebPrice: "無料お試し ➔ ¥1,980",
    pricingWebTax: "（初回3回無料 / 買い切り永久利用）",
    pricingWebFeature1: "インストール不要・PC/スマホ/タブレットから即アクセス",
    pricingWebFeature2: "初回 3回まで完全無料でお試しシミュレーション実行",
    pricingWebFeature3: "買い切り 1,980円で永久無制限アンロック（Stripe決済）",
    pricingWebFeature4: "3D OBJ & GeoTIFF 標高グリッド・地理座標系対応",
    pricingWebFeature5: "地点ハイドログラフ & Still-Rising（遅延水位上昇）解析",
    pricingWebFeature6: "高画質GIFアニメーション & CSV/PNG グラフ保存",
    pricingWebFeature7: "発行ライセンスキーで他端末・別ブラウザへいつでも復元可能",
    pricingWebCtaBtn: "🌐 Web版を今すぐ起動する（無料お試し）",
    pricingWebGuarantee: "ログイン不要・今すぐブラウザで無料でお試しいただけます",

    // Pricing Desktop Card
    pricingDesktopBadge: "OFFLINE & NATIVE / デスクトップ版",
    pricingDesktopTitle: "RainSimulator Desktop Edition",
    pricingDesktopSubtitle: "Windows & macOS 専用ネイティブアプリケーション",
    pricingDesktopPrice: "¥1,980",
    pricingDesktopTax: "（税込・永久買い切り）",
    pricingDesktopFeature1: "Windows (exe) & macOS (dmg) ネイティブインストーラー",
    pricingDesktopFeature2: "100% 完全ローカル・オフライン高速演算（外部通信なし）",
    pricingDesktopFeature3: "機密地形データや業務プロジェクトの完全ローカル保護",
    pricingDesktopFeature4: "3D OBJインポート & サンプル地形自動生成",
    pricingDesktopFeature5: "浅水方程式 高精度流体シミュレーションエンジン",
    pricingDesktopFeature6: "リアルタイム流出アニメーション & MP4/GIF動画保存",
    pricingDesktopFeature7: "商用利用・学術研究・業務レポート作成に完全対応",
    pricingDesktopCtaBtn: "💻 デスクトップ版を購入する (¥1,980)",
    pricingDesktopGuarantee: "Stripeセキュア決済対応 / 決済完了後すぐにダウンロード可能",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "よくあるご質問",
    faqQChoice: "Web版とデスクトップ版の違いは何ですか？どちらを選ぶべきですか？",
    faqAChoice: "手軽にインストールなしですぐ試したい方や、外出先・複数のPCから手軽に使いたい方は「Web版（3回無料）」がおすすめです。大容量の独自地形データを扱いたい方や、完全オフラインのセキュアな環境で業務利用・研究利用したい方は「デスクトップ版」をお選びください。どちらも買い切り ¥1,980 で永久にご利用いただけます。",
    faqQ1: "対応OSおよびシステム要件を教えてください。",
    faqA1: "【デスクトップ版】Windows 10/11 (64bit) または macOS 11以降 (Apple Silicon M1/M2/M3/M4 および Intel CPU) に対応しています。【Web版】Google Chrome, Safari, Edge, Firefox など最新のモダンブラウザで動作します。",
    faqQ2: "どのような地形データ（OBJ / GeoTIFF）に対応していますか？",
    faqA2: "標準的なWavefront OBJ形式のポリゴンメッシュ、およびGeoTIFF（.tif, .tiff）に対応しています。QGISやBlender、GISツールから書き出したDEM地形データをそのまま読み込めます。また、ワンクリックで谷や尾根を含むリアルなサンプル地形を自動生成してテストできます。",
    faqQ3: "インターネット接続は必要ですか？",
    faqA3: "【デスクトップ版】初回のダウンロード時以外、実行にインターネット接続は一切不要です。完全オフライン環境で動作します。【Web版】ブラウザアクセス時に接続が必要ですが、計算データはセキュアに処理されます。",
    faqQ4: "商用利用や研究発表での利用は可能ですか？",
    faqA4: "はい、可能です。本アプリを用いて生成された画像、解析データ、グラフ、動画などは、商用プロジェクト、報告書、プレゼンテーション、学術論文、教材等に自由にご利用いただけます。",
    faqQ5: "購入後のアップデートや追加料金はありますか？",
    faqA5: "追加の月額料金やサブスクリプションは一切ありません。一度ご購入いただければ、永久無制限で最新バージョンの機能をご利用いただけます。",
    faqQ6: "浅水方程式（仮想パイプモデル）とは何ですか？",
    faqA6: "グリッド上の各セル間の水頭差（標高＋水深）に基づいて、仮想的なパイプを介した流量を高速に数値計算する流体モデルです。従来のナビエ・ストークス方程式に比べて極めて計算効率が高く、地形スケールの広域な降雨流出現象を高速かつ安定してシミュレートできます。",

    // Footer
    footerDesc: "3D地形と浅水方程式による次世代の降雨流出シミュレーション（Web版 ＆ デスクトップ版）。",
    footerLinksTitle: "リンク",
    footerLegalTitle: "インフォメーション",
    footerWebLink: "🌐 Web版を起動（無料）",
    footerBuyLink: "💻 デスクトップ版を購入",
    footerManualLink: "オンラインマニュアル",
    footerContactLink: "お問い合わせ",
    footerTerms: "利用規約",
    footerPrivacy: "プライバシーポリシー",
    footerCopyright: "© 2026 Cyber Matrix / RainSimulator. All rights reserved."
  },

  en: {
    // Meta & Brand
    pageTitle: "Terrain Rainfall-Runoff Simulator — 3D Fluid Dynamics Simulation (Web & Desktop)",
    brandName: "RainSimulator",
    brandSubtitle: "3D Terrain Rainfall-Runoff Simulator",

    // Navigation
    navFeatures: "Features",
    navDetails: "Core Physics",
    navDemo: "Interactive Demo",
    navUseCases: "Use Cases",
    navCompare: "Comparison",
    navPricing: "Editions & Pricing",
    navFaq: "FAQ",
    navWebBtn: "🌐 Launch Web App (Free)",
    navDesktopBtn: "💻 Desktop Edition",
    navBuyBtn: "Get Application",

    // Hero Section
    heroBadge: "🌐 Online Web App & 💻 Native Desktop App for Win/Mac",
    heroTitle: "3D Terrain × Shallow Water Equations.<br><span class=\"gradient-text\">Rainfall & Overland Flow</span> Real-Time Physics",
    heroSubtitle: "High-performance shallow-water virtual-pipe fluid dynamics on 3D topographic meshes (OBJ/DEM/GeoTIFF). Run instantly in your browser with the Web App or execute 100% offline with the Native Desktop App.",
    heroWebCta: "🌐 Launch Web App (3 Free Trials)",
    heroBuyCta: "💻 Get Desktop Edition (¥1,980)",
    heroDemoCta: "Explore Live Demo",
    heroMetaWeb: "Instant in-browser execution (Zero install, 3 free trial runs)",
    heroMetaPlatforms: "Native performance on Windows 10/11 & macOS (100% offline & secure)",
    heroMetaOneTime: "Lifetime License ¥1,980 (~$14.99) — Zero Recurring Fees",

    // Key Stats / Highlights
    stat1Number: "2D",
    stat1Label: "Shallow Water",
    stat1Desc: "Fast and stable numerical fluid simulation via Virtual Pipe Model",
    stat2Number: "3D",
    stat2Label: "Real-time Shading",
    stat2Desc: "Interactive elevation colormaps with seamless orbit and zoom controls",
    stat3Number: "100%",
    stat3Label: "Web & Desktop",
    stat3Desc: "Instant Web App in browser and 100% offline Desktop Edition",
    stat4Number: "4+",
    stat4Label: "Scientific Maps & Export",
    stat4Desc: "High-res MP4/GIF exports, Peak depth, Flow paths, and Still-Rising analytics",

    // Core Features
    featuresSectionBadge: "CORE CAPABILITIES",
    featuresSectionTitle: "From Research to Engineering. Intuitive yet Rigorous",
    featuresSectionSubtitle: "Professional hydraulic modeling condensed into a modern, streamlined user interface for all devices.",

    feat1Title: "3D Terrain Import & Real-Time Preview",
    feat1Desc: "Instantly load Wavefront OBJ meshes and GeoTIFF elevation grids from QGIS, Blender, or GIS tools. Preview in interactive 3D colormaps or generate fractal mountainous valleys with a single click.",
    feat1Tag: "3D OBJ & GeoTIFF Supported",

    feat2Title: "Intuitive Rainfall & Environmental Controls",
    feat2Desc: "Configure practical rainfall rates (mm/h), precipitation durations, evapotranspiration, and soil infiltration coefficients to model diverse terrain conditions from paved urban lots to forested mountains.",
    feat2Tag: "Full Physical Control",

    feat3Title: "Animated Runoff & Video/GIF Rendering",
    feat3Desc: "Generate high-contrast overlays combining terrain hillshades with dynamic water depths. Export directly to smooth MP4 videos and lightweight GIF animations for presentations and reports.",
    feat3Tag: "Real-time Runoff & Video Export",

    feat4Title: "Interactive Peak Depth & Hydrograph Inspector",
    feat4Desc: "Inspect maximum inundation depths and peak arrival times. Click any location on the map or input precise lat/lon coordinates to inspect instantaneous water depth time-series hydrographs.",
    feat4Tag: "Cell-by-Cell Hydrograph",

    feat5Title: "Flow Accumulation Network Extraction",
    feat5Desc: "Calculate total cumulative runoff volume across the surface, illuminating valley channels and drainage corridors to identify hazardous torrent zones.",
    feat5Tag: "Drainage Network Mapping",

    feat6Title: "Automatic Still-Rising Inundation Alerts",
    feat6Desc: "Detect and flag delayed flood risk locations where water depths continue climbing even after rainfall cessation due to upstream watershed runoff lag.",
    feat6Tag: "Post-Rain Hazard Detection",

    // Interactive Demo Section
    demoSectionBadge: "LIVE INTERACTIVE PREVIEW",
    demoSectionTitle: "Experience Real-Time Hydrodynamic Physics",
    demoSectionSubtitle: "Watch rain gather into valleys, form overland torrents, and build hydrological drainage basins in real time.",
    demoParamTerrain: "Terrain Model",
    demoParamTerrainValley: "Fractal Mountain Valley (33×33 to 400×400)",
    demoParamRain: "Rainfall Rate",
    demoParamDuration: "Rain Duration",
    demoParamTotalTime: "Total Analysis Time",
    demoTabAnim: "Flow Animation",
    demoTabDepth: "Peak Depth Map",
    demoTabFlow: "Flow Network",
    demoTabRising: "Still-Rising Map",
    demoSimStatusRunning: "Computing physics steps...",
    demoSimStep: "Elapsed Time: ",
    demoSimPeakDepth: "Peak Depth: ",
    demoSimMassCheck: "Mass Conservation: 100.0%",
    demoNotice: "※ The full Web App and Desktop editions allow uploading custom OBJ / GeoTIFF terrain files.",
    demoLaunchWebBtn: "🌐 Try Your Own Terrain on the Web App (Free)",

    // Use Cases
    usecasesSectionBadge: "APPLICATION SCENARIOS",
    usecasesSectionTitle: "Engineered for Multi-Disciplinary Excellence",
    usecasesSectionSubtitle: "Trusted across civil engineering, disaster prevention, academic hydrology, and environmental education.",
    usecase1Title: "Civil Engineering & Drainage Design",
    usecase1Desc: "Map runoff paths across planned development sites, evaluate retention pond capacities, and layout gutters without enterprise CAD overhead.",
    usecase2Title: "Flood Hazard & Community Disaster Planning",
    usecase2Desc: "Pinpoint where torrential rain concentrates and which depressions suffer delayed inundation peaks to formulate evidence-based evacuation protocols.",
    usecase3Title: "Academic Research & Hydrological Modeling",
    usecase3Desc: "Validate virtual-pipe shallow water equations under varying rainfall conditions while ensuring rigorous conservation of mass.",
    usecase4Title: "STEM Education & Geoscience Training",
    usecase4Desc: "Demonstrate hydrological concepts with dynamic 3D visuals that make watershed mechanics intuitive for students and trainees.",

    // Comparison Section
    compareSectionBadge: "WHY RAINSIMULATOR",
    compareSectionTitle: "The Modern Alternative to Legacy Software",
    compareSectionSubtitle: "Professional hydraulic simulation made accessible with a clean interface and lifetime ownership.",
    compareColFeature: "Capability",
    compareColUs: "RainSimulator (Web / Desktop)",
    compareColTrad: "Legacy 2D Hydrodynamic Tools",
    compareColGis: "Standard GIS Plugins",
    compareRow1Title: "Pricing & Licensing",
    compareRow1Us: "¥1,980 (~$14.99) Lifetime License (Free Web Trial)",
    compareRow1Trad: "$2,000–$10,000 Annual Subscription",
    compareRow1Gis: "Base GIS License + Paid Add-ons",
    compareRow2Title: "Setup & Performance",
    compareRow2Us: "Instant in browser or opens in seconds (Zero GPU req.)",
    compareRow2Trad: "Hours/days to mesh and configure complex environments",
    compareRow2Gis: "Complex Python dependencies & manual scripts",
    compareRow3Title: "3D Visualization",
    compareRow3Us: "Real-time 3D viewport & instant GIF/video export",
    compareRow3Trad: "Requires separate post-processing software",
    compareRow3Gis: "2D only or static offline rendering",
    compareRow4Title: "Hydrograph Inspection",
    compareRow4Us: "Instant point-and-click time series charts",
    compareRow4Trad: "Manual export to external spreadsheets",
    compareRow4Gis: "Requires manual raster queries",
    compareRow5Title: "Still-Rising Detection",
    compareRow5Us: "Automatic delayed flood risk identification",
    compareRow5Trad: "Manual frame-by-frame delta calculation",
    compareRow5Gis: "Not Supported",

    // Pricing Section
    pricingSectionBadge: "EDITIONS & PRICING",
    pricingSectionTitle: "Choose Your Simulation Style",
    pricingSectionSubtitle: "Select the instant zero-install Web Edition or the 100% offline Native Desktop Edition. Both offer lifetime access for just ¥1,980.",

    // Pricing Web Card
    pricingWebBadge: "NO INSTALLATION / ONLINE WEB APP",
    pricingWebTitle: "RainSimulator Web Edition",
    pricingWebSubtitle: "Instant in-browser Cloudflare-powered Web Application",
    pricingWebPrice: "Free Trial ➔ ¥1,980",
    pricingWebTax: "(3 Free Trial Runs / ¥1,980 Lifetime Unlock)",
    pricingWebFeature1: "Zero installation — works on PC, Mac, iPad, and Mobile",
    pricingWebFeature2: "3 Full trial simulation runs completely free",
    pricingWebFeature3: "One-time ¥1,980 (~$14.99) unlock for unlimited runs",
    pricingWebFeature4: "3D OBJ & GeoTIFF coordinate grid support",
    pricingWebFeature5: "Interactive hydrographs & Still-Rising risk mapping",
    pricingWebFeature6: "High-resolution GIF animation & CSV/PNG dataset exports",
    pricingWebFeature7: "Issued license key syncs across all your browsers and devices",
    pricingWebCtaBtn: "🌐 Launch Web App (Free Trial)",
    pricingWebGuarantee: "No account required — run simulations immediately",

    // Pricing Desktop Card
    pricingDesktopBadge: "OFFLINE & NATIVE / DESKTOP APP",
    pricingDesktopTitle: "RainSimulator Desktop Edition",
    pricingDesktopSubtitle: "Native standalone application for Windows & macOS",
    pricingDesktopPrice: "¥1,980",
    pricingDesktopTax: "(tax incl. / Lifetime License)",
    pricingDesktopFeature1: "Native installer packages for Windows (.exe) & macOS (.dmg)",
    pricingDesktopFeature2: "100% Offline & local execution — zero external data transfer",
    pricingDesktopFeature3: "Complete data privacy for proprietary and confidential projects",
    pricingDesktopFeature4: "3D OBJ mesh import & fractal sample terrain generator",
    pricingDesktopFeature5: "High-performance shallow-water virtual-pipe physics engine",
    pricingDesktopFeature6: "Full MP4 / GIF video exports & interactive hydrographs",
    pricingDesktopFeature7: "Full commercial, research, and educational rights included",
    pricingDesktopCtaBtn: "💻 Get Desktop Edition (¥1,980)",
    pricingDesktopGuarantee: "Secured by Stripe / Instant Direct Download After Checkout",

    // FAQ Section
    faqSectionBadge: "FREQUENTLY ASKED QUESTIONS",
    faqSectionTitle: "Frequently Asked Questions",
    faqQChoice: "What is the difference between the Web Edition and Desktop Edition?",
    faqAChoice: "If you want to start simulating immediately without installing anything, or access it from multiple devices, choose the **Web Edition** (3 free runs included). If you work with large proprietary datasets and require 100% offline security and native performance, choose the **Desktop Edition**. Both offer lifetime access for ¥1,980.",
    faqQ1: "What are the system requirements?",
    faqA1: "【Desktop Edition】Runs on Windows 10/11 (64-bit) and macOS 11+ (Apple Silicon M1-M4 & Intel). No dedicated GPU is required. 【Web Edition】Runs on any modern browser including Chrome, Safari, Edge, and Firefox.",
    faqQ2: "What terrain file formats are supported?",
    faqA2: "Standard Wavefront OBJ meshes and GeoTIFF (.tif, .tiff) elevation grids exported from QGIS, Blender, and GIS suites are supported. You can also generate fractal terrains with valleys in one click.",
    faqQ3: "Is an internet connection required?",
    faqA3: "【Desktop Edition】Only required once for initial checkout. The app runs 100% offline. 【Web Edition】Requires internet access to connect to the cloud app, but all sessions are securely encrypted.",
    faqQ4: "Can I use it for commercial projects and academic papers?",
    faqA4: "Yes! All maps, graphs, animations, and datasets generated can be freely utilized in commercial proposals, client deliverables, academic publications, and educational media.",
    faqQ5: "Are there any recurring subscriptions or hidden costs?",
    faqA5: "None. It is a permanent lifetime license. Once unlocked, you receive unlimited simulation runs and future updates with zero recurring fees.",
    faqQ6: "What is the Virtual Pipe Shallow Water Model?",
    faqA6: "It is an efficient numerical formulation of the 2D shallow water equations that models hydrostatic pressure differentials between adjacent grid cells via virtual pipes, delivering rapid convergence and rock-solid mass conservation on standard CPUs.",

    // Footer
    footerDesc: "Next-generation 3D terrain rainfall-runoff simulation available as Web App and Native Desktop App.",
    footerLinksTitle: "Links",
    footerLegalTitle: "Information",
    footerWebLink: "🌐 Launch Web App (Free)",
    footerBuyLink: "💻 Get Desktop Edition",
    footerManualLink: "Online Manual",
    footerContactLink: "Contact Support",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy",
    footerCopyright: "© 2026 Cyber Matrix / RainSimulator. All rights reserved."
  }
};

const LANG_STORAGE_KEY = "rain_sim_lp_lang";

function getInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "ja" || saved === "en") return saved;
  } catch (e) {}
  const browserLang = (navigator.language || "").toLowerCase();
  return browserLang.startsWith("ja") ? "ja" : "en";
}

let currentLang = getInitialLang();

function t(key, ...args) {
  const dict = translations[currentLang] || translations.ja;
  const val = dict[key];
  return typeof val === "function" ? val(...args) : (val !== undefined ? val : key);
}

function setLang(lang) {
  if (lang !== "ja" && lang !== "en") return;
  currentLang = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {}
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = t(key);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  const evtData = { detail: { lang: currentLang } };
  document.dispatchEvent(new CustomEvent("langchange", evtData));
  window.dispatchEvent(new CustomEvent("langchange", evtData));
  document.dispatchEvent(new CustomEvent("languageChanged", evtData));
  window.dispatchEvent(new CustomEvent("languageChanged", evtData));
}

function initI18n() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
    });
  });
  applyTranslations();
}

// Expose globally
window.t = t;
window.setLang = setLang;
window.initI18n = initI18n;
Object.defineProperty(window, 'currentLang', {
  get() { return currentLang; }
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
