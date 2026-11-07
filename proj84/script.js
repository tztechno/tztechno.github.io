// Escape Drone LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navPresets: '8 Scenarios', navTech: 'Perception & Evasion', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'Four interceptors waiting ahead —<br><span class="accent">evade them with MuJoCo physics &amp; predictive control.</span>',
  heroLead: 'Simulate five quadrotors simultaneously in 500 Hz MuJoCo rigid-body physics (2 ms step): mission drone D0 flying from Point A to Point B, and four interceptor drones d1–d4 waiting at posts C1–C4 to ram it mid-air. Any mid-air contact downs both drones immediately. Compare forward-camera visual tracking, degraded radio position broadcasts, and Kalman sensor fusion under strong wind, gusts, and unannounced payload mass — and export every trial to CSV.',
  heroGet: 'Get the macOS desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon .dmg) · Runs offline · 日本語 / English',
  statN: '5 Drones', statNSub: 'MuJoCo rigid bodies (500 Hz)',
  statPercN: '4 Modes', statPerc: 'Real-Time, Visual, Fusion, None',
  statPresetN: '8 Scenarios', statPreset: 'wind, heavy, comms lag, fusion',
  statCamN: '4 Views + Map', statCam: 'Chase, Interceptor, Orbit, Overview',
  statCsvN: 'CSV Export', statCsv: '36-column trial conditions & results',
  featTitle: 'Test both "how a drone perceives threats" and "how it evades" in rigid-body physics',
  featLead: 'Both D0 and interceptors d1–d4 fly under the exact same physics with four spinning rotors, motor lag, aerodynamic drag, and contact detection. See how camera FOV, comms latency, wind gusts, and heavy payloads shape split-second evasion.',
  f1Title: '3-second look-ahead velocity planner against lead-pursuit interceptors',
  f1Body: 'Interceptors d1–d4 loiter at C1–C4 and dive toward the predicted intercept point as soon as D0 enters trigger range (default 110 m). At 20 Hz, D0 samples candidate 3D velocities (24 azimuths × 4 speeds × 3 vertical rates) and forward-simulates 3.0 s of both its own trajectory and the interceptors’ pursuit, picking the velocity that minimizes collision risk, route deviation, and ground proximity.',
  f1c1: '3 s look-ahead planner (20 Hz)', f1c2: 'Lead-pursuit interceptors', f1c3: 'Mid-air contact downs both crafts',
  f2Title: 'Forward-camera "Visual" tracking, degraded "Real-Time" broadcasts, and Kalman Fusion',
  f2Body: 'In Visual mode (default 120° FOV, 70 m range), D0 only tracks interceptors inside its camera frustum with ~6% range noise and 0.1 s latency, leaving blind spots vulnerable. Realistic radio position sharing (1 Hz rate, 0.5 s latency, 3 m noise, 10% packet loss) struggles with late-stage maneuvers. "Visual + Real-Time Fusion" combines both in a single Kalman filter — cueing the camera via radio and sharpening close-range tracks visually.',
  f2c1: 'Camera FOV wedge & active panning', f2c2: 'Configurable rate, latency, noise & drop', f2c3: 'Kalman sensor fusion',
  f3Title: 'Disturbance observer (DOB) and online mass estimation conquer wind and heavy payloads',
  f3Body: 'A logarithmic wind profile, Ornstein-Uhlenbeck turbulence, and multi-second gusts push every airframe. Adding up to +3.0 kg of unannounced payload to D0 cuts its thrust margin. Each drone’s geometric SE(3) controller runs a horizontal disturbance observer (DOB) to cancel wind forces and an online mass estimator that learns true mass from vertical acceleration in flight.',
  f3c1: 'MuJoCo 500 Hz (2 ms step)', f3c2: 'Disturbance observer (DOB)', f3c3: 'Online mass adaptation',
  f4Title: 'Visualize D0’s beliefs, camera frustum, and interceptor aim lines in 3D',
  f4Body: 'In both the 3D viewport and the tactical minimap, yellow wireframe spheres show D0’s estimated interceptor positions and safety radius (orange for the primary threat, translucent when coasting on prediction), alongside the yellow camera FOV wedge, D0’s velocity command arrow, and dashed red interceptor aim lines. Slow playback to ×0.25 to inspect close passes and interceptor friendly-fire collisions.',
  f4c1: 'Chase, Interceptor, Orbit & Overview cams', f4c2: '×0.25–×4 playback speed', f4c3: 'Tactical minimap & event log',
  f5Title: 'Automatic trial history and one-click 36-column CSV export for Excel',
  f5Body: 'Every finished run records outcome, reason, flight time, distance flown, closest pass distance and interceptor ID, evade count, downed interceptors, estimated vs. true D0 mass, and final status of d1–d4. Click "Save CSV" to write a UTF-8 BOM CSV file (36 columns) directly to your macOS Downloads folder.',
  f5c1: '36-column trial summary CSV', f5c2: 'Saves directly to Downloads', f5c3: 'Deterministic random seeds (1–50)',
  f6Title: 'Switch between Japanese and English with one click (or the L key)',
  f6Body: 'Click the language button at the top right of the left panel (or press L) to switch scenario presets, parameters, live telemetry, event logs, 3D pad labels, summary dialogs, and exported CSV headers between Japanese and English immediately. Full user manuals in both languages are included.',
  f6c1: 'Instant 日本語 / English switch', f6c2: 'JA & EN manuals included', f6c3: 'Runs 100% offline',
  prTitle: '8 built-in experimental scenarios ready in one click',
  prLead: 'From calm ideal conditions to strong winds, heavy payloads, narrow camera FOVs, degraded radio links, and Kalman sensor fusion — select a scenario and press ▶ Start.',
  p1a: 'Real-Time Share / Visual Only', p1b: 'Baseline omnidirectional position sharing vs. forward-camera-only tracking (120° FOV, 70 m range) with active camera panning.',
  p2a: 'Strong Wind / Heavy Craft', p2b: '9 m/s NW wind + 5 m/s gusts & turbulence canceled by the DOB vs. +1.5 kg unannounced payload on D0 with reduced thrust margin.',
  p3a: 'Hard: Visual / Hard: Real-Time', p3b: 'Harsh wind + heavy payload tested with forward camera only vs. realistic degraded broadcasts only (1 Hz, 0.5 s lag, 3 m error, 10% drop).',
  p4a: 'Hard: Sensor Fusion / No Evasion', p4b: 'Fusing realistic broadcasts and forward camera in a Kalman filter under harsh conditions vs. no-evasion baseline.',
  prCap: '"Overview" camera showing the full arena: D0 flying the dashed blue route from A (left) to B (right, green safe ring) while d1–d4 launch from C1–C4',
  techTitle: '4-layer loop of perception, estimation, predictive planning, and geometric control',
  techLead: 'Integrates uncertainty-aware Kalman state estimation, pursuit-aware velocity sampling, and disturbance-rejecting SE(3) attitude control in a closed loop.',
  techCap: 'Yellow/orange wireframe spheres mark D0’s estimated interceptor positions and safety radius; the yellow wedge is the camera FOV; dashed red lines show interceptor lead-pursuit aim',
  t1a: '1. Kalman Filter Fusion of Broadcasts & Forward Camera', t1b: 'Fuses low-rate delayed radio broadcasts with bearing-accurate camera detections; inflates safety clearance automatically when position variance grows.',
  t2a: '2. Active Camera Panning & Threat Lock-On', t2b: 'Sweeps the camera left and right to scan blind spots when clear, and slews to lock onto the highest-priority interceptor when a threat is tracked.',
  t3a: '3. Pursuit-Aware 3-Second Look-Ahead Planner (20 Hz)', t3b: 'Evaluates 288 candidate 3D velocities by forward-simulating both D0 and lead-pursuit interceptors for 3 s, minimizing collision, route, and ground costs.',
  t4a: '4. Geometric SE(3) Control + DOB + Online Mass Estimation (500 Hz)', t4b: 'Combines Lee geometric attitude control with a horizontal disturbance observer and online mass adaptation, prioritizing vertical lift under thrust saturation.',
  startTitle: 'macOS Desktop App', startLead: 'A native Tauri v2 desktop application with the MuJoCo WASM physics engine bundled inside — works right out of the box with no internet connection.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', priceLabel: 'Price', priceVal: '¥150 (one-time)', langLabel: 'Languages',
  getMac: 'Get the macOS app (¥150)',
  deskNote: '* Runs completely offline. Trial CSV files are saved directly to your macOS Downloads folder.',
  ctaTitle: 'Experiment with autonomous drone perception, sensor fusion, and evasion <span class="accent">on your Mac.</span>', ctaGet: 'Get the macOS desktop app',
  credits: 'Physics: MuJoCo (WebAssembly, 2 ms step, 5 6-DOF rigid bodies) / Estimation: Kalman filter (Visual + Broadcast fusion) / Evasion: 3 s look-ahead velocity sampling / Rendering: Three.js',
  fStore: 'Store page', fManualJa: '使用マニュアル (JA)',
};
const TITLE = {
  ja: 'Escape Drone | 迎撃機 4 機の体当たりを自律回避して飛ぶ 5 機 MuJoCo 物理シミュレーター',
  en: 'Escape Drone | 5-Drone Autonomous Evasion & Interception Physics Simulator in MuJoCo',
};
const KEY = 'escapedrone-lp-lang';

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || '').startsWith('ja') ? 'ja' : 'en';
}

const EN_SHOTS = ['hero', 'visual', 'wind', 'fusion', 'map', 'result'];
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
