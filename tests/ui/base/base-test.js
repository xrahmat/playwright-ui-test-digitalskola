const {test:base} = require("@playwright/test")
import { CartPage } from "../page-object/cart-page";
import { DashboardPage } from "../page-object/dashbooard-page";
import { LoginPage } from "../page-object/login-page";


export const test = base.extend({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage);
        //await loginPage.navigate()
    },
    dashboardPage: async ({page}, use) => {
        const dashboardPage = new DashboardPage(page)
        await use(dashboardPage)
    },
    cartPage: async ({page}, use) => {
        const cartPage = new CartPage(page)
        await use(cartPage)
    }
})