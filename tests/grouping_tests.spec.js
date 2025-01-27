const {test,expect} = require('@playwright/test');

test.describe("Smoke Tests", () => {
    test('First Test @smoke', async ({page}) => {
        //Write testing code here
        await page.goto("https://playwright.dev");
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    })

    test('Clicking test @smoke', async ({page}) => {
        await page.goto("/");
        await page.locator("text=Add/Remove Elements").click();
        // const locator1 = page.locator('text=Add/Remove Elements');
        // await locator1.screenshot({path: "screenshot2.png"});
        await page.locator("text=Add Element").click();
    })
});