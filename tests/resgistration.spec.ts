import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/Homepage';
import { registrationpage } from '../pages/registrationpage';
import { loginpage } from '../pages/loginpage';
import { myaccountPage } from '../pages/myaccountPage';
import { testconfig } from '../test.config';
import { randomDataUtil } from '../utils/randomDataUtil';

let homepage: Homepage;
let registrationPage: registrationpage;
let loginPage: loginpage;
let myAccountPage: myaccountPage;
let config: testconfig;

test.beforeEach(async ({ page }) => {
    config = new testconfig();

    homepage = new Homepage(page);
    registrationPage = new registrationpage(page);
    loginPage = new loginpage(page);
    myAccountPage = new myaccountPage(page);

    await page.goto(config.appurl);
});

test.describe('User Registration and Login Tests @loginflow', () => {

    test('should register a new user and login successfully', async ({page}) => {

        // Generate Test Data
        const firstName = randomDataUtil.getFirstName();
        const lastName = randomDataUtil.getLastName();
        const email = randomDataUtil.getEmail();
        const phone = randomDataUtil.getPhoneNumber();
        const password = randomDataUtil.getPassword();

        // Registration
        await homepage.clickmyaccount();
        await homepage.clickregister();

        await registrationPage.registerUser(
            firstName,
            lastName,
            email,
            phone,
            password
        );

        // Verify Registration
        expect(await myAccountPage.isregSuccessful()).toBe(true);

        // Logout
        await myAccountPage.clickLogout();

        // Login
        await homepage.clickmyaccount();
        await homepage.clicklogin();

        await loginPage.loginUser(email, password);

        // Verify Login
        expect(await myAccountPage.isloginSuccessful()).toBe(true);

        

    });

});