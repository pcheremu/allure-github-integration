import puppeteer from 'puppeteer';

describe("test", () => {
  it('Test run settings', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'test_puppeteer/artifacts/example.png' });
    await browser.close();
  }, 15000);
});
