const { test, expect } = require('@playwright/test');

test.describe("Examples", () => {

    // test('request/response', async ({page}) => {
    //     page.on('request', (request) => console.log('Request:', request.url()));
    //     page.on('response', (response) => console.log('Response:', response.url(), response.status()));
    //     await page.goto('https://demoqa.com/text-box');

    // });

    test("Testing Selectors", async ({page}) => {
        await page.goto("https://demoqa.com/text-box", { waitUntil: 'load', timeout: 60000 });
        await page.waitForSelector('input[placeholder="Full Name"]',{ timeout: 30000 });
        await page.fill('input[placeholder="Full Name"]',"Test Username");
        await page.waitForSelector('[placeholder="name@example.com"]')
        await page.fill('[placeholder="name@example.com"]','testemail@test.com');
        await page.waitForSelector('#currentAddress')
        await page.fill('#currentAddress','Address 99');
        await page.waitForSelector('#permanentAddress')
        await page.fill('#permanentAddress','Second Adress 99');
        await page.waitForSelector('button:has-text("Submit")');
        await page.click('button:has-text("Submit")');
    })

});

