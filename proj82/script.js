// Shizuoka Fault LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features',
  navFaults: 'Faults & Plate',
  navScen: 'Scenarios',
  navTech: 'How it works',
  navStart: 'Desktop',
  navManual: 'Manual',
  navGet: 'Get it',
  heroTitle: 'When the fault or the Nankai Trough ruptures,<br><span class="accent">how far does the shaking reach?</span>',
  heroLead: 'Active faults in and around Shizuoka City (Fujikawa-kako, Minobu, Kita-Izu, and the 1935 Shizuoka earthquake source) together with the Nankai Trough plate interface from Suruga Bay to Hyuganada. Laid over 3D terrain, buildings and aerial photos from GSI Japan, the GPU computes the shaking (JMA intensity, PGV, PGA), surface fault slip and vertical crustal movement, damage building by building, and coseismic slope failures and debris flows (tsunami is not modelled).',
  heroGet: 'Get the desktop app',
  heroMore: 'See what it does',
  heroPlat: 'macOS desktop app (Apple Silicon · .dmg) · 日本語 / English',
  statSecN: '5 faults + Nankai',
  statSec: 'Fujikawa-kako, Suruga Trough & more',
  statScenN: '10 scenarios + CSV',
  statScen: 'Mw 6.2–9.1 & custom fault CSV',
  statAreaN: '7 areas',
  statArea: 'preset tiles around Shizuoka',
  statGrid: 'computing grid (1M cells)',
  statRec: 'video, GeoTIFF & CSV export',
  featTitle: 'From the plate interface and active faults to shaking, building damage and landslides',
  featLead: 'Pick a scenario and the rupturing fault or plate boundary and magnitude are set for you. Shaking and crustal movement come from the distance to the source and the terrain; see what happens to buildings and slopes in 3D.',
  f1Cap: 'East Kambara / west bank of the Fuji River: GSI active fault map trace and 20 m / 50 m / 100 m / 300 m distance bands',
  f1Title: 'Where do the active faults run?',
  f1Body: 'The fault lines of the GSI active fault map are draped over the aerial-photo 3D terrain. Bands within 20 m (surface-break danger) and 100 m (near-fault caution) are highlighted, and painting the ground by distance to the fault shows at a glance which houses and roads sit right along the Fujikawa-kako fault zone in Kambara.',
  f1c1: 'GSI active fault map',
  f1c2: '20 m / 100 m / 300 m bands',
  f1c3: '3D vertical fault scarp exaggeration',
  f2Cap: 'Peak Ground Velocity PGV (cm/s) from site amplification and fault distance, with building damage colours',
  f2Title: 'Where does it shake, and how hard? (Intensity, PGV & Crustal Movement)',
  f2Body: 'From the shortest distance to the rupturing fault or plate interface and the magnitude Mw, base-rock shaking is computed by the Si & Midorikawa (1999) attenuation and amplified by ground estimated from terrain slope to give JMA intensity, PGV and PGA every 2 m. In Nankai Trough scenarios, vertical crustal movement (uplift / subsidence) is also summed across 165 subfaults by the Okada (1985) equations.',
  f2c1: 'JMA intensity 4–7 & contours',
  f2c2: 'Okada vertical crustal movement',
  f2c3: '3D seismic-wave animation',
  f3Cap: 'Shizuoka Station / Sunpu Castle Park: JMA seismic intensity and per-building damage verdict in the Nankai Trough maximum-class EQ (Mw 9.1)',
  f3Title: 'Damage building by building, plus schematic waveforms at any point',
  f3Body: 'From the PGV at each building and its structural class, fragility curves judge complete collapse, half collapse or partial damage, while buildings right on a surveyed fault trace with large offsets are marked as damaged by fault displacement. Click any building or point to inspect its intensity, PGV, wave arrival time, schematic waveform and damage probabilities, and export to CSV.',
  f3c1: 'Fault offset, collapse, half, partial',
  f3c2: 'Schematic acceleration & velocity waveforms',
  f3c3: 'Save point results as CSV',
  f4Cap: 'Yui / Satta Pass, Shimizu-ku: steep coastal slopes fail under strong shaking and run down as debris flows',
  f4Title: 'Shaking brings slopes down and triggers debris flows',
  f4Body: 'As the seismic waves arrive, a horizontal seismic coefficient kh enters the infinite-slope safety factor, and failed soil runs down on the GPU as a Voellmy-friction debris flow. Test coseismic landslides on steep slopes like Yui / Satta Pass or Umegashima / Okuzure, and shift the rain start time before or after the earthquake to explore compound rain + earthquake disasters.',
  f4c1: 'Coseismic slope safety factor FS',
  f4c2: 'Voellmy-friction debris flow',
  f4c3: 'Configurable rain–earthquake timing',
  f5Cap: 'Sediment-disaster warning areas (debris flow, steep slope, landslide) from the GSI hazard map portal overlaid in 3D',
  f5Title: 'Compare with warning areas, build tiles from an address, load fault CSVs',
  f5Body: 'Overlay Shizuoka Prefecture’s sediment-disaster warning areas (yellow) and special warning areas (red) by type to compare with the simulated debris extent. Build a new tile (1–3 km square) from any address or place name, or load rectangular fault models (one fault plane per row, such as GSI source fault models) from a CSV file.',
  f5c1: 'Warning-area comparison',
  f5c2: 'Fault parameter CSV load & save',
  f5c3: 'Record up to 3840 × 2160 at 60 fps',
  secTitle: 'Active faults around Shizuoka City and the Suruga / Nankai Trough',
  secLead: 'The Fujikawa-kako fault zone and Minobu fault are taken from the GSI active fault map; the Suruga Trough, the concealed 1935 Shizuoka earthquake fault and the Kita-Izu fault zone are included as approximate traces based on HERP evaluations and literature. The Nankai Trough is rebuilt as 165 rectangular subfaults following the Cabinet Office (2012) rules and USGS Slab1.0 depths (~15–18 km beneath Shizuoka City).',
  secCap: 'Wide area 86 × 83 km (Southern Alps, Shizuoka plain, Suruga Bay, Mt. Fuji, NW Izu Peninsula) with colour-coded fault traces',
  s1a: 'Fujikawa-kako fault zone (GSI active fault map)',
  s1b: 'Fujinomiya and Fuji to East Kambara in Shimizu-ku. West-side-up reverse faults; includes both onshore-only rupture (M7.2) and joint rupture with the Suruga Trough (M8.0).',
  s2a: 'Suruga Trough & Nankai Trough (plate interface)',
  s2b: 'Plate boundary running into Suruga Bay with 165 subfaults. Computes shaking and crustal movement for the maximum class (Mw 9.1), 1854 Ansei-Tokai (M8.4) and 1707 Hoei (M8.6) (tsunami is not modelled).',
  s3a: '1935 Shizuoka EQ source fault (concealed, approximate)',
  s3b: 'Blind fault beneath the Udo Hills (after Takeo et al., 1979). Produces no surface break; computes shaking across southern Shizuoka such as Otani and Takamatsu.',
  s4a: 'Minobu fault (GSI map + approximate)',
  s4b: 'Active fault north of Aoi-ku near Minobu, Yamanashi (around M7.0). Used to compare shaking and slope failures in the northern mountains such as Umegashima / Okuzure.',
  s5a: 'Kita-Izu fault zone (approximate + GSI map)',
  s5b: 'Includes the Tanna fault of the 1930 Kita-Izu earthquake (M7.3), about 50 km east of Shizuoka City, for comparing distant inland earthquakes.',
  scTitle: 'Ten earthquake & rainfall scenarios and seven preset areas',
  scLead: 'Covers megathrust earthquakes along the Nankai Trough, a shallow blind fault beneath the city, surface rupture on the Fujikawa-kako fault zone, and compound heavy-rain + earthquake cases. Mw, fault top depth, strike/dip slip, directivity pulse factor and duration are all editable, and custom fault CSVs can be loaded or saved.',
  c1a: 'Nankai Trough megathrust, maximum class (Mw 9.1)',
  c1b: 'Large-slip patch from Suruga Bay to off the Kii Peninsula. On the Shizuoka Station tile, about 93% reaches JMA 7, the centre rises by +4.75 m, and about 49% of buildings are judged complete collapse (an upper-bound indicator without seismic retrofitting).',
  c2a: '1854 Ansei-Tokai type (M8.4) & 1707 Hoei type (M8.6)',
  c2b: 'Compares the Ansei-Tokai type extending to the head of Suruga Bay (+1.40 m uplift at Shizuoka Station) with the Hoei type rupturing from Enshu-nada to Tosa without Suruga Bay (for comparison at Okuzure).',
  c3a: 'Fujikawa-kako + Suruga Trough (M8.0) & Onshore alone (M7.2)',
  c3b: 'The west side rises along the GSI active fault trace through East Kambara, creating a 3D scarp and fault-displacement building damage, and triggering slope failures on the steep coast of Yui.',
  c4a: '1935 Shizuoka EQ (M6.4), Minobu (M7.0) & Kita-Izu (M7.3)',
  c4b: 'Compare a shallow blind fault directly under the city with inland active faults to the north and east at different distances and depths.',
  c5a: 'Compound disaster: heavy rain, then Nankai Trough EQ (Mw 9.1)',
  c5b: 'Worst case where the maximum-class earthquake strikes right after a 75 mm/h downpour has soaked the mountain soil, multiplying slope failures and debris flows in Yui and Okuzure.',
  c6a: 'Fault CSV import/export & 7 preset tiles',
  c6b: 'Includes Shizuoka Station / Sunpu Castle Park, Toro / Nakata, Otani / Takamatsu, Shimizu Station / Port, Yui / Satta Pass, East Kambara, and Umegashima / Okuzure (each 2 km square on a 2 m grid).',
  titleCap: 'Title screen: wide-area terrain of Shizuoka and the 7 preset areas (Shizuoka Sta., Toro, Otani/Takamatsu, Shimizu, Yui, East Kambara, Okuzure)',
  techTitle: 'How it works & design choices',
  t1a: 'Fault distance & plate-interface model',
  t1b: 'Surveyed land traces are extracted from the GSI active fault map, while approximate traces with ±1 km or greater uncertainty are excluded from per-building fault-displacement damage verdicts. The Nankai Trough uses 165 subfaults for distance and Okada crustal deformation.',
  t2a: 'Ground motion & site amplification',
  t2b: 'Base-rock PGV from the Si & Midorikawa (1999) crustal and inter-plate attenuation equations is amplified by ground estimated from 50 m smoothed slope, plus near-fault pulse, hanging-wall and basin-edge effects, then converted to JMA intensity (Midorikawa et al., 1999).',
  t3a: 'Building fragility curves & 8 display modes',
  t3b: 'Each GSI building footprint is evaluated with lognormal PGV fragility curves by structural class. Switch the ground between aerial photo, JMA intensity, PGV, fault distance, slope safety factor FS, soil saturation, slope angle and elevation tint.',
  t4a: 'Coseismic landslides & debris flows (GPU)',
  t4b: 'Rupture waves spread from the fault at ~1.8 km/s, applying horizontal seismic coefficient kh to the infinite-slope safety factor. Failed soil flows as a Voellmy-friction debris flow in WebGL2 shaders on the 2 m grid.',
  enCap: 'One-click Japanese / English toggle across the interface, legends, subfault map, point inspector and video recordings',
  startTitle: 'Desktop app',
  startLead: 'Install and run immediately. All 7 preset areas, the 86 × 83 km wide-area terrain, active fault traces and Nankai Trough subfaults, sediment-disaster warning areas, place names and town boundaries are bundled inside the app.',
  pkgLabel: 'Package',
  cpuLabel: 'Platform',
  dataLabel: 'Bundled data',
  dataVal: '7 Shizuoka tiles (2 m grid) + 86×83 km terrain, faults & warning areas',
  langLabel: 'Languages',
  getMac: 'Product page & download',
  deskNote: '* Address search and building new tiles (GSI elevation, buildings, aerial photos, active fault map and hazard map portal) require an internet connection. Uses the GPU via WebGL2. Recordings (MP4), CSV and GeoTIFF files are saved to the Downloads folder.',
  warn: 'This software presents one illustrative scenario from public data and simplified equations — it is not an official damage projection by the national government, Shizuoka Prefecture or Shizuoka City. For Nankai Trough earthquakes, only shaking and vertical crustal movement from plate-boundary slip are computed; tsunami and liquefaction are not modelled (do not use for coastal or low-land evacuation decisions). Because the attenuation equation is extrapolated to Mw 9.1 and seismic retrofitting is not reflected, building damage counts represent an upper-bound indicator. Always rely on official municipal hazard maps and JMA announcements for disaster preparedness.',
  ctaTitle: 'When the Nankai Trough or an active fault moves, <span class="accent">how will Shizuoka’s city and mountains shake?</span>',
  ctaGet: 'Get the desktop app',
  ctaManual: 'Read the user manual',
  credits: 'Sources: GSI Japan (active fault maps, elevation tiles, buildings, seamless aerial photos, hazard map portal, address search), HERP long-term evaluations, Cabinet Office (2012) Nankai Trough model rules, USGS Slab1.0, Okada (1985), JMA past weather data (Shizuoka), Statistics Bureau e-Stat (2020 Census small-area boundaries), © OpenStreetMap contributors / Rendering: three.js',
  fStore: 'Store page',
  fManualJa: 'Manual (JA)',
  fManualEn: 'Manual (EN)',
};

