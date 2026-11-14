// Fault Propagation LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navModels: 'Bundled Models', navTech: 'How It Works', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'Any fault, anywhere on Earth —<br><span class="accent">see how hard each town shakes.</span>',
  heroLead: 'Load a fault-parameter CSV and watch the rupture spread from its starting point, the P and S waves arrive, and the shaking intensity sweep across the map. Then click any point on land to evaluate the JMA instrumental intensity, peak ground acceleration (PGA), peak ground velocity (PGV), 3-component synthetic waveforms, and response spectrum at that site. Only the terrain you need is downloaded automatically, and site stiffness (Vs30) is estimated from topographic slope.',
  heroGet: 'Get the macOS desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon .dmg) · Worldwide · 日本語 / English',
  statWorldN: 'Worldwide', statWorld: 'terrain fetched on demand',
  statModelN: '9 Quakes', statModel: 'Noto, Tohoku, Türkiye, Chile…',
  statIdxN: '4 Measures', statIdx: 'JMA intensity, MMI, PGV, PGA',
  statWaveN: '3 Components', statWave: 'NS / EW / UD accel. & velocity',
  statCsvN: 'CSV Export', statCsv: 'site results, waveforms, faults',
  featTitle: 'Where, when, and how strongly it shakes — from the fault all the way to your site',
  featLead: 'More than a pretty intensity map: follow the fault size and rupture progression, wave arrival times, site amplification, and the time history of shaking at each location, all in one window.',
  f1Title: 'Just load a fault CSV — get an intensity map anywhere in the world',
  f1Body: 'Load a CSV with one rectangular fault per row (location, depth, length, width, strike, dip, rake, slip). The app downloads only the terrain around the fault from elevation tiles, builds a computation grid, and draws the estimated intensity distribution in seconds. No CSV? Set Mw, strike and dip, then click the map to place a simple fault sized by scaling laws. Faults crossing the dateline are supported.',
  f1c1: 'Load / save fault CSV (drag & drop)', f1c2: 'Faults crossing the dateline supported', f1c3: 'Place a simple fault by clicking',
  f2Title: 'Animate the rupture and the spreading P and S waves over time',
  f2Body: 'Rupture spreads across the fault plane from the starting point at the rupture velocity, and each slipping patch radiates seismic waves. The map shows the P-wave front (dashed blue), the S-wave front (red), the rupture front, and the intensity at that very moment. You can see the S−P interval at a glance, and how long shaking lasts in a great earthquake. When playback ends, the view switches back to the maximum-intensity map.',
  f2c1: 'Rupture propagation (start & speed adjustable)', f2c2: 'P- and S-wave fronts', f2c3: '1x–40x playback & time slider',
  f3Title: 'Click any point on land and evaluate its shaking with waveforms',
  f3Body: 'Major nearby cities are added automatically, and you can add sites by clicking the map or typing coordinates. For each site you get GMPE-based JMA intensity, PGV, PGA and MMI, plus 3-component (NS, EW, UD) acceleration waveforms synthesized by the stochastic finite-fault method, with the JMA instrumental intensity computed by the official procedure. Rupture distance, P and S arrival times, the S−P interval, and how long shaking stays at intensity 4 or above are shown too.',
  f3c1: '3-component acceleration & velocity', f3c2: 'JMA instrumental intensity', f3c3: 'P/S arrivals & shaking duration',
  f4Title: 'Estimate site stiffness (Vs30) from terrain — all the way to response spectra',
  f4Body: 'Plains and valleys shake more; mountains shake less. Vs30, the average S-wave velocity of the top 30 m, is estimated from 30-arc-second topographic slope (Wald & Allen 2007) and its amplification is applied to the intensity map. Override any site’s Vs30 with your own value, such as from borehole data. From the synthetic waveforms, the app draws the 5%-damped acceleration response spectrum (periods 0.05–10 s), a guide to how strongly buildings respond.',
  f4c1: 'Vs30 from topographic slope', f4c2: 'Manual Vs30 override per site', f4c3: '5%-damped response spectrum',
  f5Title: 'Switch between JMA intensity, MMI, PGV and PGA — and compare sites side by side',
  f5Body: 'Display the JMA seismic intensity scale, the Modified Mercalli Intensity (MMI) used internationally, peak velocity, peak acceleration, or Vs30. "Compare sites" charts the GMPE intensity next to the synthetic instrumental intensity for every site. Save results as a one-row-per-site CSV, waveforms as 3-component acceleration and velocity at 0.02 s steps, and the fault model in the same CSV format it reads.',
  f5c1: 'JMA / MMI / PGV / PGA / Vs30', f5c2: 'Site comparison chart', f5c3: 'CSV of results, waveforms & faults',
  f6Title: 'Japanese and English, one button',
  f6Body: 'The JP / EN button at the top right switches the control panel, map legends, charts, site results, messages, and even city names instantly. In English, JMA intensity classes are written 5- / 5+ / 6- / 6+, ready for explaining to international audiences. User manuals in both languages are included.',
  f6c1: 'Instant 日本語 / English switch', f6c2: '~150 cities named in both languages', f6c3: 'JA & EN manuals included',
  mdTitle: '9 fault models from GSI Japan and the USGS, built in',
  mdLead: 'From shallow crustal faults to great plate-boundary earthquakes. Pick one and the app automatically fetches terrain and computes the intensity map and site waveforms.',
  m1a: 'Japan — crustal', m1b: '2024 Noto Peninsula (GSI model, 3 rectangles) and the 2016 Kumamoto mainshock (USGS finite fault).',
  m2a: 'Japan — subduction', m2b: '2011 Tohoku-oki (Mw9.0): a ~500 km rupture growing for ~150 s, shaking eastern Japan for minutes.',
  m3a: 'World — crustal', m3b: '2023 Türkiye–Syria (Mw7.8) and 2019 Ridgecrest, USA (Mw7.0).',
  m4a: 'World — subduction', m4b: '2025 Kamchatka, 2010 Maule (Chile), 2015 Illapel (Chile), and 2004 Sumatra–Andaman.',
  s5l: '5-', s5u: '5+', s6l: '6-', s6u: '6+',
  mdCap: '2011 Tohoku-oki, about 64 s after rupture start: the S wave (red) is passing Sendai and Fukushima while the P wave (dashed blue) has already reached the Kanto region',
  techTitle: 'Four steps from the fault to the shaking at your site',
  techLead: 'Combines the attenuation relations and site amplification used in Japan’s National Seismic Hazard Maps with rupture propagation and stochastic waveform synthesis.',
  t1a: 'Fault elements & rupture', t1b: 'Each CSV fault is split into up to ~420 elements; patches with slip ≥ 10% of the maximum form the rupture area. Rupture spreads from the start point at a constant speed, and each element radiates P and S waves.',
  t2a: 'Terrain & Vs30', t2b: 'Only the elevation tiles around the fault are downloaded (and cached). Vs30 is estimated from 30-arc-second slope with the active-tectonic or stable-continent relation.',
  t3a: 'GMPE shaking map', t3b: 'PGV on engineering bedrock from Si & Midorikawa (1999) using the closest rupture distance, times site amplification (Fujimoto & Midorikawa 2006), converted to JMA intensity (Fujimoto & Midorikawa 2005) and MMI (Worden et al. 2012).',
  t4a: 'Stochastic waveforms', t4b: 'Each element’s waves are built from an ω² source, geometric spreading, Q and κ, then summed with their arrival delays. By default PGV and the PGA/PGV ratio are calibrated to the GMPE.',
  techNote: '* GMPEs give median shaking; real shaking scatters by about ±0.2–0.3 in log10 (roughly ×0.6–1.7). Earthquakes above Mw 8.3 are evaluated as Mw 8.3. This app is for learning and exploration — refer to official assessments for disaster-management decisions.',
  startTitle: 'macOS Desktop App', startLead: 'A native Tauri v2 desktop app, ready to use right after install. Try the 9 bundled fault models instantly, or load your own fault CSV.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', priceLabel: 'Price', priceVal: '¥150 (one-time)', langLabel: 'Languages',
  getMac: 'Get the macOS app (¥150)',
  deskNote: '* An internet connection is required to download terrain data (AWS Terrain Tiles); fetched areas are cached. Result, waveform and fault CSV files are saved to your macOS Downloads folder.',
  ctaTitle: 'From the fault to the shaking in your town — <span class="accent">explore it on your Mac.</span>', ctaGet: 'Get the macOS desktop app',
  credits: 'GMPE: Si & Midorikawa (1999) / Site amplification: Fujimoto & Midorikawa (2006) / Intensity conversion: Fujimoto & Midorikawa (2005), Worden et al. (2012) / Vs30: Wald & Allen (2007) / Waveforms: stochastic finite-fault method (Boore 2003 and others) / Terrain: Mapzen Terrain Tiles (AWS Open Data) / Fault models: GSI Japan, USGS',
  fStore: 'Store page', fManualJa: '使用マニュアル (JA)',
};
const TITLE = {
  ja: 'Fault Propagation | 世界のどこの断層 CSV からでも、地震の揺れの伝播と陸上の各地点の震度・波形を評価 — 地震動シミュレーター',
  en: 'Fault Propagation | Ground Motion Propagation & Site Evaluation from Any Fault CSV, Worldwide',
};
const KEY = 'faultprop-lp-lang';

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || '').startsWith('ja') ? 'ja' : 'en';
}

