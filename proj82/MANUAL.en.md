# Shizuoka Fault — User Manual

A desktop application that overlays the active faults in and around Shizuoka City and the Nankai Trough plate interface on 3D terrain, buildings and aerial photos from the Geospatial Information Authority of Japan (GSI), and computes:

- Strength of ground shaking (JMA instrumental seismic intensity, Peak Ground Velocity PGV, Peak Ground Acceleration PGA)
- Surface fault displacement (strike-slip and vertical scarp steps) and vertical crustal movement from Nankai Trough slip
- Damage to each individual building (fault displacement damage, complete collapse, half collapse, partial damage)
- Coseismic slope failures and debris-flow runout on the GPU

> **Tsunami is not modelled** — For Nankai Trough earthquakes, only ground shaking and vertical crustal movement from slip on the plate interface are computed. Tsunami height, arrival and inundation are not computed; do not use this app for coastal evacuation decisions.

> **Important Note** — The results represent **one illustrative scenario** derived from open public data and simplified equations. They do not match actual earthquake damage or official projections by the national government, Shizuoka Prefecture or Shizuoka City. Always use official municipal hazard maps and meteorological warnings for disaster preparedness and evacuation.

*日本語版: [MANUAL.ja.md](MANUAL.ja.md)*

---

## 1. Starting the App

- **macOS (Apple Silicon)**: Open the downloaded `.dmg` (`ShizuokaFault_<version>_aarch64.dmg` or `ShizuokaFault.dmg`) and drag `ShizuokaFault.app` into the Applications folder (on first launch, right-click → Open).
- All 7 preset areas, the 86 × 83 km wide-area terrain, active fault traces, Nankai Trough subfaults, sediment-disaster warning areas, place names and town boundaries are bundled inside the app, so it runs offline. An internet connection is only needed when searching addresses or building new tiles.
- Video recordings (MP4), CSV files and GeoTIFF grids are saved directly to your `Downloads` folder.

---

## 2. Screen Layout

### Title Screen
When the app starts, the title screen appears. Click **START** (or press Enter) once loading finishes, or click any of the 7 preset areas on the right to open it directly. Click **Title** at the top left of the side panel at any time to return to the title screen.

### Main View
| Area | Contents |
|---|---|
| Left side panel | Sections 1–7: Region / Active Fault Map & Earthquake / Display Mode / Landslide Run / Soil & Rain / Hazard Map / Video Recording |
| Centre | 3D viewport (terrain, buildings, active fault map, seismic intensity / PGV colouring, debris flow) |
| Top-left **☰ Menu** | Fold or unfold the entire left panel |
| Top-left HUD ("Status") | Region name, elapsed time, Mw and max JMA intensity, building damage counts, failed slope area |
| Top-right Legend | Automatically updates to match the active terrain, building and hazard-map layers |
| Bottom-left Wide-Area Map | 86 × 83 km shaded relief around Shizuoka City and Suruga Bay with colour-coded fault traces; click to pick a location |
| Bottom Timeline & Chart | Playback scrubber and time-series chart for rainfall and the inspected point |

Click **English / 日本語** at the top of the side panel to switch the entire interface, legends, point inspector and video overlay text between Japanese and English.

---

## 3. Choosing or Building a Region Tile

### Preset Areas (each 2 km × 2 km on a 2 m grid, 1,000,000 cells)

| Area | Highlights |
|---|---|
| Shizuoka Station / Sunpu Castle Park | City centre on the Shizuoka plain; compare Nankai Trough shaking and building damage |
| Toro / Nakata, Suruga-ku | Soft ground on the lower Abe River plain; compare site amplification on flat lowlands |
| Otani / Takamatsu, Suruga-ku | SW foot of the Udo Hills; area hardest hit in the 1935 Shizuoka earthquake |
| Shimizu Station / Port | Harbour city nearest the Suruga Trough; compare vertical crustal movement |
| Yui / Satta Pass, Shimizu-ku | Yui landslide area and steep Tokaido coastal slopes; coseismic slope failures |
| East Kambara / west bank of the Fuji River | South end of the Fujikawa-kako fault zone; surveyed GSI fault trace crosses the tile |
| Umegashima / Okuzure, Aoi-ku | Site of the giant Okuzure landslide from the 1707 Hoei earthquake; mountain slope failures |

### Building a New Tile from an Address
1. Open **Make a new tile from an address or place name**, enter a place name or address, and click **Search**.
2. Pick a result and choose a tile size (1 / 2 / 3 km square).
3. Click **Build and show this tile** (requires internet access to fetch GSI 5 m / 10 m DEM, building footprints, aerial photos, active fault map tiles and hazard map tiles).

---

## 4. Active Fault Map Overlay

