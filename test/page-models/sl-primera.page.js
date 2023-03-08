import { Selector, t } from 'testcafe';

export default class SlPrimeraPage{
    constructor() {
        this.botonAceptarCookies = Selector("#onetrust-accept-btn-handler");
        this.selectSport = Selector("#select-sport");
        this.selectSportOptionEsqui = this.selectSport.find('option').withText('ESQUÍ');
        this.selectAgeCont = Selector("div.select-age-cont");
        this.botonValidarAges = Selector("app-age-selector div.text-center.container-button.santa-lucia_db.santalucia-deporte button");
        this.botonSumarMayor6064 = Selector("div.age-selection button[data-cy ='age-selector__number-of-insureds-65-add']");
        this.inputSumarMayor6064 = Selector("div.age-selection input[data-cy ='age-selector__number-of-insureds-65-display']");
        this.inputAseguradosElegidos = Selector("div.select-age-cont input[data-cy ='sport-quotator__select-insureds-age']");
        this.boton3Dias = Selector("a[data-cy='sport-quotator__3-days-button']");
        this.purchasePrizeText = Selector("div.purchase div span.purchase-price");
        this.botonContinuar = Selector("#submit-test");
    }

    async clickBotonCookies(){
        return t.click(this.botonAceptarCookies());
    }
    async clickSelectAgeCont(){
        return t.click(this.selectAgeCont);
    }
    async clickBotonValidarAges(){
        return t.click(this.botonValidarAges);
    }
    async clickBotonMayores6064(){
        return t.click(this.botonSumarMayor6064);
    }
    async clickBoton3Dias(){
        return t.click(this.boton3Dias);
    }
    async clickBotonContinuar(){
        return t.click(this.botonContinuar);
    }
}
