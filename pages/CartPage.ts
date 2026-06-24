import { Page, Locator } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  getItem(itemName: string): Locator {
    return this.page.locator(".cart_item").filter({
      hasText: itemName,
    });
  }

  async getCartItemCount(): Promise<number> {
    const text = await this.page
      .locator('[data-test="shopping-cart-badge"]')
      .textContent();

    return Number(text);
  }
}
