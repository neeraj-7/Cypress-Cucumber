/// <reference types='cypress' />

Given('User opens the login page', function() {
    cy.visit('https://naveenautomationlabs.com/opencart/')
});

When('User logged in using the valid credential', () => {
    cy.get('.form-control').type('macbook{enter}')
});
Then('User must be logged in',() => {
    cy.get('.dropdown > .dropdown-toggle > .fa').should('be.visible')
});