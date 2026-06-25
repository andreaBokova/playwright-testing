import { Page, Locator } from "@playwright/test";

export class CheckoutCompletePage {
  readonly orderConfirmationTitle: Locator;

  constructor(private page: Page) {
    this.orderConfirmationTitle = this.page.locator("[data-test='title']");
  }

  async getOrderConfirmationText(): Promise<string> {
    return (await this.orderConfirmationTitle.textContent()) ?? "";
  }
}
