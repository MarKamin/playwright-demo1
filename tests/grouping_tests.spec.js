const {test,expect} = require('@playwright/test');

test.describe("Smoke Tests", () => {
    test('First Test @smoke', async ({page}) => {
        //Write testing code here
        await page.goto("https://playwright.dev");
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    })

    test('Clicking test @smoke', async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com");
        await page.locator("text=Add/Remove Elements").click();
        await page.pause()
        await page.locator("text=Add Element").click();
    })
});