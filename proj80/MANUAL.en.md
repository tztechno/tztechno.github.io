# Shizuoka Landslide — User Manual

A desktop application that uses the Shizuoka City 3D city model (PLATEAU: terrain, buildings, sediment-disaster warning areas) and wide-area elevation data (`shizuoka.tif`, SRTM) to show in 3D how heavy rain wets the soil on the slopes until they fail, how the failed soil runs down as a debris flow, and how it buries the buildings in town — and to record it as a video.

- The rise of the water table in the soil and the drop of the slope safety factor are computed on the GPU
- The debris from the failures runs down the hollows and spreads on the fans; its extent, depth and impact pressure on buildings are computed
- You can also click a slope to make it fail ("what if this slope gave way")
- Results can be compared with the warning areas designated by Shizuoka Prefecture
- Videos (MP4) with any camera angle or camera move

For the method and the data processing see [README.md](README.md) (Japanese).

*日本語版: [MANUAL.ja.md](MANUAL.ja.md)*

---

## 1. Starting

macOS (Apple Silicon): open the downloaded `.dmg` (e.g. `ShizuokaLandslide.dmg`) and drag the app into Applications (first launch: right-click → Open). The preset regions, the wide-area terrain and the place names come with the app; address search and building new tiles need an internet connection. Recordings (MP4), CSV and GeoTIFF files are saved to the Downloads folder. The GPU largely decides the speed.

## 2. Screen

The title screen comes first; START (Enter) opens the app, and the region list on the right opens a region. The Title button at the top left brings it back. The left panel holds the settings 1–7; the 3D view shows the time, rainfall, failed area and debris volume at the top left and the legend at the top right; the wide-area map at the bottom left shows the whole tif with the region in red (click it to pick a place for a new tile); the bottom bar holds playback and the chart. The button at the top right of the panel switches between Japanese and English.

**Folding**: click a heading 1–7 to fold or unfold that section. "◀" at the top right of the panel folds the whole panel so the 3D view fills the screen; "☰ Settings" at the top right of the view opens it again. The folding is remembered by the app.

## 3. Regions

| Region | |
|---|---|
| Mariko, Suruga-ku | Foothills of Mariko: 200 warning areas (148 steep-slope, 52 debris-flow) |
| Asahata / Kita, Aoi-ku | Hills and housing north of the city: 192 warning areas |
| Kusanagi / Funakoshi, Shimizu-ku | North foot of Mt. Udo, mostly steep-slope warning areas |
| Okitsu, Shimizu-ku | Valleys and foothills: 134 warning areas |
| Yui, Shimizu-ku | Slopes including 19 landslide warning areas |

**New tile**: open "Make a new tile from an address or place name", search (in Japanese), pick a candidate and a size (1/2/3 km), then "Build and show this tile" — or click the wide-area map. Terrain (GSI 5 m DEM), buildings and warning areas (PLATEAU) and aerial photos are fetched in 10–20 s and kept in the app (★ in the list).

## 4. Rainfall

| Pattern | |
|---|---|
| Typhoon No. 15, Sep 2022 (observed) | 18 h from 12:00 on 23 Sep, 409.5 mm, 107 mm hourly maximum at 01:00–02:00 on the 24th; hourly data, Shizuoka Local Meteorological Office |
| Tanabata flood, July 1974 (observed) | 21 h from 11:00 on 7 July, 508 mm, 444 mm in the 7 h from 21:00; hourly data, Shizuoka Local Meteorological Office |
| Paste observations (hourly mm) | e.g. from the JMA past-weather data, oldest first; optional start date-time for the clock |
| Constant / centre-peaked / linear rainband / custom (10 min) | Hypothetical rain |

"Time computed after the rain" continues the run after the rain (groundwater can still converge). Frames are saved every few minutes while it rains and every few seconds while debris moves; the interval grows automatically so a run fits in about 800 frames.

## 5. Soil and failure

| Item | Default | Meaning |
|---|---|---|
| Soil depth on slopes | 1.5 m | Thicker in hollows (up to 1.6×), thinner on slopes steeper than 35° |
| Cohesion c' | 8 kPa | Soil cohesion plus root reinforcement |
| Friction angle φ' | 35° | |
| Unit weight γ | 18 kN/m³ | |
| Hydraulic conductivity k | 0.1 cm/s | Lateral, including the macropores of forest soils |
| Infiltration capacity | 80 mm/h | |
| Effective porosity | 0.3 | |
| Initial saturation | 0.2 | Antecedent wetness; the soil then drains for 12 h before the storm |
| Progressive failure FS | 1.1 | A cell just upslope of a failure fails too below this FS |
| Judge failures from the rain | on | Off: only the sources you set fail |

