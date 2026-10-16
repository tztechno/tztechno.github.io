// Kyoto Roadster LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navMachine: 'Machine', navScenarios: 'Scenarios', navAnywhere: 'All of Kyoto', navTech: 'How it works', navDesktop: 'Desktop', navBuy: 'Get it',
  heroTitle: 'A flying roadster.<br><span class="accent">Kyoto, with real physics.</span>',
  heroLead: 'A simulator of a flying roadster with 10 thrust nozzles, driven by the MuJoCo physics engine, over all of Kyoto City rebuilt from PLATEAU 3D city models (about 515,000 buildings). Cruise level on the rear jets, barrel-roll in mid-air and fly routes that never cross World Heritage sites. Crash by flying straight into a building, fight strong wind with a hanging payload, dodge obstacles autonomously, or take the controls yourself. Flight records save as CSV for analysis.',
  heroBuy: 'Get the desktop app', heroMore: 'See the machine',
  statJets: 'thrust nozzles', statBldg: 'PLATEAU buildings', statArea: 'all of Kyoto City', statScn: 'scenarios', statStep: 'physics time step',
  macTitle: 'A flying roadster on 10 thrust nozzles',
  macLead: 'A 0.90 m long, 0.40 m wide, 2.4 kg scale model. Unlike a four-prop drone, it shares out the thrust of all 10 nozzles at every step.',
  jDownName: 'Four lift jets at the corners', jDownBody: 'Lift, roll and pitch. Up to 18 N each',
  jRearName: 'Four rear jets', jRearBody: 'Forward thrust, and yaw by left / right difference. Up to 4.5 N each',
  jFrontName: 'Two front jets', jFrontBody: 'Angled 45° forward-outward. Braking and steering. Up to 5.4 N each',
  macBody: 'The rear jets push it forward and the front jets brake, so it cruises level instead of tilting forward like a drone (0° tilt at 43 km/h). Only sideways moves are made by banking, as a drone does.',
  macC1: 'Level cruise', macC2: 'Thrust allocation over 10 nozzles', macC3: 'Lands on its wheels',
  belowCap: 'From below: the lift jets D1–D4 (blue), the rear R1–R4 and the front FL / FR',
  flightCap: 'Course flight: cruising level between the buildings from Kyoto Station to Fushimi Inari Taisha',
  rollTitle: 'A 360° roll around the direction of travel',
  rollLead: 'Without a payload, press Z to roll left or X to roll right. One full turn around the direction of travel takes about 1.2 s, then the car is level again.',
  rollC1: 'Turned by the lift jets, left vs right', rollC2: 'Heading holds within 2°', rollC3: 'Sinks about 2.5 m → needs 5 m above ground', rollC4: 'Works on a course flight too',
  scnTitle: 'Five scenarios', scnLead: 'Same start, same destination — compare how differently the roadster gets there.',
  s1Title: 'Straight line — learn by crashing',
  s1Body: 'Head straight for the destination, ignoring obstacles. Leaving Kyoto Station, the roadster hits a building about 110 m out, its jets cut and it falls. Impact speed and what was hit are recorded, with an impact sound.',
  s2Title: 'Course flight — wind and payload',
  s2Body: 'Follow a route planned around the buildings and land at the destination. Four conditions: calm / strong wind × no payload / payload. Wind combines a mean flow, gusts and turbulence; the payload is a real rigid body swinging on a rope. Without enough jet thrust, the toughest conditions are out of reach.',
  s2c1: '10 m/s crosswind + gusts', s2c2: '2.5 kg hanging payload', s2c3: 'set down and release',
  s3Title: 'Route planning — three routes around World Heritage',
  s3Body: 'Besides buildings and terrain, the precincts of the 17 World Heritage sites of ancient Kyoto are no-fly. Three routes with different characters are planned in well under a second and compared by length, maximum height above ground, total climb and flight time. Whatever two points you pick, the roadster never flies over Kiyomizu-dera or Nijo Castle.',
  s3c1: 'Avoids 17 World Heritage sites', s3c2: 'Export as GPX / QGroundControl .plan / CSV',
  rA: 'High, direct — about 80 m above ground, straight over the roofs',
  rB: 'Low, along streets — at most 45 m above ground, over streets and rivers',
  rC: 'Alternate corridor — low, through different streets from B',
  s4Title: 'Auto-avoid — see, dodge, return',
  s4Body: 'Cockpit view. A crane, a tethered balloon and another aircraft coming head-on along the course are picked up by the forward sensor (119 rays). The roadster chooses a way around, checks that it is clear and returns to the course. With attitude indicator and sensor display.',
  s5Title: 'Manual — fly it yourself',
  s5Body: 'Fly freely with the keyboard or a gamepad (mode 1, reassignable). W/S forward and back, A/D sideways, ↑/↓ climb and descend, ←/→ turn, Z/X barrel roll. The flight controller holds altitude and attitude, so you can glide between buildings or along the Kamo River.',
  anyTitle: 'From Arashiyama to Daigo — start anywhere',
  anyBody: 'Pick the start and destination from 20 presets such as Fushimi Inari, Nanzen-ji and Nishiki Market, or click anywhere in Kyoto City on the map. The buildings and terrain around the two points are loaded, and the roadster finds a flat spot to take off and land. World Heritage precincts are shown in red; a point picked inside one moves to the nearest place outside.',
  anyC1: 'GSI maps & aerial photos', anyC2: '20 presets', anyC3: 'trips over 10 km', anyC4: 'World Heritage shown in red',
  techTitle: 'Real mechanics under the hood',
  t1Title: 'MuJoCo physics',
  t1Body: 'A 2.4 kg body with 10 thrust nozzles, each with its own thrust and jet lag. The whole city is a 2.5 m height field for collisions, the car lands on its wheels, and the payload is a rigid body on a rope (tendon).',
  t2Title: 'Thrust allocation over 10 nozzles',
  t2Body: 'The 6 components of the force and moment needed are shared out over the 10 nozzles by bounded, weighted least squares every 2 ms. Attitude and altitude come first; the rear jets drive forward and the front jets brake.',
  t3Title: 'Flight control',
  t3Body: 'Position PID with geometric attitude control on SO(3). A disturbance observer estimates and cancels wind and payload swing; mass estimation adapts to the payload. Toggle them to see the difference.',
  t4Title: 'Route planning',
  t4Body: 'A* on a 10 m grid plus 3D line-of-sight checks. Routes keep 5 m sideways and 8 m above buildings and stay below the 150 m legal ceiling in Japan. World Heritage precincts and 30 m around them are impassable cells, and no shortcut cuts across them.',
  t5Title: 'Kyoto from PLATEAU',
  t5Body: 'About 515,000 3D buildings from MLIT PLATEAU, with terrain and aerial photos from GSI Japan. Temples and shrines are colour-coded, and over 1,300 place labels float over the city.',
  t6Title: 'Jet and impact sounds',
  t6Body: 'A jet roar synthesised live from the nozzle thrusts. It grows louder and sharper as you climb or hit a gust, with the rear jets joining in when accelerating and the front jets when braking. In a crash you hear the impact as the jets cut out.',
  t7Title: 'Change conditions in flight',
  t7Body: 'Wind speed, direction, gusts, turbulence and jet thrust can be changed with the sliders while flying — strengthen the wind or add thrust and see the effect right away.',
  t8Title: 'Flight records as CSV',
  t8Body: 'Position, attitude, the thrust of all 10 nozzles, roll state, wind, the disturbance estimate and course error every 0.1 s, plus the conditions and result of every flight, saved as CSV — ready for simulation analysis across thrust and wind conditions.',
  t9Title: 'Japanese / English',
  t9Body: 'One button switches the whole UI and every place label to English. Planned routes export as GPX, a QGroundControl .plan (with the World Heritage precincts as no-fly geofences) or CSV.',
  engCap: 'English UI: Kyoto Station → Fushimi Inari Taisha (route planning, Kyoto Tower in the middle)',
  titleCap: 'Start screen: contours of the real terrain of Kyoto, and a take-off button that lights the 10 nozzles one by one',
  deskTitle: 'Desktop apps', deskLead: 'Install and fly. The building data for all of Kyoto City is bundled with the app.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', macSize: 'about 65 MB', winSize: 'about 65 MB',
  winPkg: '.exe installer (Tauri v2)', getMac: 'Get for macOS', getWin: 'Get for Windows',
  deskNote: '* An internet connection is required: aerial photos and maps are loaded from GSI Japan.',
  ctaTitle: 'Fire the jets over <span class="accent">Kyoto.</span>', ctaBuy: 'Get the desktop app',
  credits: 'Sources: MLIT PLATEAU (Kyoto City 2025), GSI Japan (seamless aerial photos, DEM, standard map), © OpenStreetMap contributors / Physics: MuJoCo / Rendering: three.js',
  fStore: 'Store page',
};
const TITLE = {
  ja: document.title,
  en: 'Kyoto Roadster | A flying roadster over Kyoto with real physics — MuJoCo × PLATEAU',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('kyoto-roadstar-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
  try { localStorage.setItem('kyoto-roadstar-lp-lang', lang); } catch (e) { /* storage blocked */ }
}

let lang = initialLang();
applyLang(lang);
document.getElementById('lang-btn').addEventListener('click', () => { lang = lang === 'ja' ? 'en' : 'ja'; applyLang(lang); });

// reveal sections as they scroll into view
const targets = document.querySelectorAll('.feature, .card, .platform, .stat, .shot.wide, .duo, .roll-strip');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  targets.forEach((t) => { t.classList.add('reveal'); io.observe(t); });
}
