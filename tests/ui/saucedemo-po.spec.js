import { test } from '@playwright/test';
import { LoginPage } from './page-object/login-page';
import { DashboardPage } from './page-object/dashbooard-page';

test('TC 1 - Successful login using page object', async ({ page }) => {

    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage (page)

    // await loginPage.navigate()
    // await loginPage.inputUsername('standard_user')
    // await loginPage.inputPassword('secret_sauce')
    // await loginPage.clickLoginButton()
    
    await loginPage.login('standard_user','secret_sauce')
    await dashboardPage.validateOnPage()
});

test('TC 2 - Successful login using page object - vsiual_user', async ({ page }) => {

    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage (page)

    // await loginPage.navigate()
    // await loginPage.inputUsername('visual_user')
    // await loginPage.inputPassword('secret_sauce')
    // await loginPage.clickLoginButton()
    
    await loginPage.login('visual_user','secret_sauce')
    await dashboardPage.validateOnPage()
});

