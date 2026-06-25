// checkout
import { test, expect } from "../fixtures";

test.describe("Checkout Tests", () => {
  test("valid checkout", async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
    page,
    header,
  }) => {
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory/);
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
