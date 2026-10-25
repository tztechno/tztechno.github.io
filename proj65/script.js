// Nagoya Flood LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navCastle: 'Nagoya Castle', navHazard: 'Hazard maps', navTech: 'How it works', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'Where does<br><span class="accent">the rain go?</span>',
  heroLead: 'A flood simulator for Nagoya that computes heavy-rain flooding on the GPU over the PLATEAU 3D city model (about 737,000 buildings) and real terrain. Rain falls on the whole 82 × 76 km basin, so water flowing in from upstream is included, and the place you choose is computed on a 2 m grid, building by building. Watch the water rise and the city go under, then recede after the rain — from any angle, and record it straight to video.',
  heroGet: 'Get the desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon) · Windows 10 / 11 · 日本語 / English',
  statArea: 'rained-on basin', statBldgN: '737 k', statBldg: 'PLATEAU buildings', statGrid: 'detailed grid', statTimeN: '~1.5 min', statTime: '3 h of rain (2 km tile)', statRec: 'MP4 recording',
  featTitle: 'Make it rain — and watch how the city floods',
  featLead: 'Set the rainfall, run, and follow the flood as it spreads and recedes, one building at a time.',
  f1Title: 'Flooding, building by building',
  f1Body: 'The PLATEAU terrain model (GSI 5 m elevation for tiles built from an address) is gridded at 2 m and the ground is corrected with the base elevation of every building. Buildings stand as walls up to their roofs; rain on a roof runs off its edges into the street. Water is coloured by depth class, and buildings by the flood depth around them (≥0.5 m counts as above floor level).',
  f1c1: 'Constant, centre-peaked, rainband, Tokai 2000 type, custom', f1c2: 'Sewer drainage capacity', f1c3: 'How the water recedes',
  f2Title: 'Rain on the whole basin, with the water from outside',
  f2Body: 'Rain on the chosen area alone misses the water that gathers from upstream. The same rain also falls on the whole terrain extent (82 × 76 km, 30 m grid), and its water level is handed to the detailed run at the boundary — a two-level computation that gets depths in hollows and lowlands right. Ise Bay and Nagoya Port take the water as sea at 0 m. In Nonami (Tempaku-ku), including the inflow from outside grew the area flooded over 0.5 m from 9.6 ha to 51.7 ha.',
  f3Title: 'Anywhere, from an address',
  f3Body: 'Type an address or place name and a tile (1–3 km square) centred there is built in 10–20 s. With a block number a red pin marks the spot; a town name alone is shown as its census town area. About 2,700 names — stations, high-rises, mountains, shrines and temples, public facilities — are labelled only while actually in sight, with a line down to the building.',
  f3c1: 'GSI address search', f3c2: 'Click for latitude / longitude and the depth over time',
  f4Title: 'Any angle — straight to video',
  f4Body: 'Double-click a point and orbit around it, from straight down to looking up from the street, then lock the view. Recording renders every frame before encoding it to MP4, so the video is smooth whatever the computer. The camera can stay fixed, follow keyframes or orbit, and the time, rainfall, legend and labels go into the video.',
  f4c1: 'Up to 3840 × 2160 at 60 fps', f4c2: 'Playback and time slider', f4c3: 'Depth chart for any point',
  castleTitle: 'Nagoya Castle, built to measure',
  castleLead: 'The castle sinking in the rain on the title screen is the same model you meet in the app, assembled from dimensions measured by slicing the PLATEAU LOD2 keep by height.',
  cs1a: 'Stone base', cs1b: 'Fan-shaped batter, about 21 m high, 52 × 56 m at the foot → 35 × 39 m at the top',
  cs2a: 'Five-roof keep', cs2b: '1st and 2nd storeys almost the same size; white plaster with lattice windows, a copper-clad top storey',
  cs3a: 'Roofs', cs3b: 'Verdigris copper tiles with curved eaves; chidori and kara gables where LOD2 has them',
  cs4a: 'Golden shachihoko', cs4b: 'At both ends of the north–south ridge (62.5 m above sea level)',
  cs5a: 'Small keep and bridge', cs5b: 'The small keep to the south and the stone causeway to the main keep',
  titleCap: 'Title screen: real basin contours and falling rain; the water climbs Nagoya Castle until only the golden shachihoko remain',
  hzTitle: 'Side by side with the national hazard maps',
  hzBody: 'The flood inundation assumption areas in PLATEAU (Kiso, Shonai and Yada rivers; planned scale L1 / maximum assumed scale L2) appear in the official rank colours, as assumed-depth colours, or as a 3D water surface. After a run, the flooded areas and the buildings flooded above floor level are compared. The assumed water can be raised from 0 to 100% for a recording.',
  hzNote: 'The assumption areas describe rivers overflowing (fluvial flooding); this simulation computes flooding from heavy rain (pluvial flooding). Use the comparison to see where risk tends to concentrate.',
  techTitle: 'How it works',
  t1a: 'Shallow water on the GPU', t1b: 'Local inertial equations with Manning friction (LISFLOOD-FP family) solved in WebGL2 shaders. The time step Δt follows the stability condition; the screen shows the safety factor and the Δt in use.',
  t2a: 'Corrected terrain', t2b: 'The PLATEAU terrain TIN on a 2 m grid, corrected with building base elevations. The terrain before and after correction and a DSM with buildings export as GeoTIFF.',
  t3a: 'Two levels at once', t3b: 'The basin (30 m, about 6.9 million cells) and the tile (2 m, with buildings) run together, exchanging water levels at the boundary. The terrain and aerial photos of the whole extent are drawn as the backdrop.',
  t4a: 'Names only for what you can see', t4b: 'Every few frames a small depth-tested image checks whether each label’s anchor is hidden by buildings or hills (the same method as Kyoto Drone).',
  enCap: 'English mode: the interface, place names, addresses and the text in recordings all switch',
  startTitle: 'Desktop apps', startLead: 'Install and start. The seven preset regions, the basin terrain, place names, town boundaries and the Nagoya Castle data come with the app.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', sizeV: 'about 160 MB', langLabel: 'Languages', winPkg: '.exe installer (Tauri v2)', getMac: 'Get the macOS app', getWin: 'Get the Windows app',
  deskNote: '* Address search and building new tiles (GSI elevation and aerial photos, PLATEAU buildings and hazards) need an internet connection. The GPU is used through WebGL2. Recordings and GeoTIFFs are saved to the Downloads folder.',
  startNote: '* Computing times are measured on an Apple M5 and depend on the GPU. The results are computations under assumed conditions; for evacuation and disaster-prevention decisions, use your local government’s official hazard maps.',
  ctaTitle: 'Where would that rain <span class="accent">collect?</span>', ctaGet: 'Get the desktop app',
  credits: 'Sources: MLIT PLATEAU (Nagoya 2022), GSI (seamless aerial photos, address search), Statistics Bureau e-Stat (2020 Census small-area boundaries), © OpenStreetMap contributors / Rendering: three.js',
  fStore: 'Store page', fManualJa: 'Manual (JA)',
};
const TITLE = {
  ja: 'Nagoya Flood | 降った雨は、どこへ行くのか — PLATEAU × GPU 浸水シミュレーター',
  en: 'Nagoya Flood | Where does the rain go? — PLATEAU × GPU flood simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('nagoya-flood-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
  try { localStorage.setItem('nagoya-flood-lp-lang', lang); } catch (e) { /* storage blocked */ }
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
