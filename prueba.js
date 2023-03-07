import { Selector } from 'testcafe';


fixture('Getting Started')
    // given
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
	var nombre = 'John Smith';
	// When
	await t.typeText('#developer-name', nombre);
	await t.click('#submit-button');
	// Then
	await t.expect(Selector('#article-header').innerText).eql("Thank you, "+nombre+"!");
});

