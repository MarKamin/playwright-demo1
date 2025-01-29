const { test, expect } = require('@playwright/test');

test.describe('Example Tests', () => {

    test("Examples", async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await page.locator('#column-a').dragTo(page.locator('#column-b'));
        await page.locator('#column-b').dragTo(page.locator('#column-a'));
}) 
})