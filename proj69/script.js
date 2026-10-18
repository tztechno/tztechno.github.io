// Volantis Flight Lab LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English texts live here, keyed by data-i18n / data-i18n-html.
const EN = {
  navMachine: 'Machine', navTasks: 'Stunts', navAuto: 'AUTO', navReplay: 'Replay', navTech: 'How it works', navDesktop: 'Desktop', navBuy: 'Get it',
  heroTitle: '10 cold-gas jets.<br><span class="accent">One car, airborne.</span>',
  heroLead: 'A physics simulator of the fictional flying car Volantis V-01, flown with 10 cold-gas nozzles, a 250 kg compressed-air tank and an underbody suction fan. Leap from flat ground and roll 360° in the air, or drive up a C-ramp onto the ceiling and launch upside down. Change the mass, every nozzle\'s thrust and the course, and find what works.',
  heroBuy: 'Get the desktop app', heroMore: 'See the machine',
  statJets: 'individually rated nozzles', statAir: 'compressed-air tank', statSize: 'full-size body', statRamp: 'max ramp slope', statStep: 'thrust allocation step',
  macTitle: 'Volantis V-01 — a full-size coupe that flies on jets',
  macLead: 'A 2+2 coupe, 4.45 m long, 1.95 m wide, 1,800 kg dry. Occupants, cargo and the shrinking air supply all feed into mass and inertia.',
  jDownName: 'Downward jets at the corners ×4', jDownBody: 'Lift, roll, pitch and landing deceleration',
  jRearName: 'Rear jets in the nacelles ×4', jRearBody: 'Boost',
  jFrontName: 'Vectorable front jets ×2', jFrontBody: 'Retro-brake and in-air yaw; sideways and downward angles are adjustable',
  macBody: 'Each of the 10 nozzles pushes from its own mounting point. A left/right thrust difference rolls the car and a front/rear difference pitches it, so firing one side harder starts a roll. Every nozzle has its own thrust rating; uneven ratings show up as the car tilting.',
  macC1: 'Per-nozzle thrust', macC2: '250 kg of compressed air', macC3: 'Underbody suction fan',
  taskTitle: 'Two stunts', taskLead: 'Change the obstacle size and the ramp angle, and find the conditions that work.',
  t1Title: 'Leap from flat ground and roll 360° in the air',
  t1Body: 'No jump ramp. Fire the four downward jets at the takeoff line, clear a solid obstacle you must not touch, roll once to the right in the air and land. Obstacle length (1-10 m) and height (0.3-3 m) are adjustable.',
  t1c1: 'Adjustable obstacle', t1c2: 'Roll from differential thrust', t1c3: 'Success under 3.5 G landing',
  t2Title: 'Drive onto the ceiling of a C-ramp, launch upside down',
  t2Body: 'The underbody fan presses the car onto the wall as it climbs from vertical to the ceiling and leaves the top upside down. A 180° half roll puts the wheels down, the jets level it out and cushion the landing. The ramp\'s max slope goes from 90° (vertical) to 180° (ceiling).',
  t2c1: 'Max slope 90°-180°', t2c2: 'Grip = friction × normal load', t2c3: 'Inverted exit → half roll',
  invCap: 'Task 1: mid-roll, the jets now pointing up keep the car turning',
  landCap: 'Task 2: launched from a 180° ramp, trailing steam toward the landing',
  autoTitle: 'Inside the guaranteed range, AUTO always succeeds',
  autoBody: 'Before the run it works out the approach speed, ignition point and target apex from the mass, nozzle ratings and course. In flight it decides every step when to cut the lift from altitude and climb rate, how to stop the roll from the roll angle, and how hard to brake for landing from height and descent rate. When the badge says "AUTO OK" it succeeds; otherwise it tells you why (not enough thrust, not enough air, ...).',
  autoC1: 'Flight plan + closed-loop control', autoC2: 'Shows why it is out of range', autoC3: 'Auto-tune power', autoC4: 'SEMI / MANUAL too',
  repTitle: 'Watch it in slow motion, keep it as a real-speed MP4',
  repBody: 'Runs are recorded with simulation time and replay at 0.25×, 0.5×, 1× or 2×. Video export writes the MP4 frame by frame with exact timestamps, so 1× is true physical speed even on a slow computer. Pose and all 10 nozzle forces can also be saved as a MuJoCo-style CSV.',
  repC1: '0.25× - 2× replay', repC2: 'Real-speed MP4 export', repC3: 'MuJoCo-style CSV',
  techTitle: 'How it flies',
  c1Title: 'Forces from the mounting points', c1Body: 'Every nozzle applies force and moment from its own position and direction. Roll and pitch come from thrust differences, not from magic torques.',
  c2Title: 'Thrust allocation', c2Body: 'The requested lift, roll and pitch are split across D1-D4 within each nozzle\'s limit, every 1/360 s. Weaken one nozzle and the others rebalance.',
  c3Title: '250 kg of compressed air', c3Body: 'With a 500 m/s exhaust velocity, air drains at thrust / 500. When the tank is empty the jets stop, and the car gets lighter as it drains.',
  c4Title: 'Suction and grip', c4Body: 'The fan lowers the underbody pressure to press the car onto the wall. Tires can only push with friction × normal load; too little suction and the car falls off the ceiling.',
  c5Title: 'Last-moment landing burn', c5Body: 'It recomputes the needed deceleration from height and descent rate, free-falls as long as it can, then fires, saving air and touching down at 0.8 m/s.',
  c6Title: 'White cold-gas steam', c6Body: 'Expanding, cooling jet gas turns into white fog that spreads across the ground. Adjust the amount with a slider.',
  c7Title: 'Gamepad ready', c7Body: 'By default every action works on a D-pad-and-buttons pad such as the 8BitDo Zero 2. Xbox / PS preset and full remapping included.',
  c8Title: 'Five cameras', c8Body: 'Chase, hood, stunt, overview and a free camera that orbits the car, so you never miss the moment.',
  c9Title: '日本語 / English', c9Body: 'One button switches the whole UI. User manuals in Japanese and English are included.',
  deskTitle: 'Desktop apps', deskLead: 'Install and fly. A small app that works without an internet connection.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', macSize: 'about 2.5 MB', winSize: 'about 1.7 MB',
  winPkg: '.exe installer (Tauri v2)', getMac: 'Get for macOS', getWin: 'Get for Windows',
  deskNote: '* Screens shown are from a development build. Specifications may change without notice.',
  ctaTitle: 'Fire the jets and <span class="accent">test the limits of physics.</span>', ctaBuy: 'Get the desktop app',
  disclaimer: 'Volantis V-01 is a fictional vehicle. The vehicle and all performance figures are fictional settings based on physics calculations, and are not affiliated with any real company, product or person.',
  credits: 'Rendering: three.js / Desktop: Tauri / Open-source licenses are listed in the app under "About / Licenses"',
  fStore: 'Store page',
};
const TITLE = {
  ja: document.title,
  en: 'Volantis Flight Lab | 10 cold-gas jets, one airborne car — jet car physics simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('volantis-fly-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
  try { localStorage.setItem('volantis-fly-lp-lang', lang); } catch (e) { /* storage blocked */ }
}

let lang = initialLang();
applyLang(lang);
document.getElementById('lang-btn').addEventListener('click', () => { lang = lang === 'ja' ? 'en' : 'ja'; applyLang(lang); });

// reveal sections as they scroll into view
const targets = document.querySelectorAll('.feature, .card, .platform, .stat, .duo');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  targets.forEach((t) => { t.classList.add('reveal'); io.observe(t); });
}
