describe("A very simple login form", function () { beforeEach(() => { cy.visit("http://localhost:3000/login.html"); })
it("Should display 'The form is valid!' success message", function ()
 { cy.get("[test-id='username']").type("username"); 
cy.get("[test-id='password']").type("password");
cy.get("[test-id='login']").click();
cy.get("[error-id]").should("not.exist")
cy.get("[test-id='success']").should($div => { const text = $div.text().trim();
expect(text).to.equal("The form is valid!") }) })
})