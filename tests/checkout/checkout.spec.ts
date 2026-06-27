// checkout
import { test, expect } from "../fixtures";

test.describe("Checkout Tests", () => {
  test("valid checkout @smoke", async ({
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
    page,
    header,
  }) => {
    // login is now handled by auth.setup.ts, so we can skip the login steps here
    // await loginPage.goto();
    // await loginPage.login("standard_user", "secret_sauce");
    // await expect(page).toHaveURL(/inventory/);

    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.addToCart("Sauce Labs Backpack");
    await header.openCart();

    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();
    await cartPage.checkout();

    await checkoutStepOnePage.fillCheckoutInformation("John", "Doe", "12345");
    await checkoutStepTwoPage.finishCheckout();
    await expect(page).toHaveURL(/complete/);

    const confirmationText =
      await checkoutCompletePage.getOrderConfirmationText();

    expect(confirmationText).toContain("Complete!");
  });
});
