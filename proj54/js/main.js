/**
 * MONACO DRIVE - Landing Page Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Management
  const langBtns = document.querySelectorAll('.lang-btn');
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  const storedLang = localStorage.getItem('monaco_drive_lp_lang');
  const browserLang = (navigator.language || '').toLowerCase().startsWith('ja') ? 'ja' : 'en';

  let currentLang = paramLang || storedLang || browserLang;
  if (!['en', 'ja'].includes(currentLang)) {
    currentLang = 'en';
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('monaco_drive_lp_lang', lang);
    document.documentElement.lang = lang;

    // Update active button state
    langBtns.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update text content
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update HTML content if any
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update language-dependent images (e.g. cockpit-ja vs cockpit-en)
    document.querySelectorAll('[data-i18n-img]').forEach(img => {
      const baseName = img.getAttribute('data-i18n-img'); // e.g. "cockpit", "chase", "trackside"
      img.src = `images/${baseName}-${lang}.jpg`;
    });
  }

  // Bind language buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  // Initialize Language
  setLanguage(currentLang);

  // 2. Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 4. Camera Showcase Tabs
  const tabBtns = document.querySelectorAll('.view-tab-btn');
  const viewPanels = document.querySelectorAll('.view-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      tabBtns.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(target);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 6. Realistic HUD Telemetry Simulation in Hero
  const hudSpeed = document.getElementById('liveSpeed');
  const hudGear = document.getElementById('liveGear');
  const hudSteer = document.getElementById('liveSteer');

  if (hudSpeed) {
    let speed = 268;
    let delta = 1;
    setInterval(() => {
      // Small jitter to make telemetry feel alive
      speed += (Math.random() * 4 - 1.8) * delta;
      if (speed > 294) delta = -1;
      if (speed < 240) delta = 1;
      hudSpeed.textContent = `${Math.round(speed)} km/h`;
    }, 400);
  }
});
