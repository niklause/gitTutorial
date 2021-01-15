/// <reference types="Cypress" />
describe('My first Test Suit ',function()
{
    it('My first test case ',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ba')
        cy.get('.products > .product').should('have.length',1)
         cy.get('.products').find('.product').eq(0).contains("ADD TO CART").click()
         cy.wait(4000)
        cy.get('.products').find('.product').each(($el,index,$list)=>
        {
            const textVeg=$el.find('.product-name').text()
            if(textVeg.includes('Banana'))
            {
              $el.find('button').click()
            }
        })
        cy.get('.brand').then(function(logoName)
        {
             cy.log(logoName.text())
        })
    })
})