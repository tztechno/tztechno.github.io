// Cyber Background Particles and Glowing Puzzle Matrix

export function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle list
  const particles = [];
  const particleCount = Math.min(45, Math.floor((width * height) / 25000));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? '#00f2fe' : '#6366f1',
      alpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2,
      isPuzzleNode: Math.random() > 0.7,
      size: Math.random() * 12 + 8
    });
  }

  // Draw floating cyber puzzle silhouette
  function drawPuzzlePiece(ctx, x, y, size, angle, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha * 0.6;
    ctx.lineWidth = 1.2;

    const s = size;
    const tab = s * 0.25;

    ctx.beginPath();
    // Top edge with tab
    ctx.moveTo(-s, -s);
    ctx.lineTo(-tab, -s);
    ctx.arc(0, -s - tab, tab, Math.PI * 0.8, Math.PI * 0.2, false);
    ctx.lineTo(s, -s);

    // Right edge with tab
    ctx.lineTo(s, -tab);
    ctx.arc(s + tab, 0, tab, -Math.PI * 0.3, Math.PI * 0.3, false);
    ctx.lineTo(s, s);

    // Bottom edge with hole
    ctx.lineTo(tab, s);
    ctx.arc(0, s - tab, tab, Math.PI * 0.2, Math.PI * 0.8, true);
    ctx.lineTo(-s, s);

    // Left edge with hole
    ctx.lineTo(-s, tab);
    ctx.arc(-s + tab, 0, tab, Math.PI * 0.3, -Math.PI * 0.3, true);
    ctx.closePath();

    ctx.stroke();
    ctx.restore();
  }

  let lastTime = 0;
  function animate(timestamp) {
    ctx.clearRect(0, 0, width, height);

    // Render subtle digital grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
    ctx.lineWidth = 1;
    const gridSize = 60;
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

    // Connect close particles with cyber data streams
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          const lineAlpha = (1 - dist / 140) * 0.15;
          ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw & update particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += 0.005;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      p.alpha += Math.sin(timestamp * p.pulseSpeed) * 0.005;
      const curAlpha = Math.max(0.1, Math.min(0.6, p.alpha));

      if (p.isPuzzleNode) {
        drawPuzzlePiece(ctx, p.x, p.y, p.size, p.angle, p.color, curAlpha);
      } else {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = curAlpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
