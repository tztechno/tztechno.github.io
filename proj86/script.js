// Flight Dashboard LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navAirports: 'Airports', navData: 'Data & credits', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'The world’s skies,<br><span class="accent">with every plane in flight.</span>',
  heroLead: 'Live ADS-B positions broadcast by aircraft all over the world, shown in real time on a 3D globe you can spin in any direction. Pick an airport to look down on arrivals and departures as true-scale 3D models, or stand beside the runway or under the approach path and watch them come in. Ride along in the cockpit of any flight, save its track as CSV, and replay it later.',
  heroGet: 'Get the desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon) · Windows 10 / 11 · 日本語 / English',
  statLiveN: 'From 5 s', statLive: 'position update interval',
  statApN: '18 airports', statAp: 'presets for aerial and ground views',
  statViewN: '4 views', statView: 'free, follow, chase, cockpit',
  statCsvN: 'CSV', statCsv: 'save and replay tracks',
  statFreeN: 'No sign-up', statFree: 'works right away with anonymous access',
  featTitle: 'That plane you see overhead, on a globe',
  featLead: 'No account and no setup: start the app and the world’s aircraft are on screen. Zoom in for flight number, altitude and speed, and jump to any airport or place with one click.',
  f1Title: 'Every aircraft in the world, live',
  f1Body: 'Aircraft icons turn with their heading and are colored by altitude. Between updates, positions are interpolated from speed and track, so the traffic flows smoothly even with data every few seconds. Set the interval from 5 to 300 seconds, or fetch only the area on screen to save data.',
  f1c1: 'Colored by altitude', f1c2: 'Search by flight / ICAO24', f1c3: 'Interval 5–300 s',
  f2Title: 'Airports in true-scale 3D',
  f2Body: 'Choose an airport to fly above it at an angle, and nearby aircraft turn into true-scale 3D models sized by category, in proportion to the runways and taxiways. Live aircraft are highlighted with color, an outline and a flight-number label, so you can tell them from the parked planes in the satellite photo at a glance.',
  f2c1: 'True-scale 3D models', f2c2: 'Flight & altitude labels', f2c3: 'Top-down / oblique',
  f3Title: 'Stand by the runway and watch them land',
  f3Body: 'Pick “Under the approach” or “Beside the runway” to stand on the ground. Eye height goes from 1.7 m to an observation deck and up to 3,000 m. Zoom up to about 30× with the wheel and click an aircraft to keep it in view. You can also look up from your current location or any spot on the map.',
  f3c1: 'Zoom up to ~30×', f3c2: 'Click to track', f3c3: 'View from my location',
  f4Title: 'Ride along over the mountains',
  f4Body: 'Click a flight and choose “Cockpit” or “Chase” to fly with it. Turn on terrain and Mt. Fuji and the Japan Alps rise in 3D, using GSI 10 m elevation data in Japan and AWS terrain elsewhere. A keyboard-flown free camera is there too.',
  f4c1: 'Cockpit / chase', f4c2: '3D terrain', f4c3: 'Keyboard flight',
  f5Title: 'Save tracks and replay them',
  f5Body: 'Export an aircraft’s track as CSV: either the history the app received (with speed and vertical rate) or the full path since takeoff recorded by OpenSky. Flightradar24 CSV files load as-is, and a 3D model flies them on time at ×1 to ×300. Overlay several flights to compare them, and record video (MP4 / WebM).',
  f5c1: 'Track CSV export', f5c2: 'Flightradar24 CSV', f5c3: 'Video recording',
  f6Title: 'Japanese and English, one button',
  f6Body: 'The button at the top right of the panel switches menus, aircraft details, messages and the settings window between Japanese and English. User manuals in both languages are included.',
  f6c1: '日本語 / English', f6c2: 'Manuals included', f6c3: 'Full screen',
  apTitle: '18 airports, from the air and from the ground',
  apLead: 'Choose an airport to switch between four viewpoints: oblique, top-down, under the approach and beside the runway. Views line up with the landing direction automatically.',
  ap1a: 'Japan', ap1b: 'Haneda, Narita, Kansai, Itami, Centrair, New Chitose, Fukuoka, Naha',
  ap2a: 'Asia & Middle East', ap2b: 'Seoul Incheon, Hong Kong, Singapore Changi, Dubai',
  ap3a: 'Europe', ap3b: 'London Heathrow, Paris Charles de Gaulle, Frankfurt',
  ap4a: 'United States', ap4b: 'New York JFK, Los Angeles, San Francisco',
  apCap: 'Tokyo Haneda (HND) from above. Aircraft with flight-number labels are live',
  osTitle: 'Data from OpenSky Network — no sign-up needed',
  osLead: 'Aircraft positions are ADS-B data collected by OpenSky Network’s worldwide volunteer receivers. The app fetches them directly from your computer.',
  osCap: 'Beside the runway at Haneda, from 300 m',
  o1a: 'Anonymous (no sign-up)', o1b: '400 credits a day — about 3 hours around an airport at a 30-second interval',
  o2a: 'Free OpenSky account', o2b: '4,000 credits a day — about 16 hours around an airport at 15 seconds. Enter your Client ID / Secret in the app',
  o3a: 'Stored securely', o3b: 'The Client Secret is kept in the macOS Keychain / Windows Credential Manager',
  o4a: 'Built to save credits', o4b: 'Fetch only the visible area, a live estimate of daily usage, and no fetching while the window is hidden',
  startTitle: 'Desktop apps', startLead: 'Install and start. A lightweight Tauri app that shows the world’s aircraft the moment it opens.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', sizeMac: 'about 3 MB', sizeWin: 'about 2 MB', langLabel: 'Languages',
  winPkg: '.exe installer', getMac: 'Get the macOS app', getWin: 'Get the Windows app',
  deskNote: '* Aircraft, map and terrain data are fetched live, so an internet connection is required. Track CSV files and recordings are saved to the Downloads folder.',
  warn: 'Positions come from ADS-B signals received by a volunteer network and can be delayed by seconds to tens of seconds or missing outside coverage (airport surfaces, oceans, mountains). Do not use it for aircraft operations or safety decisions. OpenSky Network data is intended for non-commercial and research use.',
  ctaTitle: 'The planes above you, <span class="accent">on a globe in your hands.</span>', ctaGet: 'Get the desktop app',
  credits: 'Sources: OpenSky Network (aircraft positions, ADS-B), Esri (World Imagery, Canvas), OpenStreetMap contributors, GSI Japan elevation tiles, AWS Terrain Tiles (Mapzen) / 3D model: Cesium / Rendering: CesiumJS',
  fStore: 'Store page', fManualJa: '使用マニュアル (JA)',
};
const TITLE = {
  ja: 'Flight Dashboard | 世界の空を、いま飛んでいる飛行機ごと 3D の地球儀で — リアルタイム航空機トラッカー',
  en: 'Flight Dashboard | The world’s skies with every plane in flight, on a 3D globe — live aircraft tracker',
};
const KEY = 'flightdashboard-lp-lang';

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
  return (navigator.language || '').startsWith('ja') ? 'ja' : 'en';
}

// 英語表示のときはスクリーンショットも英語版に差し替える（assets/xxx.jpg → assets/xxx_en.jpg）
const EN_SHOTS = ['hero', 'airport', 'ground', 'terrain', 'replay'];
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
