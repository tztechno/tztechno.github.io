/* ===================================================================
   Cyber Mole Turf - Landing Page Interactive Scripts
   Features:
   - Bilingual Switcher (JA / EN)
   - Interactive Mini Turf Simulator (Playable directly on LP)
   - Smooth Scroll & Floating CTA Trigger
   - FAQ Accordion
   - Responsive Mobile Nav
   =================================================================== */

// Translation Dictionaries
const i18nData = {
  ja: {
    navAbout: "概要",
    navRules: "4大ルール",
    navFeatures: "特徴・システム",
    navStages: "ステージ",
    navDemo: "ミニ体験",
    navFaq: "FAQ",
    playNowBtn: "今すぐプレイ 🚀",
    
    heroBadge: "ONLINE PLAY AVAILABLE // VER 1.0",
    heroTitlePrefix: "9×9の電脳領地を",
    heroTitleHighlight: "完全制覇せよ。",
    heroDesc: "各行・各列・各領地にモグラ1匹。斜め隣接NG！ 閃きと論理で30セクターの謎を解き明かす、新感覚サイバー配置型ロジックパズル。",
    heroBtnPlay: "🚀 無料で今すぐプレイ",
    heroBtnRules: "📖 ルールを見る",
    heroBtnDemo: "🎮 盤面を体験",
    
    stat1Label: "セクター（ステージ）",
    stat2Label: "シールド制（3ミスOK）",
    stat3Label: "完全無料・即起動",
    stat4Label: "PC / スマホ両対応",

    rulesBadge: "CORE LOGIC SYSTEM",
    rulesTitle: "完全制覇への4大コアルール",
    rulesSubtitle: "9×9のグリッドに合計9匹のサイバーモグラを配置。すべての制約をクリアせよ！",
    
    rule1Title: "① 各行にちょうど1匹",
    rule1Desc: "すべての横の行（Row 1〜9）には、モグラが必ず1匹だけ配置されます。2匹以上も0匹も不可です。",
    
    rule2Title: "② 各列にちょうど1匹",
    rule2Desc: "すべての縦の列（Column 1〜9）には、モグラが必ず1匹だけ配置されます。",
    
    rule3Title: "③ 領地（Turf）ごとに1匹",
    rule3Desc: "盤面は9色の領地に分かれています。同じ色のエリア内には必ずモグラが1匹だけ存在します。",
    
    rule4Title: "④ 斜め隣接NG！（周囲8マス封鎖）",
    rule4Desc: "モグラ同士は上下左右だけでなく、斜めで触れ合うことも厳格に禁止。配置すると周囲8マスすべてが進入不可となります。",

    simBadge: "PLAYABLE PREVIEW",
    simTitle: "LP上でミニ盤面を体験！",
    simSubtitle: "5×5のミニグリッドで基本ルールと自動❌アシストの爽快感を今すぐテスト。",
    simList1: "モグラモードでマスをクリックして配置",
    simList2: "モグラを置くと周囲8マス・行・列が自動で❌封鎖（Auto-X）",
    simList3: "ルール違反の配置はシールドが減少！",
    simBtnMole: "🐾 モグラ配置",
    simBtnBlock: "❌ 封鎖マーク",
    simBtnReset: "🔄 リセット",
    simShieldsLabel: "シールド: ",
    simInitialMsg: "マスをクリックしてモグラを配置してみてください！",
    simClearMsg: "🎉 ミニ盤面クリア！本編（9×9 全30ステージ）に挑もう！",

    featBadge: "POWERFUL FEATURES",
    featTitle: "快適なプレイを支える先進システム",
    featSubtitle: "直感的な操作性と充実のアシスト機能で、初心者からパズルマスターまで没頭できます。",
    
    feat1Title: "⚡ Auto-X 封鎖アシスト",
    feat1Desc: "モグラを1匹置くと、その周囲8マス・同一行・同一列・同一領地を自動で❌マーク封鎖。無駄な手間を省いて思考に集中できます。",
    
    feat2Title: "💡 サイバーAIヒント",
    feat2Desc: "手詰まりになったときはAIが盤面を瞬時にスキャン。「次に確定できる安全マス」を論理的根拠とともに明示します。",
    
    feat3Title: "🛡️ シールド制 & リカバリ",
    feat3Desc: "3回までのミスを許容するシールドシステム。手数を間違えても即座にUndo/Redoで巻き戻して再挑戦可能です。",
    
    feat4Title: "📱 スマホ・PC完全最適化",
    feat4Desc: "PCのマウス・キーボード操作はもちろん、スマートフォンのスワイプによる一括❌引き操作にも完全対応。",
    
    feat5Title: "⏱️ タイムアタック & ★評価",
    feat5Desc: "全ステージでクリアタイムを計測。ミス数やタイムに応じた3つ星評価（★★★）と自己ベスト保存に対応。",
    
    feat6Title: "🌐 日英完全バイリンガル",
    feat6Desc: "ゲーム内もマニュアルもワンタップで日本語 / 英語の切り替えが可能。海外プレイヤーもストレスなく遊べます。",

    stagesBadge: "30 SECTORS",
    stagesTitle: "全30ステージと3段階難易度",
    stagesSubtitle: "初心者向けの基本セクターから、複雑に入り組んだ超高難度迷路まで完全収録。",
    
    stageEasyBadge: "初心者向け",
    stageEasyTitle: "EASY // 初級セクター",
    stageEasySectors: "Sector 01 〜 10",
    stageEasyDesc: "規則的なブロック形状の領地。コアルールの理解と基本パターンの習得に最適です。",
    stageEasyTarget: "目標タイム: 90秒",

    stageMedBadge: "中級者向け",
    stageMedTitle: "MEDIUM // 中級セクター",
    stageMedSectors: "Sector 11 〜 20",
    stageMedDesc: "L字型や交差する変形領地が出現。消去法と領地間の相互影響を読み解く論理的思考が必要。",
    stageMedTarget: "目標タイム: 140秒",

    stageHardBadge: "上級者向け",
    stageHardTitle: "HARD // 上級セクター",
    stageHardSectors: "Sector 21 〜 30",
    stageHardDesc: "入り組んだスネーク形状と迷路状の幾何学パターン。高度な仮定法と緻密な盤面スキャンが試される極限パズル。",
    stageHardTarget: "目標タイム: 200秒",

    tipsBadge: "STRATEGY GUIDE",
    tipsTitle: "全領地制覇のための攻略極意",
    tipsSubtitle: "トッププレイヤーが実践する3つの思考アルゴリズム。",
    
    tip1Step: "STEP 01",
    tip1Title: "最小の領地から特定する",
    tip1Desc: "盤面内でマス数が2〜3マスしかない小さな色領地は、選択肢が少なくモグラを特定しやすい最重要ポイントです。",

    tip2Step: "STEP 02",
    tip2Title: "モグラ配置後は直ちに封鎖",
    tip2Desc: "モグラを置いたら周囲8マスと同一列・行を封鎖することで、隣接する他の領地の候補が一気に絞り込まれます。",

    tip3Step: "STEP 03",
    tip3Title: "ラストワン（消去法）の活用",
    tip3Desc: "行・列・領地の中で、❌がついていない空きマスが残り1マスになった場合、そのマスは100%モグラ確定です。",

    faqBadge: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "よくあるご質問",
    faqSubtitle: "ゲームのプレイ環境や仕様に関する疑問にお答えします。",

    faq1Q: "無料で遊べますか？ 課金要素はありますか？",
    faq1A: "完全無料でお楽しみいただけます。アプリ内課金や広告の強制表示もなく、ブラウザから即座に全30ステージをプレイ可能です。",

    faq2Q: "アプリのダウンロードや会員登録は必要ですか？",
    faq2A: "会員登録やインストールの必要はありません。URLにアクセスするだけで、PCでもスマホでもすぐにお楽しみいただけます。",

    faq3Q: "パズルゲームが苦手でも解けますか？",
    faq3A: "はい！ 盤面を分析してくれる「サイバーAIヒント」や「Auto-Xアシスト」機能、さらにゲーム内アニメーション付きチュートリアル（デモプレイ）も完備しています。",

    faq4Q: "クリア記録やベストタイムは保存されますか？",
    faq4A: "ブラウザのローカルストレージに自動保存されます。後日ブラウザを開き直しても続きからプレイ可能です。",

    ctaTitle: "今すぐ電脳グリッドへダイブせよ。",
    ctaDesc: "研ぎ澄まされた論理思考で、9×9の領地を解き明かせ。ブラウザで今すぐ無料でプレイできます。",
    ctaBtnMain: "🚀 無料でゲームを始める",
    ctaDirectLink: "または直接アクセス: ",

    floatingPlay: "無料で今すぐ遊ぶ 🚀",
    
    footerDesc: "サイバーパンクの世界観と厳格な論理パズルが融合した新感覚配置型ゲーム。電脳領地を完全制覇せよ。",
    footerLinkProduct: "オンライン版プレイ",
    footerLinkGuide: "日本語マニュアル",
    footerRights: "© 2026 Cyber Mole Turf. All rights reserved."
  },
  en: {
    navAbout: "About",
    navRules: "Rules",
    navFeatures: "Features",
    navStages: "Stages",
    navDemo: "Mini Demo",
    navFaq: "FAQ",
    playNowBtn: "Play Online 🚀",
    
    heroBadge: "ONLINE PLAY AVAILABLE // VER 1.0",
    heroTitlePrefix: "Conquer the 9×9 Cyber Grid.",
    heroTitleHighlight: "High-Tech Turf Puzzle.",
    heroDesc: "One mole per row, column, and turf. No diagonal touch! Master 30 sectors of pure cybernetic logic and tactical deduction.",
    heroBtnPlay: "🚀 Play Free Online",
    heroBtnRules: "📖 View Rules",
    heroBtnDemo: "🎮 Try Mini Demo",
    
    stat1Label: "Sectors (Levels)",
    stat2Label: "Shields (3 Errors Max)",
    stat3Label: "100% Free & No Install",
    stat4Label: "Mobile & PC Ready",

    rulesBadge: "CORE LOGIC SYSTEM",
    rulesTitle: "4 Core Rules of Cyber Turf",
    rulesSubtitle: "Place exactly 9 cyber moles on the 9×9 grid while satisfying every constraint.",
    
    rule1Title: "① Exactly 1 Mole per Row",
    rule1Desc: "Each horizontal row (Row 1–9) must contain exactly one mole. No more, no less.",
    
    rule2Title: "② Exactly 1 Mole per Column",
    rule2Desc: "Each vertical column (Col 1–9) must contain exactly one mole.",
    
    rule3Title: "③ Exactly 1 Mole per Turf Zone",
    rule3Desc: "The board is partitioned into 9 colored turf zones. Each colored area must contain exactly one mole.",
    
    rule4Title: "④ No Diagonal Adjacency (8-Neighbor Block)",
    rule4Desc: "Moles cannot touch orthogonally or diagonally. Placing a mole blocks all 8 surrounding neighbor cells completely.",

    simBadge: "PLAYABLE PREVIEW",
    simTitle: "Experience the Mini Grid Demo",
    simSubtitle: "Try the core mechanics on this interactive 5×5 mini grid with Auto-X block assistance.",
    simList1: "Select Mole mode and click any cell to place a mole",
    simList2: "Placing a mole automatically blocks all 8 adjacent cells and lines",
    simList3: "Rule violations will deplete your cyber shields!",
    simBtnMole: "🐾 Place Mole",
    simBtnBlock: "❌ Block Cell",
    simBtnReset: "🔄 Reset Grid",
    simShieldsLabel: "Shields: ",
    simInitialMsg: "Click on any grid cell to place your cyber mole!",
    simClearMsg: "🎉 Mini Grid Cleared! Play the full 9x9 30 stages online!",

    featBadge: "POWERFUL FEATURES",
    featTitle: "Engineered for Seamless Deduction",
    featSubtitle: "Equipped with futuristic assists and tactile controls for players of all skill levels.",
    
    feat1Title: "⚡ Auto-X Block Assist",
    feat1Desc: "Automatically marks surrounding 8 cells, row, column, and same turf color with ❌ markers to keep you focused.",
    
    feat2Title: "💡 Cyber AI Hint Engine",
    feat2Desc: "Stuck on a tricky sector? The AI scans the grid in real-time to highlight logically guaranteed safe moves with explanations.",
    
    feat3Title: "🛡️ 3-Shield System & Undo",
    feat3Desc: "Allows up to 3 errors with sound alerts. Instant Undo/Redo lets you recover quickly from tactical missteps.",
    
    feat4Title: "📱 Mobile & Desktop Optimized",
    feat4Desc: "Full mouse/keyboard support on PC, and smooth swipe-to-block gestures designed natively for smartphones.",
    
    feat5Title: "⏱️ Time Attack & ★★★ Ratings",
    feat5Desc: "Track your clear speed on all 30 sectors with 3-star performance ratings and persistent best time records.",
    
    feat6Title: "🌐 Full Bilingual Support",
    feat6Desc: "Seamlessly switch between Japanese and English at any time across the entire game and manuals.",

    stagesBadge: "30 SECTORS",
    stagesTitle: "30 Sectors across 3 Difficulties",
    stagesSubtitle: "From beginner training grids to extreme labyrinthine turf patterns.",
    
    stageEasyBadge: "Beginner",
    stageEasyTitle: "EASY // Training Grid",
    stageEasySectors: "Sector 01 – 10",
    stageEasyDesc: "Regular block turf shapes. Ideal for mastering core constraints and basic elimination heuristics.",
    stageEasyTarget: "Target Time: ~90s",

    stageMedBadge: "Intermediate",
    stageMedTitle: "MEDIUM // Advanced Matrix",
    stageMedSectors: "Sector 11 – 20",
    stageMedDesc: "L-shaped and intersecting turf zones requiring multi-line elimination and pattern recognition.",
    stageMedTarget: "Target Time: ~140s",

    stageHardBadge: "Expert",
    stageHardTitle: "HARD // Labyrinth Protocol",
    stageHardSectors: "Sector 21 – 30",
    stageHardDesc: "Complex interlocking snake patterns demanding advanced hypothetical deduction and deep logic scanning.",
    stageHardTarget: "Target Time: ~200s",

    tipsBadge: "STRATEGY GUIDE",
    tipsTitle: "Master Tactics & Heuristics",
    tipsSubtitle: "Three core mental models used by master cyber tacticians.",
    
    tip1Step: "STEP 01",
    tip1Title: "Target the Smallest Turf First",
    tip1Desc: "Turf zones with only 2 or 3 cells offer the fewest possibilities and serve as the best entry points.",

    tip2Step: "STEP 02",
    tip2Title: "Block Surroundings Immediately",
    tip2Desc: "Locking down 8 adjacent cells instantly narrows down remaining spots for neighboring turf territories.",

    tip3Step: "STEP 03",
    tip3Title: "The Last-Cell Elimination Rule",
    tip3Desc: "When a row, column, or turf has only one unblocked cell remaining, it is mathematically guaranteed to be a mole.",

    faqBadge: "FREQUENTLY ASKED QUESTIONS",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about playing Cyber Mole Turf.",

    faq1Q: "Is it completely free to play?",
    faq1A: "Yes, Cyber Mole Turf is 100% free with no microtransactions, paywalls, or forced pop-up ads.",

    faq2Q: "Do I need to download or register?",
    faq2A: "No downloads or sign-ups required. Open the link in any modern browser on PC or mobile to play immediately.",

    faq3Q: "Is it beginner friendly?",
    faq3A: "Absolutely! The built-in AI hint engine, Auto-X assists, and interactive demo mode make it easy for beginners to learn.",

    faq4Q: "Is my progress saved automatically?",
    faq4A: "Yes, your cleared stages, best times, and star ratings are safely saved in your browser's local storage.",

    ctaTitle: "Dive into the Cyber Grid Now.",
    ctaDesc: "Test your mental fortitude across 30 thrilling sectors. Play free online directly in your browser.",
    ctaBtnMain: "🚀 Launch Game Free Online",
    ctaDirectLink: "Or visit directly: ",

    floatingPlay: "Play Free Online 🚀",

    footerDesc: "A futuristic logic puzzle combining cyberpunk aesthetics with rigorous spatial deduction.",
    footerLinkProduct: "Play Web Version",
    footerLinkGuide: "English Guide",
    footerRights: "© 2026 Cyber Mole Turf. All rights reserved."
  }
};

