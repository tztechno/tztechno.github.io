# Nankai Trough Tsunami Simulator - User Manual
**南海トラフ津波広域伝播シミュレーター 操作マニュアル (English)**

---

## 1. Introduction

This software computes the initial tsunami from seafloor deformation caused by an earthquake and simulates how the tsunami spreads across the seas around Japan. Although the app is named after the Nankai Trough, the simulation domain covers **all of Japan** (125.6°E–152.9°E, 22.0°N–48.0°N), so earthquakes outside the Nankai Trough, such as the 2011 Tohoku-oki earthquake, can also be simulated.

### Two-phase concept
1. **Phase 1 (regional propagation: this system)**
   * Computes tsunami generation and propagation from an earthquake fault model and records **water level, current velocity, flow direction, and arrival time** at offshore observation points.
2. **Phase 2 (link to urban inundation simulation)**
   * The offshore water level and velocity time series (CSV) exported by this system serve as boundary conditions for a high-resolution urban run-up simulation.

> [!IMPORTANT]
> Wave heights in this system are values at **offshore observation points** in water tens to thousands of meters deep. Tsunami heights and run-up at the coast are larger because waves grow in shallow water (shoaling). For coastal damage estimates, use the Phase 2 urban simulation or official hazard assessments.

---

## 2. Requirements and Launch

### 2.1 Web browser version
* **Browsers**: Google Chrome, Microsoft Edge, Apple Safari, Mozilla Firefox (latest)
* **Launch**:
  ```bash
  cd nankai_trough
  npm install
  npm run dev
  ```
  Open `http://localhost:5173/` in your browser.
* **Where files are saved**: CSVs and videos go to the browser's usual download location.

### 2.2 Desktop version (Tauri: macOS / Windows)
* **macOS**: Open `NankaiTroughTsunami_<version>_aarch64.dmg` and drag the app into the Applications folder.
* **Windows**: Run `NankaiTroughTsunami_<version>_x64-setup.exe` (built by the GitHub Actions workflow `.github/workflows/build-windows.yml`).
* **Build from source**:
  ```bash
  cd nankai_trough_desktop
  npm install
  npm run tauri dev    # run in development mode
  npm run tauri build  # release build (dmg / exe)
  ```
* **Where files are saved**: CSVs and videos are written directly to the **Downloads folder**, and the saved location appears at the bottom right of the screen. If a file with the same name exists, a number is added, e.g. `name (1).csv`.

### 2.3 Data preparation (for developers)
The app's data files are in `public/` and can be rebuilt with these scripts (run in `nankai_trough/`).

| Data | Command | Contents |
|---|---|---|
| `bathymetry.bin` / `bathymetry_meta.json` | `node scripts/process_bathymetry.mjs ../japan.tif 6` | Bathymetry (japan.tif, 15-arcsec) averaged by a factor of 6 into a 1.5-arcmin grid (about 2.8 km, 1093×1040 cells). A factor of 8 gives a lighter grid of about 3.7 km |
| `slab.bin` / `slab_meta.json` | `python3 scripts/process_slab.py <depth grid.grd> ...` | Plate interface depth, strike, and dip (0.1° grid). Pass the depth grids of the kur, izu, and ryu regions from USGS Slab1.0 / Slab2. Requires numpy and scipy |

Copy any rebuilt data to `nankai_trough_desktop/public/` as well.

---

## 3. Screen Layout

```
+--------------------------------------------------------------------------------+
| Header: app name | elapsed time | max surge | status | JP/EN switch            |
+---------------------------+----------------------------------------------------+
| Left sidebar              | Map (bathymetry, wave height, velocity, faults,    |
|  1. Fault scenario        |      observation points)                           |
|     └ Custom fault params |  Top left: domain name, lon/lat/depth/level at cursor |
|  2. Simulation            |  Top right: Source Area / All Japan                |
|     └ Record MP4          |  Bottom left: time since the earthquake            |
|  3. Offshore forecast     |  Bottom right: wave height legend                  |
|     └ CSV export          +----------------------------------------------------+
|  4. Layer options         | Waveform chart (water level time series)           |
|                           |  Selected / Single focus / All points              |
+---------------------------+----------------------------------------------------+
```

* Click a section heading in the left sidebar to collapse or expand it.
* The **JP / EN** buttons switch between Japanese and English (the choice is remembered).

---

## 4. Earthquake Scenarios

