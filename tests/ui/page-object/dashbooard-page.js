import { expect } from "@playwright/test";

export class DashboardPage {

    constructor(page) {
        this.pageTitle = page.getByText('Swag Labs');
        this.menuButton = page.getByRole('button', { name: 'Open Menu'});
        this.inventoryContainer = page.locator('[data-test="inventory-container"]')
    }

   async validateOnPage() {
       await expect(this.pageTitle).toBeVisible()
       await expect(this.menuButton).toBeVisible()
       await expect(this.inventoryContainer).toBeVisible()
    }
}