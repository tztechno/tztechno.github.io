# Flight Dashboard User Manual (English)

A desktop app that shows aircraft around the world in real time on a 3D globe.
Watch takeoffs and landings from above or from the ground at an airport, ride along with an aircraft, and replay past flight data (CSV).

- Supported OS: macOS 11+ (Apple Silicon) / Windows 10 and 11 (64-bit)
- Data: OpenSky Network (aircraft positions), Esri / OpenStreetMap (maps), GSI Japan and AWS Terrain Tiles (terrain)
- Languages: English / 日本語 (toggle with the button at the top right of the panel)

---

## 1. Installation

### macOS
1. Open `Flight Dashboard_x.y.z_aarch64.dmg` and drag `Flight Dashboard` into Applications.
2. The first time, **right-click the app in Finder → Open** (the app is not notarized by Apple, so a double-click shows a warning).

### Windows
1. Run `Flight Dashboard_x.y.z_x64-setup.exe`.
2. If you see “Windows protected your PC”, click **More info → Run anyway**.
3. Follow the installer.

## 2. First launch and OpenSky credentials

On launch, the “OpenSky credentials” window opens.

| Choice | Credits per day | Notes |
| --- | --- | --- |
| Enter Client ID / Client Secret and click “Verify & save” | 4,000 | Create an API client on your OpenSky account page. The app checks the credentials with OpenSky before saving |
| “Use anonymously” | 400 | No sign-up needed. Enough for occasional use |

- Credentials are saved in the app’s settings folder on this computer (`settings.json`), readable only by you, and sent only to OpenSky for authentication.
- To change it later, click **“Anonymous ⚙” / “OpenSky signed in ⚙”** at the top left, or choose “OpenSky Credentials…” (⌘,) from the menu.

### How far the credits go
Each update costs 1 (small area) to 4 (whole world) credits depending on the area. Below “Fetch area” the panel shows an estimate of daily usage with the current settings, highlighted in yellow when it exceeds the limit.

| Example | Time until the daily limit |
| --- | --- |
| Airport area (1 credit), every 15 s, signed in | about 16.7 hours |
| Whole world (4 credits), every 15 s, signed in | about 4.2 hours |
| Airport area, every 30 s, anonymous | about 3.3 hours |

## 3. The screen

- **Left panel**: aircraft shown, last/next update, credits left, and settings. Toggle with ☰
- **Map**: aircraft icons (rotated to heading, colored by altitude: green = low → magenta = high)
- **Click an aircraft**: details at the bottom right (flight, country, category, altitude, speed, track, vertical rate, position, squawk)

## 4. Live view settings

| Setting | Description |
| --- | --- |
| Update interval | 5–300 s (10 s minimum when anonymous). “⏸ Pause”, “↻ Update now” |
| Fetch area | “Visible area” (only what is on screen — saves credits) / “Whole world” |
| Interpolate positions from speed | Moves aircraft smoothly between updates |
| Show aircraft on the ground | Taxiing / parked aircraft (only those that are received) |
| Map | Dark / Light / OpenStreetMap / Satellite |
| Show 3D terrain | Mountains and valleys in 3D (10 m mesh in Japan) |
| Search | e.g. `JAL123`, `ANA`, `86d4a1` |

## 5. Viewpoints

### Free camera
- Mouse: left-drag = pan, wheel / right-drag = zoom, Ctrl+left-drag / middle-drag = tilt & rotate
- Double-click = fly closer, Shift+double-click = ground view at that spot
- Keyboard: W/S forward/back, A/D left/right, R,E up, F,Q down, arrows to look around, Shift = faster
- Buttons: Top-down / Oblique / Horizon / North up / Japan / World

### Ride an aircraft
Click an aircraft → “🛫 Cockpit” or “🎥 Chase”. Drag or arrows to look around, wheel for distance (chase), Esc to exit.
Check “Follow” to keep the aircraft centered while staying in map view.

## 6. Airports

