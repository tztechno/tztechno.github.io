// Show Drone LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navPresets: '8 Presets', navTech: 'Safety Architecture', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: '100 glowing drones in the night sky,<br><span class="accent">driven by per-craft physics &amp; autonomous avoidance.</span>',
  heroLead: 'Watch 100 small quadrotors launch from a 10 × 10 ground grid, form Shape A in the sky, morph into Shape B, and return to land — each simulated as an individual 6-DOF rigid body in MuJoCo (4 ms step). Experiment with Hungarian non-crossing assignment (CAPT), shared-position broadcasts with Reciprocal Velocity Obstacles (RVO) collision avoidance, and ballistic wreck dodging from any 3D camera angle, and export full CSV logs.',
  heroGet: 'Get the macOS desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon .dmg) · Runs offline · 日本語 / English',
  statN: '100 Drones', statNSub: 'MuJoCo rigid bodies (250 Hz)',
  statFormN: '12 Shapes', statForm: '3D & 2D formations (A → B)',
  statPresetN: '8 Presets', statPreset: 'wind, degraded comms, random, failures',
  statCamN: '5 Cameras', statCam: 'audience, aerial, top, side, follow',
  statCsvN: 'CSV Export', statCsv: 'run summary & all 100 trajectories',
  featTitle: 'Explore both the artistry of a drone show and the science that prevents collisions',
  featLead: 'Not a pre-baked animation: 400 rotors generate thrust with lag, fight wind and turbulence, broadcast positions, and dodge mid-air hazards in real time.',
  f1Title: 'Combine 12 formations freely and morph from A to B in 3D space',
  f1Body: 'Choose Formations A and B from 12 built-in shapes: Sphere, Heart, Star, Double Helix, Saturn, Text "N85", Wave, Cube, Smile, Mt. Fuji & Sun, Triple Rings, and Horizontal Grid. The Hungarian algorithm assigns target slots to minimise total squared distance along a shared minimum-jerk time law, guaranteeing non-crossing paths under optimal assignment.',
  f1c1: '12 formations (🎲 Random pick)', f1c2: 'Vertical-axis rotation in hold', f1c3: 'Hungarian optimal assignment (CAPT)',
  f2Title: 'Every drone is a MuJoCo rigid body adapting to wind, gusts, and unknown payload',
  f2Body: 'All 100 quadrotors are stepped at 4 ms with first-order motor lag, airframe drag, and a log-profile wind field with Ornstein-Uhlenbeck turbulence and gusts. Each craft’s geometric SE(3) controller runs a horizontal disturbance observer (DOB) and an online mass estimator that learns unannounced payload weight from vertical acceleration in flight.',
  f2c1: 'MuJoCo 250 Hz physics', f2c2: 'Disturbance observer (DOB)', f2c3: 'Online mass adaptation',
  f3Title: 'Shared position broadcasts and sampled RVO keep crossing paths from colliding',
  f3Body: 'Switch slot assignment to "Random" and all 100 paths cross through the middle of the sky. Drones broadcast their positions and velocities at a configurable rate (with latency, noise, and packet loss). Whenever a neighbour is predicted to breach safe distance within 2.5 s, sampled Reciprocal Velocity Obstacles (RVO) evaluates ~80 candidate velocities to dodge smoothly and return to the planned path.',
  f3c1: 'Sampled RVO avoidance', f3c2: 'Configurable rate, latency, error & drop', f3c3: 'Right-of-way tie-breaking',
  f4Title: 'Predicts the parabolic fall of powerless wrecks so drones below can dodge',
  f4Body: 'A drone that loses power or touches another craft breaks its props and tumbles down under gravity, taking out any drone it hits along the way. With "Dodge Falling Wrecks" enabled, a failing craft sends one last Mayday packet; nearby drones propagate its ballistic trajectory 3 s ahead and clear a 1.5× wider cylinder around its fall.',
  f4c1: 'Mayday + ballistic fall prediction', f4c2: 'Compare chain crashes on vs. off', f4c3: 'Sparks, fiery trails & ground wrecks',
  f5Title: '5 camera modes, run history, and one-click CSV export of runs and trajectories',
  f5Body: 'Switch between Audience, Aerial, Top, Side, and Follow views (or click any drone in 3D to follow it), and toggle night/day sky, light trails, target slots, and avoidance highlights. Every finished run logs closest approach, formation RMS errors, and avoidance stats, ready to export as a 47-column Runs CSV or a 0.2 s full-swarm Track CSV (~40,000 rows).',
  f5c1: 'Click any drone to follow', f5c2: 'Runs CSV (47 columns)', f5c3: 'Full 100-drone Track CSV',
  f6Title: 'Japanese and English, one button',
  f6Body: 'Click the language button at the top right of the left panel (or press L) to switch presets, parameters, live telemetry, event logs, 3D scene labels, summary tables, and CSV headers between Japanese and English immediately. Full user manuals in both languages are included.',
  f6c1: 'Instant 日本語 / English switch', f6c2: 'JA & EN manuals included', f6c3: 'Runs 100% offline',
  prTitle: '8 built-in scenario presets ready in one click',
  prLead: 'From a calm baseline show to strong winds, degraded radio links, tangled random paths, and mid-air power failures — select a preset and press ▶ Start to compare.',
  p1a: 'Standard / Strong Wind', p1b: 'Baseline calm show (Sphere → Heart) vs. 8 m/s west wind with 4 m/s gusts and turbulence testing the disturbance observer and spacing.',
  p2a: 'Degraded Comms / Heavy + Wind', p2b: '2 Hz broadcasts with 0.5 s latency, 1 m error, and 20% packet loss vs. +0.25 kg unknown payload compensated by online mass estimation.',
  p3a: 'Random Assign / No-Avoid Baseline', p3b: 'Tangled crossing paths safely resolved by RVO avoidance vs. the same crossing paths with avoidance disabled, causing mid-air collisions.',
  p4a: 'Fast & Tight / Power Failures', p4b: '12 m/s, 1.8 m spacing, rotating Cube → Saturn show vs. 5 mid-flight power failures testing ballistic wreck prediction and dodging.',
  prCap: '"Random Assign" preset seen from the Top camera: orange halos mark drones actively executing RVO dodges as crossing paths morph into a Double Helix',
  techTitle: '4-layer safety architecture that prevents mid-air collisions',
  techLead: 'Combines offline strategic trajectory deconfliction used in commercial drone light shows with tactical onboard Detect-and-Avoid (DAA) required for autonomous swarms and BVLOS operations.',
  techCap: 'Orange halos highlight drones actively dodging via RVO; faint dots mark each drone’s planned reference slot',
  t1a: '1. Optimal Slot Assignment (CAPT / Hungarian)', t1b: 'Minimises total squared travel distance over a shared minimum-jerk profile so planned straight-line paths never cross.',
  t2a: '2. Position Broadcast & Constant-Velocity Extrapolation', t2b: 'Drones broadcast position and velocity periodically; receivers extrapolate neighbour states across comms latency, noise, and packet drops.',
  t3a: '3. Sampled Reciprocal Velocity Obstacles (RVO)', t3b: 'Evaluates 26 directions × 3 speed magnitudes when a conflict is predicted within 2.5 s, sharing evasion 50/50 with right-hand rule tie-breaking.',
  t4a: '4. Ballistic Wreck Prediction & Evasion', t4b: 'Propagates parabolic free fall under gravity for 3 s from a crashing drone’s final Mayday and clears a 1.5× safe radius column.',
  startTitle: 'macOS Desktop App', startLead: 'A native Tauri v2 desktop application with the MuJoCo WASM physics engine bundled inside — works right out of the box with no internet connection.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', priceLabel: 'Price', priceVal: '¥150 (one-time)', langLabel: 'Languages',
  getMac: 'Get the macOS app (¥150)',
  deskNote: '* Runs completely offline. Runs CSV and Track CSV files are saved directly to your macOS Downloads folder.',
  ctaTitle: 'Experiment with a 100-drone light show and swarm avoidance <span class="accent">on your Mac.</span>', ctaGet: 'Get the macOS desktop app',
  credits: 'Physics: MuJoCo (WebAssembly, 4 ms step, 100 6-DOF rigid bodies) / Assignment: Hungarian algorithm (CAPT) / Avoidance: Broadcast + Reciprocal Velocity Obstacles (RVO) + Ballistic wreck dodging / Rendering: Three.js',
  fStore: 'Store page', fManualJa: '使用マニュアル (JA)',
};
const TITLE = {
  ja: 'Show Drone | 100 機のドローンショーを MuJoCo で 1 機ずつ物理シミュレート — 自律群制御＆衝突回避シミュレーター',
  en: 'Show Drone | 100-Drone Light Show Physics Simulator in MuJoCo — Autonomous Swarm & Collision Avoidance',
};
const KEY = 'showdrone-lp-lang';

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || '').startsWith('ja') ? 'ja' : 'en';
}

const EN_SHOTS = ['hero', 'heart', 'avoid', 'fail', 'top', 'result'];
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

