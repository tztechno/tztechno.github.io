// Interactive Slicer & Assembler Demo Canvas

export function initInteractiveDemo() {
  const canvas = document.getElementById('demo-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let cuts = [];
  let currentStroke = null;
  let isDrawing = false;
  let tool = 'freehand'; // 'freehand', 'straight', 'wave'
  let cutCount = 0;
  let pieceCount = 1;
  let isExploded = false;
  let explosionPieces = [];

  // Sample Image
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = './assets/sample-photo.jpg';

  let canvasW = 600;
  let canvasH = 400;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvasW = canvas.width = rect.width;
    canvasH = canvas.height = Math.max(380, rect.height);
    render();
  }

  window.addEventListener('resize', resize);
  img.onload = () => {
    resize();
  };

  // Tool Selection Buttons
  document.querySelectorAll('.demo-tool-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.demo-tool-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tool = btn.getAttribute('data-tool');
    });
  });

  // Action Buttons
  const btnSeparate = document.getElementById('demo-btn-separate');
  const btnReset = document.getElementById('demo-btn-reset');
  const statPieces = document.getElementById('demo-stat-pieces');
  const statCuts = document.getElementById('demo-stat-cuts');

  if (btnSeparate) {
    btnSeparate.addEventListener('click', () => {
      triggerExplosion();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      cuts = [];
      cutCount = 0;
      pieceCount = 1;
      isExploded = false;
      explosionPieces = [];
      updateStats();
      render();
    });
  }

  function updateStats() {
    if (statPieces) statPieces.textContent = pieceCount;
    if (statCuts) statCuts.textContent = cutCount;
  }

  // Mouse / Touch Handlers
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  canvas.addEventListener('mousedown', (e) => {
    if (isExploded) {
      // If exploded, click to reassemble
      reassemblePieces();
      return;
    }
    isDrawing = true;
    const pos = getPos(e);
    currentStroke = {
      tool: tool,
      points: [pos]
    };
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDrawing || !currentStroke) return;
    const pos = getPos(e);
    if (tool === 'freehand') {
      currentStroke.points.push(pos);
    } else if (tool === 'straight' || tool === 'wave') {
      if (currentStroke.points.length === 1) {
        currentStroke.points.push(pos);
      } else {
        currentStroke.points[1] = pos;
      }
    }
    render();
  });

  window.addEventListener('mouseup', () => {
    if (!isDrawing || !currentStroke) return;
    isDrawing = false;
    if (currentStroke.points.length > 1) {
      cuts.push(currentStroke);
      cutCount++;
      pieceCount = Math.min(24, Math.max(2, Math.floor(cutCount * 1.8 + 1)));
      updateStats();
    }
    currentStroke = null;
    render();
  });

  // Touch Support
  canvas.addEventListener('touchstart', (e) => {
    if (isExploded) {
      reassemblePieces();
      return;
    }
    isDrawing = true;
    const pos = getPos(e);
    currentStroke = { tool, points: [pos] };
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDrawing || !currentStroke) return;
    const pos = getPos(e);
    if (tool === 'freehand') {
      currentStroke.points.push(pos);
    } else {
      if (currentStroke.points.length === 1) currentStroke.points.push(pos);
      else currentStroke.points[1] = pos;
    }
    render();
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (!isDrawing || !currentStroke) return;
    isDrawing = false;
    if (currentStroke.points.length > 1) {
      cuts.push(currentStroke);
      cutCount++;
      pieceCount = Math.min(24, Math.max(2, Math.floor(cutCount * 1.8 + 1)));
      updateStats();
    }
    currentStroke = null;
    render();
  });

  // Draw Wave helper
  function drawWave(ctx, p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    const waves = Math.max(2, Math.floor(dist / 40));
    const step = dist / (waves * 2);

    ctx.save();
    ctx.translate(p1.x, p1.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);

    for (let i = 0; i < waves * 2; i++) {
      const x1 = (i + 0.5) * step;
      const y1 = (i % 2 === 0 ? 1 : -1) * 16;
      const x2 = (i + 1) * step;
      const y2 = 0;
      ctx.quadraticCurveTo(x1, y1, x2, y2);
    }
    ctx.stroke();
    ctx.restore();
  }

  function renderStroke(stroke, isLive = false) {
    ctx.save();
    ctx.strokeStyle = isLive ? '#ffffff' : '#00f2fe';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = isLive ? 15 : 10;

    if (stroke.tool === 'freehand') {
      ctx.beginPath();
      for (let i = 0; i < stroke.points.length; i++) {
        const p = stroke.points[i];
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    } else if (stroke.tool === 'straight') {
      if (stroke.points.length >= 2) {
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        ctx.lineTo(stroke.points[1].x, stroke.points[1].y);
        ctx.stroke();
      }
    } else if (stroke.tool === 'wave') {
      if (stroke.points.length >= 2) {
        drawWave(ctx, stroke.points[0], stroke.points[1]);
      }
    }
    ctx.restore();
  }

  // Explode / Scatter simulation
  function triggerExplosion() {
    isExploded = true;
    explosionPieces = [];
    const cols = Math.max(2, Math.ceil(Math.sqrt(pieceCount)));
    const rows = Math.max(2, Math.ceil(pieceCount / cols));
    const pw = canvasW / cols;
    const ph = canvasH / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (explosionPieces.length >= pieceCount) break;
        const targetX = c * pw;
        const targetY = r * ph;
        const angle = (Math.random() - 0.5) * 1.5;
        const offsetX = (Math.random() - 0.5) * 140;
        const offsetY = (Math.random() - 0.5) * 120;

        explosionPieces.push({
          sx: targetX,
          sy: targetY,
          sw: pw,
          sh: ph,
          x: targetX,
          y: targetY,
          targetX: targetX + offsetX,
          targetY: targetY + offsetY,
          angle: 0,
          targetAngle: angle,
          progress: 0
        });
      }
    }
    animateExplosion();
  }

  function reassemblePieces() {
    explosionPieces.forEach(p => {
      p.targetX = p.sx;
      p.targetY = p.sy;
      p.targetAngle = 0;
      p.progress = 0;
    });
    animateExplosion(() => {
      isExploded = false;
      render();
    });
  }

  function animateExplosion(onComplete) {
    let startTime = null;
    const duration = 600;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic

      ctx.clearRect(0, 0, canvasW, canvasH);

      // Background plate
      ctx.fillStyle = '#060a12';
      ctx.fillRect(0, 0, canvasW, canvasH);

      explosionPieces.forEach(p => {
        const curX = p.x + (p.targetX - p.x) * ease;
        const curY = p.y + (p.targetY - p.y) * ease;
        const curAngle = p.angle + (p.targetAngle - p.angle) * ease;

        ctx.save();
        ctx.translate(curX + p.sw / 2, curY + p.sh / 2);
        ctx.rotate(curAngle);
        ctx.shadowColor = 'rgba(0, 242, 254, 0.4)';
        ctx.shadowBlur = 15;
        ctx.strokeStyle = '#00f2fe';
        ctx.lineWidth = 2;

        if (img.complete && img.naturalWidth > 0) {
          ctx.drawImage(
            img,
            (p.sx / canvasW) * img.naturalWidth,
            (p.sy / canvasH) * img.naturalHeight,
            (p.sw / canvasW) * img.naturalWidth,
            (p.sh / canvasH) * img.naturalHeight,
            -p.sw / 2,
            -p.sh / 2,
            p.sw,
            p.sh
          );
        } else {
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(-p.sw / 2, -p.sh / 2, p.sw, p.sh);
        }
        ctx.strokeRect(-p.sw / 2, -p.sh / 2, p.sw, p.sh);
        ctx.restore();
      });

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        explosionPieces.forEach(p => {
          p.x = p.targetX;
          p.y = p.targetY;
          p.angle = p.targetAngle;
        });
        if (onComplete) onComplete();
      }
    }
    requestAnimationFrame(step);
  }

  function render() {
    if (isExploded) return;
    ctx.clearRect(0, 0, canvasW, canvasH);

    // Draw Image
    if (img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, 0, 0, canvasW, canvasH);
    } else {
      // Fallback gradient
      const grad = ctx.createLinearGradient(0, 0, canvasW, canvasH);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(0.5, '#1e1b4b');
      grad.addColorStop(1, '#0284c7');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvasW, canvasH);
    }

    // Overlay subtle dark tint
    ctx.fillStyle = 'rgba(10, 15, 29, 0.2)';
    ctx.fillRect(0, 0, canvasW, canvasH);

    // Draw existing cut strokes
    cuts.forEach(stroke => renderStroke(stroke, false));

    // Draw current live stroke
    if (currentStroke) {
      renderStroke(currentStroke, true);
    }
  }

  render();
}