Choose from **Earthquake Model Preset** in "1. Earthquake Fault Scenario". The map zooms to the source area and a nearby representative observation point gets the focus.

| Preset | Type | Fault model | Source mark on the map |
|---|---|---|---|
| Full Nankai Trough Rupture (M9.1) | Simplified model | 4 segments: Tokai, Tonankai, Nankai, Hyuga-nada | Reference: estimated epicenter of the 1707 Hoei earthquake |
| Tonankai Earthquake Alone (M8.2) | 1944 Showa-Tonankai type | 1 fault | Hypocenter (40 km deep, JMA) |
| Nankai Earthquake Alone (M8.4) | 1946 Showa-Nankai type | 1 fault (its east end contains the hypocenter, matching the historical westward rupture) | Hypocenter (24 km deep, JMA) |
| Tokai Earthquake Alone (M8.0) | Scenario earthquake | 1 fault | Reference: estimated epicenter of the 1854 Ansei-Tokai earthquake |
| 2011 Tohoku-oki Earthquake (M9.0) | Reproduction of a historical event | 4 faults (off-Miyagi trench side 24 m, off-Miyagi deep 22 m, off-Iwate 23 m, off-Fukushima/Ibaraki 10 m; tuned to GPS wave gauge peaks) | Hypocenter (24 km deep, JMA) |
| Cabinet Office Nankai Trough Megaquake Cases 1–5 (Mw9.1) | Government scenario (approximate reproduction) | Slip distribution made of 165 subfaults | Rupture start point (about 20 km deep) |

### 4.1 Cabinet Office Nankai Trough Megaquake (Cases 1–5)
An approximate reproduction of the tsunami fault model in the second report (2012) of the Cabinet Office's study group on the Nankai Trough megaquake, built from the setting rules described in the report.

* **Source area**: Suruga Bay to Hyuga-nada, from the trough axis down to a plate interface depth of about 37 km (about 140,000 km², Mw9.1, mean slip about 10–11 m)
* **Slip**: background about 9 m, **large-slip area about 20 m (2× the mean)**, **very-large-slip area about 40 m (4× the mean, along the trough)**. The large-slip area covers about 20% of the total area and extends from about 20 km depth to the trough axis.
* **Difference between cases**: every case ruptures the whole area; **only the position of the large-slip area differs**.
  | Case | Position of the large/very-large-slip area |
  |---|---|
  | 1 | Suruga Bay to off Kii Peninsula |
  | 2 | Off Kii Peninsula |
  | 3 | Off Kii Peninsula to off Shikoku |
  | 4 | Off Shikoku |
  | 5 | Off Shikoku to off Kyushu |
* **Rupture propagation**: rupture spreads at **2.5 km/s** from the rupture start point (near the center of the large-slip area, about 20 km deep), and deformation at each location develops over **1 minute** (not all at once).
* **Map display**: subfaults are shaded red by slip (darker = more slip).
* **Differences from the official model**: the official subfault data (about 5 km mesh) is only available on request, so the plate shape is approximated by bands of uniform dip, and slip proportional to plate convergence rate and smoothing of large-slip area edges are omitted. Cases 6–11 (splay fault, two large-slip areas) are not implemented.
* **Maximum-class tsunami height**: the government's maximum-class tsunami height takes, at each location, the highest value among all cases. Run the cases one by one and compare the maximum at each point.

> [!NOTE]
> The earlier Central Disaster Management Council model (2003) was built to envelope the tsunami records of five past earthquakes (Hoei, Ansei-Tokai, Ansei-Nankai, Showa-Tonankai, Showa-Nankai). The Cabinet Office model (2012) is not a composite of past events but a "maximum-class" scenario based on scientific knowledge.

### 4.2 Map marks
| Mark | Meaning |
|---|---|
| Red dashed rectangle + ★ | Surface projection of a fault segment and its center point (not the epicenter) |
| Red shading (no outline) | Subfaults of the Cabinet Office model (darker = larger slip) |
| Red circle with a white × | Hypocenter (JMA) or the rupture start point of the Cabinet Office model |
| Hollow red circle with × | Reference: estimated epicenter of a historical earthquake of the same type (for scenario earthquakes with no official hypocenter) |

Hypocenter and rupture start marks follow the "Fault Segments" layer. Historical hypocenters are display-only and not used in the computation (the Cabinet Office rupture start point is used to compute rupture propagation).

