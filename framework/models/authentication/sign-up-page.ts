import { Locator, Page, expect } from '@playwright/test'
import routes from '@test-data/routes.json'
import text from '@test-data/text.json'
export default class SignUpPage {
    readonly page: Page
    readonly firstNameFld: Locator
    readonly lastNameFld: Locator
    readonly emailFld: Locator
    readonly telephoneFld: Locator
    readonly passwordFld: Locator
    readonly confirmPassowrdFld: Locator
    readonly yesSubscribeRadioBtn: Locator
    readonly privacyPolicyCheckbox: Locator
    readonly continueBtn: Locator

    readonly firstNameFldError: Locator
    readonly lastNameFldError: Locator
    readonly emailFldError: Locator
    readonly telephoneFldError: Locator
    readonly passwordFldError: Locator
    readonly warningError: Locator
    readonly createdAccounLbl: Locator

    constructor(page: Page) {
        this.page = page
        this.firstNameFld = page.locator('#input-firstname')
        this.lastNameFld = page.locator('#input-lastname') 
        this.emailFld = page.locator('#input-email')
        this.telephoneFld = page.locator('#input-telephone')
        this.passwordFld = page.locator('#input-password')
        this.confirmPassowrdFld = page.locator('#input-confirm')
        this.yesSubscribeRadioBtn = page.locator('(//input[@name="newsletter"])[1]')
        this.privacyPolicyCheckbox = page.locator('input[name="agree"]')
        this.continueBtn = page.getByRole('button', { name: 'Continue' })

        this.firstNameFldError = page.getByText('First Name must be between 1 and 32 characters!')
        this.lastNameFldError = page.getByText('Last Name must be between 1 and 32 characters!')
        this.emailFldError = page.getByText('E-Mail Address does not appear to be valid!')
        this.telephoneFldError = page.getByText('Telephone must be between 3 and 32 characters!')
        this.passwordFldError = page.getByText('Password must be between 4 and 20 characters!')
        this.warningError = page.getByText(' Warning: You must agree to the Privacy Policy!')
        this.createdAccounLbl = page.getByText('Your Account Has Been Created!')
    }
    
    async successSignUp(firstName: string, lastName: string,
        email: string, telephone: string,
        password: string) {

        await this.page.goto(routes.authentication.sign_up)
        await this.page.waitForLoadState()
        await this.firstNameFld.fill(firstName)
        await this.lastNameFld.fill(lastName)
        await this.emailFld.fill(email)
        await this.telephoneFld.fill(telephone)
        await this.passwordFld.fill(password)
        await this.confirmPassowrdFld.fill(password)
        await this.yesSubscribeRadioBtn.click()
        await expect(this.yesSubscribeRadioBtn).toBeChecked()
        await this.privacyPolicyCheckbox.check()
        await expect(this.privacyPolicyCheckbox).toBeChecked()
        await this.continueBtn.click()
        await expect(this.page).toHaveURL(routes.authentication.sucsess)
    }
}