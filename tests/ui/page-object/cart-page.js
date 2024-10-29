import { expect } from "@playwright/test";

export class CartPage {

    constructor(page) {
        this.page = page
        this.shoppingCartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.pageTitle = page.getByText('Your Cart');
        this.cartList = page.locator('[data-test="cart-list"]')
        this.menuButton = page.getByRole('button', { name: 'Remove'});
        this.checkoutButton = page.locator('[data-test="checkout"]')
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
    }

    async clickShoppingCart() {
        await this.shoppingCartIcon.click();
    }

    async validateOnPage() {
       await expect(this.pageTitle).toBeVisible()
       await expect(this.cartList).toBeVisible()
       await expect(this.menuButton).toBeVisible()
       await expect(this.checkoutButton).toBeVisible()
       await expect(this.continueShoppingButton).toBeVisible()
       await expect(this.page).toHaveScreenshot('cart-page.png',{maxDiffPixelRatio: 0.1})
    }
}