// Hiroshima Landslide LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navEvents: 'Past disasters', navZones: 'Warning areas', navTech: 'How it works', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'When the slope gives way,<br><span class="accent">how far does it come?</span>',
  heroLead: 'A landslide simulator for Hiroshima that computes rain-triggered slope failures and debris flows on the GPU over the PLATEAU 3D city model (buildings, terrain, sediment-disaster warning areas). Rain soaks into the soil and collects in the hollows, slopes give way, and debris flows run down the valleys and bury the houses below — the whole chain is computed on a 2 m grid, building by building. Watch it from any angle and record it straight to video.',
  heroGet: 'Get the desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon) · Windows 10 / 11 · 日本語 / English',
  statEventN: '4 areas', statEvent: 'struck in 2014 and 2018', statBldgN: '370 k', statBldg: 'PLATEAU buildings (Hiroshima)', statGrid: 'computing grid', statTimeN: '~7 min', statTime: '10 h of heavy rain (2.4 km tile)', statRec: 'MP4 recording',
  featTitle: 'From rain to slope failure, debris flow and damaged buildings',
  featLead: 'Set the rainfall and the soil, run, and follow the slopes as they get wet and fail, until the debris reaches the town.',
  f1Title: 'Rain soaks in and collects in the hollows',
  f1Body: 'Rain raises the water table in the soil, which drains downslope along the bedrock and gathers at the heads of the hollows. Paint the ground by soil saturation and the hollows turn blue first. As the water table rises the safety factor of the slope drops; where it falls below 1, the soil layer fails.',
  f1c1: 'Hiroshima 2014 and western Japan 2018 types (synthetic)', f1c2: 'Paste observations', f1c3: 'Soil depth, cohesion, conductivity',
  f2Title: 'The failed soil runs down the valleys into town',
  f2Body: 'The failed soil becomes a water-rich debris flow that follows the slope down the valley. On steep beds it scours the soil and grows; on the gentle fan it spreads out and stops. Failed slopes are lowered by the soil they lost and stay as bare soil.',
  f2c1: 'Voellmy-friction debris flow', f2c2: 'Bed entrainment', f2c3: 'Maximum deposit depth',
  f3Title: 'Damage, building by building',
  f3Body: 'PLATEAU buildings stand as obstacles up to their roofs and hold the debris back. They are coloured by the debris piled around them (burial depth) and by the force of the flow that hit them (impact pressure), and their walls turn muddy below the debris line. Click a building for a verdict — buried above floor, first floor buried, likely damaged — and the debris depth over time.',
  f3c1: 'Colour by burial depth or impact pressure', f3c2: 'Save a point as CSV',
  f4Title: 'Try “what if this slope gave way”',
  f4Body: 'Click a slope to set a failure source and it gives way at the time you choose. See how far the debris would come if the hollow behind the houses failed, and which houses it would bury, valley by valley. Type an address or place name to build a tile (1–3 km square) of that place inside the app.',
  f4c1: 'Up to 8 failure sources', f4c2: 'Tiles from an address', f4c3: 'Safety-factor and slope maps',
  f5Title: 'Any angle — straight to video',
  f5Body: 'Hours of rain go by fast and minutes of debris flow play in slow motion — playback runs frame by frame, so you never miss the moment a slope fails. Recording renders every frame before encoding it to MP4, so the video is smooth whatever the computer; time, rainfall, failed area, legend and place names go in.',
  f5c1: 'Up to 3840 × 2160 at 60 fps', f5c2: 'Fixed, keyframes or orbit',
  evTitle: 'Hiroshima’s disaster sites, under the same rain',
  evLead: 'Four areas struck by major landslide disasters come with the app. With rainfall patterns matched to the published figures, see which hollows fail and how far the debris reaches.',
  ev1a: 'Yagi / Midorii, Asaminami-ku (20 Aug 2014)', ev1b: 'Foot of Mt. Abu, where many debris flows struck the houses before dawn. 2.4 km square',
  ev2a: 'Yamamoto, Asaminami-ku (Aug 2014)', ev2b: 'Slope failures behind hillside housing',
  ev3a: 'Kabe-higashi, Asakita-ku (Aug 2014)', ev3b: 'Foothills of Kabe, including Kabe-higashi 6-chome struck by debris flows',
  ev4a: 'Yano-higashi, Aki-ku (6 July 2018)', ev4b: 'Western Japan floods: after days of rain, an intense burst sent a debris flow into the housing estate',
  r1a: 'Yagi / Midorii under the 2014-type rain', r1b: 'The first failure comes at 03:22 on 20 Aug (debris flows actually struck around 03:00–04:00): 131 failures over about 8 ha, about 110,000 m³ of debris, 185 buildings buried 0.5 m or more.',
  r2a: 'Yano-higashi under the 2018-type rain', r2b: 'After two days of rain wet the soil, failures concentrate in the intense rain on the evening of the 6th: about 4 ha failed, about 60,000 m³ of debris, 93 buildings buried 0.5 m or more.',
  titleCap: 'Title screen: Hiroshima’s contours in the rain; a slope gives way and a debris flow runs down towards the houses at its foot',
  zTitle: 'Side by side with the warning areas',
  zLead: 'Lay the areas the prefecture designated as dangerous over the extent the debris reached in the run, on the same screen.',
  zBody: 'The sediment-disaster warning areas (yellow) and special warning areas (red) designated by Hiroshima Prefecture, from PLATEAU, are draped on the ground by type — steep-slope failure, debris flow, landslide. After a run, the share of the debris extent inside them and the buried buildings inside them are compared.',
  zNote: 'The warning areas are drawn from the terrain and are separate from this simulation. Use the comparison to see where risk tends to concentrate.',
  fsTitle: 'Safety factor before the rain',
  fsBody: 'Paint the ground by the slope safety factor to see which slopes are close to failing before any rain. The run starts from a state drained for 12 h without rain, with soil that an ordinary rain would already have stripped thinned out, so every slope meets the storm with a safety factor of at least 1.2.',
  techTitle: 'How it works',
  t1a: 'Groundwater and slope stability', t1b: 'Rain infiltrates up to the infiltration capacity and the groundwater in the soil drains downslope by Darcy’s law. Each cell carries an infinite-slope safety factor and fails below 1; progressive failure lets a scar grow upslope when the ground just below has gone.',
  t2a: 'Debris flow on the GPU', t2b: 'The failed soil flows by the local inertial equations with Voellmy friction (Coulomb + turbulent). Groundwater, failure and debris flow are coupled every step on the same 2 m grid in WebGL2 shaders.',
  t3a: 'Two time scales', t3b: 'While it rains only the soil water is stepped, up to 60 s at a time; once a slope fails the run switches to 0.01–0.5 s steps for the debris flow. Hours of storm and minutes of debris flow run as one computation.',
  t4a: 'PLATEAU buildings and terrain', t4b: 'The PLATEAU terrain TIN on a 2 m grid, corrected with building base elevations. Buildings are obstacles up to their roofs that stop the debris and get buried. The 55 × 53 km terrain of hiroshima.tif and aerial photos surround the tile.',
  enCap: 'English mode: the interface, place names, addresses and the text in recordings all switch',
  startTitle: 'Desktop apps', startLead: 'Install and start. The four preset areas, the wide-area terrain, place names and town boundaries come with the app.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', sizeV: 'about 125 MB', langLabel: 'Languages', winPkg: '.exe installer (Tauri v2)', getMac: 'Get the macOS app', getWin: 'Get the Windows app',
  deskNote: '* Address search and building new tiles (GSI elevation and aerial photos, PLATEAU buildings and warning areas) need an internet connection. The GPU is used through WebGL2. Recordings, CSV and GeoTIFF files are saved to the Downloads folder.',
  startNote: '* Computing times are measured on an Apple M5 and depend on the GPU.',
  warn: 'A first-order model with uniform soil; it does not predict individual failures or damage. The 2014 and 2018 rainfall patterns are synthetic hyetographs matched to published figures. For evacuation and disaster-prevention decisions, use your local government’s landslide hazard maps and official warnings.',
  ctaTitle: 'If that valley gave way, <span class="accent">which house would it reach?</span>', ctaGet: 'Get the desktop app',
  credits: 'Sources: MLIT PLATEAU (Hiroshima 2022), GSI (seamless aerial photos, elevation tiles, address search), NASA SRTM GL1, Statistics Bureau e-Stat (2020 Census small-area boundaries), © OpenStreetMap contributors / Rendering: three.js',
  fStore: 'Store page', fManualJa: 'Manual (JA)',
};
const TITLE = {
  ja: 'Hiroshima Landslide | 山が崩れたら、土砂はどこまで来るのか — PLATEAU × GPU 土砂災害シミュレーター',
  en: 'Hiroshima Landslide | When the slope gives way, how far does it come? — PLATEAU × GPU landslide simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('hiroshima-landslide-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
  try { localStorage.setItem('hiroshima-landslide-lp-lang', lang); } catch (e) { /* storage blocked */ }
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
