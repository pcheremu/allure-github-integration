import puppeteer from 'puppeteer';

describe("test", () => {
  it('Test run settings', async () => {
    const browser = await puppeteer.launch(
      {
        headless: false,
        slowMo: 5,
        args: [
          `--no-sandbox`,
          `--disable-setuid-sandbox`,
        ],
      }
    );
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'test_puppeteer/artifacts/example.png' });
    await browser.close();
  }, 15000);
});
