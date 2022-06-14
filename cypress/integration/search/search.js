/// <reference types='cypress' />

Given('user opens the application in browser', function() {
    cy.visit('https://naveenautomationlabs.com/opencart/')
});

When('user search some items in the search box', function() {
    cy.get('.form-control').type('macbook{enter}')
})

Then('those items should be visible in search results', function() {
    cy.get(':nth-child(1) > .product-thumb > :nth-child(2) > .caption > h4 > a').should('be.visible')
})