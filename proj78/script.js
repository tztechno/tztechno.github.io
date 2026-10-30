// Yatsushiro Fault LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navFaults: 'Fault sections', navScen: 'Scenarios', navTech: 'How it works', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'When the fault ruptures,<br><span class="accent">how far does the shaking reach?</span>',
  heroLead: 'The Hinagu fault zone runs along the mountain foot of Yatsushiro, Kumamoto. The fault traces from the GSI active fault map and the Yatsushiro City fault map are laid over 3D terrain, buildings and aerial photos, and the GPU computes what happens when the fault ruptures: the shaking (JMA intensity, peak ground velocity), the slip that breaks the ground surface, damage building by building, and the slopes that fail in the shaking and run down as debris flows. Watch it from any angle and record it straight to video.',
  heroGet: 'Get the desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon) · Windows 10 / 11 · 日本語 / English',
  statSecN: '6 sections', statSec: 'Futagawa & Hinagu fault zones', statScenN: '7 scenarios', statScen: 'M7.3–8.1 and the Kumamoto type', statAreaN: '7 areas', statArea: 'preset tiles in Yatsushiro', statGrid: 'computing grid', statRec: 'MP4 recording',
  featTitle: 'From the fault trace to shaking, damaged buildings and failed slopes',
  featLead: 'Pick a scenario and the rupturing sections and the magnitude are set for you. Shaking comes from the distance to the fault and the terrain; see what happens to buildings and slopes, right on the map.',
  f1Title: 'Where does the fault run?',
  f1Body: 'The fault lines of the GSI active fault map are laid on the aerial-photo 3D terrain. Bands within 20 m (surface-break danger) and 100 m (near-fault caution) of the trace are shaded, and painting the ground by distance to the fault shows at a glance which houses and roads sit right next to it. The Hinagu section follows the foot of the mountains, where the Yatsushiro plain meets the Kyushu mountains.',
  f1c1: 'GSI active fault map', f1c2: 'Yatsushiro City fault map', f1c3: '20 m / 100 m / 300 m bands',
  f2Title: 'Where does it shake, and how hard?',
  f2Body: 'Shaking at depth comes from the distance to the fault and the magnitude, then is amplified by the ground: JMA intensity, PGV and PGA every 2 m. The soft Yatsushiro plain shakes hard, the rocky slopes less, and near the fault a velocity pulse and amplification at the edge of the plain are added. Watch the rupture spread and the waves arrive as an animation.',
  f2c1: 'JMA intensity 4–7', f2c2: 'PGV and PGA', f2c3: '3D seismic-wave animation',
  f3Title: 'Damage, building by building',
  f3Body: 'From the shaking at each building, fragility curves decide complete collapse, half collapse or partial damage; buildings right on the trace that take large offsets are marked as damaged by fault displacement. Click a building for its intensity, PGV, distance to the fault and damage verdict, and save it as CSV.',
  f3c1: 'Fault offset, collapse, half collapse, partial', f3c2: 'Colour by JMA intensity', f3c3: 'Save a point as CSV',
  f4Title: 'Shaking brings slopes down',
  f4Body: 'The horizontal force of the shaking is added to the slope safety factor, and the failed soil runs down the valleys as debris flow. The steep mountain front along the fault fails easily, and wet soil makes it worse. Run the compound case of an earthquake right after heavy rain, or rain alone for comparison.',
  f4c1: 'Coseismic slope safety factor', f4c2: 'Voellmy-friction debris flow', f4c3: 'Heavy rain + earthquake',
  f5Title: 'Compare with warning areas, build any place',
  f5Body: 'The sediment-disaster warning areas (yellow) and special warning areas (red) of the GSI hazard map portal are laid on by type — debris flow, steep-slope failure, landslide. Type an address or place name to build a tile (1–3 km square) of that place inside the app; fault traces, warning areas and buildings are fetched on the spot.',
  f5c1: 'Compare with warning areas', f5c2: 'Tiles from an address', f5c3: 'Record up to 3840 × 2160 at 60 fps',
  secTitle: 'Six sections of the Futagawa and Hinagu fault zones',
  secLead: 'Faults on land come from the GSI active fault map; those under the sea or hidden underground come from the Yatsushiro City fault map. They are split into the six sections of the Headquarters for Earthquake Research Promotion evaluation, and each scenario computes shaking from its rupturing sections only.',
  secCap: 'Wide area 60 × 64 km (Uto Peninsula, Yatsushiro Sea, Kyushu mountains), faults coloured by section',
  s1a: 'Futagawa section', s1b: 'Futagawa fault zone. Ruptured in the 2016 Kumamoto main shock',
  s2a: 'Uto section', s2b: 'Futagawa fault zone. Underground near Uto city',
  s3a: 'Uto Peninsula north coast section', s3b: 'Futagawa fault zone. Offshore, along the north coast of the Uto Peninsula',
  s4a: 'Takano-Shirahata section', s4b: 'North end of the Hinagu fault zone. Ruptured together with the Futagawa section in 2016',
  s5a: 'Hinagu section', s5b: 'Hinagu fault zone. About 40 km from Uki along the mountain foot of Yatsushiro (Kagami, Miyaji, Myoken, Hinagu)',
  s6a: 'Yatsushiro Sea section', s6b: 'Hinagu fault zone. Under the Yatsushiro Sea from off Hinagu towards Minamata',
  scTitle: 'Seven earthquake scenarios',
  scLead: 'Magnitudes follow the government’s long-term evaluation as a guide. Magnitude, depth of the fault top, strike and dip slip, and duration can all be changed.',
  c1a: 'Hinagu section EQ (about M7.5)', c1b: 'An inland earthquake right under the mountain foot of Yatsushiro: JMA 7 and surface offsets along the trace, strong shaking on the plain, coseismic failures on the steep slopes.',
  c2a: 'Whole Hinagu fault zone (about M7.8–8.1)', c2b: 'The worst case: the Takano-Shirahata, Hinagu and Yatsushiro Sea sections, about 80 km, rupture together. All of Yatsushiro sees JMA 6+ to 7, and the shaking lasts long.',
  c3a: 'Yatsushiro Sea section EQ (about M7.3)', c3b: 'The source is under the sea: no surface break on land in Yatsushiro, strong shaking on the southern coast at Futami and Hinagu (tsunami is not modelled).',
  c4a: '2016 Kumamoto EQ (main shock) type', c4b: 'Replays the M7.3 main shock that ruptured the Futagawa and Takano-Shirahata sections together, to compare the shaking that reached Yatsushiro.',
  c5a: 'Surface rupture and compound disaster', c5b: 'A large scarp right on the fault line, and the worst case of an earthquake striking just after rainy-season downpours soaked the soil.',
  c6a: 'For comparison: heavy rain only', c6b: 'Slope failures under July 2020 (Kuma River basin) type rain alone, to compare with the earthquake damage.',
  r1a: 'Hinagu Onsen under the Hinagu section EQ', r1b: 'On the 2 km tile with 2,391 buildings: maximum JMA 6+ (instrumental 6.47), PGV up to 160 cm/s, surface offset up to 2.4 m; 120 buildings damaged by fault displacement, 778 complete and 761 half collapses.',
  r2a: 'Myoken-machi under the whole-zone rupture', r2b: 'On a 1 km tile with 572 buildings: maximum JMA 7 (instrumental 6.58), PGV up to 186 cm/s, offset up to 3.6 m; 13.7 ha reach JMA 7.',
  titleCap: 'Title screen: the wide-area terrain and the seven preset areas — Hinagu Onsen, Miyaji, city centre, Futami, Sencho, Toyo, Sakamoto',
  techTitle: 'How it works',
  t1a: 'Distance to the fault', t1b: 'Fault lines are taken from the GSI active fault map tiles, and the Yatsushiro City fault map is georeferenced from its graticule and traced. Each point carries its section and the side that is uplifted, giving a signed distance from every 2 m cell to the rupturing sections.',
  t2a: 'Strength of shaking', t2b: 'PGV at depth by the Si & Midorikawa (1999) attenuation, amplified by ground estimated from the terrain, with a near-fault pulse, hanging-wall amplification and basin-edge amplification; PGV is converted to JMA instrumental intensity.',
  t3a: 'Fault slip and building damage', t3b: 'The shallower the fault top, the larger the offset at the surface; dip slip shows as a step in the 3D terrain. Buildings get complete, half or partial damage from PGV fragility curves, and those right on the trace with large offsets are damaged by fault displacement.',
  t4a: 'Coseismic slope failure (GPU)', t4b: 'Once the waves arrive, a horizontal seismic coefficient enters the infinite-slope safety factor; the failed soil flows as Voellmy-friction debris flow in WebGL2 shaders. Soil water, failure and debris flow run on the same 2 m grid.',
  enCap: 'English mode: the interface, place names, addresses and the text in recordings all switch',
  startTitle: 'Desktop apps', startLead: 'Install and start. The seven preset areas, the wide-area terrain, active faults, warning areas, place names and town boundaries come with the app.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', sizeMac: 'about 220 MB', sizeWin: 'about 230 MB', langLabel: 'Languages', winPkg: '.exe installer (Tauri v2)', getMac: 'Get the macOS app', getWin: 'Get the Windows app',
  deskNote: '* Address search and building new tiles (GSI elevation, buildings, aerial photos and active fault map, GSI hazard map portal) need an internet connection. The GPU is used through WebGL2. Recordings, CSV and GeoTIFF files are saved to the Downloads folder.',
  warn: 'One example scenario from public data and simplified formulas — not an official damage estimate by the national government, Kumamoto Prefecture or Yatsushiro City. Detailed ground surveys and building ages are not included. Offshore and concealed faults taken from the Yatsushiro City map carry position errors of about ±100 m. Tsunami, fire, liquefaction and aftershocks are not modelled. For evacuation and disaster-prevention decisions, use Yatsushiro City’s hazard maps and official JMA and municipal information.',
  ctaTitle: 'If the fault at the foot of those mountains ruptured, <span class="accent">how hard would my home shake?</span>', ctaGet: 'Get the desktop app',
  credits: 'Sources: GSI (active fault maps, elevation tiles, buildings, seamless aerial photos, hazard map portal, address search), Yatsushiro City fault map, Statistics Bureau e-Stat (2020 Census small-area boundaries), © OpenStreetMap contributors / Rendering: three.js',
  fStore: 'Store page', fManualJa: 'Manual (JA)',
};
const TITLE = {
  ja: 'Yatsushiro Fault | 活断層が動いたら、揺れと断層のずれはどこまで及ぶのか — 日奈久断層帯 3D 地震シミュレーター',
  en: 'Yatsushiro Fault | When the fault ruptures, how far do shaking and slip reach? — Hinagu fault zone 3D earthquake simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('yatsushiro-fault-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
  try { localStorage.setItem('yatsushiro-fault-lp-lang', lang); } catch (e) { /* storage blocked */ }
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
