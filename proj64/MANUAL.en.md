# Kyoto Drone User Manual

A browser app for flying a physics-simulated drone (MuJoCo) through the 3D city of Kyoto, built from PLATEAU data (about 515,000 buildings). You pick a start point and a destination. Five scenarios let you crash into buildings, fly around them, fight wind and a hanging payload, or take the controls yourself.

日本語版: [MANUAL.ja.md](MANUAL.ja.md)

---

## 1. Getting started

```sh
cd kyoto_drone
npm install
npm run data      # first time only (about 20 s): converts the Kyoto city data into public/data
npm run dev
```

Open <http://localhost:5173> in your browser. Once loading finishes, the app opens on "2. Course flight" from Kyoto Station to Kiyomizu-dera.

To use English, click the **English** button at the top right of the panel, or open <http://localhost:5173/?lang=en>.

- Aerial photos and the background map of the map picker are loaded from GSI Japan over the internet. When offline, the ground shows a plain colour.
- A recent desktop browser (Chrome, Edge, Safari or Firefox) is recommended.

---

## 2. The screen

| Where | What |
|---|---|
| Left panel | Start and destination, scenario, course, conditions, Start button, camera. Close it with "⟨" and reopen it with "☰" |
| Top centre | Scenario name and current state (Ready, Take-off, Cruise, Avoiding, Landed, Crashed, …) |
| Top right | Telemetry: time, height AGL / ASL, speed, distance to destination, off-course distance, wind, estimated mass, thrust, tilt, distance flown / energy |
| Bottom right | Mini-map of the loaded area, with routes, the drone and its trail. Click it to open the large map |
| Bottom left | Event log (take-off, obstacle detected, landing, …) |
| 3D view | Place labels for temples, shrines, stations, sights and mountains. Labels hidden behind buildings or hills are not shown |

### Switching language

The **English / 日本語** button at the top right of the panel switches the language. This covers the panel, the HUD, all messages, and place names (presets and 3D labels). Your choice is remembered by the browser. You can also add `?lang=en` or `?lang=ja` to the URL.

---

## 3. Choosing the start and destination

### From the presets

Use the two lists under "1. Start & destination" (green = start, red = destination). The ⇅ button swaps them.

There are 20 presets: Kyoto Station, Kiyomizu-dera, Nijo Castle, Yasaka Shrine, Fushimi Inari Taisha, To-ji, Nishi Hongan-ji, Higashi Hongan-ji, Sanjusangen-do, Shijo Karasuma, Shijo Bridge, Umekoji Park, Kyoto Imperial Palace, Heian Shrine, Kinkaku-ji, Ginkaku-ji, Shimogamo Shrine, Kamigamo Shrine, Arashiyama Togetsukyo and Daigo-ji.

### On the map

Click **🗺 Pick on the map**, or click the mini-map, to open the large map.

1. Choose **Pick start** or **Pick destination** at the top. The map opens on Pick start.
2. Click the map. The clicked spot becomes the start, and the map switches to picking the destination.
3. Click **Done** (or press Esc) to close the map. **↺ Undo picks** restores the points you had when you opened it.

- Drag to pan. Use the wheel, a pinch or ＋/－ to zoom. **Map / Photo** switches the background.
- You can pick anywhere in the PLATEAU Kyoto city data: about 17 km × 23 km, from Arashiyama to Daigo-ji and from Kamigamo to Fushimi. Areas outside it are dimmed.
- A picked point is moved to the nearest flat spot within 30–40 m. It is named after a nearby place ("near …") or shown by its latitude and longitude.
- The background map has Japanese labels even in English mode.

### Area loading

After you choose the start and destination, the app loads buildings and terrain for the area around both points, plus a 900 m margin. A "Loading buildings and terrain for this area…" message appears at the top while this runs.

- Collisions use a 2.5 m grid. Very long trips (roughly over 10 km) use a 5 m grid, which makes building shapes a little coarser.
- Planning a long route can take a few seconds.

---

## 4. Scenarios

Choose a scenario under "2. Scenario", then press **▶ Start** (Enter) to fly.

### 1. Straight line (failure demo)

The drone climbs above the start (20 m above ground by default) and flies straight towards the point above the destination. It ignores obstacles, so it usually hits a building or the Higashiyama hillside and falls. Raising "Straight-line height AGL" changes where it hits.

### 2. Course flight

The drone follows one of the planned routes A, B or C around the buildings and lands at the destination. Pick a flight condition with the four buttons under "4. Conditions":

| Condition | What happens |
|---|---|
| Calm, no payload | Basic flight |
| Strong wind, no payload | Mean wind, gusts and turbulence. By default the wind blows across the course |
| Calm, with payload | A box (2.5 kg by default) hangs from a rope (1.5 m by default). The drone sets it down at the destination, releases the hook and then lands |
| Strong wind, with payload | The hardest case. With the default thrust the drone may not make it |

The mission fails as soon as the payload hits a building or the ground hard (over 2.5 m/s), or stays snagged for more than 1 second.

### 3. Route planning

The app plans three routes around obstacles and compares their length, maximum height above ground, total climb and flight time in a table. The 3D view switches to an overview. Press **Fly** in the table to switch to "2. Course flight" with that route.

