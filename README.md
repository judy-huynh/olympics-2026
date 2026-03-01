# Where Champions Come From — Milano-Cortina 2026

An interactive 3D globe visualization mapping every Winter Olympic medalist to their hometown.

**[Live Demo →](#)** *(replace with your deployed URL)*

![Preview](https://img.shields.io/badge/status-live-brightgreen) ![Mapbox GL](https://img.shields.io/badge/Mapbox_GL-v3.3.0-blue) ![License](https://img.shields.io/badge/license-All_Rights_Reserved-red)

## About

Built for the closing ceremony of the 2026 Milano-Cortina Winter Olympics, this project answers a simple question: *where do Olympic champions actually come from?*

Every medal winner is plotted on a 3D interactive globe at their hometown coordinates, with arc lines connecting each hometown to the host city of Cortina d'Ampezzo. The result is a visual story about geography, identity, and athletic excellence — from Klæbo's six golds in Trondheim to Brazil's first-ever Winter Olympic medal, to Eileen Gu competing for China while her dot sits in San Francisco.

## Features

- **Interactive 3D Globe** — Mapbox GL globe projection with auto-rotation, fog, and starfield
- **331 Athlete-Medal Entries** — Every medalist across 116 events and 29 nations
- **Arc Visualizations** — Animated arc lines from hometowns to Cortina, color-coded by Olympic ring
- **Grouped Medal Dots** — Hometown points sized by medal count with smart grouping for multi-medalists
- **10 Story Spotlights** — Curated narrative carousel highlighting the Games' most compelling stories
- **Country Navigation** — Click any of the 29 country pills to fly to a curated country-level view
- **Athlete Detail Cards** — Click any dot to see athlete names, events, medal types, and hometowns
- **Fully Responsive** — Optimized layouts for desktop, tablet, and mobile

## Data Source

Medal data was scraped from the official [Olympics.com Milano-Cortina 2026 medal page](https://www.olympics.com/en/milano-cortina-2026/medals) and transformed into structured JSON. Hometown coordinates were geocoded and verified manually. Athletes who compete for a different country than their hometown (e.g., Eileen Gu, Lucas Braathen, Kaillie Humphries) are flagged with a `hometownCountry` field.

## Tech Stack

- **Mapbox GL JS v3.3.0** — 3D globe rendering, vector tiles, fly-to animations
- **Vanilla JavaScript** — No frameworks, no build step, no dependencies
- **CSS Custom Properties** — Design token system for Olympic and medal palettes
- **Google Fonts** — Space Grotesk (UI) + Instrument Serif (editorial headlines)

## Project Structure

```
├── index.html                 # HTML shell — markup only
├── styles.css                 # All styles, responsive breakpoints
├── scripts.js                 # Application logic, data, and map layers
├── olympic-rings.svg          # Olympic rings graphic asset
├── olympic_medalists_2026.js  # Original data file (reference)
└── README.md
```

## Getting Started

No build step required — just serve the files:

```bash
# Using Python
python3 -m http.server 8000

# Using Node
npx serve .

# Or just open index.html in a browser
```

> **Note:** You'll need a Mapbox access token. The project includes one, but for production use you should replace it with your own at [mapbox.com](https://www.mapbox.com/).

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` | Navigate story spotlights |
| `Esc` | Close athlete card and reset view |
| Scroll | Zoom in/out (after entering map) |

## Credits

**Design & Development:** Judy Huynh
**Data Source:** [Olympics.com](https://www.olympics.com/en/milano-cortina-2026/medals)
**Map Tiles:** [Mapbox](https://www.mapbox.com/)

---

© 2026 Judy Huynh. All rights reserved.
