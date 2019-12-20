describe('subpage', function () {
  describe('Overview', function(){
    it ('renders correct topic areas', function(){
      cy.visit('http://localhost:3000')
      cy.get('.sub-section-buttons').find('h2').first().click()
      cy.numberOfLinks('.topic-area', 6)
    })
  })


it ('renders correct header', function(){
  cy.visit('http://localhost:3000')
  cy.get('h2').contains('Resources and information for those working on health digital products and services')

})
})
