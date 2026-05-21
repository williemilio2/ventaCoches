import puppeteer from "puppeteer";

async function scrapeWallapop() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
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
      return {
        link: item.querySelector("a")?.href || null,
        title: item.querySelector("h3")?.innerText?.trim() || null,
        price: item.querySelector("strong")?.innerText?.trim() || null,
        image: item.querySelector("img")?.src || null,
        source: "wallapop",
      };
    });
  });

  await browser.close();

  return cars.filter((c) => c.title);
}

export async function GET() {
  try {
    console.log("Scrapeando Wallapop...");

    const cars = await scrapeWallapop();

    // 👇 aquí en Vercel NO guardamos en fs
    // opcional: mandar a DB (Supabase, Firebase, etc.)

    return Response.json({
      success: true,
      count: cars.length,
      cars,
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