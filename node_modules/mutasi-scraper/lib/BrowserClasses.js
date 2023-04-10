const puppeteer = require("puppeteer-extra");
const stealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(stealthPlugin());

class ScraperBank {
  constructor(user, pass, args) {
    this.user = user || "username";
    this.pass = pass || "pass";
    this.konfigbrowser = args ?? {
      headless: false ,
      args: [
        '--log-level=3', // fatal only
        '--no-default-browser-check',
        '--disable-infobars',
        '--disable-web-security',
        '--disable-site-isolation-trials',
        '--no-experiments',
        '--ignore-gpu-blacklist',
        '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list',
        '--mute-audio',
        '--disable-extensions',
        '--no-sandbox',
  
        '--no-first-run',
        '--no-zygote',
     ],
    };
  }
  async launchBrowser() {
    try {
      const browser = await puppeteer.launch(this.konfigbrowser);
      const page = await browser.newPage();
      return page;
    } catch (e) {
      console.log(e);
    }
  }

  async closeBrowser(page) {
    try {
      await page.browser().close();
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ScraperBank;