| Route | Strategy |
|---|---|
| A High, direct | About 80 m above ground, the shortest way over the buildings |
| B Low, along streets | At most 45 m above ground, over streets and rivers where possible |
| C Alternate corridor | Low, through different streets from route B |

All routes keep at least 5 m sideways and 8 m vertically from buildings, and stay below the 150 m legal ceiling (Japan Civil Aeronautics Act).

### 4. Auto-avoid

This scenario uses the cockpit view. A crane, a tethered balloon and another drone crossing the route are placed on the course. The drone detects them with its forward sensor, then avoids each one, checks that the way is clear and returns to the course on its own.

- A banner in the middle of the screen shows "⚠ Avoiding obstacle", "Checking clearance" or "Returning to course".
- In the sensor display at the bottom right, the x-axis is azimuth (−90° to +90°) and the y-axis is elevation. Red means a nearby obstacle, green means free space, and a white frame marks the chosen escape direction.
- Tick **Sensor rays** to see the rays in the 3D view.

### 5. Manual

Fly freely with the keyboard or a gamepad. Touching down within 15 m of the destination counts as arriving.

| Action | Keyboard | Gamepad (mode 2) |
|---|---|---|
| Forward / back | W / S | Right stick up / down |
| Left / right | A / D | Right stick left / right |
| Up / down | ↑ / ↓ | Left stick up / down |
| Turn | ← / → (or Q / E) | Left stick left / right |

- **Take off**: press ↑ (left stick up) to start the motors.
- **Stop**: after touching down, hold ↓ to stop the motors.

---

## 5. Conditions and parameters

These are the sliders under "4. Conditions". Which ones appear depends on the scenario.

| Setting | Range | Meaning |
|---|---|---|
| Cruise speed (max) | 3–15 m/s | Top speed of automatic flight (default 10) |
| Straight-line height AGL | 10–80 m | Height of the straight-line flight (default 20) |
| Mean wind | 0–18 m/s | Mean wind speed with strong wind (default 10) |
| Wind from | 16 directions | Direction the wind blows from |
| Gusts (extra) | 0–12 m/s | Strength of gusts lasting a few seconds (default 6) |
| Turbulence | 0–60 % | Small-scale fluctuations of the wind (default 30 %) |
| Payload mass | 0.5–4 kg | Weight of the hanging load (default 2.5; the drone itself is 1.8 kg) |
| Rope length | 0.5–4 m | Length of the rope (default 1.5) |
| Motor thrust | 8–25 N × 4 | Maximum thrust of each rotor (default 13) |
| Playback speed | ×1–×8 | Fast-forward. The physics always runs in 2 ms steps |

Checkboxes:

- **Disturbance observer (estimate & cancel wind)** estimates and cancels forces from wind and a swinging payload. Turn it off to see how much more the drone drifts.
- **Mass estimation (adapt to payload)** estimates the extra weight of a payload so the drone holds its height.

---

## 6. Camera and display

Switch cameras with the buttons under "Camera" or with the C key.

| Mode | View |
|---|---|
| Chase | Follows from behind the drone |
| Cockpit | Onboard view, with an attitude indicator (horizon, heading, speed, height) and the sensor display |
| Top | Looks straight down |
| Free | Rotate, zoom and pan with the mouse |

- **Place labels** shows or hides the 3D place tags.
- **Sensor rays** shows or hides the avoidance sensor rays.
- **Sound (rotors, impacts)** turns the rotor and impact sounds on or off; your choice is remembered. The rotor sound follows the thrust of the four motors, so it gets higher and louder when climbing, in gusts or with a payload. It fades as the camera moves away from the drone. Impacts sound louder at higher impact speeds. Sound starts after your first click or key press.

---

## 7. Keyboard shortcuts

| Key | Action |
|---|---|
| Enter | Start (or restart while flying) |
| P | Pause / resume |
| R | Reset |
| C | Switch camera |
| Esc | Close the map picker |

---

## 8. Results

A result window appears when the flight ends.

- **Arrived**: flight time, distance flown, landing error, maximum / RMS off-course distance, estimated energy used, and the payload and wind conditions.
- **Crashed / payload hit something**: what was hit, impact speed, flight time, distance flown, and the distance still left to the destination.

The drone crashes when it hits something at 2 m/s or more, or tilts beyond 69° while touching something. **Again** repeats the flight with the same settings.

---

## 9. Notes and limitations

- Collisions only exist inside the loaded area (start and destination plus 900 m). If you fly outside it in manual mode, you pass through buildings.
- The 3D view shows buildings within about 3 km of the camera. Farther buildings load as you approach.
- Buildings are modelled in 2.5D, as roof heights. There are no overhangs and no thin structures such as power lines.
- PLATEAU does not include the tower part of Kyoto Tower, so it is added as stacked cylinders.

### Troubleshooting

| Problem | What to do |
|---|---|
| Loading fails | Check that you ran `npm run data` (the app needs public/data) |
| The ground is a plain colour | Check your internet connection (aerial photos come from GSI Japan) |
| Strong wind with payload never makes it | The condition is beyond the drone's limits. Raise "Motor thrust" to about 18 N |
| The app is slow | Turn off "Place labels" or make the window smaller |

---

Sources: MLIT PLATEAU (Kyoto City 2025), GSI Japan (seamless aerial photos, DEM, standard map), © OpenStreetMap contributors / Physics: MuJoCo / Rendering: three.js
