import { Selector, t } from 'testcafe';

export default class SlInsuranceInfoPage{
    constructor() {
        this.sportText = Selector("app-checkout-card-recap div.santalucia-deporte div:nth-child(1) b");
        this.asuredText = Selector("app-checkout-card-recap div.santalucia-deporte div:nth-child(2) b");
        this.periodText = Selector("app-checkout-card-recap div.santalucia-deporte div:nth-child(3) b");
        this.actualPrice = Selector("app-checkout-shopping-cart div[data-cy='das-shopping-cart__total-amount']");
    }
}