Debris flow: Coulomb friction μ (deposits on slopes gentler than about atan μ), turbulence ξ, bulking (debris volume per failed soil volume) and entrainment coefficient E.

**Failure sources**: set a radius and a time (minutes after the start), press "＋ Click on a slope to add" and click slopes in the 3D view (up to 8, drawn as magenta rings); press the button again to stop. Turn off "Judge failures from the rain" to study only those sources.

## 6. Running

Press "▶ Start". While it rains only the soil water is stepped (up to 60 s per step); once a slope fails the run switches to short steps (0.01–0.5 s, CFL) for the debris flow, and back when the debris has stopped. After the run the panel lists the number and area of failures, the failed volume, the area reached and covered by debris, and the buildings buried or hit hard.

## 7. Results

Playback runs frame by frame, so hours of rain go by quickly and a few minutes of debris flow play slowly. Clicking a point shows its slope, soil depth, safety factor before the rain and when saturated, failure time, max debris depth, arrival time, max speed and impact pressure, and the warning areas; for a building, a damage verdict from the burial depth and the impact pressure. The chart shows the rain, the point's safety factor (green, FS = 1 dashed) and debris depth (brown), and the failure time (red line). The point can be saved as CSV with the conditions and the time series. After the run, "Max debris depth" and "Failure / erosion depth" can be saved as GeoTIFF (EPSG:6676).

## 8. Display

Ground: aerial photo / elevation tint / soil saturation / safety factor FS / slope angle. Debris: realistic mud / depth classes. Buildings: white / burial depth / impact pressure. Failed and eroded slopes are lowered by the lost soil and shown as bare soil; walls are muddy below the debris line. Controls: left drag rotate, right drag pan, wheel zoom to the cursor, double-click to set the centre of rotation, L to lock the view.

## 9. Warning areas

"6. Sediment-disaster warning areas" drapes the PLATEAU areas (steep-slope failure, debris flow, landslide): warning areas in yellow, special warning areas in red, with their area and the buildings inside; after a run, the share of the debris extent inside them and of the buried buildings. The areas are drawn from the terrain, not from a simulation.

## 10. Recording

Choose the resolution (up to 4K), fps, length, time range and camera (fixed / keyframes / orbit), then "● Record and save". With "One saved frame per equal time" the debris flow plays in slow motion; without it the video speed is proportional to time. Frames are rendered one by one and encoded to MP4 (H.264).

## 11. Method in brief

1. Rain infiltrates up to the infiltration capacity and raises a water table in the soil, which drains downslope along the bedrock (Darcy) and collects in the hollows.
2. Infinite-slope safety factor FS = [c' + (γD − γw·hw)cos²θ·tanφ'] / (γD·sinθcosθ); the soil column fails when FS < 1.
3. The failed soil (× bulking) flows under gravity along the debris surface with Voellmy friction (Coulomb + turbulent), deposits where the ground flattens, and entrains soil on steep beds.
4. Buildings stop the debris up to their roofs; burial depth and impact pressure (ρv²) give a damage guide.

## 12. Limitations

A first-order model with uniform soil: it shows which hollows are prone to fail and how far debris may travel, not the exact failure sites. The 2022 / 1974 patterns are hourly observations at one station (Shizuoka Local Meteorological Office) falling uniformly on the region; paste observations for another site. The default soil parameters are those tuned for the Hiroshima version and have not been calibrated to Shizuoka's geology or actual failures. The delay of infiltration through the unsaturated zone, overland flow, stream discharge, check dams and boulder fronts are not modelled. 30 kPa is a rough guide for damage to wooden houses. The wide-area terrain (SRTM) is for display only.

## 13. Sources

3D city model (Project PLATEAU) Shizuoka City, MLIT (buildings and terrain FY2022, warning areas FY2023); GSI tiles (aerial photos, elevation); shizuoka.tif (NASA SRTM GL1); © OpenStreetMap contributors; GSI address search; e-Stat 2020 census small-area boundaries.
