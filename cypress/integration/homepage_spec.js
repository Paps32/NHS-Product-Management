describe('homepage', function () {
  it ('renders correct sub section buttons', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').should('have.length',7)
  })

it ('renders correct header', function(){
  cy.visit('http://localhost:3000')
  cy.get('h1').contains('Resources and information for product managers')

})
})
