const { test, expect } = require('@playwright/test');

test.describe('Example Tests', () => {

    test("Examples", async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/download');
        // Start waiting for download before clicking. Note no await.
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('testfile.txt').click();
        const download = await downloadPromise;

        // Wait for the download process to complete and save the downloaded file somewhere.
        const path = await download.path();
        const url = download.url();
        console.log(path);
        console.log(url);     
}) 
})