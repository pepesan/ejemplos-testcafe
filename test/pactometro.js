import { Selector } from 'testcafe';


fixture('Getting Started')
    // given
    .page('https://cursosdedesarrollo.com/pactometro/');

test('TestCoalicion Psoe-Podemos', async t => {
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
    await t.expect(Selector("#part-PSOE").getAttribute("style"))
    .eql("display: none;");
    // When
    await t.click("#reset");
    // Then
    await t.expect(Selector("#num-sies").innerText)
        .eql("0");
});

test('Coalicion + Oposicion', async t => {
    // When
    await t.click("#part-PSOE");
    // When
    await t.click("#part-Podemos");
    // When
    await t.click("#sies");
    // Then
    await t.expect(Selector("#num-sies").innerText)
        .eql("155");
    // When
    await t.click("#part-PP");
    // When
    await t.click("#part-Vox");
    // When
    await t.click("#noes");
    // Then
    await t.expect(Selector("#num-noes").innerText)
        .eql("141");
});