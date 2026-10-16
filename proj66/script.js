// Takeshiba Drone LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navPads: 'Pads', navData: 'LOD4 data', navTech: 'How it works', navDesktop: 'Desktop', navBuy: 'Get it',
  heroTitle: 'Fly inside Takeshiba.<br><span class="accent">With real physics.</span>',
  heroLead: 'Tokyo Portcity Takeshiba is the only PLATEAU building modelled at LOD4 — a BIM-based interior model. Pick a floor and look around inside, then fly a drone driven by the MuJoCo physics engine through the atrium and stairwells. Head out from the roof to the roofs of nearby towers or down to the waterfront. Fly automatically between landing pads, or take the controls with a keyboard or gamepad.',
  heroBuy: 'Get the desktop app', heroMore: 'See the features',
  statLod: 'the only PLATEAU interior model', statPads: 'landing pads (indoor, roofs, ground)', statTest: 'pairs verified to land', statBldg: 'nearby buildings, plus the sea', statStep: 'physics time step',
  featTitle: 'Look, choose, fly', featLead: 'A 40-storey office tower, as an interior viewer and as a drone course.',
  f1Title: 'Interior view — look inside, floor by floor',
  f1Body: 'Pick a floor with the slider and the building is cut at eye height so you look down on it like a floor plan. Click a wall, column, glass pane or fitting to see its type, name, room and floor. Jump to any room from the room list.',
  f1c1: 'Floor-plan cut', f1c2: 'Click for details', f1c3: 'Toggle layers',
  f2Title: 'Auto flight — from pad to pad',
  f2Body: 'Choose a departure and an arrival and press "Fly auto". The drone takes off, follows a pre-planned route and lands, slowing down automatically where walls and columns are close. The route is drawn solid where you can see it and dashed behind buildings, and the minimap and height profile show where along the course you are.',
  f2c1: '×1 to ×16 playback', f2c2: 'Chase, FPV, top and free cameras', f2c3: 'Plan and height profile',
  f3Title: 'Manual — keyboard and gamepad',
  f3Body: 'W/S/A/D to move, ↑/↓ to climb and descend, ←/→ to turn. Gamepads use the same layout as Kyoto Drone (Mode 1), and every button can be reassigned on screen. The flight controller holds altitude and attitude, so you can stop exactly where you want, even in the atrium. Touch the controls during an auto flight and you take over.',
  f4Title: 'Out of the building — roof to roof',
  f4Body: 'The 1,485 surrounding buildings, bridges, roads, terrain and the sea are there too. Fly from the Takeshiba roof to the roof of the World Trade Center Building, or down to Kyu-Shiba-rikyu Gardens and Takeshiba Pier. Cruise is faster outdoors and slows before entering the building. Touch the sea and you crash.',
  f4c1: '1,485 buildings · 29 bridges', f4c2: 'Terrain and sea surface', f4c3: 'Routes up to about 1.1 km',
  padsTitle: '11 landing pads',
  padsLead: 'Every pair has a route, and auto flights have been verified to land in all 110 directions. The arrival menu only lists pads you can reach.',
  padsIn: 'Indoor', padsOut: 'Roofs and ground', roof: 'Roof', ground: 'Ground',
  p1: 'Takeshiba Galleria', p2: 'Contents Media Hall', p3: 'Shop Arcade', p4: 'Outside the Event Space', p5: 'Office Sky Lobby', p6: 'Office',
  p7: 'Tokyo Portcity Takeshiba', p8: 'World Trade Center Building', p9: 'Minato City Hall', p10: 'Takeshiba Pier', p11: 'Kyu-Shiba-rikyu Gardens',
  dataTitle: 'Fly only where you really could',
  dataBody: 'Even the BIM-based LOD4 has gaps. On the office floors the lift and service shafts have no enclosing walls, so the floors look as if they had holes; the lifts are empty shafts with no doors or cars; parts of the exhibition floors are missing. Those places are closed with impassable panels shown in red, and the drone only changes floors through the Takeshiba Galleria atrium, stairs and escalators — the same rule for auto and manual flight.',
  dc1: 'Missing floors shown in red', dc2: 'Floors change only via atrium, stairs, escalators', dc3: 'Atrium extent checked against sources',
  techTitle: 'Real mechanics under the hood',
  t1Title: 'MuJoCo physics',
  t1Body: 'The same 1.8 kg X-quad as Kyoto Drone: four rotors with thrust, reaction torque and motor lag, flown by position PID with geometric attitude control on SO(3), mass estimation and a disturbance observer.',
  t2Title: 'Collisions with the building',
  t2Body: 'The interior is voxelised at 0.25 m and merged into about 170,000 boxes; only the boxes within 3.5 m of the drone are handed to MuJoCo at any time. The terrain is a height field.',
  t3Title: 'Route planning',
  t3Body: '3D A* on a 0.5 m grid indoors and a 2 m grid outdoors, keeping the drone centre at least 0.75 m (indoors) or 3 m (outdoors) from obstacles and preferring the middle of passages. Indoors and outdoors connect through openings and the roof.',
  t4Title: 'Every pair tested',
  t4Body: 'All 110 directions between the 11 pads are flown automatically at 0.5, 2 and 4 m/s cruise and checked to land. Only pairs that pass appear in the arrival menu.',
  t5Title: 'Japanese / English',
  t5Body: 'One button switches the UI, pad names, information and events to English — even in mid-flight.',
  t6Title: 'Rotor sound',
  t6Body: 'The rotor sound is synthesised from the thrust of the four motors. It changes as you climb and slow down, and a crash plays an impact sound.',
  engCap: 'English UI: Takeshiba roof → World Trade Center Building roof (auto flight)',
  deskTitle: 'Desktop apps', deskLead: 'The data is bundled, so once installed it runs offline.',
  deskMac: 'Apple Silicon (M1 or later). Download the .dmg and drag the app into Applications.',
  deskWin: 'Windows 10 / 11 (64-bit). Run the installer (.exe).',
  deskBuy: 'Get the desktop app',
  credits: 'Data: MLIT Project PLATEAU (Tokyo 23 wards, Takeshiba 2022, CC BY 4.0). Physics: MuJoCo. Rendering: three.js.',
};

const KEY = 'takeshiba-lp-lang';
const ja = new Map();

function apply(lang) {
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll('[data-i18n]')) {
    if (!ja.has(el)) ja.set(el, el.textContent);
    const k = el.dataset.i18n;
    el.textContent = lang === 'en' && EN[k] ? EN[k] : ja.get(el);
  }
  for (const el of document.querySelectorAll('[data-i18n-html]')) {
    if (!ja.has(el)) ja.set(el, el.innerHTML);
    const k = el.dataset.i18nHtml;
    el.innerHTML = lang === 'en' && EN[k] ? EN[k] : ja.get(el);
  }
  document.getElementById('lang-btn').textContent = lang === 'en' ? '日本語' : 'English';
  try { localStorage.setItem(KEY, lang); } catch { /* storage blocked */ }
}

let lang = new URLSearchParams(location.search).get('lang');
if (lang !== 'en' && lang !== 'ja') { try { lang = localStorage.getItem(KEY); } catch { lang = null; } }
apply(lang === 'en' ? 'en' : 'ja');
document.getElementById('lang-btn').addEventListener('click', () => apply(document.documentElement.lang === 'en' ? 'ja' : 'en'));

// reveal on scroll
const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { rootMargin: '0px 0px -8% 0px' }) : null;
for (const el of document.querySelectorAll('.reveal')) io ? io.observe(el) : el.classList.add('in');
