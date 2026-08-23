document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // MOBILE NAVIGATION & ACCORDIONS
  // ==========================================
  
  // Mobile Nav Toggle
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");
  
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
    
    // Close nav menu on link click
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove("active");
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Glitch Text Scrambler Effect (subtle effect on main text)
  const glitchTitle = document.querySelector(".glitch-text");
  if (glitchTitle) {
    const originalText = glitchTitle.getAttribute("data-text");
    const glyphs = "01$#@%&?_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let scrambleInterval = null;
    
    function scramble() {
      let iteration = 0;
      clearInterval(scrambleInterval);
      
      scrambleInterval = setInterval(() => {
        glitchTitle.innerText = originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("");
        
        if (iteration >= originalText.length) {
          clearInterval(scrambleInterval);
          glitchTitle.innerText = originalText;
        }
        iteration += 1 / 3;
      }, 30);
    }
    
    // Scramble every 6 seconds
    setInterval(scramble, 6000);
    glitchTitle.addEventListener("mouseenter", scramble);
  }


  // ==========================================
  // PLAYABLE 3x3 MINI-GAME SYSTEM
  // ==========================================
  
  let miniScore = 0;
  let miniCombo = 0;
  let miniHighScore = parseInt(localStorage.getItem("lp_mini_high_score") || "0", 10);
  let miniIsPlaying = false;
  let miniTimeLeft = 20;
  let miniGameTimer = null;
  let miniMoleTimer = null;
  let miniActiveCellIndex = null;
  const miniCells = document.querySelectorAll(".mini-cell");
  const scoreDisplay = document.getElementById("mini-score");
  const comboDisplay = document.getElementById("mini-combo");
  const highScoreDisplay = document.getElementById("mini-high-score");
  const gameOverlay = document.getElementById("mini-game-overlay");
  const btnStartMini = document.getElementById("btn-start-mini");
  
  // Set initial highscore display
  highScoreDisplay.textContent = miniHighScore;
  
  // Event listeners for cells
  miniCells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (!miniIsPlaying) return;
      
      const index = parseInt(cell.getAttribute("data-index"), 10);
      if (index === miniActiveCellIndex) {
        whackMole(cell);
      } else {
        missMole(cell);
      }
    });
  });
  
  if (btnStartMini) {
    btnStartMini.addEventListener("click", startMiniGame);
  }
  
  function startMiniGame() {
    miniIsPlaying = true;
    miniScore = 0;
    miniCombo = 0;
    miniTimeLeft = 20;
    
    scoreDisplay.textContent = miniScore;
    comboDisplay.textContent = miniCombo;
    gameOverlay.style.opacity = "0";
    setTimeout(() => {
      gameOverlay.style.display = "none";
    }, 300);
    
    // Count down timer
    miniGameTimer = setInterval(() => {
      miniTimeLeft--;
      if (miniTimeLeft <= 0) {
        endMiniGame();
      }
    }, 1000);
    
    spawnMiniMole();
  }
  
  function spawnMiniMole() {
    if (!miniIsPlaying) return;
    
    // Remove previous mole styling
    miniCells.forEach(cell => {
      cell.classList.remove("has-mole");
    });
    
    // Choose random cell different from current
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * miniCells.length);
    } while (randomIndex === miniActiveCellIndex && miniCells.length > 1);
    
    miniActiveCellIndex = randomIndex;
    const activeCell = miniCells[miniActiveCellIndex];
    activeCell.classList.add("has-mole");
    
    // Set mole active duration (speeds up as score increases)
    // Starts at 1000ms down to 400ms
    const speed = Math.max(400, 1000 - miniScore * 8);
    
    clearTimeout(miniMoleTimer);
    miniMoleTimer = setTimeout(() => {
      // Mole disappeared without clicking
      if (activeCell.classList.contains("has-mole")) {
        activeCell.classList.remove("has-mole");
        miniActiveCellIndex = null;
        miniCombo = 0;
        comboDisplay.textContent = miniCombo;
        
        // Spawn next mole after delay
        setTimeout(spawnMiniMole, 300 + Math.random() * 500);
      }
    }, speed);
  }
  
  function whackMole(cell) {
    cell.classList.remove("has-mole");
    miniActiveCellIndex = null;
    clearTimeout(miniMoleTimer);
    
    // Score calculations
    const basePoints = 100;
    const comboMultiplier = 1 + Math.min(10, miniCombo) * 0.1; // Max +100% at 10 combo
    const pointsGained = Math.round(basePoints * comboMultiplier);
    
    miniScore += pointsGained;
    miniCombo++;
    
    scoreDisplay.textContent = miniScore;
    comboDisplay.textContent = miniCombo;
    
    // Visual flash green
    cell.classList.add("hit-effect");
    setTimeout(() => cell.classList.remove("hit-effect"), 250);
    
    // Spawn next mole
    setTimeout(spawnMiniMole, 100 + Math.random() * 200);
  }
  
  function missMole(cell) {
    miniCombo = 0;
    comboDisplay.textContent = miniCombo;
    
    // Subtract score
    miniScore = Math.max(0, miniScore - 50);
    scoreDisplay.textContent = miniScore;
    
    // Visual flash red
    cell.classList.add("miss-effect");
    setTimeout(() => cell.classList.remove("miss-effect"), 250);
  }
  
  function endMiniGame() {
    miniIsPlaying = false;
    clearInterval(miniGameTimer);
    clearTimeout(miniMoleTimer);
    
    // Clean up grids
    miniCells.forEach(cell => {
      cell.classList.remove("has-mole");
    });
    miniActiveCellIndex = null;
    
    // High Score updates
    if (miniScore > miniHighScore) {
      miniHighScore = miniScore;
      localStorage.setItem("lp_mini_high_score", miniHighScore.toString());
      highScoreDisplay.textContent = miniHighScore;
    }
    
    // Reset overlay
    gameOverlay.querySelector("h3").textContent = "SYNCHRONIZATION COMPLETED";
    gameOverlay.querySelector("p").innerHTML = `デモプレイ終了。<br>あなたのスコア: <strong class="accent-cyan" style="font-size: 1.25rem;">${miniScore}</strong> pts<br>コンボ最高数: <strong class="accent-magenta">${miniCombo}</strong>`;
    btnStartMini.textContent = "RE-BOOT SYSTEM";
    gameOverlay.style.display = "flex";
    setTimeout(() => {
      gameOverlay.style.opacity = "1";
    }, 50);
  }


  // ==========================================
  // LEVEL REFLEX SPEED SIMULATOR
  // ==========================================
  
  const simSlider = document.getElementById("sim-level-slider");
  const simLevelLbl = document.getElementById("sim-level-lbl");
  const simLevelDesc = document.getElementById("sim-level-desc");
  const simSpeedVal = document.getElementById("sim-speed-val");
  const simReactionVal = document.getElementById("sim-reaction-val");
  
  const simPad = document.getElementById("sim-pad");
  const simTarget = document.getElementById("sim-target");
  const simPrompt = document.getElementById("sim-prompt");
  const simResult = document.getElementById("sim-result");
  
  let currentSimLevel = 1;
  let targetSpawnTimer = null;
  let targetDisappearTimer = null;
  let targetSpawnTime = 0;
  let simActive = false;
  
  // Levels labels mapping
  function getLevelMeta(L) {
    let desc = "";
    if (L >= 1 && L <= 10) desc = "高齢者リハビリテーション級 (極めて易しい)";
    else if (L >= 11 && L <= 30) desc = "ビギナー級 (快適な脳トレ)";
    else if (L >= 31 && L <= 60) desc = "中級ネットランナー級 (心地よい挑戦)";
    else if (L >= 61 && L <= 80) desc = "上級サイバーハンター級 (高速反射バトル)";
    else if (L >= 81 && L <= 95) desc = "プロゲーマー限界級 (超人的スピード)";
    else desc = "人間限界超越級 (神々の反射速度 - 反応不能)";
    
    // Math formula: Tmax = 3000ms, Tmin = 150ms
    const Tmax = 3000;
    const Tmin = 150;
    const duration = Math.round(Tmax - (Tmax - Tmin) * Math.pow((L - 1) / 99, 1.5));
    
    return { desc, duration };
  }

  function updateSimDisplay() {
    currentSimLevel = parseInt(simSlider.value, 10);
    simLevelLbl.textContent = `LV. ${currentSimLevel}`;
    
    const meta = getLevelMeta(currentSimLevel);
    simLevelDesc.textContent = meta.desc;
    simSpeedVal.innerHTML = `${meta.duration}<span>ms</span>`;
    
    // Reset test pad
    resetSimPad();
  }
  
  if (simSlider) {
    simSlider.addEventListener("input", updateSimDisplay);
    updateSimDisplay(); // initial call
  }
  
  function resetSimPad() {
    clearTimeout(targetSpawnTimer);
    clearTimeout(targetDisappearTimer);
    simTarget.classList.remove("active");
    simPrompt.style.display = "block";
    simPrompt.innerHTML = "タップ / クリックして計測開始<br>(ターゲットが出現したら素早くWHACKしてください)";
    simResult.textContent = "";
    simActive = false;
  }
  
  if (simPad) {
    simPad.addEventListener("mousedown", (e) => {
      // Prevent double trigger if target itself is clicked
      if (e.target === simTarget) return;
      
      if (!simActive) {
        startSimCycle();
      } else {
        // Clicked pad before target appeared: penalty
        if (!simTarget.classList.contains("active")) {
          clearTimeout(targetSpawnTimer);
          simResult.style.color = "var(--cyber-magenta)";
          simResult.textContent = "ERR: お手付き (早すぎます)";
          simPrompt.style.display = "block";
          simActive = false;
          setTimeout(resetSimPad, 1500);
        }
      }
    });
  }
  
  if (simTarget) {
    simTarget.addEventListener("mousedown", (e) => {
      e.stopPropagation(); // prevent triggering parent simPad click
      if (simActive && simTarget.classList.contains("active")) {
        const clickTime = Date.now();
        const reflexTime = clickTime - targetSpawnTime;
        
        clearTimeout(targetDisappearTimer);
        simTarget.classList.remove("active");
        
        simResult.style.color = "var(--cyber-green)";
        simResult.innerHTML = `HIT! 反応速度: <strong style="font-size: 1.3rem;">${reflexTime}ms</strong>`;
        simReactionVal.innerHTML = `${reflexTime}<span>ms</span>`;
        
        simActive = false;
        setTimeout(resetSimPad, 2500);
      }
    });
  }
  
  function startSimCycle() {
    simActive = true;
    simPrompt.textContent = "スキャン中... ターゲット出現を待て...";
    simResult.textContent = "";
    
    const randomDelay = 800 + Math.random() * 1500; // 0.8s - 2.3s random delay
    
    targetSpawnTimer = setTimeout(() => {
      if (!simActive) return;
      
      simPrompt.style.display = "none";
      
      // Position target randomly inside pad boundaries
      const padWidth = simPad.clientWidth;
      const padHeight = simPad.clientHeight;
      const targetSize = 90;
      
      const maxX = padWidth - targetSize - 20;
      const maxY = padHeight - targetSize - 20;
      
      const randomX = Math.max(10, Math.floor(Math.random() * maxX));
      const randomY = Math.max(10, Math.floor(Math.random() * maxY));
      
      simTarget.style.left = `${randomX}px`;
      simTarget.style.top = `${randomY}px`;
      
      simTarget.classList.add("active");
      targetSpawnTime = Date.now();
      
      const currentDuration = getLevelMeta(currentSimLevel).duration;
      
      // Auto disappear after duration
      targetDisappearTimer = setTimeout(() => {
        if (simTarget.classList.contains("active")) {
          simTarget.classList.remove("active");
          simResult.style.color = "var(--cyber-magenta)";
          simResult.textContent = "MISS! (反応時間リミット超過)";
          simReactionVal.innerHTML = `--<span>ms</span>`;
          simActive = false;
          setTimeout(resetSimPad, 2000);
        }
      }, currentDuration);
      
    }, randomDelay);
  }
  
});
