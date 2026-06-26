import { test, expect } from "../fixtures";

test.describe("Cart flow", () => {
  test("add one item to cart", async ({
    loginPage,
    inventoryPage,
    cartPage,
    header,
    page,
  }) => {
    // ACT
    // await loginPage.goto();
    // await loginPage.login("standard_user", "secret_sauce");
    // await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addToCart("Sauce Labs Backpack");

    await header.openCart();

    // ASSERT
    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();

    await header.expectItemCount(1);
  });

  test("add multiple items to cart", async ({
    loginPage,
    inventoryPage,
    cartPage,
    header,
    page,
  }) => {
    // ACT
    // await loginPage.goto();
    // await loginPage.login("standard_user", "secret_sauce");
    // await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addToCart("Sauce Labs Backpack");
    await inventoryPage.addToCart("Sauce Labs Bike Light");

    await header.openCart();

    // ASSERT
    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();
    await expect(cartPage.getItem("Sauce Labs Bike Light")).toBeVisible();

    await header.expectItemCount(2);
  });
});
