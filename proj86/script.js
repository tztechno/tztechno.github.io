// Flight Viewer LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navCsv: 'CSV formats', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'Your flight CSV,<br><span class="accent">flying again on a 3D globe.</span>',
  heroLead: 'Open flight data saved from Flightradar24 or similar services (CSV) and a 3D aircraft flies it on the recorded timeline across a 3D globe. Follow the altitude on a chart, jump to recorded events with one click, and retrace the flight from behind the aircraft or from the cockpit, over mountains and airports.',
  heroGet: 'Get the macOS app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon) · 日本語 / English · No sign-up or API key',
  statCsvN: 'CSV', statCsv: 'drag & drop to load',
  statSpeedN: '×0.25–×300', statSpeed: 'playback speed',
  statViewN: '4 views', statView: 'free, follow, chase, cockpit',
  statMultiN: 'Multi-flight', statMulti: 'replay several flights together',
  statFreeN: 'No sign-up', statFree: 'no API key or account needed',
  featTitle: 'Recorded numbers become a flight in the sky',
  featLead: 'Climbs, cruise, descents and the geometry of every turn, invisible in a spreadsheet, are clear at a glance on a 3D globe.',
  f1Title: 'Open a CSV, get a 3D replay',
  f1Body: 'Drop a CSV onto the window and a 3D aircraft flies it on the recorded timeline, leaving a glowing trail behind it. Show the full path faintly, or an altitude “curtain” hanging to the ground to make climbs and descents three-dimensional. Overlay several flights in different colors to compare them side by side.',
  f1c1: 'Drag & drop', f1c2: 'Multiple flights in color', f1c3: 'Altitude curtain',
  f2Title: 'From behind the aircraft, from the cockpit',
  f2Body: 'Four viewpoints: free, follow, chase and cockpit. Look around by dragging or with the keys, and change the distance with the wheel. Turn on terrain and mountains rise in 3D using GSI data in Japan and AWS elevation data elsewhere, so the approach and the terrain make sense together.',
  f2c1: 'Chase / cockpit', f2c2: '3D terrain', f2c3: 'Keyboard flight',
  f3Title: 'Altitude chart and events take you there instantly',
  f3Body: 'The altitude chart at the bottom shows every flight’s profile; click or drag it to jump to that moment. If the CSV has a “note” column, each note becomes an event in a list — click one to jump 5 seconds before it, and a banner appears as you pass. Altitude, ground speed, vertical rate and track are always on screen.',
  f3c1: 'Seek on the altitude chart', f3c2: 'Event list', f3c3: 'Speed & vertical rate',
  f4Title: 'Local time, Japanese and English',
  f4Body: 'Times are shown in the local time zone estimated from the first position and date (including US daylight saving time), and you can switch to UTC, JST, US Eastern and more. The interface switches between Japanese and English with one button, and you can record the replay as a video with time and altitude burned in.',
  f4c1: 'Local time estimated', f4c2: '日本語 / English', f4c3: 'Recording with time',
  csvTitle: 'CSV formats it reads',
  csvLead: 'Columns are detected by name. With time, latitude and longitude, most CSV files just work.',
  c1a: 'Flightradar24', c1b: 'Downloaded CSV files (Timestamp, Position, Altitude, …) as-is. Altitude in feet',
  c2a: 'Flight Dashboard', c2b: 'Track CSV saved from Flight Dashboard (observed history / full path since takeoff)',
  c3a: 'Generic CSV', c3b: 'time / timestamp, latitude and longitude columns. UNIX time or ISO 8601; altitude unit (m / ft) from the column name',
  c4a: 'Event notes', c4b: 'Whatever you write in a “note” column appears as events in the list, the chart and banners',
  csvCap: 'A Flightradar24-format CSV and a Flight Dashboard track CSV replayed together (with altitude curtain)',
  startTitle: 'Desktop app (macOS)', startLead: 'Install and start. A lightweight Tauri app — no account and no API key needed.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', sizeMac: 'about 2 MB', langLabel: 'Languages',
  getMac: 'Get the macOS app',
  deskNote: '* Maps and terrain are fetched live, so an internet connection is required. Flight data (CSV) comes from your own files; the app does not fetch or sell flight data. Recordings are saved to the Downloads folder.',
  warn: 'Positions and altitudes are interpolated between the points in your CSV and are only as accurate as the recording. Do not use it for flight operations or accident investigation. Follow each data provider’s terms of use for your CSV files.',
  ctaTitle: 'Send that flight <span class="accent">back into the sky.</span>', ctaGet: 'Get the macOS app',
  credits: 'Maps: Esri (World Imagery, Canvas), OpenStreetMap contributors / Terrain: GSI Japan elevation tiles, AWS Terrain Tiles (Mapzen) / 3D model: Cesium / Rendering: CesiumJS',
  fStore: 'Store page', fManualJa: '使用マニュアル (JA)',
};
const TITLE = {
  ja: 'Flight Viewer | フライトの CSV を、3D の地球儀でもう一度飛ばす — フライトデータ再生ビューア',
  en: 'Flight Viewer | Your flight CSV, flying again on a 3D globe — flight data replay viewer',
};
const KEY = 'flightviewer-lp-lang';

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || '').startsWith('ja') ? 'ja' : 'en';
}

// 英語表示のときはスクリーンショットも英語版に差し替える（assets/xxx.jpg → assets/xxx_en.jpg）
const EN_SHOTS = ['hero', 'chase', 'cockpit'];
function swapShots(lang) {
  document.querySelectorAll('img[src^="assets/"]').forEach((img) => {
    const m = img.getAttribute('src').match(/^assets\/([a-z]+?)(_en)?\.jpg$/);
    if (!m || !EN_SHOTS.includes(m[1])) return;
    img.setAttribute('src', `assets/${m[1]}${lang === 'en' ? '_en' : ''}.jpg`);
  });
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
  swapShots(lang);
  document.getElementById('lang-btn').textContent = lang === 'en' ? '日本語' : 'English';
  try { localStorage.setItem(KEY, lang); } catch (e) { /* storage blocked */ }
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
