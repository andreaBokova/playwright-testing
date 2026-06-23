import { test, expect } from "../fixtures";

test.describe("Add to Cart Tests", () => {
  

    test("valid add to cart", async ({ loginPage, inventoryPage, page }) => {

        await loginPage.login("standard_user", "secret_sauce");

        await expect(page).toHaveURL(/inventory/);

        await inventoryPage.addToCart("Sauce Labs Backpack");

    });

});
