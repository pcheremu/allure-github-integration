import puppeteer from 'puppeteer';

beforeEach(() => {
  allure.step("Step inside before each", () => {});
});

afterEach(() => {
  allure.step("Step inside after each", () => {});
});

describe("test", () => {
  test('Test run settings', () => {
    allure.step("Simple step", () => {});
    allure.step("Simple parent step", async () => {
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
    });
    externalStep("step parameter");
  },);
});

const externalStep = param =>
  allure.step("External Step", () => {
    allure.step(`External step parameter: ${param}`, () => {});
    allure.step("Simple step inside test method", () => {});
  });