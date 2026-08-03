import { test, expect, Page, Locator } from '@playwright/test';

export class Homepage {

    private readonly page;

    //locators

    private readonly myaccountbtn: Locator;
    private readonly registerbtn: Locator;
    private readonly loginbtn: Locator;
    private readonly searchinput: Locator;
    private readonly searchbtn: Locator;


    constructor(page: Page) {
        this.page = page;

        //initialize locators
        this.myaccountbtn = page.locator("a[title='My Account']");
        this.registerbtn = page.locator("//a[text()='Register']");
        this.loginbtn = page.locator("//nav[@id='top']//a[text()='Login']");
        this.searchinput = page.getByPlaceholder('Search');
        this.searchbtn = page.locator("//input[@name='search']/following::button[1]");

    };

    async isHomePageExists(): Promise<boolean> {
        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }

    async clickmyaccount(): Promise<void> {
        try {
            await this.myaccountbtn.click();
        } catch (error) {
            console.log(`error: ${error}`)
            throw error;
        }
    }

    async clickregister(): Promise<void> {
        try {
            await this.registerbtn.click();
        } catch (error) {
            console.log(`error: ${error}`)
            throw error;
        }
    }

    async clicklogin(): Promise<void> {
        try { await this.loginbtn.click(); }
        catch (error) {
            console.log(`error: ${error}`);
            throw error;
        }

    }

    async enterprodname(prodname:string): Promise<void> {
        try{
            await this.searchinput.fill(prodname);
        }catch(error){
            console.log(`error: ${error}`);
            throw error;
        }
    }

    async clicksearch(): Promise<void> {
        try {
            await this.searchbtn.click();
        } catch (error) {
            console.log(`error: ${error}`);
            throw error;
        }
    }



}