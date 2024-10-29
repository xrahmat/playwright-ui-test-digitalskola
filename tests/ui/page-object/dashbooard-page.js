import { expect } from "@playwright/test";

export class DashboardPage {

    constructor(page) {
        this.page = page
        this.pageTitle = page.getByText('Swag Labs');
        this.menuButton = page.getByRole('button', { name: 'Open Menu'});
        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.removeButton = page.getByRole('button', { name: 'Remove'});
        this.shoppingCartBadge  = page.locator('[data-test="shopping-cart-badge"]');
    }

   async validateOnPage() {
       await expect(this.pageTitle).toBeVisible()
       await expect(this.menuButton).toBeVisible()
       await expect(this.inventoryContainer).toBeVisible()
       await expect(this.page).toHaveScreenshot('dashboard-page.png', {maxDiffPixelRatio: 0.1})
    }

    async clickItem() {
        await this.addToCart.click()
    }

    async validateItemAddedToCart() {
        await expect(this.removeButton).toBeVisible();
        await expect(this.shoppingCartBadge).toBeVisible()
    }
}