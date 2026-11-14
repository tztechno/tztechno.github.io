# Fault Propagation — User Manual (English)

[日本語マニュアル](MANUAL.ja.html)

**Fault Propagation (Ground Motion Propagation & Site Evaluation Simulator)** is a desktop app that takes a fault-parameter CSV and, anywhere in the world, shows how earthquake shaking spreads and evaluates the shaking at sites on land that you choose (JMA intensity, peak acceleration, peak velocity, waveforms, and response spectra).

Use the **JP / EN** button at the top right to switch between Japanese and English.

---

## 1. Screen layout

| Area | Contents |
|---|---|
| Header | Elapsed time, max intensity on land, status, JP / EN switch |
| Left panel | 1. Source Fault / 2. Domain & Site Conditions / 3. Shaking Propagation / 4. Evaluation Sites on Land / 5. Layers |
| Map | Terrain, shaking distributions, faults (colored by slip), rupture start (★), P/S wavefronts, sites |
| Bottom chart | Acceleration and velocity waveforms, response spectrum, and site comparison for the selected site |

Scroll to zoom and drag to pan. "🔍 Domain" shows the whole computation domain and "🌐 World" the whole world. Hover over the map to see elevation, Vs30, rupture distance, intensity, PGV/PGA, and P/S arrival times at that point.

## 2. Giving a fault

### Bundled fault models

Choosing a model from "Bundled fault models" runs everything automatically: terrain download → Vs30 estimation → intensity map → evaluation of nearby cities → waveform synthesis at the most strongly shaken site (a few seconds to a few tens of seconds).

| Model | Type |
|---|---|
| 2024 Noto Peninsula (GSI model, 3 rectangles) | Japan, crustal |
| 2016 Kumamoto mainshock (USGS) | Japan, crustal |
| 2011 Tohoku-oki (USGS) | Japan, subduction |
| 2023 Türkiye–Syria (USGS) | World, crustal |
| 2019 Ridgecrest, USA (USGS) | World, crustal |
| 2025 Kamchatka / 2010 Maule / 2015 Illapel / 2004 Sumatra–Andaman (USGS) | World, subduction |

### Loading a fault CSV

Press "📄 Load fault CSV" or drop a file onto the map. Each row is one rectangular fault.

```
# hypocenter_lon=136.75, hypocenter_lat=37.23, hypocenter_depth_km=12
# rupture_velocity_km_s=2.5
name,lon,lat,top_depth_km,length_km,width_km,strike_deg,dip_deg,rake_deg,slip_m
F1,136.62,37.20,0.5,30,15,40,50,110,3.2
```

| Column | Meaning |
|---|---|
| `lon`, `lat` | Center of the fault plane's surface projection (degrees) |
| `top_depth_km` | Depth of the upper edge (km); `center_depth_km` is also accepted |
| `length_km`, `width_km` | Length and width (km) |
| `strike_deg`, `dip_deg`, `rake_deg` | Strike, dip, rake (degrees) |
| `slip_m` | Slip (m); `slip_cm` is also accepted |

- Lines starting with `#` are comments. `hypocenter_lon / lat / depth_km` set the rupture start, and `rupture_velocity_km_s` the rupture velocity (default: near the slip centroid, 2.5 km/s).
- If a comment contains e.g. `Mw 9.05`, that Mw is used (otherwise it is computed with 40 GPa rigidity).
- "⬇ Save fault CSV" saves the current fault in the same format (handy as a template).

### Placing a simple fault

Open "📐 Place a simple fault", enter Mw, strike, dip, rake and top depth, press "Click the map to place the fault", then click the map. Length and width follow Wells & Coppersmith (1994); slip is derived from Mw.

### Source settings

"⚙ Source settings" lets you change Mw, the earthquake type (crustal / interplate / intraslab; auto by default), the rupture start, and the rupture velocity. "🎯 Pick rupture start on map" lets you choose it on the map. Press "Recompute" after changing settings.

## 3. Domain & site conditions

| Item | Description |
|---|---|
| Domain size | How far around the fault to compute (auto: ±1° to ±5° depending on Mw) |
| Grid resolution | Light / Standard / Fine |
| Vs30 proxy | Active tectonic (Japan, Pacific Rim…) / stable continent — the relation used to estimate Vs30 from slope |

