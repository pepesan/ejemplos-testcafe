import SlPrimeraPage from "./page-models/sl-primera.page";
import SlInsuranceInfoPage from "./page-models/sl-insurance-info.page";

const slPrimeraPagina = new SlPrimeraPage();
const slInsuranceInfoPage = new SlInsuranceInfoPage();


fixture('Getting Started')
    // given
    .page('https://segurodedeportes.santalucia.es/preventivatore;code=santalucia-deporte,santalucia-deporte-rec');

test("Crear Seguro Deporte", async t => {
    const selectedSport = "ESQUÍ";
    const selectedAsured = "2";
    const selectedPeriod = "3 días";
    const selectedPrice = "9,74";
    // Then

    // When
    // pulsar el boton de cookies
    // await slPrimeraPagina.clickBotonCookies();
    // Elegir el deporte
    await t
        .click(slPrimeraPagina.selectSport)
        .click(slPrimeraPagina.selectSportOptionEsqui);
    // Then
    // comprobar que el value es correcto en el campo select
    await t.expect(slPrimeraPagina.selectSport.value).eql('6: 002');
    // When
    await slPrimeraPagina.clickSelectAgeCont();
    // When
    // Seleccionamos una persona de X años
    await slPrimeraPagina.clickBotonMayores6064();
    await slPrimeraPagina.clickBotonMayores6064();
    // Then
    await t.expect(slPrimeraPagina.inputSumarMayor6064.value)
        .eql("2");
    // When
    await slPrimeraPagina.clickBotonValidarAges();
    // Then
    await t.expect(slPrimeraPagina.inputAseguradosElegidos.value)
        .eql("   2 (60-64)");
    //When
    await slPrimeraPagina.clickBoton3Dias();
    //Then
    await t.expect(slPrimeraPagina.purchasePrizeText.innerText)
        .contains("9,74");
    //When
    await slPrimeraPagina.clickBotonContinuar();

    // Ya en la página de información del seguro
    //Then
    await t.expect(slInsuranceInfoPage.sportText.innerText)
        .eql(selectedSport);
    await t.expect(slInsuranceInfoPage.asuredText.innerText)
        .eql(selectedAsured);
    await t.expect(slInsuranceInfoPage.periodText.innerText)
        .eql(selectedPeriod);
    await t.expect(slInsuranceInfoPage.actualPrice.innerText)
        .contains(selectedPrice);
})
