const assert = require('assert');
const percySnapshot = require('@percy/webdriverio');

const TEST_URL = 'https://k8s.bsstag.com/';
const TEST_WIDTHS = [375, 480, 720, 1280, 1440, 1920];

describe('Browserstack Page', () => {
   it('should have the Correct Page title', async () => {

        await browser.url(TEST_URL);
        await browser.pause(5000);
        await percySnapshot(browser,'Browserstack Homepage');
            
        await browser.url(TEST_URL+'/pricing'); 
        await percySnapshot(browser, 'Priciing');

        await browser.url(TEST_URL+'/integrations/automate');
        await percySnapshot(browser, 'Automate');

        await browser.url(TEST_URL+'/docs/');
        await percySnapshot(browser, 'Docs');
   })
})