import { Page, Locator, expect } from '@playwright/test';

export class registrationpage {

    readonly page: Page;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly telephone: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;

    readonly newsletterYes: Locator;
    readonly newsletterNo: Locator;

    readonly privacyPolicy: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstName = page.locator('#input-firstname');
        this.lastName = page.locator('#input-lastname');
        this.email = page.locator('#input-email');
        this.telephone = page.locator('#input-telephone');
        this.password = page.locator('#input-password');
        this.confirmPassword = page.locator('#input-confirm');

        this.newsletterYes = page.locator('input[name="newsletter"][value="1"]');
        this.newsletterNo = page.locator('input[name="newsletter"][value="0"]');

        this.privacyPolicy = page.locator('input[name="agree"]');
        //reg page
        this.continueBtn = page.locator('input[value="Continue"]');
    }

    async registerUser(
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        password: string
    ) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(phone);

        await this.password.fill(password);
        await this.confirmPassword.fill(password);

        await this.newsletterNo.check();

        await this.privacyPolicy.check();

        await this.continueBtn.click();
    }

    async verifyRegistrationSuccess() {
        await expect(this.page).toHaveURL(/success/);
    }

}