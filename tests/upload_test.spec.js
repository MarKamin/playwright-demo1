const { test, expect } = require('@playwright/test');

test.describe('Example Tests', () => {

    test('Examples', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
        await page.setInputFiles('#file-upload', 'uploaded_file/sample.pdf');
        await page.getByRole('button', { name: 'Upload' }).click();
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
        await page.getByText('sample.pdf').click();
    })
})