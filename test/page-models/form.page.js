import { Selector, t } from 'testcafe';

class MyForm {
    constructor(){
        this.developerNameInput = Selector("#developer-name");
        // this.headerArticle= Selector('#article-header');
    }

    async developerNameInputTypeText(text) {
        return await t.typeText('#developer-name', text);
    }
    async clickSubmitButton(){
        return await t.click('#submit-button');
    }
}

export default new MyForm;