// Current language
let currentLang = 'ja';

function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  // Update toggle button text
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'ja' ? '🌐 English' : '🌐 日本語';
  }
}

/* ===================================================================
   Interactive Mini Simulator (5x5 Grid)
   =================================================================== */
class MiniTurfSimulator {
  constructor() {
    this.gridSize = 5;
    this.turfCount = 5;
    // 5x5 turf layout
    this.turfMap = [
      [0, 0, 1, 1, 1],
      [0, 2, 2, 1, 3],
      [0, 2, 4, 4, 3],
      [2, 2, 4, 3, 3],
      [2, 4, 4, 3, 3]
    ];
    // 1 Valid Solution for 5x5 demo:
    // (0, 0)->Turf0, (1, 3)->Turf1, (2, 1)->Turf2, (3, 4)->Turf3, (4, 2)->Turf4
    this.solution = [
      [1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0]
    ];

    this.gridState = Array(5).fill(null).map(() => Array(5).fill(0)); // 0: empty, 1: mole, -1: blocked
    this.currentMode = 'mole'; // 'mole' or 'block'
    this.shields = 3;
    this.isCleared = false;

    this.turfColors = [
      '#0284c7', // Blue
      '#d946ef', // Magenta
      '#059669', // Green
      '#ea580c', // Orange
      '#7c3aed'  // Purple
    ];

    this.initDOM();
  }

