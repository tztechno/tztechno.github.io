# Nagoya Flood — User Manual

A web application that rains on terrain built from Nagoya's 3D city model (PLATEAU) and a terrain raster (`nagoya.tif`), with the ground corrected by the base elevation of every building, and shows — and records — the city flooding in 3D.

- Rain falls on the whole `nagoya.tif` extent (about 82 km × 76 km), so water flowing in from outside the area of interest is included (a two-level computation: a 30 m basin grid plus a 2 m detailed grid)
- Pick any place by its address and look at the flooding building by building (2 m grid)
- Compare with the national flood hazard maps (flood inundation assumption areas)
- Make MP4 videos with any camera angle or camera movement

See [README.md](README.md) for the computational method and the data processing.

*日本語版: [MANUAL.ja.md](MANUAL.ja.md)*

---

## Contents

1. [Getting started](#1-getting-started)
2. [Screen layout](#2-screen-layout)
3. [Choosing or making a region (tile)](#3-choosing-or-making-a-region-tile)
4. [Setting the rainfall](#4-setting-the-rainfall)
5. [Running the simulation](#5-running-the-simulation)
6. [Looking at the results](#6-looking-at-the-results)
7. [Display options](#7-display-options)
8. [Moving the view](#8-moving-the-view)
9. [Comparing with the hazard map](#9-comparing-with-the-hazard-map)
10. [Recording a video](#10-recording-a-video)
11. [How the computation works (summary)](#11-how-the-computation-works-summary)
12. [Notes and limitations](#12-notes-and-limitations)
13. [Troubleshooting](#13-troubleshooting)
14. [Sources](#14-sources)

---

## 1. Getting started

### Requirements
- Node.js (v20 or later)
- A browser with WebGL2 (latest Chrome / Edge / Safari)
- Folder layout: `N65_nagoya_rain/` contains `nagoya.tif`, the PLATEAU data (`23100_nagoya-shi_city_2022_citygml_4_op/`) and this app (`nagoya_flood/`)

### One-time preparation

```bash
cd nagoya_flood
npm install
npm run build:basin    # basin data (whole tif + PLATEAU DEM, ~50 s)
npm run build:labels   # building / place labels (~2 min, needs internet)
npm run build:towns    # town (chome / aza) boundaries (~30 s, needs internet)
npm run build:all      # the six preset regions (~10 s each)
```

Run `build:labels` after `build:basin`.

### Start

```bash
npm run dev
```

Open **http://localhost:5173/** in the browser.

> Making tiles from an address works only while the app runs with `npm run dev`.

---

## 2. Screen layout

### Title screen
The app opens with a title screen. A checklist shows the loading progress; when everything is ready, press "START" (or Enter) to enter the app.

- Click a region in the list on the right to open it (the boxes on the map show where the regions are; orange = the current one)
- "English / 日本語" on the title screen switches the language
- The title screen appears only the first time in a browser tab. Press "Title" at the top right of the panel to see it again

### Parts of the screen

| Where | What |
|---|---|
| Left panel | 1. Region / 2. Rainfall / 3. Simulation / 4. Display / 5. Hazard-map comparison / 6. Recording. The language button is at its top right |
| Centre | 3D view (terrain, buildings, water, labels) |
| Top left | Region name, elapsed time, rainfall intensity, total rain, etc. |
| Top right | "Lock view" button, legend |
| Bottom left | Basin map (flooding over the whole tif; red box = region shown). Click it to pick the place of a new tile |
| Bottom right | Point information (after clicking the map) |
| Bottom | Timeline (play button, time slider, playback speed) and the rain / water-depth chart |

### Switching between Japanese and English
The "English" button at the top right of the panel ("日本語" while in English) switches the language of the whole screen. The choice is remembered by the browser (opening the page with `?lang=en` also starts in English).

- The panel, information boxes, chart, legends, result summaries and the text in recorded videos all switch
- **Place names switch too**: labels of buildings, stations and mountains, region names, river names and addresses (pins and areas)
- English names come from OpenStreetMap where it has one (almost every station). Otherwise the facility type is translated (郵便局 → Post Office, etc.) and the proper noun is romanised from its estimated reading. Readings are estimated automatically, so rare place or temple names may be romanised wrongly
- Type addresses in Japanese in the search box

---

## 3. Choosing or making a region (tile)

The simulation and the detailed view work on a "tile" (2 km square by default, 2 m grid). Outside the tile, the terrain and aerial photo of the whole tif are shown as well.

### Choosing a preset region
Pick one from the "1. Region" list (Nagoya Castle / Meijo Park, Nagoya Station area, Sakae / Hisaya-odori, Nonami (Tempaku-ku), Hatta / Arako (Nakagawa-ku), Minato-ku, Nishi-ku along the Shonai River).
The links under the region information download the corrected terrain, the terrain with buildings, and the uncorrected DEM as GeoTIFF (Japan Plane Rectangular CS VII).

### Making a new tile from an address or place name
1. Type an address or place name under "Make a new tile from an address or place name" and press "Search" (or Enter)
   - Examples: `中川区八田町102`, `名古屋市中区栄三丁目5-12`, `名古屋城`, `金山駅`
2. Selecting a candidate shows its place as a blue box on the basin map (bottom left)
3. Choose the "Tile size" (1 / 2 / 3 km square)
4. Press the button
   - Candidate inside the current tile: "📍 Show this place (area) (in the current tile)" → shown without rebuilding
   - Outside the tile: "Build and show this tile" → built in 10–30 s and opened automatically

You can also **click** the basin map at the bottom left to pick a place.

### Address precision

| Address entered | Shown as |
|---|---|
| Down to the block / house number (e.g. 栄三丁目5-12) | A **red pin** with the address label; the building at that point is selected and its information shown |
| Down to the town / chome (e.g. 中川区八田町) | The **town's area**, lightly tinted red and outlined (the candidate reads "▭ … (area)"). A tile size that holds the whole area is chosen automatically |
| A station, building or sight (candidates marked 📍) | A pin at that place |

- Town areas are the census town / aza boundaries. A town split into several parts (e.g. 八田町 and 八田町字下長草) is shown as a whole; "栄" without a chome covers 栄 1- to 5-chome
- "📍 Go to the place" brings you back to the pin or area at any time
- Pins and areas are kept in the URL, so they survive a reload or a bookmark
- Buildings and detailed terrain exist only inside Nagoya city (PLATEAU). Tiles outside the city use terrain interpolated from the tif (~30 m) and have no buildings

---

## 4. Setting the rainfall

### Rainfall patterns

| Pattern | Settings | Use |
|---|---|---|
| Constant intensity | Intensity (mm/h), duration (h) | Simple comparisons |
| Centre-peaked (design storm) | Peak intensity, total rainfall, duration | The shape used in planning and design |
| Linear rainband | Intensity at its height, duration of the height | Heavy rain lasting several hours |
| Tokai heavy rain type (Sep 2000, synthetic) | Scale factor | A synthetic hyetograph matched to the 97 mm hourly maximum and ~567 mm total (not the observed series) |
| Custom | Intensity every 10 minutes (mm/h), separated by commas or newlines | Any rainfall |

The rain appears as bars (every 10 minutes) in the chart at the bottom, and the total, peak and computed time are shown in the panel.

### Other settings

| Item | Meaning | Guide |
|---|---|---|
| Also rain on the whole basin … and compute the inflow from outside the region | When on, the same rain falls on the whole tif and the water flowing into the tile from outside is computed | Normally on (needed for correct depths in hollows and lowlands) |
| Sewer drainage capacity (mm/h) | Drainage subtracted uniformly everywhere | Default 50 |
| Roughness n (Manning) | How hard it is for water to flow over the ground | About 0.04 in urban areas |
| Time computed after the rain (h) | Keeps computing after the rain stops; make it longer to watch the water recede | 1–6 |
| Save interval (min) | How often results are recorded for playback and the chart. It does not change the computation itself | Normally 5; 1–2 for smooth videos |

> Shorter save intervals use more memory (about 3 MB per save for a 2 km tile with the basin run). Six hours at 1-minute intervals is about 1 GB.

---

## 5. Running the simulation

| Control | Description |
|---|---|
| ▶ Start | Starts the computation. You can move the view while it runs |
| ⏸ Pause / ▶ Resume | You can record while paused (the results so far) |
| ↺ Reset | Clears the results (use it to change the rainfall) |
| Speed (steps / frame) | Steps computed per displayed frame. Changes only the waiting time, not the results |
| Safety factor (CFL) | Safety factor of the time step Δt (default 0.5). Smaller values give a shorter Δt and a longer computation |

### Time step Δt
Δt is set automatically from the stability condition:

```
Δt = min( 2 s , safety factor × grid spacing ÷ √(9.81 × max depth × 1.3) )
```

Next to the safety factor, a guide to Δt for several maximum depths is shown before the run; during the run it shows the Δt actually in use (detailed and basin grids) and the maximum depth that set it.

### Information during and after the run
- During the run: simulation time, maximum depth, stored volume, number of saved frames, maximum depth of the basin run
- After the run: maximum depth, flooded area (>0.1 m and >0.5 m), number of buildings flooded above floor level (≥0.5 m around the building) and ≥3 m

Guide to computing time (Apple M5): three hours of rain on a 2 km tile take about 1.5 minutes without the basin run and about 1.5–3 minutes with it.

---

## 6. Looking at the results

### Playback
After the run, press ▶ at the bottom. Move to any time with the slider; "Playback speed" sets how much simulated time passes per second (1–30 min/s). Times between saved frames are interpolated linearly.

### Clicking a point
Click the ground or a building in the 3D view to put a **yellow marker** (a pole with a ring, growing with the viewing distance so it stays visible) on that point and show its information at the bottom right. Click empty space to remove it. The first line is the **latitude and longitude** (JGD2011, 6 decimals, centre of the 2 m cell), ready to paste into a map app.

- Street etc.: ground elevation, maximum depth, time flooding (>0.1 m) began, assumed depths for each river
- Building: use, floors, height, base elevation, flood depth around it (90th percentile), building ID (the building is highlighted in yellow)

### Reading the chart

| Element | Meaning |
|---|---|
| Blue bars (hanging from the top) | Rainfall intensity; the number at the top left is the scale maximum (mm/h) |
| Red line | Water depth at the clicked point over time (for a building, "Around bldg" = maximum depth on the surrounding streets) |
| Red dot and "Max 0.47m (2:00)" | Maximum depth and its time |
| "End 0.41m" at the right | Depth at the end of the computation |
| Light red grid lines | Depth scale (numbers on the right) |
| Black vertical line | The time shown on screen |

### Showing the maximum depth
Turn on "Show the maximum depth (after the run)" in "4. Display" to show the maximum depth of every point over the whole run.

---

## 7. Display options

Set in "4. Display".

| Item | Choices |
|---|---|
| Ground | Aerial photo / Elevation tint |
| Water | Realistic / Depth (hazard colours) |
| Buildings | White / Coloured by surrounding flood depth |
| Depth classes | Pluvial (0.5/1/2/3/5 m) / Hazard-map standard (0.5/3/5/10/20 m) |
| Water opacity | Slider |
| Correct shadows in the aerial photo | Building shadows in the photo (dark blue) are turned light grey so they don't look like water (on by default) |
| Show buildings | On / off |
| Show surrounding and distant terrain | Terrain and aerial photo of the whole tif outside the tile (on by default) |
| Building / place labels | Names of buildings, stations, mountains etc. that are in sight (on by default; also recorded) |
| Show the maximum depth | After the run, shows the maximum depth of every point |

### Nagoya Castle
The main keep, the small keep and the stone bridge of Nagoya Castle are drawn as a detailed model sized from the PLATEAU LOD2 keep (stone base about 21 m high, the size of every tier, ridge at 62.5 m above sea level, orientation): curved stone base, white plaster with lattice windows, copper-tiled roofs with curved eaves, chidori and kara gables, the copper-clad top storey and the golden shachihoko. The flood computation still uses the PLATEAU building shapes. The model appears in regions within 12 km of the castle and follows "Show buildings". The castle on the title screen is the same model.

### Labels
- Shows names of major stations, high-rises, Nagoya Castle, mountains (with elevation), shrines and temples, sights and public facilities
- A thin line runs down from each label; its dot marks the roof or summit it names
- **Only what is actually in sight** is labelled; labels behind buildings or mountains disappear
- More important names are shown from farther away (mountains 40–80 km, major high-rises 40 km, major stations 20 km, other stations 4 km, public facilities within about 900 m)

---

## 8. Moving the view

| Action | Effect |
|---|---|
| Left drag | Rotate around the focus point (including looking up from the ground) |
| Right drag | Pan |
| Wheel | Zoom towards the cursor |
| **Double-click** | Make that point the focus (centre of rotation) and move there; works on the terrain outside the tile too |
| **Lock view** (top right) / **L key** | Freeze the view where it is (inertia stops at once); press again to release |
| Reset view ("4. Display") | Back to the view of the whole region |

- The camera never goes lower than 2 m above the ground or a roof
- With the view locked you can still click points, play back and record

---

## 9. Comparing with the hazard map

"5. Hazard-map comparison" shows the **flood inundation assumption areas** contained in PLATEAU (the nationally managed Kiso, Shonai and Yada rivers; planned scale L1 / maximum assumed scale L2).

| Display | Description |
|---|---|
| Paint the ground with the official rank colours | Paints the ground in the six national standard classes; can be overlaid on the simulated 3D water |
| Paint the ground with the assumed depth | Paints the assumed depth with the "Depth classes" colours (differences between places are easier to see) |
| Show as a 3D water surface | Shows the assumed water surface in 3D; the "Water level" slider raises it from 0 to 100% |

- "Max of all rivers" shows the larger of the rivers' assumptions
- Choosing a hazard layer switches the depth classes to "Hazard-map standard" automatically
- After a run, a comparison with the results (overlap of flooded areas, numbers of buildings flooded above floor level) is shown
- Clicking a point shows each river's assumed rank, water-surface elevation and depth above ground
- In 3D water-surface mode you can record without running a simulation; with "When recording, raise the water from 0 to 100%" on, the video shows the water rising and the buildings going under

> The flood inundation assumption areas assume rivers overflowing (fluvial flooding); this simulation computes flooding from heavy rain (pluvial flooding). As the phenomena differ, use the comparison to see which places tend to be at risk. Regions outside the assumption areas of the national rivers, such as Sakae and Nonami, have no data.

---

## 10. Recording a video

You can record after a run (or while paused), or while showing a hazard layer as a 3D water surface.

1. Set up "6. Recording"

   | Item | Description |
   |---|---|
   | Resolution | 1280×720 – 3840×2160 (4K) |
   | fps | 24 / 30 / 60 |
   | Video length (s) | Length of the resulting video |
   | Start / End (min) | Range of simulation time to record |
   | Camera | Fixed at the current view / Interpolate keyframes / Orbit (angle given) |

2. For "Interpolate keyframes", move the view and press "＋ Add the current view" two or more times (the views are joined smoothly in that order)
3. Press "● Record and save" to download an MP4 file ("Cancel" stops it)

- Each frame is rendered before it is encoded, so the video is smooth regardless of the computer's speed
- The video includes the time, rainfall and total rain, the legend, labels, the pin, the basin map and the sources — in the language selected on screen
- The surest way: set the angle, lock the view (L), and record with "Fixed at the current view"

---

## 11. How the computation works (summary)

- **Terrain**: the PLATEAU DEM on a 2 m grid; inside buildings the ground is set to the building base elevation, and the difference is blended smoothly into the surrounding streets
- **Buildings**: obstacles up to their roof height; rain on a roof flows off its edges onto the surrounding ground
- **Water flow**: driven by differences in water-surface elevation (local inertial equations with Manning friction). Where water ponds and its surface becomes level, the flow stops; once it reaches the lowest rim, it spills over
- **Two-level computation**: the whole tif (30 m grid) and the tile (2 m grid) are computed together, and the tile takes the basin water level at its boundary. The sea (Ise Bay, Nagoya Port) absorbs water at a level of 0 m
- **Flood depth at a building**: the 90th percentile of the water depth on the street cells touching the building; ≥0.5 m is counted as "above floor level"

---

## 12. Notes and limitations

- Sewers are approximated by a uniform drainage capacity. The pipe network, overflow from manholes, pumping stations, underground storage and river water levels are not modelled. Water in hollows may recede more slowly than in reality
- The basin run uses a 30 m grid, so river capacity and levees are represented only roughly. Flooding along rivers may be overestimated
- In places, the PLATEAU DEM includes structures such as railway embankments as terrain
- An address given only down to the town is shown as the town's area (not a representative point)
- Some label names come from OpenStreetMap and may contain variant spellings or outdated names. Some English place names are automatic romanisations and their readings may be wrong
- The results are computations under assumed conditions. For evacuation and disaster-prevention decisions, use the official hazard maps of the local government

---

## 13. Troubleshooting

| Symptom | What to do |
|---|---|
| "No region data" is shown | Run `npm run build:all` (or `npm run build:region -- meieki`) |
| Address search / tile building doesn't work | Make sure the app runs with `npm run dev` (not available when opening a built file directly). An internet connection is also needed |
| No basin map at the bottom left | Run `npm run build:basin` |
| No labels | Run `npm run build:labels` and check that "Building / place labels" is on |
| A town is shown as a point instead of an area | Run `npm run build:towns` |
| The display does not update | Reload the browser; if that does not help, restart the dev server |
| The computation is slow | Raise "Speed", use a smaller tile, or turn off the basin run (then no inflow from outside the region is computed) |
| The browser is slow or crashes | Use a longer "Save interval" or a shorter computed time |
| The camera keeps drifting | "Lock view" or the L key |

---

## 14. Sources

- 3D city model (Project PLATEAU) Nagoya, Ministry of Land, Infrastructure, Transport and Tourism — buildings, terrain, flood inundation assumption areas
- GSI tiles (seamless aerial photos) and address search API — Geospatial Information Authority of Japan
- 2020 Population Census small-area (town / chome / aza) boundaries — Statistics Bureau of Japan, e-Stat
- Place names (stations, mountains, sights, high-rises) — © OpenStreetMap contributors (ODbL)
- Elevation (outside the tile and outside Nagoya) — `nagoya.tif`
