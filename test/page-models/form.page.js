import { Selector, t } from 'testcafe';

export default class MyForm {
    constructor(){
        this.developerNameInput = Selector("#developer-name");
        this.submitButton = Selector('#submit-button');
        this.mainTitle = Selector("div.main-content header h1");
    }
    async typeTextDeveloperNameInput(nombre) {
        return t.typeText(this.developerNameInput, nombre);
    }
    async clickSubmitButton() {
        return t.click(this.submitButton);
    }
}
