# Nankai Trough Tsunami Simulator - User Manual
**南海トラフ津波広域伝播シミュレーター 操作マニュアル (English Version)**

---

## 1. Introduction & Overview

The **Nankai Trough Tsunami Simulator** is an interactive, physically-based numerical simulation software designed to model the generation and broad-scale ocean propagation of mega-earthquake tsunamis along the Nankai Subduction Zone.

### Project Goals & Two-Phase Simulation Architecture
1. **Phase 1: Broad-Scale Ocean Tsunami Propagation (This Application)**:
   * Computes seabed deformation from arbitrary fault rupture scenarios and simulates tsunami propagation across the Pacific Ocean toward the Japanese coastline.
   * Accurately tracks **wave elevation, flow velocity vectors ($u, v$), direction, and arrival times** at key coastal observation points (e.g., Muroto, Shionomisaki, Suruga Bay, Hamamatsu, Owase, Ashizuri, Hyuganada, Kii Channel).
2. **Phase 2: City Inundation & Run-up Simulation Integration**:
   * Exports high-resolution time-series boundary condition data (CSV format) directly into localized Phase-2 city run-up simulators (such as urban building-inundation models established in Miyako and other coastal regions).

---

## 2. Requirements & Installation

### Web Browser Edition
* **Supported Browsers**: Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge (latest versions recommended).
* **Running Locally**:
  ```bash
  cd nankai_trough
  npm install
  npm run dev
  ```
  Open `http://localhost:5173/` in your browser.

### Desktop App (Tauri)
* **macOS**:
  * Open `NankaiTroughTsunami.dmg` located in the project root, and drag & drop the app to your `Applications` folder.
* **Windows**:
  * An automated GitHub Actions workflow (`.github/workflows/build-windows.yml`) automatically builds Windows installer (`.exe`) bundles.
* **Building from Source**:
  ```bash
  cd nankai_trough_desktop
  npm install
  npm run tauri dev    # Launch in development mode
  npm run tauri build  # Build production bundles (DMG for macOS / EXE for Windows)
  ```

---

## 3. UI Overview & Operation Guide

The user interface is organized into a clean **3-column layout**:

```
+------------------------+------------------------------------+--------------------------+
|   Left Panel (Config)  |    Center Map (Bathymetry & Wave)  |  Right Panel (Wave Chart)|
| - Language (JA / EN)   | - GEBCO Bathymetry Color Relief    | - Real-time Wave Height  |
| - Scenario Selector    | - Dynamic Tsunami Wavefront        |   Plot (Chart.js)        |
| - Mw / Slip Sliders    |   (Red: Crest / Blue: Trough)      | - Multi-point Overlay    |
| - Epicenter / Points   | - Rupture Fault Rectangles         | - Arrival Time & Flow Dir|
| - Solver Controls      | - Observation Pins & Wave Badges   | - Phase 2 CSV Export     |
| - Point Batch Selection| - Real-time Coords & Depth HUD     |                          |
+------------------------+------------------------------------+--------------------------+
```

### 3.1 Left Control Panel

1. **Language Toggle**:
   * Switch between `日本語` and `English` instantaneously with full UI and chart axis localization.
2. **Earthquake Scenario Selection**:
   * **Full Nankai Trough Megaquake (M9.1)**: Simultaneous rupture of 4 segments spanning from Suruga Bay to Hyuganada (Cabinet Office maximum model).
   * **Tonankai Earthquake Alone (M8.2)**: 1944 Showa-Tonankai model focusing on Kumano-nada and Shionomisaki.
   * **Nankai Earthquake Alone (M8.4)**: 1946 Showa-Nankai model centered off Kochi and Shikoku.
   * **Tokai Earthquake Alone (M8.0)**: Suruga Trough to Enshu-nada rupture scenario.
