import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('check popup', () => {
  let browser = null;
  let page = null;
  // const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('Должен появится popover', async () => {
    await page.goto('http://localhost:8888');
    await page.waitForSelector('#btn');
    page.click('#btn');
    await page.waitForSelector('.popup');
  });
});
