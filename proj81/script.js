// Japanese is the page itself; English replaces each [data-i18n] element. The Japanese text is read back from
// the page on load, so it is written only once (in index.html).
const EN = {
  nav_features: 'Features',
  nav_scenarios: 'Scenarios',
  nav_tech: 'How it works',
  nav_start: 'Get it',
  nav_cta: 'Download',
  hero_eyebrow: '3D TSUNAMI SIMULATOR · SHIZUOKA CITY COAST, JAPAN',
  hero_title: 'How far does a Suruga Bay tsunami<br><span class="accent">reach into the city?</span>',
  hero_lead:
    'The Shizuoka City coast from Mochimune to Kambara, 25.5 × 27 km on a 15 m grid. A Nankai Trough megaquake tsunami rolls in from Suruga Bay, overtops the coastal seawalls and the Shimizu Port parapets and spreads over the lowlands, shown on the PLATEAU 3D city model. Change the seawalls and the tide and compare the flooding.',
  hero_btn_start: 'Get the App',
  hero_btn_more: 'Learn More',
  hero_platforms: 'macOS desktop app (Apple Silicon · .dmg) · Japanese / English',
  stat_area: 'Simulation area (Mochimune–Kambara)',
  stat_grid: 'grid (1,700 × 1,800 = 3.06M cells)',
  stat_bldg_num: '310,000',
  stat_bldg: 'buildings, PLATEAU 3D city model',
  stat_src_num: '17 stations',
  stat_src: 'boundary waves from a nested Suruga Bay run',
  stat_tile: 'detail tiles with every building (GPU)',
  feat_kicker: 'FEATURES',
  feat_title: 'From the moment of the earthquake to the flooded city, on one screen',
  feat_lead:
    'GSI 5 m / 10 m elevation, Suruga Bay bathymetry, aerial photos, PLATEAU buildings and e-Stat town boundaries in one 3D scene. Follow the first wave into Shimizu Port and the water spreading over the neck of the Miho Peninsula and the lowlands along the Tomoe River, minute by minute.',
  f1_cap: 'Shimizu Port without seawalls, 16 min after the earthquake. Depth in the legend colours; buildings standing in 0.5 m or more turn red',
  f1_title: 'A tsunami born under Suruga Bay',
  f1_body:
    'The sea off Shizuoka lies inside the source area of a Nankai Trough megaquake: the bay surface is lifted right after the rupture and the first wave reaches the shore within minutes. From the Cabinet Office (2012) Case 1 fault model, Suruga Bay was computed on a ~400 m nested grid; the waves are fed in from 17 stations along the south and east edges of the area, each where it was sampled, together with the uplift of the sea inside the bay.',
  f1_c1: 'Waves at 17 edge stations',
  f1_c2: 'Sea-surface uplift in the bay',
  f1_c3: 'Waves reflected off Izu included',
  f1_c4: 'Time since the earthquake shown',
  f2_cap: 'Shimizu Port with and without seawalls (default Case 1, 16 min after the earthquake)',
  f2_title: 'Change the seawall height and the tide, compare the flooding',
  f2_body:
    'The coastal levees (T.P.+6.0 m, an assumed value) and the Shimizu Port parapets (T.P.+4.0 m, from Shizuoka Prefecture) act as walls; only water that overtops them reaches the land. Switch to "no seawall" or any height from 0 to 15 m, and add a tide of 0–5 m to try a tsunami at high water.',
  f2_c1: 'Seawalls on / off / custom height',
  f2_c2: 'Shimizu Port parapets T.P.+4.0 m',
  f2_c3: 'Tide 0–5 m',
  f2_c4: 'Overtopping cells shown live',
  f3_cap: 'Irifune-cho, Shimizu Ward picked by address search: the deepest water in the area over time (no seawalls)',
  f3_title: 'Find a place by address and record its water depth',
  f3_body:
    'The GSI address search drops a pin for a full address, or outlines the town for a town or chome. Check the depth, the maximum and the arrival time of a pin or an area on the hydrograph, and save it as CSV with the run conditions.',
  f3_c1: 'Pin from an address or place name',
  f3_c2: 'Town outlines',
  f3_c3: 'Hydrograph CSV',
  f3_c4: 'Results CSV every 10 s',
  f4_cap: 'Seen from above: with the defaults, the water spreads over the coastal lowland of Suruga Ward east of the Abe River mouth (16 min)',
  f4_title: '2 m detail tiles and MP4 export',
  f4_body:
    'Build a 1–3 km square 2 m tile at the pin and compute it in detail on the GPU with every building (terrain, buildings and aerial photos are fetched on the spot). Play the computed flooding back at any speed and save it as an MP4 with the elapsed time, offshore wave and flooded area burned in.',
  f4_c1: '2 m tiles (1–3 km square)',
  f4_c2: 'Flooding of every building',
  f4_c3: 'MP4 recording',
  f4_c4: 'Six viewpoints and a free camera',
  sc_kicker: 'TSUNAMI SCENARIOS',
  sc_title: 'Pick the earthquake,<br>compare on the same coast',
  sc_lead:
    'Built around the Nankai Trough megaquake tsunami, with a comparison source, a hypothetical over-design tsunami and a freely set sine wave.',
  sc1_title: 'Nankai Trough megaquake, Cabinet Office Case 1 (default)',
  sc1_desc:
    'The case with its large-slip area from Suruga Bay to off the Kii Peninsula. Waves at the 17 edge stations (max about 5–7 m) and the uplift in the bay, multiplied by 0.7 to approach the flooded area of the Shizuoka Prefecture 4th estimate.',
  sc2_title: 'Cabinet Office Case 1 (reference: bay-mouth wave)',
  sc2_desc: 'The same run sampled at one point at the Suruga Bay mouth (max 5.19 m about 2 min after the earthquake), fed along the whole edge for comparison.',
  sc3_title: 'Tokai earthquake alone, M8.0',
  sc3_desc: 'A single-fault model from the Suruga Trough to the Enshu Sea (max 1.21 m at the south edge).',
  sc4_title: 'Hypothetical over-design tsunami / Custom',
  sc4_desc: 'A 10 m offshore sine wave to see the seawalls overtopped, and a case with any wave height (1–100 m), period and direction.',
  sc_cap: 'Title screen: the simulation area and the scenarios',
  tech_kicker: 'HOW IT WORKS',
  tech_title: 'A computation you can check, on open data and physics',
  tech_lead:
    'How the tsunami travels and runs up on land is solved directly on public terrain, bathymetry and building data. The assumptions and limits are stated alongside.',
  t1_title: 'Shallow-water (local inertial) model',
  t1_body:
    'Water level and discharge on 3.06 million 15 m cells with the local inertial equations (θ-weighted fluxes after Bates et al. 2010 / de Almeida et al. 2012), an automatic CFL time step, a positivity limiter and buildings as obstacles, computed on a separate thread while playing back.',
  t2_title: 'Nested Suruga Bay run and boundary waves',
  t2_body:
    'Cabinet Office Case 1 rebuilt from the published rules (Mw 9.1), computed on a ~2.5 km grid of Japan with Suruga Bay nested at ~400 m. Water levels are recorded at 17 stations every 3 km along the area\'s edges, and a 400 m band along the edges relaxes level and discharge towards each station\'s wave.',
  t3_title: 'Terrain, bathymetry and buildings',
  t3_body:
    'Land elevation and the land/sea boundary from GSI DEM5A/DEM10B, the seabed from 15 arc-second bathymetry. From PLATEAU (2022)\'s 310,000 buildings in Shizuoka City, 35,000 are placed with their real footprints for the computation and display. The Shizuoka plain and Suruga Bay around are shown as a backdrop.',
  t4_title: 'Assumptions and limits',
  t4_body:
    'The 0.7 multiplier is fitted to the prefecture\'s flooded area, and the per-ward areas still differ from the estimate. The land is kept fixed, the depth is capped at 150 m to keep the run fast, and the coastal levee height is an assumed value. Do not use it for evacuation decisions.',
  tech_cap: 'One click switches the main controls and place labels to English (some items such as scenario names stay in Japanese)',
  start_kicker: 'GET SHIZUOKA TSUNAMI',
  start_title: 'Get the Desktop App',
  start_lead:
    'A self-contained app with the terrain, bathymetry, aerial photos and buildings of the area and the Nankai Trough sources built in. Install it and start computing.',
  p1_title: 'Desktop Application',
  p1_os_k: 'OS',
  p1_os_v: 'macOS 11 Big Sur or later (Apple Silicon M1–M5)',
  p1_inst_k: 'Installer',
  p1_inst_v: 'ShizuokaTsunami_1.0.0_aarch64.dmg (~16 MB)',
  p1_data_k: 'Bundled data',
  p1_data_v: 'Shizuoka City coast 25.5 × 27 km, surrounding terrain, Nankai Trough sources',
  p1_net_k: 'Network',
  p1_net_v: 'Computes offline (internet only for address search and building 2 m tiles)',
  p1_btn: 'Product Page & Download',
  start_note:
    '* This software is a simplified tsunami simulation built from open data, not an official tsunami inundation estimate. For evacuation decisions always check the tsunami hazard maps of Shizuoka Prefecture and Shizuoka City and the tsunami information of the Japan Meteorological Agency.',
  cta_title: 'See the Suruga Bay tsunami on your Mac.',
  cta_btn1: 'Get Shizuoka Tsunami',
  footer_credits:
    'Sources: elevation & aerial photos: GSI (Fundamental Geospatial Data DEM5A/DEM10B, GSI Tiles) / buildings: MLIT PLATEAU (Shizuoka City 2022) / town boundaries: e-Stat census small areas (Statistics Bureau) / tsunami source: approximate model after the Cabinet Office (2012) Nankai Trough megaquake model / place names: © OpenStreetMap contributors',
  footer_pref: 'Shizuoka Prefecture 4th damage estimate ↗',
  footer_cao: 'Cabinet Office: Nankai Trough earthquake ↗',
};

const TITLES = {
  ja: 'SHIZUOKA TSUNAMI — 静岡市沿岸の3D津波シミュレーター',
  en: 'SHIZUOKA TSUNAMI — 3D Tsunami Simulator for the Shizuoka City Coast',
};
const JA = {};
document.querySelectorAll('[data-i18n]').forEach((el) => { JA[el.dataset.i18n] = el.innerHTML; });

let lang = 'ja';
function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  const d = lang === 'en' ? EN : JA;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  document.getElementById('langBtn').textContent = lang === 'ja' ? 'EN' : 'JA';
  document.title = TITLES[lang];
}

document.getElementById('langBtn').addEventListener('click', () => applyLang(lang === 'ja' ? 'en' : 'ja'));

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
