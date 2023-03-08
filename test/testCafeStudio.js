import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://segurodedeportes.santalucia.es/preventivatore;code=santalucia-deporte,santalucia-deporte-rec`;

test('New Test', async t => {
    await t
        // .click('#onetrust-accept-btn-handler')
        .click('app-main-default .form-control.ng-untouched.ng-pristine.ng-invalid')
        .click(Selector('app-main-default option').withText('ESQUÍ'))
        .click('app-main-default [class^="form-control select-age ng-untouched ng-pristine n"]')
        .click(Selector('app-main-default .col-auto.p-0.add-remove-buttons.santa-lucia_db').nth(13))
        .click(Selector('app-main-default .col-auto.p-0.add-remove-buttons.santa-lucia_db').nth(13))
        .expect(Selector('input[data-cy="age-selector__number-of-insureds-65-display"]').value).eql("2", {
            timeout: 500
        });
});