---

## 5. Setting the Source Fault

### 5.1 Magnitude and slip
* **Magnitude (Mw)**: 7.5–9.3. Moving it updates "Mean Slip" with the corresponding slip.
* **Mean Slip**: 2.0–50.0 m.
* **Recompute Source**: applies the settings to the tsunami source and returns to time 0. For presets made of several faults, the whole distribution is scaled **while keeping the slip pattern (e.g. large-slip areas)** so that the mean slip equals the specified value.

### 5.2 Pick Epicenter (automatic setup along the plate interface)
1. Choose a magnitude (the fault size is derived from it).
2. Press **🎯 Pick Epicenter** and click the spot on the map to use as the source.
3. The plate interface **depth, strike, and dip** at that spot are read from USGS Slab (a plate interface geometry model), and a thrust fault is placed along the interface automatically, with uplift on the trench side and subsidence on the land side.
   * **Fault size**: from the scaling law for interplate earthquakes (Strasser et al., 2010), e.g. Mw8.0 → about 160 km long × 84 km wide, Mw9.0 → about 614 km × 189 km.
   * **Slip**: computed so the seismic moment (rigidity 40 GPa) matches the magnitude.
   * If the top edge of the fault would reach the surface, the fault is shifted landward so the top edge is 1 km deep.
4. In these cases the **values in the Custom Fault Parameters panel (manual)** are used instead, and the reason is shown:
   * The location is outside the plate interface data (Sea of Japan, inland areas, etc.)
   * The plate interface is deeper than 60 km (too deep for an interplate earthquake)
   * "Auto-set from plate interface geometry (USGS Slab)" is unchecked

### 5.3 Custom fault parameters (manual adjustment)
After Pick Epicenter, the "📐 Custom Fault Parameters" panel opens and shows the values of the placed fault.

| Field | Range | Description |
|---|---|---|
| Strike (°) | 0–360 | Fault orientation (clockwise from north). The fault dips toward the right-hand side of the strike |
| Dip (°) | 1–90 | Inclination of the fault plane |
| Rake (°) | -180–180 | 90 is a pure thrust |
| Length (km) / Width (km) | — | Size of the fault plane (width is measured along the dip) |
| Top depth (km) | 0.5–100 | Depth of the top edge of the fault plane |

Change the values and press **Recompute with these values** to rebuild the source with that fault (slip is recomputed from the current magnitude and fault area). Custom sources rupture all at once.

---

## 6. Running the Simulation

Use "2. Propagation Simulation".

| Control | Description |
|---|---|
| **▶ Start Simulation / Pause** | Advances the computation with animation |
| **⚡ Fast-Forward** | Computes up to the max duration without drawing. A 120-minute run takes about 1 minute (depends on the PC) |
| **🎬 Export Video** | Exports the computed result as an MP4 video of the chosen length (10–60 s) (section 9.1) |
| **↺ Reset** | Returns to the state at time 0 |
| **Max Duration** | 60 min / 120 min (recommended) / 180 min |
| **Playback Speed** | 1x / 5x / 20x / 60x. Roughly the simulated seconds advanced per frame. At 60x and similar speeds, computation per frame is capped to keep the UI responsive, so actual progress is slower depending on the PC |
| **Numerical Filter** | Smoothing that suppresses grid-scale numerical oscillations: **4th-order Shapiro (recommended)** / Laplacian, weak / Laplacian, legacy / None (for comparison). Changing it restarts the simulation. The legacy setting underestimated maximum wave heights by up to about 40%, so use the recommended setting unless you are comparing with earlier results |

* The time step is about 3 seconds.
* **Elapsed Time** at the top and **Since EQ H:MM:SS** at the bottom left of the map are measured from the earthquake.
* In the Cabinet Office model, deformation is added progressively during the few minutes the rupture spreads.

---

## 7. Map Controls and Display

### 7.1 Controls
* **Mouse wheel**: zoom (around the cursor)
* **Drag**: pan
* **🔍 Source Area**: fit the map to the selected scenario's source area
* **⤢ All Japan**: show the whole domain
* **Hover**: the top left shows longitude/latitude, depth (elevation on land), and the current water level at that spot
* The map keeps its aspect ratio (it does not stretch with the window shape).

