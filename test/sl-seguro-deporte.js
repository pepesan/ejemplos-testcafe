import SlPrimeraPage from "./page-models/sl-primera.page";
import SlInsuranceInfoPage from "./page-models/sl-insurance-info.page";

const slPrimeraPagina = new SlPrimeraPage();
const slInsuranceInfoPage = new SlInsuranceInfoPage();


fixture('Getting Started')
    // given
    .page('https://segurodedeportes.santalucia.es/preventivatore;code=santalucia-deporte,santalucia-deporte-rec');

test("Crear Seguro Deporte", async t => {
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
})