Terrain is downloaded from AWS Terrain Tiles for the needed area only (**internet connection required**). Downloaded tiles are cached and not fetched again.

## 4. Shaking propagation

- **▶ Play** animates the shaking from the origin time: rupture front (dotted white), P-wave front (dashed blue), S-wave front (red), and the intensity at that moment. When playback ends, the view returns to the maximum-intensity map.
- **↺ To 0 s / ⏭ Final** and the time slider show any moment. The space bar also plays / pauses.
- **Show**: propagation / max JMA intensity (classes) / max MMI / PGV / PGA / Vs30.
- With "Show maxima only where shaking has arrived" on, maximum values spread with the S-wave arrival.

## 5. Evaluation sites on land

- When a fault loads, major cities inside the domain are added automatically ("🏙 Nearby cities" adds more).
- Press "＋ Add on map" and click the map, or enter a name, latitude and longitude and press "Add". Picking a point at sea shows a warning.
- Selecting a site synthesizes its 3-component waveforms and shows the details.

| Item | Description |
|---|---|
| JMA intensity / class | GMPE value and the value computed from the synthetic waveforms by the JMA procedure |
| PGV / PGA / MMI | Peak velocity, peak acceleration (larger horizontal component), Modified Mercalli Intensity |
| Rupture / hypocentral distance | Closest distance to the rupture area (slip ≥ 10% of max) and distance from the rupture start |
| P / S arrival, S−P | Seconds after origin time |
| Int. ≥ 4 for | How long the synthetic shaking stays at JMA intensity 4 or above |
| Site Vs30 | Estimated from terrain; can be overridden by hand ("Reset to estimate" restores it) |

With "Calibrate synthetics to the GMPE (recommended)" on, the synthetic horizontal PGV and PGA/PGV ratio are matched to the GMPE values.

## 6. Charts

| Tab | Contents |
|---|---|
| Acceleration / Velocity | NS, EW, UD components; P and S mark arrival times, the white line marks the current time |
| Response spectrum | 5%-damped pseudo-spectral acceleration (periods 0.05–10 s, NS and EW) |
| Compare sites | GMPE intensity and synthetic instrumental intensity for each site |

## 7. Saving

| Button | Contents |
|---|---|
| 📋 Site results CSV | One row per site (location, Vs30, distances, arrivals, PGV, PGA, intensity, MMI, synthetic results) |
| ⬇ Waveform CSV | 3-component acceleration and velocity of the selected site at 0.02 s steps |
| ⬇ Save fault CSV | The fault model (same format as input) |

The desktop app saves files to your Downloads folder.

## 8. Methods

| Item | Method |
|---|---|
| Shaking map | PGV on engineering bedrock (Vs = 600 m/s) from Si & Midorikawa (1999), site amplification of Fujimoto & Midorikawa (2006), JMA intensity from Fujimoto & Midorikawa (2005), MMI from Worden et al. (2012). PGA from Si & Midorikawa (1999) |
| Site conditions | Vs30 from topographic slope (Wald & Allen 2007) |
| Arrival times | Rupture time of each element + travel time (P 6.0 / S 3.5 km/s; 8.0 / 4.6 km/s beyond 150 km) |
| Waveforms | Stochastic finite-fault method (ω² source, geometric spreading, Q(f)=180 f^0.45, κ=0.035) |
| Instrumental intensity | JMA procedure (filter 3 components → vector sum sustained for ≥ 0.3 s) |

## 9. Caveats

- GMPEs give median shaking; real shaking scatters by about ±0.2–0.3 in log10 (roughly ×0.6–1.7).
- Earthquakes above Mw 8.3 are evaluated as Mw 8.3 in the GMPE.
- Slope-based Vs30 is only a guide; reclaimed land, soft valley fills and sedimentary-basin amplification are not captured.
- Synthetic waveforms are statistical; rupture directivity and long-period surface waves are not included.
- This app is for learning and exploration. Refer to official assessments for disaster-management decisions.

## 10. Troubleshooting

- **Nothing computes / terrain fails to download**: check your internet connection; terrain comes from AWS Terrain Tiles.
- **CSV won't load**: check the header names (`top_depth_km` or `center_depth_km`, and `slip_m` or `slip_cm` are required). The line number and the problem are shown.
- **Too slow**: choose a lighter grid resolution or a smaller domain size.
