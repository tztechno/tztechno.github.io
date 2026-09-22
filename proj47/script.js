/**
 * CYBER SURVIVORS - Landing Page Interactive Script
 * Features: Multi-Language (JA/EN), Cyber Matrix Canvas, Scroll Effects, Tabs, Accordion, Mobile Nav
 */

/* ==========================================================================
   MULTI-LANGUAGE LOCALIZATION DICTIONARY (JA / EN)
   ========================================================================== */
const LP_TRANSLATIONS = {
  ja: {
    // Meta & Header
    pageTitle: "CYBER SURVIVORS | 極限の電脳空間を生き残れ - 爽快オートアタック・サバイバーライクACT",
    metaDesc: "押し寄せる無数のサイバーエネミーを薙ぎ払い、自らの機体を強化しながら極限の生存を目指せ！見下ろし型爽快オートアタック・サバイバーライクACT『CYBER SURVIVORS』公式サイト。Windows / macOS / Web対応。",
    ogTitle: "CYBER SURVIVORS | 爽快オートアタック・サイバーサバイバーACT",
    ogDesc: "電脳空間の覇者となれ！迫り来るネオンエネミーの群れをオート兵装で粉砕する極限のサバイバルアクション。",
    langSwitchText: "English",
    navFeatures: "特徴",
    navGameplay: "ゲームシステム",
    navArsenal: "武器 & スキル",
    navEnemies: "エネミー & ボス",
    navSpecs: "動作環境",
    navFaq: "よくある質問",
    navGetNow: "今すぐ入手 ➔",

    // Hero Section
    heroBadge: "NEXT-GEN SURVIVOR-LIKE ACTION",
    heroTitle: '<span class="text-white">極限の電脳空間を</span><br><span class="gradient-text neon-text">生き残れ。</span>',
    heroLead: '押し寄せる無数のサイバーエネミーをオート兵装で薙ぎ払い、自機を強化して無限の包囲網を突破せよ！<br class="desktop-br">直感的な操作と奥深いビルド構築が織りなす、新次元のサイバーサバイバーライクACT。',
    heroTag1: "完全オート射撃",
    heroTag2: "ビルド構築無限大",
    heroTag3: "60秒白熱ボス戦",
    heroTag4: "日英バイリンガル",
    heroCtaSub: "GET IT NOW / 今すぐプレイ",
    heroCtaMain: "製品ページへ進む",
    platformTitle: "対応プラットフォーム:",
    heroStatus: "LIVE SYSTEM ONLINE",

    // Metrics Strip
    statWeapons: "多彩なオート兵装",
    statPassives: "パッシブ強化チップ",
    statBoss: "白熱ボス襲来周期",
    statFps: "超軽量・軽快動作",
    statPriceVal: "¥500",
    statPrice: "買い切り・追加課金なし",

    // Core Features
    featuresBadge: "CORE FEATURES",
    featuresTitle: '息もつかせぬ <span class="gradient-text">圧倒的快感体験</span>',
    featuresDesc: "シンプルながら無限に熱中できる、サバイバーライクACTの真髄がここに凝縮。",
    feat1Title: '攻撃は完全自動発動！<br>極限の位置取りに専念',
    feat1Text: "攻撃操作は不要！接近する敵にオートで武装が火を吹きます。プレイヤーは敵の大群を巧みに誘導する「カイト走法」と、光る経験値クリスタルの回収に全神経を集中できます。",
    feat1Tag: "#直感操作 #ノンストップACT",
    feat2Title: 'ド派手なネオン弾幕＆<br>プロシージャル演出',
    feat2Text: "マジックミサイルの誘導弾幕、高速旋回するオービットブレード、天から降り注ぐ雷撃！画面を埋め尽くすサイバーネオンのエフェクトとシンセSEが最高の爽快感を創出します。",
    feat2Tag: "#ネオン弾幕 #シンセサウンド",
    feat3Title: '武器×パッシブによる<br>無限のビルドシナジー',
    feat3Text: "最大4つの武器と5つのパッシブスキルを自由に選択。攻撃速度特化、超広範囲殲滅、磁力吸収タンクなど、プレイごとに異なる戦略的ビルド構築が楽しめます。",
    feat3Tag: "#ローグライト #スキルシナジー",
    feat4Title: '60秒ごとの恐怖！<br>超巨大サイバーボス戦',
    feat4Text: "生存時間が60秒に達するたび、黄金に輝く規格外のボスエネミーが襲来！強大な耐久力を誇るボスを撃破すれば、超大量の高額経験値クリスタルを独占獲得できます。",
    feat4Tag: "#ボスバトル #ハイリスクハイリターン",
    feat5Title: '自律AIデモプレイ<br>(Auto-Pilot) 搭載',
    feat5Text: "タイトル画面の「DEMO PLAY」を押すと、自律AIが戦闘・クリスタル回収・レベルアップを自動実行！観戦モードとして楽しめ、画面クリックでいつでも手動参戦可能です。",
    feat5Tag: "#AIアシスト #即時参戦",
    feat6Title: '日英バイリンガル ＆<br>マルチ操作系',
    feat6Text: "ワンクリックで日本語/英語の切り替えが可能。キーボード（WASD / 矢印）、マウスドラッグ、タッチパネル（スマホ/タブレット）の全操作系に対応しています。",
    feat6Tag: "#日英完全対応 #全デバイス対応",

    // Gameplay & How to Play
    gameplayBadge: "HOW TO PLAY",
    gameplayTitle: '簡単3ステップで巡る <span class="gradient-text">熱狂のゲームループ</span>',
    gameplayDesc: "ルールは直感的。だが極めれば極めるほどビルドの深淵に引き込まれる！",
    step1Title: "回避 ＆ 敵の誘導",
    step1Text: "敵の群れに囲まれないよう、外周を大きく旋回する「カイト走法」で敵をまとめ上げます。自機のオート攻撃が次々と敵を撃破！",
    step2Title: "経験値クリスタル回収",
    step2Text: "敵を倒すとドロップする青・紫・金の光る結晶（💎）に接近して回収！EXPゲージが溜まり、即座にレベルアップ。",
    step3Title: "スキル選択で機体進化",
    step3Text: "提示される3つの強化選択肢から好みの武器やパッシブを選択。自分だけの最強サイバー要塞をその場でビルド！",
    previewTitle: "リアルタイム・レベルアップシステム",
    previewDesc: "経験値クリスタルが満タンになると、ゲームが一時停止して強化カードが出現。新武器のアンロックや既存兵装のパワーアップを選択し、戦況に応じた即時チューニングが勝利の鍵となります。",
    check1: "最大4枠の武器スロットで多重攻撃",
    check2: "最大5枠のパッシブチップで基礎性能を爆上げ",
    check3: "最大LV5まで進化する破格の強化倍率",
    previewCta: "今すぐこの体験をプレイ ➔",

    // Arsenal & Passives Catalog
    arsenalBadge: "ARSENAL & PASSIVES",
    arsenalTitle: '全兵装 ＆ <span class="gradient-text">強化スキルカタログ</span>',
    arsenalDesc: "組み合わせ次第で戦局が一変！あなたのプレイスタイルに合わせた最適解を見つけ出せ。",
    tabWeapons: "メイン兵装 (Weapons)",
    tabPassives: "パッシブチップ (Passives)",
    specMaxCount: "最大発射数",
    specMaxBlades: "最大ブレード数",
    specMaxStrikes: "最大落雷数",
    specMaxRange: "最大範囲",
    specMaxBounce: "最大バウンド数",
    specTrait: "特性",
    specMult: "強化倍率",
    specCooldown: "短縮倍率",
    specSpeed: "速度上昇",
    specMagnet: "吸引範囲",
    specMaxEffect: "最大効果",

    w1Name: "マジックミサイル",
    w1Desc: "最も近い敵を自動ロックオンし、高威力の誘導エネルギー弾を連続発射。",
    w1SpecVal: "4発同時発射",
    w1TraitVal: "完全追尾 / 連射速度大幅UP",

    w2Name: "オービットブレード",
    w2Desc: "自機の周囲を高速旋回するエネルギーの刃。接近する敵を刻みノックバックさせる鉄壁の防護壁。",
    w2SpecVal: "5基 高速旋回",
    w2TraitVal: "接近防止 / 常時ノックバック",

    w3Name: "サンダーストライク",
    w3Desc: "上空から高電圧の雷撃を敵へ直撃させる。着弾地点に広範囲の爆発ダメージを与え群れを一網打尽。",
    w3SpecVal: "4発同時落雷",
    w3TraitVal: "広範囲爆破 / 高火力殲滅",

    w4Name: "フレイムオーラ",
    w4Desc: "自機周囲に常時灼熱のプラズマフィールドを展開。侵入した敵を毎秒凄まじい勢いで焼き尽くす。",
    w4SpecVal: "特大プラズマドーム",
    w4TraitVal: "常時継続ダメージ / 密集敵特効",

    w5Name: "バウンド手裏剣",
    w5Desc: "敵から敵へと連続して跳ね返る高速サイバー手裏剣。画面内を縦横無尽に跳弾し敵群を切り裂く。",
    w5SpecVal: "最大9回 跳弾連鎖",
    w5TraitVal: "連続跳弾 / 貫通マルチヒット",

    p1Name: "攻撃力ブースト",
    p1Desc: "全武器の与ダメージを恒久的に底上げ。敵の耐久力が上がる後半戦の突破に不可欠。",
    p1SpecVal: "+15% / LV (最大 +75%)",

    p2Name: "攻撃速度アップ",
    p2Desc: "全武器のクールダウン時間を大幅短縮。弾幕密度と連射テンポが劇的に向上。",
    p2SpecVal: "-12% / LV (最大 -60%)",

    p3Name: "加速ブーツ",
    p3Desc: "機体の移動速度を向上。敵の包囲網脱出やボスエネミーの追撃回避に必須の機動チップ。",
    p3SpecVal: "+12% / LV (最大 +60%)",

    p4Name: "磁力コア",
    p4Desc: "経験値クリスタル（💎）の回収範囲を爆発的に拡大。遠くのジェムも自動で吸い寄せる。",
    p4SpecVal: "+35% / LV (最大 +175%)",

    p5Name: "生体ナノマシン",
    p5Desc: "最大HPを拡張し、さらに毎秒HP自動リジェネレーションを付与。安定生存の生命線。",
    p5SpecVal: "HP+125 & 自動回復 +4.0/s",

    // Enemies & Boss
    enemiesBadge: "THREAT DATABASE",
    enemiesTitle: '襲い来る <span class="gradient-text">サイバーエネミー & ボス</span>',
    enemiesDesc: "敵の特性を見極め、適切な兵装とポジショニングで対処せよ。",
    e1Name: "スライム (Slime)",
    e1Threat: "THREAT: LOW",
    e1Desc: "大量の群れで自機を取り囲もうとする基本エネミー。範囲攻撃武器で一気に薙ぎ払い、経験値を稼ぐ好機。",
    e2Name: "サイバーバット (Bat)",
    e2Threat: "THREAT: MEDIUM",
    e2Desc: "ジグザグ軌道で高速接近してくる飛行型エネミー。誘導ミサイルやオービットブレードの迎撃で接近を許すな。",
    e3Name: "アーマードゴーレム",
    e3Threat: "THREAT: HIGH",
    e3Desc: "重装甲を誇る大型ドローン。ノックバックしづらいため、高火力の集中砲火で距離を取りつつ破壊せよ。",
    e4Name: "サイバーボス (Cyber Boss)",
    e4Threat: "THREAT: BOSS (60秒毎)",
    e4Desc: "60秒ごとに出現する黄金の巨大旗艦。圧倒的なHPを持つが、撃破すると超高額の経験値クリスタルを大量ドロップ！",

    // System Specs
    specsBadge: "ENVIRONMENT & SPECS",
    specsTitle: '動作環境 ＆ <span class="gradient-text">スペック仕様</span>',
    specsDesc: "モダンWeb標準技術＆軽量Rustネイティブにより、あらゆる環境で快適60FPS駆動。",
    specDesktopTitle: "🪟 Windows / 🍎 macOS デスクトップ版",
    specOs: "対応OS:",
    specDesktopOsVal: "Windows 10/11 (64bit), macOS 11.0以降 (Apple Silicon & Intel)",
    specEngine: "エンジン:",
    specMemory: "メモリ:",
    specMemoryVal: "2GB RAM以上 (推奨 4GB以上)",
    specStorage: "ストレージ空き容量:",
    specStorageVal: "わずか 20MB 以下",
    specFormat: "インストール形式:",
    specWebTitle: "🌐 Webブラウザ版 (HTML5)",
    specBrowser: "対応ブラウザ:",
    specDevices: "対応デバイス:",
    specDevicesVal: "PC, Mac, iPad / タブレット, スマートフォン",
    specAudio: "音源システム:",
    specAudioVal: "Web Audio API (外部ダウンロード不要のプロシージャル音源)",
    specInstall: "インストール:",
    specInstallVal: "インストール不要（ブラウザから即時起動可能）",

    // FAQ
    faqBadge: "FAQ",
    faqTitle: 'よくあるご質問 <span class="gradient-text">(FAQ)</span>',
    faqDesc: "ご購入やプレイに関するご不明点にお答えします。",
    faq1Q: "Q. ゲーム初心者でも楽しめますか？操作は難しくないですか？",
    faq1A: "はい、どなたでもすぐにお楽しみいただけます！攻撃はすべて完全オートで発動するため、キーボードの矢印キーやマウスドラッグ、画面のスライド操作で自機を動かすだけで爽快なバトルが展開します。",
    faq2Q: "Q. DEMOモードとはどのような機能ですか？",
    faq2A: "タイトル画面の「DEMO PLAY」を押すと、自律AIが自機を操り、敵の回避・クリスタル回収・レベルアップを自動で行うオートパイロットモードです。観戦してゲームの流れを把握できるほか、画面をクリックするだけで即座にプレイヤーの手動操作に切り替えて参戦できます。",
    faq3Q: "Q. 英語でのプレイは可能ですか？",
    faq3A: "はい！画面内の「🌐」ボタンからいつでも日本語と英語を瞬時に切り替え可能です。ゲーム内マニュアルも完全バイリンガル対応しています。",
    faq4Q: "Q. 購入後はどのようにダウンロード・プレイできますか？",
    faq4A: '製品ストアページ（<a href="https://cyber-matrix.netlify.app/products/survivors" target="_blank" rel="noopener noreferrer" class="text-cyan">https://cyber-matrix.netlify.app/products/survivors</a>）からご購入手続き完了後、すぐにダウンロードリンクおよびオンラインプレイURLが発行されます。Windows用インストーラー、Mac用DMG、Web版のすべてをご利用いただけます。',
    faq5Q: "Q. 追加課金やガチャ要素はありますか？",
    faq5A: "一切ありません。完全買い切りのゲームとなっており、すべての武器・パッシブスキル・ゲームモードを追加課金なしで心ゆくまでプレイしていただけます。",

    // Final CTA
    finalCtaBadge: "READY TO ENGAGE?",
    finalCtaTitle: '電脳空間の覇者となれ。<br><span class="gradient-text neon-text">今すぐ極限のサバイバルを始めよう！</span>',
    finalCtaDesc: "Windows・macOS・ブラウザ対応。オートアタックの爽快感と無限のビルド戦略があなたを待っている。",
    finalCtaSub: "OFFICIAL STORE",
    finalCtaMain: "『CYBER SURVIVORS』を入手する",
    note1: "✨ 買い切り安心価格",
    note2: "⚡ 即時ダウンロード",
    note3: "🌐 日英完全対応",

    // Footer
    footerCopy: "© 2026 Cyber Matrix. All rights reserved.<br>Next-Gen Neon Survivor-like Action Game.",
    footerColContent: "コンテンツ",
    footerColStore: "ストア・サポート",
    footerStorePage: "製品ストアページ",
    footerAesthetic: "Designed with Cyber Aesthetic for Cyber Survivors.",
    backToTop: "PAGE TOP ▲"
  },

  en: {
    // Meta & Header
    pageTitle: "CYBER SURVIVORS | Survive the Digital Void - Neon Auto-Attack Survivor ACT",
    metaDesc: "Mow down relentless swarms of cybernetic enemies with automated weapons, evolve your combat mech, and conquer the digital void! Official website for CYBER SURVIVORS. Available on Windows, macOS, and Web.",
    ogTitle: "CYBER SURVIVORS | Neon Auto-Attack Action Roguelite",
    ogDesc: "Rule the cyber matrix! Annihilate incoming enemy waves with automated arsenal in this high-octane survival action game.",
    langSwitchText: "日本語",
    navFeatures: "Features",
    navGameplay: "Gameplay",
    navArsenal: "Arsenal & Skills",
    navEnemies: "Threats & Bosses",
    navSpecs: "System Specs",
    navFaq: "FAQ",
    navGetNow: "Get It Now ➔",

    // Hero Section
    heroBadge: "NEXT-GEN SURVIVOR-LIKE ACTION",
    heroTitle: '<span class="text-white">SURVIVE THE</span><br><span class="gradient-text neon-text">DIGITAL VOID.</span>',
    heroLead: 'Mow down relentless waves of cybernetic enemies with automated weapons and upgrade your combat drone to breach insurmountable encirclements!<br class="desktop-br">A hyper-addictive top-down survivor action roguelite with fluid controls and deep build crafting.',
    heroTag1: "Auto-Attack Combat",
    heroTag2: "Infinite Build Synergy",
    heroTag3: "60s Climax Boss Fights",
    heroTag4: "Full Bilingual Support",
    heroCtaSub: "GET IT NOW / PLAY INSTANTLY",
    heroCtaMain: "Proceed to Store",
    platformTitle: "Supported Platforms:",
    heroStatus: "LIVE SYSTEM ONLINE",

    // Metrics Strip
    statWeapons: "Automated Weapons",
    statPassives: "Passive Enhancements",
    statBoss: "Boss Wave Interval",
    statFps: "Ultra-Smooth 60FPS",
    statPriceVal: "$3.99 / ¥500",
    statPrice: "One-Time Purchase / No IAP",

    // Core Features
    featuresBadge: "CORE FEATURES",
    featuresTitle: 'Unrelenting Action, <span class="gradient-text">Pure Adrenaline</span>',
    featuresDesc: "Easy to pick up, impossible to put down. The ultimate survivor-like experience distilled into pure excitement.",
    feat1Title: 'Fully Automated Attacks!<br>Focus on Tactical Kiting',
    feat1Text: "No complex attack inputs needed! Your equipped weapons automatically target and eliminate approaching foes. Focus all your reflexes on circular kiting maneuvers and harvesting shining EXP gems.",
    feat1Tag: "#IntuitiveControls #NonstopAction",
    feat2Title: 'Vibrant Neon Barrage &<br>Procedural Audio Synthesizer',
    feat2Text: "Magic missiles, whirling energy blades, and devastating lightning strikes! Experience an electrifying neon light show accompanied by dynamic synthesized audio that maximizes satisfaction.",
    feat2Tag: "#NeonBulletHell #SynthSoundtrack",
    feat3Title: 'Limitless Synergies with<br>Weapons & Passive Chips',
    feat3Text: "Equip up to 4 distinct weapons and 5 passive chips. Tailor your build for insane fire rates, screen-clearing AOE, or an invulnerable magnetic tank across every session.",
    feat3Tag: "#RogueliteSynergy #EndlessBuilds",
    feat4Title: 'The 60-Second Dread!<br>Colossal Cyber Boss Invasions',
    feat4Text: "Every 60 seconds of survival triggers the arrival of a massive golden boss warship! Demolish this formidable threat to reap an enormous hoard of high-value EXP gems.",
    feat4Tag: "#BossEncounters #HighRiskHighReward",
    feat5Title: 'Autonomous AI Auto-Pilot<br>(Demo Mode) Built-in',
    feat5Text: "Press 'DEMO PLAY' on the title screen to watch an intelligent AI navigate combat, collect gems, and make build choices. Jump in manually at any moment with a single click!",
    feat5Tag: "#AIAssisted #InstantJumpIn",
    feat6Title: 'Bilingual Japanese / English<br>& Multi-Control Support',
    feat6Text: "Switch between Japanese and English seamlessly with one click. Fully supports Keyboard (WASD/Arrows), Mouse drag, and Mobile touchscreen gestures.",
    feat6Tag: "#Bilingual #CrossPlatform",

    // Gameplay & How to Play
    gameplayBadge: "HOW TO PLAY",
    gameplayTitle: 'Master the 3-Step <span class="gradient-text">Addictive Core Loop</span>',
    gameplayDesc: "Simple to understand, yet profoundly deep as you discover intricate skill combinations.",
    step1Title: "Kite & Maneuver",
    step1Text: "Never get cornered! Circle around the outer perimeter of the swarm to herd enemies together while your automated weapons blast them away.",
    step2Title: "Harvest EXP Crystals",
    step2Text: "Defeated foes drop glowing blue, purple, and gold crystals (💎). Move close to vacuum them up and rapidly fill your level gauge.",
    step3Title: "Upgrade & Evolve",
    step3Text: "Choose from 3 randomized upgrade cards upon level up. Construct and fine-tune your personalized cyber fortress on the fly!",
    previewTitle: "Real-Time Level-Up & Upgrade System",
    previewDesc: "Whenever your EXP gauge fills up, the game pauses to reveal three holographic upgrade choices. Unlocking new weapons or leveling up existing traits in response to battlefield conditions is key to victory.",
    check1: "Up to 4 weapon slots for multi-layered firepower",
    check2: "Up to 5 passive slots to drastically buff core specs",
    check3: "Upgrade items up to LV 5 with massive multipliers",
    previewCta: "Experience the Action Now ➔",

    // Arsenal & Passives Catalog
    arsenalBadge: "ARSENAL & PASSIVES",
    arsenalTitle: 'Comprehensive Arsenal & <span class="gradient-text">Passive Catalog</span>',
    arsenalDesc: "Every piece of equipment shifts the tide of battle. Discover your ultimate combat combination.",
    tabWeapons: "Weapons (4 Slots)",
    tabPassives: "Passives (5 Slots)",
    specMaxCount: "Max Projectiles",
    specMaxBlades: "Max Blades",
    specMaxStrikes: "Max Strikes",
    specMaxRange: "Max Range",
    specMaxBounce: "Max Bounces",
    specTrait: "Trait",
    specMult: "Multiplier",
    specCooldown: "Cooldown Reduction",
    specSpeed: "Speed Increase",
    specMagnet: "Pickup Radius",
    specMaxEffect: "Max Effect",

    w1Name: "Magic Missile",
    w1Desc: "Automatically locks onto the nearest hostile with rapid-fire homing plasma projectiles.",
    w1SpecVal: "4 Simultaneous Missiles",
    w1TraitVal: "True Homing / Rapid Fire",

    w2Name: "Orbital Blades",
    w2Desc: "Whirling energy blades that spin around your drone, shredding and knocking back close enemies.",
    w2SpecVal: "5 High-Speed Blades",
    w2TraitVal: "Anti-Encirclement / Knockback",

    w3Name: "Thunder Smite",
    w3Desc: "Calls down devastating high-voltage lightning from above, annihilating crowded swarms with huge AOE.",
    w3SpecVal: "4 Simultaneous Strikes",
    w3TraitVal: "Massive AOE Blast / High DMG",

    w4Name: "Flame Aura",
    w4Desc: "Project a permanent searing plasma field around your drone, continuously melting all nearby threats.",
    w4SpecVal: "Colossal Plasma Dome",
    w4TraitVal: "Constant DPS / Swarm Shredder",

    w5Name: "Bouncing Shuriken",
    w5Desc: "Hurls high-speed energy shurikens that ricochet repeatedly across swarms of enemies.",
    w5SpecVal: "Up to 9 Ricochets",
    w5TraitVal: "Multi-Target Ricochet / Pierce",

    p1Name: "Might Boost",
    p1Desc: "Permanently augments the damage output of all weapons. Critical for dispatching late-game elite swarms.",
    p1SpecVal: "+15% / LV (Max +75%)",

    p2Name: "Attack Haste",
    p2Desc: "Significantly reduces attack cooldowns across all arsenal, vastly increasing total projectile volume.",
    p2SpecVal: "-12% / LV (Max -60%)",

    p3Name: "Speed Boots",
    p3Desc: "Boosts drone movement speed. Vital for breaking through tight encirclements and evading boss charges.",
    p3SpecVal: "+12% / LV (Max +60%)",

    p4Name: "Magnetic Core",
    p4Desc: "Dramatically expands the vacuum range for EXP crystals (💎), enabling safe harvesting from afar.",
    p4SpecVal: "+35% / LV (Max +175%)",

    p5Name: "Bio Nanites",
    p5Desc: "Increases maximum hit points and grants continuous automatic health regeneration per second.",
    p5SpecVal: "+125 HP & +4.0 HP/s Regen",

    // Enemies & Boss
    enemiesBadge: "THREAT DATABASE",
    enemiesTitle: 'Incoming <span class="gradient-text">Cyber Threats & Bosses</span>',
    enemiesDesc: "Analyze enemy behaviors to select the most effective weaponry and positioning.",
    e1Name: "Slime",
    e1Threat: "THREAT: LOW",
    e1Desc: "Basic swarm units that attempt to overwhelm with numbers. Ideal targets for AOE weapons to harvest fast EXP.",
    e2Name: "Cyber Bat",
    e2Threat: "THREAT: MEDIUM",
    e2Desc: "High-speed flying drones with erratic zigzag flight paths. Intercept them with homing missiles or rotating blades.",
    e3Name: "Armored Golem",
    e3Threat: "THREAT: HIGH",
    e3Desc: "Heavy reinforced combat chassis with massive health and knockback resistance. Maintain safe distance with focused fire.",
    e4Name: "Cyber Boss",
    e4Threat: "THREAT: BOSS (Every 60s)",
    e4Desc: "A colossal golden flagship spawning every 60 seconds. Possesses enormous health, but drops a mountain of high-tier EXP crystals upon destruction!",

    // System Specs
    specsBadge: "ENVIRONMENT & SPECS",
    specsTitle: 'System Requirements & <span class="gradient-text">Specifications</span>',
    specsDesc: "Engineered with modern web standards and ultra-lightweight Rust native backend for smooth 60FPS.",
    specDesktopTitle: "🪟 Windows / 🍎 macOS Desktop Edition",
    specOs: "Supported OS:",
    specDesktopOsVal: "Windows 10/11 (64-bit), macOS 11.0+ (Apple Silicon & Intel)",
    specEngine: "Engine:",
    specMemory: "Memory:",
    specMemoryVal: "2GB RAM minimum (4GB recommended)",
    specStorage: "Storage Space:",
    specStorageVal: "Under 20MB total footprint",
    specFormat: "Install Format:",
    specWebTitle: "🌐 Web Browser Edition (HTML5)",
    specBrowser: "Supported Browsers:",
    specDevices: "Supported Devices:",
    specDevicesVal: "PC, Mac, iPad / Tablets, Smartphones",
    specAudio: "Audio System:",
    specAudioVal: "Web Audio API (Procedural synth audio, 0MB external assets)",
    specInstall: "Installation:",
    specInstallVal: "No install required (Runs instantly in modern browsers)",

    // FAQ
    faqBadge: "FAQ",
    faqTitle: 'Frequently Asked <span class="gradient-text">Questions</span>',
    faqDesc: "Find quick answers regarding purchases, gameplay, and compatibility.",
    faq1Q: "Q. Is the game suitable for beginners? Are controls difficult?",
    faq1A: "Yes! Anyone can jump straight into the fun. All attacks trigger automatically, so you only need to steer your drone with arrow keys, mouse drag, or touchscreen swipes.",
    faq2Q: "Q. What is the DEMO Mode (Auto-Pilot)?",
    faq2A: "Clicking 'DEMO PLAY' activates an autonomous AI that controls movement, harvests crystals, and chooses level upgrades automatically. You can watch to learn tactics and take manual control anytime with a single click.",
    faq3Q: "Q. Is English language fully supported?",
    faq3A: "Yes! Switch between English and Japanese instantly at any time via the '🌐' icon. The in-game manual and HUD are completely bilingual.",
    faq4Q: "Q. How do I download and play after purchasing?",
    faq4A: 'After completing your order on our product store (<a href="https://cyber-matrix.netlify.app/products/survivors" target="_blank" rel="noopener noreferrer" class="text-cyan">https://cyber-matrix.netlify.app/products/survivors</a>), you will immediately receive direct download links for Windows (.exe), Mac (.dmg), and instant online web access.',
    faq5Q: "Q. Are there any in-app purchases, ads, or gacha mechanics?",
    faq5A: "None at all! CYBER SURVIVORS is a complete, one-time purchase title. All weapons, passives, and future content updates are included forever with zero extra charges.",

    // Final CTA
    finalCtaBadge: "READY TO ENGAGE?",
    finalCtaTitle: 'Conquer the Cyber Void.<br><span class="gradient-text neon-text">Start Your Survival Mission Today!</span>',
    finalCtaDesc: "Available on Windows, macOS, and Web. Endless synergies and exhilarating neon action await you.",
    finalCtaSub: "OFFICIAL STORE",
    finalCtaMain: "Get 'CYBER SURVIVORS' Now",
    note1: "✨ One-Time Fair Price",
    note2: "⚡ Instant Download Access",
    note3: "🌐 100% Bilingual Support",

    // Footer
    footerCopy: "© 2026 Cyber Matrix. All rights reserved.<br>Next-Gen Neon Survivor-like Action Game.",
    footerColContent: "Navigation",
    footerColStore: "Store & Support",
    footerStorePage: "Product Store Page",
    footerAesthetic: "Designed with Cyber Aesthetic for Cyber Survivors.",
    backToTop: "PAGE TOP ▲"
  }
};

