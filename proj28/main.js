/* ==========================================================================
   Cyber Pentaro Landing Page JavaScript
   ========================================================================== */

// 1. Piece Attribute & SVG Generator Logic
function getPieceAttributes(id) {
  return {
    isLight: !(id & 1),
    isTall: !!(id & 2),
    isRound: !(id & 4),
    isHollow: !!(id & 8),
    isCored: !!(id & 16)
  };
}

function createPieceSVG(id, theme, size = 70) {
  const attrs = getPieceAttributes(id);
  const isTall = attrs.isTall;
  const isRound = attrs.isRound;
  const isHollow = attrs.isHollow;
  const isLight = attrs.isLight;
  const isCored = attrs.isCored;

  // SVG parameters
  const width = 100;
  const heightTotal = 120;
  const cx = 50;
  const baseY = 95;
  const pieceHeight = isTall ? 55 : 25;
  const topY = baseY - pieceHeight;

  // Cylinder (Round)
  const rx = 32;
  const ry = 14;

  // Prism (Square)
  const dx = 28;
  const dy = 13;

  // Inner hole scaled
  const holeScale = 0.45;
  const hrx = rx * holeScale;
  const hry = ry * holeScale;
  const hdx = dx * holeScale;
  const hdy = dy * holeScale;

  // Gradient IDs (namespaced)
  const idPrefix = `p-${theme}-${id}`;
  const sideGradId = `${idPrefix}-side-grad`;
  const topGradId = `${idPrefix}-top-grad`;
  const holeGradId = `${idPrefix}-hole-grad`;
  const coreGradId = `${idPrefix}-core-grad`;

  // Colors based on theme and attribute
  let topColors = { start: '', end: '' };
  let sideColors = { start: '', end: '' };
  let holeColors = { start: '', end: '' };
  let coreColors = { start: '', end: '' };
  let glowColor = '';
  let coreGlow = '';

  if (theme === 'wood') {
    if (isLight) {
      topColors = { start: '#fbf0e3', end: '#e4caa4' }; // Maple top
      sideColors = { start: '#dcb183', end: '#a2764f' }; // Maple side
      holeColors = { start: '#5e432c', end: '#301f11' }; // Shadow pocket
    } else {
      topColors = { start: '#664d3e', end: '#453024' }; // Walnut top
      sideColors = { start: '#422c21', end: '#24140c' }; // Walnut side
      holeColors = { start: '#160a04', end: '#040201' };
    }
    coreColors = { start: '#ffeaad', end: '#d35400' }; // Amber
    coreGlow = 'rgba(211, 84, 0, 0.5)';
  } else if (theme === 'cyberpunk') {
    glowColor = isLight ? 'rgba(0, 242, 254, 0.6)' : 'rgba(255, 8, 68, 0.6)';
    if (isLight) {
      topColors = { start: '#80f9ff', end: '#00f2fe' }; // Cyan top
      sideColors = { start: '#093649', end: '#009ab5' }; // Cyan side
      holeColors = { start: '#02131b', end: '#000000' };
    } else {
      topColors = { start: '#ff7792', end: '#ff0844' }; // Magenta top
      sideColors = { start: '#3d040f', end: '#ab0027' }; // Magenta side
      holeColors = { start: '#190105', end: '#000000' };
    }
    coreColors = { start: '#ffff99', end: '#ffa200' }; // Cyber gold
    coreGlow = 'rgba(255, 162, 0, 0.8)';
  } else {
    // slate
    if (isLight) {
      topColors = { start: '#ffffff', end: '#e9ecef' }; // White top
      sideColors = { start: '#dee2e6', end: '#adb5bd' }; // White side
      holeColors = { start: '#495057', end: '#212529' };
    } else {
      topColors = { start: '#495057', end: '#343a40' }; // Slate top
      sideColors = { start: '#212529', end: '#15181b' }; // Slate side
      holeColors = { start: '#0c0d0e', end: '#000000' };
    }
    coreColors = { start: '#a5f3fc', end: '#0284c7' }; // Crystal
    coreGlow = 'rgba(2, 132, 199, 0.6)';
  }

  // Paths Definitions
  const roundSidePath = `M ${cx - rx},${topY} A ${rx},${ry} 0 0,0 ${cx + rx},${topY} L ${cx + rx},${baseY} A ${rx},${ry} 0 0,1 ${cx - rx},${baseY} Z`;

  // Prism corners
  const t0 = { x: cx, y: topY - dy };
  const t1 = { x: cx + dx, y: topY };
  const t2 = { x: cx, y: topY + dy };
  const t3 = { x: cx - dx, y: topY };
  const b1 = { x: cx + dx, y: baseY };
  const b2 = { x: cx, y: baseY + dy };
  const b3 = { x: cx - dx, y: baseY };

  const leftSidePoints = `${t3.x},${t3.y} ${t2.x},${t2.y} ${b2.x},${b2.y} ${b3.x},${b3.y}`;
  const rightSidePoints = `${t2.x},${t2.y} ${t1.x},${t1.y} ${b1.x},${b1.y} ${b2.x},${b2.y}`;

  // Build SVG Markup
  let svgContent = `
    <svg width="${size}" height="${size * (heightTotal / width)}" viewBox="0 0 ${width} ${heightTotal}" style="transition: transform 0.3s ease, filter 0.3s ease; cursor: pointer;" class="piece-svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-opacity="0.4" />
        </filter>
        <linearGradient id="${sideGradId}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${sideColors.start}" />
          <stop offset="50%" stop-color="${sideColors.end}" />
          <stop offset="100%" stop-color="${sideColors.start}" />
        </linearGradient>
        <linearGradient id="${sideGradId}-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${sideColors.start}" />
          <stop offset="100%" stop-color="${sideColors.end}" />
        </linearGradient>
        <linearGradient id="${sideGradId}-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${sideColors.end}" />
          <stop offset="100%" stop-color="${sideColors.start}" />
        </linearGradient>
        <radialGradient id="${topGradId}" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="${topColors.start}" />
          <stop offset="100%" stop-color="${topColors.end}" />
        </radialGradient>
        <linearGradient id="${holeGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${holeColors.start}" />
          <stop offset="100%" stop-color="${holeColors.end}" />
        </linearGradient>
        <radialGradient id="${coreGradId}" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="${coreColors.start}" />
          <stop offset="100%" stop-color="${coreColors.end}" />
        </radialGradient>
      </defs>
      <g>
        <!-- Shadow -->
        ${isRound ? `
          <ellipse cx="${cx}" cy="${baseY}" rx="${rx}" ry="${ry}" fill="black" opacity="0.25" filter="url(#shadow)" />
        ` : `
          <path d="M ${cx},${baseY - dy} L ${cx + dx},${baseY} L ${cx},${baseY + dy} L ${cx - dx},${baseY} Z" fill="black" opacity="0.25" filter="url(#shadow)" />
        `}

        <!-- Side Walls -->
        ${isRound ? `
          <path d="${roundSidePath}" fill="url(#${sideGradId})" />
        ` : `
          <g>
            <polygon points="${leftSidePoints}" fill="url(#${sideGradId}-left)" />
            <polygon points="${rightSidePoints}" fill="url(#${sideGradId}-right)" />
          </g>
        `}

        <!-- Top Face -->
        ${isRound ? `
          <ellipse cx="${cx}" cy="${topY}" rx="${rx}" ry="${ry}" fill="url(#${topGradId})" stroke="${theme === 'cyberpunk' ? (isLight ? '#00f2fe' : '#ff0844') : 'rgba(255,255,255,0.15)'}" stroke-width="0.5" />
        ` : `
          <path d="M ${t0.x},${t0.y} L ${t1.x},${t1.y} L ${t2.x},${t2.y} L ${t3.x},${t3.y} Z" fill="url(#${topGradId})" stroke="${theme === 'cyberpunk' ? (isLight ? '#00f2fe' : '#ff0844') : 'rgba(255,255,255,0.15)'}" stroke-width="0.5" />
        `}

        <!-- Inner Hole -->
        ${isHollow ? (
          isRound ? `
            <ellipse cx="${cx}" cy="${topY}" rx="${hrx}" ry="${hry}" fill="url(#${holeGradId})" stroke="${theme === 'cyberpunk' ? (isLight ? '#00f2fe' : '#ff0844') : 'rgba(0,0,0,0.15)'}" stroke-width="0.5" />
          ` : `
            <path d="M ${cx},${topY - hdy} L ${cx + hdx},${topY} L ${cx},${topY + hdy} L ${cx - hdx},${topY} Z" fill="url(#${holeGradId})" stroke="${theme === 'cyberpunk' ? (isLight ? '#00f2fe' : '#ff0844') : 'rgba(0,0,0,0.15)'}" stroke-width="0.5" />
          `
        ) : ''}

        <!-- Central Core -->
        ${isCored ? `
          <ellipse cx="${cx}" cy="${topY}" rx="${isHollow ? hrx * 0.7 : rx * 0.28}" ry="${isHollow ? hry * 0.7 : ry * 0.28}" fill="url(#${coreGradId})" stroke="${theme === 'cyberpunk' ? '#ffff00' : 'rgba(255,255,255,0.3)'}" stroke-width="0.5" style="filter: drop-shadow(0 0 3px ${coreGlow});" />
        ` : ''}
      </g>
    </svg>
  `;
  return svgContent;
}

