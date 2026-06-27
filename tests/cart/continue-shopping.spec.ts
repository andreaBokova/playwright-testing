import { test, expect } from "../fixtures";

test.describe("Continue Shopping Tests", () => {
  test("valid continue shopping", async ({
    inventoryPage,
    cartPage,
    page,
    header,
  }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.addToCart("Sauce Labs Backpack");

    await header.openCart();

    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();

    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory/);
  });
});
