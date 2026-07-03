const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const linksPath = path.join(root, "assets", "data", "links.js");
const outDir = path.join(root, "public", "previews");

const targets = [
  ["dontJustSave", "dont-just-save.png"],
  ["ruralTrip", "ruraltrip-ops-copilot.png"],
  ["storyAlbumGeo", "storyalbum-geo.png"],
  ["projectEvidenceCoach", "project-evidence-coach.png"]
];

function readLinks() {
  const sandbox = { window: {} };
  const code = fs.readFileSync(linksPath, "utf8");
  vm.runInNewContext(code, sandbox, { filename: linksPath });
  return sandbox.window.PORTFOLIO_LINKS || {};
}

async function main() {
  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch (error) {
    console.warn("[capture:previews] Playwright is not installed. Run `npm install` first.");
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });
  const links = readLinks();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

  for (const [key, filename] of targets) {
    const url = links[key];
    if (!url || url.startsWith("#")) {
      console.warn(`[capture:previews] Skip ${key}: missing external URL.`);
      continue;
    }
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForTimeout(1200);
      await page.screenshot({ path: path.join(outDir, filename), fullPage: false });
      console.log(`[capture:previews] Saved ${filename}`);
    } catch (error) {
      console.warn(`[capture:previews] Failed ${key}: ${error.message}`);
    }
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
