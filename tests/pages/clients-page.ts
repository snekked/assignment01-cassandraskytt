import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class ClientsPage {
  //Attributes
  readonly page: Page;
  readonly createClientButton: Locator;
  readonly nameTextfield: Locator; 
  readonly emailTextfield: Locator;
  readonly telephoneTextfield: Locator;
  

  //Const
  constructor(page: Page) {
    this.page = page;
    this.createClientButton = page.getByRole('button', { name: 'Create Client' }); 
    this.nameTextfield = page.locator('input[type="text"]');
    this.emailTextfield = page.locator('input[type="email"]');
    this.telephoneTextfield = page.locator('input[type="telephone]');
  }

  // Methods / functions
  async goto() {
    await this.createClientButton.click();
  }

  async createNewClient(username: string, password:string) {
    //fill out the form - 2 textfields and click the submit button
    const fullName = faker.person.fullName();      
    const userEmail = faker.internet.email();     
    const userPhoneNo = faker.phone.number(); 

    await page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill(fullName);
    await page.locator('div').filter({ hasText: /^Email$/ }).getByRole('textbox').fill(userEmail);
    await page.locator('div').filter({ hasText: /^Telephone$/ }).getByRole('textbox').fill(userPhoneNo);
    await page.getByText('Save').click();
  }
}
