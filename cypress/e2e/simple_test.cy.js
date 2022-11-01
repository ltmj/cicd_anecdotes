describe('Anecdote collection', function() {
    it('Front page should contain header called Anecdotes, and at least 1 voting button', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Anecdotes')
      cy.contains('vote')
    })
  })