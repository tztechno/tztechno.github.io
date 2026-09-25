/**
 * Kotoba Booth - Official Landing Page JavaScript
 * Handles Bilingual (JA/EN) toggle, Interactive Simulator, Speech Synthesis, FAQ accordion & UI animations.
 */

(() => {
  "use strict";

  // --- I18N Data ---
  const I18N = {
    ja: {
      siteTitle: "Kotoba Booth - 英語⇄日本語 双方向AIリアルタイム音声翻訳",
      metaDesc: "英語⇄日本語のリアルタイム双方向音声翻訳。ブラウザで動くWeb版(¥100)と、完全オフライン・100%プライバシー保護のDesktop版(¥100)。",
      navFeatures: "特長",
      navEditions: "エディション比較",
      navDemo: "体験デモ",
      navEngines: "AIエンジン",
      navPricing: "料金",
      navFaq: "FAQ",
      navCtaWeb: "Web版を起動",
      navCtaDesktop: "デスクトップ版",
      heroBadge: "N51 • 双方向AI音声翻訳ブース",
      heroTitlePrefix: "言葉の壁が、",
      heroTitleHighlight: "溶けていく。",
      heroDesc: "英語 ⇄ 日本語のリアルタイム双方向音声翻訳。話しかけるだけで言語を自動判定し、ミリ秒で高精度翻訳＆相手の言語でクリアに自動読み上げ。",
      
      // Hero Dual CTA
      webCardBadge: "ブラウザで即座に動く",
      webCardTitle: "Kotoba Booth Web",
      webCardDesc: "インストール不要。PC・iPhone・Androidのブラウザで開いて今すぐ使えるリアルタイム音声翻訳。",
      webCardPrice: "¥100 買い切り",
      webCardBtn: "Web版を開く",
      
      desktopCardBadge: "完全オフライン & ローカルAI",
      desktopCardTitle: "Kotoba Booth Desktop",
      desktopCardDesc: "macOS & Windows ネイティブ対応。外部送信ゼロで完全ローカル推論。ビジネス・機密通訳にも安心。",
      desktopCardPrice: "¥100 買い切り",
      desktopCardBtn: "デスクトップ版を購入・DL",
      
      hlOffline: "完全オフライン対応",
      hlPrivacy: "外部送信ゼロ・高プライバシー",
      hlPricing: "永久買い切り ¥100",
      hlTauri: "macOS & Windows ネイティブ",
      
      // Simulator Section
      simTag: "Live Interactive Simulator",
      simTitle: "音声翻訳を今すぐブラウザで体験",
      simDesc: "下のシミュレーターでテキストを入力するか例文を選び、「翻訳」または音声読み上げをお試しください。",
      simSourceLabel: "原文",
      simTransLabel: "訳文",
      simBtnTranslate: "翻訳する",
      simBtnSpeak: "読み上げ",
      simBtnClear: "クリア",
      simBtnCopy: "コピー",
      simAutoSpeak: "自動読み上げ",
      simSpeed: "速度",
      simPresetLabel: "試せる例文:",
      simPreset1: "最寄りの駅はどこですか？",
      simPreset2: "会議の議事録を後ほど送付いたします。",
      simPreset3: "Could you tell me how to get to Tokyo Station?",
      simPreset4: "Thank you for the quick and insightful feedback!",

      // Core Features
      featTag: "Core Innovations",
      featTitle: "Kotoba Boothが選ばれる4つの理由",
      featDesc: "最先端のローカルAI技術とWeb標準技術を融合し、これまでにないスピードとプライバシーを実現。",
      feat1Title: "双方向リアルタイム音声認識 & 読み上げ",
      feat1Desc: "AUTOモードで話者の言語（日本語/英語）を自動判定。発話が終わると即座に相手の言語に翻訳し、OS内蔵の高品質な音声合成でクリアに自動発音します。",
      feat2Title: "3種のマルチエンジン・ハイブリッド",
      feat2Desc: "端末内WASM (FuguMT)、ローカルLLM (Ollama: Gemma/Llama等)、最上位クラウド (Claude) の3方式に対応。用途に応じて瞬時に切り替え可能。",
      feat3Title: "100% プライバシー保護 & ゼロ外部送信",
      feat3Desc: "ローカル推論モードでは、音声データやテキストログが外部サーバーへ一切送信されません。機密の商談や法務・医療現場でも安心してご利用いただけます。",
      feat4Title: "月額サブスクなし・買い切り100円",
      feat4Desc: "毎月のサブスクリプション請求や従量課金はありません。ワンコイン（¥100）の買い切りで、永久に無制限の音声・テキスト翻訳が利用可能です。",

      // Editions Comparison
      compTag: "Choose Your Edition",
      compTitle: "利用スタイルに合わせた2つのエディション",
      compDesc: "手軽にスマホで使いたいならWeb版、完全オフラインや高プライバシーならDesktop版。",
      
      webEdName: "Web Edition",
      webEdDesc: "ブラウザで即起動。スマホ・タブレット・PCどこでも手軽に会話。",
      webEdF1: "インストール不要（ブラウザ対応）",
      webEdF2: "スマホ・タブレット・PCで利用可能",
      webEdF3: "FuguMT (WASM) / Claude API 対応",
      webEdF4: "リアルタイム音声認識 ＆ 自動読み上げ",
      webEdF5: "オフライン動作（※一部ブラウザキャッシュ）",
      webEdF6: "ローカルLLM (Ollama) 連携（要ローカルホスト）",
      webEdBtn: "Web版を今すぐ開く (¥100)",

      deskEdName: "Desktop Edition",
      deskEdDesc: "macOS / Windows ネイティブアプリ。完全オフライン＆強力ローカルAI連携。",
      deskEdF1: "macOS (.dmg) / Windows (.exe) ネイティブ",
      deskEdF2: "100% 完全オフライン動作（通信一切不要）",
      deskEdF3: "ローカルLLM (Ollama: Gemma 4等) 完全連動",
      deskEdF4: "OSシステムキー（Mac: fn×2 / Win: Win+H）連動",
      deskEdF5: "外部データ送信ゼロ・完全な機密保護",
      deskEdF6: "直近30件のローカル翻訳履歴保存 & 再生",
      deskEdBtn: "デスクトップ版を購入する (¥100)",

      // Table Headers
      tblFeature: "機能・仕様",
      tblWeb: "Web版 (Web App)",
      tblDesktop: "Desktop版 (Native App)",
      tblRow1: "価格体系",
      tblRow1Web: "¥100 買い切り",
      tblRow1Desk: "¥100 買い切り",
      tblRow2: "対応プラットフォーム",
      tblRow2Web: "Chrome, Safari, iOS, Android, etc.",
      tblRow2Desk: "macOS (Apple Silicon / Intel), Windows",
      tblRow3: "インストール",
      tblRow3Web: "不要 (URLから即アクセス)",
      tblRow3Desk: "必要 (.dmg / .exe インストーラー)",
      tblRow4: "完全オフライン翻訳",
      tblRow4Web: "ブラウザキャッシュ依存",
      tblRow4Desk: "完全オフライン（通信不要）",
      tblRow5: "ローカルLLM (Ollama) 連携",
      tblRow5Web: "CORS設定が必要",
      tblRow5Desk: "ワンタッチネイティブ連携",
      tblRow6: "プライバシー保護",
      tblRow6Web: "高 (端末内WASM実行時)",
      tblRow6Desk: "最高 (100% 外部送信ゼロ)",

      // Privacy & Engines Deep Dive
      engTag: "Under The Hood",
      engTitle: "最先端の翻訳アーキテクチャ",
      engDesc: "端末のスペックや用途に合わせて最適な推論エンジンを選択できます。",
      eng1Name: "In-browser FuguMT (WASM)",
      eng1Desc: "WebAssembly技術により、端末内のCPU/GPUで高速推論。初回の約145MBモデル保存後は完全オフラインで軽快に動作します。",
      eng2Name: "Local LLM via Ollama",
      eng2Desc: "PC上で稼働するOllama（gemma4:e4b、qwen等）とシームレスに通信。文脈に応じた極めて自然な翻訳とニュアンス表現が可能です。",
      eng3Name: "Claude AI Cloud",
      eng3Desc: "最先端のクラウドLLM APIを活用し、極めて難解な専門用語や長文もプロの通訳レベルで美しく翻訳します。",

      // Steps
      stepTag: "How It Works",
      stepTitle: "直感的な3ステップで会話が繋がる",
      stepDesc: "複雑な操作は一切ありません。話すだけでスムーズに通じ合えます。",
      step1Title: "1. 話す・または入力",
      step1Desc: "マイクボタンまたはキーボードからテキストを入力。言語はAUTOで瞬時に自動判定されます。",
      step2Title: "2. リアルタイム高精度翻訳",
      step2Desc: "ニューラルAIが瞬時に文脈を読み解き、自然な英語・日本語に翻訳します。",
      step3Title: "3. 相手の言語で自動音声発音",
      step3Desc: "翻訳完了と同時にOS内蔵のクリアな音声で自動発声。対面でのスムーズな会話を実現します。",

      // Pricing
      priceTag: "Simple Pricing",
      priceTitle: "安心の永久買い切り 100円",
      priceDesc: "日々の会話やビジネス通訳を、誰でも気軽に使える公正な価格で提供します。",

      // FAQ
      faqTag: "Frequently Asked Questions",
      faqTitle: "よくあるご質問",
      faq1Q: "なぜ月額サブスクリプションではなく買い切り100円なのですか？",
      faq1A: "Kotoba Boothは、端末内のローカル推論（WebAssembly / ローカルLLM）を活用することで、サーバー維持費を最小限に抑えています。そのため高額な月額課金ではなく、100円の永久買い切りライセンスで提供可能となっています。",
      faq2Q: "飛行機の中や電波のない場所（オフライン）でも使えますか？",
      faq2A: "はい。デスクトップ版（およびモデルを一度読み込んだWeb版）は、インターネット接続がない環境や機内モードでも完全に動作します。",
      faq3Q: "Web版とデスクトップ版のどちらを購入すべきですか？",
      faq3A: "スマートフォンや外出先のブラウザで手軽に使いたい方は「Web版」、PCで日常的に使ったり、完全オフラインやOllamaローカルAIと連携させたい方は「デスクトップ版」がおすすめです。",
      faq4Q: "音声認識や読み上げの音声は変更できますか？",
      faq4A: "はい。設定画面からお好みの日本語・英語ボイスを選択でき、再生速度（0.6倍〜1.6倍）の微調整も可能です。",
      faq5Q: "支払い方法は何に対応していますか？",
      faq5A: "世界基準の安全な決済プラットフォーム「Stripe」を採用しており、各種クレジットカードやApple Pay、Google Pay等で安全に100円をお支払いいただけます。",

      // Bottom CTA
      bottomTitle: "言葉の壁を超えて、今すぐ会話を始めよう。",
      bottomDesc: "買い切り100円でアンロック。Web版またはデスクトップ版をお選びください。",
      bottomBtnWeb: "Web版を起動する (¥100)",
      bottomBtnDesktop: "デスクトップ版を入手 (¥100)",

      footerDesc: "Kotoba Booth — 英語 ⇄ 日本語 双方向AIリアルタイム音声翻訳システム",
      footerManual: "ユーザーマニュアル",
      footerCopy: "© 2026 Kotoba Booth / Cyber Matrix Systems. All rights reserved."
    },
    en: {
      siteTitle: "Kotoba Booth - Next-Gen Two-Way AI Voice & Text Translation",
      metaDesc: "Two-way real-time English ⇄ Japanese AI voice & text translator. Web App ($100 JPY) & Desktop App ($100 JPY) with 100% offline and zero-data-leak privacy.",
      navFeatures: "Features",
      navEditions: "Editions",
      navDemo: "Live Demo",
      navEngines: "AI Engines",
      navPricing: "Pricing",
      navFaq: "FAQ",
      navCtaWeb: "Launch Web App",
      navCtaDesktop: "Get Desktop App",
      heroBadge: "N51 • TWO-WAY AI VOICE TRANSLATION BOOTH",
      heroTitlePrefix: "Break the language barrier,",
      heroTitleHighlight: "in real time.",
      heroDesc: "Real-time bilingual voice & text translation for English ⇄ Japanese. Automatic language detection, instant neural translation, and natural speech synthesis.",
      
      // Hero Dual CTA
      webCardBadge: "Instant in Browser",
      webCardTitle: "Kotoba Booth Web",
      webCardDesc: "No installation required. Works on mobile, tablet, and PC browsers with one-click real-time voice translation.",
      webCardPrice: "¥100 One-time",
      webCardBtn: "Open Web App",
      
      desktopCardBadge: "100% Offline & Local AI",
      desktopCardTitle: "Kotoba Booth Desktop",
      desktopCardDesc: "Native macOS & Windows app with Tauri. Zero external data transmission, local LLM support, and maximum privacy.",
      desktopCardPrice: "¥100 One-time",
      desktopCardBtn: "Buy & Download Desktop",
      
      hlOffline: "100% Offline Capable",
      hlPrivacy: "Zero External Leak Privacy",
      hlPricing: "Lifetime Access ¥100",
      hlTauri: "macOS & Windows Native",
      
      // Simulator Section
      simTag: "Live Interactive Simulator",
      simTitle: "Experience Real-Time Voice Translation",
      simDesc: "Type a phrase or pick a preset below, then click Translate or Speak to test the real-time bilingual engine.",
      simSourceLabel: "Source",
      simTransLabel: "Translation",
      simBtnTranslate: "Translate",
      simBtnSpeak: "Speak",
      simBtnClear: "Clear",
      simBtnCopy: "Copy",
      simAutoSpeak: "Auto Speak",
      simSpeed: "Speed",
      simPresetLabel: "Try Presets:",
      simPreset1: "Where is the nearest train station?",
      simPreset2: "I will send the meeting minutes shortly.",
      simPreset3: "東京駅への行き方を教えていただけますか？",
      simPreset4: "素早く的確なフィードバックをありがとうございます！",

      // Core Features
      featTag: "Core Innovations",
      featTitle: "Why Choose Kotoba Booth?",
      featDesc: "Fusing state-of-the-art on-device AI with modern Web technologies for unmatched speed, privacy, and simplicity.",
      feat1Title: "Two-Way Voice Recognition & TTS",
      feat1Desc: "AUTO mode detects Japanese or English instantly. As soon as you finish speaking, it translates and reads aloud in the listener's native tongue.",
      feat2Title: "Triple Hybrid Multi-Engine",
      feat2Desc: "Choose between In-browser WASM (FuguMT), Local LLM (Ollama: Gemma/Llama), or Top-Tier Cloud (Claude) in a single click.",
      feat3Title: "100% Privacy & Zero Data Leak",
      feat3Desc: "In local inference mode, no voice or text ever leaves your machine. Perfect for confidential business meetings, legal, or medical consultations.",
      feat4Title: "No Subscriptions · ¥100 Lifetime",
      feat4Desc: "Say goodbye to recurring monthly subscriptions and strict token limits. One-time 100 JPY payment gives you lifetime unrestricted access.",

      // Editions Comparison
      compTag: "Choose Your Edition",
      compTitle: "Two Editions Tailored to Your Workflow",
      compDesc: "Pick the Web App for instant cross-device mobile use, or the Desktop App for offline privacy and local LLM power.",
      
      webEdName: "Web Edition",
      webEdDesc: "Runs immediately in browser. Ideal for on-the-go travel and cross-device chats.",
      webEdF1: "No installation needed (Browser based)",
      webEdF2: "Compatible with iOS, Android, PC & Mac",
      webEdF3: "FuguMT (WASM) & Claude API support",
      webEdF4: "Real-time speech recognition & synthesis",
      webEdF5: "Offline mode (cached in browser)",
      webEdF6: "Local LLM requires CORS setup",
      webEdBtn: "Open Web App (¥100)",

      deskEdName: "Desktop Edition",
      deskEdDesc: "Native macOS & Windows app. Built for 100% offline reliability & local AI models.",
      deskEdF1: "macOS (.dmg) & Windows (.exe) Native (Tauri)",
      deskEdF2: "100% Fully offline (Zero internet required)",
      deskEdF3: "Native Ollama local LLM integration",
      deskEdF4: "System dictation key integration (Mac fn×2 / Win+H)",
      deskEdF5: "Zero external data transmission guarantee",
      deskEdF6: "Last 30 translations local history & replay",
      deskEdBtn: "Buy Desktop App (¥100)",

      // Table Headers
      tblFeature: "Feature / Specs",
      tblWeb: "Web App",
      tblDesktop: "Desktop App",
      tblRow1: "Pricing",
      tblRow1Web: "¥100 One-time Lifetime",
      tblRow1Desk: "¥100 One-time Lifetime",
      tblRow2: "Platform Support",
      tblRow2Web: "Chrome, Safari, iOS, Android, etc.",
      tblRow2Desk: "macOS (Apple Silicon / Intel), Windows",
      tblRow3: "Installation",
      tblRow3Web: "Instant via URL",
      tblRow3Desk: "Native installer (.dmg / .exe)",
      tblRow4: "Full Offline Capability",
      tblRow4Web: "Browser cache dependent",
      tblRow4Desk: "100% Offline (No Wi-Fi required)",
      tblRow5: "Local LLM (Ollama)",
      tblRow5Web: "Requires manual CORS config",
      tblRow5Desk: "One-click native connection",
      tblRow6: "Data Privacy",
      tblRow6Web: "High (On-device WASM)",
      tblRow6Desk: "Maximum (Zero external ping)",

      // Privacy & Engines Deep Dive
      engTag: "Under The Hood",
      engTitle: "Cutting-Edge Translation Architecture",
      engDesc: "Switch between neural engines depending on your hardware and network requirements.",
      eng1Name: "In-browser FuguMT (WASM)",
      eng1Desc: "Runs locally on your CPU/GPU via WebAssembly. After a one-time ~145MB model download, it operates 100% offline with zero latency.",
      eng2Name: "Local LLM via Ollama",
      eng2Desc: "Directly connects to your locally running Ollama instance (gemma4, llama, etc.) for high-context, nuanced translation.",
      eng3Name: "Claude AI Cloud",
      eng3Desc: "Leverages state-of-the-art cloud LLMs to handle complex idioms, technical documentation, and long-form passages with professional precision.",

      // Steps
      stepTag: "How It Works",
      stepTitle: "Fluid Conversations in 3 Simple Steps",
      stepDesc: "Zero steep learning curves. Just speak naturally and let AI handle the rest.",
      step1Title: "1. Speak or Type",
      step1Desc: "Speak via microphone or type text. Language is detected automatically.",
      step2Title: "2. Instant Neural Translation",
      step2Desc: "Neural engines translate context and nuance seamlessly in milliseconds.",
      step3Title: "3. Natural Voice Output",
      step3Desc: "Automatic clear speech playback in the target language for seamless face-to-face dialogue.",

      // Pricing
      priceTag: "Simple Pricing",
      priceTitle: "Honest Lifetime Access for ¥100",
      priceDesc: "Accessible, high-grade AI translation tools designed for everyone without recurring fee traps.",

      // FAQ
      faq1Q: "Why is it ¥100 one-time instead of a monthly subscription?",
      faq1A: "By running inference directly on your device (WebAssembly & Local LLM), we eliminate high server hosting costs. We pass those savings directly to you with a fair one-time unlock.",
      faq2Q: "Does it truly work offline (on airplanes or remote areas)?",
      faq2A: "Yes. The Desktop App (and cached Web App) works 100% offline without any internet connection.",
      faq3Q: "Which edition should I choose?",
      faq3A: "Choose the Web App if you want quick access on mobile phones or multiple devices. Choose the Desktop App for dedicated PC workflows, complete offline reliability, and local Ollama LLM integration.",
      faq4Q: "Can I customize the speech voices and speed?",
      faq4A: "Yes. You can choose from installed Japanese and English system voices and customize playback speed from 0.6x to 1.6x.",
      faq5Q: "What payment methods are accepted?",
      faq5A: "We use Stripe for secure payments, accepting all major credit cards, Apple Pay, and Google Pay for the 100 JPY unlock.",

      // Bottom CTA
      bottomTitle: "Break the language barrier today.",
      bottomDesc: "Unlock lifetime access for ¥100. Choose Web App or Desktop App.",
      bottomBtnWeb: "Launch Web App (¥100)",
      bottomBtnDesktop: "Get Desktop App (¥100)",

      footerDesc: "Kotoba Booth — English ⇄ Japanese Two-Way AI Voice Translation System",
      footerManual: "User Manual",
      footerCopy: "© 2026 Kotoba Booth / Cyber Matrix Systems. All rights reserved."
    }
  };

  let currentLang = "ja";

  // --- Translation Dictionary for Simulator Demo ---
  const DEMO_DICT = {
    // JA -> EN
    "最寄りの駅はどこですか？": "Where is the nearest train station?",
    "最寄りの駅はどこですか": "Where is the nearest train station?",
    "こんにちは、元気ですか？": "Hello, how are you?",
    "こんにちは": "Hello!",
    "ありがとう": "Thank you!",
    "ありがとうございます": "Thank you very much!",
    "会議の議事録を後ほど送付いたします。": "I will send the meeting minutes shortly.",
    "会議の議事録を後ほど送付いたします": "I will send the meeting minutes shortly.",
    "これをお会計してください": "Check, please.",
    "東京駅への行き方を教えていただけますか？": "Could you tell me how to get to Tokyo Station?",
    "素早く的確なフィードバックをありがとうございます！": "Thank you for the quick and insightful feedback!",
    
    // EN -> JA
    "where is the nearest train station?": "最寄りの駅はどこですか？",
    "where is the nearest train station": "最寄りの駅はどこですか？",
    "hello, how are you?": "こんにちは、お元気ですか？",
    "hello": "こんにちは！",
    "thank you": "ありがとうございます！",
    "thank you very much": "本当にありがとうございます！",
    "i will send the meeting minutes shortly.": "会議の議事録を後ほど送付いたします。",
    "i will send the meeting minutes shortly": "会議の議事録を後ほど送付いたします。",
    "could you tell me how to get to tokyo station?": "東京駅への行き方を教えていただけますか？",
    "thank you for the quick and insightful feedback!": "素早く的確なフィードバックをありがとうございます！"
  };

  const JA_REGEX = /[぀-ヿ㐀-鿿ｦ-ﾟ]/;

  // --- DOM Elements ---
  const $ = (id) => document.getElementById(id);
  const $$ = (sel) => document.querySelectorAll(sel);

  // --- Initialize Application ---
  function init() {
    setupLanguage();
    setupSimulator();
    setupFAQ();
    setupMobileMenu();
    detectUserOS();
    setupSmoothScroll();
  }

  // --- Language Setup ---
  function setupLanguage() {
    const saved = localStorage.getItem("kotoba_lp_lang");
    if (saved && (saved === "ja" || saved === "en")) {
      currentLang = saved;
    } else {
      currentLang = navigator.language.startsWith("ja") ? "ja" : "en";
    }
    applyLanguage(currentLang);

    const langBtn = $("langSwitchBtn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        currentLang = currentLang === "ja" ? "en" : "ja";
        localStorage.setItem("kotoba_lp_lang", currentLang);
        applyLanguage(currentLang);
      });
    }
  }

  function applyLanguage(lang) {
    const data = I18N[lang] || I18N.ja;

    // Document Title
    document.title = data.siteTitle;

    // Elements with data-i18n
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (data[key]) {
        el.textContent = data[key];
      }
    });

    // Elements with data-i18n-html
    $$("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (data[key]) {
        el.innerHTML = data[key];
      }
    });

    // Update Lang Switcher label
    const langBtn = $("langSwitchBtn");
    if (langBtn) {
      langBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ${lang === "ja" ? "English" : "日本語"}`;
    }

    // Update preset pills text
    if ($("preset1")) $("preset1").textContent = data.simPreset1;
    if ($("preset2")) $("preset2").textContent = data.simPreset2;
    if ($("preset3")) $("preset3").textContent = data.simPreset3;
    if ($("preset4")) $("preset4").textContent = data.simPreset4;
  }

  // --- Interactive Simulator Logic ---
  function setupSimulator() {
    const srcInput = $("simSrc");
    const dstOutput = $("simDst");
    const transBtn = $("simTransBtn");
    const clearBtn = $("simClearBtn");
    const copyBtn = $("simCopyBtn");
    const swapBtn = $("simSwapBtn");
    const speakDstBtn = $("simSpeakDstBtn");
    const speakSrcBtn = $("simSpeakSrcBtn");
    const micBtn = $("simMicBtn");
    const autoSpeakCheck = $("simAutoSpeak");
    const speedRange = $("simSpeed");
    const srcLangTag = $("simSrcLang");
    const dstLangTag = $("simDstLang");

    let simDirection = "auto"; // "auto" | "ja" | "en"

    // Direction buttons
    $$(".sim-dir-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".sim-dir-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        simDirection = btn.getAttribute("data-dir");
        updateDirectionTags();
        runSimulation();
      });
    });

    function detectLang(text) {
      return JA_REGEX.test(text) ? "ja" : "en";
    }

    function getSrcLang() {
      const text = srcInput.value.trim();
      if (simDirection === "auto") {
        return detectLang(text);
      }
      return simDirection;
    }

    function updateDirectionTags() {
      const srcLang = getSrcLang();
      const dstLang = srcLang === "ja" ? "en" : "ja";
      if (srcLangTag) srcLangTag.textContent = srcLang.toUpperCase();
      if (dstLangTag) dstLangTag.textContent = dstLang.toUpperCase();
    }

    function runSimulation() {
      const text = srcInput.value.trim();
      if (!text) {
        dstOutput.textContent = currentLang === "ja" ? "翻訳結果がここに表示されます…" : "Translation will appear here…";
        dstOutput.classList.add("dim");
        return;
      }

      updateDirectionTags();
      const srcLang = getSrcLang();
      const dstLang = srcLang === "ja" ? "en" : "ja";

      dstOutput.classList.remove("dim");
      
      // Look up dictionary or intelligent fallback
      const key = text.toLowerCase();
      let result = DEMO_DICT[text] || DEMO_DICT[key];

      if (!result) {
        if (srcLang === "ja") {
          // JA -> EN simple translation heuristic for demo
          result = `[EN] ${text} (Instant Translation)`;
        } else {
          // EN -> JA
          result = `[日本語] ${text}（リアルタイム翻訳）`;
        }
      }

      dstOutput.textContent = result;

      if (autoSpeakCheck && autoSpeakCheck.checked) {
        speakText(result, dstLang);
      }
    }

    // Voice Synthesis
    function speakText(text, lang) {
      if (!window.speechSynthesis || !text) return;
      window.speechSynthesis.cancel();

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang === "ja" ? "ja-JP" : "en-US";
      
      const rateVal = speedRange ? parseFloat(speedRange.value) : 1.0;
      utter.rate = rateVal;

      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find((v) => v.lang.toLowerCase().startsWith(utter.lang.toLowerCase()));
      if (voice) utter.voice = voice;

      window.speechSynthesis.speak(utter);
    }

    // Event listeners
    if (transBtn) transBtn.addEventListener("click", runSimulation);
    if (srcInput) {
      srcInput.addEventListener("input", updateDirectionTags);
      srcInput.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
          e.preventDefault();
          runSimulation();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        srcInput.value = "";
        dstOutput.textContent = currentLang === "ja" ? "翻訳結果がここに表示されます…" : "Translation will appear here…";
        dstOutput.classList.add("dim");
        srcInput.focus();
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const text = dstOutput.textContent;
        if (text && !dstOutput.classList.contains("dim")) {
          navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${currentLang === "ja" ? "コピー完了" : "Copied"}`;
            setTimeout(() => { copyBtn.innerHTML = originalText; }, 1800);
          });
        }
      });
    }

    if (swapBtn) {
      swapBtn.addEventListener("click", () => {
        const curSrc = srcInput.value;
        const curDst = dstOutput.textContent;
        if (!dstOutput.classList.contains("dim") && curDst) {
          srcInput.value = curDst;
          if (simDirection === "ja") simDirection = "en";
          else if (simDirection === "en") simDirection = "ja";
          
          $$(".sim-dir-btn").forEach((b) => {
            b.classList.toggle("active", b.getAttribute("data-dir") === simDirection);
          });
          
          runSimulation();
        }
      });
    }

    if (speakDstBtn) {
      speakDstBtn.addEventListener("click", () => {
        const text = dstOutput.textContent;
        if (text && !dstOutput.classList.contains("dim")) {
          const srcLang = getSrcLang();
          const dstLang = srcLang === "ja" ? "en" : "ja";
          speakText(text, dstLang);
        }
      });
    }

    if (speakSrcBtn) {
      speakSrcBtn.addEventListener("click", () => {
        const text = srcInput.value.trim();
        if (text) {
          const srcLang = getSrcLang();
          speakText(text, srcLang);
        }
      });
    }

    // Presets
    $$(".preset-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const text = pill.textContent.trim();
        srcInput.value = text;
        runSimulation();
      });
    });

    // Voice Input (Web Speech Recognition)
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (micBtn && SR) {
      let recognition = null;
      let isRecording = false;

      micBtn.addEventListener("click", () => {
        if (isRecording) {
          recognition?.stop();
          return;
        }

        const srcLang = getSrcLang();
        recognition = new SR();
        recognition.lang = srcLang === "ja" ? "ja-JP" : "en-US";
        recognition.interimResults = true;

        recognition.onstart = () => {
          isRecording = true;
          micBtn.classList.add("active");
          micBtn.innerHTML = `<i class="fa-solid fa-microphone-slash"></i> ${currentLang === "ja" ? "聞き取り中…" : "Listening…"}`;
        };

        recognition.onresult = (ev) => {
          let text = "";
          for (let i = ev.resultIndex; i < ev.results.length; i++) {
            text += ev.results[i][0].transcript;
          }
          srcInput.value = text;
        };

        recognition.onerror = () => {
          recognition.stop();
        };

        recognition.onend = () => {
          isRecording = false;
          micBtn.classList.remove("active");
          micBtn.innerHTML = `<i class="fa-solid fa-microphone"></i> <span>Mic</span>`;
          if (srcInput.value.trim()) {
            runSimulation();
          }
        };

        try {
          recognition.start();
        } catch (e) {
          console.warn("Speech recognition error", e);
        }
      });
    } else if (micBtn) {
      micBtn.title = "Speech recognition is not supported in this browser.";
    }
  }

  // --- FAQ Accordion ---
  function setupFAQ() {
    $$(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".faq-item");
        if (parent) {
          const isOpen = parent.classList.contains("open");
          $$(".faq-item").forEach((item) => item.classList.remove("open"));
          if (!isOpen) {
            parent.classList.add("open");
          }
        }
      });
    });
  }

  // --- Mobile Menu Toggle ---
  function setupMobileMenu() {
    const menuBtn = $("mobileMenuBtn");
    const header = $("siteHeader");
    if (menuBtn && header) {
      menuBtn.addEventListener("click", () => {
        header.classList.toggle("menu-open");
      });
    }
  }

  // --- OS Detection & Download Badge ---
  function detectUserOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const osBadge = $("osRecommendBadge");
    if (!osBadge) return;

    if (userAgent.indexOf("mac") !== -1) {
      osBadge.innerHTML = `<i class="fa-brands fa-apple"></i> macOS (.dmg) 推奨`;
    } else if (userAgent.indexOf("win") !== -1) {
      osBadge.innerHTML = `<i class="fa-brands fa-windows"></i> Windows (.exe) 推奨`;
    } else {
      osBadge.innerHTML = `<i class="fa-solid fa-laptop"></i> Mac & Windows 対応`;
    }
  }

  // --- Smooth Scroll & Header Style ---
  function setupSmoothScroll() {
    window.addEventListener("scroll", () => {
      const header = $("siteHeader");
      if (header) {
        if (window.scrollY > 40) {
          header.style.background = "rgba(7, 11, 14, 0.95)";
          header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
        } else {
          header.style.background = "rgba(7, 11, 14, 0.8)";
          header.style.boxShadow = "none";
        }
      }
    });
  }

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
