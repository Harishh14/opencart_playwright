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
//its login object file and now we are testing branching concept

async loginUser(username:string,password:string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.login.click();   
}

}