import { test, expect } from "../fixtures";

test.describe("Add to Cart Tests", () => {
  

    test("valid add to cart", async ({ loginPage, inventoryPage, cartPage, page }) => {
        
        await loginPage.goto();

        await loginPage.login("standard_user", "secret_sauce");

        await expect(page).toHaveURL(/inventory/);

        await inventoryPage.addToCart("Sauce Labs Backpack");

        await cartPage.getCartItemCount().then((count) => {
            expect(count).toBe(1);
        });

        await inventoryPage.openCart();

        await expect(
        cartPage.getItem('Sauce Labs Backpack')
        ).toBeVisible();

    });

});
