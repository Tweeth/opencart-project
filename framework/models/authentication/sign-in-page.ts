import { Locator, Page, expect } from '@playwright/test'
import routes from '@test-data/routes.json'
import text from '@test-data/text.json'
export default class SignInPage {
    readonly page: Page
    readonly emailFld: Locator
    readonly passwordFld: Locator
    readonly loginBtn: Locator
    readonly forgotPasswordLinkBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.emailFld = page.locator('#input-email')
        this.passwordFld = page.locator('#input-password')
        this.loginBtn = page.getByRole('button', {name: 'Login'})
        this.forgotPasswordLinkBtn = page.locator('a', {hasText: 'Forgotten Password'})
    }
    
    async logInToAccount(email: string, password: string) {
        await this.emailFld.fill(email)
        await this.passwordFld.fill(password)
        await this.loginBtn.click()
    }
}