### 7.2 Display
| Display | Meaning |
|---|---|
| Wave height (crest) | Water level rise: cyan (small) → green → yellow → orange → red → white (10 m+) |
| Wave height (trough) | Water level drop: purple to indigo |
| White arrows | Velocity vectors (where speed ≥ 0.15 m/s) |
| Colored dots | Observation points. The focused point has a blue dashed ring. Max wave height is added to the label once it exceeds 0.1 m |
| White line from a point | Flow direction at the time of the maximum wave (points with max wave height ≥ 0.3 m) |
| Pulsing ring around a point | The tsunami (max wave height ≥ 0.2 m) has arrived |

### 7.3 Layer options
In "4. Layer Options", toggle bathymetry, wave height, velocity vectors, and fault segments individually.

---

## 8. Observation Points and Waveform Chart

### 8.1 Default observation points (13 points)
| Region | Point | Lon | Lat |
|---|---|---|---|
| Nankai Trough | Offshore Muroto (Kochi) | 134.20 | 33.20 |
| | Offshore Shionomisaki (Wakayama) | 135.75 | 33.38 |
| | Offshore Hamamatsu (Shizuoka) | 137.70 | 34.50 |
| | Suruga Bay Mouth (Shizuoka) | 138.55 | 34.70 |
| | Offshore Owase (Mie) | 136.35 | 33.95 |
| | Offshore Ashizuri (Kochi) | 133.00 | 32.65 |
| | Offshore Hyuga-nada (Miyazaki) | 131.90 | 32.00 |
| Tohoku Pacific coast<br>(near GPS wave gauges) | Offshore Northern Iwate (Kuji) | 142.10 | 40.12 |
| | Offshore Miyako (Iwate) | 142.19 | 39.63 |
| | Offshore Kamaishi (Iwate) | 142.07 | 39.26 |
| | Offshore Northern Miyagi (Kesennuma) | 141.89 | 38.86 |
| | Offshore Central Miyagi (Ishinomaki/Onagawa) | 141.68 | 38.23 |
| | Offshore Fukushima (Onahama) | 141.18 | 36.97 |

### 8.2 Working with observation points
* **+ Add Custom Point**: press it, then click the sea on the map to add a point. Added points can be removed with ✕.
* **Checkboxes**: choose which points are overlaid on the chart and included in batch CSV export (Select All / Deselect All available).
* **Focused Point**: the point whose statistics appear in the chart heading. Clicking a card in the list or a point on the map also changes it.
* **↺ Reset Points**: restores the 13 default points.
* Each point in the list shows its max wave height and first arrival time (minutes).

### 8.3 Waveform chart
* The horizontal axis is **time since the earthquake**; the vertical axis is water level η (m).
* View modes: **☑ Selected** (overlay checked points) / **🎯 Single Focus** / **🌐 All Points**
* Heading statistics:
  * **1st Arrival**: the first time the water level change reaches 0.15 m or more
  * **Max Surge**: the highest water level at the point
  * **Wave Influx Dir**: flow direction at the time of the maximum (16-point compass and degrees)

> [!NOTE]
> At points above or near the source area, the coseismic deformation itself changes the water level by 0.15 m or more right after the earthquake, so the first arrival can show "0 min 0 s" (for scenarios that rupture all at once). In scenarios with rupture propagation, such as the Cabinet Office model, the arrival time is when the rupture reaches the area.

---

## 9. Saving the Animation as Video (MP4)

There are two ways to save a video.

| Method | When to use it |
|---|---|
| **9.1 Export the computed result (🎬 Export Video)** | You want the result as a video of a fixed length (recommended) |
| **9.2 Record while playing (🎥 Record MP4)** | You want to record the playback exactly as shown on screen |

