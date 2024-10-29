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
    // await cartPage.validateOnPage()
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log("Test failed, perform screenshot");
        const image = await page.screenshot({fullPage: true})
        testInfo.attach('failed test', {
            body: image,
            contentType: 'image/png',
        });
        
    }
});

