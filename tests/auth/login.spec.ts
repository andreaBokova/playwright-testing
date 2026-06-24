import { test, expect } from "../fixtures";

test.describe("Login Tests", () => {
  

    test("valid login", async ({ loginPage, page }) => {

        await loginPage.goto();

        await loginPage.login("standard_user", "secret_sauce");

        await expect(page).toHaveURL(/inventory/);
    });

    test("invalid login", async ({ loginPage, page }) => {

        await loginPage.goto();

        await loginPage.login("invalid_user", "invalid_password");

        await expect(page).not.toHaveURL(/inventory/);

        await expect(page.locator('[data-test="error"]')).toHaveText(
            /Username and password do not match/,
        );
    });
});
