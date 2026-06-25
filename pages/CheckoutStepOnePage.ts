import {Page, Locator} from "@playwright/test";

export class CheckoutStepOnePage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator
    readonly continueCheckoutButton: Locator;
    readonly finishCheckoutButton: Locator;

    constructor(private page: Page) {
        this.firstNameInput = this.page.locator("#first-name");
        this.lastNameInput = this.page.locator("#last-name");
        this.postalCodeInput = this.page.locator("#postal-code");
        this.continueCheckoutButton = this.page.locator("#continue");
        this.finishCheckoutButton = this.page.locator("#finish");
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueCheckoutButton.click();
    }

}