3. **Fault Parameter Tuning**:
   * **Magnitude (Mw)**: Slider adjustment between 7.5 and 9.3; dislocation slip scales automatically following empirical seismological laws.
   * **Slip (m)**: Direct adjustment of fault displacement (2.0 m to 30.0 m).
   * **"Recompute & Reset"**: Recomputes Okada initial sea surface dislocation immediately.
4. **Map Click Modes**:
   * **Pick Epicenter**: Click anywhere on the ocean map to reposition the primary rupture fault.
   * **Add Observation Point**: Click anywhere on coastal or bay areas (e.g., Kii Channel, Ise Bay) to dynamically instantiate a new monitoring gauge.
5. **Simulation Controls**:
   * **Play / Pause**: Start or pause numerical time integration.
   * **Fast-Forward**: Skips screen rendering and solves the entire duration (up to 180 min) in seconds via headless compute loop (ideal for CSV preparation).
   * **Speed Multiplier**: 1x, 2x, 5x, 10x, 20x real-time speed.
   * **Max Duration**: 30 min, 60 min, 120 min, or 180 min (Default: 120 min).
   * **Reset**: Rewinds solver clock to $t=0$ with pristine initial displacement.
6. **Observation Point Selection**:
   * Select all / Deselect all / Reset to defaults checkboxes for streamlined batch CSV exports.

### 3.2 Center Map Area

* **GEBCO Bathymetric Relief**:
  * Land terrain in natural green/neutral tones, continental shelf (<200 m) in light cyan, and oceanic trenches (>4,000 m) in deep navy blue.
* **Real-time Tsunami Wavefront**:
  * **Warm Red**: Positive sea surface elevation (surge / wave crest).
  * **Cool Blue**: Negative sea surface drawdown (depression / receding wave).
* **Fault Geometry Overlays**:
  * Visualizes strike, dip, rake, and geographic extent of the Okada dislocation segments.
* **Real-time Cursor HUD**:
  * Displays precise geographic coordinates (lon/lat), local bathymetric depth (or elevation), and instantaneous sea surface anomaly ($\eta$).

### 3.3 Right Panel (Wave Chart & Analytics)

* **Multi-Point Wave Elevation Chart (Chart.js)**:
  * Dynamic line charts plotting surface elevation over time.
  * **Modes**:
    * **Selected Overlay**: Displays all checked observation points superimposed on a single time axis.
    * **Focus Point**: Deep-dive into the currently selected station.
    * **All Points**: Visualizes all registered stations simultaneously.
* **Station Analytics Summary**:
  * **Max Surge Height ($m$)**: Peak tsunami crest amplitude.
  * **Peak Arrival Time**: Elapsed time when the maximum wave was recorded.
  * **First Arrival Time**: Time when elevation anomaly first exceeded $\pm 0.15\text{ m}$.
  * **Dominant Velocity & Direction**: 16-compass heading and azimuth angle at peak surge.

---

## 4. Phase-2 City Inundation CSV Export

The simulator provides two standardized export modes tailored for boundary feeding into localized Phase-2 hydraulic run-up solvers:

### 4.1 Export Modes

1. **Mode A: Full Timeline Simulation Data (`exportFullCSV`)**
   * **Purpose**: Macro-analysis and full-duration basin verification.
   * **Characteristics**: Continuous time series starting strictly from earthquake rupture ($t = 0.0\text{ s}$) up to simulation end (e.g., 1801 rows for 120 min at 4s sampling intervals).
   * **Filename**: `tsunami_boundary_full_<PointID>.csv`

2. **Mode B: City-Inundation Trimmed Waveform (`exportCityTrimmedCSV`)**
   * **Purpose**: Direct offshore boundary input for Phase 2 urban CFD solvers.
   * **Characteristics**: Normalizes time such that **2 minutes (120 s) prior to first wave arrival becomes $t = 0.0\text{ s}$**, preserving initial drawdown while discarding unneeded quiescent time.
   * **Filename**: `tsunami_boundary_city_<PointID>.csv`

