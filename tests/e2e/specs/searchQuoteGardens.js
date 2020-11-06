describe('Access Quote Gardens landing page', () => {
	it('should view the root url', () => {
		cy.visit('/')
	})

	it('should have title', () => {
		cy.contains('[data-test=title]', 'Quote Gardens')
	})

	it('should be able to execute a search via submit button', () => {
		cy.get('[data-test=search-quote-gardens]')
			.type('test')
			.trigger('blur')
			.should('have.value', 'test')
		cy.get('[data-test=search-quote-grands-button]').click()
	})

	it('should be able to execute a search via enter key press', () => {
		cy.get('[data-test=search-quote-gardens]')
			.clear()
			.type('test{enter}')
	})
	it('should have search results', () => {
		cy.get('[data-test=search-results')
			.should('be.visible')
	})
})
