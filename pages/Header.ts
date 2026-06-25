import { Page, Locator, expect } from "@playwright/test";

export class Header {
  readonly cartBadge: Locator;
  readonly cartButton: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(private page: Page) {
    this.cartBadge = this.page.locator("[data-test='shopping-cart-badge']");
    this.cartButton = this.page.locator(".shopping_cart_link");
    this.menuButton = this.page.locator("#react-burger-menu-btn");
    this.logoutLink = this.page.locator("#logout_sidebar_link");
  }

  async getCartCount(): Promise<number> {
    if ((await this.cartBadge.count()) === 0) {
      return 0;
    }

    const text = await this.cartBadge.textContent();
    return Number(text);
  }

  async expectItemCount(count: number) {
    const actualCount = await this.getCartCount();
    expect(actualCount).toBe(count);
  }

  async openCart() {
    await this.cartButton.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
