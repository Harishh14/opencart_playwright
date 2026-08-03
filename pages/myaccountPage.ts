import { Page, Locator } from '@playwright/test'

export class myaccountPage {

    readonly logout: Locator;
    readonly heading: Locator;
    readonly loginmessage: Locator;
    constructor(page: Page) {

        this.logout = page.locator("//div[contains(@class,'list-gro')]/a[text()='Logout']");
        this.heading = page.locator("//div[@id='content']//h1");
        this.loginmessage = page.locator("//h2[text()='My Account']");

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
    async isloginSuccessful(): Promise<boolean> {
         let flag:boolean = false;
         if(await this.loginmessage.isVisible()){
            flag = true;
         }else{
            flag = false;
         }
         return flag;

    }
    
}