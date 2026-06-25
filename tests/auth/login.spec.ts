import { test, expect } from "../fixtures";

test.describe("Login Tests", () => {
  test("valid login", async ({ loginPage, page }) => {
    await loginPage.goto();

    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory/);
  });

  test("locked out user login", async ({ loginPage, page }) => {
    await loginPage.goto();

    await loginPage.login("locked_out_user", "secret_sauce");

    await expect(page).not.toHaveURL(/inventory/);

    const errorText = await page.locator('[data-test="error"]').textContent();

    expect(errorText).toContain("user has been locked out");
  });
});
