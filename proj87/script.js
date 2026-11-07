// RainViewer 3D LP: Japanese / English switch and reveal-on-scroll.
// Japanese is the markup; English strings live here. Choice is kept in localStorage (or ?lang=en).
const EN = {
  navFeatures: 'Features', navLayers: 'Layers', navArchive: 'Past storms', navStart: 'Desktop', navGet: 'Get it',
  heroTitle: 'The rain falling now,<br><span class="accent">and the storms of the past.</span>',
  heroLead: 'Worldwide precipitation radar (the last 2 hours plus a 30-minute forecast), global precipitation from NASA satellites since 2000 and Himawari infrared cloud imagery, all laid over a 3D globe you can spin in any direction. Pick a date and time to travel back to past typhoons and rain bands, play the frames to follow the clouds, and save what you see as a time-stamped image or a precipitation CSV.',
  heroGet: 'Get the desktop app', heroMore: 'See what it does', heroPlat: 'macOS (Apple Silicon) · Windows 10 / 11 · 日本語 / English',
  statLayersN: '7 layers', statLayers: 'radar, satellite, pressure, wind, temperature',
  statYearN: 'Since 2000', statYear: 'GPM IMERG global precipitation',
  statLiveN: '10 min', statLive: 'radar update interval',
  statCsvN: '300 × 300', statCsv: 'point precipitation CSV',
  statFreeN: 'No sign-up', statFree: 'for radar and satellite data',
  featTitle: 'Rain now and on that day, on one globe',
  featLead: 'No data to download, no maps to prepare. Start the app and the latest radar is on screen; one click takes you anywhere in the world and to any day in the past.',
  f1Title: 'Where is it raining right now?',
  f1Body: 'RainViewer’s worldwide radar, shown at the latest 10-minute frame. Drag the slider back through the last 2 hours or forward into the 30-minute forecast (nowcast), and press play to watch the rain move. The data refreshes automatically about every 5 minutes.',
  f1c1: 'Last 2 h + 30 min forecast', f1c2: 'Rain and snow in separate colors', f1c3: '9 color palettes',
  f2Title: 'Travel back to the storms of the past',
  f2Body: 'Pick a date and time on the calendar (UTC, with Japan time alongside) to show NASA / JAXA GPM IMERG global precipitation every 30 minutes or as a daily total, from June 2000 to today. Famous events such as the July 2018 western Japan floods, the July 2020 Kumamoto floods and Typhoon Hagibis (2019) are one click away as presets.',
  f2c1: 'June 2000 – today', f2c2: '30 min / daily', f2c3: 'Typhoon & heavy-rain presets',
  f3Title: 'See the clouds from space',
  f3Body: 'Himawari infrared imagery every 10 minutes shows how high and how far the clouds reach across the planet: the whiter and colder the cloud top, the more developed the thunderstorm or typhoon. NASA MODIS imagery shows each day’s clouds since 2000 in colors close to what the eye would see.',
  f3c1: 'Himawari every 10 min', f3c2: 'MODIS true color', f3c3: 'Time-lapse playback',
  f4Title: 'Keep it as an image or a CSV',
  f4Body: 'One click on the camera saves the globe as a PNG with the observation time (UTC and Japan time), layer name, viewpoint and legend written in, ready to drop into a report. The CSV button exports precipitation rate (mm/h) on a latitude/longitude grid for the area on screen.',
  f4c1: 'PNG with time & legend', f4c2: 'Precipitation CSV in mm/h', f4c3: 'Saved to Downloads',
  f5Title: 'Japanese and English, one button',
  f5Body: 'The button at the top right (or the L key) switches everything between Japanese and English: menus, legend, notifications, city names on the globe, even the text written onto saved images. Handy for sharing with colleagues abroad or making English material.',
  f5c1: '日本語 / English', f5c2: 'Keyboard shortcuts', f5c3: 'Full screen',
  layTitle: 'Seven weather and satellite layers',
  layLead: 'Switch them from the layer bar at the top left. Radar and satellite data need no sign-up; pressure, wind and temperature need a free OpenWeatherMap API key.',
  layCap: 'Global view: live precipitation radar across Asia',
  l1a: 'Precipitation', l1b: 'RainViewer radar; switches to GPM IMERG automatically for past dates',
  l2a: 'Himawari IR clouds', l2b: 'Himawari-8/9 Band 13, every 10 minutes, roughly the last 2–3 months',
  l3a: 'Global precip. (IMERG)', l3b: 'NASA / JAXA satellite precipitation estimate, June 2000 onward, 30 min / daily',
  l4a: 'Satellite (visible)', l4b: 'NASA Terra / MODIS true-color imagery, February 2000 onward, daily',
  l5a: 'Pressure / wind / temperature', l5b: 'OpenWeatherMap global maps (free API key required)',
  l6a: 'Base maps', l6b: 'Dark Earth (dark map that makes data stand out) / Blue Marble (satellite imagery)',
  arTitle: 'Revisit the storms people remember',
  arLead: 'A preset sets the date, time, layer and region at once. Step 3 hours or a day at a time, or press play, to follow the rain as it moves.',
  p1a: 'July 2018 western Japan floods', p1b: '2018-07-06 12:00 UTC. A band of heavy rain along the rainy-season front from western to eastern Japan, as GPM IMERG precipitation rate.',
  p2a: 'July 2020 Kumamoto floods', p2b: '2020-07-03 21:00 UTC. The pre-dawn rain when a line of thunderstorms sat over the Kuma River basin.',
  p3a: 'Typhoon Hagibis (2019)', p3b: '2019-10-12 10:00 UTC. Rain spreading over Kanto, Koshin and Tohoku around landfall on the Izu Peninsula.',
  p4a: 'August 2021 heavy rain', p4b: '2021-08-13 21:00 UTC. A stalled front bringing days of rain from Kyushu to Chugoku.',
  arCap: 'July 2018 western Japan floods (2018-07-06 12:00 UTC / 21:00 JST), GPM IMERG 30-minute precipitation rate',
  startTitle: 'Desktop apps', startLead: 'Install and start. A lightweight Tauri app that shows the latest radar the moment it opens.',
  pkgLabel: 'Package', cpuLabel: 'Runs on', sizeLabel: 'Size', sizeMac: 'about 3 MB', sizeWin: 'about 2 MB (portable about 6 MB)', langLabel: 'Languages',
  winPkg: '.exe installer / portable', getMac: 'Get the macOS app', getWin: 'Get the Windows app',
  deskNote: '* Radar, satellite and map data are fetched live, so an internet connection is required. PNG images and CSV files are saved to the Downloads folder.',
  warn: 'Images and CSV values are estimates read from the colors of public map tiles. They do not replace official observations or warnings from your weather service. For evacuation and safety decisions, use official weather-service and municipal information. NASA publishes Himawari infrared imagery for roughly the last 2–3 months only.',
  ctaTitle: 'The world’s rain clouds, <span class="accent">on a globe in your hands.</span>', ctaGet: 'Get the desktop app',
  credits: 'Sources: RainViewer API (radar), NASA GIBS / Earthdata (JAXA GPM IMERG, JMA Himawari-8/9, NASA Terra MODIS), OpenWeatherMap Weather Maps, Esri (World Dark Gray, World Imagery, World Boundaries and Places) / Rendering: CesiumJS',
  fStore: 'Store page', fManualJa: '使用マニュアル (JA)',
};
const TITLE = {
  ja: 'RainViewer 3D | いま降っている雨も、あの日の豪雨も、3D の地球儀で — リアルタイム降水レーダー＆衛星ビューア',
  en: 'RainViewer 3D | The rain falling now and the storms of the past, on a 3D globe — precipitation radar & satellite viewer',
};
const KEY = 'rainviewer3d-lp-lang';

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') return q;
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'ja') return s; } catch (e) { /* storage blocked */ }
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
