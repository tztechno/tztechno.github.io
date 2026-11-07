# RainViewer 3D — User Manual (English)

[日本語マニュアル](MANUAL.ja.md)

RainViewer 3D shows precipitation radar and weather-satellite imagery on a 3D globe (CesiumJS).

- **Current rain**: RainViewer precipitation radar (last 2 hours + 30-minute nowcast)
- **Past rain and clouds**: NASA GIBS satellite data (any date and time from 2000 to today)
- **Pressure, wind, temperature**: OpenWeatherMap maps (free API key required)

The interface can be switched between **Japanese and English**.

> **Note** — Images and CSV values are estimates read from public map tiles.
> For safety decisions, use official sources such as your national weather service.

---

## Contents

1. [Starting the app](#1-starting-the-app)
2. [Switching language (日本語 / English)](#2-switching-language-日本語--english)
3. [Screen layout](#3-screen-layout)
4. [LIVE mode (last 2 hours + nowcast)](#4-live-mode-last-2-hours--nowcast)
5. [Archive mode (calendar)](#5-archive-mode-calendar)
6. [Weather and satellite layers](#6-weather-and-satellite-layers)
7. [Region jumps and camera control](#7-region-jumps-and-camera-control)
8. [Saving an image (PNG)](#8-saving-an-image-png)
9. [Saving precipitation data (CSV)](#9-saving-precipitation-data-csv)
10. [Settings panel](#10-settings-panel)
11. [Setting up an OpenWeatherMap API key](#11-setting-up-an-openweathermap-api-key)
12. [Keyboard shortcuts](#12-keyboard-shortcuts)
13. [Troubleshooting](#13-troubleshooting)
14. [Data sources](#14-data-sources)

---

## 1. Starting the app

An internet connection is required (maps, radar and satellite images are downloaded live).

| Version | How to start |
| :--- | :--- |
| **macOS (.dmg)** | Open `RainViewer3D_1.0.0_aarch64.dmg`, drag `RainViewer3D` into Applications, then launch it. |
| **Windows (.exe)** | Run `RainViewer3D_1.0.0_x64-setup.exe` to install. To run without installing, start `RainViewer3D_portable.exe`. |
| **Browser** | In the `rain_viewer` folder run `python3 -m http.server 8088`, then open `http://localhost:8088/index.html`. |

If a security warning appears the first time, see [13. Troubleshooting](#13-troubleshooting).

---

## 2. Switching language (日本語 / English)

- Press the **language button** at the top right (a text icon labeled "EN" or "日本語").
- Or press <kbd>L</kbd> on the keyboard.
- Your choice is remembered next time.
- On first launch the language follows your computer's (browser's) language setting.
- In the browser version you can also add `?lang=en` or `?lang=ja` to the URL.

What changes: buttons, menus, legend, notifications, city names on the globe and the text drawn on saved images.
CSV column names (`time_utc, lat, lon …`) are always in English.

---

## 3. Screen layout

| Area | Contents |
| :--- | :--- |
| **Top (header)** | Region buttons, LIVE / archive badge, displayed time (UTC), action buttons (calendar, save image, CSV, refresh, settings, language, help, full screen) |
| **Top left (layer bar)** | Choose the weather / satellite layer. Click "Layers" to collapse it. |
| **Bottom right (legend)** | Colors and values (precipitation in mm/h, pressure in hPa, etc.). The arrow minimizes it. |
| **Bottom (time panel)** | Observation time, mode switch (LIVE · last 2 h / Archive date/time), time slider, play buttons |
| **Right (settings panel)** | Base map, opacity, color palette, borders and other display settings (<kbd>S</kbd>) |

Times are shown in **UTC**, with Japan Standard Time (JST = UTC+9) alongside.

---

## 4. LIVE mode (last 2 hours + nowcast)

This is the mode at startup. It shows RainViewer precipitation radar.

- Choose **"LIVE · last 2 h"** in the bottom panel to enter this mode.
- **Time slider**: pick any frame in the last 2 hours (10-minute steps) or the forecast up to 30 minutes ahead (nowcast).
- **▶ (play)**: steps through the frames automatically; press again to stop (<kbd>Space</kbd>).
- **⏮ / ⏭**: move 10 minutes back / forward (<kbd>←</kbd> / <kbd>→</kbd>).
- **"Latest"**: return to the latest observed frame.
- Data refreshes automatically about every 5 minutes. Press **Refresh** (<kbd>R</kbd>) to update now.

Forecast frames are marked like "+10 min forecast" next to the time.

---

## 5. Archive mode (calendar)

Shows rain and clouds for a past date and time, using NASA GIBS data.

1. Press **"Archive date/time"** in the bottom panel (or the calendar button in the header, or <kbd>T</kbd>).
2. Choose **Date (UTC)** and **Time (UTC)**. Japan time (JST) is shown to the right.
3. If the precipitation layer is active, it switches automatically to **GPM IMERG global precipitation**.

### Stepping and playback

| Button | Action |
| :--- | :--- |
| `-1 d` / `+1 d` | One day back / forward |
| `-3h` / `+3h` | Three hours back / forward |
| ⏮ / ⏭ | One frame back / forward (Himawari 10 min, IMERG 30 min, visible satellite 1 day) |
| ▶ | Time-lapse playback (press again to stop) |
| Time slider | Move through 00:00 – 23:50 UTC of the selected day |

### Precipitation interval (IMERG)

- **30-minute (follows time)**: precipitation for each 30-minute period
- **Daily composite**: precipitation for the whole day

### Past typhoon and heavy-rain presets

Pick an event from "Past typhoon / heavy-rain presets" to set the date, time, layer and region at once.
Examples: Typhoon Hagibis (2019), the July 2020 Kumamoto floods, the July 2018 western Japan floods.

### Available periods

| Data | From | Interval |
| :--- | :--- | :--- |
| Himawari IR clouds | roughly the last 2–3 months (NASA removes older data) | 10 min |
| GPM IMERG global precipitation | June 2000 | 30 min / 1 day |
| MODIS visible imagery | February 2000 | 1 day |

The most recent few hours to a day may not yet be published by NASA. If nothing appears, choose a slightly earlier time.

---

## 6. Weather and satellite layers

Choose from the layer bar at the top left or the settings panel (<kbd>W</kbd> cycles through them).

| Layer | What it shows | Source | API key |
| :--- | :--- | :--- | :--- |
| Precipitation | Rain radar (GPM IMERG in archive mode) | RainViewer / NASA | Not needed |
| Himawari IR clouds | Himawari infrared imagery; whiter = higher, colder cloud tops | NASA GIBS / JMA | Not needed |
| Global precip. (IMERG) | Satellite-estimated precipitation worldwide | NASA GIBS / JAXA | Not needed |
| Satellite (visible) | Natural-color satellite photo (one per day) | NASA GIBS (MODIS) | Not needed |
| Pressure (hPa) | Sea-level pressure | OpenWeatherMap | **Required** |
| Wind (m/s) | Surface wind speed | OpenWeatherMap | **Required** |
| Temp. (°C) | Surface air temperature | OpenWeatherMap | **Required** |

Choosing a NASA layer switches to archive mode automatically.

---

## 7. Region jumps and camera control

### Region jumps

Use the header buttons or number keys.

| Key | Region |
| :--- | :--- |
| <kbd>1</kbd> | Japan |
| <kbd>2</kbd> | China |
| <kbd>3</kbd> | United States |
| <kbd>4</kbd> | Europe |
| <kbd>5</kbd> | Australia |
| <kbd>6</kbd> | Global |

### Mouse

| Action | Effect |
| :--- | :--- |
| Left drag | Rotate the globe |
| Wheel / pinch | Zoom in / out |
| Right drag | Zoom in / out |
| Middle drag (Ctrl + left drag) | Tilt the view |

---

## 8. Saving an image (PNG)

Press the camera button, **"Save"** in the bottom panel, or <kbd>P</kbd> to save the current globe view as a PNG.

The image includes:

- Bottom left: the displayed time (UTC), Japan time, layer name, region, camera position and altitude
- Bottom right: the legend (colors and values)

Example file name: `RainViewer3D_radar_2026-11-07_0010UTC.png`

**Where it is saved**

- Desktop app (macOS / Windows): your **Downloads folder**. If a file with the same name exists, ` (2)` is added; nothing is overwritten. The full path is shown in the notification.
- Browser: your browser's download location

---

## 9. Saving precipitation data (CSV)

Press **CSV** or <kbd>C</kbd> to save precipitation for **the area currently on screen** as a CSV file.
Available only while the "Precipitation" or "Global precip. (IMERG)" layer is shown.

| Column | Contents |
| :--- | :--- |
| `time_utc` | Data time (UTC) |
| `lat`, `lon` | Latitude, longitude |
| `dbz` | Radar reflectivity (RainViewer LIVE only) |
| `precip_mm_h` | Precipitation rate (mm/h) |
| `precip_type` | `rain` / `snow` |
| `source` | Data source |

- The grid is at most 300 × 300 points; wider views give coarser spacing.
- Values are estimated from tile image colors:
  - LIVE: RainViewer colors → dBZ, then Marshall-Palmer (rain Z=200R^1.6, snow Z=2000R^2) → mm/h
  - Archive / IMERG: NASA GIBS color map → mm/h bins
- Files are saved to the same place as PNG images.

---

## 10. Settings panel

Open it with the settings button in the header (<kbd>S</kbd>).

| Item | What it does |
| :--- | :--- |
| Active weather / satellite layer | Switch layers (same as the layer bar) |
| OpenWeatherMap API settings | Enter, save or delete the API key |
| Earth base map | **Dark Earth** (dark map; weather data stands out) / **Blue Marble** (satellite imagery) |
| Layer opacity | Strength of the weather layer (15–100%) |
| Radar color palette | Radar colors (Universal Blue, TITAN, …). LIVE precipitation layer only |
| Smoothing / Snow colors | Smoother radar echoes / show snow in separate colors |
| Borders, city labels, atmosphere glow, auto-rotation | Globe display effects |

---

## 11. Setting up an OpenWeatherMap API key

The pressure, wind and temperature layers need a **free OpenWeatherMap API key**.

1. Create an account on the [OpenWeatherMap sign-up page](https://home.openweathermap.org/users/sign_up) (no credit card needed).
2. Copy the 32-character key from the **[API keys]** tab of your account page.
3. Selecting one of these layers opens a key dialog; paste the key and press "Save and show layer" (you can also enter it in the settings panel).

- The key is stored only on this computer (in the app / browser).
- A new key can take from a few minutes up to about 2 hours to become active.
- To remove it, press "Delete key" in the settings panel.

---

## 12. Keyboard shortcuts

| Key | Action |
| :--- | :--- |
| <kbd>T</kbd> | LIVE ⇄ archive mode |
| <kbd>Space</kbd> | Play / pause |
| <kbd>←</kbd> / <kbd>→</kbd> | Previous / next frame |
| <kbd>W</kbd> | Cycle layers |
| <kbd>1</kbd>–<kbd>6</kbd> | Jump to a region |
| <kbd>P</kbd> | Save image (PNG) |
| <kbd>C</kbd> | Save precipitation CSV |
| <kbd>R</kbd> | Reload data |
| <kbd>S</kbd> | Open / close settings |
| <kbd>L</kbd> | Switch language (日本語 / English) |
| <kbd>I</kbd> | About & credits |
| <kbd>F</kbd> | Full screen |
| <kbd>Esc</kbd> | Close panels and dialogs |

Shortcuts are ignored while the cursor is in a text field.

---

## 13. Troubleshooting

| Problem | What to do |
| :--- | :--- |
| macOS says the app "can't be opened because the developer cannot be verified" | **Right-click the app → Open**, or press "Open Anyway" in System Settings → Privacy & Security. If it still won't open, run `xattr -cr /Applications/RainViewer3D.app` in Terminal. |
| Windows shows "Windows protected your PC" | Click **More info → Run anyway**. |
| The globe is black or no images appear | Check your internet connection and press <kbd>R</kbd>. |
| Nothing shows for a past date | The data may not be published yet; try 1–2 days earlier. Himawari data covers only about the last 2–3 months (use GPM IMERG precipitation for past typhoons). |
| Pressure, wind or temperature don't appear | Check your API key. New keys take time to activate. |
| The CSV button does nothing | Switch to the "Precipitation" or "Global precip. (IMERG)" layer first. |
| Can't find a saved file | The desktop app saves to your Downloads folder; the path is shown in the notification. |

---

## 14. Data sources

- Real-time radar: [RainViewer API](https://www.rainviewer.com/api.html)
- Past precipitation, Himawari IR, satellite imagery: [NASA GIBS](https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs) (JAXA GPM IMERG / JMA Himawari-8/9 / NASA Terra MODIS)
- Pressure, wind, temperature: [OpenWeatherMap Weather Maps](https://openweathermap.org/api/weather-map-1)
- Base maps and boundaries: Esri World Dark Gray / World Imagery / World Boundaries and Places
- 3D globe engine: [CesiumJS](https://cesium.com/platform/cesiumjs/)
