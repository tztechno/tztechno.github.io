// Shizuoka Flood LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navRain: 'Observed rain', navHazard: 'Hazard maps', navTech: 'How it works', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'Where does<br><span class="accent">the rain go?</span>',
  heroLead: 'A flood simulator for Shizuoka that computes heavy-rain flooding on the GPU over the PLATEAU 3D city model (about 330,000 buildings) and real terrain. Rain falls on the whole 79 × 79 km basin around Suruga Bay, so water running down from the mountains is included, and the place you choose is computed on a 2 m grid, building by building. The observed rain of the 1974 Tanabata flood and Typhoon No. 15 (2022) is included. Watch the water rise and the city go under, then recede after the rain — from any angle, and record it straight to video.',
  heroGet: 'Get the desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon) · 日本語 / English',
  statArea: 'rained-on basin', statBldgN: '330 k', statBldg: 'PLATEAU buildings', statGrid: 'detailed grid', statTimeN: '~6 min', statTime: '13 h of Typhoon No. 15 (2 km tile)', statRec: 'MP4 recording',
  featTitle: 'Make it rain — and watch how the city floods',
  featLead: 'Set the rainfall, run, and follow the flood as it spreads and recedes, one building at a time.',
  f1Title: 'Flooding, building by building',
  f1Body: 'The PLATEAU terrain model (GSI 5 m elevation for tiles built from an address) is gridded at 2 m and the ground is corrected with the base elevation of every building. Buildings stand as walls up to their roofs; rain on a roof runs off its edges into the street. Water is coloured by depth class, and buildings by the flood depth around them (≥0.5 m counts as above floor level).',
  f1c1: 'Constant, centre-peaked, rainband, Tanabata 1974, Typhoon 2022, custom', f1c2: 'Sewer drainage capacity', f1c3: 'How the water recedes',
  f2Title: 'Rain on the whole basin, with the water from the hills',
  f2Body: 'Rain on the chosen area alone misses the water that gathers from the surrounding mountains. The same rain also falls on the whole terrain extent (79 × 79 km, 30 m grid), and its water level is handed to the detailed run at the boundary — a two-level computation that gets depths in hollows and lowlands right. Suruga Bay and Shimizu Port take the water as sea at 0 m.',
  f3Title: 'Anywhere, from an address',
  f3Body: 'Type an address or place name and a tile (1–3 km square) centred there is built in about 10–20 s. With a block number a red pin marks the spot; a town name alone is shown as its census town area. About 1,300 names — stations, mountains, shrines and temples, public facilities — are labelled only while actually in sight, with a line down to the building.',
  f3c1: 'GSI address search', f3c2: 'Click for latitude / longitude and the depth over time', f3c3: '7 preset regions (Shizuoka Station to Shimizu Port)',
  f4Title: 'Any angle — straight to video',
  f4Body: 'Double-click a point and orbit around it, from straight down to looking up from the street, then lock the view. Recording renders every frame before encoding it to MP4, so the video is smooth whatever the computer. The camera can stay fixed, follow keyframes or orbit, and the time, rainfall, legend and labels go into the video.',
  f4c1: 'Up to 3840 × 2160 at 60 fps', f4c2: 'Playback and time slider', f4c3: 'Depth chart for any point',
  rainTitle: 'Bring back the rain of those days',
  rainLead: 'Two downpours that flooded the Tomoe River basin and beyond are included as observed at the Shizuoka Local Meteorological Office, step by step. Change the scale factor to ask “what if that rain had been stronger?”',
  rs1a: 'Tanabata flood (7–8 July 1974)', rs1b: 'Observed hourly rainfall: 508 mm in 21 h, up to 76 mm/h',
  rs2a: 'Typhoon No. 15 (23–24 September 2022)', rs2b: 'Observed 10-minute rainfall: 404 mm in 12 h, 107 mm in the wettest hour',
  rs3a: 'Scale factor', rs3b: 'Keep the shape of the hyetograph and change only its strength',
  rs4a: 'Design storms and custom', rs4b: 'Constant, centre-peaked, rainband, or your own value every 10 minutes',
  rainNote: '* The observations come from one gauge (Magarikane, Suruga-ku) and fall uniformly over the whole computed area. They do not reproduce how the rain actually fell or the damage it caused.',
  titleCap: 'Title screen: real basin contours and falling rain; the moat rises around a turret modelled on the Tatsumi Yagura of Sunpu Castle',
  hzTitle: 'Side by side with the national hazard maps',
  hzBody: 'The flood inundation assumption areas in PLATEAU (the nationally managed sections of the Abe and Warashina rivers; planned scale L1 / maximum assumed scale L2) appear in the official rank colours, as assumed-depth colours, or as a 3D water surface — also in tiles built from an address. After a run, the flooded areas and the buildings flooded above floor level are compared. The assumed water can be raised from 0 to 100% for a recording.',
  hzNote: 'The assumption areas describe rivers overflowing (fluvial flooding); this simulation computes flooding from heavy rain (pluvial flooding). Use the comparison to see where risk tends to concentrate. Prefecture-managed rivers such as the Tomoe are not included.',
  techTitle: 'How it works',
  t1a: 'Shallow water on the GPU', t1b: 'Local inertial equations with Manning friction (LISFLOOD-FP family) solved in WebGL2 shaders. The time step Δt follows the stability condition; the screen shows the safety factor and the Δt in use.',
  t2a: 'Corrected terrain', t2b: 'The PLATEAU terrain TIN on a 2 m grid, corrected with building base elevations. The corrected terrain and a DSM with buildings export as GeoTIFF (Japan Plane Rectangular CS VIII).',
  t3a: 'Two levels at once', t3b: 'The basin (30 m, about 6.9 million cells) and the tile (2 m, with buildings) run together, exchanging water levels at the boundary. The terrain and aerial photos of the whole extent are drawn as the backdrop.',
  t4a: 'Names only for what you can see', t4b: 'Every few frames a small depth-tested image checks whether each label’s anchor is hidden by buildings or hills.',
  enCap: 'English mode: the interface, place names, addresses and the text in recordings all switch',
  startTitle: 'Desktop app', startLead: 'Install and start. The seven preset regions, the basin terrain, place names, town boundaries and the Abe / Warashina flood hazard data come with the app.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', sizeV: 'about 150 MB', langLabel: 'Languages', getMac: 'Get the macOS app',
  deskNote: '* Address search and building new tiles (GSI elevation and aerial photos, PLATEAU buildings) need an internet connection. Uses the GPU (WebGL2). Recordings and GeoTIFFs are saved to the Downloads folder.',
  startNote: '* Computation times were measured on an Apple M5 (Ouchi / Oshikiri, Shimizu-ku, 2 km tile, including the basin run) and depend on the GPU. Results are computations under assumed conditions; for evacuation and disaster decisions use the official hazard maps of your municipality.',
  ctaTitle: 'Where will <span class="accent">that rain collect?</span>', ctaGet: 'Get the desktop app',
  credits: 'Sources: MLIT PLATEAU (Shizuoka City 2022), GSI Japan (elevation, seamless aerial photos, address search), JMA (past weather data: Shizuoka), Statistics Bureau e-Stat (2020 census small-area boundaries), © OpenStreetMap contributors / Rendering: three.js',
  fStore: 'Store page', fManualJa: '使用マニュアル (JA)',
};
const TITLE = {
  ja: 'Shizuoka Flood | 降った雨は、どこへ行くのか — PLATEAU × GPU 浸水シミュレーター',
  en: 'Shizuoka Flood | Where does the rain go? — PLATEAU × GPU flood simulator',
};

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem('shizuoka-flood-lp-lang'); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
  try { localStorage.setItem('shizuoka-flood-lp-lang', lang); } catch (e) { /* storage blocked */ }
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
