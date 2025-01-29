const { test, expect } = require('@playwright/test');

test.describe("Authentication", () => {
test.use({
    storageState: 'automationUser.json'
})

test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
})
    
    test.skip("Saving Authenticaton", async ({page}) => { 

        await page.goto("https://practice.expandtesting.com/login", { waitUntil: 'load', timeout: 60000 });
        await page.getByLabel('Username').click();
        await page.getByLabel('Username').fill('practice');
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();

        await page.context().storageState({path: 'automationUser.json'});
    })

    test("Test2", async ({page}) => { 
        const h1Element = page.locator('h1');
        await expect(h1Element).toBeVisible();
        await expect(h1Element).toHaveText('Secure Area page for Automation Testing Practice'); 
       
    })

    // test("Test3", async ({page}) => { 

        
    // })
})

// mariustest1
// LvrjA6SL@shSe