import puppeteer from 'puppeteer';
import { allure } from "allure-mocha/runtime";
import { expect } from "chai";

const commonStep = () =>
  allure.step("External step", () => {
    allure.step("Child step for External step", () => {
      expect(false).to.equal(true);
    });
  });

describe("Allure step", () => {
  it('Test run settings', async () => {
    allure.step("First step - puppeteer.launch", () => {
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
    });
    allure.step("browser.newPage", () => {
      const page = await browser.newPage();
    });
    allure.step("goto example.com ", () => {
      await page.goto('https://example.com');
    });
    allure.step("page.screenshot", () => {
      await page.screenshot({ path: 'test_puppeteer/artifacts/example.png' });
    });
    allure.step("browser.close", () => {
      await browser.close();
    });
  }, 15000);
  
  it("allows nested steps", () => {
    allure.step("Parent step", () => {
      allure.step("Child step", () => {
        expect(true).to.equal(true);
      });
    });
  });
  
  it("helpful for highlighting common test code usage", () => {
    commonStep();
  });
});
