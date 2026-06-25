import { test, expect } from "../fixtures.ts";

test.describe("Remove Item Tests", () => {
  test("valid remove item", async ({
    loginPage,
    inventoryPage,
    cartPage,
    page,
    header,
  }) => {
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addToCart("Sauce Labs Backpack");

    await header.expectItemCount(1);
    await header.openCart();

    await cartPage.removeItem("Sauce Labs Backpack");
    await expect(cartPage.getItem("Sauce Labs Backpack")).not.toBeVisible();

    await header.expectItemCount(0);
  });
});
