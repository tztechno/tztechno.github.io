# Shizuoka Breach (Abe River Levee Breach Simulator) — User Manual

A native macOS desktop application that computes, replays, and records in 3D where floodwaters spread when a levee along the Abe River fails in Shizuoka City, and cross-checks the results against the official flood hazard zones of the national [Disaportal Multi-Hazard Map](https://disaportal.gsi.go.jp/maps/?ll=34.967,138.385&z=13&base=pale&vs=c1j0l0u0t0h0z0) (Planned scale L1 / Maximum assumed scale L2).

*日本語: [MANUAL.ja.html](MANUAL.ja.html)*

> **Important Notice**: Results produced by this software are simplified physical calculations under assumed conditions and are not official flood hazard maps under the Flood Control Act. Always consult official hazard maps from Shizuoka City and MLIT for evacuation decisions.

## 1. Installation & Launch

### System Requirements

- **OS**: macOS 11 Big Sur or later (Apple Silicon M1 / M2 / M3 / M4 / M5)
- **Installer**: `ShizuokaBreach_1.0.1_aarch64.dmg` (~143 MB)
- **Network**: Works offline (all terrain, aerial photos, 138,421 buildings, and hazard maps are bundled; internet is only used when querying the online GSI address search)

### Starting the App

1. Open `ShizuokaBreach_1.0.1_aarch64.dmg` and drag `Shizuoka Breach.app` into your `Applications` folder.
2. Launch the app. The 3D title screen will appear while the region grid (9.0 × 9.4 km at 4 m resolution, 5.29 million cells, 138,421 buildings) and basin terrain load.
3. Click **START** (or press `Enter`) to enter the simulator. You can switch the entire interface between Japanese and English at any time using the language button at the top right of the left panel.

## 2. Basic Workflow

1. In **"2. Breach and river flow"**, select a **breach site** and a **river flow** scenario.
2. In **"3. Simulation"**, click **▶ Start** (each 8-hour case takes a few minutes; ~4 min on Apple M5).
3. Use the bottom timeline slider or **▶** button to replay the flood progression.
4. In **"5. Hazard-map comparison"**, compare the simulation with the official L1 / L2 hazard zones.
5. Optionally export an MP4 video in **"6. Recording"**.

## 3. Breach Conditions & River Flows

### Breach Sites (4 sites + overtopping only)

| Case | Location | Distance from Inlet | Levee Crest | Land Behind Levee | Levee Height | River Stage at 4,900 m³/s |
|---|---|---|---|---|---|---|
| **A: Left bank, Anzai** | Anzai, Aoi Ward (upper urban core) | 2.7 km | 33.1 m | 27.7 m | 5.4 m | 29.3 m |
| **B: Right bank, Mukoshikiji** | Mukoshikiji, Suruga Ward (below Warashina confluence) | 4.3 km | 26.0 m | 20.8 m | 5.2 m | 22.1 m |
| **C: Left bank, Minami-Abe** | Minami-Abe, Suruga Ward (near rail crossings) | 5.7 km | 19.4 m | 15.2 m | 4.2 m | 16.3 m |
| **D: Left bank, Nakajima** | Nakajima, Suruga Ward (near river mouth) | 8.4 km | 9.3 m | 5.4 m | 3.9 m | 7.0 m |
| **No breach (overtopping only)** | Levees stay intact; water only spills where it overtops | — | — | — | — | — |

### Breach & Solver Parameters

| Parameter | Description | Default |
|---|---|---|
| Breach width (m) | Final length of the levee opening (20–300 m) | 80 m |
| Time to reach full width (min) | Time for the breach opening to spread from its centre to full width | 30 min |
| Breach trigger margin (m) | The levee begins to fail when river stage reaches this distance below the crest | 1 m |
| Roughness n (Manning) | Manning's bed roughness coefficient | 0.035 |
| Save interval (min) | Interval between stored playback frames | 10 min |

*Note: If the river never reaches the trigger level, the breach is triggered at the peak of the hydrograph so that a selected breach always occurs.*

### River Flow Scenarios (at Tegoshi Reference Point)

| Scenario | Description |
|---|---|
| **Largest on record: 4,900 m³/s (Oct 1979)** | Observed peak of the October 1979 flood (target of the 2008 River Improvement Plan) |
| **Former construction plan: 5,500 m³/s** | Design flood of the 1966 construction plan |
| **Basic policy design flood: 6,000 m³/s** | Peak design flood of the 2004 Abe River Basic Policy |
| **Any peak flow** | User-specified peak discharge (m³/s), time to peak (h), and duration (h) |
| **Custom (10-min intervals)** | Comma- or space-separated discharge values (m³/s) at 10-minute intervals |

All discharges are defined at Tegoshi (downstream of the Warashina confluence) and split by catchment area: **76.5% to the Abe main river** and **23.5% to the Warashina tributary**.

## 4. Simulation & Summary Metrics

- **▶ Start**: Runs the currently selected breach and river flow scenario.
- **▶▶ Run all breach sites in turn (same flow)**: Automatically runs Cases A through D in sequence with the same hydrograph and retains each case's maximum flood depth for envelope comparison.
- **Speed (steps / frame)**: Solver steps executed per rendered frame (5–600).
- **Safety factor (CFL)**: Adaptive time-step factor (0.1–0.9, default 0.5).

When a run completes, the summary displays breach time, maximum floodplain depth, peak outflow onto the floodplain, maximum floodwater volume outside the channel, flooded area (>0.1 m and >0.5 m), and the number of buildings with ≥0.5 m (above-floor equivalent) and ≥3 m (first-floor submerged) of surrounding water. Water inside the main river channel and sea is excluded from flood totals.

### Reference Results (Default: 80 m breach width, 30 min widening, 8 h duration)

| Case | 4,900 m³/s Area (>0.1 m) | 4,900 m³/s Buildings (≥0.5 m) | 6,000 m³/s Area (>0.1 m) | 6,000 m³/s Buildings (≥0.5 m) |
|---|---|---|---|---|
| No breach (overtopping only) | 7.8 ha | 1 | 10.5 ha | 8 |
| **A: Left bank, Anzai** | 273.2 ha | 5,799 | 334.6 ha | 8,959 |
| **B: Right bank, Mukoshikiji** | 149.2 ha | 2,817 | 224.1 ha | 4,690 |
| **C: Left bank, Minami-Abe** | 169.2 ha | 2,812 | 240.6 ha | 4,601 |
| **D: Left bank, Nakajima** | 141.9 ha | 3,254 | 174.4 ha | 4,448 |

## 5. Playback, Display, Point Inspection & CSV Export

- **Playback**: Use the bottom **▶** button, timeline slider, and playback speed selector (1 to 30 min/s).
- **Bottom Chart**: Blue area = river inflow (m³/s), orange curve = approximate flow onto the floodplain, red dashed line = breach start time, red solid curve = water depth at the clicked street cell or around the clicked building.
- **Click to Inspect**: Click any building or street cell in the 3D view to inspect coordinates, corrected ground elevation, building class and estimated height, maximum flood depth, arrival time, and official hazard ranks. Click **"📄 Save this point as CSV (results + conditions)"** to export a full time-series CSV.
- **GeoTIFF Exports**: Under "1. Region", export the corrected DEM, DSM with buildings, or raw DEM as GeoTIFF files.
- **Camera Controls**: Left-drag = rotate, right-drag = pan, scroll wheel = zoom to cursor, **double-click = set centre of rotation**, `L` = lock/unlock view.

## 6. Comparing with the Official Hazard Map

In **"5. Hazard-map comparison"**, select either **Planned scale (L1)** or **Maximum assumed scale (L2)** from the MLIT / GSI national flood hazard map.

| Display Mode | Description |
|---|---|
| **Paint the difference from the results** | Flooded in both (purple), run only (red), hazard map only (blue), run outside city (grey) |
| **Paint the ground with official rank colours** | drapes the official hazard depth classes on the terrain |
| **Paint the ground with assumed depth** | Colours assumed depth using the active depth class set from "4. Display" |
| **Show as a 3D water surface** | Renders the hazard map as a 3D water surface with a 0–100% level slider |

**Notes on Interpretation**:
- The official hazard map is an envelope combining many assumed breach locations. A single breach site covers only one pathway (91–97% of each run's flooded cells fall inside the L2 zone), so use **"Maximum of all sites computed with this flow"** after running all four cases to compare the combined envelope.

## 7. Video Recording (MP4 / WebM)

In **"6. Recording"**, choose resolution (up to `3840×2160` 4K), frame rate (`24 / 30 / 60` fps), duration, time window, and camera mode (**Fixed**, **Interpolate keyframes**, or **Orbit**), then click **● Record and save**.

## 8. Troubleshooting

| Symptom | Solution |
|---|---|
| Simulation runs slowly | Increase the **Speed** slider in "3. Simulation" and close other GPU-intensive apps |
| High memory usage | Increase **Save interval (min)** (e.g. from 10 min to 20 min) |
| Local water surface oscillations | Lower **Safety factor (CFL)** slightly (e.g. from 0.5 to 0.35) |
