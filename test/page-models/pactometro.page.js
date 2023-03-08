import { Selector, t } from "testcafe";

export default class PactometroPage{
    constructor() {
        this.botonPSOE = Selector("#part-PSOE");
        this.botonPodemos = Selector("#part-Podemos");
        this.botonPP = Selector("#part-PP");
        this.botonVox = Selector("#part-Vox");
        this.cajaSies = Selector("#sies");
        this.cajaNoes = Selector("#noes");
        this.numeroSies = Selector("#num-sies");
        this.numeroNoes = Selector("#num-noes");
        this.botonReset = Selector("#reset");
    }
    async clickPartidoPSOEButton(){
        return t.click(this.botonPSOE);
    }
    async clickPartidoPPButton(){
        return t.click(this.botonPP);
    }
    async clickPartidoVoxButton(){
        return t.click(this.botonVox);
    }
    async clickPartidoPodemosButton(){
        return t.click(this.botonPodemos);
    }

    async clickCajaSies(){
        return t.click(this.cajaSies);
    }
    async clickCajaNoes(){
        return t.click(this.cajaNoes);
    }

    async clickBotonReset(){
        return t.click(this.botonReset);
    }

}
