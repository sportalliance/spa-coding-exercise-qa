//Perform a successfully login and assert that the user is redirected to the dashboard page and element .ml-main is present
//Test should start but is currently broken, we will fix the test together
it('test1', () => {
    cy.visit('https://coding-session.web.magicline.com')
    cy.get("body > div.ml-ref-app.ml-app.ml-app-expanded > div > div > div > div > form > div:nth-child(1)").type("user")
    cy.get("[data-role=password]").type("123456")
    cy.contains("Anmelden")
    cy.wait(5000)
    cy.get(".ml-main").should("be.visible")
})
