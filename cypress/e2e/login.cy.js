
var Query = require('./POM/Querying_Page.js');
let query = new Query();

describe("hello", () => {
  it("hi", () => {
    query.link();
    // cy.visit('https://example.cypress.io/commands/querying')
    cy.get("#query-btn").click();
    cy.get("button[class='btn btn-default'] span").click();
    cy.get("#inputName").type("Sanjeev");
    cy.get("#inputEmail").type("shobhit0932@hotmail.com");
    cy.get("#inputPassword").type("noneed");
  });

  it.only("incorrect email", () => {
    // cy.visit('https://example.cypress.io/commands/querying')
    query.link();
    // query.btn();
    // query.form();
    query.name();
    // query.email('bjm');
    // query.pass();

    // cy.get(".dropdown-toggle").click();
    // cy.get(".dropdown-menu > :nth-child(3) > a").click();
    // cy.get("#email1").type("shobhit0932@outlook.com");
    // cy.get(":nth-child(2) > .form-control").should("not.be.enabled");
  });
});