  initDOM() {
    this.container = document.getElementById('miniSimGrid');
    this.shieldsEl = document.getElementById('simShields');
    this.messageEl = document.getElementById('simMessage');
    this.moleModeBtn = document.getElementById('simMoleMode');
    this.blockModeBtn = document.getElementById('simBlockMode');
    this.resetBtn = document.getElementById('simReset');

    if (!this.container) return;

    this.moleModeBtn.addEventListener('click', () => this.setMode('mole'));
    this.blockModeBtn.addEventListener('click', () => this.setMode('block'));
    this.resetBtn.addEventListener('click', () => this.reset());

    this.render();
  }

  setMode(mode) {
    this.currentMode = mode;
    this.moleModeBtn.classList.toggle('active', mode === 'mole');
    this.blockModeBtn.classList.toggle('active', mode === 'block');
  }

  reset() {
    this.gridState = Array(5).fill(null).map(() => Array(5).fill(0));
    this.shields = 3;
    this.isCleared = false;
    this.updateShields();
    this.setMessage(i18nData[currentLang].simInitialMsg);
    this.render();
  }

  updateShields() {
    let html = '';
    for (let i = 0; i < 3; i++) {
      html += i < this.shields ? '🛡️' : '💔';
    }
    this.shieldsEl.innerHTML = html;
  }

