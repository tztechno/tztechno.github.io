// Mt. Fuji View Shinkansen — landing page: language toggle, nav, lightbox, reveal-on-scroll
(() => {
  const EN = {
    brand: 'Mt. Fuji View Shinkansen',
    'nav.highlights': 'Highlights', 'nav.views': 'Views', 'nav.driving': 'Driving', 'nav.data': 'Data', 'nav.specs': 'Specs', 'nav.faq': 'FAQ',
    'cta.get': 'Get the app', 'cta.more': 'See highlights',
    'hero.eyebrow': 'Tokaido Shinkansen  Mishima — Shin-Fuji — Fuji River',
    'hero.title': 'Mt. Fuji,<br><span>out the window.</span>',
    'hero.lead': 'The Mt. Fuji views from the Shinkansen window, rebuilt from elevation data, GSI aerial photos and PLATEAU 3D city models. Ride a 16-car N700S-style train along a 30 km section.',
    'stat.km': 'From the Fuji River bridge to Mishima, with tunnels at both ends',
    'stat.bldg': 'Buildings from the PLATEAU 3D city model',
    'stat.fuji': 'Mt. Fuji in the window, up to about 9° above the horizon',
    'stat.speed': 'ATC top speed; up to 1000 km/h in semi-auto',
    'hl.title': 'Highlights of the route',
    'hl.lead': 'Mt. Fuji is in the right-hand window going down (towards Osaka) and in the left-hand window going up. Cross the Fuji River bridge and stop at Shin-Fuji, scenes known from the real train window.',
    'f1.t': 'Mt. Fuji fills the window',
    'f1.d': 'Look straight out of a passenger window. The distance, direction and elevation angle of Mt. Fuji are always shown. The snow cap keeps the shading of the ridges and gullies, and you can turn it off.',
    'f2.t': 'Mt. Fuji from the Shin-Fuji platform',
    'f2.d': 'The Kodama takes the platform loop at 70 km/h through the turnout and stops right at its mark. Even while it waits, Mt. Fuji is outside the window. Shin-Fuji and Mishima are modelled with two platforms and four tracks, canopies and station signs.',
    'f3.t': 'Fuji River bridge and viaducts',
    'f3.d': 'The track follows the double-track centreline from OpenStreetMap, built as a viaduct along the whole route. The Fuji River is crossed on steel girders and oval piers, with catenary masts, wires, ballast and rails all the way.',
    'f4.t': 'Names of peaks and buildings',
    'f4.d': 'Fifteen peaks, including Mt. Fuji, Mt. Hoei, Mt. Ashitaka, Hakone and the Southern Alps, are tagged with their heights, and 30 places such as stations, city halls and factories are named. Tags hide behind terrain and shift sideways when they overlap.',
    'f5.t': 'Morning, midday and evening',
    'f5.d': 'Pick from three times of day. In the evening Mt. Fuji glows red and long shadows cross the town. Distant mountains fade into the haze.',
    'v.title': 'Five views',
    'v.lead': 'Switch views with V or the 1–5 keys. Drag to look around and use the wheel to zoom.',
    'v1.t': 'Cab', 'v1.d': 'Twin tracks and catenary beyond the nose',
    'v2.t': 'Right / left window', 'v2.d': 'The view through the passenger window frame',
    'v3.t': 'Behind', 'v3.d': 'Following the lead car from behind',
    'v4.t': 'Aerial', 'v4.d': 'Mt. Fuji beyond the train, from the air',
    'd.title': 'Driving and trains',
    'd1.t': 'Automatic', 'd1.d': 'The train follows the 285 km/h ATC limit and its braking curves. Just enjoy the view until the tunnel at the end.',
    'd2.t': 'Semi-auto', 'd2.d': 'Change only the target speed with ↑ ↓. Above 285 km/h the ATC is cut out and the scenery rushes past at up to 1000 km/h.',
    'd3.t': 'Nozomi / Kodama, up / down', 'd3.d': 'The Nozomi passes every station; the Kodama stops at Shin-Fuji and Mishima. Mt. Fuji is on the right going down (to Shin-Osaka) and on the left going up (to Tokyo).',
    'd4.t': 'Fast-forward', 'd4.d': 'Run time at ×1 to ×5. Station stops get shorter too.',
    'k.title': 'Keys', 'k.view': 'View', 'k.mode': 'Auto ⇔ semi', 'k.speed': 'Target speed', 'k.fast': 'Fast-forward ×1–5',
    'k.time': 'Time of day', 'k.snow': 'Snow cap', 'k.labels': 'Name tags', 'k.lang': '日本語 / English',
    'k.sound': 'Sound', 'k.pause': 'Pause', 'k.title2': 'Title screen',
    'data.title': 'Built from real data',
    'data1.t': 'Terrain', 'data1.d': '1-arc-second (about 30 m) elevation data in three levels of detail: along the line, around Mt. Fuji, and a wide area reaching the Southern Alps and Hakone.',
    'data2.t': 'Aerial photos', 'data2.d': 'GSI seamless aerial photos, about 2 m per pixel along the line.',
    'data3.t': 'Buildings', 'data3.d': 'About 60,000 buildings in Fuji, Numazu, Mishima, Nagaizumi and more, from the Project PLATEAU 3D city model (LOD1) of MLIT.',
    'data4.t': 'Track & stations', 'data4.d': 'A double-track centreline from the Tokaido Shinkansen in OpenStreetMap, with modelled viaducts, stations and tunnel portals.',
    's.title': 'System requirements',
    's.mac1': 'Apple Silicon (M1 or later)', 's.mac2': 'macOS 12 or later recommended', 's.disk': 'About 150 MB of free disk space',
    's.win1': 'Windows 10 / 11 (64-bit)', 's.win2': 'WebView2 (built into Windows 11)',
    's.common': 'All platforms', 's.c1': '8 GB of memory or more recommended', 's.c2': 'A GPU with WebGL 2', 's.c3': 'No internet connection needed (data included)',
    'faq.title': 'FAQ',
    q1: 'Which window is Mt. Fuji on?', a1: 'On the right (seat E side) going down towards Shin-Osaka, and on the left going up towards Tokyo. Choosing a direction on the title screen picks that window for you.',
    q2: 'Which section does it cover?', a2: 'About 30.3 km, from the tunnel portal on the west bank of the Fuji River, through Shin-Fuji and Mishima, to the tunnel portal east of Mishima.',
    q3: 'Does it work offline?', a3: 'Yes. All terrain, aerial photo and building data is inside the app, so it runs without an internet connection.',
    q4: 'I get a warning when I open it.', a4: 'On macOS, right-click the app and choose Open. On Windows, choose "More info" → "Run anyway" in SmartScreen.',
    q5: 'Is it available in English?', a5: 'Yes. Press L or use the button to switch the interface, station names and tags between Japanese and English.',
    q6: 'Is it identical to the real line?', a6: 'Terrain, buildings and the track position come from real data. The viaduct heights, the train and the stations are reconstructions based on the real ones and differ in detail.',
    'end.title': 'Board the window seat with a view of Mt. Fuji.',
    credits: 'Terrain: elevation data (mt_fuji.tif) / Aerial photos: GSI Japan seamless photos / Buildings: Project PLATEAU (MLIT) / Track & places: © OpenStreetMap contributors',
    disclaimer: 'This is an unofficial, independent simulator and is not affiliated with Central Japan Railway Company. The train is a model based on the N700S.',
  };

  // capture the Japanese originals once
  const JA = {};
  document.querySelectorAll('[data-i18n]').forEach((el) => { JA[el.dataset.i18n] ??= el.textContent; });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => { JA[el.dataset.i18nHtml] ??= el.innerHTML; });

  const btn = document.getElementById('langBtn');
  function apply(lang) {
    const d = lang === 'en' ? EN : JA;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => { const v = d[el.dataset.i18n]; if (v) el.textContent = v; });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { const v = d[el.dataset.i18nHtml]; if (v) el.innerHTML = v; });
    btn.textContent = lang === 'en' ? '日本語' : 'EN';
    document.title = lang === 'en' ? 'Mt. Fuji View Shinkansen | 富士山ビュー新幹線' : '富士山ビュー新幹線 | Mt. Fuji View Shinkansen';
    try { localStorage.setItem('fujilp.lang', lang); } catch { /* storage unavailable */ }
  }
  let lang = 'ja';
  try { lang = localStorage.getItem('fujilp.lang') || (navigator.language.startsWith('ja') ? 'ja' : 'en'); } catch { /* storage unavailable */ }
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ja') lang = q;
  if (lang !== 'ja') apply(lang);
  btn.addEventListener('click', () => { lang = lang === 'ja' ? 'en' : 'ja'; apply(lang); });

  // nav: solid background after the hero, mobile menu
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const links = document.getElementById('navLinks');
  document.getElementById('menuBtn').addEventListener('click', () => {
    links.classList.toggle('open');
    nav.classList.add('solid');
  });
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));

  // lightbox for screenshots
  const lb = document.getElementById('lightbox'), lbImg = document.getElementById('lbImg');
  const close = () => { lb.hidden = true; lbImg.src = ''; };
  document.querySelectorAll('.shot').forEach((s) => s.addEventListener('click', () => {
    lbImg.src = s.dataset.full;
    lbImg.alt = s.querySelector('img')?.alt ?? '';
    lb.hidden = false;
  }));
  lb.addEventListener('click', (e) => { if (e.target !== lbImg) close(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) close(); });

  // reveal on scroll
  const targets = document.querySelectorAll('.feature, .view, .card, .spec, details, .keys, .data-in, .sec-head');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    targets.forEach((t) => { t.classList.add('reveal'); io.observe(t); });
  }
})();
