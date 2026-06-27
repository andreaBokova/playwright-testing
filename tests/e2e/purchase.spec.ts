import { test, expect } from "../fixtures";

test.describe("Purchase Flow @e2e", () => {
  test("user can complete a purchase @smoke", async ({
    page,
    inventoryPage,
    header,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
  }) => {
    // Login is already handled by storageState
    await page.goto("https://www.saucedemo.com/inventory.html");

    // Add product
    await inventoryPage.addToCart("Sauce Labs Backpack");

    // Open cart
    await header.openCart();

    // Verify item is present
    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();

    // Checkout
    await cartPage.checkout();

    // Fill customer information
    await checkoutStepOnePage.fillCheckoutInformation("John", "Doe", "12345");

    // Finish order
    await checkoutStepTwoPage.finishCheckout();

    // Verify success
    await expect(page).toHaveURL(/checkout-complete/);

    const confirmationText =
      await checkoutCompletePage.getOrderConfirmationText();

    expect(confirmationText).toContain("Complete!");
  });
});
