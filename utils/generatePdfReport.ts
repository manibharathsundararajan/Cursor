import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/allure-report/index.html', { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'allure-summary.pdf', format: 'A4' });
  await browser.close();
})(); 