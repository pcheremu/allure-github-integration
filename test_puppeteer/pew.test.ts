import puppeteer from 'puppeteer';

describe("test", () => {
  it('Test run settings', async () => {
    const browser = await puppeteer.launch(
      {
        headless: false,
        slowMo: 5,
        args: [
          //'--start-maximized',
          `--no-sandbox`,
          `--disable-setuid-sandbox`,
          `--window-size=1920,1080`
        ],
      }
    );
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'test_puppeteer/artifacts/example.png' });
    await browser.close();
  }, 15000);
});
