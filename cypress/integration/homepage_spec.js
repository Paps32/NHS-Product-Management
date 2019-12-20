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

describe('subpage', function (){
  it ('renders correct heading for subpage', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').find('h2').first().contains('Overview')
  })
  it ('renders correct heading for subpage', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').find('h2').eq(1).contains('User focus')
  })
  it ('renders correct heading for subpage', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').find('h2').eq(2).contains('Strategic ownership')
  })
})
