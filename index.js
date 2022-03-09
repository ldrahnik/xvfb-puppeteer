const puppeteer = require('puppeteer');

(async () => {
    console.log('start');
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome-stable',
        args: ['--no-sandbox','--disable-setuid-sandbox']
    });
    console.log('browser initialized');
    const page = await browser.newPage();
    await page.goto(`https://wikipedia.org`,{waitUntil: 'networkidle2'});
    await page.screenshot({path: 'result.png'});
    console.log('screenshot done');
    await browser.close();
})()
