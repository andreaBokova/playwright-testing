  // continue shopping
  // checkout
  // remove item
import { Page, Locator} from "@playwright/test";

export class CartPage {
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(private page: Page) {
    this.continueShoppingButton = this.page.locator("#continue-shopping");
    this.checkoutButton = this.page.locator("#checkout");
  }

  getItem(itemName: string): Locator {
    return this.page.locator(".cart_item").filter({
      hasText: itemName,
    });
  }

  async removeItem(itemName: string) {
    const slug = itemName.toLowerCase().replace(/\s+/g, "-");
    await this.page.locator(`[data-test="remove-${slug}"]`).click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

}
