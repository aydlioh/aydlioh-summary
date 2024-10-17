import { launch } from 'puppeteer';
import fs from 'fs/promises';

const browser = await launch();
const page = await browser.newPage();
await page.goto('http://localhost:4321/editor', {
  waitUntil: 'networkidle2',
});

const pdf = await page.pdf({
  format: 'A4',
});
await browser.close();

await fs.writeFile('./portfolio/public/output.pdf', pdf);
await fs.writeFile('./output.pdf', pdf);

console.log('Created ./output.pdf')
