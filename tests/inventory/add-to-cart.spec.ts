import { test, expect } from "../fixtures";

test.describe("Add to cart", () => {
  test("add one item to cart @smoke", async ({
    inventoryPage,
    cartPage,
    header,
    page,
  }) => {
    // ACT
    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.addToCart("Sauce Labs Backpack");

    await header.openCart();

    // ASSERT
    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();

    await header.expectItemCount(1);
  });

  test("add multiple items to cart", async ({
    inventoryPage,
    cartPage,
    header,
    page,
  }) => {
    // ACT
    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.addToCart("Sauce Labs Backpack");
    await inventoryPage.addToCart("Sauce Labs Bike Light");

    await header.openCart();

    // ASSERT
    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();
    await expect(cartPage.getItem("Sauce Labs Bike Light")).toBeVisible();

    await header.expectItemCount(2);
  });
});
