# Escape Drone — User Manual (English)

[日本語マニュアル](MANUAL.ja.md)

**Escape Drone** is a desktop and browser simulator that runs five quadrotors simultaneously in full 6-DOF rigid-body physics using **MuJoCo (WebAssembly)**.

An escaping drone **D0** flies a planned route from Point A to Point B while four interceptor drones **d1–d4** waiting ahead of B attempt to ram it mid-air using lead-pursuit guidance. All five crafts fly autonomously (AUTO) with no manual piloting. You can vary **wind speed, gusts, turbulence, unannounced payload mass, communication latency/noise, and obstacle perception modes (forward camera, real-time position sharing, or Kalman sensor fusion)** and export all trial results as CSV files.

Switch the entire interface between **Japanese and English** at any time with the button at the top right of the left panel (or press <kbd>L</kbd>).

---

## Contents

1. [Getting Started](#1-getting-started)
2. [Switching Language (日本語 / English)](#2-switching-language-日本語--english)
3. [Simulation Setup](#3-simulation-setup)
4. [Screen Layout](#4-screen-layout)
5. [Scenarios (8 Presets)](#5-scenarios-8-presets)
6. [Parameters in Detail](#6-parameters-in-detail)
7. [Perception Modes (4 Modes)](#7-perception-modes-4-modes)
8. [Controls & Keyboard Shortcuts](#8-controls--keyboard-shortcuts)
9. [Trial History & CSV Export](#9-trial-history--csv-export)
10. [Headless CLI Batch Runs](#10-headless-cli-batch-runs)
11. [How the Physics, Control & Evasion Work](#11-how-the-physics-control--evasion-work)
12. [Limitations & Troubleshooting](#12-limitations--troubleshooting)

---

## 1. Getting Started

Escape Drone runs completely offline — no internet connection or external account is required.

| Edition | How to start |
| :--- | :--- |
| **macOS Desktop (.dmg)** | Open `EscapeDrone_1.0.0_aarch64.dmg`, drag `EscapeDrone` into your **Applications** folder, and launch it. On first launch, if macOS shows an unverified-developer prompt, **right-click (Control-click) the app icon in Finder and choose "Open"**. |
| **Browser / Dev** | In the `escape_drone` directory, run `npm install` (first time) followed by `npm run dev`, then open `http://localhost:5173`. Production static files can be built into `dist/` with `npm run build`. |

---

## 2. Switching Language (日本語 / English)

- Click the **"EN" / "日本語" button** at the top right of the left panel to switch the entire interface immediately.
- Or press <kbd>L</kbd> on the keyboard.
- Your language preference is saved in local storage and restored on future launches.
- In a browser, you can also pass `?lang=en` or `?lang=ja` in the URL.

Everything updates immediately: panel headings, scenario preset names and descriptions, parameter labels and dropdown options, camera buttons, HUD status, live telemetry table and metrics, event log entries, 3D scene pad labels (`A Start` / `B Target`), the end-of-trial summary modal, and exported CSV headers and values.

---

## 3. Simulation Setup

### Field Layout

Top-down view of the arena (`x` = East, `y` = North, in meters):

```
            C1(95,55)        C3(165,40)
 A(-220,0) ──── Route (25 m altitude) ──────── B(220,0)
                     C2(125,-55)     C4(185,-35)
```

| Point | Description |
|---|---|
| **A (Start)** | D0's departure pad. D0 climbs straight up to 25 m altitude before entering the route |
| **B (Target)** | Destination pad. Surrounded by a **15 m radius safe zone**; once D0 enters this circle, all interceptors break off their attack |
| **Route** | Polyline `A(-220, 0)` → `(-110, 45)` → `(20, -35)` → `(130, 10)` → `B(220, 0)` at 25 m altitude |
| **C1–C4** | Interceptor loiter posts ahead of B. Nominal waiting altitudes: C1 22 m, C2 30 m, C3 18 m, C4 26 m (±5 m per random seed) |

### Aircraft Specifications

| Craft | Specification |
|---|---|
| **D0 (White / Blue)** | 1.84 kg airframe mass, 13 N max thrust per rotor (thrust-to-weight ratio ~2.9) |
| **d1–d4 (Red)** | Same airframe fitted with propeller guards (wider collision radius), 15 N max thrust per rotor |

### Rules

- **Drone-to-drone contact**: If any two drones touch in mid-air, **both crash immediately** regardless of relative speed (interceptors can also collide with each other).
- **Ground impact**: Hitting the ground at > 2 m/s vertical/normal speed or with excessive tilt causes a crash.
- **Mission Succeeded**: D0 reaches the B safe zone and lands on pad B.
- **Mission Failed**: D0 crashes, or fails to land within 180 seconds.

Interceptors are assumed to receive D0's position from ground radar at all times. As soon as D0 enters an interceptor's trigger distance (default 110 m), that interceptor dives toward the predicted intercept point.

---

## 4. Screen Layout

| Area | Contents |
|---|---|
| **Left Panel** | 1. Scenarios, 2. Parameters, Start / Pause / Reset buttons, Playback speed (`×0.25`–`×4`), Camera mode, 3D overlay checkboxes, Trial History & CSV export, Language switch (`EN` / `日本語`) |
| **Top Center (HUD)** | Elapsed mission time `T+...s`, active scenario name, and live state (`Evading — d2`, `Interceptor Approaching`, `Mission Succeeded`, etc.) |
| **Top Right (Telemetry)** | Per-craft status table (`D0`, `d1`–`d4`) and key-value metrics for perception, clearance, closest pass, mass estimation, wind, and downed interceptors |
| **Bottom Right (Minimap)** | Top-down tactical map showing the route, pads A/B/C1–C4, live drone positions, D0's estimated tracks, and camera FOV wedge |
| **Bottom Left (Event Log)** | Timestamped feed of attack launches, near-miss evasions, mid-air collisions, crashes, safe-zone arrival, and CSV save notifications |

### Telemetry Table & Metrics

The upper table lists **Status, Alt (m), Spd (m/s), and Dist (m)** for every craft. For `D0`, `Dist` is the horizontal distance remaining to `B`; for `d1–d4`, `Dist` is the 3D distance to `D0`.

| State | D0 | d1–d4 |
|---|---|---|
| On ground | `Standby` | `Ground` |
| Airborne | `Takeoff` → `Cruise` (`Evading` during evasion) → `Over B` → `Landing` → `Landed` | `Climb` → `Loiter` → `Attack` → `RTB` |
| Down | `Crashed` | `Crashed` |

Key-value metrics below the table:

| Metric | Meaning |
|---|---|
| **D0 Perception** | Active perception mode, number of tracked interceptors, and number currently visible / received |
| **Planned Clearance** | Minimum separation predicted by D0's velocity planner over the look-ahead horizon |
| **Closest Pass** | Closest approach distance recorded so far and which interceptor achieved it |
| **D0 Mass Est.** | Online mass estimated in flight by D0's controller vs. true total mass |
| **Wind (at D0)** | Instantaneous wind speed at D0's position (`Gust` indicator during gusts) |
| **Interceptors Down** | Number of interceptors that have crashed (`/ 4`) |

### 3D Overlays

Toggle overlays in the **Camera** section of the left panel:

| Overlay | Meaning |
|---|---|
| **Flight trails** | Blue trail = D0, Red trails = interceptors d1–d4 |
| **D0 perception (tracks & FOV)** | **Yellow wireframe spheres** = D0's estimated interceptor positions (radius = safe distance; orange = primary threat; faint = coasting on prediction). **Yellow sector** = forward camera field of view and detection range. **Arrow** = D0's commanded velocity (green = cruising along route, orange = evading) |
| **Interceptor aim lines** | Dashed red line from each attacking interceptor to its predicted lead-pursuit intercept point |

---

## 5. Scenarios (8 Presets)

Select a preset under **1. Scenarios** to load a complete test configuration (preserving your current random seed):

| Scenario | Perception Mode | Conditions |
|---|---|---|
| **Real-Time Share** | Real-Time (ideal) | Calm wind, standard airframe mass |
| **Visual Only** | Visual | Calm wind, standard airframe. Forward camera only (120° FOV, 70 m range) |
| **Strong Wind** | Real-Time (ideal) | 9 m/s NW wind + 5 m/s gusts + 0.25 turbulence |
| **Heavy Craft** | Real-Time (ideal) | +1.5 kg unannounced extra mass on D0 |
| **Hard: Visual** | Visual | 8 m/s SSW wind + 4 m/s gusts + 0.25 turbulence + 1.2 kg extra mass on D0 |
| **Hard: Real-Time** | Real-Time (realistic) | Same harsh environment; position sharing degraded to 1 Hz, 0.5 s latency, 3 m error, 10% packet loss |
| **Hard: Sensor Fusion** | Visual + Real-Time | Same harsh environment & realistic link, fusing shared positions with the forward camera |
| **No Evasion (Baseline)** | No Evasion | Calm wind, standard craft; D0 ignores interceptors for baseline comparison |

The three **Hard** scenarios use identical wind and payload settings while varying only the perception architecture, making it easy to compare **Visual Only vs. Realistic Broadcast vs. Sensor Fusion**.

---

## 6. Parameters in Detail

Adjusting any parameter under **2. Parameters** immediately resets the mission with the new setting.

### D0 (Escaping Drone)

| Parameter | Range | Default | Description |
|---|---|---|---|
| **Obstacle Perception** | — | Real-Time | See Section 7 |
| **Cruise Speed** | 5–15 m/s | 10 | Nominal speed along the route |
| **Max Evade Speed** | 6–20 m/s | 14 | Maximum speed D0 may command during evasion |
| **Extra Mass (Heavy)** | 0–3 kg | 0 | Unannounced payload added to D0. The controller estimates total mass online from vertical acceleration |
| **Safe Distance** | 1–8 m | 3 | Target clearance radius around each interceptor |
| **Camera FOV** | 40–360° | 120 | Horizontal field of view of the forward camera (vertical FOV is fixed at ±35°) |
| **Visual Range** | 20–150 m | 70 | Maximum detection range of the forward camera |

### Real-Time Position Share (Real-Time / Fusion)

| Parameter | Range | Default | Description |
|---|---|---|---|
| **Broadcast Rate** | 0.5–20 Hz | 20 | How often interceptor position reports arrive |
| **Comms Latency** | 0–2 s | 0 | Age of each received position report |
| **Position Error** | 0–10 m | 0 | 1σ Gaussian position noise (e.g. GNSS inaccuracy) |
| **Packet Loss** | 0–90 % | 0 | Probability that an individual broadcast packet is dropped |

### d1–d4 (Interceptors)

| Parameter | Range | Default | Description |
|---|---|---|---|
| **Attack Speed** | 6–20 m/s | 12 | Ramming speed during attack (±0.8 m/s per seed) |
| **Trigger Distance** | 30–250 m | 110 | Distance to D0 at which each interceptor launches its attack (±15 m per seed) |
| **Extra Mass** | 0–3 kg | 0 | Extra payload on each interceptor |
| **Mutual Avoidance** | On / Off | On | Interceptors within 6 m of each other repel to avoid mid-air friendly fire |

### Environment

| Parameter | Range | Default | Description |
|---|---|---|---|
| **Wind Speed** | 0–15 m/s | 0 | Mean wind speed at 60 m reference height (logarithmic profile near ground) |
| **Wind Direction (From)** | 0–359° | N | Compass direction the wind blows **from** |
| **Wind Gust** | 0–10 m/s | 0 | Peak extra wind speed during intermittent multi-second gusts |
| **Turbulence** | 0–0.6 | 0 | Colored (Ornstein-Uhlenbeck) turbulence intensity relative to mean wind |
| **Random Seed** | 1–50 | 1 | Controls wind turbulence/gust timing, sensor noise, and interceptor variations. Identical seed + parameters always produce identical results |

---

## 7. Perception Modes (4 Modes)

### 1. Real-Time Position Share (`realtime`)

D0 receives omnidirectional position and velocity reports for all interceptors (e.g., via Remote ID, UTM, or ground radar).
- Under default ideal settings, true states are known every frame.
- When latency, low update rate, noise, or packet loss are configured, an alpha-beta / Kalman tracker extrapolates interceptor trajectories between updates.

### 2. Visual (`visual`)

D0 detects **only interceptors inside its forward camera frustum**.
- Interceptors outside the horizontal FOV (default 120°) or beyond `Visual Range` (default 70 m) are invisible. Detection probability decreases with distance.
- Bearing is accurate, but range estimated from apparent size carries ~6% noise and 0.1 s latency.
- A Kalman filter estimates 3D position and velocity and coasts for up to 4 s if a target leaves the FOV. Higher position uncertainty automatically inflates the effective safety margin.
- When no threat is tracked, D0 pans its camera left and right to scan; once a threat is found, the camera slews toward the highest-priority threat.

### 3. Visual + Real-Time Fusion (`fusion`)

Fuses radio broadcasts and forward-camera detections in a single Kalman filter:
- Distant or blind-spot interceptors are picked up early via radio broadcasts, cueing the camera toward them.
- As an interceptor closes in, low-latency camera measurements sharpen the track for precise last-second evasion.

### 4. No Evasion (`none`)

D0 flies the route ignoring all interceptors. Useful as an experimental baseline.

---

## 8. Controls & Keyboard Shortcuts

| Button / Key | Action |
|---|---|
| **▶ Start** / <kbd>Space</kbd> | Launch all drones in AUTO mode (becomes **▶ Restart** once running) |
| **Ⅱ** / <kbd>Space</kbd> | Pause / Resume simulation |
| **↺ Reset** / <kbd>R</kbd> | Reset mission to initial ground state |
| **Playback Speed** | `×0.25` / `×0.5` / `×1` / `×2` / `×4` (use `×0.25` or `×0.5` to inspect close passes) |
| **Camera** / <kbd>C</kbd> | Cycle through **Chase** (behind D0), **Interceptor** (behind closest attacker), **Orbit** (free mouse orbit around D0), and **Overview** (full arena) |
| **EN / 日本語** / <kbd>L</kbd> | Toggle interface language between English and Japanese |

---

## 9. Trial History & CSV Export

Every completed trial is automatically appended to the **Trial History** list in the left panel (persisted in `localStorage`).

- Click **Save CSV** (in the left panel or in the end-of-mission modal) to export all recorded trials as a UTF-8 BOM CSV file (`escape_drone_trials_YYYYMMDD_HHMMSS.csv`, 36 columns).
- In the **macOS Desktop App**, clicking **Save CSV** writes the file directly to your macOS **`Downloads` (`~/Downloads`)** folder and logs the full saved path in the bottom-left event log.

---

## 10. Headless CLI Batch Runs

When working with the source repository, you can run fast headless batch experiments in Node.js:

```sh
cd escape_drone
node tools/sim-test.ts                       # All presets × seeds 1–3
node tools/sim-test.ts all 10                # All presets × seeds 1–10
node tools/sim-test.ts hardfusion 20         # Single preset across 20 seeds
node tools/sim-test.ts all 10 --csv out.csv  # Write results to CSV
V=1 node tools/sim-test.ts visual 2          # Print event logs
```

---

## 11. How the Physics, Control & Evasion Work

- **MuJoCo Physics (`src/sim.ts`)**: All 5 quadrotors are stepped at **2 ms (500 Hz)** in a single MuJoCo model with first-order rotor thrust lag (`0.035 s`), quadratic airframe drag + linear rotor drag against the local wind vector, and exact MuJoCo geom contact detection.
- **Geometric SE(3) Control + DOB + Mass Estimation**: Each drone runs a geometric attitude/position controller (Lee et al.) augmented with a horizontal **Disturbance Observer (DOB)** that estimates and cancels wind forces, plus an **online mass estimator** that learns unannounced payload weight from vertical thrust vs. acceleration.
- **Predictive Velocity-Space Evasion (`src/pilot.ts`)**: At 20 Hz, when any tracked interceptor is within 90 m, D0 samples candidate 3D velocities (24 azimuths × 4 speeds × 3 vertical rates) and forward-simulates 3.0 s of both D0's motion and the interceptors' lead-pursuit response, selecting the velocity that minimizes collision risk, route deviation, ground proximity, and control jerk.

---

## 12. Limitations & Troubleshooting

- **Simulation disclaimer**: Aerodynamic and sensor models are simplified for interactive experimentation and do not guarantee real-world flight safety.
- **macOS Gatekeeper prompt**: On first launch, right-click (Control-click) `EscapeDrone.app` in Finder and select **Open**.
- **Performance**: If frame rate drops, lower playback speed to `×1` or uncheck **Flight trails**.
