const { test, expect } = require('@playwright/test');

test.describe("examples", () => {

    test("Testing Assertions", async ({page}) => {

        await page.goto("https://demoqa.com/text-box", { waitUntil: 'load', timeout: 60000 });
        await expect(page).toHaveTitle('DEMOQA');
        await expect(page).toHaveURL("https://demoqa.com/text-box");
        await page.locator('input[placeholder="Full Name"]').fill("Test Username");
        await page.locator('[placeholder="name@example.com"]').fill("test@email.com");
        await page.fill('#currentAddress','Address 99');
        await page.fill('#permanentAddress','Address 99');
        await page.locator('button:has-text("Submit")').click();

        const name = page.locator("#name");
        const email = page.locator("#email");
        const currentAddress = page.locator("p#currentAddress");
        const permanentAddress = page.locator("p#permanentAddress");

        await expect(name).toBeVisible();
        await expect(name).toHaveText('Name:Test Username');
        await expect(name).toBeVisible();
        await expect(email).toHaveText('Email:test@email.com');
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText('Current Address :Address 99 ');
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText('Permananet Address :Address 99');


    })
})