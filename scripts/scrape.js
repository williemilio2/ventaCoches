const fs = require("fs");
const puppeteer = require("puppeteer");

const OUTPUT_FILE = "./data/coches.json";

// ----------------------------
// SCRAPE WALLAPOP
// ----------------------------
async function scrapeWallapop() {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  const url =
    "https://es.wallapop.com/user/joseg-60513568";

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  // scroll para cargar productos
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 800;

      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });

  const cars = await page.evaluate(() => {
    const items = document.querySelectorAll(
      "li.public-profile-published-items_PublicProfileItems__card__07pW2"
    );

    return Array.from(items).map((item) => {
      const link = item.querySelector("a")?.href || null;

      const title =
        item.querySelector("h3")?.innerText?.trim() || null;

      const price =
        item.querySelector("strong")?.innerText?.trim() || null;

      const image =
        item.querySelector("img")?.src || null;

      return {
        title,
        price,
        image,
        link,
        source: "wallapop",
      };
    });
  });

  await browser.close();
  return cars.filter((c) => c.title);
}

// ----------------------------
// MAIN
// ----------------------------
(async () => {
  console.log("Scrapeando Wallapop...");

  const cars = await scrapeWallapop();

  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(cars, null, 2)
  );

  console.log(`OK → ${cars.length} coches guardados`);
})();