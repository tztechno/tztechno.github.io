/* ==========================================
   CYBER MAJONG LANDING PAGE JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. HEADER SCROLL & FAQ ACCORDION
  // ==========================================
  
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
      
      // Close all items
      faqItems.forEach(i => i.classList.remove('active'));
      
      // Open clicked item if it was not active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });


  // ==========================================
  // 2. CANVAS PARTICLE BACKGROUND
  // ==========================================
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 80);
      particles = [];
      const colors = [
        'rgba(0, 240, 255, 0.35)',  // Cyan
        'rgba(219, 39, 119, 0.35)',  // Pink
        'rgba(16, 185, 129, 0.25)'   // Emerald Green
      ];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & Draw Particles
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

      // Connections
      ctx.shadowBlur = 0;
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
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
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
  // 3. INTERACTIVE CYBER TRAINER (DEMO)
  // ==========================================

  // Map tile indexes to names
  const TILE_NAMES = [
    "1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", // 0-8
    "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", // 9-17
    "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", // 18-26
    "東", "南", "西", "北", // 27-30
    "白", "發", "中" // 31-33
  ];

  // Unique tiles valid in 2-Player Sanma (Manzu 2-8 excluded)
  const VALID_UNIQUE_TILES = [
    0, 8,
    9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30,
    31, 32, 33
  ];

  // Predefined Hand Scenarios
  const SCENARIOS = {
    kokushi: {
      hand: [0, 8, 9, 17, 18, 26, 27, 28, 29, 30, 31, 32, 33, 13], // 5p (13) is the extra tile
      doraIndicator: 33, // 中
      opponentRiichi: true,
      aiChoices: {
        easy: 27,       // East (breaks Kokushi)
        normal: 13,     // 5p (correct shanten choice)
        hard: 13,       // 5p
        reinforced: 13  // 5p
      },
      discards: {
        13: { // 5p
          shanten: 0,
          waits: [0, 8, 9, 17, 18, 26, 27, 28, 29, 30, 31, 32, 33], // 13-way wait
          text: "パーフェクト！不要な5pを捨てて、<strong>国士無双の13面待ち聴牌</strong>を達成しました！すべてのヤオ九牌（端牌・字牌）が和了（アガリ）牌です。",
          rating: "S (神の一手)"
        },
        default: {
          shanten: 1,
          waits: [],
          text: "国士無双の一向聴のままですが、アガりから遠ざかりました。無駄な中張牌である「5p」を捨てるのが最速テンパイへの道です。",
          rating: "B (非効率)"
        }
      }
    },
    tanyao: {
      hand: [10, 11, 12, 13, 14, 15, 21, 22, 23, 21, 21, 19, 20, 30], // 北 (30) is the extra
      doraIndicator: 11, // 3p (Dora is 4p (12))
      opponentRiichi: true,
      aiChoices: {
        easy: 21,       // 4s (breaks the pair)
        normal: 30,     // 北
        hard: 30,       // 北
        reinforced: 30  // 北
      },
      discards: {
        30: { // 北
          shanten: 1,
          waits: [18, 21], // 1s, 4s to complete 2s-3s
          text: "正解です！安全牌にもなりうる不要な字牌「北」を切り、手の中で<strong>断幺九（タンヤオ）・平和（ピンフ）・赤ドラ</strong>の一向聴を維持しました。有効牌は1s, 4sです。",
          rating: "S (的確)"
        },
        19: { // 2s
          shanten: 2,
          waits: [],
          text: "両面ターツを自ら払ってしまいました。向聴数が2に後退し、アガりが遅れます。孤立牌の「北」を処理しましょう。",
          rating: "C (ミスプレイ)"
        },
        20: { // 3s
          shanten: 2,
          waits: [],
          text: "両面ターツを崩してしまい、向聴数が2に後退しました。「北」を切るのがセオリーです。",
          rating: "C (ミスプレイ)"
        },
        default: {
          shanten: 2,
          waits: [],
          text: "完成面子や対子を壊してしまいました。向聴数が後退し、手のクオリティが下がります。不要な「北」を捨ててください。",
          rating: "D (悪手)"
        }
      }
    },
    chinitsu: {
      hand: [18, 18, 18, 19, 20, 21, 22, 23, 24, 25, 26, 26, 26, 27], // 東 (27) is extra
      doraIndicator: 32, // 發
      opponentRiichi: false,
      aiChoices: {
        easy: 26,       // 9s (breaks triplet)
        normal: 27,     // 東
        hard: 27,       // 東
        reinforced: 27  // 東
      },
      discards: {
        27: { // 東
          shanten: 0,
          waits: [18, 19, 20, 21, 22, 23, 24, 25, 26], // 9-way wait (1s-9s)
          text: "伝説的打牌！不要な「東」を捨てたことで、<strong>ソーズの清一色（チンイツ）・九連宝燈（純正九面待ち）聴牌</strong>が完成しました！1sから9sまで何が来てもアガれます。",
          rating: "SS (伝説)"
        },
        18: { // 1s
          shanten: 1,
          waits: [],
          text: "端の暗刻を崩してしまい、テンパイチャンスを潰しました。不要な「東」を切りましょう。",
          rating: "C (悪手)"
        },
        26: { // 9s
          shanten: 1,
          waits: [],
          text: "暗刻を崩したため、手が進みません。邪魔な「東」を処理するのが最適解です。",
          rating: "C (悪手)"
        },
        default: {
          shanten: 1,
          waits: [],
          text: "せっかくの染め手面子を壊してしまいました。テンパイを逃しています。孤立した「東」を捨ててください。",
          rating: "D (最悪)"
        }
      }
    }
  };

  let currentScenarioKey = 'kokushi';
  let currentAiLevel = 'easy';
  let activeDiscardIndex = null;

  // Render a Mahjong tile inside the simulator
  const renderTile = (tileIndex, isDora = false, isAiChoice = false, clickHandler = null) => {
    const tileName = TILE_NAMES[tileIndex];
    const tileDiv = document.createElement('div');
    tileDiv.className = 'tile-cyber';
    if (isDora) tileDiv.classList.add('dora');
    if (isAiChoice) tileDiv.classList.add('ai-choice');
    
    // Add custom title text for accessibility
    tileDiv.setAttribute('title', tileName);

    // Apply click handler if provided
    if (clickHandler) {
      tileDiv.addEventListener('click', clickHandler);
    }

    // Render contents based on tile types
    if (tileIndex >= 0 && tileIndex <= 8) {
      // Manzu (1m and 9m only)
      const numChar = tileIndex === 0 ? "一" : "九";
      tileDiv.innerHTML = `
        <div class="char-val text-cyan">${numChar}</div>
        <div class="char-label text-pink" style="font-size:12px; font-weight:900;">萬</div>
      `;
    } 
    else if (tileIndex >= 9 && tileIndex <= 17) {
      // Pinzu (Dots)
      const val = (tileIndex - 9) + 1;
      if (val === 1) {
        tileDiv.innerHTML = `
          <div class="tile-grid-dots">
            <div class="tile-dot dot-red dot-large"></div>
          </div>
        `;
      } else {
        const gridCols = (val === 2 || val === 3 || val === 4) ? 'grid-cols-2' : 'grid-cols-3';
        let dotsHTML = '';
        for (let i = 0; i < val; i++) {
          const colorClass = (i === 0 && (val === 3 || val === 5 || val === 7)) ? 'dot-red' : 'dot-cyan';
          dotsHTML += `<div class="tile-dot ${colorClass}"></div>`;
        }
        tileDiv.innerHTML = `<div class="tile-grid-dots ${gridCols}">${dotsHTML}</div>`;
      }
    } 
    else if (tileIndex >= 18 && tileIndex <= 26) {
      // Souzu (Bamboo)
      const val = (tileIndex - 18) + 1;
      let barsHTML = '';
      for (let i = 0; i < val; i++) {
        const isRed = (val === 8 && i % 2 === 0) || (val === 9 && i % 3 === 0);
        const barColor = isRed ? 'bar-red' : 'bar-green';
        barsHTML += `<div class="bamboo-bar ${barColor}"></div>`;
      }
      tileDiv.innerHTML = `<div class="tile-bamboo-container">${barsHTML}</div>`;
    } 
    else if (tileIndex >= 27 && tileIndex <= 30) {
      // Winds
      const windColors = ['text-cyan', 'text-pink', 'text-gold', 'text-emerald'];
      const color = windColors[tileIndex - 27];
      tileDiv.innerHTML = `<span class="${color}" style="font-size:16px; font-weight:900;">${tileName}</span>`;
    } 
    else {
      // Dragons
      if (tileIndex === 31) {
        tileDiv.innerHTML = `<div class="dragon-haku"></div>`;
      } else if (tileIndex === 32) {
        tileDiv.innerHTML = `<span class="text-emerald" style="font-size:17px; font-weight:900;">發</span>`;
      } else {
        tileDiv.innerHTML = `<span class="text-pink" style="font-size:17px; font-weight:900;">中</span>`;
      }
    }

    return tileDiv;
  };

  // Load Trainer Hand
  const loadTrainer = () => {
    const handContainer = document.getElementById('trainer-hand');
    if (!handContainer) return;
    handContainer.innerHTML = '';
    
    const scenario = SCENARIOS[currentScenarioKey];
    
    // Set indicators
    const doraTile = TILE_NAMES[scenario.doraIndicator];
    document.getElementById('dora-indicator-tile').textContent = doraTile;
    
    const statusTxt = scenario.opponentRiichi ? "RIICHI! (立直中)" : "NOMAL (進行中)";
    const statusEl = document.getElementById('opponent-status-txt');
    statusEl.textContent = statusTxt;
    if (scenario.opponentRiichi) {
      statusEl.className = "indicator-val text-pink font-orbitron";
    } else {
      statusEl.className = "indicator-val text-cyan font-orbitron";
    }

    // Determine Dora mapping logic
    const evaluateDora = (indicatorIdx) => {
      if (indicatorIdx === 0) return 8; // 1m -> 9m
      if (indicatorIdx === 8) return 0; // 9m -> 1m
      if (indicatorIdx % 9 === 8) return indicatorIdx - 8; // 9p->1p, 9s->1s
      if (indicatorIdx >= 27 && indicatorIdx <= 30) {
        return indicatorIdx === 30 ? 27 : indicatorIdx + 1; // E->S->W->N
      }
      if (indicatorIdx >= 31 && indicatorIdx <= 33) {
        return indicatorIdx === 33 ? 31 : indicatorIdx + 1; // Haku->Hatsu->Chun
      }
      return indicatorIdx + 1;
    };
    
    const doraTarget = evaluateDora(scenario.doraIndicator);
    const aiChoiceVal = scenario.aiChoices[currentAiLevel];

    scenario.hand.forEach((tileIdx, idx) => {
      const isDora = (tileIdx === doraTarget);
      const isAiChoice = (tileIdx === aiChoiceVal);
      
      const tileEl = renderTile(tileIdx, isDora, isAiChoice, () => {
        handleDiscard(tileIdx, idx, tileEl);
      });
      
      if (activeDiscardIndex === idx) {
        tileEl.classList.add('active-discard');
      }
      
      handContainer.appendChild(tileEl);
    });
  };

  // Discard Handler
  const handleDiscard = (tileIdx, index, tileEl) => {
    // Toggle active discard style
    const allTiles = document.querySelectorAll('#trainer-hand .tile-cyber');
    allTiles.forEach(t => t.classList.remove('active-discard'));
    tileEl.classList.add('active-discard');
    activeDiscardIndex = index;

    const scenario = SCENARIOS[currentScenarioKey];
    const discardResult = scenario.discards[tileIdx] || scenario.discards.default;
    
    // Display results in panel
    const outputEl = document.getElementById('analysis-output');
    
    let waitsHTML = '';
    if (discardResult.shanten === 0 && discardResult.waits.length > 0) {
      waitsHTML = `
        <div class="analysis-row" style="margin-top: 10px;">
          <span>待ち牌 (Waits):</span>
          <div class="waiting-tiles-list">
            ${discardResult.waits.map(w => `<span class="waiting-tile-badge">${TILE_NAMES[w]}</span>`).join('')}
          </div>
        </div>
      `;
    }

    outputEl.innerHTML = `
      <div class="analysis-result-box">
        <div class="analysis-row">
          <span>打牌 (Discard):</span>
          <span class="analysis-val text-pink font-orbitron">${TILE_NAMES[tileIdx]}</span>
        </div>
        <div class="analysis-row">
          <span>向聴数 (Shanten):</span>
          <span class="analysis-val text-cyan font-orbitron">${discardResult.shanten === 0 ? 'テンパイ (0)' : discardResult.shanten + ' 向聴'}</span>
        </div>
        <div class="analysis-row">
          <span>評価 (Rating):</span>
          <span class="analysis-val text-gold">${discardResult.rating}</span>
        </div>
        <p class="best-discard-suggestion" style="margin-top: 10px;">
          ${discardResult.text}
        </p>
        ${waitsHTML}
      </div>
    `;
  };

  // Scenario Buttons click
  const scenarioBtns = document.querySelectorAll('.btn-scenario');
  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentScenarioKey = btn.getAttribute('data-scenario');
      
      // Clear analysis panel & resets
      activeDiscardIndex = null;
      document.getElementById('analysis-output').innerHTML = `
        <p class="neutral-message">手牌から牌を選択して、打牌した結果の向聴数（シャンテン数）と待ち牌を表示します。</p>
      `;
      
      loadTrainer();
    });
  });

  // AI Tab Buttons click
  const aiTabBtns = document.querySelectorAll('.ai-tab-btn');
  const aiExEl = document.querySelector('.ai-explanation');
  const aiExps = {
    easy: "<strong>Lv1 AIの思考:</strong> 手牌効率やスジは考慮せず、ランダムな打牌を優先します。安全牌読みも行いません。",
    normal: "<strong>Lv2 AIの思考:</strong> 14枚の選択肢すべての向聴数を計算し、向聴数が最も少なくなる（牌効率最大）打牌を自動選択します。",
    hard: "<strong>Lv3 AIの思考:</strong> 牌効率を最適化しつつ、ドラ表示牌の価値を高く見積もります。相手が立直した場合は、現物（安全牌）を最優先で切る防御システムを起動します。",
    reinforced: "<strong>Lv4 強化脳:</strong> 34枚の重みパラメータを持つTD強化学習モデル。学習済みの高スコア牌を大事に抱え、危険度の高い牌を的確に見抜きます。"
  };

  aiTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      aiTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAiLevel = btn.getAttribute('data-ai');
      aiExEl.innerHTML = aiExps[currentAiLevel];
      
      loadTrainer();
    });
  });

  // Initialize trainer
  loadTrainer();


  // ==========================================
  // 4. TD-LEARNING WEIGHT MATRIX & SIMULATOR
  // ==========================================
  const weightsContainer = document.getElementById('weights-grid-container');
  
  // Set default initial weights for 34 tiles (mostly close to 0, some high and low)
  let weights = Array(34).fill(0).map((_, idx) => {
    // Generate realistic starting weights
    // Red dragons, East wind, Dora indicators usually get positive weights through learning
    if (idx === 33) return 4.25;  // 中 (Chun) - Yaku value
    if (idx === 32) return 3.80;  // 發 (Hatsu)
    if (idx === 27) return 3.20;  // 東 (East wind)
    if (idx === 13) return 2.80;  // 5p (dora potential)
    if (idx === 22) return 3.10;  // 5s (dora potential)
    if (idx === 0) return 0.50;   // 1m
    if (idx === 8) return 0.40;   // 9m
    
    // Middle tiles (3-7) have higher tile efficiency weights
    const val = idx % 9;
    if (idx >= 9 && idx <= 26) {
      if (val >= 2 && val <= 6) { // 3 to 7
        return 1.8 + Math.random() * 0.5;
      }
      return 0.2 + Math.random() * 0.4;
    }
    
    return -1.0 + Math.random() * 1.5; // isolated winds / dragons
  });

  // Render weights matrix grid
  const renderWeightsGrid = () => {
    if (!weightsContainer) return;
    weightsContainer.innerHTML = '';
    
    // We only display the 27 valid Sanma tiles in the visualizer grid for better readability
    VALID_UNIQUE_TILES.forEach(idx => {
      const tileName = TILE_NAMES[idx];
      const weight = weights[idx];
      
      const cell = document.createElement('div');
      cell.className = 'weight-cell';
      
      // Determine color intensity based on weight value
      // Clamp values between -3.0 and 6.0
      let opacity = 0.1;
      let borderGlow = 'rgba(255,255,255,0.08)';
      let weightColor = 'var(--text-secondary)';
      
      if (weight > 0) {
        opacity = Math.min(weight / 6.0, 1.0);
        cell.style.background = `rgba(219, 39, 119, ${opacity * 0.4})`; // pink glow
        borderGlow = `rgba(219, 39, 119, ${opacity * 0.7})`;
        weightColor = '#ec4899';
      } else {
        opacity = Math.min(Math.abs(weight) / 3.0, 1.0);
        cell.style.background = `rgba(0, 240, 255, ${opacity * 0.25})`; // cyan glow
        borderGlow = `rgba(0, 240, 255, ${opacity * 0.5})`;
        weightColor = '#22d3ee';
      }
      
      cell.style.borderColor = borderGlow;
      
      cell.innerHTML = `
        <span class="cell-tile-name">${tileName}</span>
        <span class="cell-tile-weight" style="color: ${weightColor}">${weight.toFixed(2)}</span>
      `;
      
      weightsContainer.appendChild(cell);
    });
  };

  // Initial weights render
  renderWeightsGrid();

  // Simulation Logic
  const startSimBtn = document.getElementById('btn-start-sim');
  const simGamesEl = document.getElementById('sim-games');
  const simWinRateEl = document.getElementById('sim-win-rate');
  const simAvgPtsEl = document.getElementById('sim-avg-pts');
  const simSpeedEl = document.getElementById('sim-speed');
  const simLogEl = document.getElementById('sim-log');
  
  let simInterval = null;
  let simulatedGames = 0;
  let simulatedWins = 0;
  let simulatedTotalPoints = 0;

  const runSimStep = () => {
    // Generate 5-15 mock matches per step
    const steps = Math.floor(Math.random() * 10) + 5;
    simulatedGames += steps;
    
    // Simulate learning rate updates on a few random tiles
    for (let step = 0; step < steps; step++) {
      const isWin = Math.random() < 0.24; // ~24% win rate
      if (isWin) {
        simulatedWins++;
        // Generate random points (Tsumo/Ron score)
        const pts = [2000, 3900, 5200, 8000, 12000][Math.floor(Math.random() * 5)];
        simulatedTotalPoints += pts;

        // Reward a few tiles in the hand
        for (let i = 0; i < 3; i++) {
          const randTile = VALID_UNIQUE_TILES[Math.floor(Math.random() * VALID_UNIQUE_TILES.length)];
          // TD learning reward step: W = W + alpha * TD_error
          weights[randTile] += 0.08 + Math.random() * 0.05;
          if (weights[randTile] > 6.0) weights[randTile] = 6.0; // clamp max
        }
      } else {
        // Punish a few tiles that might lead to 放銃 (deals into win)
        if (Math.random() < 0.3) {
          const randTile = VALID_UNIQUE_TILES[Math.floor(Math.random() * VALID_UNIQUE_TILES.length)];
          weights[randTile] -= 0.05 + Math.random() * 0.04;
          if (weights[randTile] < -3.0) weights[randTile] = -3.0; // clamp min
        }
      }
    }

    // Update displays
    simGamesEl.textContent = simulatedGames;
    const wr = (simulatedWins / simulatedGames) * 100;
    simWinRateEl.textContent = wr.toFixed(1) + '%';
    
    const avgPts = simulatedWins > 0 ? Math.floor(simulatedTotalPoints / simulatedWins) : 0;
    simAvgPtsEl.textContent = avgPts;

    // Log messages
    const logMsgs = [
      `[SIM] Game #${simulatedGames}: AI self-play finished. Winner: AI Player 1 (+3900 pts with Tanyao).`,
      `[SIM] Temporal Difference update: computed state value matrix. Loss: ${(Math.random() * 0.05).toFixed(4)}`,
      `[SIM] Weight values shifted: 5p, East wind, Chun dragon gained value.`,
      `[SIM] Game #${simulatedGames + 4}: AI Player 2 won by Ron on 9s (+8000 pts with Chinitsu).`,
      `[SIM] Safety index optimization: evaluated defensive discard heuristics.`,
      `[SIM] Learning rates synchronized: alpha = 0.015, gamma = 0.95`
    ];
    
    const logLine = document.createElement('div');
    logLine.textContent = logMsgs[Math.floor(Math.random() * logMsgs.length)];
    simLogEl.appendChild(logLine);
    
    // Keep log short
    while (simLogEl.children.length > 20) {
      simLogEl.removeChild(simLogEl.firstChild);
    }
    simLogEl.scrollTop = simLogEl.scrollHeight;

    // Redraw grid
    renderWeightsGrid();
  };

  if (startSimBtn) {
    startSimBtn.addEventListener('click', () => {
      const isRunning = startSimBtn.classList.contains('running');
      
      if (isRunning) {
        // Stop
        clearInterval(simInterval);
        simInterval = null;
        startSimBtn.classList.remove('running');
        startSimBtn.innerHTML = '<i class="fa-solid fa-play"></i> 自己対局シミュレーションを開始';
        simSpeedEl.textContent = 'PAUSED';
        simSpeedEl.style.backgroundColor = 'transparent';
        simSpeedEl.style.color = 'var(--text-muted)';
        
        const logLine = document.createElement('div');
        logLine.style.color = 'var(--neon-pink)';
        logLine.textContent = '[SYSTEM] Simulation paused. Current TD state weights saved to simulator memory.';
        simLogEl.appendChild(logLine);
        simLogEl.scrollTop = simLogEl.scrollHeight;
      } else {
        // Start
        startSimBtn.classList.add('running');
        startSimBtn.innerHTML = '<i class="fa-solid fa-pause"></i> シミュレーションを停止';
        simSpeedEl.textContent = 'RUNNING (60 FPS)';
        simSpeedEl.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
        simSpeedEl.style.color = 'var(--neon-emerald)';
        
        const logLine = document.createElement('div');
        logLine.style.color = 'var(--neon-cyan)';
        logLine.textContent = '[SYSTEM] Parallel training simulation threads initialized. Starting neural feedback loops...';
        simLogEl.appendChild(logLine);
        simLogEl.scrollTop = simLogEl.scrollHeight;

        simInterval = setInterval(runSimStep, 150);
      }
    });
  }

});
