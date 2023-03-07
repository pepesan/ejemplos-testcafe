import MyForm from "./page-models/form.page";
import MyResults from "./page-models/result.page";

const myForm = new MyForm();


fixture('Getting Started')
    // given
    .page('https://devexpress.github.io/testcafe/example');

test('My Page Model Test', async t => {
	const nombre = 'David Vaquero';
	await myForm.typeTextDeveloperNameInput(nombre);
    await myForm.clickSubmitButton();
	const myResults = new MyResults();
    await t.expect(myResults.articleHeader.innerText)
	.eql("Thank you, "+nombre+"!");
});

