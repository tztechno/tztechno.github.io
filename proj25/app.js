/* ==========================================================
   CYBER NOCCANOCCA LANDING PAGE JAVASCRIPT
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Systems
  initThemeSystem();
  initParticleSystem();
  initFaqAccordion();
  initNoccanSimulator();
});

/* ----------------------------------------------------------
   1. THEME SWITCHING & PERSISTENCE
   ---------------------------------------------------------- */
function initThemeSystem() {
  const themeButtons = document.querySelectorAll('.theme-btn');
  const body = document.body;

  // Load theme from localStorage or default to 'cyber'
  const savedTheme = localStorage.getItem('cyber_noccan_theme') || 'cyber';
  setTheme(savedTheme);

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme');
      setTheme(targetTheme);
    });
  });

  function setTheme(themeName) {
    // Remove old classes
    body.classList.remove('theme-cyber', 'theme-classic', 'theme-dark');
    
    // Add target class
    body.classList.add(`theme-${themeName}`);

    // Update buttons active status
    themeButtons.forEach(btn => {
      if (btn.getAttribute('data-theme') === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Save to localStorage
    localStorage.setItem('cyber_noccan_theme', themeName);
  }
}

/* ----------------------------------------------------------
   2. AMBIENT CANVAS PARTICLE NETWORK
   ---------------------------------------------------------- */
function initParticleSystem() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particleCount = 60;
  const connectionDistance = 120;
  const mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse push back
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x += (dx / distance) * force * 1.5;
          this.y += (dy / distance) * force * 1.5;
        }
      }
    }

    draw() {
      const accentColor = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#00f2ff';
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Generate Particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    const accentColor = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#00f2ff';
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance < connectionDistance) {
          const alpha = ((connectionDistance - distance) / connectionDistance) * 0.15;
          ctx.strokeStyle = hexToRgba(accentColor, alpha);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  function hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  animate();
}

/* ----------------------------------------------------------
   3. FAQ ACCORDION COLLAPSE SYSTEM
   ---------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Collapse all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-panel').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

/* ----------------------------------------------------------
   4. WEBAUDIO RENDER CONTROLLER
   ---------------------------------------------------------- */
class DemoSoundController {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  play(type) {
    if (this.muted) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;

      if (type === 'select') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'deselect') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(293.66, now); // D4
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'move') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(329.63, now); // E4
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.2); // E5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'stack') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(392.00, now); // G4
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.22); // G5
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1174.66, now); // D6
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        gain2.gain.setValueAtTime(0.03, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc2.start(now);
        osc2.stop(now + 0.15);

        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110.00, now); // A2
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'victory') {
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C Major Chord
        const tempo = 0.08;
        notes.forEach((freq, idx) => {
          const o = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          o.type = 'sine';
          o.frequency.setValueAtTime(freq, now + idx * tempo);
          g.gain.setValueAtTime(0.06, now + idx * tempo);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * tempo + 0.2);
          o.connect(g);
          g.connect(this.ctx.destination);
          o.start(now + idx * tempo);
          o.stop(now + idx * tempo + 0.22);
        });
      }
    } catch (e) {
      console.warn("AudioContext failed: ", e);
    }
  }
}

/* ----------------------------------------------------------
   5. INTERACTIVE 4x4 NOCCA NOCCA SIMULATOR
   ---------------------------------------------------------- */
