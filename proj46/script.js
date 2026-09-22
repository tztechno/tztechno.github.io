/**
 * CYBER DRAGON: BREACH Desktop Edition
 * Landing Page Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initCyberBackground();
  initNavbarScroll();
  initMobileMenu();
  initFaqAccordion();
  initGalleryLightbox();
  initCheckoutModals();
  detectUserPlatform();
  initScrollAnimations();
});

/* ==========================================================================
   1. Multi-Language Switcher (JA / EN)
   ========================================================================== */
let currentLang = 'ja';

function initLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');

  // Load saved preference or browser language
  const savedLang = localStorage.getItem('cyber_dragon_lang');
  if (savedLang) {
    currentLang = savedLang;
  } else {
    const userLang = navigator.language || navigator.userLanguage;
    currentLang = userLang.startsWith('ja') ? 'ja' : 'en';
  }

  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ja' ? 'en' : 'ja';
      localStorage.setItem('cyber_dragon_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-ja][data-en]');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.innerHTML = text;
    }
  });

  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'ja' ? '🌐 日本語 / EN' : '🌐 EN / 日本語';
  }

  document.documentElement.lang = lang;
}

/* ==========================================================================
   2. Cyber Particle Background (Canvas)
   ========================================================================== */
function initCyberBackground() {
  const canvas = document.getElementById('cyber-bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 45;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 1;
      this.color = Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(255, 0, 127, ';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color + '0.8)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawLines();
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. Navbar Scroll Behavior
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   4. Mobile Menu Drawer
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
  });

  const links = drawer.querySelectorAll('.mobile-nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  });
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(otherItem => otherItem.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. Gallery Lightbox
   ========================================================================== */
function initGalleryLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const backdrop = document.getElementById('lightbox-backdrop');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (!modal || !modalImg) return;

  function openLightbox(src, caption) {
    modalImg.src = src;
    if (modalCaption) modalCaption.textContent = caption || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const fullSrc = card.getAttribute('data-full');
      const caption = card.getAttribute('data-caption');
      if (fullSrc) {
        openLightbox(fullSrc, caption);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   7. Checkout Modals & Platform Highlighting
   ========================================================================== */
function initCheckoutModals() {
  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('checkout-backdrop');
  const closeBtn = document.getElementById('checkout-close');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const winBtn = document.getElementById('btn-buy-win');
  const macBtn = document.getElementById('btn-buy-mac');
  const platformText = document.getElementById('modal-platform-text');
  const stripeLink = document.getElementById('modal-stripe-link');

  if (!modal) return;

  function openModal(platform) {
    if (platformText) {
      platformText.textContent = platform === 'win' 
        ? 'Windows Edition (x64 Setup .exe)' 
        : 'macOS Edition (Apple Silicon & Intel .dmg)';
    }
    if (stripeLink) {
      stripeLink.href = `https://cyber-matrix.netlify.app/products/dragon?os=${platform}`;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (winBtn) {
    winBtn.addEventListener('click', () => openModal('win'));
  }
  if (macBtn) {
    macBtn.addEventListener('click', () => openModal('mac'));
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   8. Detect User Platform (OS)
   ========================================================================== */
function detectUserPlatform() {
  const ua = navigator.userAgent.toLowerCase();
  const isMac = ua.includes('mac') || ua.includes('darwin');
  const isWin = ua.includes('win');

  const winBtn = document.getElementById('btn-buy-win');
  const macBtn = document.getElementById('btn-buy-mac');

  if (isMac && macBtn) {
    macBtn.style.transform = 'scale(1.02)';
    macBtn.style.borderColor = 'var(--cyan-primary)';
  } else if (isWin && winBtn) {
    winBtn.style.transform = 'scale(1.02)';
    winBtn.style.borderColor = 'var(--cyan-primary)';
  }
}

/* ==========================================================================
   9. Scroll Animations
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.feature-card, .wave-card, .gallery-card, .manual-card, .specs-card, .pricing-box');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
