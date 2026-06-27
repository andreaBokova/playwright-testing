import { test, expect } from "../fixtures";

test.describe("Multiple-item purchase flow @e2e", () => {
  test("user can complete a multiple-item purchase @smoke", async ({
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

    // Continue shopping
    await cartPage.continueShopping()

    // Add product
    await inventoryPage.addToCart("Sauce Labs Bike Light")

    // Open cart
    await header.openCart()

    // Verify items are present
    await expect(cartPage.getItem("Sauce Labs Backpack")).toBeVisible();
    await expect(cartPage.getItem("Sauce Labs Bike Light")).toBeVisible();

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
