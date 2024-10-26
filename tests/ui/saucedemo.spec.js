const { test, expect } = require("@playwright/test");

test.describe('', () => {
  test('Web UI saucedemo', async ({ page }) => {
    //navigation
    await page.goto('https://www.saucedemo.com/');

    //input username
    await page.getByPlaceholder('Username').fill('standard_user');
    //input password
    await page.locator('[id="password"]').fill('secret_sauce');
    //click login button
    await page.getByText('Login').click();
  

    //validation on dashboard
    await expect(page.getByText('Swag Labs')).toBeVisible()
    await expect(page.getByRole('button', { name: 'open menu'})).toBeVisible()
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible()

    //add item to cart
    // await page.getByRole('button', { name: 'Add to Cart'}).click();
    // await expect(page.getByRole('button', { name: 'Remove'})).toBeVisible()
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-onesie"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Remove'})).toBeVisible()
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeVisible()

    // validation on cart page
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('Your Cart')).toBeVisible()
    await expect(page.locator('[data-test="cart-list"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Remove'})).toBeVisible()
    await expect(page.locator('[data-test="checkout"]')).toBeVisible()
    await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible()
  });
});



