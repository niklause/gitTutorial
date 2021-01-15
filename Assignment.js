/// <reference types="Cypress" />
describe('My Cypress Assignment Suit',function()
{
    it('My Cypress Assignment Test Cases',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('c')
        cy.get('.products > .product').should('have.length',7)
        cy.get('.products').find('.product').eq(0).contains("ADD TO CART").click()
     
        cy.wait(4000)
        cy.get('.products').find('.product').each(($el,index,$list) =>
        {
            let textVeg=$el.find('.product-name').text()
            if(textVeg.includes("Carrot"))
            {
                $el.find('button').click()
            }
             if(textVeg.includes("Cauliflower"))
            {
                $el.find('button').click()
            } 

        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/cart")
        })
        cy.contains('Place Order').click()
      

    })
})