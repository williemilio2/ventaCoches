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
      waitUntil: "domcontentloaded",
      timeout: 60000,
    }
  );

  await new Promise(resolve => setTimeout(resolve, 5000));

  const cars = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll("a"))
      .filter(a => a.href.includes("/item/"));

    return links.map(a => {
      const text = a.innerText
        ?.trim()
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

      return {
        link: a.href,
        price: text?.[1] || null,
        title: text?.[2] || null,
        image: a.querySelector("img")?.src || null,
        source: "wallapop",
      };
    });
  });

  console.log("COCHES ENCONTRADOS:", cars.length);
  console.log(JSON.stringify(cars, null, 2));

  await browser.close();

  return cars.filter(c => c.title);
}

export async function GET() {
  try {
    const cars = await scrapeWallapop();

    if (cars.length === 0) {
      throw new Error(
        "Wallapop no devolvió ningún coche. No se actualizará la base de datos."
      );
    }

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