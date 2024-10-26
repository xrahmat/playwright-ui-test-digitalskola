import { test } from './base/base-test';
// import { LoginPage } from './page-object/login-page';
// import { DashboardPage } from './page-object/dashbooard-page';

 test('TC 1 - Successful login using page object - standard_user', async ({ loginPage, dashboardPage, cartPage }) => {

    // const loginPage = new LoginPage(page)
    // const dashboardPage = new DashboardPage (page)

    // await loginPage.navigate()
    // await loginPage.inputUsername('standard_user')
    // await loginPage.inputPassword('secret_sauce')
    // await loginPage.clickLoginButton()
    
    await loginPage.login(process.env.STANDARD_USER,process.env.PASSWORD)
    await dashboardPage.validateOnPage()
    await dashboardPage.clickItem()
    await dashboardPage.validateItemAddedToCart()
    await cartPage.clickShoppingCart()
    await cartPage.validateOnPage()
});

test('TC 2 - Successful login using page object - visual_user', async ({ loginPage, dashboardPage, cartPage }) => {

    // const loginPage = new LoginPage(page)
    // const dashboardPage = new DashboardPage (page)

    // await loginPage.navigate()
    // await loginPage.inputUsername('visual_user')
    // await loginPage.inputPassword('secret_sauce')
    // await loginPage.clickLoginButton()
    
    await loginPage.login(process.env.VISUAL_USER,process.env.PASSWORD)
    await dashboardPage.validateOnPage()
    await dashboardPage.clickItem()
    await dashboardPage.validateItemAddedToCart()
    await cartPage.clickShoppingCart()
    await cartPage.validateOnPage()
});

