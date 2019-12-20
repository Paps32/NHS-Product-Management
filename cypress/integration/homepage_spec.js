describe('homepage', function () {
  it ('renders correct sub section buttons', function(){
    cy.visit('http://localhost:3000')
    cy.numberOfLinks('.sub-section-buttons', 7)
  })

it ('renders correct header', function(){
  cy.visit('http://localhost:3000')
  cy.get('h2').contains('Resources and information for those working on health digital products and services')

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
  it ('renders correct heading for subpage', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').find('h2').eq(3).contains('Agile working')
  })
  it ('renders correct heading for subpage', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').find('h2').eq(4).contains('Lifestyle perspective')
  })
  it ('renders correct heading for subpage', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').find('h2').eq(5).contains('Product ownership')
  })
  it ('renders correct heading for subpage', function(){
    cy.visit('http://localhost:3000')
    cy.get('.sub-section-buttons').find('h2').eq(6).contains('Digital perspective')
  })
})
