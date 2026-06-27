import { test, expect } from "../fixtures";

test.describe("Remove from Cart Tests", () => {
  test("valid remove from cart", async ({
    inventoryPage,
    cartPage,
    page,
    header
  }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.addToCart("Sauce Labs Backpack");

    header.expectItemCount(1);

    await inventoryPage.removeFromCart("Sauce Labs Backpack");

    await expect(cartPage.getItem("Sauce Labs Backpack")).not.toBeVisible();

    header.expectItemCount(0);
  });
});
