import { Locator, Page, expect } from '@playwright/test'
import routes from '@test-data/routes.json'
import text from '@test-data/text.json'
export default class Header {
    readonly page: Page
    readonly myAccountBtn: Locator
    readonly dropdownMenu: Locator
    readonly logoutOption: Locator



    constructor(page: Page) {
        this.page = page
        this.myAccountBtn = page.locator('span', {hasText: 'My Account'})
        this.dropdownMenu = page.locator('ul.dropdown-menu.dropdown-menu-right')
        this.logoutOption = this.dropdownMenu.locator('a', {hasText: 'Logout'})
    }


    async logoutFromAccount() {
        await this.myAccountBtn.click()
        await expect(this.dropdownMenu).toBeVisible()
        await this.logoutOption.click()
        await expect(this.page).toHaveURL(routes.authentication.logout)
    }
}