const TITLE = {
  ja: 'Shizuoka Fault | 活断層と南海トラフが動いたら、揺れと被害はどこまで及ぶのか — 静岡 3D 地震シミュレーター',
  en: 'Shizuoka Fault | When active faults or the Nankai Trough rupture, how far do shaking and landslides reach? — Shizuoka 3D earthquake simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try {
    const s = localStorage.getItem('shizuoka-fault-lp-lang');
    if (s === 'en' || s === 'ja') return s;
  } catch (e) { /* storage blocked */ }
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
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = lang === 'en' ? '日本語' : 'English';
  const navManual = document.getElementById('nav-manual');
  if (navManual) navManual.setAttribute('href', lang === 'en' ? 'MANUAL.en.html' : 'MANUAL.ja.html');
  const ctaManual = document.getElementById('cta-manual');
  if (ctaManual) ctaManual.setAttribute('href', lang === 'en' ? 'MANUAL.en.html' : 'MANUAL.ja.html');
  try { localStorage.setItem('shizuoka-fault-lp-lang', lang); } catch (e) { /* storage blocked */ }
}

let lang = initialLang();
applyLang(lang);
document.getElementById('lang-btn').addEventListener('click', () => {
  lang = lang === 'ja' ? 'en' : 'ja';
  applyLang(lang);
});

// reveal sections as they scroll into view
const targets = document.querySelectorAll('.feature, .tech, .platform, .stat, .shot.wide, .split');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  targets.forEach((t) => { t.classList.add('reveal'); io.observe(t); });
}