/* ==========================================================================
   I18N MANAGER CLASS
   ========================================================================== */
class LpI18n {
  constructor() {
    const saved = localStorage.getItem('cyber_lp_lang');
    if (saved && (saved === 'ja' || saved === 'en')) {
      this.currentLang = saved;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      this.currentLang = browserLang.startsWith('ja') ? 'ja' : 'en';
    }
  }

  init() {
    this.bindButtons();
    this.updateUI();
  }

  setLang(lang) {
    if (lang !== 'ja' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('cyber_lp_lang', lang);
    this.updateUI();
  }

  toggle() {
    const nextLang = this.currentLang === 'ja' ? 'en' : 'ja';
    this.setLang(nextLang);
  }

  bindButtons() {
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggle();
      });
    });
  }

  updateUI() {
    const dict = LP_TRANSLATIONS[this.currentLang] || LP_TRANSLATIONS.ja;
    document.documentElement.lang = this.currentLang;

    // 1. Text elements [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // 2. HTML elements [data-i18n-html]
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // 3. Page Title & Meta tags
    if (dict.pageTitle) document.title = dict.pageTitle;
    const metaDesc = document.getElementById('meta-desc');
    if (metaDesc && dict.metaDesc) metaDesc.setAttribute('content', dict.metaDesc);

    const ogTitle = document.getElementById('og-title');
    if (ogTitle && dict.ogTitle) ogTitle.setAttribute('content', dict.ogTitle);

    const ogDesc = document.getElementById('og-desc');
    if (ogDesc && dict.ogDesc) ogDesc.setAttribute('content', dict.ogDesc);

    const twTitle = document.getElementById('tw-title');
    if (twTitle && dict.ogTitle) twTitle.setAttribute('content', dict.ogTitle);

    const twDesc = document.getElementById('tw-desc');
    if (twDesc && dict.ogDesc) twDesc.setAttribute('content', dict.ogDesc);
  }
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const i18n = new LpI18n();
  i18n.init();

  initCyberCanvas();
  initNavbarScroll();
  initMobileMenu();
  initTabs();
  initFaqAccordion();
  initScrollAnimations();
});

