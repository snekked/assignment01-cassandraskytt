import { expect, type Locator, type Page } from '@playwright/test';

/*
const features = ['Balcony', 'Ensuite', 'Sea View', 'Penthouse'];
            const selectedFeatures = features.filter(() => Math.random());
            for (const feature of selectedFeatures) {
            await this.featuresSelect.selectOption({ label: feature }); }
*/
export class CreateRoomPage {
  //Attributes
  readonly page: Page;
  readonly selectElement: Locator; 
  //Add the missing attributes

  constructor(page: Page) {
    this.page = page;
    this.selectElement = page.getByRole('combobox'); //Use the select element
    //Add the missing attributes
  }

  async fillOutCreateRoomsForm() {
    await this.selectElement.selectOption({ index: 0 }); //to select Double option
    await this.selectElement.selectOption({ index: 1 }); //to select single option
    await this.selectElement.selectOption({ index: 2 }); //to select twin option
    //Add the missing elements that are to be filled out in the form. Think about using e.g. fakerjs
  }
}