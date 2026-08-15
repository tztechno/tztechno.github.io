/* ==========================================
   CYBER POKER LANDING PAGE JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. THEME SWITCHER & SCROLL LOGIC
  // ==========================================
  const body = document.body;
  const themeBtns = document.querySelectorAll('.theme-btn');
  let currentTheme = 'cyber';

  // Theme Swapper
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const targetTheme = btn.getAttribute('data-theme');
      
      body.classList.remove('theme-cyber', 'theme-classic', 'theme-dark');
      body.classList.add(`theme-${targetTheme}`);
      currentTheme = targetTheme;
      
      // Update particle canvas colors dynamically
      if (typeof initParticles === 'function') {
        initParticles();
      }
    });
  });

  // Header background fade on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });


  // ==========================================
  // 2. CANVAS PARTICLE BACKGROUND
  // ==========================================
  const canvas = document.getElementById('particle-canvas');
  let initParticles; // Hoisting to global scope of DOMContentLoaded
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    initParticles = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 80);
      particles = [];
      
      // Select colors based on current active theme
      let colors = [];
      if (currentTheme === 'cyber') {
        colors = [
          'rgba(0, 242, 255, 0.35)', // Cyan
          'rgba(255, 47, 208, 0.35)', // Pink
          'rgba(155, 92, 255, 0.25)'  // Purple
        ];
      } else if (currentTheme === 'classic') {
        colors = [
          'rgba(212, 175, 55, 0.35)', // Gold
          'rgba(39, 174, 96, 0.35)',   // Green
          'rgba(46, 204, 113, 0.25)'  // Light green
        ];
      } else {
        colors = [
          'rgba(255, 255, 255, 0.25)', // White
          'rgba(149, 165, 166, 0.25)', // Silver
          'rgba(127, 140, 141, 0.2)'   // Grey
        ];
      }

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      // Draw connection lines
      ctx.shadowBlur = 0;
      let connectionColor = 'rgba(0, 242, 255, 0.08)';
      if (currentTheme === 'classic') {
        connectionColor = 'rgba(212, 175, 55, 0.08)';
      } else if (currentTheme === 'dark') {
        connectionColor = 'rgba(255, 255, 255, 0.06)';
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = connectionColor.replace('0.08', alpha.toFixed(2)).replace('0.06', alpha.toFixed(2));
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
  }


  // ==========================================
  // 3. INTERACTIVE CYBER POKER TRAINER
  // ==========================================
  const SCENARIOS = {
    pocket_aces: {
      tag: "Pre-flop // BTN",
      name: "最強スタート：ポケットAA",
      baseInfo: "プリフロップ SB/BTN",
      community: [], // Pre-flop
      playerHand: [
        { value: 'A', suit: '♣', color: 'suit-black' },
        { value: 'A', suit: '♥', color: 'suit-red' }
      ],
      opponentAction: "RAISE TO 3BB (強気なレイズ)",
      aiChoices: {
        easy: 'call',
        medium: 'raise',
        hard: 'raise'
      },
      discards: {
        fold: {
          equity: 0,
          rating: "D (最悪・Miss)",
          text: "痛恨のエラー！スターティングハンドの最高峰「ポケットA」をレイズに対してフォールドしてしまいました。相手がどんな強気なアクションであろうと、ここでは絶対に戦うべきです。",
        },
        call: {
          equity: 85.2,
          rating: "B (消極的・Passive)",
          text: "コールで進むことも可能ですが、AAはプリフロップで圧倒的な強さ（約85%）を持ちます。3-bet（リレイズ）を返し、相手にフォールドを迫るか、ポットを大きく膨らませて利益を最大化しましょう。",
        },
        raise: {
          equity: 85.2,
          rating: "S (最適解・Best)",
          text: "パーフェクト！プリフロップでの最強ハンドであるAAは、リレイズ（レイズ）でさらにチップを積み重ね、相手にプレッシャーをかけるのが圧倒的セオリー。AIのレイズにも強気な3-betで返します！",
        }
      }
    },
    royal_draw: {
      tag: "Flop // BB",
      name: "超強力ドロー：ロイヤルストレートフラッシュ狙い",
      baseInfo: "フロップ BB先攻 (コミュニティ3枚公開)",
      community: [
        { value: 'Q', suit: '♠', color: 'suit-black' },
        { value: 'J', suit: '♠', color: 'suit-black' },
        { value: '2', suit: '♦', color: 'suit-red' }
      ],
      playerHand: [
        { value: 'A', suit: '♠', color: 'suit-black' },
        { value: 'K', suit: '♠', color: 'suit-black' }
      ],
      opponentAction: "BET 6BB (フロップでのベット)",
      aiChoices: {
        easy: 'call',
        medium: 'call',
        hard: 'raise'
      },
      discards: {
        fold: {
          equity: 0,
          rating: "D (無謀なフォールド)",
          text: "論外のミス！スペードのフラッシュドローに加えて、T（10）が来ればロイヤルストレートフラッシュ（10-J-Q-K-A）となる超強力なドローハンドです。アウト数が非常に多いため、勝率は実質半分以上あります。",
        },
        call: {
          equity: 56.4,
          rating: "A (堅実・Solid)",
          text: "コールで様子を見るのも悪くありません。オッズも十分合っています。しかし、このレベルのドローはレイズを返して相手をフォールドさせるプレッシャーを与える方が長期的期待値は高くなります。",
        },
        raise: {
          equity: 56.4,
          rating: "S (アグレッシブ・Aggressive)",
          text: "完璧なセミブラフ！スペードのフラッシュかつロイヤルストレートフラッシュの両面ドロー（勝率56%超）は、ここでレイズして主導権を握るのが超強力です。相手を即降ろすか、引いた時にメガポットを狙えます。",
        }
      }
    },
    river_bluff_catch: {
      tag: "River // BB",
      name: "緊迫のリバー：ブラフキャッチャー",
      baseInfo: "リバー BB先攻 (全コミュニティ公開)",
      community: [
        { value: 'K', suit: '♥', color: 'suit-red' },
        { value: 'Q', suit: '♥', color: 'suit-red' },
        { value: '8', suit: '♦', color: 'suit-red' },
        { value: '4', suit: '♣', color: 'suit-black' },
        { value: '10', suit: '♠', color: 'suit-black' }
      ],
      playerHand: [
        { value: 'A', suit: '♦', color: 'suit-red' },
        { value: '10', suit: '♣', color: 'suit-black' }
      ],
      opponentAction: "ALL-IN 35BB (AI渾身のオールイン)",
      aiChoices: {
        easy: 'call',
        medium: 'fold',
        hard: 'fold'
      },
      discards: {
        fold: {
          equity: 0,
          rating: "S (英断・Great Fold)",
          text: "名誉ある撤退！手元の役は「10のワンペア」のみです。ボードにはKやQなどのオーバーカード、さらにフラッシュドローやストレートの可能性が存在し、相手の35BBオールインにコールするのは無謀すぎます。AIは強力なマージナル以上を確信しています。",
        },
        call: {
          equity: 12.1,
          rating: "D (暴走・Punished)",
          text: "無謀なコール！AIのハンドは「K♣ J♥ (Kのワンペア)」でした。35BBものビッグベットに対して、ローペア（10）でキャッチしにいくのは自殺行為。相手のベットレンジに勝てる見込みは極めて低いです。",
        },
        raise: {
          equity: 12.1,
          rating: "C (絶望的ブラフ)",
          text: "リバーでのオールインに対するブラフオーバーレイズは最悪の手です。相手はすでにポットコミットしており、こちらの手牌（10）では降ろせない可能性が極めて高く、大損するだけです。",
        }
      }
    }
  };

  let activeScenario = 'pocket_aces';
  let activeAiLevel = 'easy';
  let playerChoice = null;

  // Render a Poker card
  const makeCardHTML = (card) => {
    return `
      <div class="card-cyber font-orbitron">
        <div class="card-num-suit ${card.color}">
          <div>${card.value}</div>
          <div style="font-size:10px; margin-top:2px;">${card.suit}</div>
        </div>
        <div class="card-center-suit ${card.color}" style="font-size: 20px;">
          ${card.suit}
        </div>
        <div class="card-num-suit ${card.color}" style="transform: rotate(180deg); align-self: flex-end;">
          <div>${card.value}</div>
          <div style="font-size:10px; margin-top:2px;">${card.suit}</div>
        </div>
      </div>
    `;
  };

  const loadTrainerData = () => {
    const data = SCENARIOS[activeScenario];
    
    // Set text headers
    document.getElementById('tr-base-info').textContent = data.baseInfo;
    document.getElementById('tr-opponent-status').textContent = data.opponentAction;
    
    // Show AI recommendation outline
    const levelAiDecision = data.aiChoices[activeAiLevel];
    const mapActions = { fold: 'フォールド', call: 'コール', raise: 'レイズ' };
    
    // Render community cards
    const commContainer = document.getElementById('trainer-community-cards');
    commContainer.innerHTML = '';
    if (data.community.length === 0) {
      commContainer.innerHTML = `<p class="neutral-message" style="width:100%;">プリフロップのため、場にコミュニティカードはありません</p>`;
    } else {
      data.community.forEach(c => {
        commContainer.innerHTML += makeCardHTML(c);
      });
    }

    // Render player cards
    const handContainer = document.getElementById('trainer-player-cards');
    handContainer.innerHTML = '';
    data.playerHand.forEach(c => {
      handContainer.innerHTML += makeCardHTML(c);
    });

    // Reset decision buttons
    const actBtns = document.querySelectorAll('.btn-action-choice');
    actBtns.forEach(btn => {
      btn.classList.remove('active');
      const actionType = btn.getAttribute('data-action');
      
      // Add highlight to AI's selection
      if (actionType === levelAiDecision) {
        btn.classList.add('ai-choice');
      } else {
        btn.classList.remove('ai-choice');
      }
    });

    // Reset output panel
    const outputEl = document.getElementById('trainer-analysis-output');
    outputEl.innerHTML = `<p class="neutral-message">「FOLD」「CALL」「RAISE」のいずれかを選択して、AIの判定とエクイティ評価をリアルタイム計算します。</p>`;
    playerChoice = null;
  };

  // Scenario select handles
  const scenarioBtns = document.querySelectorAll('.btn-scenario');
  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeScenario = btn.getAttribute('data-scenario');
      loadTrainerData();
    });
  });

  // AI Selector Tab handles
  const aiBtns = document.querySelectorAll('.ai-tab-btn');
  const aiExplanation = document.querySelector('.ai-explanation');
  const aiExps = {
    easy: "<strong>イージーAI (Lv1):</strong> コールが多く、ブラフやポットオッズを考慮しません。ここでも弱気またはランダムな判断を行う傾向があります。",
    medium: "<strong>ミドルAI (Lv2):</strong> ポットオッズと自分のアウト数を基本計算。堅実で大きなミスはしませんが、セミブラフなどの応用が少なめです。",
    hard: "<strong>ハードAI (Lv3):</strong> モンテカルロシミュレーション(400回)を駆使し、勝率を極めて正確に見極めます。ドローでのセミブラフレイズや的確なリバーフォールドを的確に遂行します。"
  };

  aiBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      aiBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeAiLevel = btn.getAttribute('data-ai');
      aiExplanation.innerHTML = aiExps[activeAiLevel];
      loadTrainerData();
    });
  });

  // Action Click buttons
  const actBtns = document.querySelectorAll('.btn-action-choice');
  actBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      actBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const action = btn.getAttribute('data-action');
      playerChoice = action;
      
      const data = SCENARIOS[activeScenario];
      const result = data.discards[action];
      const aiDecision = data.aiChoices[activeAiLevel];
      
      const outputEl = document.getElementById('trainer-analysis-output');
      outputEl.innerHTML = `
        <div class="analysis-result-box">
          <div class="analysis-row">
            <span>選択アクション:</span>
            <span class="analysis-val text-pink font-orbitron" style="text-transform:uppercase;">${action}</span>
          </div>
          <div class="analysis-row">
            <span>AI推定勝率 (Equity):</span>
            <span class="analysis-val text-cyan font-orbitron">${result.equity.toFixed(1)}%</span>
          </div>
          <div class="analysis-row">
            <span>戦術評価 (Rating):</span>
            <span class="analysis-val text-gold">${result.rating}</span>
          </div>
          <div class="analysis-row">
            <span>選択AI (Lv.${activeAiLevel === 'easy' ? '1' : activeAiLevel === 'medium' ? '2' : '3'}) の判断:</span>
            <span class="analysis-val text-emerald font-orbitron" style="text-transform:uppercase;">${aiDecision}</span>
          </div>
          <p class="best-discard-suggestion">
            ${result.text}
          </p>
        </div>
      `;
    });
  });

  // Init trainer
  loadTrainerData();


  // ==========================================
  // 4. MONTE CARLO PROBABILITY ENGINE SIMULATOR
  // ==========================================
  const startSimBtn = document.getElementById('btn-start-sim');
  const simGamesEl = document.getElementById('sim-games');
  const simWinRateEl = document.getElementById('sim-win-rate');
  const simAvgPtsEl = document.getElementById('sim-avg-pts'); // Tie Rate
  const simSpeedEl = document.getElementById('sim-speed');
  const simLogEl = document.getElementById('sim-log');
  const convergenceCanvas = document.getElementById('convergence-canvas');
  
  let simInterval = null;
  let iterationsCount = 0;
  let simulatedWins = 0;
  let simulatedTies = 0;
  let simulatedLosses = 0;
  
  // Real target equity to converge to (representing simulated AA vs Random Hand)
  const targetEquity = 0.852;
  const historyData = [];

  // Graph plotter
  const drawConvergenceGraph = () => {
    if (!convergenceCanvas) return;
    const ctx = convergenceCanvas.getContext('2d');
    const width = convergenceCanvas.width = convergenceCanvas.parentElement.clientWidth;
    const height = convergenceCanvas.height = 180;

    ctx.clearRect(0, 0, width, height);

    // Draw horizontal grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const y = (height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw Target Line (85.2%)
    const targetY = height - (targetEquity * height);
    ctx.strokeStyle = 'rgba(232, 255, 77, 0.4)'; // glowing yellow target line
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, targetY);
    ctx.lineTo(width, targetY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(232, 255, 77, 0.7)';
    ctx.font = '8px Orbitron';
    ctx.fillText("TARGET (85.2%)", 10, targetY - 4);

    // Draw convergence curve
    if (historyData.length < 2) return;
    
    ctx.beginPath();
    ctx.strokeStyle = currentTheme === 'cyber' ? '#00f2ff' : currentTheme === 'classic' ? '#d4af37' : '#ffffff';
    ctx.lineWidth = 2;
    
    // Draw shadow glow for path
    ctx.shadowBlur = 8;
    ctx.shadowColor = ctx.strokeStyle;

    historyData.forEach((eq, idx) => {
      const x = (width / 200) * idx; // Plot up to 200 history steps
      const y = height - (eq * height);
      if (idx === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    ctx.shadowBlur = 0; // Reset
  };

  const runSimStep = () => {
    if (iterationsCount >= 10000) {
      // Auto pause at 10,000 iterations
      toggleSimulation(false);
      
      const logLine = document.createElement('div');
      logLine.style.color = 'var(--neon-emerald)';
      logLine.textContent = `[SYSTEM] Monte Carlo converged successfully. Total runs: 10,000. Win Equity: ${(simulatedWins / 100).toFixed(2)}%`;
      simLogEl.appendChild(logLine);
      simLogEl.scrollTop = simLogEl.scrollHeight;
      return;
    }

    // Add iterations
    const batchSize = Math.min(50, 10000 - iterationsCount);
    iterationsCount += batchSize;

    // Simulate batch results with statistical bias towards pocket Aces (85% win)
    for (let i = 0; i < batchSize; i++) {
      const rand = Math.random();
      if (rand < 0.852) {
        simulatedWins++;
      } else if (rand < 0.865) {
        simulatedTies++;
      } else {
        simulatedLosses++;
      }
    }

    // Current rolling win equity
    const currentEquity = simulatedWins / iterationsCount;
    
    // Save to history for plotting
    if (historyData.length < 200) {
      historyData.push(currentEquity);
    } else {
      historyData.shift();
      historyData.push(currentEquity);
    }

    // Update HTML texts
    simGamesEl.textContent = iterationsCount.toLocaleString();
    simWinRateEl.textContent = ((simulatedWins / iterationsCount) * 100).toFixed(1) + '%';
    simAvgPtsEl.textContent = ((simulatedTies / iterationsCount) * 100).toFixed(1) + '%';

    // Update standard deviation sigma mock calculation
    // Sigma shrinks by 1 / sqrt(N)
    const mockSigma = (0.25 / Math.sqrt(iterationsCount)).toFixed(4);
    document.getElementById('sigma-value').textContent = mockSigma;

    // Stream simulator logs
    const suitIcons = ['♠', '♥', '♦', '♣'];
    const cardNums = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    
    const getRandomCard = () => {
      return cardNums[Math.floor(Math.random() * cardNums.length)] + suitIcons[Math.floor(Math.random() * suitIcons.length)];
    };

    const logMsgs = [
      `[MC] Simulating opponent hole: [ ${getRandomCard()} , ${getRandomCard()} ] on board [ ]`,
      `[MC] Evaluation run #${iterationsCount}: Pocket Aces wins via Pair.`,
      `[MC] Equity calculation: perceived equity converging to ${(currentEquity * 100).toFixed(3)}%`,
      `[MC] Run #${iterationsCount - 15}: Opponent hits straight [ ${getRandomCard()} ]. Loss.`,
      `[MC] Shuffling remaining 50 deck cards... Running sample threads.`,
      `[MC] Convergence status: Standard deviation delta = ${mockSigma}`,
    ];

    const logLine = document.createElement('div');
    logLine.textContent = logMsgs[Math.floor(Math.random() * logMsgs.length)];
    simLogEl.appendChild(logLine);

    // Cap log lines
    while (simLogEl.children.length > 25) {
      simLogEl.removeChild(simLogEl.firstChild);
    }
    simLogEl.scrollTop = simLogEl.scrollHeight;

    // Draw graph
    drawConvergenceGraph();
  };

  const toggleSimulation = (shouldRun) => {
    if (!shouldRun) {
      // Stop
      clearInterval(simInterval);
      simInterval = null;
      startSimBtn.classList.remove('running');
      startSimBtn.innerHTML = '<i class="fa-solid fa-play"></i> モンテカルロ演算を開始';
      simSpeedEl.textContent = 'PAUSED';
      simSpeedEl.style.backgroundColor = 'transparent';
      simSpeedEl.style.color = 'var(--text-muted)';
      
      const logLine = document.createElement('div');
      logLine.style.color = 'var(--neon-pink)';
      logLine.textContent = '[SYSTEM] Equity estimation engine paused. Current Monte Carlo weights preserved.';
      simLogEl.appendChild(logLine);
      simLogEl.scrollTop = simLogEl.scrollHeight;
    } else {
      // Start
      startSimBtn.classList.add('running');
      startSimBtn.innerHTML = '<i class="fa-solid fa-pause"></i> 演算シミュレーションを停止';
      simSpeedEl.textContent = 'RUNNING (500 runs/s)';
      simSpeedEl.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
      simSpeedEl.style.color = 'var(--neon-emerald)';

      const logLine = document.createElement('div');
      logLine.style.color = 'var(--neon-cyan)';
      logLine.textContent = '[SYSTEM] Initializing parallel sample threads. Computing perceived hand strength...';
      simLogEl.appendChild(logLine);
      simLogEl.scrollTop = simLogEl.scrollHeight;

      simInterval = setInterval(runSimStep, 80);
    }
  };

  if (startSimBtn) {
    startSimBtn.addEventListener('click', () => {
      const isRunning = startSimBtn.classList.contains('running');
      toggleSimulation(!isRunning);
    });
  }

  // Initial draw of convergence canvas grid
  drawConvergenceGraph();
  window.addEventListener('resize', drawConvergenceGraph);

});
