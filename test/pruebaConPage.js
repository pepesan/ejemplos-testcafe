import { Selector } from 'testcafe';

import {MyForm} from "./page-models/form.page";


fixture('Getting Started')
    // given
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
	var nombre = 'John Smith';
	// When
	MyForm.developerNameInputTypeText(nombre);
	MyForm.clickSubmitButton();
	// Then
	await t.expect(Selector('#article-header').innerText).eql("Thank you, "+nombre+"!");
});