  setMessage(msg, isError = false, isSuccess = false) {
    this.messageEl.textContent = msg;
    this.messageEl.style.color = isError ? '#ff2a55' : isSuccess ? '#00ff88' : '#00f3ff';
  }

  handleCellClick(r, c) {
    if (this.isCleared) return;

    if (this.currentMode === 'mole') {
      if (this.gridState[r][c] === 1) {
        // Remove mole
        this.gridState[r][c] = 0;
        this.render();
      } else {
        // Attempt place mole
        const check = this.validatePlacement(r, c);
        if (!check.valid) {
          this.shields = Math.max(0, this.shields - 1);
          this.updateShields();
          this.setMessage(`⚠️ ルール違反: ${check.reason}`, true);
          if (this.shields === 0) {
            this.setMessage("⚠️ シールドダウン！リセットして再挑戦してください", true);
          }
          return;
        }

        // Place mole
        this.gridState[r][c] = 1;
        // Auto-X assist
        this.autoBlock(r, c);
        this.setMessage("⚡ Auto-X 封鎖発動！周囲8マスを行列ごと封鎖しました。");
        this.render();
        this.checkWin();
      }
    } else if (this.currentMode === 'block') {
      if (this.gridState[r][c] === 1) return;
      this.gridState[r][c] = this.gridState[r][c] === -1 ? 0 : -1;
      this.render();
    }
  }

