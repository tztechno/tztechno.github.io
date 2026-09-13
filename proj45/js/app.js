// Main Application Logic for Terrain Rainfall-Runoff Simulator LP

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize i18n
  initI18n();

  // 2. Initialize Navigation & Header Scroll
  initNavbar();

  // 3. Initialize Hero Particle Canvas Background
  initHeroCanvas();

  // 4. Initialize Interactive Hydrograph Simulator Demo
  initInteractiveDemo();

  // 5. Initialize FAQ Accordion
  initFaqAccordion();

  // 6. Initialize Scroll Reveal Animations
  initScrollAnimations();
});

/* ----------------------------------------------------
 * Navbar & Smooth Scroll
 * -------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

/* ----------------------------------------------------
 * Hero Topographic Particle Rain Canvas
 * -------------------------------------------------- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;

  let width, height;
  let particles = [];
  const particleCount = 45;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class StreamParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vx = (Math.random() - 0.5) * 0.8 + 0.3;
      this.vy = Math.random() * 2 + 1.5;
      this.size = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.length = Math.random() * 20 + 10;
      this.hue = 185 + Math.random() * 30; // Cyan to Blue
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Subtle topographic wavy flow
      this.vx += Math.sin(this.y * 0.02) * 0.03;

      if (this.y > height + 50 || this.x < -50 || this.x > width + 50) {
        this.reset();
        this.y = -20;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.strokeStyle = `hsla(${this.hue}, 95%, 65%, ${this.alpha})`;
      ctx.lineWidth = this.size;
      ctx.lineCap = 'round';
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - this.vx * 3, this.y - this.length);
      ctx.stroke();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    const p = new StreamParticle();
    p.y = Math.random() * height; // initial spread
    particles.push(p);
  }

  function drawContourLines() {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
    ctx.lineWidth = 1;
    const time = Date.now() * 0.0005;

    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      const baseY = (height / 6) * (i + 1);
      ctx.moveTo(0, baseY);

      for (let x = 0; x < width; x += 30) {
        const y = baseY + Math.sin(x * 0.004 + time + i) * 35 + Math.cos(x * 0.008 - time) * 20;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    drawContourLines();

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/* ----------------------------------------------------
 * Interactive Hydrograph Simulator Demo Widget
 * -------------------------------------------------- */
