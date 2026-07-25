import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/Homepage';
import { testconfig } from '../test.config';
import { registrationpage } from '../pages/registrationpage'
import { randomDataUtil } from '../utils/randomDataUtil'
import { myaccountPage } from '../pages/myaccountPage';
import { loginpage } from '../pages/loginpage'

let homepage: Homepage;
let config: testconfig;
let regpage: registrationpage;
let myaccpgage: myaccountPage;
let lp: loginpage;
let email: string;
let password: string;
//login flow test case
// let faker :randomDataUtil;
test.beforeEach(async ({ page }) => {
    config = new testconfig();
    homepage = new Homepage(page);
    regpage = new registrationpage(page);
    myaccpgage = new myaccountPage(page);
    lp = new loginpage(page);

    // faker = new randomDataUtil();
    await page.goto(config.appurl);
});

// test.afterEach(async ({ page }) => {
//     await page.waitForTimeout(3000);
//     await page.close();

// });
test.describe('User Registration and Login Tests @loginflow', () => {

    test('User registration test', async ({ page }) => {

    await homepage.clickmyaccount();
    await homepage.clickregister();
    email = randomDataUtil.getEmail();
    password = randomDataUtil.getPassword();
    await regpage.registerUser(randomDataUtil.getFirstName(), randomDataUtil.getLastName(), email, randomDataUtil.getPhoneNumber(), password);

    expect(await myaccpgage.isregSuccessful()).toBeTruthy();
    await myaccpgage.clickLogout();

})

test('Login Test', async ({ page }) => {
    await homepage.clickmyaccount();
    await homepage.clicklogin();
    await lp.loginUser(email, password);
})

})