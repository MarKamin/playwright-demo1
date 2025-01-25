const { test, expect } = require('@playwright/test');

test.describe("Examples", () => {

    // test('request/response', async ({page}) => {
    //     page.on('request', (request) => console.log('Request:', request.url()));
    //     page.on('response', (response) => console.log('Response:', response.url(), response.status()));
    //     await page.goto('https://demoqa.com/text-box');

    // });

    test("Testing Selectors", async ({page}) => {
        // navigating to the page
        await page.goto("https://demoqa.com/text-box", { waitUntil: 'load', timeout: 60000 });

        // wait for the element to appear in the DOM
        await page.waitForSelector("//img[@src='/images/Toolsqa.jpg']");

        // Check if the element is visible
        const isImageVisible = await page.isVisible("//img[@src='/images/Toolsqa.jpg']");
        
        // Assert visibility
        expect(isImageVisible).toBeTruthy();
    })

});

