import { test, expect } from "../fixtures";

test.describe("Remove Item Tests", () => {
  test("valid remove item @regression", async ({
    inventoryPage,
    cartPage,
    page,
    header,
  }) => {
   
    await page.goto("https://www.saucedemo.com/inventory.html");
    await inventoryPage.addToCart("Sauce Labs Backpack");

    await header.expectItemCount(1);
    await header.openCart();

    await cartPage.removeItem("Sauce Labs Backpack");
    await expect(cartPage.getItem("Sauce Labs Backpack")).not.toBeVisible();

    await header.expectItemCount(0);
  });
});