- **Red lines (solid / dashed with ticks)**: Surveyed active fault traces from the GSI Active Fault Map (`afm` tiles).
- **Purple bands**: Approximate traces placed from HERP evaluations and research papers where GSI active fault maps are unavailable (offshore or blind faults). **Position uncertainty is ±1 km or greater**; per-building fault-displacement damage is not evaluated along approximate traces.
- **Wide-area map colours**: Fujikawa-kako fault zone (red), Minobu fault (orange), Kita-Izu fault zone (violet), Suruga Trough (blue), 1935 Shizuoka EQ blind fault (green).

---

## 5. Earthquake Scenarios & Custom Fault CSV

| Scenario | Rupturing Source | Scale | Notes |
|---|---|---|---|
| No fault rupture (default) | None | — | Normal conditions at launch |
| Nankai Trough megathrust, maximum class | Suruga Bay to Hyuganada plate interface | Mw 9.1 | Rebuilt from Cabinet Office (2012) rules; large-slip patch from Suruga Bay to off Kii |
| 1854 Ansei-Tokai type | Suruga Trough to Tonankai | M 8.4 | Rupture reaching the head of Suruga Bay; uplift along the west coast |
| 1707 Hoei type | Enshu-nada to off Tosa (without Suruga Bay) | M 8.6 (Mw 8.7) | Long shaking from a more distant source; compare at Okuzure |
| Fujikawa-kako + Suruga Trough | Fujikawa-kako fault zone + Suruga Trough | ~M 8.0 | Long-term evaluation case a (west side up 1–2 m) |
| Fujikawa-kako onshore alone | Fujikawa-kako fault zone | ~M 7.2 / Mw 6.8 | Onshore reverse fault rupturing alone |
| 1935 Shizuoka EQ type | Blind fault near the Udo Hills | M 6.4 / Mw 6.2 | Shallow earthquake beneath the city; no surface break |
| Minobu fault EQ | Minobu fault | ~M 7.0 / Mw 6.7 | Compare mountain slope failures in northern Aoi-ku |
| Kita-Izu fault zone EQ | Kita-Izu fault zone | ~M 7.3 / Mw 6.9 | 1930 Kita-Izu type (~50 km east of Shizuoka) |
| Compound disaster: heavy rain + Nankai Trough | Suruga Bay to Hyuganada | Mw 9.1 | Mw 9.1 earthquake striking right after a 75 mm/h downpour |
| Comparison: heavy rain only | None | — | 1974 Tanabata flood rain alone (508 mm in 21 h) |

### Loading & Saving Fault Parameter CSVs
Click **📄 Load Fault CSV** to load rectangular fault planes (one fault per row: `name, lon, lat, top_depth_km, length_km, width_km, strike_deg, dip_deg, rake_deg, slip_m`) in the same format used by GSI source fault models. Click **⬇ Save Fault CSV** to export the active scenario’s fault planes as a CSV template.

---

## 6. Coseismic Landslides, Rain Timing & Point Inspection

- Click **▶ Start Earthquake & Landslide Run** in Section 4 to propagate the seismic waves and compute coseismic slope failures and Voellmy-friction debris flows on the 2 m grid.
- In Section 5, set **Rain start relative to the earthquake (hours)**: negative values (e.g. `-3`) start rain before the earthquake; positive values (e.g. `+6`) start rain after the earthquake.
- Click any building or ground point in the 3D view to inspect its fault distance, JMA intensity, PGV, PGA, vertical crustal movement, wave arrival time, schematic acceleration/velocity waveform, slope safety factor FS and building damage probabilities, and click **📄 Save this point to CSV** after a run.

---

## 7. Exporting GeoTIFF, CSV & 4K MP4 Video

- **GeoTIFF**: Export JMA seismic intensity, PGV, fault distance, corrected DEM, DSM with buildings, maximum debris depth and failure depth in Japan Plane Rectangular CS VIII (JGD2011, EPSG:6676).
- **MP4 Video**: Record in Section 7 up to 3840 × 2160 (4K) at 60 fps with fixed, keyframed or orbiting camera paths.

---

## 8. Limitations & Sources

- **Illustrative scenario only**: Attenuation equations, fragility curves and infinite-slope stability use simplified models without borehole soil profiles or building age/seismic retrofitting data. On the Shizuoka Station tile under the Mw 9.1 maximum-class scenario, about 93% reaches JMA 7 and about 49% of buildings are judged complete collapse; treat building counts as an upper-bound indicator for relative comparison.
- **No tsunami or liquefaction**: Neither tsunami inundation nor soil liquefaction is modelled.
- **Sources**: GSI Japan (`afm` active fault maps, 5 m / 10 m DEM, building footprints, seamless aerial photos, hazard map portal, address search), HERP long-term evaluations, Cabinet Office (2012) Nankai Trough model rules, USGS Slab1.0, Okada (1985), JMA past weather data (Shizuoka), Statistics Bureau e-Stat (2020 Census small areas), © OpenStreetMap contributors.
