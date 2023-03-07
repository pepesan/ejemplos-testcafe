import { Selector} from 'testcafe';

export default class MyForm {
    constructor(){
        this.developerNameInput = Selector("#developer-name");
        this.submitButton = Selector('#submit-button');
    }
}
