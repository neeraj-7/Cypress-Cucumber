/// <reference types='cypress' />

Given ('User in appliction interface', function(){
    cy.visit('https://naveenautomationlabs.com/opencart/')
})

When ('User searchs the product', function(){
    cy.get('.form-control').type('macbook{enter}')
})

And ('click on the add to cart button', function(){

})

Then ('product should be added in cart', function(){

})