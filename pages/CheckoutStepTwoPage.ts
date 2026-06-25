import {Page, Locator} from "@playwright/test";

export class CheckoutStepTwoPage {
    readonly finishCheckoutButton: Locator;

    constructor(private page: Page) {
        this.finishCheckoutButton = this.page.locator("#finish");
    }

    async finishCheckout() {
        await this.finishCheckoutButton.click();
    }

}