### 9.1 Export the computed result (🎬 Export Video)
1. Choose the scenario and max duration (it's fine if you have already computed it, e.g. with Fast-Forward).
2. Choose the **Video length** (10 s / 20 s / 40 s / 60 s) and press **🎬 Export Video**.
3. The app recomputes from the earthquake to the max duration while building the video, and saves it when done. Progress is shown as a percentage in the status at the top.

* The computation gives the same result every time, so the exported video matches the computed run (Fast-Forward does not keep intermediate frames, so the run is recomputed to make the video).
* Frames are taken at equal steps of simulated time, so the video has exactly the chosen length. Example: a 120-minute run exported as 20 seconds gives 600 frames (12 simulated seconds per frame).
* Exporting a 120-minute run takes about 1–2 minutes (depends on the PC).
* During export, controls that change the computation (play, scenario, etc.) are disabled. Press **⏹ Cancel Export** to stop and save the video up to that point.

### 9.2 Record while playing (🎥 Record MP4)
1. Choose the playback speed and max duration.
2. Press **🎥 Record MP4**; the simulation starts while recording (from the beginning if already computed).
3. Press **⏹ Stop & Save**, or let it reach the max duration, and the video file is saved.

* The video includes what the map shows (with your zoom and view), the **scenario name**, the **time since the earthquake**, and the wave height legend.
* Format: MP4 (H.264), 30 fps, up to 1920×1080. If MP4 is not supported, it is saved as WebM and a message says so.
* Each drawn frame becomes one video frame, so **the video length depends on the playback speed** (during recording the simulation runs exactly at the playback speed).

  | Playback speed | Approx. video length for a 120-minute run |
  |---|---|
  | 1x | about 80 s |
  | 5x | about 40 s |
  | 20x | about 11 s |
  | 60x | about 4 s |
* File name: `tsunami_<scenario ID>_<date time>.mp4` (same for 9.1 and 9.2)

---

## 10. CSV Export (Link to Urban Simulation)

The buttons at the bottom of "3. Offshore Wave Forecast" export one CSV file **per checked observation point** (if none are checked, you are asked whether to export all points). Run the simulation or Fast-Forward first.

### 10.1 What is exported (📋 Full Timeline Data)
* All data from the earthquake (t=0) up to the time the run has reached (about every 3 seconds; about 2,400 rows for 120 minutes).
* `Time_sec` is the time since the earthquake, so an urban simulation can use it directly as time since the earthquake.
* If you export before the run reaches its set length (e.g. 120 minutes), you are asked to confirm that the data stops part-way. The main coastal waves often arrive 20-30 minutes after the earthquake, so finish the run before exporting.
* File name: `tsunami_boundary_full_<point ID>.csv`

### 10.2 File format
```csv
# Tsunami Wave Boundary Condition for Phase 2 Simulation (Full Timeline)
# Location: 宮古沖 (岩手) (Lon: 142.19, Lat: 39.63)
# Max Wave Height: 5.56 m, First Arrival: 186 s
Time_sec,Elevation_m,U_velocity_m_s,V_velocity_m_s,Speed_m_s,Direction_deg
0.0,-0.910,0.000,0.000,0.000,0.0
3.0,-0.910,0.000,0.000,0.001,0.0
...
```
* `Elevation_m` in the first row is the sea-surface change from the coseismic seafloor subsidence or uplift.
* `First Arrival` is the first time the level differs from this initial level by 0.15 m or more.

### 10.3 Columns
| Column | Unit | Description |
|---|---|---|
| `Time_sec` | s | Time since the earthquake |
| `Elevation_m` | m | Water level change from still water (rise positive, drop negative) |
| `U_velocity_m_s` | m/s | East-west velocity (eastward positive) |
| `V_velocity_m_s` | m/s | North-south velocity (northward positive) |
| `Speed_m_s` | m/s | Speed √(u²+v²) |
| `Direction_deg` | deg | Flow direction (N 0°, E 90°, S 180°, W 270°) |

The two `Time_since_EQ_*` columns are appended after the original six, so existing programs that read columns by position are not affected.

---

## 11. Physical Model Overview

> [!NOTE]
> See [PHYSICS_MODEL.md](PHYSICS_MODEL.md) for derivations and discretization details.

1. **Initial source (Okada 1985)**: the vertical seafloor displacement from slip on rectangular faults is computed with the analytical half-space solution and used as the initial sea surface displacement. It matches the check values in Okada (1985). `depthKm` is the depth of the **top edge** of the fault plane. The outer edge of the computation range is tapered smoothly with a cosine.
2. **Rupture propagation (Cabinet Office model)**: displacement is added over 1 minute starting at (distance from the rupture start point) ÷ 2.5 km/s.
3. **Shallow water equations**: the 2D nonlinear long-wave equations are solved on an Arakawa C-grid. Because the domain spans 26° of latitude, **the east-west grid spacing varies with latitude and the continuity equation includes a spherical correction**.
4. **Grid and time step**: 1.5-arcmin grid (about 2.8 km), time step about 3 s (adjusted automatically to satisfy the CFL condition).
5. **Bottom friction**: Manning's roughness 0.025 (semi-implicit).
6. **Numerical noise suppression**: grid-scale oscillations over steep seafloor slopes are damped with a 4th-order Shapiro filter (the main tsunami wavelengths are barely affected).
7. **Open boundaries**: an absorbing layer about 100 km wide along the domain edges plus a radiation condition keep waves that leave the domain from reflecting back.
8. **Observation point values**: bilinear interpolation from the four surrounding sea cells.

---

## 12. Limitations
* **Offshore values**: wave heights are offshore values (water depth of tens of meters or more), not coastal tsunami heights or run-up.
* **Coarse grid**: with about 2.8 km cells, the inside of bays and ports and narrow straits are not resolved.
* **Simplified fault models**: preset and Pick Epicenter faults are rectangles with uniform slip (or combinations of them). The Cabinet Office model is an approximate reproduction, not the official data.
* **Pick Epicenter**: the plate interface is approximated by a single plane, so long faults (about 600 km for Mw9) differ more from the real curved interface. The plate interface data is currently USGS Slab1.0.
* **Not modeled**: inundation and run-up on land, tides, Coriolis force, wave dispersion.
* **Small far-field displacement**: for Mw9-class sources, a few centimeters of deformation can appear in seas hundreds of kilometers away (a physically correct result).
* **Domain edges**: the outer ~100 km is an absorbing layer, so water levels there are lower than in reality. Place observation points away from the edges.
* **Run time**: the Japan-wide domain (about 1.1 million cells) takes about 1 minute for a 120-minute run.

---

## 13. FAQ

* **Q. What is the difference between "Fast-Forward" and playing?**
  * A. Playing advances while drawing the map. Fast-Forward skips drawing and computes up to the max duration at once, which is convenient when you want to export CSVs.

* **Q. How do I get tsunami data for an arbitrary location?**
  * A. Press "+ Add Custom Point" and click the sea on the map. You can add points mid-run; recording starts from that moment.

* **Q. Which CSV should I use for the urban simulation?**
  * A. Use the full timeline data (`tsunami_boundary_full_<point ID>.csv`). `Time_sec` is the time since the earthquake, so it can be used directly as the boundary condition. Finish the run before exporting.

* **Q. Is there a scenario that combines Cabinet Office Cases 1–5?**
  * A. Each case is already a Mw9.1 megaquake that ruptures the whole area from Suruga Bay to Hyuga-nada; only the position of the large-slip area differs. Placing all large-slip areas at once would exceed the government scenario, so it is not provided. The government's maximum-class tsunami height takes the maximum over all cases at each location.

* **Q. What happens if I use Pick Epicenter in the Sea of Japan?**
  * A. The spot is outside the plate interface data or the interface is too deep, so the fault uses the values in the Custom Fault Parameters panel (manual). For earthquakes such as those along the eastern margin of the Sea of Japan, set the strike, dip, and other values manually.

* **Q. Where are files saved in the desktop version?**
  * A. In the Downloads folder. The saved location appears at the bottom right of the screen.

---

## 14. Data and References
* **Bathymetry**: GEBCO 15-arcsec grid (`japan.tif`)
* **Plate interface geometry**: Hayes, G. P., Wald, D. J., & Johnson, R. L. (2012). Slab1.0: A three-dimensional model of global subduction zone geometries. *J. Geophys. Res.*, 117, B01302. / Hayes, G. P. et al. (2018). Slab2, a comprehensive subduction zone geometry model. *Science*, 362, 58-61.
* **Cabinet Office model**: Cabinet Office, Study Group on the Nankai Trough Megaquake Model (2012), Second Report, Tsunami Fault Model
* **Hypocenters**: Japan Meteorological Agency (1944 Showa-Tonankai, 1946 Showa-Nankai, 2011 Tohoku-oki); Chronological Scientific Tables (estimated epicenters of the 1707 Hoei and 1854 Ansei-Tokai earthquakes)
* **Fault deformation**: Okada, Y. (1985). Surface deformation due to shear and tensile faults in a half-space. *Bull. Seismol. Soc. Am.*, 75, 1135-1154.
* **Fault dimensions**: Strasser, F. O., Arango, M. C., & Bommer, J. J. (2010). Scaling of the source dimensions of interface and intraslab subduction-zone earthquakes with moment magnitude. *Seismol. Res. Lett.*, 81, 941-950.