1. Choose an airport under “Airports” to fly above it at an angle (Haneda, Narita, Kansai, Itami, Centrair, New Chitose, Fukuoka, Naha and 10 airports abroad).
2. Near airports, aircraft are shown as **true-scale 3D models** (sized by category). Live aircraft are highlighted with color, outline and a flight-number label.
   Note: parked aircraft visible in the satellite photo were there when the photo was taken; they are not live.
3. Switch views with the buttons: From above (🛩 Oblique / 🛰 Top-down), From the ground (🛬 Under the approach / 🛫 Beside the runway).

### Ground view controls
- Drag = look around, wheel = zoom (up to ~30×), click an aircraft = follow it with your eyes
- Height: slider (1.7 m–3,000 m, logarithmic) or “On ground”, “Observation deck”, “300m”, “1500m”; R/F keys also work
- WASD = walk, double-click = move there, “↻ Turn around”, Esc = exit
- “🧭 From my location”: look up at the sky above you (location permission required)
- “📍 From screen center”: stand at the center of the map

## 7. Export tracks to CSV

From “Track CSV” in the aircraft details:
- **⬇ Observed history**: positions collected since the app started (incl. speed and vertical rate). No credits used
- **⬇ Full path since takeoff**: fetched from OpenSky records (4 credits per request)

Files are saved to your Downloads folder.

## 8. Replay flight data (CSV)

Click “📂 Open CSV” or drag & drop CSV files onto the window. Live updates pause and replay mode starts.

- Play/pause (Space), speed ×1–×300, slider to seek, Follow, Fit all, “Exit replay”
- Open several files at once to replay them together in different colors
- Formats: Flightradar24 CSV, this app’s track CSV, any CSV with time, latitude and longitude columns

### CSV requirements (summary)
| Content | Column names | Notes |
| --- | --- | --- |
| Time (required) | `time` `timestamp` `unix_time` `utc` | UNIX seconds / ms, ISO 8601. No time zone = UTC |
| Latitude/longitude (required) | `latitude`/`lat`, `longitude`/`lon`, or `position` ("lat,lon") | Decimal degrees |
| Altitude | `altitude_ft` `alt_m` `altitude` | `_m` in the name = meters, otherwise feet (can be changed in the panel) |
| Flight / aircraft ID | `callsign`, `icao24` | Each aircraft ID is treated as a separate flight |

## 9. Recording

“● Start recording” records the map area as video; “■ Stop recording” saves it (macOS: MP4/WebM, Windows: WebM).
“Burn date/time and aircraft count into the video” adds a timestamp at the bottom right. Files go to your Downloads folder.

## 10. Language

Use the **EN / 日本語** button at the top right of the panel. Your choice is remembered.
The credentials window opens in the same language as the app. The menu bar follows the OS language.

## 11. Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| The credentials window appears after updating from v1.1.1 or earlier | v1.1.2 stores credentials differently. Enter your Client ID / Client Secret once more (no more keychain prompts) |
| “Rate limited” message | You used up today’s credits. Use a longer interval or “Visible area” (credits reset daily) |
| No aircraft on the ground at an airport | If no volunteer receiver has line of sight to the airport surface, ground traffic cannot be received (e.g. Osaka Itami). Airborne aircraft are still shown |
| Aircraft sparse or disappearing | Outside receiver coverage — common over oceans and mountains |
| “From my location” does not work | Choose “Allow” when asked for location access the first time. If you declined, allow Flight Dashboard in macOS System Settings → Privacy & Security → Location Services (Windows: Settings → Privacy & security → Location) |
| Spiky noise on the terrain | Fixed in the latest version |

## 12. Data and privacy

- Aircraft positions: [OpenSky Network](https://opensky-network.org/) (ADS-B data from a volunteer receiver network; intended for non-commercial and research use)
- Maps: Esri, OpenStreetMap contributors / Terrain: GSI Japan elevation tiles, AWS Terrain Tiles
- The app connects only to OpenSky and the map/terrain services. Your credentials are kept in the OS secure storage and sent only to OpenSky for authentication.