/* ==========================================================================
   1. CYBER MATRIX CANVAS BACKGROUND
   ========================================================================== */
function initCyberCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class CyberParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.speedY = (Math.random() - 0.5) * 0.8;
      this.color = Math.random() > 0.4 ? '#00f0ff' : (Math.random() > 0.5 ? '#ff007f' : '#ffe600');
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse collision / push
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 3;
          this.y -= Math.sin(angle) * force * 3;
        }
      }

      // Edge wrapping
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Create particles
  const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 75);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new CyberParticle());
  }

  // Connect close particles with cyber data streams
  function drawConnections() {
    const maxDist = 110;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          ctx.save();
          const opacity = (1 - dist / maxDist) * 0.18;
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Subtle grid background scan
    drawCyberGrid();

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();
    requestAnimationFrame(animate);
  }

  function drawCyberGrid() {
    const gridSize = 60;
    ctx.save();
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.025)';
    ctx.lineWidth = 1;

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  animate();
}

/* ==========================================================================
   2. NAVBAR SCROLL EFFECT & ACTIVE LINK
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Detection
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. MOBILE HAMBURGER MENU
   ========================================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (!hamburgerBtn || !navMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburgerBtn.classList.remove('active');
    });
  });
}

/* ==========================================================================
   4. CATALOG TABS SWITCHER
   ========================================================================== */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(`${targetTab}-pane`);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(
    '.feature-card, .step-card, .catalog-card, .enemy-card, .spec-box, .faq-item, .gameplay-preview-card'
  );

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach(el => observer.observe(el));
}
