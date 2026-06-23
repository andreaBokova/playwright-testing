import { test, expect } from "../fixtures";

test.describe("Logout Tests", () => {

    test("valid logout", async ({ loginPage, inventoryPage, page }) => {

        await loginPage.login("standard_user", "secret_sauce");

        await expect(page).toHaveURL(/inventory/);

        await inventoryPage.logout();

        await expect(page.locator('#login-button')).toBeVisible();
    });
})