  validatePlacement(r, c) {
    // 1. Check Row
    for (let j = 0; j < 5; j++) {
      if (j !== c && this.gridState[r][j] === 1) {
        return { valid: false, reason: "同じ行に既にモグラがいます！" };
      }
    }
    // 2. Check Column
    for (let i = 0; i < 5; i++) {
      if (i !== r && this.gridState[i][c] === 1) {
        return { valid: false, reason: "同じ列に既にモグラがいます！" };
      }
    }
    // 3. Check Turf
    const turf = this.turfMap[r][c];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if ((i !== r || j !== c) && this.turfMap[i][j] === turf && this.gridState[i][j] === 1) {
          return { valid: false, reason: "同じ領地に既にモグラがいます！" };
        }
      }
    }
    // 4. Check 8 Neighbors (Diagonal included)
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
          if (this.gridState[nr][nc] === 1) {
            return { valid: false, reason: "斜め・隣接する周囲8マスには配置できません！" };
          }
        }
      }
    }
    return { valid: true };
  }

  autoBlock(r, c) {
    const turf = this.turfMap[r][c];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (i === r && j === c) continue;
        // Same row, col, or turf
        if (i === r || j === c || this.turfMap[i][j] === turf) {
          if (this.gridState[i][j] === 0) this.gridState[i][j] = -1;
        }
        // 8 Neighbors
        if (Math.abs(i - r) <= 1 && Math.abs(j - c) <= 1) {
          if (this.gridState[i][j] === 0) this.gridState[i][j] = -1;
        }
      }
    }
  }

  checkWin() {
    let moleCount = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (this.gridState[i][j] === 1) moleCount++;
      }
    }

    if (moleCount === 5) {
      this.isCleared = true;
      this.setMessage(i18nData[currentLang].simClearMsg, false, true);
    }
  }

  render() {
    this.container.innerHTML = '';
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const cell = document.createElement('div');
        cell.className = 'sim-cell';
        const turfId = this.turfMap[r][c];
        cell.style.backgroundColor = `${this.turfColors[turfId]}33`;
        cell.style.border = `1px solid ${this.turfColors[turfId]}88`;

        const val = this.gridState[r][c];
        if (val === 1) {
          cell.classList.add('mole');
          cell.textContent = '🐾';
          cell.style.backgroundColor = `${this.turfColors[turfId]}99`;
          cell.style.boxShadow = `0 0 12px ${this.turfColors[turfId]}`;
        } else if (val === -1) {
          cell.classList.add('blocked');
          cell.textContent = '❌';
        }

        cell.addEventListener('click', () => this.handleCellClick(r, c));
        this.container.appendChild(cell);
      }
    }
  }
}

/* ===================================================================
   Main Initialization
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Init Simulator
  new MiniTurfSimulator();

  // 2. Language Switcher
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ja' ? 'en' : 'ja';
      updateLanguage(nextLang);
    });
  }

  // 3. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });
    // Close nav on click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.textContent = '☰';
      });
    });
  }

  // 4. Header Scroll Effect & Sticky Floating CTA
  const header = document.querySelector('.cyber-header');
  const floatingCta = document.getElementById('floatingCtaBar');
  const heroSection = document.querySelector('.hero-section');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', scrollY > 40);
    }
    if (floatingCta && heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      if (scrollY > heroBottom - 200) {
        floatingCta.classList.add('visible');
      } else {
        floatingCta.classList.remove('visible');
      }
    }
  });

  // 5. FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const ans = item.querySelector('.faq-answer');
    if (btn && ans) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other items
        document.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherAns = other.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle current
        item.classList.toggle('active', !isActive);
        if (!isActive) {
          ans.style.maxHeight = ans.scrollHeight + 'px';
        } else {
          ans.style.maxHeight = null;
        }
      });
    }
  });

  // 6. Smooth Scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elemPos = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elemPos - headerOffset,
          behavior: 'smooth'
        });
      }
    });
  });
});
