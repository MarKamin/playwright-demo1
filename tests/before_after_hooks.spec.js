const {test,expect} = require('@playwright/test');

test.describe("Simple click test", () => {
    
    test.beforeEach(async ({page})=>{
        await page.goto("/");
})

    test.afterEach(async ({page}) => {
        console.log("This test is finished");
    })
    
    test('First Test @smoke', async ({page, browserName}) => {
        await page.pause();
    })

    test('Duplicate Test 1', async ({page}) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })

    test('Duplicate Test 2', async ({page}) => {
        await page.click("text=Add/Remove Elements");
        await page.click("text=Add Element");
    })
});