// 2. Global State & DOM Initialization
let currentGlobalTheme = 'cyberpunk'; // 'cyberpunk' | 'wood' | 'slate'

function applyTheme(theme) {
  currentGlobalTheme = theme;
  const body = document.body;

  // Re-map styles
  body.className = ''; // Clear existing
  if (theme !== 'cyberpunk') {
    body.classList.add(`${theme}-theme`);
  }

  // Update theme selectors state
  document.querySelectorAll('.theme-btn, .showroom-btn').forEach(btn => {
    const btnTheme = btn.getAttribute('data-theme');
    if (btnTheme === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Re-render theme dependent components
  renderShowcasePieces();
  renderShowroomPreview();
  renderBoardDemo();
}

// 3. Render pieces for different sections
// A. Hero showcase pieces (staggered display cards)
function renderShowcasePieces() {
  const cards = {
    'hero-piece-left': 27,   // Tall, Dark, Square, Hollow, Cored
    'hero-piece-center': 18, // Short, Dark, Round, Solid, Cored (Core highlights centered)
    'hero-piece-right': 5    // Short, Light, Square, Solid, Cored
  };

  for (const [idStr, pieceId] of Object.entries(cards)) {
    const el = document.getElementById(idStr);
    if (el) {
      el.innerHTML = createPieceSVG(pieceId, currentGlobalTheme, 80);
    }
  }
}

// B. Theme showroom preview pane pieces
function renderShowroomPreview() {
  const showroomContainer = document.getElementById('showroom-pieces-display');
  if (!showroomContainer) return;

  // Let's show 4 pieces with varied attributes
  const previewIds = [
    16, // Tall Light Round Solid Cored
    11, // Short Dark Round Hollow Coreless
    22, // Short Dark Square Solid Cored
    9   // Short Dark Round Hollow Coreless
  ];

  let html = '';
  previewIds.forEach(pieceId => {
    html += `
      <div class="preview-piece-item" title="Piece ID: ${pieceId}">
        ${createPieceSVG(pieceId, currentGlobalTheme, 75)}
      </div>
    `;
  });
  showroomContainer.innerHTML = html;

  // Update title label of preview based on theme
  const titleEl = document.getElementById('showroom-theme-title');
  if (titleEl) {
    if (currentGlobalTheme === 'wood') titleEl.textContent = 'Classic Wood Theme';
    else if (currentGlobalTheme === 'cyberpunk') titleEl.textContent = 'Neon Cyberpunk';
    else titleEl.textContent = 'Slate Minimalist';
  }
}

// C. Render 5x5 board preview with winning line
function renderBoardDemo() {
  const boardEl = document.getElementById('board-preview-grid');
  if (!boardEl) return;

  // Board layout representing a winning diagonal state (Row 0 Col 0, Row 1 Col 1, ...)
  // Aligning pieces sharing "Cored" attribute (any piece with bit 4 set, i.e. >=16)
  // Let's fill the board: diagonal contains piece IDs: [16, 17, 18, 19, 20]
  // All these pieces share color/shape variations but are ALL "Cored" (thus win!)
  const boardState = Array(25).fill(null);
  boardState[0] = 16;
  boardState[6] = 17;
  boardState[12] = 18;
  boardState[18] = 19;
  boardState[24] = 20;

  const winLine = [0, 6, 12, 18, 24];

  let html = '';
  for (let i = 0; i < 25; i++) {
    const isWinCell = winLine.includes(i);
    const pieceId = boardState[i];
    const cellClass = isWinCell ? 'board-preview-cell win-highlight' : 'board-preview-cell';

    html += `
      <div class="${cellClass}">
        ${pieceId !== null ? createPieceSVG(pieceId, currentGlobalTheme, 45) : ''}
      </div>
    `;
  }
  boardEl.innerHTML = html;
}

// 4. Parallax Tilt effect on cards
function initCardTilt() {
  const cards = document.querySelectorAll('.deck-piece-card, .mechanics-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; //x position within the element.
      const y = e.clientY - rect.top;  //y position within the element.
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      const angleX = (yc - y) / 10; // Rotates around X axis based on Y movement
      const angleY = (x - xc) / 10; // Rotates around Y axis based on X movement

      // Apply different transform depending on if it has fixed layout transforms (like hero deck)
      if (card.classList.contains('deck-piece-card')) {
        let baseTransform = '';
        if (card.classList.contains('card-left')) baseTransform = 'rotate(-12deg)';
        else if (card.classList.contains('card-center')) baseTransform = 'translateY(-20px)';
        else if (card.classList.contains('card-right')) baseTransform = 'rotate(15deg)';
        
        card.style.transform = `${baseTransform} scale(1.08) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(30px)`;
      } else {
        card.style.transform = `translateY(-5px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// 5. DOM Event Binding
document.addEventListener('DOMContentLoaded', () => {
  // Bind Header Theme select buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      applyTheme(theme);
    });
  });

  // Bind Showroom Theme select cards
  document.querySelectorAll('.showroom-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      applyTheme(theme);
    });
  });

  // Initial draw
  applyTheme('cyberpunk');
  initCardTilt();
});
