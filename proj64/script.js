// Kyoto Drone LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navScenarios: 'Scenarios', navAnywhere: 'All of Kyoto', navTech: 'How it works', navDesktop: 'Desktop', navBuy: 'Get it',
  heroTitle: 'Fly Kyoto.<br><span class="accent">With real physics.</span>',
  heroLead: 'A drone simulator over all of Kyoto City, rebuilt from PLATEAU 3D city models (about 515,000 buildings), with a quadcopter driven by the MuJoCo physics engine. Fly straight into a building and crash, follow auto-planned routes, fight strong wind with a hanging payload, dodge obstacles autonomously, or take the controls yourself.',
  heroBuy: 'Get the desktop app', heroMore: 'See the scenarios',
  statBldg: 'PLATEAU buildings', statArea: 'all of Kyoto City', statScn: 'scenarios', statStep: 'physics time step', statLang: 'Japanese / English',
  scnTitle: 'Five scenarios', scnLead: 'Same start, same destination — compare how differently the drone gets there.',
  s1Title: 'Straight line — learn by crashing',
  s1Body: 'Head straight for the destination, ignoring obstacles. Leaving Kyoto Station, the drone hits a building about 130 m out, its motors cut and it falls. Impact speed and what was hit are recorded, with an impact sound.',
  s2Title: 'Course flight — wind and payload',
  s2Body: 'Follow a route planned around the buildings and land at the destination. Four conditions: calm / strong wind × no payload / payload. Wind combines a mean flow, gusts and turbulence; the payload is a real rigid body swinging on a rope. Without enough thrust, the toughest conditions are out of reach.',
  s2c1: '10 m/s crosswind + gusts', s2c2: '2.5 kg hanging payload', s2c3: 'set down and release',
  s3Title: 'Route planning — three routes, automatically',
  s3Body: 'From the buildings and terrain, three routes with different characters are planned in tens of milliseconds and compared by length, maximum height above ground, total climb and flight time.',
  rA: 'High, direct — about 80 m above ground, straight over the roofs',
  rB: 'Low, along streets — at most 45 m above ground, over streets and rivers',
  rC: 'Alternate corridor — low, through different streets from B',
  s4Title: 'Auto-avoid — see, dodge, return',
  s4Body: 'Cockpit view. A crane, a tethered balloon and another drone crossing the course are picked up by the forward sensor (119 rays at 10 Hz). The drone chooses a way around, checks that it is clear and returns to the course. With attitude indicator and sensor display.',
  s5Title: 'Manual — fly it yourself',
  s5Body: 'Fly freely with the keyboard or a gamepad (mode 2). The flight controller holds altitude and attitude, so you can glide between buildings or along the Kamo River. Turn on the wind to feel how hard it gets.',
  anyTitle: 'From Arashiyama to Daigo-ji — start anywhere',
  anyBody: 'Pick the start and destination from 20 presets such as Kinkaku-ji, Kiyomizu-dera and Fushimi Inari, or click anywhere in Kyoto City on the map. The buildings and terrain around the two points are loaded, and the drone finds a flat spot to take off and land.',
  anyC1: 'GSI maps & aerial photos', anyC2: '20 presets', anyC3: 'trips over 10 km',
  techTitle: 'Real mechanics under the hood',
  t1Title: 'MuJoCo physics',
  t1Body: 'A 1.8 kg X-quad. Four rotors with thrust, reaction torque and motor lag. The whole city is a 2.5 m height field for collisions, and the payload is a rigid body on a rope (tendon).',
  t2Title: 'Flight control',
  t2Body: 'Position PID with geometric attitude control on SO(3). A disturbance observer estimates and cancels wind and payload swing; mass estimation adapts to the payload. Toggle them to see the difference.',
  t3Title: 'Route planning',
  t3Body: 'A* on a 10 m grid plus 3D line-of-sight checks. Routes keep 5 m sideways and 8 m above buildings, and stay below the 150 m legal ceiling in Japan.',
  t4Title: 'Kyoto from PLATEAU',
  t4Body: 'About 515,000 3D buildings from MLIT PLATEAU, with terrain and aerial photos from GSI Japan. Temples and shrines are colour-coded, and over 1,300 place labels float over the city.',
  t5Title: 'Rotor and impact sounds',
  t5Body: 'The rotor sound is synthesised live from the thrust of the four motors. It changes as you climb or hit a gust; in a crash you hear the impact and the props winding down.',
  t6Title: 'Japanese / English',
  t6Body: 'One button switches the whole UI and every place label to English — great for showing Kyoto to visitors, or for classes and demos in English.',
  engCap: 'English UI: Arashiyama Togetsukyo → Kinkaku-ji (route B)',
  deskTitle: 'Desktop apps', deskLead: 'Install and fly. The building data for all of Kyoto City is bundled with the app.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', macSize: 'about 65 MB', winSize: 'about 65 MB',
  winPkg: '.exe installer (Tauri v2)', getMac: 'Get for macOS', getWin: 'Get for Windows',
  deskNote: '* An internet connection is required: aerial photos and maps are loaded from GSI Japan.',
  ctaTitle: 'Take off over <span class="accent">Kyoto.</span>', ctaBuy: 'Get the desktop app',
  credits: 'Sources: MLIT PLATEAU (Kyoto City 2025), GSI Japan (seamless aerial photos, DEM, standard map), © OpenStreetMap contributors / Physics: MuJoCo / Rendering: three.js',
  fStore: 'Store page', fManualJa: 'Manual (JA)',
};
const TITLE = {
  ja: document.title,
  en: 'Kyoto Drone | Fly Kyoto with real physics — MuJoCo × PLATEAU drone simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('kyoto-drone-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
  try { localStorage.setItem('kyoto-drone-lp-lang', lang); } catch (e) { /* storage blocked */ }
}

let lang = initialLang();
applyLang(lang);
document.getElementById('lang-btn').addEventListener('click', () => { lang = lang === 'ja' ? 'en' : 'ja'; applyLang(lang); });

// reveal sections as they scroll into view
const targets = document.querySelectorAll('.feature, .card, .platform, .stat, .shot.wide');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  targets.forEach((t) => { t.classList.add('reveal'); io.observe(t); });
}
