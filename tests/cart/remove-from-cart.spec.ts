import { test, expect } from "../fixtures";

test.describe("Remove from Cart Tests", () => {
  

    test("valid remove from cart", async ({ loginPage, inventoryPage, page }) => {

        await loginPage.goto();

        await loginPage.login("standard_user", "secret_sauce");

        await expect(page).toHaveURL(/inventory/);

        await inventoryPage.addToCart("Sauce Labs Backpack");

        await inventoryPage.openCart();

        await inventoryPage.removeFromCart("Sauce Labs Backpack");

    });

});
