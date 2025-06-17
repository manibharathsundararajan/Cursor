import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_list');
  }

  async isLoaded() {
    await expect(this.inventoryContainer).toBeVisible({ timeout: 5000 });
  }
} 