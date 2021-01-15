///<reference types="Cypress" />

describe("My 2nd Test Suite" , function()
{
    it("All HTMl Elements test caeses",function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
        cy.get('#dropdown-class-example').select('option1').should('have.value',"option1")
      

        //Show - Hide Buttons
        cy.wait(2000)
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.wait(3000)
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.get('[value="radio1"]').check().should('be.checked')
    })
})