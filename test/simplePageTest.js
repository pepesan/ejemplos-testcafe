import MyForm from "./page-models/form.page";

const myForm = new MyForm();


fixture('Getting Started')
    // given
    .page('https://devexpress.github.io/testcafe/example');


test("Text Main Title", async t =>{
    await t.expect(myForm.mainTitle.innerText)
        .eql("Example");
});
