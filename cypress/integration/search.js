import {search} from "../../cypress/fixtures/selectors.js";
 
describe("Given that user is on the landing page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      it('fails to visit website 1', function () {
        cy.visit('https://www.ebay.com/')
      })
 
    it("SEARCH -User should be able to search for products  ", function () {
        cy.get(search.searchBtn).click()
        cy.get(search.searchforanythingField).type(search.searchforanythingText)
        cy.get(search.searchBtn1).click()
        cy.get(search.buyitnowBtn).click()
        cy.get(search.carticonBtn).click()
        cy.get(search.startshoppingBtn).click()
      
    })
    it("User should be able to click on sell  ", function () {
        cy.get(search.sellField).click()
        cy.get(search.sellBtn).click()
        cy.get(search.listanitemField).click()
        cy.get(search.listyouritemBtn).click()
       // cy.get(search.faqBtn).click()
    });

 
 
})

