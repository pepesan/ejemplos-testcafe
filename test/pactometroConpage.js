import { Selector } from 'testcafe';
import PactometroPage from "./page-models/pactometro.page";

const pactometroPage = new PactometroPage();

fixture('Getting Started')
    // given
    .page('https://cursosdedesarrollo.com/pactometro/');

    /*
    Test sencillo
    */
test('TestCoalicion Psoe-Podemos', async t => {
    // When
    await pactometroPage.clickPartidoPSOEButton();
    // Then
    await t.expect(pactometroPage.botonPSOE.getAttribute("disabled"))
        .eql("disabled");
    // When
    await pactometroPage.clickCajaSies();
    // Then
    await t.expect(pactometroPage.numeroSies.innerText)
        .eql("120");
    // Then
    await t.expect(pactometroPage.botonPSOE.getAttribute("style"))
    .eql("display: none;");
    // When
    await pactometroPage.clickBotonReset()
    // Then
    await t.expect(pactometroPage.numeroSies.innerText)
        .eql("0");
});
// Test más complejo
test('Coalicion + Oposicion', async t => {
    // When
    await pactometroPage.clickPartidoPSOEButton();
    // When
    await pactometroPage.clickPartidoPodemosButton();
    // When
    await pactometroPage.clickCajaSies();
    // Then
    await t.expect(pactometroPage.numeroSies.innerText)
        .eql("155");
    // When
    await pactometroPage.clickPartidoPPButton();
    // When
    await pactometroPage.clickPartidoVoxButton();
    // When
    await pactometroPage.clickCajaNoes();
    // Then
    await t.expect(pactometroPage.numeroNoes.innerText)
        .eql("141");
});
