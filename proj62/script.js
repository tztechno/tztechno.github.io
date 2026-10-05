/**
 * NASA ISS Earth Realtime Viewer - LP Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Navbar Scroll Glass Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Interactive Camera View Showcase Tabs
  const navItems = document.querySelectorAll('.camera-nav-item');
  const viewImages = document.querySelectorAll('.camera-img');
  const badgeOverlay = document.getElementById('camera-overlay-badge');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetView = item.dataset.view;

      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update active image
      viewImages.forEach(img => {
        if (img.dataset.view === targetView) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });

      // Update badge text
      if (badgeOverlay) {
        badgeOverlay.textContent = item.querySelector('h4').textContent.toUpperCase() + ' // LIVE 3D';
      }
    });
  });

  // 4. Live Simulated Telemetry Ticker (Hero Section)
  const elAlt = document.getElementById('hero-alt');
  const elSpeed = document.getElementById('hero-speed');
  const elUtc = document.getElementById('hero-utc');

  let baseSpeed = 27602;
  let baseAlt = 421.4;

  setInterval(() => {
    const now = new Date();
    if (elUtc) {
      elUtc.textContent = now.toISOString().slice(11, 19) + ' UTC';
    }

    if (elSpeed) {
      const jitter = (Math.random() - 0.5) * 4;
      elSpeed.textContent = (baseSpeed + jitter).toFixed(0).toLocaleString() + ' km/h';
    }

    if (elAlt) {
      const altJitter = (Math.random() - 0.5) * 0.2;
      elAlt.textContent = (baseAlt + altJitter).toFixed(1) + ' km';
    }
  }, 1000);

  // 5. Bilingual Toggle Support
  const btnLangToggle = document.getElementById('btn-lp-lang');
  let currentLang = 'ja';

  const LP_TEXTS = {
    ja: {
      navFeatures: '機能紹介',
      navViews: '視点切り替え',
      navRadar: '2D軌道マップ',
      navDesktop: 'デスクトップ版',
      btnBuy: 'デスクトップ版を購入',
      btnSpecs: '動作環境・仕様を見る',
      heroTag: 'リアルタイム宇宙ステーション観測',
      heroTitle: '国際宇宙ステーションから、<br><span class="gradient-text">いま、この瞬間の地球を眺める。</span>',
      heroDesc: '高度420kmを秒速7.65kmで周回するISSの視点をリアルタイムに3Dシミュレーション。コックピット視点、後方カメラ、高精度2D軌道マップ、早回し・巻き戻し機能で未知の地球を旅する。',
      ctaTitle: '宇宙ステーションの車窓から、地球を見つめよう。',
      ctaDesc: '買い切り ¥150 で永久利用可能。macOS & Windows 対応のネイティブデスクトップアプリです。'
    },
    en: {
      navFeatures: 'Features',
      navViews: 'Camera Views',
      navRadar: '2D Radar Map',
      navDesktop: 'Desktop App',
      btnBuy: 'Buy Desktop App ($1.00 / ¥150)',
      btnSpecs: 'System Requirements & Specs',
      heroTag: 'REALTIME ORBITAL OBSERVATION',
      heroTitle: 'Behold the Earth in Real-Time <br><span class="gradient-text">from the International Space Station.</span>',
      heroDesc: 'Experience photorealistic 3D simulation of Earth from the ISS orbiting at 420 km altitude at 7.65 km/s. Featuring Cupola cockpit view, 2D orbital ground track, time travel, and instant scenic jumps.',
      ctaTitle: 'Look down upon the Earth from the station window.',
      ctaDesc: 'One-time purchase ¥150 for lifetime access. Native standalone desktop app for macOS & Windows.'
    }
  };

  if (btnLangToggle) {
    btnLangToggle.addEventListener('click', () => {
      currentLang = currentLang === 'ja' ? 'en' : 'ja';
      btnLangToggle.textContent = currentLang === 'ja' ? 'EN / 日本語' : 'JA / English';
      
      const t = LP_TEXTS[currentLang];
      document.querySelectorAll('[data-lp-i18n]').forEach(el => {
        const key = el.dataset.lpI18n;
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });
    });
  }
});
