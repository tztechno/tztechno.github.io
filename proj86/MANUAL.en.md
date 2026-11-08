# Flight Viewer User Manual (English)

Open flight data (CSV) and a 3D aircraft flies it on the recorded timeline across a CesiumJS 3D globe.

- OS: macOS 11+ (Apple Silicon)
- Requirements: an internet connection (maps and terrain). No account or API key needed
- Languages: English / 日本語 (button at the top right of the panel)

---

## 1. Installation
1. Open `Flight Viewer_x.y.z_aarch64.dmg` and drag `Flight Viewer` into Applications.
2. The first time, macOS says the developer cannot be verified (the app is not notarized by Apple).
   - macOS 14 or earlier: right-click the app in Finder → Open
   - macOS 15 or later: try to open it once, then click “Open Anyway” in System Settings → Privacy & Security

## 2. Opening CSV files
- Click “📂 Open CSV” in the left panel, or drag & drop CSV files onto the window.
- Check “Add to current” to add flights on top of those already shown. Flights are drawn in different colors.
- In “Flights” you can show/hide (checkbox), select (click) or close (×) each flight.

### CSV formats
| Content | Column names | Notes |
| --- | --- | --- |
| Time (required) | `time` `timestamp` `unix_time` `utc` `datetime` | UNIX seconds / ms, ISO 8601, `2026-11-01 17:49:00`, `2026/11/01 17:49:00`. No time zone = UTC |
| Latitude/longitude (required) | `latitude`/`lat`, `longitude`/`lon`/`lng`, or `position` ("lat,lon") | Decimal degrees |
| Altitude | `altitude_ft` `alt_m` `altitude` `baro_altitude_m` | `_m` in the name = meters, `ft` = feet, otherwise feet (can be changed in the panel) |
| Flight / aircraft ID | `callsign` `flight`, `icao24` `hex` `registration` | Each aircraft ID is treated as a separate flight |
| On ground | `on_ground` | Rows with `true`/`1`/`yes` get altitude 0 |
| Events | `note` `event` `remark` | Non-empty rows become “events” |

Flightradar24 CSV and Flight Dashboard track CSV load as-is. Each flight needs at least 2 valid points.

## 3. Playback
- Playback bar at the bottom: play/pause (Space), speed ×0.25–×300, time zone
- **Altitude chart**: every flight’s profile; click or drag to jump to that time. ▼ marks events
- `[` `]` go back / forward 10 s (Shift = 60 s)
- Altitude, ground speed, vertical rate, track and position of the selected flight are always shown

### Time zone
The local time zone is estimated from the first position and date (Japan and the contiguous US including daylight saving time; elsewhere from longitude). You can also switch to UTC, JST, EDT, EST, PDT, PST, CEST or CET.

### Events
Text in the CSV’s `note` column is listed as events in time order. Click one to jump 5 seconds before it; a banner appears as you pass it during playback.

## 4. Viewpoints
| View | Controls |
| --- | --- |
| Free | left-drag = pan, wheel = zoom, Ctrl+drag = tilt & rotate, double-click = fly closer, W/S/A/D, R/F, arrows = fly (Shift = faster) |
| Follow | keeps the selected aircraft centered |
| Chase | follows from behind; drag or arrows to look around, wheel for distance |
| Cockpit | looks ahead from the aircraft’s position; drag or arrows to look around |

Buttons: Top-down / Oblique / Horizon / North up / Fit all. Click an aircraft to select its flight.

## 5. Display settings
- Map: Satellite / Dark / Light / OpenStreetMap
- 3D terrain: GSI Japan elevation tiles in Japan, AWS Terrain Tiles elsewhere
- Full path (faint), altitude “curtain” (a wall down to the ground), flight & altitude labels
- Aircraft size: easy to see (min 40 px) / true scale

## 6. Recording
“● Start recording” records the map area as video; “■ Stop recording” saves it. “Burn time and altitude into the video” writes the time and the selected flight’s data onto the video. Files go to your Downloads folder.

## 7. Troubleshooting
| Symptom | Fix |
| --- | --- |
| “latitude/longitude columns not found” | Name the columns `latitude` `longitude` (or `lat` `lon`) |
| Altitude looks ~3× too high/low | Switch “Altitude unit” to Feet or Meters in the panel |
| Times are off by hours | Times without a time zone are treated as UTC. Add an offset such as `+09:00` to the CSV, or change the time zone |
| Turns look angular | Points are joined with straight lines, so sparse recordings look angular |

## 8. Data
- Maps: Esri, OpenStreetMap contributors / Terrain: GSI Japan elevation tiles, AWS Terrain Tiles
- Flight data comes from your own CSV files; the app does not fetch or sell flight data. Follow each data provider’s terms of use.
- Replayed positions are only as accurate as the recording. Do not use it for flight operations or accident investigation.
