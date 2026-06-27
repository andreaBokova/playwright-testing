import { test, expect } from "../fixtures";

test.describe("Logout Tests", () => {

    test("valid logout", async ({ loginPage, inventoryPage, page, header }) => {

        page.goto("https://www.saucedemo.com/inventory.html");

        await header.logout();

        await expect(page.locator('#login-button')).toBeVisible();
    });
})
