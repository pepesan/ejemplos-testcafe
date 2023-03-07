import { Selector, t} from 'testcafe';

export default class MyForm {
    constructor(){
        this.developerNameInput = Selector("#developer-name");
        this.submitButton = Selector('#submit-button');
    }
    async typeTextDeveloperNameInput(nombre) {
        return t.typeText(this.developerNameInput, nombre);
    }
    async clickSubmitButton() {
        return t.click(this.submitButton);
    }
}
