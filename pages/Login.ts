import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import * as users from "../data/users.json";

export class LoginPage {
    page: Page;
    context: BrowserContext;
    USERNAME_INPUT: Locator;
    PASSWORD_INPUT: Locator;
    LOGIN_BUTTON: Locator;
    
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.USERNAME_INPUT = page.locator('user-name');
    }
}