/**
 * CYBER SYNDICATE LANDING PAGE - MAIN JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize particle canvas background
  initCyberCanvas();

  // Scroll effect on header navigation bar
  initHeaderScroll();

  // Interactive Token Selector for resources database
  initTokenSelector();

  // Rules Accordion Toggle
  initRulesAccordion();
  
  // Interactive click sound or visual alert on buttons
  initInteractiveBeeps();
});

/* ==========================================================================
   1. Cyber Canvas Particle Simulation
   ========================================================================== */
function initCyberCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Configuration
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  const particleCount = Math.min(60, Math.floor((width * height) / 22000));
  const particles = [];
  const connectionDistance = 140;

  // Color options (based on Cyber Neon theme)
  const colors = [
    'rgba(0, 242, 255, 0.45)', // Cyan
    'rgba(255, 47, 208, 0.45)', // Magenta
    'rgba(155, 92, 255, 0.45)', // Purple
  ];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off borders with a slight margin
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0; // reset shadow
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw grid points (static matrix feel)
    drawStaticDotGrid();

    // Update & Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.update();
      p.draw();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y); // visual anchor
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 242, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  function drawStaticDotGrid() {
    const spacing = 48;
    ctx.fillStyle = 'rgba(0, 242, 255, 0.025)';
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        ctx.fillRect(x, y, 1.5, 1.5);
      }
    }
  }

  // Handle Resize
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Start Animation
  animate();
}

/* ==========================================================================
   2. Header Scroll Visual Class
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('header-nav');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   3. Interactive Resource Selector (Database Panel)
   ========================================================================== */
const RESOURCE_DATA = {
  cred: {
    title: 'クレジット / CRED',
    id: 'RESC_CRED_001',
    color: '#ff2fd0 (マゼンタ)',
    icon: '⚡',
    themeColor: '#ff2fd0',
    lore: '都市ネオ・エデンの基幹決済ネットワークで使用される暗号クレジット。全ての取引とハッキングの基礎となる資金源であり、闇市場の調達力に直結する。',
    usage: '手番で3つの異なる資源を引くか、在庫が4つ以上ある場合は同色2つを同時に獲得できる。購入するカードのコストとして消費されるが、対応するアセットを所有していれば恒久的な割引ボーナスとして機能する。'
  },
  quantum: {
    title: 'クォンタム / QUANTUM',
    id: 'RESC_QUAN_002',
    color: '#00f2ff (シアン)',
    icon: '🧬',
    themeColor: '#00f2ff',
    lore: '量子メインフレームへの演算負荷を割り当てるための処理シグナル。防壁解析（デシフェリング）や暗号鍵解読の高速並列処理プロセスに必要不可欠とされる。',
    usage: '暗号アセット（特にクォンタム系のハックカードや防壁ハック）のビルドコストに充当する。クォンタムボーナスを蓄積すれば、高難易度のレベル3メインフレーム買収コストを劇的に下げられる。'
  },
  nano: {
    title: 'ナノチップ / NANO',
    id: 'RESC_NANO_003',
    color: '#39ff9d (グリーン)',
    icon: '⚙️',
    themeColor: '#39ff9d',
    lore: '自己複製型のナノ構造体（ナノマシーン）を制御する物理チップモジュール。ハッカーの物理装備であるリグ（端末）のクロック拡張や、ハードウェアバイパス工作に消費される。',
    usage: 'ナノチップボーナスを持つカードを集めることで、ハードウェア工作施設やサイバー強化ラボの割引が可能。メガコーポ派閥のSponsor（スポンサー）との提携条件にも頻出する。'
  },
  plasma: {
    title: 'プラズマ / PLASMA',
    id: 'RESC_PLAS_004',
    color: '#e8ff4d (イエロー)',
    icon: '🔋',
    themeColor: '#e8ff4d',
    lore: '都市の電力網から盗電（グリッドタップ）してチャージされる高出力エネルギーセル。防壁の強制遮断（ICEブレイク）や、電力駆動する重機械施設アセットの維持に必要となる。',
    usage: '高コスト・高勝利点のアセット（核融合ジェネレーターや軌道レーザー等）の購入で要求されやすい。プラズマボーナスを溜めれば、後半の大量得点への近道となる。'
  },
  intel: {
    title: 'インテル / INTEL',
    id: 'RESC_INTL_005',
    color: '#9b5cff (パープル)',
    icon: '👁️',
    themeColor: '#9b5cff',
    lore: '企業の役員暗殺計画や深層ウェブのゼロデイ脆弱性など、最高機密とされるインテリジェンス。シンジケートが都市裏社会での影響力を示すための交渉材料。',
    usage: '主に情報・機密工作アセットカードの購入コストとなる。インテルの永久ボーナスを所持していれば、最高レベルのインテル計画カードを無料で購入することも可能になる。'
  },
  crypto: {
    title: '暗号キー / CRYPTO',
    id: 'RESC_CRYP_JOKER',
    color: '#ffffff (ホワイト)',
    icon: '🔑',
    themeColor: '#ffffff',
    lore: 'メガコーポすら解読不可能な最上位マスター暗号キー。どの暗号資源のプロトコルにも同化・偽装することが可能な、最強のジョーカー的データ。',
    usage: 'アセットを「キープ（予約）」した際に銀行から自動で1枚獲得できる（手元に最大3枚保持）。カード購入時に任意の色の不足分を埋めるジョーカートークンとして使用される。'
  }
};

