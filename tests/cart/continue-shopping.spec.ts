import { test, expect } from "../fixtures";

test.describe("Continue Shopping Tests", () => {
  test("valid continue shopping", async ({
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

    await header.openCart();

    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();

    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory/);
  });
});
