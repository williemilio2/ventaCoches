
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

import { db } from "@/lib/db";

async function scrapeWallapop() {
  const isProd = process.env.VERCEL === "1";

  const browser = await puppeteer.launch({
    args: isProd ? chromium.args : [],
    executablePath: isProd
      ? await chromium.executablePath()
      : "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });

  const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
    );
    await page.setExtraHTTPHeaders({
  "accept-language": "es-ES,es;q=0.9",
});
  await page.goto(
    "https://es.wallapop.com/user/joseg-60513568",
    {
      waitUntil: "networkidle2",
    }
  );
    const bodyText = await page.evaluate(() => document.body.innerText);
    
    console.log(bodyText.substring(0, 100000));
  const cars = await page.evaluate(() => {
    const items = document.querySelectorAll(
      "li.public-profile-published-items_PublicProfileItems__card__07pW2"
    );

    return Array.from(items).map((item) => ({
      link: item.querySelector("a")?.href || null,
      title: item.querySelector("h3")?.innerText?.trim() || null,
      price: item.querySelector("strong")?.innerText?.trim() || null,
      image: item.querySelector("img")?.src || null,
      source: "wallapop",
    }));
  });

  await browser.close();

  return cars.filter((c) => c.title);
}

export async function GET() {
  try {
    const cars = await scrapeWallapop();

    await db.execute("DELETE FROM cars_temp");

    for (const car of cars) {
      await db.execute({
        sql: `
          INSERT INTO cars_temp
          (title, price, image, link, source)
          VALUES (?, ?, ?, ?, ?)
        `,
        args: [
          car.title,
          car.price,
          car.image,
          car.link,
          car.source,
        ],
      });
    }

    await db.execute("DELETE FROM cars");

    await db.execute(`
      INSERT INTO cars (title, price, image, link, source)
      SELECT title, price, image, link, source
      FROM cars_temp
    `);

    return Response.json({
      success: true,
      inserted: cars.length,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}