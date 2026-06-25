import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly filterDropdown: Locator;

  constructor(private page: Page) {
    this.filterDropdown = this.page.locator(".product_sort_container");
  }

  async addToCart(itemName: string) {
    const product = this.page.locator(".inventory_item").filter({
      has: this.page.getByText(itemName),
    });

    await product.getByRole("button", { name: /add to cart/i }).click();
  }

  async removeFromCart(itemName: string) {
    const slug = itemName.toLowerCase().replace(/\s+/g, "-");

    await this.page.locator(`[data-test="remove-${slug}"]`).click();
  }

  async filterItemsBy(
    option:
      | "Name (A to Z)"
      | "Name (Z to A)"
      | "Price (low to high)"
      | "Price (high to low)",
  ) {
    await this.filterDropdown.selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    return await this.page.locator(".inventory_item_name").allTextContents();
  }

  async getProductPrices(): Promise<string[]> {
    return await this.page.locator(".inventory_item_price").allTextContents();
  }
}
