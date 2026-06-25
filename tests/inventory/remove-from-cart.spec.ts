import { test, expect } from "../fixtures";

test.describe("Remove from Cart Tests", () => {
  test("valid remove from cart", async ({
    loginPage,
    inventoryPage,
    cartPage,
    page,
    header
  }) => {
    await loginPage.goto();

    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addToCart("Sauce Labs Backpack");

    header.expectItemCount(1);

    await inventoryPage.removeFromCart("Sauce Labs Backpack");

    await expect(cartPage.getItem("Sauce Labs Backpack")).not.toBeVisible();

    header.expectItemCount(0);
  });
});