function initNoccanSimulator() {
  const boardEl = document.getElementById('demo-board');
  const logsEl = document.getElementById('demo-logs');
  const resetBtn = document.getElementById('demo-reset-btn');
  const soundBtn = document.getElementById('demo-sound-btn');
  const soundText = document.getElementById('demo-sound-text');
  const statusMsg = document.getElementById('demo-status-message');
  const modeIndicator = document.getElementById('demo-mode-indicator');

  if (!boardEl) return;

  const sounds = new DemoSoundController();

  // Board representation: board[row][col] = Array of pieces, [bottom -> top]
  // Player 1 (Blue) = 1, Player 2 (Red) = 2
  let board = [];
  let turn = 1; // 1 for Player 1, 2 for Player 2 (AI)
  let phase = 'setup-p1'; // 'setup-p1' | 'setup-p2' | 'playing' | 'gameover'
  let selectedCell = null; // { r, c }
  let logCount = 0;
  let isTransitioning = false; // block clicks during AI turn or move animations

  // Initialize Match
  function resetSimulator() {
    board = Array(5).fill(null).map(() => Array(5).fill(null).map(() => []));

    // Player 2 starting row is row 0 (top)
    for (let c = 0; c < 5; c++) {
      board[0][c] = [2];
    }
    // Player 1 starting row is row 4 (bottom)
    for (let c = 0; c < 5; c++) {
      board[4][c] = [1];
    }

    turn = 1;
    phase = 'setup-p1';
    selectedCell = null;
    logCount = 0;
    isTransitioning = false;

    logsEl.innerHTML = '';
    addLog('System reset. Awaiting P1 setup.', 'muted');
    statusMsg.textContent = '最下段（青）の駒のどれかに6枚目の駒を重ねてください。';
    statusMsg.className = 'demo-feedback';
    modeIndicator.textContent = 'P1 SETUP PHASE';
    modeIndicator.classList.remove('player2-turn');

    renderBoard();
  }

  // Add line to the mockup console log
  function addLog(text, className = '') {
    logCount++;
    const line = document.createElement('div');
    line.className = `log-line ${className}`;
    line.textContent = `[SYS_${String(logCount).padStart(2, '0')}] ${text}`;
    logsEl.appendChild(line);
    logsEl.scrollTop = logsEl.scrollHeight;
  }

  // Convert row/col to algebraic notation A1-E5
  function getCoordName(r, c) {
    const cols = ['A', 'B', 'C', 'D', 'E'];
    const rows = ['5', '4', '3', '2', '1']; // row 0 is 5, row 4 is 1
    return cols[c] + rows[r];
  }

  // Draw board grid
  function renderBoard() {
    boardEl.innerHTML = '';

    const isAITurn = (phase === 'playing' && turn === 2) || (phase === 'setup-p2');

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const cell = document.createElement('div');
        cell.className = 'noccan-cell-demo';
        if (r === 0) cell.classList.add('p1-goal-line');
        if (r === 4) cell.classList.add('p2-goal-line');

        const stack = board[r][c];

        // Draw selection and legal move highlights
        if (selectedCell && selectedCell.r === r && selectedCell.c === c) {
          cell.classList.add('selected');
        }

        if (selectedCell && !isAITurn) {
          const legalTargets = getLegalMoves(selectedCell.r, selectedCell.c, board);
          const isTarget = legalTargets.some(t => t.r === r && t.c === c);
          if (isTarget) {
            cell.classList.add('legal-target');
          }
        }

        // Draw pieces stacked inside cell
        if (stack.length > 0) {
          const pieceStack = document.createElement('div');
          pieceStack.className = 'piece-stack-demo';

          stack.forEach((player, idx) => {
            const piece = document.createElement('div');
            piece.className = `piece-layer-demo p${player} layer-${idx}`;

            const isTop = (idx === stack.length - 1);
            const isMyPiece = (player === turn);

            if (isTop && isMyPiece && !isAITurn && phase === 'playing') {
              piece.classList.add('selectable');
              if (selectedCell && selectedCell.r === r && selectedCell.c === c) {
                piece.classList.add('selected');
              }
            }

            pieceStack.appendChild(piece);
          });

          cell.appendChild(pieceStack);

          // Add stack height badge if height > 1
          if (stack.length > 1) {
            const badge = document.createElement('div');
            badge.className = 'stack-badge-demo';
            badge.textContent = `H:${stack.length}`;
            cell.appendChild(badge);
          }
        }

        // Handle cell clicks
        cell.addEventListener('click', () => handleCellClick(r, c));
        boardEl.appendChild(cell);
      }
    }
  }

  // Handle cell selection and movement clicks
  function handleCellClick(r, c) {
    if (isTransitioning) return;
    const isAITurn = (phase === 'playing' && turn === 2) || (phase === 'setup-p2');
    if (isAITurn) return; // block clicks on AI turn

    const stack = board[r][c];

    // 1. SETUP PHASE: Player 1 (Blue) stacks their 6th piece
    if (phase === 'setup-p1') {
      if (r === 4 && stack.length === 1 && stack[0] === 1) {
        stack.push(1);
        sounds.play('stack');
        addLog(`P1 Setup: Stacked 6th piece on ${getCoordName(r, c)}`, 'p1');
        phase = 'setup-p2';
        turn = 2;
        modeIndicator.textContent = 'P2 SETUP PHASE';
        modeIndicator.classList.add('player2-turn');
        statusMsg.textContent = '相手（赤）がセットアップしています...';
        renderBoard();
        
        // Trigger AI Setup
        isTransitioning = true;
        setTimeout(executeAISetup, 800);
      } else {
        sounds.play('error');
        statusMsg.textContent = '最下段（青）のいずれか1マスを重ねてください！';
        statusMsg.className = 'demo-feedback error';
      }
      return;
    }

    // 2. PLAYING PHASE
    if (phase === 'playing') {
      const topPieceOwner = stack.length > 0 ? stack[stack.length - 1] : null;

      // Select piece
      if (topPieceOwner === 1) {
        if (selectedCell && selectedCell.r === r && selectedCell.c === c) {
          selectedCell = null;
          sounds.play('deselect');
        } else {
          selectedCell = { r, c };
          sounds.play('select');
        }
        renderBoard();
      }
      // Move piece to clicked target cell
      else if (selectedCell) {
        const legalTargets = getLegalMoves(selectedCell.r, selectedCell.c, board);
        const isLegal = legalTargets.some(t => t.r === r && t.c === c);

        if (isLegal) {
          executeMove(selectedCell.r, selectedCell.c, r, c);
        } else {
          selectedCell = null;
          sounds.play('error');
          renderBoard();
        }
      }
    }
  }

  // AI Setup Action
  function executeAISetup() {
    // Choose a random column on row 0 to stack the 6th piece
    const col = Math.floor(Math.random() * 5);
    board[0][col].push(2);
    sounds.play('stack');
    addLog(`P2 Setup: Stacked 6th piece on ${getCoordName(0, col)}`, 'p2');
    
    phase = 'playing';
    turn = 1;
    isTransitioning = false;

    modeIndicator.textContent = 'PLAYER 1 TURN';
    modeIndicator.classList.remove('player2-turn');
    statusMsg.textContent = 'あなたのターンです。青い駒を動かしてください。';
    renderBoard();
  }

  // Move Execution
  function executeMove(fromR, fromC, toR, toC) {
    isTransitioning = true;
    selectedCell = null;

    const fromCellDom = boardEl.children[fromR * 5 + fromC];
    const toCellDom = boardEl.children[toR * 5 + toC];
    const pieceDom = fromCellDom.querySelector('.piece-layer-demo:last-child');

    const executeStateChange = () => {
      const piece = board[fromR][fromC].pop();
      const targetStack = board[toR][toC];
      const isStack = targetStack.length > 0;

      targetStack.push(piece);

      if (isStack) {
        sounds.play('stack');
        addLog(`P${piece} Move: ${getCoordName(fromR, fromC)} → ${getCoordName(toR, toC)} (重ね)`, piece === 1 ? 'p1' : 'p2');
      } else {
        sounds.play('move');
        addLog(`P${piece} Move: ${getCoordName(fromR, fromC)} → ${getCoordName(toR, toC)}`, piece === 1 ? 'p1' : 'p2');
      }

      // Check win condition
      const winnerState = checkWin(board, turn);
      if (winnerState) {
        phase = 'gameover';
        sounds.play('victory');
        renderBoard();
        
        if (winnerState.winner === 1) {
          addLog(`PLAYER 1 (青) の勝利！ 原因: ${winnerState.cause === 'goal' ? '最奥到達' : '相手の手詰まり'}`, 'p1');
          statusMsg.textContent = `VICTORY! 青の勝利です（${winnerState.cause === 'goal' ? 'ゴール到達' : '相手の全ブロック'}）`;
          statusMsg.className = 'demo-feedback success';
        } else {
          addLog(`PLAYER 2 (赤/AI) の勝利！ 原因: ${winnerState.cause === 'goal' ? '最奥到達' : '相手の手詰まり'}`, 'p2');
          statusMsg.textContent = `DEFEAT! 赤(AI)の勝利です（${winnerState.cause === 'goal' ? 'ゴール到達' : '全ブロック'}）`;
          statusMsg.className = 'demo-feedback error';
        }

        modeIndicator.textContent = 'GAME OVER';
        isTransitioning = false;
        return;
      }

      // Switch turn
      turn = turn === 1 ? 2 : 1;

      if (turn === 1) {
        modeIndicator.textContent = 'PLAYER 1 TURN';
        modeIndicator.classList.remove('player2-turn');
        statusMsg.textContent = 'あなたのターンです。青い駒を動かしてください。';
        isTransitioning = false;
        renderBoard();
      } else {
        modeIndicator.textContent = 'PLAYER 2 (AI) TURN';
        modeIndicator.classList.add('player2-turn');
        statusMsg.textContent = '相手（AI）が思考中...';
        renderBoard();
        
        // Trigger AI opponent move with delay
        setTimeout(executeAIMove, 700);
      }
    };

    if (pieceDom) {
      // 3D displacement animation
      const fromRect = fromCellDom.getBoundingClientRect();
      const toRect = toCellDom.getBoundingClientRect();
      const dx = toRect.left - fromRect.left;
      const dy = toRect.top - fromRect.top;

      pieceDom.style.transition = 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      pieceDom.style.zIndex = '999';
      pieceDom.style.transform = `translate(${dx}px, ${dy}px) scale(1.1)`;

      setTimeout(executeStateChange, 350);
    } else {
      executeStateChange();
    }
  }

  // AI Decision Engine using Minimax
  function executeAIMove() {
    if (phase !== 'playing') return;

    // Search best move for Player 2 (Red) using depth 3 (fast, intelligent enough for 4x4)
    const bestMove = findBestMove(board, 2, 3);

    if (bestMove) {
      executeMove(bestMove.from.r, bestMove.from.c, bestMove.to.r, bestMove.to.c);
    } else {
      // Red has no legal moves -> blockade victory for Player 1
      phase = 'gameover';
      sounds.play('victory');
      addLog("PLAYER 2 (AI) に合法手がありません。PLAYER 1 (青) の手詰まり勝利！", "p1");
      statusMsg.textContent = "VICTORY! 相手を動けなくしたため、青の勝利です！";
      statusMsg.className = "demo-feedback success";
      modeIndicator.textContent = "GAME OVER";
      renderBoard();
      isTransitioning = false;
    }
  }

  // ----------------------- AI CORE SEARCH UTILS -----------------------

  // Get all legal moves for a given player on a given board state
  function getLegalMoves(r, c, stateBoard) {
    const stack = stateBoard[r][c];
    if (stack.length === 0) return [];
    
    const topPiece = stack[stack.length - 1];
    const moves = [];

    // 8 directions
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;

        const nr = r + dr;
        const nc = c + dc;

        if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
          const targetStack = stateBoard[nr][nc];
          // Height limit of 3
          if (targetStack.length < 3) {
            moves.push({ r: nr, c: nc });
          }
        }
      }
    }
    return moves;
  }

  // Get all legal moves for a given player on the board state
  function getAllLegalMoves(stateBoard, player) {
    const moves = [];
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const stack = stateBoard[r][c];
        if (stack.length > 0 && stack[stack.length - 1] === player) {
          const cellMoves = getLegalMoves(r, c, stateBoard);
          cellMoves.forEach(target => {
            moves.push({
              from: { r, c },
              to: target
            });
          });
        }
      }
    }
    return moves;
  }

  // Check victory conditions
  function checkWin(stateBoard, activePlayer) {
    // 1. Goal Check: P1 wins if reach row 0. P2 wins if reach row 4
    for (let c = 0; c < 5; c++) {
      const stack = stateBoard[0][c];
      if (stack.length > 0 && stack[stack.length - 1] === 1) {
        return { winner: 1, cause: 'goal' };
      }
    }
    for (let c = 0; c < 5; c++) {
      const stack = stateBoard[4][c];
      if (stack.length > 0 && stack[stack.length - 1] === 2) {
        return { winner: 2, cause: 'goal' };
      }
    }

    // 2. Blockade Check: if the NEXT player has no moves, active player wins
    const nextPlayer = activePlayer === 1 ? 2 : 1;
    const nextMoves = getAllLegalMoves(stateBoard, nextPlayer);
    if (nextMoves.length === 0) {
      return { winner: activePlayer, cause: 'blockade' };
    }

    return null;
  }

  // Evaluate board score from P2's (Red) perspective (maximize Red, minimize Blue)
  function evaluateBoard(stateBoard) {
    let score = 0;

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const stack = stateBoard[r][c];
        if (stack.length === 0) continue;

        const len = stack.length;
        for (let i = 0; i < len; i++) {
          const player = stack[i];
          const isTop = (i === len - 1);

          if (player === 2) {
            // P2 wants to move DOWN (row 4). Closer is better.
            let val = r * 20;

            if (isTop) {
              val += 40; // can move
              if (len > 1 && stack[i - 1] === 1) {
                val += 80; // trapping blue piece
              }
            } else {
              val -= 20; // trapped
            }
            score += val;
          } else {
            // P1 wants to move UP (row 0). Closer is better.
            let val = (4 - r) * 20;

            if (isTop) {
              val += 40;
              if (len > 1 && stack[i - 1] === 2) {
                val += 80; // trapping red piece
              }
            } else {
              val -= 20;
            }
            score -= val;
          }
        }
      }
    }
    return score;
  }

  // Minimax with alpha-beta pruning
  function minimax(stateBoard, depth, alpha, beta, isMaximizing, activePlayer) {
    const winResult = checkWin(stateBoard, activePlayer);
    if (winResult) {
      if (winResult.winner === 2) return 100000 + depth; // P2 (AI) win
      if (winResult.winner === 1) return -100000 - depth; // P1 win
    }

    if (depth === 0) {
      return evaluateBoard(stateBoard);
    }

    const nextPlayer = activePlayer === 1 ? 2 : 1;

    if (isMaximizing) {
      let maxEval = -Infinity;
      const moves = getAllLegalMoves(stateBoard, 2);
      
      // Sort: prefer moves moving down (towards row 3)
      moves.sort((a, b) => b.to.r - a.to.r);

      for (const move of moves) {
        const fromStack = stateBoard[move.from.r][move.from.c];
        const toStack = stateBoard[move.to.r][move.to.c];
        const piece = fromStack.pop();
        toStack.push(piece);

        const evaluation = minimax(stateBoard, depth - 1, alpha, beta, false, nextPlayer);

        toStack.pop();
        fromStack.push(piece);

        maxEval = Math.max(maxEval, evaluation);
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) break;
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      const moves = getAllLegalMoves(stateBoard, 1);
      
      // Sort: prefer moves moving up (towards row 0)
      moves.sort((a, b) => a.to.r - b.to.r);

      for (const move of moves) {
        const fromStack = stateBoard[move.from.r][move.from.c];
        const toStack = stateBoard[move.to.r][move.to.c];
        const piece = fromStack.pop();
        toStack.push(piece);

        const evaluation = minimax(stateBoard, depth - 1, alpha, beta, true, nextPlayer);

        toStack.pop();
        fromStack.push(piece);

        minEval = Math.min(minEval, evaluation);
        beta = Math.min(beta, evaluation);
        if (beta <= alpha) break;
      }
      return minEval;
    }
  }

  // Find the best move for active player using minimax
  function findBestMove(stateBoard, player, depth) {
    const moves = getAllLegalMoves(stateBoard, player);
    if (moves.length === 0) return null;

    let bestMove = null;

    if (player === 2) {
      let maxEval = -Infinity;
      const candidates = [];

      for (const move of moves) {
        const fromStack = stateBoard[move.from.r][move.from.c];
        const toStack = stateBoard[move.to.r][move.to.c];
        const piece = fromStack.pop();
        toStack.push(piece);

        const val = minimax(stateBoard, depth - 1, -Infinity, Infinity, false, 1);

        toStack.pop();
        fromStack.push(piece);

        if (val > maxEval) {
          maxEval = val;
          candidates.length = 0; // clear candidates
          candidates.push(move);
        } else if (val === maxEval) {
          candidates.push(move);
        }
      }
      // Pick a random candidate from top optimal ones to increase replay variety
      bestMove = candidates[Math.floor(Math.random() * candidates.length)];
    }
    return bestMove;
  }

  // Bind UI Controls
  resetBtn.addEventListener('click', () => {
    sounds.play('select');
    resetSimulator();
  });

  soundBtn.addEventListener('click', () => {
    sounds.muted = !sounds.muted;
    if (sounds.muted) {
      soundBtn.classList.add('muted');
      soundText.textContent = 'Sound OFF';
    } else {
      soundBtn.classList.remove('muted');
      soundText.textContent = 'Sound ON';
      sounds.play('select');
    }
  });

  // Setup initial board
  resetSimulator();
}
