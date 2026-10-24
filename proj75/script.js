// Underwater Drone LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navCourses: 'Courses', navTech: 'How it works', navDesktop: 'Desktop', navBuy: 'Get it',
  heroTitle: 'Dive the deep.<br><span class="accent">On real physics.</span>',
  heroLead: 'Pilot a six-thruster underwater drone (ROV), simulated with the MuJoCo physics engine, across an imaginary seabed: a coral reef, a sunken galleon, hydrothermal vents, an 80 m trench and a subsea base. Thread the gates against swell and current and chase the target time. Waves and current are tuned with sliders, and five flight modes — from fully manual to fully automatic — let you choose what you fly and what the machine flies.',
  heroBuy: 'Get the desktop app', heroMore: 'See the features',
  statStep: 'MuJoCo physics step', statThr: 'vectored thrusters', statCourse: 'courses + free dive', statLen: 'per course', statWave: 'tunable wave height',
  featTitle: 'From the cover to the goal gate', featLead: 'Choose a course, set the sea, press START and dive. The clock stops at the goal gate.',
  f1Title: 'Cover — pre-dive check and course choice',
  f1Body: 'At launch the ROV turns slowly over seabed contours while its forward sonar fan sweeps. Loading the physics engine is shown as a pre-dive checklist. Pick one of six courses and press “To course”: thrusters T0–T5 arm one by one and the ROV waits at the start point.',
  f1c1: '3D ROV turntable', f1c2: 'keys 1–6 pick a course', f1c3: 'nothing moves until START',
  f2Title: 'What is manual, what is automatic — always visible',
  f2Body: 'Five modes: manual, depth hold, altitude hold, station keep and autopilot. A strip at the bottom shows, for each of the four axes (forward, sideways, up/down, turn), whether it is manual, manual + hold, automatic with a target you can move, or fully automatic — and lights up the axis you are moving. In depth hold the machine keeps the depth while you fly the rest.',
  f2c1: 'four axis roles on screen', f2c2: 'target depth / altitude sliders', f2c3: 'any key returns to manual',
  f3Title: 'Waves and current, tuned as finely as the flying',
  f3Body: 'Waves have five sliders — height, period, direction, directional spread (clean swell to confused sea) and the force felt by the ROV. Current has four — speed, direction, slow-down near the seabed and turbulence. Wave motion fades with depth, and the panel shows how much of the surface motion reaches the ROV right now. The water surface moves with the same waves.',
  f3c1: 'waves 0–5 m / period 2–16 s', f3c2: 'current 0–2.5 m/s', f3c3: 'key 0 for a calm sea',
  f4Title: 'Autopilot — gate by gate, even in the dark trench',
  f4Body: 'On autopilot the ROV picks its own heading, depth and speed and passes the gates in order. It never goes lower than 2.5 m above the seabed and cancels sideways drift from the current. Every course is verified end to end, in calm water and in 1.8 m waves with 0.5 m/s current. Touch a flight key and control is yours again.',
  f5Title: 'A course map, and a START that keeps the view clear',
  f5Body: 'The course map on the right draws the chosen course — start, gates and goal — over seabed depth shading and contours. Gates are drawn to scale with their depth, and the legs you have flown turn solid. START, Resume and Again live in a small card in the bottom-left corner, so the 3D sea stays in view.',
  cTitle: 'Five courses and a free dive', cLead: 'Each course runs about 300 m through 6–8 gates in order. Target times assume 1.6 m/s on average.',
  c1: 'Coral reef & rock arch', c1b: 'Through the rock arch and a wide loop round the northern shallows. Shallow water feels the waves most.',
  c2: 'Sunken galleon “Leviathan”', c2b: 'Circle the 18th-century wreck, then sweep the anchor field and the north-east dunes.',
  c3: 'Hydrothermal caldera', c3b: 'Across the caldera, round the outer rim and past the black smokers. Watch the updraft.',
  c4: 'Abyss trench', c4b: 'Off the cliff into the trench and along its lightless floor, south then north. Floodlights and sonar are all you have.',
  c5: 'Subsea base “Nautilus”', c5b: 'Scout around the base, then finish in a 3.5 m gate right above the docking cradle.',
  c6: 'Free dive', c6b: 'No gates. Explore the whole seabed and try the ROV in any waves and current.',
  techTitle: 'Real mechanics under the hood',
  t1Title: 'MuJoCo physics', t1Body: 'A 12.5 kg ROV computed every 2 ms. Four horizontal thrusters at 45° and two vertical ones, collisions with the seabed height field, the wreck and the base dome. Top speed about 2.9 m/s, turn rate about 70°/s.',
  t2Title: 'Hydrodynamic forces', t2Body: 'Quadratic + linear drag on the velocity through the water, rotational damping, buoyancy and a righting moment (centre of buoyancy 8 cm above the centre of gravity). Slightly positive buoyancy: unpowered, it floats up.',
  t3Title: 'Waves (Airy)', t3Body: 'Froude–Krylov force and added mass from the water motion and acceleration of a three-component swell. The motion fades with depth as e<sup>kz</sup>; longer swells reach deeper.',
  t4Title: 'Current and turbulence', t4Body: 'A steady current weakens in a boundary layer within about 8 m of the seabed, random turbulence rides on top, and right above the vents an updraft of up to 1.2 m/s pushes the ROV up.',
  t5Title: 'Automatic control', t5Body: 'PD / PID control of depth, altitude, heading and position, with line-of-sight guidance to the gates. It cancels sideways drift and follows the terrain to keep altitude.',
  t6Title: 'Look-down views', t6Body: 'Chase (look-down 5–85°), cockpit (adjustable tilt), orbit and top-down. Every view keeps the horizon level and never looks up toward the surface; the camera stays underwater and above the seabed.',
  t7Title: 'Instruments and sonar', t7Body: 'Attitude indicator, a 60°, 40 m forward acoustic sonar, the course map and the output of all six thrusters, plus depth, altitude, speed, heading, water temperature and pressure.',
  t8Title: 'Keyboard and gamepad', t8Body: 'Fly the four axes with WASD, Space/C and Q/E. On a gamepad, two sticks and analog triggers — how hard you pull sets how fast you rise or sink.',
  t9Title: 'Japanese / English', t9Body: 'One button switches the cover, the panel, the instruments and the in-app manual to English — for classes, demos and visitors.',
  deskTitle: 'Desktop apps', deskLead: 'Install and dive. No internet connection needed.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', macSize: 'about 9 MB', winSize: 'about 4 MB',
  winPkg: '.exe installer (Tauri v2)', getMac: 'Get for macOS', getWin: 'Get for Windows',
  ctaTitle: 'Into the deep. <span class="accent">Dive.</span>', ctaBuy: 'Get the desktop app',
  credits: 'Physics: MuJoCo / Rendering: three.js / App: Tauri / The seabed and courses are imaginary.',
  fStore: 'Store page',
};
const TITLE = {
  ja: document.title,
  en: 'Underwater Drone | Dive the deep on real physics — MuJoCo ROV simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('underwater-drone-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || '').startsWith('ja') ? 'ja' : 'en';
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
  document.getElementById('lang-btn').textContent = lang === 'en' ? '日本語' : 'English';
  try { localStorage.setItem('underwater-drone-lp-lang', lang); } catch (e) { /* storage blocked */ }
}

let lang = initialLang();
applyLang(lang);
document.getElementById('lang-btn').addEventListener('click', () => { lang = lang === 'ja' ? 'en' : 'ja'; applyLang(lang); });

// reveal sections as they scroll into view
const targets = document.querySelectorAll('.feature, .card, .course, .platform, .stat');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  targets.forEach((t) => { t.classList.add('reveal'); io.observe(t); });
}
