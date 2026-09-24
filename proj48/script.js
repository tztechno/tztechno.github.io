/**
 * Talking Avatar Desktop - Official Landing Page Scripts
 * Includes:
 * 1. Bilingual i18n System (JA / EN)
 * 2. Interactive Real-time Lip-Sync Simulation & Web Speech Engine
 * 3. Audio Waveform Canvas Visualizer
 * 4. Cyber Matrix Particle Canvas Background
 * 5. Interactive FAQ Accordion & Navigation Controls
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. BILINGUAL i18n SYSTEM (Japanese & English)
     ========================================================================== */
  const i18nData = {
    ja: {
      // Meta & Titles
      pageTitle: "Talking Avatar Desktop | リアルタイムAIリップシンク・アバター音声合成デスクトップアプリ",
      metaDesc: "文章を入力するだけで写真やイラストが表情豊かに喋り出す！完全ローカル実行のAIリアルタイム・リップシンク＆アバター音声合成アプリ『Talking Avatar Desktop』公式サイト。Windows / macOS対応。クロマキー動画出力・買い切り型。",
      langSwitchText: "English",

      // Nav
      navDemo: "体験シミュレーター",
      navFeatures: "特徴・強み",
      navUsecases: "活用シーン",
      navWorkflow: "3ステップ",
      navCompare: "製品比較",
      navPricing: "価格",
      navFaq: "よくある質問",
      navGetNow: "今すぐ購入 ➔",

      // Hero
      heroBadge: "NEURAL LIP-SYNC & AI AVATAR DESKTOP SUITE",
      heroTitle: '<span class="text-white">テキストを入力するだけ。</span><br><span class="gradient-text neon-text">写真もイラストも、表情豊かに喋り出す。</span>',
      heroLead: '手持ちの正面写真やパーツ分割イラストをドラッグ＆ドロップするだけで、AIが目や口を自動検出。<br class="desktop-br">入力した文章の母音に合わせて超高精度にリアルタイム・リップシンクし、クロマキー動画も一発書き出し。完全ローカル実行・買い切りのネイティブアプリです。',
      heroTag1: "母音連動リップシンク (A/I/U/E/O)",
      heroTag2: "写真の自動顔認識 ＆ 自作イラスト対応",
      heroTag3: "デュアルAI音声エンジン (Kokoro & OS)",
      heroTag4: "完全ローカル・データ送信ゼロ",
      heroCtaSub: "BUY DESKTOP EDITION / 買い切り ¥980",
      heroCtaMain: "公式ストアで購入・ダウンロード",
      heroCtaDemo: "ブラウザで即体験する",
      platformTitle: "対応環境:",
      heroFloatingBadge: "NEURAL LIP-SYNC ACTIVE",
      heroStatus: "AI LOCAL ENGINE READY",

      // Stats
      statLatency: "リアルタイム同期遅延",
      statPhoneme: "自然な母音開閉 (A/I/U/E/O/X)",
      statPrivacy: "完全ローカル・プライバシー保証",
      statEngines: "Kokoro AI ＆ OS標準TTS",
      statPriceVal: "¥980",
      statPrice: "永久ライセンス・買い切り",

      // Demo Section
      demoBadge: "INTERACTIVE PLAYGROUND",
      demoTitle: 'ブラウザ上で体験！ <span class="gradient-text">リアルタイム・リップシンク</span>',
      demoDesc: "母音ボタンをクリックするか、テキストを入力して「Speak」を押してください。声に合わせてアバターが自然に口パク・まばたき・微振動します。",
      demoPhonemeLabel: "母音テスト:",
      demoLiveBadge: "ONLINE SIMULATION",
      demoVoiceEngineLabel: "音声エンジン & 音声:",
      demoSpeedLabel: "読み上げ速度 (Speed):",
      demoTextInputLabel: "読み上げテキスト (Input Text):",
      demoPresetsLabel: "例文プリセット:",
      demoBtnSpeak: "Speak / 喋らせる",
      demoBtnStop: "停止",
      demoStatusReady: "準備完了: 文章を入力して「Speak」を押してください。",

      // Features
      featuresBadge: "CORE CAPABILITIES",
      featuresTitle: '動画制作とアバター表現を革新する <span class="gradient-text">6大アドバンテージ</span>',
      featuresDesc: "複雑なモーショントラッキングやLive2Dの職人技はもう不要。文章を入力するだけで、瞬時に自然なキャラクター動画が完成します。",
      feat1Title: '発話音素連動の<br>リアルタイム・リップシンク',
      feat1Text: '音声データおよびテキストから母音（A, I, U, E, O, X）の開閉形状を0ミリ秒遅延で精密に算出。不自然なカクつきのない滑らかな補間処理、ランダムな自然瞬き、微小な頭部揺動を自動合成します。',
      feat1Tag: '#音素自動マッピング #滑らか補間',
      feat2Title: '手持ち写真1枚から！<br>高精度AI顔認識＆自動メッシュ',
      feat2Text: '正面顔写真（JPG / PNG / WebP）をドラッグ＆ドロップするだけ。ローカルAIが目・口・顎のランドマークを自動検出し、即座に喋るフォトアバターへと変身させます。手動微調整機能も完備。',
      feat2Tag: '#写真1枚でOK #ランドマーク検出',
      feat3Title: '自作イラスト・VTuber<br>パーツ分割アバターに完全対応',
      feat3Text: '自作イラストをパーツ分け（base, eyes_open, eyes_closed, mouth_A〜X）したフォルダや.zipファイルをそのまま読み込み可能。お気に入りのオリジナルキャラを自在に喋らせることができます。',
      feat3Tag: '#自作立ち絵対応 #ZIP一括読込',
      feat4Title: 'デュアル音声エンジン<br>(Kokoro AI ＆ OS内蔵音声)',
      feat4Text: 'まるで本物の人間のような抑揚を持つ高品質ニューラル音声モデル「Kokoro AI（英語）」と、日本語をはじめ世界中の言語をスムーズに読み上げるOS標準TTSの両エンジンをワンクリックで切り替え可能です。',
      feat4Tag: '#高品質AIボイス #日本語OS対応',
      feat5Title: 'クロマキー背景 ＆<br>動画ファイル一発書き出し',
      feat5Text: 'グリーンバック（Chroma Green）や透過背景で「Speak & Record」を押すだけ。読み上げと同時にアバターアニメーションを高解像度動画（WebM / MP4）として自動出力。PremiereやAviUtlに直ぐ合成できます。',
      feat5Tag: '#グリーンバック #動画ワンクリック出力',
      feat6Title: '100%ローカル実行・<br>社外秘データも安心のプライバシー',
      feat6Text: 'すべての画像処理・音声合成・描画処理はお使いのPC内で完結。クラウドサービスと異なり、入力テキストや顔写真が外部サーバーへ送信されるリスクはゼロです。社内研修や極秘資料の動画化にも最適です。',
      feat6Tag: '#完全オフライン #情報漏洩ゼロ',

      // Usecases
      usecaseBadge: "VERSATILE USE CASES",
      usecaseTitle: 'あらゆるクリエイターと <span class="gradient-text">ビジネスを加速</span>',
      usecaseDesc: "顔出し不要の動画投稿から、社内DX・プレゼンテーションまで。幅広いシーンで即座に活躍します。",
      uc1Title: "YouTube解説・ゆっくり動画制作",
      uc1Desc: "解説動画や切り抜き動画のアバターとして。グリーンバック動画を書き出して動画編集ソフトに重ねるだけで、躍動感のあるトーク動画が完成。",
      uc1Tag: "顔出し不要でチャンネル開設",
      uc2Title: "eラーニング・社内教育ビデオ",
      uc2Desc: "マニュアルや研修資料を音声＋講師アバター化。完全ローカル実行なので社外秘の業務マニュアルも安心して動画化できます。",
      uc2Tag: "機密文書も安心・社内DX",
      uc3Title: "語学学習・シャドーイング教材",
      uc3Desc: "Kokoro AIによる自然な英語ネイティブ発音と口元の動きを同時に確認。視覚と聴覚を組み合わせた効果的なリスニング教材を作成可能。",
      uc3Tag: "ネイティブAI発音＋視覚口パク",
      uc4Title: "自作キャラクター・同人ゲーム制作",
      uc4Desc: "自作のイラスト立ち絵を読み込ませるだけで、表情豊かに喋るNPCやストーリーテラーを作成。ノベルゲームの演出素材にも重宝します。",
      uc4Tag: "イラスト1セットで即時アニメ化",

      // Workflow
      flowBadge: "EASY WORKFLOW",
      flowTitle: '直感操作！ <span class="gradient-text">わずか3ステップ</span> で動画完成',
      flowDesc: "面倒なセットアップや専門知識は不要。インストールしてすぐに使い始めることができます。",
      step1Title: "画像・アバターをセット",
      step1Desc: "正面の写真（JPG/PNG）または自作イラストのZIPファイルを画面にドラッグ＆ドロップ。内蔵サンプルアバターもワンクリックで選択可能です。",
      step2Title: "テキスト入力 ＆ 音声選択",
      step2Desc: "喋らせたい文章を入力し、好みの音声エンジン（OS音声 / Kokoro AI）と速度を選択。背景色もグリーンバックや透明に設定できます。",
      step3Title: "喋らせる ＆ 動画保存",
      step3Desc: "「Speak」でリアルタイムプレビュー。「Speak & record video」を押せば、読み上げと同時に動画ファイル（WebM）として自動保存されます。",
      formatBadge: "CUSTOM AVATAR SPECIFICATION",
      formatTitle: "自作イラストアバターのフォルダ構成 (.zip)",
      formatDesc: "目や口のパーツを分けてZIP圧縮するだけで、どんなイラストも自作アバターとして読み込めます。",
      fileJson: "目・口の配置座標設定ファイル",
      fileBase: "体・輪郭・髪型のベース画像",
      fileEyes: "開眼・半目・閉眼のまばたき画像",
      fileMouth: "発話母音ごとの口形状画像",

      // Compare
      compareBadge: "BENCHMARK COMPARISON",
      compareTitle: '他社サービスとの <span class="gradient-text">決定的な違い</span>',
      compareDesc: "毎月の高額サブスクやデータ漏洩の不安から解放される、新時代のデスクトップ専用ツール。",
      thItem: "比較項目",
      thCloud: "一般的なクラウドAIアバター",
      thVtuber: "一般的なLive2D / VTuberソフト",
      cmpPrice: "料金体系",
      cmpPriceGood: "¥980 買い切り永久ライセンス",
      cmpPriceBad: "月額 $30〜$100+ (従量課金)",
      cmpPriceNeutral: "高額制作費 (数万〜数十万円)",
      cmpPrivacy: "プライバシー / 機密性",
      cmpPrivacyGood: "完全ローカル・データ送信ゼロ",
      cmpPrivacyBad: "文章・顔写真が外部サーバーに送信",
      cmpPrivacyNeutral: "ローカル動作",
      cmpSetup: "セットアップ・作成時間",
      cmpSetupGood: "写真1枚をドロップ（即時1秒）",
      cmpSetupNeutral: "クラウド生成待ち時間あり",
      cmpSetupBad: "専門モデリング・リギングに数週間",
      cmpExport: "クロマキー動画出力",
      cmpExportGood: "標準搭載（ワンクリック出力）",
      cmpExportNeutral: "プランによる制限・透かし有",
      cmpExportBad: "OBS等の外部録画設定が必要",
      cmpOffline: "オフライン利用",
      cmpOfflineGood: "完全オフライン対応",
      cmpOfflineBad: "常時高速ネット接続が必須",
      cmpOfflineNeutral: "オフライン可",

      // Pricing
      pricingBadge: "ONE-TIME LICENSE",
      pricingTitle: '今すぐ手に入る <span class="gradient-text">永久ライセンス</span>',
      pricingDesc: "月額課金・追加コストは一切なし。一度の購入で最新のデスクトップアプリを永続的にご利用いただけます。",
      pricingRibbon: "RECOMMENDED",
      pricingSub: "macOS (Apple Silicon / Intel) ＆ Windows 10/11 対応",
      taxIncluded: "(税込)",
      pf1: "リアルタイム・リップシンク自動合成 (母音 A, I, U, E, O, X)",
      pf2: "正面顔写真のAIランドマーク自動認識 ＆ 自作ZIPイラスト読み込み",
      pf3: "Kokoro AI 高品質ニューラル音声 ＆ OS標準TTSデュアル対応",
      pf4: "クロマキー・透過動画（WebM/MP4）ワンクリック出力",
      pf5: "完全ローカル・ゼロ通信で機密資料も安心",
      pf6: "商用利用可能・クレジット表記不要",
      pf7: "買い切り型・今後のマイナーアップデート無料",
      buyDirectTop: "公式ストアで購入して即時ダウンロード",
      buyDirectSub: "PROCEED TO SECURE CHECKOUT ➔",
      trust1: "Stripe暗号化安全決済",
      trust2: "決済後即時ダウンロード",
      trust3: "永久買い切りライセンス",

      // Specs
      specsBadge: "SPECIFICATIONS",
      specsTitle: '動作環境 ＆ <span class="gradient-text">システム要件</span>',
      specOs: "OS:",
      specCpu: "CPU:",
      specRam: "メモリ:",
      specGpu: "グラフィックス:",
      specFormat: "インストーラー:",

      // FAQ
      faqBadge: "FREQUENTLY ASKED QUESTIONS",
      faqTitle: 'よくある <span class="gradient-text">ご質問</span>',
      faqDesc: "ご購入や仕様に関して多く寄せられる質問と回答をまとめています。",
      faq1Q: "商用利用（YouTube収益化動画や社内プレゼン等）は可能ですか？",
      faq1A: "はい、完全に商用利用可能です。本アプリで出力した動画や音声は、YouTubeなどの収益化動画、法人向けプレゼンテーション資料、社内教育ビデオ、SNSコンテンツなどに制限なく自由にお使いいただけます（クレジット表記も任意です）。",
      faq2Q: "入力した文章や読み込んだ写真が外部サーバーに送信されることはありますか？",
      faq2A: "一切ありません。本デスクトップアプリはすべての処理をお使いのパソコン内のローカル環境で実行します。機密性の高い社内資料や未公開情報、個人の顔写真などを安全に喋らせることができます。",
      faq3Q: "日本語の音声読み上げには対応していますか？",
      faq3A: "はい、対応しています。「Browser voice / OS音声」モードを選択していただくことで、WindowsやmacOSに標準搭載されている自然な日本語音声エンジン（Kyoko, Otoya, Haruka, Ichiro等）を利用して流暢に読み上げることが可能です。",
      faq4Q: "自作のイラストや立ち絵を喋らせるにはどうすればいいですか？",
      faq4A: "目と口のパーツ（base.png, eyes_open.png, mouth_A〜X.png等）および座標設定（avatar.json）を含んだフォルダまたはZIPファイルをご用意いただき、アプリにドラッグ＆ドロップするだけで即座に読み込まれます。付属のサンプルの構成を参考に簡単に作成いただけます。",
      faq5Q: "購入後のダウンロードやライセンス認証の手順は？",
      faq5A: "Stripeでの決済完了後、即座に専用のダウンロード画面へ遷移し、Windows用インストーラー（.exe）またはmacOS用ディスクイメージ（.dmg）を直接ダウンロードいただけます。煩わしいシリアルキー登録などは不要で、インストール後すぐにフル機能をご利用いただけます。",

      // Bottom CTA & Footer
      bottomBadge: "GET STARTED TODAY",
      bottomTitle: 'あなたのアイデアを、<br><span class="gradient-text">表情豊かなアバターの言葉に。</span>',
      bottomDesc: "買い切り ¥980 (税込) で手に入る次世代AIリップシンク・スタジオ。今すぐあなたのPCに導入しましょう。",
      bottomCtaBtn: "公式ストアで購入・即時ダウンロード (¥980)",
      footerTagline: "入力テキストに合わせて写真やイラストがリアルタイムに表情豊かに喋り出すAIリップシンク・アバタースタジオ。",
      fLinksTitle: "LINKS",
      fStoreTop: "Cyber Matrix ストアトップ",
      fProductPage: "製品購入ページ",
      fBackToTop: "ページトップへ戻る"
    },

    en: {
      // Meta & Titles
      pageTitle: "Talking Avatar Desktop | Real-Time AI Lip-Sync & Neural Speech Studio",
      metaDesc: "Bring any photo or illustration to life with neural real-time lip-sync! Offline desktop speech studio for Windows & macOS. Chroma key video export and buyout license.",
      langSwitchText: "日本語",

      // Nav
      navDemo: "Interactive Demo",
      navFeatures: "Features",
      navUsecases: "Use Cases",
      navWorkflow: "Workflow",
      navCompare: "Compare",
      navPricing: "Pricing",
      navFaq: "FAQ",
      navGetNow: "Buy Now ➔",

      // Hero
      heroBadge: "NEURAL LIP-SYNC & AI AVATAR DESKTOP SUITE",
      heroTitle: '<span class="text-white">Type Any Text.</span><br><span class="gradient-text neon-text">Bring Photos & Art to Life with Real-Time Lip-Sync.</span>',
      heroLead: 'Drag & drop any portrait photo or layered illustration. Local AI instantly detects facial landmarks.<br class="desktop-br">Precision vowel lip-syncing, natural blinking, and one-click chroma key video export. 100% private, native desktop app with lifetime license.',
      heroTag1: "Vowel Lip-Sync (A/I/U/E/O)",
      heroTag2: "Auto Face Detect & Custom Art .ZIP",
      heroTag3: "Dual AI Engines (Kokoro & OS)",
      heroTag4: "100% Local & Zero Cloud Leaks",
      heroCtaSub: "BUY DESKTOP EDITION / ¥980 BUYOUT",
      heroCtaMain: "Buy & Download from Official Store",
      heroCtaDemo: "Try Live Browser Demo",
      platformTitle: "Supported Platforms:",
      heroFloatingBadge: "NEURAL LIP-SYNC ACTIVE",
      heroStatus: "AI LOCAL ENGINE READY",

      // Stats
      statLatency: "Zero-Latency Sync",
      statPhoneme: "Natural Phonemes (A/I/U/E/O/X)",
      statPrivacy: "100% Local Privacy Guaranteed",
      statEngines: "Kokoro AI & Native TTS",
      statPriceVal: "¥980",
      statPrice: "One-Time Buyout License",

      // Demo Section
      demoBadge: "INTERACTIVE PLAYGROUND",
      demoTitle: 'Experience It Live! <span class="gradient-text">Real-Time Lip-Sync Playground</span>',
      demoDesc: "Click phoneme buttons or type text and click 'Speak'. Watch the avatar speak, blink, and animate naturally in real-time.",
      demoPhonemeLabel: "Phoneme Test:",
      demoLiveBadge: "ONLINE SIMULATION",
      demoVoiceEngineLabel: "Speech Engine & Voice:",
      demoSpeedLabel: "Speech Rate (Speed):",
      demoTextInputLabel: "Input Text:",
      demoPresetsLabel: "Quick Presets:",
      demoBtnSpeak: "Speak Text",
      demoBtnStop: "Stop",
      demoStatusReady: "Ready: Enter text and press 'Speak' to animate.",

      // Features
      featuresBadge: "CORE CAPABILITIES",
      featuresTitle: 'Revolutionize Avatar Videos <span class="gradient-text">6 Key Advantages</span>',
      featuresDesc: "No complex motion capture or tedious Live2D rigging. Simply enter text and get fully expressive character animations instantly.",
      feat1Title: 'Phoneme-Driven<br>Real-Time Lip-Sync',
      feat1Text: 'Computes vowel shapes (A, I, U, E, O, X) with zero latency. Seamless smoothing interpolation, natural blinks, and micro head motion synthesize automatically.',
      feat1Tag: '#AutoPhonemeMapping #SmoothMotion',
      feat2Title: 'From 1 Portrait Photo!<br>AI Landmark Detection & Mesh Warp',
      feat2Text: 'Drag and drop any front-facing photo (JPG/PNG/WebP). Local AI detects eyes, mouth, and jaw landmarks to create an instant talking photo avatar.',
      feat2Tag: '#SinglePhoto #LandmarkDetection',
      feat3Title: 'Custom Art & Layered Avatars<br>Full .ZIP Folder Support',
      feat3Text: 'Load your own character illustrations split into layers (base, eyes_open, mouth_A..X). Make your favorite original VTuber characters talk effortlessly.',
      feat3Tag: '#OriginalArt #ZipLoader',
      feat4Title: 'Dual Speech Engines<br>(Kokoro AI & OS Native TTS)',
      feat4Text: 'Switch between ultra-high-quality neural voice model Kokoro AI (English) and OS standard TTS engines (Japanese, English, and worldwide languages) with 1 click.',
      feat4Tag: '#NeuralVoice #Multilingual',
      feat5Title: 'Chroma Key Background &<br>One-Click Video Export',
      feat5Text: 'Set a Chroma Green or transparent background and press "Speak & Record". Export ready-to-use WebM/MP4 videos directly into Premiere, Final Cut, or DaVinci.',
      feat5Tag: '#GreenScreen #VideoExport',
      feat6Title: '100% Local Execution<br>Zero Data Transmission for Enterprise',
      feat6Text: 'All synthesis, computer vision, and rendering happen strictly on your local PC. Ideal for confidential corporate training, NDA projects, and private scripts.',
      feat6Tag: '#ZeroCloudLeak #OfflineSafe',

      // Usecases
      usecaseBadge: "VERSATILE USE CASES",
      usecaseTitle: 'Empowering Creators & <span class="gradient-text">Modern Businesses</span>',
      usecaseDesc: "From faceless video channels to enterprise DX and tutorials. Elevate your media presence instantly.",
      uc1Title: "YouTube & TikTok Video Production",
      uc1Desc: "Create compelling faceless narration channels. Export green screen videos and composite them into any video editor with ease.",
      uc1Tag: "Faceless Creator Studio",
      uc2Title: "e-Learning & Corporate Training",
      uc2Desc: "Convert manuals and training documents into animated avatar lessons. 100% local processing keeps sensitive internal data secure.",
      uc2Tag: "Confidential Training & DX",
      uc3Title: "Language Tutoring & Shadowing",
      uc3Desc: "Study native English pronunciation and vowel mouth shapes powered by Kokoro AI. Perfect audio-visual learning synergy.",
      uc3Tag: "Native AI Audio & Lip Shapes",
      uc4Title: "Indie Game & Visual Novel Characters",
      uc4Desc: "Turn 2D illustration sprite sets into talking NPCs and narrators. Add rich interactive personality to your creative game projects.",
      uc4Tag: "Instant Sprite Animation",

      // Workflow
      flowBadge: "EASY WORKFLOW",
      flowTitle: 'Intuitive & Fast! <span class="gradient-text">Only 3 Steps</span> to Produce',
      flowDesc: "No complex setup or technical knowledge needed. Start creating talking avatar videos right after installation.",
      step1Title: "Load Image or Avatar",
      step1Desc: "Drag & drop a front photo or custom avatar .ZIP file onto the stage. Built-in sample avatars are also ready at a click.",
      step2Title: "Enter Text & Pick Voice",
      step2Desc: "Type or paste your script, select your preferred voice engine (OS / Kokoro AI) and speed. Choose green screen or transparent background.",
      step3Title: "Speak & Save Video",
      step3Desc: "Preview in real-time with 'Speak'. Press 'Speak & record video' to automatically capture and download an HD WebM video file.",
      formatBadge: "CUSTOM AVATAR SPECIFICATION",
      formatTitle: "Layered Illustration Folder Structure (.zip)",
      formatDesc: "Package separate eye and mouth parts into a standard ZIP archive to load any custom character.",
      fileJson: "Coordinates configuration file",
      fileBase: "Body, contour & hair base image",
      fileEyes: "Eyes open, half & closed blink sprites",
      fileMouth: "Vowel mouth shape sprites (A/I/U/E/O/X)",

      // Compare
      compareBadge: "BENCHMARK COMPARISON",
      compareTitle: 'Decisive Advantages Over <span class="gradient-text">Alternatives</span>',
      compareDesc: "Break free from expensive monthly subscriptions and cloud privacy concerns with a dedicated desktop tool.",
      thItem: "Comparison Metric",
      thCloud: "Cloud AI Avatar SaaS",
      thVtuber: "Traditional Live2D / VTuber Tools",
      cmpPrice: "Pricing Model",
      cmpPriceGood: "¥980 One-Time Lifetime License",
      cmpPriceBad: "$30–$100+/mo (Usage Quota)",
      cmpPriceNeutral: "High Rigging Fees ($500–$3000+)",
      cmpPrivacy: "Privacy & Security",
      cmpPrivacyGood: "100% Local / Zero Server Uploads",
      cmpPrivacyBad: "Scripts & Photos sent to Cloud",
      cmpPrivacyNeutral: "Local execution",
      cmpSetup: "Setup Time",
      cmpSetupGood: "1-Second Drag & Drop Photo",
      cmpSetupNeutral: "Cloud rendering queue latency",
      cmpSetupBad: "Weeks of professional rigging",
      cmpExport: "Chroma Key Export",
      cmpExportGood: "Built-in 1-Click Video Export",
      cmpExportNeutral: "Watermarks or Plan Limits",
      cmpExportBad: "Requires complex OBS routing",
      cmpOffline: "Offline Usability",
      cmpOfflineGood: "Fully Offline Capable",
      cmpOfflineBad: "High-speed internet mandatory",
      cmpOfflineNeutral: "Offline capable",

      // Pricing
      pricingBadge: "ONE-TIME LICENSE",
      pricingTitle: 'Get Your <span class="gradient-text">Lifetime License</span> Today',
      pricingDesc: "No recurring fees or subscription traps. A single one-time purchase grants permanent access to the desktop suite.",
      pricingRibbon: "RECOMMENDED",
      pricingSub: "Compatible with macOS (Apple Silicon / Intel) & Windows 10/11",
      taxIncluded: "(Tax Incl.)",
      pf1: "Real-time vowel lip-sync synthesis (A, I, U, E, O, X)",
      pf2: "AI Photo landmark detection & Custom .ZIP layered art loader",
      pf3: "Kokoro AI Neural Speech & OS standard multilingual TTS",
      pf4: "Chroma green / Transparent video export (WebM/MP4)",
      pf5: "100% Local execution with zero cloud telemetry",
      pf6: "Commercial use allowed with no attribution required",
      pf7: "Perpetual buyout license with free minor updates",
      buyDirectTop: "Buy on Official Store & Instant Download",
      buyDirectSub: "PROCEED TO SECURE CHECKOUT ➔",
      trust1: "Stripe Encrypted Checkout",
      trust2: "Instant Post-Purchase Download",
      trust3: "Lifetime Buyout License",

      // Specs
      specsBadge: "SPECIFICATIONS",
      specsTitle: 'System Requirements & <span class="gradient-text">Specs</span>',
      specOs: "OS:",
      specCpu: "CPU:",
      specRam: "Memory:",
      specGpu: "Graphics:",
      specFormat: "Installer:",

      // FAQ
      faqBadge: "FREQUENTLY ASKED QUESTIONS",
      faqTitle: 'Frequently Asked <span class="gradient-text">Questions</span>',
      faqDesc: "Answers to common inquiries regarding licensing, compatibility, and features.",
      faq1Q: "Can I use videos made with Talking Avatar commercially (e.g. YouTube monetized videos)?",
      faq1A: "Yes, 100% commercial use is allowed. All videos and audio exported with Talking Avatar Desktop can be freely used for monetized YouTube channels, client presentations, e-learning courses, and social media without royalty fees or attribution requirements.",
      faq2Q: "Are my scripts or uploaded photos sent to external servers?",
      faq2A: "Never. The desktop edition runs completely offline on your local computer. Your photos, sensitive enterprise scripts, and generated media remain 100% private on your machine.",
      faq3Q: "Does it support Japanese and other languages besides English?",
      faq3A: "Yes! By selecting the 'Browser voice / OS voice' engine, you can utilize your operating system's native Japanese speech synthesizers (Kyoko, Otoya, Haruka, etc.) as well as dozens of global languages.",
      faq4Q: "How can I animate my own custom character illustrations?",
      faq4A: "Organize your character layers into a folder or .ZIP archive containing base.png, eyes_open.png, mouth_A..X.png, and avatar.json. Drag and drop the .zip into the app and it will immediately animate.",
      faq5Q: "How do I download and activate the app after purchase?",
      faq5A: "Immediately following your secure Stripe checkout, you will be directed to the direct download portal where you can get the Windows installer (.exe) or macOS disk image (.dmg). No complicated serial keys needed.",

      // Bottom CTA & Footer
      bottomBadge: "GET STARTED TODAY",
      bottomTitle: 'Turn Your Ideas into <br><span class="gradient-text">Expressive Avatar Voices.</span>',
      bottomDesc: "Own the next-generation AI Lip-Sync Studio for just ¥980 (Tax Incl.). Download and deploy to your PC today.",
      bottomCtaBtn: "Buy on Store & Instant Download (¥980)",
      footerTagline: "Real-time AI lip-sync and speech studio that brings any photo or art to life.",
      fLinksTitle: "LINKS",
      fStoreTop: "Cyber Matrix Store Top",
      fProductPage: "Product Purchase Page",
      fBackToTop: "Back to Top"
    }
  };

  let currentLang = 'ja';

  // Check saved language or URL hash
  const savedLang = localStorage.getItem('talking_avatar_lp_lang');
  if (savedLang === 'en' || savedLang === 'ja') {
    currentLang = savedLang;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('talking_avatar_lp_lang', lang);
    document.documentElement.lang = lang;

    const data = i18nData[lang];
    if (!data) return;

    // Document Title & Meta
    document.title = data.pageTitle;
    const metaDesc = document.getElementById('meta-desc');
    if (metaDesc) metaDesc.setAttribute('content', data.metaDesc);

    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', data.pageTitle);
    const ogDesc = document.getElementById('og-desc');
    if (ogDesc) ogDesc.setAttribute('content', data.metaDesc);

    // Replace regular data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key] !== undefined) {
        el.textContent = data[key];
      }
    });

    // Replace data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (data[key] !== undefined) {
        el.innerHTML = data[key];
      }
    });

    // Update language switch button text
    document.querySelectorAll('.lang-toggle-btn .lang-label').forEach(el => {
      el.textContent = data.langSwitchText;
    });
  }

  // Bind language toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyLanguage(currentLang === 'ja' ? 'en' : 'ja');
    });
  });

  // Initial apply
  applyLanguage(currentLang);


  /* ==========================================================================
     2. INTERACTIVE REAL-TIME LIP-SYNC SIMULATION
     ========================================================================== */
  const mouthShapeEl = document.getElementById('mouthShape');
  const avatarRigEl = document.getElementById('avatarRig');
  const avatarEyesEl = document.getElementById('avatarEyes');
  const hudPhonemeEl = document.getElementById('hudPhoneme');
  const hudAudioStatusEl = document.getElementById('hudAudioStatus');
  const demoStageEl = document.getElementById('demoStage');
  const phonemeBtns = document.querySelectorAll('.btn-phoneme');
  const bgOptBtns = document.querySelectorAll('.bg-opt-btn');

  const demoTextInput = document.getElementById('demoTextInput');
  const demoVoiceSelect = document.getElementById('demoVoiceSelect');
  const demoSpeedRange = document.getElementById('demoSpeedRange');
  const speedValEl = document.getElementById('speedVal');
  const demoSpeakBtn = document.getElementById('demoSpeakBtn');
  const demoStopBtn = document.getElementById('demoStopBtn');
  const demoStatusText = document.getElementById('demoStatusText');
  const presetPills = document.querySelectorAll('.pill-btn');

  let currentPhoneme = 'X';
  let isSpeaking = false;
  let speechSynthUtterance = null;
  let mouthAnimationTimer = null;
  let waveformAnimationId = null;

  // Set phoneme mouth shape
  function setPhoneme(phoneme) {
    currentPhoneme = phoneme;
    if (!mouthShapeEl) return;

    mouthShapeEl.className = `mouth-shape mouth-${phoneme}`;

    if (hudPhonemeEl) {
      hudPhonemeEl.textContent = phoneme === 'X' ? 'X (IDLE)' : `${phoneme} (ACTIVE)`;
    }

    phonemeBtns.forEach(btn => {
      if (btn.getAttribute('data-phoneme') === phoneme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Phoneme button clicks
  phonemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const phoneme = btn.getAttribute('data-phoneme');
      setPhoneme(phoneme);
      triggerWaveformBurst();
    });
  });

  // Background toggle buttons
  bgOptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bgOptBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const bg = btn.getAttribute('data-bg');
      demoStageEl.className = `demo-stage bg-${bg}`;
    });
  });

  // Speed range change
  if (demoSpeedRange && speedValEl) {
    demoSpeedRange.addEventListener('input', () => {
      speedValEl.textContent = `${parseFloat(demoSpeedRange.value).toFixed(1)}x`;
    });
  }

  // Presets click
  presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      presetPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const text = pill.getAttribute('data-text');
      if (demoTextInput && text) {
        demoTextInput.value = text;
      }
    });
  });

  // Natural Blinking Loop
  function scheduleBlink() {
    const nextBlinkDelay = 2500 + Math.random() * 3500;
    setTimeout(() => {
      if (avatarEyesEl) {
        avatarEyesEl.classList.add('blinking');
        setTimeout(() => {
          avatarEyesEl.classList.remove('blinking');
          scheduleBlink();
        }, 140);
      } else {
        scheduleBlink();
      }
    }, nextBlinkDelay);
  }
  scheduleBlink();

  // Web Speech & Lip-Sync Animation Driver
  function startSpeakingSimulation() {
    const text = demoTextInput ? demoTextInput.value.trim() : "";
    if (!text) return;

    stopSpeakingSimulation();
    isSpeaking = true;

    if (avatarRigEl) avatarRigEl.classList.add('speaking');
    if (hudAudioStatusEl) hudAudioStatusEl.textContent = "SYNTHESIZING";
    if (demoStatusText) {
      demoStatusText.textContent = currentLang === 'ja'
        ? "読み上げ中: AIリップシンク同期中..."
        : "Speaking: Real-time neural lip-sync active...";
    }

    startWaveformLoop();

    // Check if Web Speech API is supported
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      speechSynthUtterance = new SpeechSynthesisUtterance(text);
      const selectedVoiceType = demoVoiceSelect ? demoVoiceSelect.value : 'ja-JP';

      if (selectedVoiceType === 'ja-JP') {
        speechSynthUtterance.lang = 'ja-JP';
      } else {
        speechSynthUtterance.lang = 'en-US';
      }

      speechSynthUtterance.rate = parseFloat(demoSpeedRange ? demoSpeedRange.value : 1.0);

      // Boundary event (syllable / word level mapping)
      speechSynthUtterance.onboundary = (event) => {
        const char = text.charAt(event.charIndex);
        const mappedPhoneme = mapCharToPhoneme(char);
        setPhoneme(mappedPhoneme);
      };

      speechSynthUtterance.onend = () => {
        finishSpeaking();
      };

      speechSynthUtterance.onerror = () => {
        fallbackSpeakingAnimation(text);
      };

      // Fallback rhythm loop to keep mouth lively during speech
      let rhythmTick = 0;
      const phonemesList = ['A', 'I', 'U', 'E', 'O', 'A', 'I', 'O'];
      mouthAnimationTimer = setInterval(() => {
        if (!isSpeaking) return;
        rhythmTick++;
        if (Math.random() < 0.7) {
          const randomPhoneme = phonemesList[rhythmTick % phonemesList.length];
          setPhoneme(randomPhoneme);
        }
      }, 120 / parseFloat(demoSpeedRange ? demoSpeedRange.value : 1.0));

      window.speechSynthesis.speak(speechSynthUtterance);
    } else {
      fallbackSpeakingAnimation(text);
    }
  }

  function fallbackSpeakingAnimation(text) {
    const phonemesList = ['A', 'I', 'U', 'E', 'O', 'A', 'E', 'O'];
    let idx = 0;
    const speed = parseFloat(demoSpeedRange ? demoSpeedRange.value : 1.0);
    const duration = Math.max(2000, (text.length * 150) / speed);

    mouthAnimationTimer = setInterval(() => {
      idx = (idx + 1) % phonemesList.length;
      setPhoneme(phonemesList[idx]);
    }, 130 / speed);

    setTimeout(() => {
      finishSpeaking();
    }, duration);
  }

  function mapCharToPhoneme(ch) {
    if (!ch) return 'A';
    const c = ch.toLowerCase();
    if ('あアカa'.includes(c)) return 'A';
    if ('いイキi'.includes(c)) return 'I';
    if ('うウクu'.includes(c)) return 'U';
    if ('えエケe'.includes(c)) return 'E';
    if ('おオコo'.includes(c)) return 'O';
    return ['A', 'I', 'U', 'E', 'O'][Math.floor(Math.random() * 5)];
  }

  function finishSpeaking() {
    isSpeaking = false;
    if (mouthAnimationTimer) clearInterval(mouthAnimationTimer);
    if (avatarRigEl) avatarRigEl.classList.remove('speaking');
    setPhoneme('X');

    if (hudAudioStatusEl) hudAudioStatusEl.textContent = "READY";
    if (demoStatusText) {
      demoStatusText.textContent = currentLang === 'ja'
        ? "読み上げ完了。別の文章や母音もお試しいただけます。"
        : "Speech finished. Feel free to try other texts or phonemes.";
    }

    stopWaveformLoop();
  }

  function stopSpeakingSimulation() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    finishSpeaking();
  }

  if (demoSpeakBtn) {
    demoSpeakBtn.addEventListener('click', startSpeakingSimulation);
  }
  if (demoStopBtn) {
    demoStopBtn.addEventListener('click', stopSpeakingSimulation);
  }


  /* ==========================================================================
     3. AUDIO WAVEFORM CANVAS VISUALIZER
     ========================================================================== */
  const wfCanvas = document.getElementById('waveformCanvas');
  const wfStatus = document.getElementById('wfStatus');
  let wfCtx = wfCanvas ? wfCanvas.getContext('2d') : null;
  let wavePhase = 0;

  function renderWaveform(active) {
    if (!wfCanvas || !wfCtx) return;

    wfCtx.clearRect(0, 0, wfCanvas.width, wfCanvas.height);
    const width = wfCanvas.width;
    const height = wfCanvas.height;
    const centerY = height / 2;

    const barCount = 36;
    const barWidth = width / barCount - 2;

    for (let i = 0; i < barCount; i++) {
      const x = i * (barWidth + 2);
      let barHeight;

      if (active) {
        const sinVal = Math.sin(wavePhase + i * 0.35);
        const cosVal = Math.cos(wavePhase * 0.8 + i * 0.2);
        const noise = Math.random() * 0.35;
        barHeight = Math.max(4, Math.abs(sinVal * 0.7 + cosVal * 0.3 + noise) * (height - 8));
      } else {
        barHeight = 3 + Math.sin(i * 0.2) * 1.5;
      }

      const gradient = wfCtx.createLinearGradient(0, centerY - barHeight / 2, 0, centerY + barHeight / 2);
      if (active) {
        gradient.addColorStop(0, '#c084fc');
        gradient.addColorStop(0.5, '#ec4899');
        gradient.addColorStop(1, '#818cf8');
      } else {
        gradient.addColorStop(0, '#475569');
        gradient.addColorStop(1, '#1e293b');
      }

      wfCtx.fillStyle = gradient;
      wfCtx.fillRect(x, centerY - barHeight / 2, barWidth, barHeight);
    }

    wavePhase += 0.18;
  }

  function startWaveformLoop() {
    if (wfStatus) {
      wfStatus.textContent = "TRANSMITTING";
      wfStatus.style.color = "var(--accent-pink)";
    }
    function loop() {
      if (isSpeaking) {
        renderWaveform(true);
        waveformAnimationId = requestAnimationFrame(loop);
      }
    }
    loop();
  }

  function stopWaveformLoop() {
    if (waveformAnimationId) cancelAnimationFrame(waveformAnimationId);
    if (wfStatus) {
      wfStatus.textContent = "IDLE";
      wfStatus.style.color = "var(--text-muted)";
    }
    renderWaveform(false);
  }

  function triggerWaveformBurst() {
    renderWaveform(true);
    setTimeout(() => {
      if (!isSpeaking) renderWaveform(false);
    }, 250);
  }

  // Initial silent waveform render
  renderWaveform(false);


  /* ==========================================================================
     4. CYBER MATRIX PARTICLE CANVAS BACKGROUND
     ========================================================================== */
  const canvas = document.getElementById('cyber-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(45, Math.floor(width / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#a855f7' : '#ec4899'
      });
    }

    function animateCyberBackground() {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animateCyberBackground);
    }

    animateCyberBackground();
  }


  /* ==========================================================================
     5. FAQ ACCORDION & NAVIGATION CONTROLS
     ========================================================================== */
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Mobile Hamburger Menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Sticky Navbar Scroll Effect & Active Link Highlight
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Highlight active nav item
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      const secId = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });

});
