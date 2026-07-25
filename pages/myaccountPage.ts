import { Page, Locator } from '@playwright/test'

export class myaccountPage {

    readonly logout: Locator;
    readonly heading: Locator;
    constructor(page: Page) {

        this.logout = page.locator("//div[contains(@class,'list-gro')]/a[text()='Logout']");
        this.heading = page.locator("//div[@id='content']//h1");

    }

    async clickLogout() {
        await this.logout.click();
    }

    async isregSuccessful(): Promise<boolean> {
         let flag:boolean = false;
         if(await this.heading.isVisible()){
            flag = true;
         }else{
            flag = false;
         }
         return flag;

    }

}