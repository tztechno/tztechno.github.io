/**
 * Blue Impulse 3D Flight Simulator - Landing Page Script
 * Multi-language (Japanese & English), 7 Routines Interactive Viewer,
 * Camera Preview, FAQ Accordion, and Floating CTA.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. I18N TRANSLATION DICTIONARY
  // --------------------------------------------------------------------------
  const i18nData = {
    ja: {
      // Top Bar
      top_badge: "NEW RELEASE",
      top_announcement: "Tauri 2.0 × WebGL 超軽量デスクトップ版リリース！完全オフライン・60FPS 高速動作",
      top_link: "今すぐ入手 (¥2,980) →",

      // Nav
      nav_features: "特徴",
      nav_routines: "7大演目",
      nav_cockpit: "コックピット＆HUD",
      nav_modes: "フライトモード",
      nav_specs: "動作環境",
      nav_faq: "FAQ",
      header_buy_btn: "購入する",

      // Hero
      hero_badge_matsushima: "航空自衛隊 松島基地 (RJST) 07/25 精密再現",
      hero_platform_pill: "Mac & Windows 両対応",
      hero_title: `松島の空へ、<br><span class="gradient-text">蒼き衝撃</span>とともに。`,
      hero_desc: "川崎重工 T-4「ブルーインパルス」の 5機ダイヤモンド編隊飛行と 7大公式アクロバット演目を、実地形 1536×1024 標高DEMと実機フライト物理で自宅の PC に完全再現。<br>コックピットに搭乗し、編隊長として空を統べるか、ソロ機として大空を舞うか。",
      
      val_license_type: "ライセンス形式",
      val_buyout: "完全買い切り",
      val_special_price: "特別価格",
      val_tax_inc: "(税込)",
      val_monthly_fee: "月額費用",
      val_no_sub: "¥0 (サブスク不要)",
      val_platform: "対応環境",
      val_platform_specs: "Mac (M1〜M4/Intel) / Win 10,11",

      cta_buy_now: "今すぐ購入してダウンロード",
      cta_buy_sub: "買い切り ¥2,980 ・ Mac & Windows パッケージ同梱",
      cta_view_features: "機能と見どころを見る ↓",

      guarantee_offline: "✓ オフライン完全動作",
      guarantee_cockpits: "✓ 1〜5番機 全コックピット搭乗",
      guarantee_sync: "✓ 編隊シンクロ率 採点システム搭載",

      cam_pill_1: "👑 1番機 (編隊長)",
      cam_pill_2: "🪶 2番機",
      cam_pill_3: "🪶 3番機",
      cam_pill_4: "🎯 4番機",
      cam_pill_5: "⚡ 5番機",
      cam_pill_8: "🗼 45m管制塔",
      cam_pill_9: "🎪 観覧席",

      // Features
      feat_subtitle: "FOUR CORE REALISMS",
      feat_title: "極限のリアリズムを支える 4つのテクノロジー",
      feat_desc: "実データと独自の物理演算を融合。松島基地の空気をそのままデスクトップに再現。",

      feat_1_title: "国土地理院 1536×1024 実標高DEM & 航空写真",
      feat_1_text: "宮城県域（仙台・松島湾・石巻・牡鹿半島・奥羽山脈）の実測DEM標高データと高解像度オルソ写真を融合。松島基地のメイン滑走路07/25（2,700m）、クロス滑走路15/33、エプロン、45m管制塔、PAPI進入灯まで精密再現。",
      feat_1_p1: "松島湾の美しい島々と海岸線を上空から一望",
      feat_1_p2: "リアルな進入角指示灯（PAPI）による本格着陸進入",

      feat_2_title: "川崎重工 T-4 精密3D機体 & 物理可動",
      feat_2_text: "鮮烈なホワイト＆コバルトブルー塗装、1〜6番機デカール、キャノピー・パイロットを再現。可動式三輪着陸脚（ギア）、スピードブレーキ、エルロン・エレベーター・ラダーの舵面が操縦桿と完全連動。",
      feat_2_p1: "IHI F3-IHI-30 ターボファン双発エンジンの物理音響",
      feat_2_p2: "スロットル連動エキゾーストグロー＆スモーク発生装置",

      feat_3_title: "5機編隊 AI & パイロット搭乗チャレンジ",
      feat_3_text: "実機と同じ「1〜4番機ダイヤモンド同時離陸＋5番機低角ロール離陸合流」を忠実にシミュレート。編隊長としてAI僚機を率いるか、僚機・ソロ機として編隊間隔（6.5m接触判定）をキープして飛ぶかを選べます。",
      feat_3_p1: "リアルタイム編隊シンクロ率スコア採点（RANK S〜C）",
      feat_3_p2: "自機特別リバリー（ゴールド／クリムゾン／サイバー等）",

      feat_4_title: "Rust + Tauri 2.0 超軽量ネイティブ & 60FPS",
      feat_4_text: "重厚なフライトシミュレーターの常識を覆す、わずか数十MBの高速インストーラー。WebGL 2.0とRustバックエンドの最適化により、Apple Silicon Macや標準的なWindows PCで60FPSの滑らかな描画を実現。",
      feat_4_p1: "ネット接続不要の完全オフライン動作",
      feat_4_p2: "起動までわずか数秒。ストレスフリーな即時フライト",

      // Gallery
      gallery_subtitle: "FLIGHT EXPERIENCE GALLERY",
      gallery_title: "その手で体感する、息をのむ大空のキャンバス",
      gallery_cap1_title: "リアルタイム PFD / HUD 視点",
      gallery_cap1_desc: "対気速度・気圧高度・人工水平線・FPVが瞬時に把握できるプロ仕様コックピット",
      gallery_cap2_title: "大空を描く 7大公式アクロバット演目",
      gallery_cap2_desc: "5機が織りなす扇型ブレイク「レインフォール」の瞬間",
      gallery_cap3_title: "松島湾の夕暮れ・サンセットフライト",
      gallery_cap3_desc: "機体に反射する夕陽とスモークトレイルの美しい陰影",

      // 7 Routines
      routines_subtitle: "7 OFFICIAL AIRSHOW ROUTINES",
      routines_title: "ブルーインパルス 7大公式演目を完全網羅",
      routines_desc: "自動フライト鑑賞モードで全コックピットから眺めることも、手動操縦で挑むことも可能。",
      routine_tab_0: "ローリングコンバットピッチ",
      routine_tab_1: "レインフォール",
      routine_tab_2: "デルタロール",
      routine_tab_3: "チェンジオーバーターン",
      routine_tab_4: "バーティカルクライムロール",
      routine_tab_5: "タッククロス",
      routine_tab_6: "コークスクリュー",
      routine_highlights_label: "🎯 見どころ & 操縦ポイント",
      radar_note: "リアルタイム 3D 軌道計算 & スモーク描画",

      // Cockpit & Cameras
      cockpit_subtitle: "COCKPIT & CAMERA SYSTEM",
      cockpit_title: "プロフェッショナル HUD 計器 & 9大カメラ視点",
      cockpit_desc: "操縦に必要なすべての情報を瞬時に把握できる本格計器と、自由自在なカメラワーク。",

      hud_1_title: "リアルタイム PFD (Primary Flight Display)",
      hud_1_desc: "ピッチラダー、ロール角、対気速度（ノット＆マッハ）、気圧高度（FT＆M）、昇降計、過大G警告（7.5G+）を忠実に表示。",
      hud_2_title: "FPV (フライトパスベクター)",
      hud_2_desc: "機首の向きだけでなく、実際の進行ベクトルを示すFPVシンボルにより、風の影響下でも正確な滑走路アプローチが可能。",
      hud_3_title: "フライト指導バナー (Flight Directive Overlay)",
      hud_3_desc: "離陸滑走速度、ギア格納、引き起こし角度、編隊追従、アプローチ、車輪ブレーキ完全停止まで、画面上部にパイロット指示がリアルタイム出現。",
      hud_4_title: "9つの多彩なカメラ視点",
      hud_4_desc: "1〜5番機コックピット、全体俯瞰、後方追従、松島基地45m管制塔（望遠追従）、地上観覧席からの見上げ視点をワンキーで即座切替。",

      cam_box_title: "📷 カメラ視点クイック切替プレビュー",
      cam_box_hint: "キーボード [1]〜[9] に対応",
      cam_name_1: "👑 1番機 (編隊長)",
      cam_desc_1: "後方に僚機を従えるリーダー視点",
      cam_name_2: "🪶 2番機 (左翼機)",
      cam_desc_2: "1番機の右翼を見ながら追従",
      cam_name_3: "🪶 3番機 (右翼機)",
      cam_desc_3: "1番機の左翼を見ながら追従",
      cam_name_4: "🎯 4番機 (スロット)",
      cam_desc_4: "ダイヤモンド直後下から見上げる迫力",
      cam_name_5: "⚡ 5番機 (ソロ機)",
      cam_desc_5: "低角ロール離陸＆アクロバット機動",
      cam_name_8: "🗼 45m管制塔",
      cam_desc_8: "松島基地の管制塔から望遠追従",
      cam_name_9: "🎪 地上観覧席",
      cam_desc_9: "航空祭エプロンから頭上を見上げる感動",

      // Modes
      modes_subtitle: "TWO VERSATILE MODES",
      modes_title: "あなたのスタイルで選べる 2つのフライトモード",
      mode_1_tag: "RECOMMENDED",
      mode_1_title: "5機編隊モード",
      mode_1_desc: "ブルーインパルスの醍醐味であるダイヤモンド編隊やエシュロン隊形でのフライト。",
      mode_1_p1: "<strong>演目オート鑑賞</strong>：7大公式演目を自動再生し、全コックピットや観覧席から鑑賞",
      mode_1_p2: "<strong>手動パイロット搭乗</strong>：1〜5番機の好きな機体に搭乗して自ら操縦桿を握る",
      mode_1_p3: "<strong>編隊追従 AI</strong>：1番機を操縦すれば2〜5番機のAI僚機が隊形を維持して追従",
      mode_1_p4: "<strong>編隊シンクロ率スコア</strong>：理想の演目軌道との同調精度をリアルタイム採点",
      mode_1_p5: "<strong>特別機体カラー</strong>：搭乗機にゴールド、クリムゾン、サイバーネオン等のリバリー適用",

      mode_2_tag: "FREE FLIGHT",
      mode_2_title: "1機ソロモード",
      mode_2_desc: "川崎重工 T-4 の優れた運動性能を存分に味わえる単独フリーフライト専用モード。",
      mode_2_p1: "<strong>ソロ演目鑑賞</strong>：単独垂直大宙返り、バレルロール、コークスクリュー等",
      mode_2_p2: "<strong>松島基地フリーフライト</strong>：滑走路07からの離陸、松島湾周回、着陸アプローチ",
      mode_2_p3: "<strong>初期位置プリセット</strong>：滑走路待機、松島湾上空、着陸ファイナルから即座スタート",
      mode_2_p4: "<strong>完全停止ブレーキ</strong>：着陸接地後の強力な車輪ブレーキによる完全停止",
      mode_2_p5: "<strong>天候・スモーク設定</strong>：晴天、夕景、虹色スモーク、三色スモークの自由カスタマイズ",

      // Pricing
      pricing_headline: `ブルーインパルスの大空を、あなたの手の中に。<br><span class="gradient-text">完全買い切り 2,980 円</span>`,
      pricing_sub: "サブスクリプション月額費用は一切不要。1度の購入で Mac 版と Windows 版の両方が手に入ります。",
      pricing_tax_label: "（税込・完全買い切り）",
      pricing_inc_1: "<strong>Mac & Windows 両対応</strong>（DMG & Setup.exe 同梱）",
      pricing_inc_2: "<strong>7大公式アクロバット演目</strong> すべてアンロック済み",
      pricing_inc_3: "<strong>国土地理院 1536×1024 松島基地DEM地形</strong> 収録",
      pricing_inc_4: "<strong>1〜5番機 全コックピット視点</strong> & 手動操縦チャレンジ",
      pricing_inc_5: "<strong>完全オフライン動作</strong>（ネット不要・超軽量数十MB）",
      pricing_inc_6: "<strong>日本語・英語マニュアル</strong> & 画面切り替え完全対応",
      pricing_cta_title: "今すぐ購入してダウンロードを開始する",
      pricing_cta_sub: "即時決済完了後、すぐにダウンロードいただけます",
      pricing_sec_1: "🔒 安全な暗号化決済",
      pricing_sec_2: "⚡ 即時ダウンロードリンク発行",
      pricing_sec_3: "🔄 永続マイナーアップデート付属",

      // Specs
      specs_subtitle: "SYSTEM REQUIREMENTS",
      specs_title: "動作環境・システム要件",
      specs_desc: "Rust + Tauri 2.0 による徹底した軽量設計。多くの一般的なPCで快適に動作します。",
      mac_spec_title: "macOS 動作環境",
      win_spec_title: "Windows 動作環境",
      spec_th_os: "OS",
      spec_th_cpu: "CPU / SoC",
      spec_th_gpu: "GPU",
      spec_th_ram: "メモリ",
      spec_th_storage: "空き容量",
      spec_th_format: "形式",
      mac_spec_os: "macOS 10.15 (Catalina) 以降",
      mac_spec_cpu: "Apple Silicon (M1 / M2 / M3 / M4) または Intel Core i5 以上",
      mac_spec_gpu: "Metal / WebGL 2.0 対応グラフィックス",
      mac_spec_ram: "4GB RAM 以上（推奨 8GB）",
      mac_spec_storage: "約 150MB 以上のストレージ空き容量",
      mac_spec_format: "DMG インストーラー（ドラッグ＆ドロップで完了）",
      win_spec_os: "Windows 10 / Windows 11 (64-bit)",
      win_spec_cpu: "Intel Core i3 / AMD Ryzen 3 以上",
      win_spec_gpu: "DirectX 11 / WebGL 2.0 対応グラフィックス (Intel UHD, GeForce, Radeon)",
      win_spec_ram: "4GB RAM 以上（推奨 8GB）",
      win_spec_storage: "約 150MB 以上のストレージ空き容量",
      win_spec_format: "EXE インストーラー（Setup ウィザードで完了）",

      // FAQ
      faq_subtitle: "FREQUENTLY ASKED QUESTIONS",
      faq_title: "よくある質問 (FAQ)",
      faq_q1: "Q. 購入するとMac版とWindows版の両方が手に入りますか？",
      faq_a1: "はい。1回のご購入（2,980円）で、macOS用（DMG形式）とWindows用（EXEインストーラー形式）の両方をダウンロードしていただけます。ご自宅のMacでもWindows PCでもご利用可能です。",
      faq_q2: "Q. 月額料金や追加の課金はありますか？",
      faq_a2: "いいえ、一切ありません。完全な「買い切り」製品です。7大アクロバット演目、松島基地全地形、全コックピット視点、手動操縦機能などすべての機能を永久にお楽しみいただけます。",
      faq_q3: "Q. インターネット接続がない環境でも動作しますか？",
      faq_a3: "はい。地形データや機体モデル、音響アセットはすべてアプリ内に内包されているため、一度インストールすればオフライン環境でも60FPSで快適に動作します。飛行機の中や外出先でもお楽しみいただけます。",
      faq_q4: "Q. 特別なジョイスティックやフライトコントローラーは必要ですか？",
      faq_a4: "一般的なキーボードとマウス（またはトラックパッド）のみで本格的な操縦が可能です。W/S（昇降）、A/D（旋回）、Q/E（ラダー）、Shift/Ctrl（スロットル）、G（脚）、B（エアブレーキ/車輪停止）など、直感的な航空標準キー配置に対応しています。",
      faq_q5: "Q. 初心者でも着陸やアクロバットを飛ばせますか？",
      faq_a5: "はい。まずは「演目鑑賞モード」で1〜5番機のコックピットからの視線や機動をじっくり眺めることができます。また「手動操縦モード」では画面上部に「フライト指導バナー」が常時表示され、離陸から着陸・完全停止まで的確なアドバイスが表示されます。",
      faq_q6: "Q. 購入後のダウンロードとインストールの流れは？",
      faq_a6: "ご購入完了後、ダウンロードリンクが即座に表示されます。Macの場合はDMGを開いてApplicationsフォルダへドラッグ、Windowsの場合はセットアップEXEを起動してウィザードに従うだけで数分でプレイを開始できます。",

      // Final CTA
      final_badge: "READY FOR TAKEOFF",
      final_title: "松島基地の滑走路07で、あなたの搭乗を待っています。",
      final_desc: "蒼穹に描かれるホワイトスモークの感動を、今すぐあなたのデスクトップで。",
      final_btn_title: "今すぐ購入する（買い切り ¥2,980）",
      final_btn_sub: "Mac & Windows 両対応 ・ 即時ダウンロード",

      // Footer
      footer_disclaimer: "航空自衛隊 松島基地 (RJST) T-4 ブルーインパルス 3Dフライトシミュレーター。<br>本ソフトウェアは学術的・エンターテインメント目的のシミュレーターです。",
      footer_col1_title: "製品案内",
      footer_features: "4大リアル機能",
      footer_routines: "7大公式演目",
      footer_cockpit: "コックピット＆HUD",
      footer_modes: "5機編隊・ソロモード",
      footer_col2_title: "サポート",
      footer_specs: "動作環境",
      footer_faq: "よくある質問",
      footer_buy: "購入ページ",
      footer_price_note: "価格：2,980円（税込・完全買い切り）",

      // Floating CTA
      floating_title: "ブルーインパルス 3D フライトシミュレーター",
      floating_sub: "Mac & Windows 両対応 ・ 完全買い切り",
      floating_tax: "(税込)",
      floating_btn: "今すぐ購入 →"
    },

    en: {
      // Top Bar
      top_badge: "NEW RELEASE",
      top_announcement: "Tauri 2.0 × WebGL Ultra-Lightweight Desktop Edition Out Now! Full Offline Standalone 60 FPS",
      top_link: "Get It Now ($19.99 / ¥2,980) →",

      // Nav
      nav_features: "Features",
      nav_routines: "7 Routines",
      nav_cockpit: "Cockpit & HUD",
      nav_modes: "Flight Modes",
      nav_specs: "Requirements",
      nav_faq: "FAQ",
      header_buy_btn: "Buy Now",

      // Hero
      hero_badge_matsushima: "JASDF Matsushima Air Base (RJST) 07/25 Exact Recreation",
      hero_platform_pill: "Mac & Windows Compatible",
      hero_title: `Into Matsushima's Skies,<br>With the <span class="gradient-text">Blue Impulse</span>.`,
      hero_desc: "Experience 5-ship diamond formation flight and 7 official aerobatic routines with the Kawasaki T-4. Powered by real 1536×1024 DEM elevation terrain and realistic flight dynamics on your desktop.<br>Take command from the cockpit as Flight Leader or carve through the clouds as Solo.",

      val_license_type: "License Type",
      val_buyout: "Perpetual Buyout",
      val_special_price: "Special Price",
      val_tax_inc: "(Tax Included)",
      val_monthly_fee: "Monthly Fee",
      val_no_sub: "¥0 (No Subscription)",
      val_platform: "Platforms",
      val_platform_specs: "Mac (M1–M4/Intel) / Win 10,11",

      cta_buy_now: "Buy & Instant Download",
      cta_buy_sub: "Perpetual ¥2,980 ・ Mac & Windows Packages Included",
      cta_view_features: "Explore Features & Routines ↓",

      guarantee_offline: "✓ 100% Offline Standalone",
      guarantee_cockpits: "✓ Jets #1 to #5 Full Cockpit Access",
      guarantee_sync: "✓ Real-time Formation Sync Scoring",

      cam_pill_1: "👑 #1 Flight Leader",
      cam_pill_2: "🪶 #2 Left Wing",
      cam_pill_3: "🪶 #3 Right Wing",
      cam_pill_4: "🎯 #4 Slot",
      cam_pill_5: "⚡ #5 Lead Solo",
      cam_pill_8: "🗼 45m Tower",
      cam_pill_9: "🎪 Spectator",

      // Features
      feat_subtitle: "FOUR CORE REALISMS",
      feat_title: "4 Technologies Powering Extreme Realism",
      feat_desc: "Merging authentic geographic data with proprietary physics to bring Matsushima's skies directly to your PC.",

      feat_1_title: "GSI 1536×1024 DEM Elevation & Aerial Orthomosaic",
      feat_1_text: "High-precision GeoTIFF elevation data covering Sendai, Matsushima Bay, Ishinomaki, and the Oshika Peninsula seamlessly fused with high-resolution aerial imagery. Main Runway 07/25 (2,700m), Cross Runway 15/33, Apron, 45m Tower, and PAPI glide slope lights authentically modeled.",
      feat_1_p1: "Overlook Matsushima Bay's scenic islands and coastline from altitude",
      feat_1_p2: "Authentic Precision Approach Path Indicator (PAPI) for true landings",

      feat_2_title: "Kawasaki T-4 Precision 3D Jet & Articulated Physics",
      feat_2_text: "Signature white & cobalt blue aerobatic livery with #1 to #6 decals, transparent canopy, and pilot models. Articulated tricycle landing gear, ventral speedbrake, and ailerons/elevators/rudder surfaces linked directly to stick input.",
      feat_2_p1: "Twin IHI F3-IHI-30 turbofan engines with dynamic sound synthesis",
      feat_2_p2: "Throttle-modulated exhaust reheat glow & high-density smoke generator",

      feat_3_title: "5-Ship Formation AI & Pilot Challenge",
      feat_3_text: "Faithfully simulates the authentic airshow sequence: simultaneous 4-ship diamond takeoff followed by #5 solo runway hold, low-angle roll liftoff, and high-speed aerial join-up. Fly as Flight Leader or maintain tight separation as wingman.",
      feat_3_p1: "Real-time Formation Sync Score evaluation (RANK S to C)",
      feat_3_p2: "Custom player liveries (Gold Champion, Crimson Red, Cyber Neon, etc.)",

      feat_4_title: "Rust + Tauri 2.0 Ultra-Light Native & 60 FPS",
      feat_4_text: "Redefining desktop flight sims with a package of just tens of megabytes. Optimized WebGL 2.0 and Rust backend ensure butter-smooth 60 FPS performance across Apple Silicon Macs and standard Windows PCs.",
      feat_4_p1: "Complete standalone offline operation with zero internet required",
      feat_4_p2: "Instant boot in seconds for stress-free immediate flight",

      // Gallery
      gallery_subtitle: "FLIGHT EXPERIENCE GALLERY",
      gallery_title: "Feel the Thrill Across an Infinite Azure Canvas",
      gallery_cap1_title: "Real-time PFD / HUD Cockpit",
      gallery_cap1_desc: "Professional flight displays providing airspeed, baro-altitude, artificial horizon, and FPV at a glance",
      gallery_cap2_title: "7 Official Aerobatic Routines",
      gallery_cap2_desc: "The breathtaking 5-ship fan break maneuver: 'Rainfall'",
      gallery_cap3_title: "Matsushima Bay Sunset Flight",
      gallery_cap3_desc: "Golden hour sunset lighting and glowing smoke trails over coastal peaks",

      // 7 Routines
      routines_subtitle: "7 OFFICIAL AIRSHOW ROUTINES",
      routines_title: "Master the 7 Signature Airshow Routines",
      routines_desc: "Watch in cinematic auto-replay from any cockpit or grab the flight stick to pilot yourself.",
      routine_tab_0: "Rolling Combat Pitch",
      routine_tab_1: "Rainfall",
      routine_tab_2: "Delta Roll",
      routine_tab_3: "Changeover Turn",
      routine_tab_4: "Vertical Climb Roll",
      routine_tab_5: "Tack Cross",
      routine_tab_6: "Corkscrew",
      routine_highlights_label: "🎯 Highlights & Piloting Tips",
      radar_note: "Real-time 3D Trajectory Calculation & Smoke Trails",

      // Cockpit & Cameras
      cockpit_subtitle: "COCKPIT & CAMERA SYSTEM",
      cockpit_title: "Professional HUD Avionics & 9 Dynamic Views",
      cockpit_desc: "Comprehensive avionics for precise control paired with cinematic camera perspectives.",

      hud_1_title: "Real-time PFD (Primary Flight Display)",
      hud_1_desc: "Displays pitch ladder, roll angle, airspeed (Knots & Mach), barometric altitude (FT & M), VVI vertical speed, and high-G warnings (7.5G+).",
      hud_2_title: "FPV (Flight Path Vector)",
      hud_2_desc: "Indicates actual aircraft momentum vector rather than nose direction, enabling surgical runway alignment even in crosswinds.",
      hud_3_title: "Flight Directive Overlay Banner",
      hud_3_desc: "Real-time on-screen instructions guide you through takeoff run, gear retraction, formation follow, glide slope approach, and full-stop braking.",
      hud_4_title: "9 Dynamic Camera Perspectives",
      hud_4_desc: "Instantly switch between Cockpits #1 to #5, Formation Chase, 45m Matsushima ATC Tower, and Spectator Apron view with a single key.",

      cam_box_title: "📷 Camera View Quick Switcher Preview",
      cam_box_hint: "Mapped to Keyboard Keys [1] through [9]",
      cam_name_1: "👑 #1 Flight Leader",
      cam_desc_1: "Command the formation with wingmen trailing behind",
      cam_name_2: "🪶 #2 Left Wingman",
      cam_desc_2: "Follow close on Leader's right wing",
      cam_name_3: "🪶 #3 Right Wingman",
      cam_desc_3: "Follow close on Leader's left wing",
      cam_name_4: "🎯 #4 Slot Position",
      cam_desc_4: "Gaze upward from beneath the diamond formation",
      cam_name_5: "⚡ #5 Lead Solo",
      cam_desc_5: "Low-angle liftoff and high-speed solo acrobatics",
      cam_name_8: "🗼 45m Control Tower",
      cam_desc_8: "Telephoto optical tracking from Matsushima tower",
      cam_name_9: "🎪 Spectator Apron",
      cam_desc_9: "Airshow crowd view looking up at the sky",

      // Modes
      modes_subtitle: "TWO VERSATILE MODES",
      modes_title: "Two Distinct Modes to Match Your Flight Style",
      mode_1_tag: "RECOMMENDED",
      mode_1_title: "5-Ship Formation Mode",
      mode_1_desc: "The pinnacle of Blue Impulse: high-density diamond and echelon formation flights.",
      mode_1_p1: "<strong>Auto Demonstration</strong>: Enjoy all 7 routines automatically with full multi-cockpit views",
      mode_1_p2: "<strong>Manual Pilot Flight</strong>: Take the stick of any jet from #1 to #5 directly",
      mode_1_p3: "<strong>Formation AI Wingmen</strong>: Pilot Jet #1 and AI wingmen follow in tight synchrony",
      mode_1_p4: "<strong>Sync Score Rating</strong>: Real-time scoring of your formation adherence (RANK S to C)",
      mode_1_p5: "<strong>Exclusive Liveries</strong>: Customize your jet with Gold Champion, Crimson, and Cyber Neon paint",

      mode_2_tag: "FREE FLIGHT",
      mode_2_title: "Solo 1-Jet Mode",
      mode_2_desc: "Unleash the supreme agility of the Kawasaki T-4 in dedicated single-aircraft free flight.",
      mode_2_p1: "<strong>Solo Routines</strong>: Vertical Loop, Barrel Roll, High-G Spiral Corkscrew",
      mode_2_p2: "<strong>Matsushima Free Flight</strong>: Runway 07 takeoff, coastal tour, and landing approach",
      mode_2_p3: "<strong>Position Presets</strong>: Spawn directly on Runway, over Matsushima Bay, or on Final Approach",
      mode_2_p4: "<strong>Wheel Brakes Full Stop</strong>: Powerful ground braking system for complete runway stops",
      mode_2_p5: "<strong>Weather & Smoke FX</strong>: Clear skies, golden sunset, Rainbow Smoke, and Tricolor smoke options",

      // Pricing
      pricing_headline: `Take the Blue Impulse into Your Hands.<br><span class="gradient-text">Perpetual Buyout ¥2,980 ($19.99)</span>`,
      pricing_sub: "Zero recurring subscription fees. One single purchase includes both Mac and Windows desktop installers.",
      pricing_tax_label: "(Tax Included ・ One-Time Buyout)",
      pricing_inc_1: "<strong>Mac & Windows Dual Package</strong> (DMG & Setup.exe included)",
      pricing_inc_2: "<strong>All 7 Official Aerobatic Routines</strong> fully unlocked",
      pricing_inc_3: "<strong>GSI 1536×1024 Matsushima DEM Terrain</strong> included",
      pricing_inc_4: "<strong>Jets #1 to #5 Cockpit Perspectives</strong> & Manual Piloting",
      pricing_inc_5: "<strong>100% Offline Standalone</strong> (No internet needed, tens of MBs)",
      pricing_inc_6: "<strong>Bilingual Manual (JA/EN)</strong> & instantaneous UI language toggle",
      pricing_cta_title: "Buy Now & Start Instant Download",
      pricing_cta_sub: "Direct download access delivered immediately after secure checkout",
      pricing_sec_1: "🔒 256-Bit Encrypted Secure Checkout",
      pricing_sec_2: "⚡ Instant Download Link Issued",
      pricing_sec_3: "🔄 Perpetual Minor Updates Included",

      // Specs
      specs_subtitle: "SYSTEM REQUIREMENTS",
      specs_title: "System Requirements & Specifications",
      specs_desc: "Engineered with Rust + Tauri 2.0 for maximum efficiency. Runs smoothly on standard computers.",
      mac_spec_title: "macOS Requirements",
      win_spec_title: "Windows Requirements",
      spec_th_os: "OS",
      spec_th_cpu: "CPU / SoC",
      spec_th_gpu: "GPU",
      spec_th_ram: "Memory",
      spec_th_storage: "Storage",
      spec_th_format: "Format",
      mac_spec_os: "macOS 10.15 (Catalina) or later",
      mac_spec_cpu: "Apple Silicon (M1 / M2 / M3 / M4) or Intel Core i5+",
      mac_spec_gpu: "Metal / WebGL 2.0 Capable Graphics",
      mac_spec_ram: "4 GB RAM minimum (8 GB recommended)",
      mac_spec_storage: "Approx. 150 MB free disk space",
      mac_spec_format: "DMG Disk Image (Drag & Drop install)",
      win_spec_os: "Windows 10 / Windows 11 (64-bit)",
      win_spec_cpu: "Intel Core i3 / AMD Ryzen 3 or higher",
      win_spec_gpu: "DirectX 11 / WebGL 2.0 Capable Graphics (Intel UHD, GeForce, Radeon)",
      win_spec_ram: "4 GB RAM minimum (8 GB recommended)",
      win_spec_storage: "Approx. 150 MB free disk space",
      win_spec_format: "EXE Installer (Setup Wizard install)",

      // FAQ
      faq_subtitle: "FREQUENTLY ASKED QUESTIONS",
      faq_title: "Frequently Asked Questions (FAQ)",
      faq_q1: "Q. Do I get both Mac and Windows versions with one purchase?",
      faq_a1: "Yes. A single purchase (¥2,980) grants you immediate access to download both the macOS DMG installer and the Windows EXE setup package. You can run it on your Mac and Windows PC freely.",
      faq_q2: "Q. Are there any subscription fees or in-app purchases?",
      faq_a2: "No. This is a 100% perpetual buyout product. All 7 aerobatic routines, Matsushima full 3D terrain, all 5 cockpit perspectives, and manual piloting modes are unlocked forever.",
      faq_q3: "Q. Can I run the simulator without an internet connection?",
      faq_a3: "Yes. All terrain meshes, 3D aircraft models, and acoustic sound engines are bundled locally. Once installed, it runs at 60 FPS entirely offline—ideal for traveling or on flights.",
      faq_q4: "Q. Do I need a flight stick or specialized joystick?",
      faq_a4: "No, a standard keyboard and mouse or trackpad is all you need. The flight controls utilize intuitive aviation conventions: W/S (Pitch), A/D (Roll), Q/E (Rudder), Shift/Ctrl (Throttle), G (Gear), and B (Speedbrake/Ground Full-Stop).",
      faq_q5: "Q. Can beginners perform landings and aerobatic maneuvers?",
      faq_a5: "Yes. You can first enjoy the automated demonstration routines from any cockpit. In manual mode, real-time Flight Directive banners guide you step-by-step through takeoff, join-up, approach, and touchdown.",
      faq_q6: "Q. How do I download and install after purchase?",
      faq_a6: "Upon checkout completion, an instant download link appears immediately. Simply open the DMG on Mac and drag to Applications, or run the EXE on Windows to complete setup in under a minute.",

      // Final CTA
      final_badge: "READY FOR TAKEOFF",
      final_title: "Runway 07 at Matsushima Air Base is Ready for You.",
      final_desc: "Feel the awe of white smoke trailing across the azure sky directly on your PC.",
      final_btn_title: "Buy Now (Perpetual ¥2,980 / $19.99)",
      final_btn_sub: "Mac & Windows Dual Package ・ Instant Download",

      // Footer
      footer_disclaimer: "JASDF Matsushima Air Base (RJST) T-4 Blue Impulse 3D Flight Simulator.<br>This software is an entertainment and aeronautical simulation product.",
      footer_col1_title: "Product",
      footer_features: "4 Core Realisms",
      footer_routines: "7 Official Routines",
      footer_cockpit: "Cockpit & HUD",
      footer_modes: "Formation & Solo Modes",
      footer_col2_title: "Support",
      footer_specs: "Requirements",
      footer_faq: "FAQ",
      footer_buy: "Store Page",
      footer_price_note: "Price: ¥2,980 (Tax Included ・ One-Time Buyout)",

      // Floating CTA
      floating_title: "Blue Impulse 3D Flight Simulator",
      floating_sub: "Mac & Windows Compatible ・ One-Time Purchase",
      floating_tax: "(Tax Incl.)",
      floating_btn: "Buy Now →"
    }
  };

  // --------------------------------------------------------------------------
  // 2. 7 OFFICIAL ROUTINES MULTI-LANGUAGE DATA
  // --------------------------------------------------------------------------
  const routinesData = {
    ja: [
      {
        title: "ローリング・コンバット・ピッチ (Rolling Combat Pitch)",
        formation: "隊形: エシュロン ➔ デルタ",
        planes: "使用機数: 1〜5番機",
        difficulty: "難易度: ★★★★☆",
        desc: "4機の傘型エシュロン編隊で高速進入し、1番機から順次ブレイクしながら急上昇バレルロールを実施。5番機が直下を高速通過し、大空に4本の白いスモークループを描き出すブルーインパルスの看板演目。",
        points: [
          "1番機の引き起こし合図に合わせた、0.8秒間隔の連続ブレイク機動",
          "ロール中のG負荷コントロールと滑走路軸への正確な復帰",
          "4番機コックピットから見上げる先行3機のスモークカーテン"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -20 },
          { name: "✈️ 2", x: -40, y: 0 },
          { name: "✈️ 3", x: 40, y: 0 },
          { name: "✈️ 4", x: 0, y: 25 },
          { name: "✈️ 5", x: 0, y: 60 }
        ]
      },
      {
        title: "レインフォール (Rainfall Break)",
        formation: "隊形: 5機デルタ ➔ 扇型ブレイク",
        planes: "使用機数: 1〜5番機",
        difficulty: "難易度: ★★★★★",
        desc: "5機が密集デルタ隊形で垂直急上昇後、頂点から一斉に5方向へ扇型に放射ブレイク。まるで天空から光の雨が降り注ぐような大迫力のアクロバットを展開します。",
        points: [
          "垂直上昇頂点での5機一斉ブレイクタイミング",
          "外側機（2・3番機）の深いバンク角と高度維持",
          "観覧席カメラから見上げる圧巻の放射状スモーク"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -45 },
          { name: "✈️ 2", x: -60, y: -10 },
          { name: "✈️ 3", x: 60, y: -10 },
          { name: "✈️ 4", x: -30, y: 30 },
          { name: "✈️ 5", x: 30, y: 30 }
        ]
      },
      {
        title: "デルタ・ロール (Delta Roll)",
        formation: "隊形: 5機密集デルタ (間隔3m)",
        planes: "使用機数: 1〜5番機",
        difficulty: "難易度: ★★★★★",
        desc: "わずか3mの超至近距離で三角形のデルタ編隊を組んだまま、編隊全体がひとつの巨大な航空機のようにゆっくりと360度フルロールを行う究極の同調飛行演目。",
        points: [
          "編隊僚機との接触（6.5m未満）を避ける極限のミリ単位舵コントロール",
          "背面飛行（インバーテッド）状態での高度維持とスロットル同期",
          "編隊シンクロ率スコア採点の最高峰チャレンジ"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -30 },
          { name: "✈️ 2", x: -35, y: 0 },
          { name: "✈️ 3", x: 35, y: 0 },
          { name: "✈️ 4", x: -70, y: 30 },
          { name: "✈️ 5", x: 70, y: 30 }
        ]
      },
      {
        title: "チェンジ・オーバー・ターン (Changeover Turn)",
        formation: "隊形: トレイル (縦一列) ➔ デルタ (三角形)",
        planes: "使用機数: 1〜5番機",
        difficulty: "難易度: ★★★☆☆",
        desc: "縦一列のトレイル隊形で進入後、旋回（ターン）を行いながら各機が瞬時に左右・後方の指定ポジションへと隊形を変更。滑らかなフォーメーションシフトの美しさを体感できます。",
        points: [
          "旋回中の速度変化と横方向へのスムーズなスライド",
          "リーダー機の旋回半径に正確に同期する編隊運動",
          "管制塔カメラからの俯瞰ビューで隊形変化が明瞭に確認可能"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -40 },
          { name: "✈️ 2", x: 0, y: -15 },
          { name: "✈️ 3", x: 0, y: 10 },
          { name: "✈️ 4", x: 0, y: 35 },
          { name: "✈️ 5", x: 0, y: 60 }
        ]
      },
      {
        title: "バーティカル・クライム・ロール (Vertical Climb Roll)",
        formation: "隊形: 単独 / 2機編隊",
        planes: "使用機数: 5番機 (ソロ)",
        difficulty: "難易度: ★★★★☆",
        desc: "滑走路すれすれの超低空高速進入から、スロットル100%全開で一気に垂直90度へ機首を引き起こし、空高く駆け上がりながら連続ロールを実施するダイナミック機動。",
        points: [
          "急上昇時の強烈なG負荷（5.5G+）と運動エネルギーのマネジメント",
          "青空に向かって真っ直ぐ垂直に昇るホワイトスモークの柱",
          "5番機コックピットから見下ろす松島基地の急速な遠ざかり"
        ],
        planesPos: [
          { name: "✈️ 5", x: 0, y: 0 },
          { name: "💨", x: 0, y: 30 },
          { name: "💨", x: 0, y: 60 },
          { name: "💨", x: 0, y: 90 },
          { name: "💨", x: 0, y: 120 }
        ]
      },
      {
        title: "タック・クロス (Tack Cross)",
        formation: "隊形: 2機交差機動 (Opposing Solo)",
        planes: "使用機数: 4番機 & 5番機",
        difficulty: "難易度: ★★★★★",
        desc: "左右から猛スピードで対向接近する2機が、滑走路中央の観覧ポイント直前で僅か数十メートルの高度差ですれ違うスリリングな極限交差演目。",
        points: [
          "相対速度800km/h以上での一瞬のクロスアプローチ",
          "タイミングのミリ秒単位のズレが勝敗を分ける極限の集中力",
          "すれ違いざまに生じる乱気流と後方視点の迫力"
        ],
        planesPos: [
          { name: "✈️ 4", x: -50, y: -20 },
          { name: "⚡", x: 0, y: 0 },
          { name: "✈️ 5", x: 50, y: 20 },
          { name: "💨", x: -90, y: -20 },
          { name: "💨", x: 90, y: 20 }
        ]
      },
      {
        title: "コークスクリュー (Corkscrew)",
        formation: "隊形: 3機直線飛行 ＋ 1機スパイラルロール",
        planes: "使用機数: 1〜4番機 & 5番機",
        difficulty: "難易度: ★★★★★",
        desc: "直線水平飛行する編隊のスモークラインの周りを、5番機（ソロ）が螺旋状（コルク抜き）に高速連続バレルロールで巻き付くように飛行する名物課目。",
        points: [
          "先行するスモークの円周上を一定半径で周回する精密なピッチ＆ロール連動",
          "ロール中の高度維持と編隊との距離キープ",
          "後方追従カメラで眺める螺旋スモークの芸術的美しさ"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: 0 },
          { name: "🌀", x: -35, y: -15 },
          { name: "✈️ 5", x: 35, y: 15 },
          { name: "💨", x: -60, y: 0 },
          { name: "💨", x: 60, y: 0 }
        ]
      }
    ],

    en: [
      {
        title: "Rolling Combat Pitch",
        formation: "Formation: Echelon ➔ Delta",
        planes: "Aircraft: Jets #1 to #5",
        difficulty: "Difficulty: ★★★★☆",
        desc: "Approaching in tight echelon formation, the jets break into ascending barrel rolls one by one starting from #1 Flight Leader, while #5 solo passes at high speed beneath. A signature Blue Impulse display routine.",
        points: [
          "Sequential 0.8-second break timing initiated upon Flight Leader's pitch call",
          "Precision G-load management and realignment back onto the runway axis",
          "Gazing up from Cockpit #4 at the smoke curtain painted by the preceding 3 jets"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -20 },
          { name: "✈️ 2", x: -40, y: 0 },
          { name: "✈️ 3", x: 40, y: 0 },
          { name: "✈️ 4", x: 0, y: 25 },
          { name: "✈️ 5", x: 0, y: 60 }
        ]
      },
      {
        title: "Rainfall Break",
        formation: "Formation: 5-Ship Delta ➔ Starburst Break",
        planes: "Aircraft: Jets #1 to #5",
        difficulty: "Difficulty: ★★★★★",
        desc: "All 5 jets climb vertically in tight delta formation. At the peak, they break simultaneously in 5 radial directions, creating a magnificent rain of white smoke pouring down from the sky.",
        points: [
          "Simultaneous starburst break timing at the exact vertical apex",
          "Deep bank angle coordination and altitude preservation for outer wingmen (#2 & #3)",
          "Overwhelming radial smoke canopy as seen from the spectator apron camera"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -45 },
          { name: "✈️ 2", x: -60, y: -10 },
          { name: "✈️ 3", x: 60, y: -10 },
          { name: "✈️ 4", x: -30, y: 30 },
          { name: "✈️ 5", x: 30, y: 30 }
        ]
      },
      {
        title: "Delta Roll",
        formation: "Formation: 5-Ship Tight Delta (3m Separation)",
        planes: "Aircraft: Jets #1 to #5",
        difficulty: "Difficulty: ★★★★★",
        desc: "Maintaining an ultra-close 3-meter wingtip separation in a triangle delta formation, all 5 jets perform a slow 360-degree full roll as if unified into a single colossal aircraft.",
        points: [
          "Millimeter-level stick control avoiding the 6.5m proximity collision barrier",
          "Inverted altitude retention and instantaneous throttle synchronization",
          "The ultimate test for achieving RANK S in the real-time Formation Sync score"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -30 },
          { name: "✈️ 2", x: -35, y: 0 },
          { name: "✈️ 3", x: 35, y: 0 },
          { name: "✈️ 4", x: -70, y: 30 },
          { name: "✈️ 5", x: 70, y: 30 }
        ]
      },
      {
        title: "Changeover Turn",
        formation: "Formation: Trail (Column) ➔ Delta (Triangle)",
        planes: "Aircraft: Jets #1 to #5",
        difficulty: "Difficulty: ★★★☆☆",
        desc: "Entering in a straight trail column, each aircraft shifts smoothly into its assigned delta wing position while executing a high-G turn over the air base.",
        points: [
          "Lateral slide control while managing turn speed variations",
          "Dynamic turn radius matching synchronized with Leader's trajectory",
          "Visual clarity of formation geometry when viewed from the 45m ATC Tower"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: -40 },
          { name: "✈️ 2", x: 0, y: -15 },
          { name: "✈️ 3", x: 0, y: 10 },
          { name: "✈️ 4", x: 0, y: 35 },
          { name: "✈️ 5", x: 0, y: 60 }
        ]
      },
      {
        title: "Vertical Climb Roll",
        formation: "Formation: Solo High-Alpha Climb",
        planes: "Aircraft: Jet #5 (Solo)",
        difficulty: "Difficulty: ★★★★☆",
        desc: "Entering at maximum runway-hugging speed, Jet #5 pulls 90 degrees straight up into the vertical with 100% full military power, performing rapid continuous aileron rolls into the heavens.",
        points: [
          "5.5G+ pull-up onset and kinetic energy management",
          "A monolithic vertical column of white smoke piercing the blue sky",
          "Rapid ground recession view looking down at Matsushima Air Base from Cockpit #5"
        ],
        planesPos: [
          { name: "✈️ 5", x: 0, y: 0 },
          { name: "💨", x: 0, y: 30 },
          { name: "💨", x: 0, y: 60 },
          { name: "💨", x: 0, y: 90 },
          { name: "💨", x: 0, y: 120 }
        ]
      },
      {
        title: "Tack Cross",
        formation: "Formation: Opposing Solo High-Speed Pass",
        planes: "Aircraft: Jets #4 & #5",
        difficulty: "Difficulty: ★★★★★",
        desc: "Two solo jets charge toward each other at closing speeds exceeding 800 km/h, crossing directly in front of the spectator point with only a few meters of vertical separation.",
        points: [
          "Split-second high-speed head-on encounter requiring absolute focus",
          "Millisecond-level precision timing over the runway center point",
          "Dynamic wake turbulence vortex effect observed from chase cameras"
        ],
        planesPos: [
          { name: "✈️ 4", x: -50, y: -20 },
          { name: "⚡", x: 0, y: 0 },
          { name: "✈️ 5", x: 50, y: 20 },
          { name: "💨", x: -90, y: -20 },
          { name: "💨", x: 90, y: 20 }
        ]
      },
      {
        title: "Corkscrew",
        formation: "Formation: 3-Ship Line + 1-Ship Spiral Roll",
        planes: "Aircraft: Jets #1 to #4 & #5",
        difficulty: "Difficulty: ★★★★★",
        desc: "As the formation flies straight and level laying a horizontal smoke line, Jet #5 spirals continuously around the smoke in tight corkscrew barrel rolls.",
        points: [
          "Harmonized pitch and roll integration to maintain a constant spiral radius",
          "Altitude maintenance through inverted portions around the lead smoke path",
          "Stunning aerial artistry when viewed from the Formation Chase camera"
        ],
        planesPos: [
          { name: "✈️ 1", x: 0, y: 0 },
          { name: "🌀", x: -35, y: -15 },
          { name: "✈️ 5", x: 35, y: 15 },
          { name: "💨", x: -60, y: 0 },
          { name: "💨", x: 60, y: 0 }
        ]
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 3. CURRENT STATE
  // --------------------------------------------------------------------------
  let currentLang = localStorage.getItem('blueimpulse_lp_lang') || 'ja';
  let currentRoutineIdx = 0;

  // --------------------------------------------------------------------------
  // 4. LANGUAGE SWITCHER LOGIC
  // --------------------------------------------------------------------------
  const langButtons = document.querySelectorAll('.lang-btn');

  function setLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    localStorage.setItem('blueimpulse_lp_lang', lang);
    document.documentElement.lang = lang;

    // Update button states
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.dataset.i18n;
      if (i18nData[lang][key] !== undefined) {
        // If text contains HTML tags (like <strong> or <br>), use innerHTML, else textContent
        if (typeof i18nData[lang][key] === 'string' && (i18nData[lang][key].includes('<') || i18nData[lang][key].includes('&'))) {
          el.innerHTML = i18nData[lang][key];
        } else {
          el.textContent = i18nData[lang][key];
        }
      }
    });

    // Refresh current routine display in current language
    updateRoutineDisplay(currentRoutineIdx);
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // --------------------------------------------------------------------------
  // 5. ROUTINES DISPLAY UPDATER
  // --------------------------------------------------------------------------
  const routineTabs = document.querySelectorAll('.routine-tab');
  const routineTitle = document.getElementById('routineTitle');
  const routineDesc = document.getElementById('routineDesc');
  const routineFormTag = document.getElementById('routineFormTag');
  const routinePlanesTag = document.getElementById('routinePlanesTag');
  const routineDiff = document.getElementById('routineDiff');
  const routinePoints = document.getElementById('routinePoints');
  const routineAnimDisplay = document.getElementById('routineAnimDisplay');

  function updateRoutineDisplay(index) {
    currentRoutineIdx = index;
    const list = routinesData[currentLang] || routinesData.ja;
    const data = list[index];
    if (!data) return;

    // Update active tab class
    routineTabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    // Update Text Content
    if (routineTitle) routineTitle.textContent = data.title;
    if (routineDesc) routineDesc.textContent = data.desc;
    if (routineFormTag) routineFormTag.textContent = data.formation;
    if (routinePlanesTag) routinePlanesTag.textContent = data.planes;
    if (routineDiff) routineDiff.textContent = data.difficulty;

    if (routinePoints) {
      routinePoints.innerHTML = '';
      data.points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        routinePoints.appendChild(li);
      });
    }

    if (routineAnimDisplay) {
      routineAnimDisplay.innerHTML = '';
      data.planesPos.forEach((plane, i) => {
        const div = document.createElement('div');
        div.className = `plane-icon p${i+1}`;
        div.textContent = plane.name;
        div.style.transform = `translate(${plane.x}px, ${plane.y}px)`;
        routineAnimDisplay.appendChild(div);
      });
    }
  }

  routineTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      updateRoutineDisplay(i);
    });
  });

  // --------------------------------------------------------------------------
  // 6. CAMERA PREVIEW BUTTONS
  // --------------------------------------------------------------------------
  const camButtons = document.querySelectorAll('.cam-btn');
  camButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      camButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --------------------------------------------------------------------------
  // 7. FAQ ACCORDION INTERACTION
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others for clean look
        faqItems.forEach(f => f.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 8. SCROLL LISTENER (Sticky Header)
  // --------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling on scroll
    if (siteHeader) {
      if (scrollY > 60) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  });

  // --------------------------------------------------------------------------
  // 9. MOBILE MENU TOGGLE
  // --------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. SMOOTH SCROLL FOR IN-PAGE LINKS
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initial Language Setup
  setLanguage(currentLang);

});
