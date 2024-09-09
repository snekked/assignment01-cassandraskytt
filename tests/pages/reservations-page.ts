import { expect, type Locator, type Page } from '@playwright/test';

export class ReservationsPage {
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

  async performLogin(username: string, password:string) {
    //fill out the form - 2 textfields and click the submit button

  }
}
