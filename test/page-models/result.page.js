import { Selector} from 'testcafe';

export default class MyResults {
    constructor(){
        this.articleHeader = Selector("#article-header");
    }
}
