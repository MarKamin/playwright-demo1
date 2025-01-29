const { test, expect } = require('@playwright/test');

test.describe('Example Tests', () => {

    test("Examples", async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await page.locator("#dropdown").selectOption('1');
        // await page.locator("#dropdown").selectText('Option 2');
        await expect(page.locator('#dropdown')).toHaveValue('1');
}) 
})