const EN_SHOTS = ['hero', 'propagation', 'site', 'spectrum', 'turkey'];
function swapShots(lang) {
  document.querySelectorAll('img[src^="assets/"]').forEach((img) => {
    const m = img.getAttribute('src').match(/^assets\/([a-z]+?)(_en)?\.jpg$/);
    if (!m || !EN_SHOTS.includes(m[1])) return;
    img.setAttribute('src', `assets/${m[1]}${lang === 'en' ? '_en' : ''}.jpg`);
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.title = TITLE[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (el.dataset.ja === undefined) el.dataset.ja = el.textContent;
    const en = EN[el.dataset.i18n];
    el.textContent = lang === 'en' && en ? en : el.dataset.ja;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    if (el.dataset.ja === undefined) el.dataset.ja = el.innerHTML;
    const en = EN[el.dataset.i18nHtml];
    el.innerHTML = lang === 'en' && en ? en : el.dataset.ja;
  });
  swapShots(lang);
  document.getElementById('lang-btn').textContent = lang === 'en' ? '日本語' : 'English';
  try { localStorage.setItem(KEY, lang); } catch (e) { /* storage blocked */ }
}

let lang = initialLang();
applyLang(lang);
document.getElementById('lang-btn').addEventListener('click', () => { lang = lang === 'ja' ? 'en' : 'ja'; applyLang(lang); });

// reveal sections as they scroll into view
const targets = document.querySelectorAll('.feature, .tech, .platform, .stat, .shot.wide, .split');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  targets.forEach((t) => { t.classList.add('reveal'); io.observe(t); });
}
