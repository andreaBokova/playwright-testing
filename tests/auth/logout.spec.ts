import { test, expect } from "../fixtures";

test.describe("Logout Tests", () => {

    test("valid logout", async ({ loginPage, inventoryPage, page, header }) => {

        await loginPage.goto();

        await loginPage.login("standard_user", "secret_sauce");

        await expect(page).toHaveURL(/inventory/);

        await header.logout();

        await expect(page.locator('#login-button')).toBeVisible();
    });
})
