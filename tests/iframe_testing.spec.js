const { test, expect } = require('@playwright/test');

test.describe('Example Tests', () => {

    test("Examples", async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/iframe');
        const frameTest = page.frameLocator('#mce_0_ifr').locator('html');
        await frameTest.click();
        await frame.Test.fil('This is just typing');

        
}) 
})