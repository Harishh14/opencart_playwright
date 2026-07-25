import {Locator,Page,Expect } from '@playwright/test'

export class loginpage{

readonly username:Locator;
readonly password:Locator
readonly login:Locator;
constructor(page:Page){

this.username = page.locator('#input-email');
this.password = page.locator('#input-password');
this.login = page.locator('input[value="Login"]');
}
//its a login page

//change made by dev 2

async loginUser(username:string,password:string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.login.click();   
}

}