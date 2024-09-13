import { expect, type Locator, type Page } from '@playwright/test';

export class BillsPage {
  //Attributes
  readonly page: Page;


  //Const
  constructor(page: Page) {
    this.page = page;

  }

  // Methods / functions
  async goto() {
    await this.page.goto(`${process.env.BASE_URL}`);
  }

}
