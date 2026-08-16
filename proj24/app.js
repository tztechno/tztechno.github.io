/* ==========================================================
   CYBER SUDOKU LANDING PAGE JAVASCRIPT
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Systems
  initThemeSystem();
  initParticleSystem();
  initFaqAccordion();
  initDemoGrid();
});

/* ----------------------------------------------------------
   1. THEME SWITCHING & PERSISTENCE
   ---------------------------------------------------------- */
function initThemeSystem() {
  const themeButtons = document.querySelectorAll('.theme-btn');
  const body = document.body;

  // Load theme from localStorage or default to 'cyber'
  const savedTheme = localStorage.getItem('cyber_sudoku_theme') || 'cyber';
  setTheme(savedTheme);

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme');
      setTheme(targetTheme);
    });
  });

  function setTheme(themeName) {
    // Remove old theme classes
    body.classList.remove('theme-cyber', 'theme-classic', 'theme-dark');
    
    // Add target theme class
    body.classList.add(`theme-${themeName}`);

    // Update active state in buttons
    themeButtons.forEach(btn => {
      if (btn.getAttribute('data-theme') === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Save to localStorage
    localStorage.setItem('cyber_sudoku_theme', themeName);
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

  const particleCount = 65;
  const connectionDistance = 110;
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
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactive push/pull
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
      // Color matches the current active accent color dynamically
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

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connecting lines
    const accentColor = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#00f2ff';
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance < connectionDistance) {
          const alpha = (connectionDistance - distance) / connectionDistance * 0.18;
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

  // Convert HEX to RGBA string
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

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

/* ----------------------------------------------------------
   4. INTERACTIVE SUDOKU MOCKUP DEMO
   ---------------------------------------------------------- */
function initDemoGrid() {
  const gridContainer = document.getElementById('demo-grid');
  const feedbackMessage = document.getElementById('demo-status-message');
  const checkBtn = document.getElementById('demo-check-btn');
  const resetBtn = document.getElementById('demo-reset-btn');
  const keypadKeys = document.querySelectorAll('.demo-key-btn');

  if (!gridContainer) return;

  // Classic easy Sudoku Grid definition
  const initialGrid = [
    [5, 3, 0,  0, 7, 0,  0, 0, 0],
    [6, 0, 0,  1, 9, 5,  0, 0, 0],
    [0, 9, 8,  0, 0, 0,  0, 6, 0],

    [8, 0, 0,  0, 6, 0,  0, 0, 3],
    [4, 0, 0,  8, 0, 3,  0, 0, 1],
    [7, 0, 0,  0, 2, 0,  0, 0, 6],

    [0, 6, 0,  0, 0, 0,  2, 8, 0],
    [0, 0, 0,  4, 1, 9,  0, 0, 5],
    [0, 0, 0,  0, 8, 0,  0, 7, 9]
  ];

  const solutionGrid = [
    [5, 3, 4,  6, 7, 8,  9, 1, 2],
    [6, 7, 2,  1, 9, 5,  3, 4, 8],
    [1, 9, 8,  3, 4, 2,  5, 6, 7],

    [8, 5, 9,  7, 6, 1,  4, 2, 3],
    [4, 2, 6,  8, 5, 3,  7, 9, 1],
    [7, 1, 3,  9, 2, 4,  8, 5, 6],

    [9, 6, 1,  5, 3, 7,  2, 8, 4],
    [2, 8, 7,  4, 1, 9,  6, 3, 5],
    [3, 4, 5,  2, 8, 6,  1, 7, 9]
  ];

  let currentGrid = JSON.parse(JSON.stringify(initialGrid));
  let selectedCellIndex = null;

  // Build grid DOM
  function buildGrid() {
    gridContainer.innerHTML = '';
    
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = currentGrid[r][c];
        const isGiven = initialGrid[r][c] !== 0;

        const cell = document.createElement('div');
        cell.classList.add('sudoku-cell-demo');
        cell.setAttribute('data-row', r);
        cell.setAttribute('data-col', c);
        
        if (isGiven) {
          cell.classList.add('given');
          cell.textContent = val;
        } else if (val !== 0) {
          cell.classList.add('user-filled');
          cell.textContent = val;
        }

        cell.addEventListener('click', () => handleCellSelect(r * 9 + c));
        gridContainer.appendChild(cell);
      }
    }
  }

  function handleCellSelect(index) {
    const r = Math.floor(index / 9);
    const c = index % 9;

    // Do not select given numbers
    if (initialGrid[r][c] !== 0) return;

    selectedCellIndex = index;
    const cells = gridContainer.querySelectorAll('.sudoku-cell-demo');
    cells.forEach((cell, idx) => {
      if (idx === index) {
        cell.classList.add('selected');
      } else {
        cell.classList.remove('selected');
      }
    });

    feedbackMessage.className = 'demo-feedback';
    feedbackMessage.textContent = `座標 R${r+1}C${c+1} が選択されました。数字を入力してください。`;
  }

  function handleInput(val) {
    if (selectedCellIndex === null) {
      feedbackMessage.className = 'demo-feedback error';
      feedbackMessage.textContent = '入力先セルを選択してください。';
      return;
    }

    const r = Math.floor(selectedCellIndex / 9);
    const c = selectedCellIndex % 9;

    if (initialGrid[r][c] !== 0) return;

    currentGrid[r][c] = val;
    buildGrid();
    
    // Maintain selection styling
    const cells = gridContainer.querySelectorAll('.sudoku-cell-demo');
    cells[selectedCellIndex].classList.add('selected');

    // Cyber beep mock (visually show response)
    feedbackMessage.className = 'demo-feedback';
    if (val === 0) {
      feedbackMessage.textContent = `セル値をクリアしました。`;
    } else {
      feedbackMessage.textContent = `セルに [${val}] を入力しました。`;
    }
  }

  // Bind key inputs
  window.addEventListener('keydown', (e) => {
    if (selectedCellIndex === null) return;
    
    if (e.key >= '1' && e.key <= '9') {
      handleInput(parseInt(e.key));
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      handleInput(0);
    }
  });

  // Bind keypad inputs
  keypadKeys.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.id === 'demo-erase-btn') {
        handleInput(0);
      } else {
        const val = parseInt(btn.getAttribute('data-val'));
        handleInput(val);
      }
    });
  });

  // Bind actions
  checkBtn.addEventListener('click', () => {
    const cells = gridContainer.querySelectorAll('.sudoku-cell-demo');
    let errors = 0;
    let complete = true;

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const idx = r * 9 + c;
        const val = currentGrid[r][c];

        cells[idx].classList.remove('incorrect');

        if (initialGrid[r][c] === 0 && val !== 0) {
          if (val !== solutionGrid[r][c]) {
            cells[idx].classList.add('incorrect');
            errors++;
          }
        } else if (val === 0) {
          complete = false;
        }
      }
    }

    if (errors > 0) {
      feedbackMessage.className = 'demo-feedback error';
      feedbackMessage.textContent = `検証失敗: グリッド内に ${errors} 箇所のデータ不整合を検出しました。`;
    } else if (complete) {
      feedbackMessage.className = 'demo-feedback success';
      feedbackMessage.textContent = '検証成功: 数独マトリクスの完全復号に成功しました！';
    } else {
      feedbackMessage.className = 'demo-feedback success';
      feedbackMessage.textContent = '現在入力されている数字にエラーはありません。';
    }
  });

  resetBtn.addEventListener('click', () => {
    currentGrid = JSON.parse(JSON.stringify(initialGrid));
    selectedCellIndex = null;
    buildGrid();
    feedbackMessage.className = 'demo-feedback';
    feedbackMessage.textContent = '数独マトリクスが初期化されました。';
  });

  // Initial Run
  buildGrid();
}
