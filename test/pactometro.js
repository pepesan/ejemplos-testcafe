import { Selector } from 'testcafe';


fixture('Getting Started')
    // given
    .page('https://cursosdedesarrollo.com/pactometro/');

test('ClickAndDisabled', async t => {
    // When
    await t.click("#part-PSOE");
    // Then
    await t.expect(Selector("#part-PSOE").getAttribute("disabled"))
        .eql("disabled");
    // When
    await t.click("#sies");
    // Then
    await t.expect(Selector("#num-sies").innerText)
        .eql("120");
    // Then
    await t.expect(Selector("#part-PSOE").getAttribute())
    .eql("display: none;");
});