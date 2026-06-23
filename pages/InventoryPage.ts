import { Page, Locator } from '@playwright/test';

export class InventoryPage {

    readonly menuButton: Locator;
    readonly logoutLink: Locator;
    readonly cartButton: Locator;


    constructor(private page: Page) {
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async addToCart(itemName: string) {
        const product = this.page
            .locator('.inventory_item')
            .filter({
                has: this.page.getByText(itemName)
            });

        await product.getByRole('button', { name: /add to cart/i }).click();
    }

    async removeFromCart(itemName: string) {
        const slug = itemName.toLowerCase().replace(/\s+/g, '-');

        await this.page
            .locator(`[data-test="remove-${slug}"]`)
            .click();
    }

}

