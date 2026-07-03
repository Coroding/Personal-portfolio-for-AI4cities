# Mingqi Shu Portfolio

Theme: **From Messy Inputs to Useful Outputs**.

This is a static personal portfolio site. Open `index.html` directly, serve the folder locally, or deploy it with GitHub Pages.

## Local Preview

```bash
npm run serve
```

Then open:

```text
http://127.0.0.1:8765/
```

## Update Links And Project Text

Project links are in:

```text
assets/data/links.js
```

Project titles, tags, descriptions, preview images and evidence cards are in:

```text
assets/data/projects.js
```

## Capture Real Preview Images

Install dependencies first:

```bash
npm install
npx playwright install chromium
```

Then run:

```bash
npm run capture:previews
```

The script reads links from `assets/data/links.js` and saves screenshots to:

```text
public/previews/dont-just-save.png
public/previews/ruraltrip-ops-copilot.png
public/previews/storyalbum-geo.png
public/previews/project-evidence-coach.png
```

If a link fails, the script prints a warning and continues. If Playwright is not installed, the current placeholder preview images remain available.

## Manual Screenshot Replacement

If automatic capture is unavailable, place PNG screenshots at the same paths under `public/previews/`. Recommended size: `1440x900` or `1200x750`.
