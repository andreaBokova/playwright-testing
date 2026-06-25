import { test, expect } from "../fixtures";

test.describe("Cart flow", () => {
  test("valid add to cart", async ({
    loginPage,
    inventoryPage,
    cartPage,
    header,
    page,
  }) => {
    // ACT
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addToCart("Sauce Labs Backpack");

    await header.openCart();

    // ASSERT
    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();

    await header.expectItemCount(1);
  });
});