function initInteractiveDemo() {
  const mapCanvas = document.getElementById('demo-map-canvas');
  const chartCanvas = document.getElementById('demo-chart-canvas');
  if (!mapCanvas || !chartCanvas) return;

  const mapCtx = mapCanvas.getContext('2d');
  const chartCtx = chartCanvas.getContext('2d');

  // Preset Points
  const presetPoints = [
    {
      id: 'ridge',
      nameJa: '地点A: 山頂・尾根',
      nameEn: 'Point A: Mountain Ridge',
      xRatio: 0.28,
      yRatio: 0.32,
      elev: '428.5 m',
      maxDepth: '0.04 m (4 cm)',
      peakTimeMin: '12 min (降雨中)',
      peakTimeMinEn: '12 min (During rain)',
      riskJa: '低 (即時排水・滞水なし)',
      riskEn: 'Low (Immediate drainage)',
      riskClass: 'risk-low',
      // Time series: 60 mins (rain 0-30m)
      curve: (t) => {
        if (t <= 12) return (t / 12) * 0.04;
        if (t <= 30) return 0.04 - ((t - 12) / 18) * 0.025;
        if (t <= 45) return 0.015 * Math.exp(-(t - 30) / 6);
        return 0.001;
      },
      peakT: 12
    },
    {
      id: 'slope',
      nameJa: '地点B: 中腹斜面',
      nameEn: 'Point B: Mid-slope',
      xRatio: 0.46,
      yRatio: 0.44,
      elev: '286.2 m',
      maxDepth: '0.19 m (19 cm)',
      peakTimeMin: '28 min (降雨終盤)',
      peakTimeMinEn: '28 min (Late rain)',
      riskJa: '中 (流水通過・斜面流出)',
      riskEn: 'Medium (Transient flow)',
      riskClass: 'risk-mid',
      curve: (t) => {
        if (t <= 28) return Math.pow(t / 28, 1.4) * 0.19;
        if (t <= 42) return 0.19 * Math.exp(-(t - 28) / 8);
        return 0.015 * Math.exp(-(t - 42) / 10);
      },
      peakT: 28
    },
    {
      id: 'valley',
      nameJa: '地点C: 谷底本流',
      nameEn: 'Point C: Main Valley Floor',
      xRatio: 0.62,
      yRatio: 0.60,
      elev: '142.0 m',
      maxDepth: '0.86 m (86 cm)',
      peakTimeMin: '42 min (雨上がり後遅延ピーク)',
      peakTimeMinEn: '42 min (Delayed post-rain peak)',
      riskJa: '高 (上流集中・遅延浸水)',
      riskEn: 'High (Upstream delayed flood)',
      riskClass: 'risk-high',
      curve: (t) => {
        if (t <= 30) return Math.pow(t / 30, 1.8) * 0.58;
        if (t <= 42) return 0.58 + ((t - 30) / 12) * 0.28; // reaches 0.86 at t=42
        return 0.86 * Math.exp(-(t - 42) / 22);
      },
      peakT: 42
    },
    {
      id: 'basin',
      nameJa: '地点D: 出口合流点',
      nameEn: 'Point D: Basin Outlet',
      xRatio: 0.78,
      yRatio: 0.76,
      elev: '54.8 m',
      maxDepth: '1.64 m (164 cm)',
      peakTimeMin: '52 min (降雨終了22分後)',
      peakTimeMinEn: '52 min (22m after rain ends)',
      riskJa: '警戒・危険 (最大滞水冠水域)',
      riskEn: 'Critical (Max inundation zone)',
      riskClass: 'risk-danger',
      curve: (t) => {
        if (t <= 30) return Math.pow(t / 30, 2.1) * 0.82;
        if (t <= 52) return 0.82 + Math.pow((t - 30) / 22, 0.8) * 0.82; // reaches 1.64 at t=52
        return 1.64 * Math.exp(-(t - 52) / 30);
      },
      peakT: 52
    }
  ];

  let selectedPoint = presetPoints[2]; // Default: Valley
  let customPoint = null;

  function resizeMap() {
    const rect = mapCanvas.parentElement.getBoundingClientRect();
    const size = Math.min(rect.width, 520);
    mapCanvas.width = size * window.devicePixelRatio || size;
    mapCanvas.height = size * 0.85 * window.devicePixelRatio || (size * 0.85);
    mapCanvas.style.width = `${size}px`;
    mapCanvas.style.height = `${size * 0.85}px`;
    drawMap();
  }

  function resizeChart() {
    const rect = chartCanvas.parentElement.getBoundingClientRect();
    chartCanvas.width = rect.width * window.devicePixelRatio || rect.width;
    chartCanvas.height = 240 * window.devicePixelRatio || 240;
    chartCanvas.style.width = `${rect.width}px`;
    chartCanvas.style.height = `240px`;
    drawChart();
  }

  // Draw Topographic Hillshade Simulation Map
  function drawMap() {
    const w = mapCanvas.width;
    const h = mapCanvas.height;
    mapCtx.save();
    mapCtx.clearRect(0, 0, w, h);

    // Background Gradient (Terrain Elevation + Hillshade effect)
    const bgGrad = mapCtx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#132338');
    bgGrad.addColorStop(0.4, '#1b384f');
    bgGrad.addColorStop(0.7, '#0d283e');
    bgGrad.addColorStop(1, '#081726');
    mapCtx.fillStyle = bgGrad;
    mapCtx.fillRect(0, 0, w, h);

    // Topographic contours
    mapCtx.lineWidth = 1.2 * window.devicePixelRatio;
    const contourCount = 12;
    for (let c = 0; c < contourCount; c++) {
      mapCtx.beginPath();
      mapCtx.strokeStyle = `rgba(56, 189, 248, ${0.06 + (c / contourCount) * 0.12})`;
      const radius = (w * 0.12) + (c * (w * 0.075));
      mapCtx.ellipse(w * 0.3, h * 0.25, radius, radius * 0.75, Math.PI / 6, 0, Math.PI * 2);
      mapCtx.stroke();
    }

    // Stream lines (Virtual Drainage Channels)
    mapCtx.lineWidth = 3 * window.devicePixelRatio;
    const streamGrad = mapCtx.createLinearGradient(w * 0.2, h * 0.2, w * 0.85, h * 0.85);
    streamGrad.addColorStop(0, 'rgba(0, 240, 255, 0.2)');
    streamGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.7)');
    streamGrad.addColorStop(1, 'rgba(0, 255, 200, 0.95)');
    mapCtx.strokeStyle = streamGrad;

    // Main valley tributary
    mapCtx.beginPath();
    mapCtx.moveTo(w * 0.2, h * 0.2);
    mapCtx.bezierCurveTo(w * 0.35, h * 0.35, w * 0.45, h * 0.4, w * 0.6, h * 0.58);
    mapCtx.bezierCurveTo(w * 0.7, h * 0.7, w * 0.75, h * 0.72, w * 0.85, h * 0.82);
    mapCtx.stroke();

    // Side tributary 1
    mapCtx.lineWidth = 1.8 * window.devicePixelRatio;
    mapCtx.beginPath();
    mapCtx.moveTo(w * 0.55, h * 0.15);
    mapCtx.bezierCurveTo(w * 0.52, h * 0.3, w * 0.55, h * 0.45, w * 0.6, h * 0.58);
    mapCtx.stroke();

    // Side tributary 2
    mapCtx.beginPath();
    mapCtx.moveTo(w * 0.85, h * 0.4);
    mapCtx.bezierCurveTo(w * 0.78, h * 0.55, w * 0.72, h * 0.62, w * 0.7, h * 0.7);
    mapCtx.stroke();

    // Flood concentration pool at basin
    const poolGrad = mapCtx.createRadialGradient(w * 0.78, h * 0.76, 2, w * 0.78, h * 0.76, 45 * window.devicePixelRatio);
    poolGrad.addColorStop(0, 'rgba(0, 240, 255, 0.7)');
    poolGrad.addColorStop(0.5, 'rgba(0, 150, 255, 0.35)');
    poolGrad.addColorStop(1, 'rgba(0, 100, 255, 0)');
    mapCtx.fillStyle = poolGrad;
    mapCtx.beginPath();
    mapCtx.arc(w * 0.78, h * 0.76, 45 * window.devicePixelRatio, 0, Math.PI * 2);
    mapCtx.fill();

    // Draw Preset Markers
    presetPoints.forEach(p => {
      const px = p.xRatio * w;
      const py = p.yRatio * h;
      const isSelected = selectedPoint && selectedPoint.id === p.id;

      // Glow circle
      if (isSelected) {
        mapCtx.beginPath();
        mapCtx.arc(px, py, 18 * window.devicePixelRatio, 0, Math.PI * 2);
        mapCtx.fillStyle = 'rgba(0, 240, 255, 0.3)';
        mapCtx.fill();
      }

      // Marker pin
      mapCtx.beginPath();
      mapCtx.arc(px, py, (isSelected ? 9 : 6.5) * window.devicePixelRatio, 0, Math.PI * 2);
      mapCtx.fillStyle = isSelected ? '#00f0ff' : '#38bdf8';
      mapCtx.shadowColor = '#00f0ff';
      mapCtx.shadowBlur = isSelected ? 15 : 6;
      mapCtx.fill();
      mapCtx.shadowBlur = 0;

      // Label badge
      mapCtx.font = `bold ${11 * window.devicePixelRatio}px 'Outfit', sans-serif`;
      mapCtx.fillStyle = '#ffffff';
      const label = currentLang === 'ja' ? p.nameJa.split(':')[0] : p.nameEn.split(':')[0];
      mapCtx.fillText(label, px + (12 * window.devicePixelRatio), py + (4 * window.devicePixelRatio));
    });

    // Draw custom point if clicked
    if (customPoint) {
      const cx = customPoint.xRatio * w;
      const cy = customPoint.yRatio * h;
      mapCtx.beginPath();
      mapCtx.arc(cx, cy, 10 * window.devicePixelRatio, 0, Math.PI * 2);
      mapCtx.fillStyle = '#f59e0b';
      mapCtx.shadowColor = '#f59e0b';
      mapCtx.shadowBlur = 12;
      mapCtx.fill();
      mapCtx.shadowBlur = 0;
    }

    mapCtx.restore();
  }

  // Draw Hydrograph Chart
  function drawChart() {
    const w = chartCanvas.width;
    const h = chartCanvas.height;
    chartCtx.save();
    chartCtx.clearRect(0, 0, w, h);

    const padLeft = 45 * window.devicePixelRatio;
    const padRight = 25 * window.devicePixelRatio;
    const padTop = 20 * window.devicePixelRatio;
    const padBottom = 35 * window.devicePixelRatio;

    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    const maxSimTime = 60; // 0 to 60 min
    const rainEndMin = 30; // Rain stops at t=30 min

    // Background
    chartCtx.fillStyle = 'rgba(10, 15, 29, 0.7)';
    chartCtx.fillRect(padLeft, padTop, plotW, plotH);

    // Rainfall Duration Shaded Band (0 to 30 min)
    const rainW = (rainEndMin / maxSimTime) * plotW;
    chartCtx.fillStyle = 'rgba(56, 189, 248, 0.08)';
    chartCtx.fillRect(padLeft, padTop, rainW, plotH);

    // Rain Stop Line & Label
    const rainLineX = padLeft + rainW;
    chartCtx.beginPath();
    chartCtx.setLineDash([4 * window.devicePixelRatio, 4 * window.devicePixelRatio]);
    chartCtx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    chartCtx.lineWidth = 1.5 * window.devicePixelRatio;
    chartCtx.moveTo(rainLineX, padTop);
    chartCtx.lineTo(rainLineX, padTop + plotH);
    chartCtx.stroke();
    chartCtx.setLineDash([]);

    chartCtx.font = `${10 * window.devicePixelRatio}px 'Inter', sans-serif`;
    chartCtx.fillStyle = 'rgba(148, 163, 184, 0.8)';
    chartCtx.fillText(currentLang === 'ja' ? '← 降雨中 (30分間)' : '← Rain (30 min)', padLeft + (8 * window.devicePixelRatio), padTop + (15 * window.devicePixelRatio));
    chartCtx.fillText(currentLang === 'ja' ? '雨上がり (排水過程) →' : 'Rain stopped →', rainLineX + (6 * window.devicePixelRatio), padTop + (15 * window.devicePixelRatio));

    // Grid lines
    chartCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    chartCtx.lineWidth = 1 * window.devicePixelRatio;

    for (let t = 0; t <= maxSimTime; t += 10) {
      const gx = padLeft + (t / maxSimTime) * plotW;
      chartCtx.beginPath();
      chartCtx.moveTo(gx, padTop);
      chartCtx.lineTo(gx, padTop + plotH);
      chartCtx.stroke();

      // X-Axis Labels
      chartCtx.fillStyle = '#94a3b8';
      chartCtx.font = `${9 * window.devicePixelRatio}px 'JetBrains Mono', monospace`;
      chartCtx.textAlign = 'center';
      chartCtx.fillText(`${t}m`, gx, padTop + plotH + (18 * window.devicePixelRatio));
    }

    // Y-Axis
    const yMaxVal = 2.0; // max depth 2.0 m
    for (let yv = 0; yv <= yMaxVal; yv += 0.5) {
      const gy = padTop + plotH - (yv / yMaxVal) * plotH;
      chartCtx.beginPath();
      chartCtx.moveTo(padLeft, gy);
      chartCtx.lineTo(padLeft + plotW, gy);
      chartCtx.stroke();

      // Y-Axis Labels
      chartCtx.fillStyle = '#94a3b8';
      chartCtx.font = `${9 * window.devicePixelRatio}px 'JetBrains Mono', monospace`;
      chartCtx.textAlign = 'right';
      chartCtx.fillText(`${yv.toFixed(1)}m`, padLeft - (6 * window.devicePixelRatio), gy + (3 * window.devicePixelRatio));
    }

    // Draw Water Depth Curve
    const point = customPoint || selectedPoint;
    if (!point || !point.curve) return;

    chartCtx.beginPath();
    chartCtx.lineWidth = 3 * window.devicePixelRatio;
    const curveGrad = chartCtx.createLinearGradient(padLeft, 0, padLeft + plotW, 0);
    curveGrad.addColorStop(0, '#38bdf8');
    curveGrad.addColorStop(0.5, '#00f0ff');
    curveGrad.addColorStop(1, '#60a5fa');
    chartCtx.strokeStyle = curveGrad;

    const step = 0.5;
    let peakX = 0, peakY = 0, maxD = 0;

    for (let t = 0; t <= maxSimTime; t += step) {
      const depth = point.curve(t);
      const cx = padLeft + (t / maxSimTime) * plotW;
      const cy = padTop + plotH - (Math.min(depth, yMaxVal) / yMaxVal) * plotH;

      if (t === 0) {
        chartCtx.moveTo(cx, cy);
      } else {
        chartCtx.lineTo(cx, cy);
      }

      if (depth > maxD) {
        maxD = depth;
        peakX = cx;
        peakY = cy;
      }
    }
    chartCtx.stroke();

    // Area fill under curve
    chartCtx.lineTo(padLeft + plotW, padTop + plotH);
    chartCtx.lineTo(padLeft, padTop + plotH);
    chartCtx.closePath();
    const areaGrad = chartCtx.createLinearGradient(0, padTop, 0, padTop + plotH);
    areaGrad.addColorStop(0, 'rgba(0, 240, 255, 0.35)');
    areaGrad.addColorStop(1, 'rgba(0, 240, 255, 0.0)');
    chartCtx.fillStyle = areaGrad;
    chartCtx.fill();

    // Draw Peak Marker Point
    if (peakX > 0) {
      chartCtx.beginPath();
      chartCtx.arc(peakX, peakY, 5 * window.devicePixelRatio, 0, Math.PI * 2);
      chartCtx.fillStyle = '#f59e0b';
      chartCtx.shadowColor = '#f59e0b';
      chartCtx.shadowBlur = 10;
      chartCtx.fill();
      chartCtx.shadowBlur = 0;

      // Peak label
      chartCtx.fillStyle = '#fef08a';
      chartCtx.font = `bold ${10 * window.devicePixelRatio}px 'JetBrains Mono', monospace`;
      chartCtx.textAlign = 'center';
      chartCtx.fillText(`Peak: ${point.peakT}m (${maxD.toFixed(2)}m)`, peakX, peakY - (10 * window.devicePixelRatio));
    }

    chartCtx.restore();
  }

  function updatePointInfo(p) {
    const isJa = currentLang === 'ja';
    const pointTitle = document.getElementById('demo-pt-title');
    const pointElev = document.getElementById('demo-pt-elev');
    const pointDepth = document.getElementById('demo-pt-depth');
    const pointPeak = document.getElementById('demo-pt-peak');
    const pointRisk = document.getElementById('demo-pt-risk');

    if (pointTitle) pointTitle.textContent = isJa ? (p.nameJa || '選択地点') : (p.nameEn || 'Selected Location');
    if (pointElev) pointElev.textContent = p.elev;
    if (pointDepth) pointDepth.textContent = p.maxDepth;
    if (pointPeak) pointPeak.textContent = isJa ? p.peakTimeMin : p.peakTimeMinEn;

    if (pointRisk) {
      pointRisk.textContent = isJa ? p.riskJa : p.riskEn;
      pointRisk.className = 'val-badge ' + (p.riskClass || 'risk-low');
    }
  }

  function selectPreset(id) {
    const found = presetPoints.find(item => item.id === id);
    if (found) {
      selectedPoint = found;
      customPoint = null;
      document.querySelectorAll('.preset-btn').forEach(btn => {
        if (btn.getAttribute('data-preset') === id) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      updatePointInfo(found);
      drawMap();
      drawChart();
    }
  }

  // Handle map click
  mapCanvas.addEventListener('click', (e) => {
    const rect = mapCanvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;

    // Check if clicked near a preset
    let clickedPreset = null;
    presetPoints.forEach(p => {
      const dist = Math.hypot(clickX - p.xRatio, clickY - p.yRatio);
      if (dist < 0.08) {
        clickedPreset = p;
      }
    });

    if (clickedPreset) {
      selectPreset(clickedPreset.id);
    } else {
      // Create custom point dynamically based on spatial position
      const elevEstimate = Math.round((1.0 - (clickX * 0.4 + clickY * 0.6)) * 480 + 30);
      const isBasin = clickX > 0.65 && clickY > 0.65;
      const isRidge = clickX < 0.35 && clickY < 0.35;
      const depthVal = isBasin ? (1.2 + Math.random() * 0.5) : (isRidge ? (0.02 + Math.random() * 0.05) : (0.2 + Math.random() * 0.4));
      const peakMin = isRidge ? 10 : (isBasin ? 50 : 35);

      customPoint = {
        nameJa: `カスタム地点 (X:${Math.round(clickX * 100)}%, Y:${Math.round(clickY * 100)}%)`,
        nameEn: `Custom Point (X:${Math.round(clickX * 100)}%, Y:${Math.round(clickY * 100)}%)`,
        xRatio: clickX,
        yRatio: clickY,
        elev: `${elevEstimate} m`,
        maxDepth: `${depthVal.toFixed(2)} m (${Math.round(depthVal * 100)} cm)`,
        peakTimeMin: `${peakMin} min (${peakMin <= 30 ? '降雨中' : '遅延ピーク'})`,
        peakTimeMinEn: `${peakMin} min (${peakMin <= 30 ? 'During rain' : 'Delayed peak'})`,
        riskJa: depthVal > 1.0 ? '警戒・危険 (滞水冠水域)' : (depthVal > 0.3 ? '中〜高 (流路滞水)' : '低 (即時排水)'),
        riskEn: depthVal > 1.0 ? 'Critical (Inundation Zone)' : (depthVal > 0.3 ? 'Medium-High (Channel)' : 'Low (Safe)'),
        riskClass: depthVal > 1.0 ? 'risk-danger' : (depthVal > 0.3 ? 'risk-high' : 'risk-low'),
        curve: (t) => {
          if (t <= peakMin) return Math.pow(t / peakMin, 1.5) * depthVal;
          return depthVal * Math.exp(-(t - peakMin) / (depthVal > 0.5 ? 24 : 8));
        },
        peakT: peakMin
      };

      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      updatePointInfo(customPoint);
      drawMap();
      drawChart();
    }
  });

  // Preset button click listeners
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const presetId = e.currentTarget.getAttribute('data-preset');
      selectPreset(presetId);
    });
  });

  window.addEventListener('resize', () => {
    resizeMap();
    resizeChart();
  });

  window.addEventListener('languageChanged', () => {
    updatePointInfo(customPoint || selectedPoint);
    drawMap();
    drawChart();
  });

  // Initialize
  resizeMap();
  resizeChart();
  selectPreset('valley');
}

/* ----------------------------------------------------
 * FAQ Accordion
 * -------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other items
      faqItems.forEach(other => other.classList.remove('active'));
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ----------------------------------------------------
 * Scroll Reveal Animations (Intersection Observer)
 * -------------------------------------------------- */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
