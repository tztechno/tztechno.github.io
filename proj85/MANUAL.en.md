# Show Drone — User Manual (English)

[日本語マニュアル](MANUAL.ja.md)

**Show Drone** is a desktop and browser simulator that runs a 100-quadrotor drone light show in full rigid-body physics using **MuJoCo (WebAssembly)**.

All 100 drones start in a 10 × 10 grid on the ground, take off together, form **Formation A** in the sky, morph into **Formation B**, and return to the ground to land — all under autonomous onboard control (AUTO). You can inject strong winds, turbulence, degraded communications, random slot assignments, and mid-air power failures to observe how **shared-position broadcasting, Reciprocal Velocity Obstacles (RVO) collision avoidance, and ballistic wreck dodging** keep the swarm safe, inspect the show from any 3D viewpoint, and export full CSV logs.

Switch the entire interface between **Japanese and English** at any time with the button at the top right of the left panel (or press <kbd>L</kbd>).

---

## Contents

1. [Getting Started](#1-getting-started)
2. [Switching Language (日本語 / English)](#2-switching-language-日本語--english)
3. [Show Schedule & 12 Formations](#3-show-schedule--12-formations)
4. [Screen Layout](#4-screen-layout)
5. [Presets (8 Scenarios)](#5-presets-8-scenarios)
6. [Parameters in Detail](#6-parameters-in-detail)
7. [Cameras & Display Options](#7-cameras--display-options)
8. [Run History & CSV Export](#8-run-history--csv-export)
9. [How the Physics, Assignment & Avoidance Work](#9-how-the-physics-assignment--avoidance-work)
10. [Headless CLI Batch Runs](#10-headless-cli-batch-runs)
11. [Keyboard Shortcuts](#11-keyboard-shortcuts)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Getting Started

Show Drone runs completely offline — no internet connection or account is required.

| Edition | How to start |
| :--- | :--- |
| **macOS Desktop (.dmg)** | Open `ShowDrone_1.0.0_aarch64.dmg`, drag `ShowDrone` into your **Applications** folder, and launch it. On first launch, if macOS shows an unverified-developer prompt, **right-click (Control-click) the app icon in Finder and choose "Open"**. |
| **Browser / Dev** | In the `show_drone` directory, run `npm install` (first time) followed by `npm run dev`, then open `http://localhost:5173`. |

---

## 2. Switching Language (日本語 / English)

- Click the **"EN" / "日本語" button** at the top right of the left panel to switch the entire interface immediately.
- Or press <kbd>L</kbd> on the keyboard.
- Your language preference is saved in local storage and restored on future launches.
- In a browser, you can also pass `?lang=en` or `?lang=ja` in the URL.

Everything updates on the fly: panel headings, preset names and descriptions, formation names, parameter labels and tooltips, camera buttons, HUD, live telemetry, event log entries, 3D scene labels ("Audience" stand and mid-air collision tags), the end-of-show summary dialog, and exported CSV column headers.

---

## 3. Show Schedule & 12 Formations

### The 7 Phases of a Show

1. **Standby (`pad`)**: 100 drones sit parked on a 10 × 10 grid of ground pads.
2. **Takeoff (`takeoff`)**: All drones climb straight up to the staging altitude (`6 m`).
3. **To Form A (`toA`)**: Drones fly along minimum-jerk trajectories to their assigned slots in Formation A.
4. **Form A (`holdA`)**: Drones hold Formation A for the configured hold duration (optionally rotating around the vertical axis).
5. **To Form B (`toB`)**: Drones morph directly from Formation A into Formation B.
6. **Form B (`holdB`)**: Drones hold Formation B for the configured hold duration.
7. **Return & Land (`return` / `land`)**: Surviving drones return to `6 m` above free ground pads (avoiding pads where a crashed wreck lies), descend gently, and disarm upon touchdown.

### 12 Built-In Formations

Pick any combination of Formation A and Formation B (or click **🎲 Random**):

| Formation | Description |
| :--- | :--- |
| **Horizontal Grid** (`grid`) | 10 × 10 rainbow-gradient horizontal grid in the sky |
| **Sphere** (`sphere`) | 3D Fibonacci sphere with even spacing across the surface |
| **Heart** (`heart`) | Double-outlined vertical heart facing the audience (red & pink) |
| **Star** (`star`) | Double five-pointed vertical star facing the audience (gold & amber) |
| **Double Helix** (`helix`) | Intertwined cyan and magenta 3D DNA double helix |
| **Saturn** (`saturn`) | 3D planet with tilted double rings |
| **Text "N85"** (`text`) | Vertical neon "N85" lettering facing the audience |
| **Wave** (`wave`) | 3D sinusoidal wave surface |
| **Cube** (`cube`) | Hollow 3D RGB cube |
| **Smile** (`smile`) | Vertical smiley face facing the audience |
| **Mt. Fuji & Sun** (`fuji`) | Snow-capped blue Mt. Fuji with a red sun |
| **Triple Rings** (`rings`) | Three vertical rings (red, green, blue) intersecting at 60° angles |

---

## 4. Screen Layout

| Area | Contents |
| :--- | :--- |
| **Left Panel** | 1. Presets, 2. Formation previews (front X-Z projection and dimensions of A & B), 3. Parameters, Start / Pause / Reset buttons, Playback speed (`×0.5`–`×8`), Camera modes, Display toggles, Run History & CSV export |
| **Top Center (HUD)** | Elapsed time `T+...s`, active preset name, current phase and progress bar |
| **Top Right (Telemetry)** | Live counters for **Flying / Landed / Crashed** drones, Formations A → B, RMS slot-tracking error, currently avoiding drones (and cumulative drone-seconds), closest approach distance & pair, mid-air collisions (and chain crashes caused by falling wrecks), power failures, wind speed at formation altitude, online mass estimate vs. true mass, followed drone (`#0`–`#99`) status, and the phase progress strip |
| **Bottom Left (Event Log)** | Timestamped feed of phase transitions, mid-air collisions, power losses, wreck chain crashes, and CSV save confirmations |
| **Center Modal (Summary)** | Appears ~1.5 s after the show ends with a full breakdown and one-click buttons to export **Runs CSV** and **Track CSV** |

---

## 5. Presets (8 Scenarios)

Click any preset under **1. Presets** to load a curated test scenario (keeping your current random seed):

| Preset | What it demonstrates |
| :--- | :--- |
| **Standard** | Calm wind, optimal assignment, collision avoidance on (Sphere → Heart). Non-crossing paths; all 100 drones complete the show cleanly. |
| **Strong Wind** | 8 m/s mean west wind + 4 m/s gusts + 0.3 turbulence. The disturbance observer tilts the drones into the wind while RVO keeps safe spacing. |
| **Degraded Comms** | Position broadcasts drop to 2 Hz with 0.5 s latency, 1 m position noise, and 20% packet loss in 4 m/s wind. Tests avoidance under uncertain neighbour beliefs. |
| **Random Assign** | Assigns formation slots at random (Horizontal Grid → Double Helix). Paths cross everywhere in 3D space, triggering heavy RVO collision avoidance (highlighted in orange). |
| **Random + No Avoid** | Same random crossing paths with collision avoidance turned off — baseline comparison showing mid-air collisions and tumbling wrecks. |
| **Fast & Tight** | Top speed 12 m/s, max accel 5 m/s², tight 1.8 m spacing, and rotation enabled (Cube → Saturn). |
| **Power Failures** | 5 drones lose power mid-flight and fall freely. With **Dodge Falling Wrecks** on, drones below predict the ballistic fall column and move out of the way. Turn it off to compare chain crashes. |
| **Heavy + Wind** | +0.25 kg unknown payload per drone (~55% heavier than the 0.45 kg airframe) in 6 m/s wind. Each controller estimates the extra mass online after takeoff. |

---

## 6. Parameters in Detail

Changing any parameter resets the show immediately with the new setting.

### Program
- **Formation A / Formation B**: Select from the 12 shapes.
- **Hold Time** (`2`–`30` s, default `8` s): How long each formation is held.
- **Rotate in Hold** (default Off): Rotates the formation about the vertical axis while holding (half a turn for 3D solids, a full turn for flat 2D shapes so they end facing the audience). Hold duration is automatically extended if needed so rim speed stays $\le 4\text{ m/s}$ and centripetal acceleration stays $\le 60\%$ of max acceleration.
- **Center Altitude** (`20`–`100` m, default `40` m): Target altitude of the formation center (automatically raised if needed to keep the bottom at least `12 m` above the ground).
- **Form Spacing** (`1.5`–`6.0` m, default `2.5` m): Typical nearest-neighbour spacing inside formations.
- **Pad Spacing** (`1.2`–`5.0` m, default `2.5` m): Pitch of the 10 × 10 launch/landing grid on the ground.

### Motion
- **Max Speed** (`2`–`14` m/s, default `6` m/s) & **Max Accel** (`1`–`8` m/s², default `2.5` m/s²): Limits used to size the minimum-jerk transition duration.
- **Slot Assignment**:
  - **Optimal (non-crossing)**: Hungarian algorithm minimising total squared distance (CAPT).
  - **Random (crossing paths)**: Shuffled assignment that forces trajectories to cross.

### Collision Avoidance (Shared Positions)
- **Collision Avoidance** (default On): Enables sampled Reciprocal Velocity Obstacles (RVO).
- **Dodge Falling Wrecks** (default On): When a drone crashes or loses power, it sends a final Mayday packet; other drones predict its parabolic free-fall trajectory and clear a vertical column of $1.5 \times \text{Safe Distance}$ around it.
- **Safe Distance** (`0.5`–`3.0` m, default `1.2` m): Desired center-to-center clearance maintained by avoidance (physical rotor-hull radius is `0.19 m`, so contact occurs at `0.38 m` center-to-center).
- **Sense Range** (`3`–`30` m, default `12` m): Neighbours beyond this distance are ignored by local avoidance.
- **Broadcast Rate** (`1`–`50` Hz, default `10` Hz), **Comms Latency** (`0`–`1.0` s, default `0.1` s), **Position Error** (`0`–`3.0` m, default `0.1` m), **Packet Loss** (`0`–`80` %, default `0` %): Network quality parameters for shared position broadcasts.
- **Power Failures** (`0`–`20`, default `0`): Number of drones that suffer sudden motor cutoff mid-show.

### Craft & Environment
- **Extra Payload** (`0`–`0.5` kg, default `0` kg): Unannounced mass added to every 0.45 kg quadrotor; estimated online from thrust vs. vertical acceleration.
- **Max Rotor Thrust** (`2.0`–`5.0` N, default `3.0` N): Peak thrust per rotor (4 rotors per craft).
- **Wind Speed** (`0`–`14` m/s), **Wind Direction** (8 compass points, direction wind blows *from*), **Wind Gust** (`0`–`8` m/s), **Turbulence** (`0`–`0.6`): Log-profile mean wind + shared and per-drone Ornstein-Uhlenbeck turbulence eddies + intermittent gusts.
- **Random Seed** (`1`–`50`, default `1`): Deterministic seed for wind turbulence, network noise, random assignment, and failure timing.

---

## 7. Cameras & Display Options

### 5 Camera Modes + Free Orbit
- **Audience**: View from the spectator stand on the south side (`y = -130 m`).
- **Aerial**: Oblique overview of the entire field and sky.
- **Top**: Straight-down orthographic-like perspective ideal for inspecting path crossings.
- **Side**: Profile view from the east showing altitude layering and falling wrecks.
- **Follow**: Tracks drone `#0`–`#99`. **Click any drone directly in the 3D view** to lock the camera onto it.

In any camera mode, use **Left-drag** to orbit, **Right-drag** to pan, **Wheel** to zoom, or check **Auto-orbit**.

### Display Checkboxes
- **Night sky**: Uncheck for a bright daytime sky and green grass field.
- **Light trails**: Renders a 3.6-second glowing ribbon behind each drone (and fiery orange trails behind falling wrecks).
- **Target slots**: Shows the planned reference position of each drone as a small dot so you can see wind or avoidance offsets.
- **Highlight avoidance**: Surrounds drones actively executing an RVO dodge with an orange halo.

---

## 8. Run History & CSV Export

Every completed show is automatically appended to **Run History** at the bottom of the left panel and persisted in local storage.

- **Runs CSV**: Exports all recorded runs (1 row per run, 47 columns covering all parameters, outcome, duration, landed/crashed counts, mid-air collisions, chain crashes, closest approach distance & pair, formation A/B RMS & max errors, avoidance count & drone-seconds, and crashed drone IDs).
- **Track CSV**: Exports the full 0.2-second trajectory log of all 100 drones from the most recent run (~40,000 rows: time, phase, drone ID, state, position, velocity, reference position, tracking error, and avoidance flag).

> **Where files are saved**: In the macOS desktop app (`.dmg`), CSV files are written directly to your **Downloads** folder and the full file path is shown in the bottom-left event log. In a browser, standard file downloads are triggered. All CSV files include a UTF-8 BOM so they open cleanly in Microsoft Excel.

---

## 9. How the Physics, Assignment & Avoidance Work

1. **MuJoCo Rigid-Body Physics & Controller (`src/sim.ts`)**:
   - Each of the 100 quadrotors is a 6-DOF rigid body stepped at `4 ms` (250 Hz) with first-order motor lag (`0.03 s`), quadratic airframe drag, linear rotor drag, and wind forces.
   - Each drone runs a geometric SE(3) position & attitude controller (Lee et al.) augmented with an online **mass estimator** and a horizontal **disturbance observer (DOB)**.
   - Any contact between two drones' rotor-envelope cylinders (`0.19 m` radius) breaks their props and sends both tumbling to the ground.
2. **Optimal Non-Crossing Slot Assignment (`src/assign.ts`)**:
   - Formation transitions solve the linear assignment problem via the **Hungarian algorithm** (`O(n^3)`) with squared Euclidean distance as cost. Combined with a shared minimum-jerk time law $s(\tau) = 10\tau^3 - 15\tau^4 + 6\tau^5$, trajectories are guaranteed not to cross (CAPT, Turpin et al., 2014).
3. **Broadcast Network & Sampled RVO Avoidance (`src/show.ts`)**:
   - Drones broadcast position and velocity at `netRate`. Receivers extrapolate neighbour positions across `netLatency` and packet drops.
   - At 50 Hz, if a drone's preferred velocity (planned velocity + exponential return toward the reference path) predicts a clearance violation within `2.5 s`, it evaluates ~80 candidate velocities across 26 3D directions and 3 speed magnitudes, minimising deviation from plan + chattering penalty + right-hand rule bias + time-to-conflict risk under the Reciprocal Velocity Obstacle assumption.
4. **Ballistic Wreck Dodging**:
   - When a failing drone broadcasts a final Mayday, neighbours propagate its parabolic free fall under gravity $g = 9.81\text{ m/s}^2$ up to `3.0 s` ahead and take 100% of the evasion responsibility with a $1.5 \times \text{Safe Distance}$ horizontal cylinder margin.

---

## 10. Headless CLI Batch Runs

You can run fast headless batch simulations from Node.js inside `show_drone/`:

```sh
# Run the standard preset with seed 1
npm run test:sim

# Run all 8 presets across 3 seeds (24 runs) and save summary to runs.csv
node tools/sim-test.ts all 3 --csv runs.csv

# Run preset "fail" with seed 1, print event log (V=1), and save trajectories to track.csv
V=1 node tools/sim-test.ts fail 1 --track track.csv
```

---

## 11. Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Start / Pause / Resume show |
| <kbd>R</kbd> | Reset show |
| <kbd>C</kbd> | Cycle camera mode (Audience → Aerial → Top → Side → Follow) |
| <kbd>[</kbd> / <kbd>]</kbd> | Previous / next drone ID while in Follow camera mode |
| <kbd>L</kbd> | Toggle interface language (日本語 ↔ English) |

---

## 12. Troubleshooting

- **macOS says "ShowDrone cannot be opened because the developer cannot be verified"**:
  - In Finder, **right-click (or Control-click) the `ShowDrone` app icon and select "Open"**, then confirm in the dialog. Subsequent launches work normally with a double-click.
- **Frame rate drops at high playback speeds**:
  - Lower playback speed to `×1` or `×2`, or uncheck **Light trails** to reduce GPU line-segment updates.
- **Drones don't collide even under "Random Assign"**:
  - **Collision Avoidance** is enabled by default and actively steers drones around crossing paths. Choose the **Random + No Avoid** preset or uncheck **Collision Avoidance** to observe unmitigated mid-air collisions.