### 4.2 CSV File Specification

```csv
# Tsunami Boundary Wave Condition for City Simulation (Phase 2)
# Location: Muroto Cape (Kochi) (Lon: 134.2, Lat: 33.2)
# Mode: Trimmed Effective Wave (Shifted to t=0 at 2-min before arrival)
# Original Absolute First Arrival: 642.0 s
# Original Absolute Max Surge: 6.82 m (at 1024.0 s)
# Time Offset: -522.0 s (Absolute_Time_sec = Time_sec + 522.0)
Time_sec,Elevation_m,U_velocity_m_s,V_velocity_m_s,Speed_m_s,Direction_deg
0.0,0.012,0.005,-0.002,0.005,111.8
4.0,0.035,0.015,-0.008,0.017,118.1
...
```

| Column Name | Unit | Physical Description |
|---|---|---|
| `Time_sec` | seconds (s) | Elapsed time ($t=0$ at earthquake in Mode A; $t=0$ at 2-min before arrival in Mode B) |
| `Elevation_m` | meters (m) | Water surface anomaly from mean sea level (positive = crest, negative = trough) |
| `U_velocity_m_s` | m/s | East-West horizontal velocity ($+u$: Eastward, $-u$: Westward) |
| `V_velocity_m_s` | m/s | North-South horizontal velocity ($+v$: Northward, $-v$: Southward) |
| `Speed_m_s` | m/s | Flow speed magnitude $\sqrt{u^2 + v^2}$ |
| `Direction_deg` | degrees | Nautical flow direction ($0^\circ$: North, $90^\circ$: East, $180^\circ$: South, $270^\circ$: West) |

---

## 5. Physical Modeling & Numerical Stabilization

1. **Seabed Deformation (Okada 1985 Elastic Half-Space Model)**:
   * Analytical vertical displacement computed from strike, dip, rake, depth, fault dimensions, and dislocation slip.
2. **2D Nonlinear Shallow Water Equations (SWE)**:
   * Continuity: $\frac{\partial \eta}{\partial t} + \frac{\partial M}{\partial x} + \frac{\partial N}{\partial y} = 0$
   * Momentum: Staggered Leapfrog scheme integrated with semi-implicit Manning bottom friction.
3. **Arakawa C-Grid Discretization**:
   * Evaluates elevation $\eta$ at cell centers and horizontal volume fluxes $M, N$ at cell edges, ensuring strict local mass conservation.
4. **Shapiro Filter (Laplacian Viscous Smoothing)**:
   * Selectively dampens $2\Delta x$ high-frequency parasite grid oscillations (e.g., 1-minute numerical slope noise off Shionomisaki) while preserving 99.9% of the physical long-wave tsunami energy (wavelengths $>50\text{ km}$).
5. **Spatial Bilinear Interpolation**:
   * Evaluates elevation and flow velocity at observation coordinates via weighted 4-cell marine bilinear interpolation, eliminating integer grid step jumps.

---

## 6. Frequently Asked Questions (FAQ)

* **Q: What is the difference between "Fast-Forward" and normal "Play"?**
  * **A**: Normal "Play" renders every step on screen at the selected playback speed. "Fast-Forward" skips graphic rendering and executes 120 minutes of physics calculations (3,600 steps) headlessly in a few seconds, preparing data for immediate CSV export.
* **Q: How do I measure tsunamis at custom coastal points (e.g., Kii Channel, Ise Bay)?**
  * **A**: Click "+ Add Observation Point" in the left panel and click on any marine area on the map. A new station will be created and sampled starting strictly at $t=0$.
* **Q: Which CSV format should I use for Phase-2 urban inundation simulations?**
  * **A**: For city inundation models, **Mode B (Trimmed City CSV)** is strongly recommended to reduce simulation compute overhead while capturing full wave run-up dynamics. Use **Mode A (Full Timeline CSV)** if you need initial drawdown behavior starting from the earthquake rupture.