function initTokenSelector() {
  const tokenItems = document.querySelectorAll('#token-db-selector .token-item');
  const screenEl = document.getElementById('terminal-display-screen');
  const titleEl = document.getElementById('terminal-resource-title');
  const idEl = document.getElementById('terminal-resource-id');
  const colorEl = document.getElementById('terminal-resource-color');
  const loreEl = document.getElementById('terminal-resource-lore');
  const usageEl = document.getElementById('terminal-resource-usage');
  const iconEl = document.getElementById('terminal-resource-icon');
  const glowCircleEl = document.getElementById('terminal-glow-circle');

  if (!tokenItems.length || !screenEl) return;

  tokenItems.forEach(item => {
    item.addEventListener('click', () => {
      // 1. Remove active state from other items
      tokenItems.forEach(t => t.classList.remove('active'));
      // 2. Add active to current
      item.classList.add('active');

      // 3. Extract resource data
      const resourceType = item.getAttribute('data-resource');
      const data = RESOURCE_DATA[resourceType];

      if (!data) return;

      // 4. Trigger terminal glitch effect temporarily
      screenEl.classList.add('terminal-glitch');
      iconEl.classList.add('active-anim');
      setTimeout(() => {
        screenEl.classList.remove('terminal-glitch');
        iconEl.classList.remove('active-anim');
      }, 300);

      // 5. Update content inside terminal screen
      setTimeout(() => {
        titleEl.textContent = data.title;
        idEl.textContent = data.id;
        colorEl.textContent = data.color;
        loreEl.textContent = data.lore;
        usageEl.textContent = data.usage;
        iconEl.textContent = data.icon;
        
        // Update glow border & style color dynamically
        glowCircleEl.style.borderColor = data.themeColor;
        glowCircleEl.style.boxShadow = `0 0 15px ${data.themeColor}`;
        iconEl.style.textShadow = `0 0 20px ${data.themeColor}`;
      }, 100);
    });
  });
}

/* ==========================================================================
   4. Rules Accordion Handler
   ========================================================================== */
function initRulesAccordion() {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentElement;
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other items (classic single accordion style)
      document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== parent) {
          item.classList.remove('open');
          item.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
          item.querySelector('.accordion-content').style.maxHeight = '0px';
        }
      });

      // Toggle current item
      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        parent.classList.remove('open');
        parent.querySelector('.accordion-content').style.maxHeight = '0px';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        parent.classList.add('open');
        
        // Compute precise scroll height for content animation
        const content = parent.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 100 + 'px';
      }
    });
  });
}

/* ==========================================================================
   5. Interactive Click Micro-Interactions (Cyber sound/visual)
   ========================================================================== */
function initInteractiveBeeps() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-play-now, .btn-purchase, .token-item');
  
  // Custom subtle audio feedback (cyber beep synthesizer)
  // Utilizes Web Audio API so no audio files need to be preloaded!
  let audioCtx = null;

  function playCyberBeep(frequency = 800, duration = 0.08, type = 'sine') {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      
      // Cyber decay profile
      gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context might fail on some security policies or browsers, silent fail is fine
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      // High pitch mouseover chirps
      playCyberBeep(1200, 0.02, 'sine');
    });

    btn.addEventListener('click', () => {
      // Success activation beep
      playCyberBeep(600, 0.12, 'triangle');
      setTimeout(() => {
        playCyberBeep(900, 0.08, 'triangle');
      }, 50);
    });
  });
}

// Add CSS helper dynamically for terminal flicker animation
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
  .terminal-glitch {
    animation: screen-flicker-anim 0.25s linear;
  }
  @keyframes screen-flicker-anim {
    0% { opacity: 0.3; filter: hue-rotate(90deg) contrast(1.5); }
    50% { opacity: 0.9; filter: hue-rotate(-90deg) contrast(1.8); }
    100% { opacity: 1; filter: none; }
  }
`;
document.head.appendChild(styleSheet);
