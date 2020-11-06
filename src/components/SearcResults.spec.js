import { shallowMount } from '@vue/test-utils'
import SearchResults from './SearchResults'

const wrapper = shallowMount(SearchResults)
describe('Filter search results', () => {
	it('should filter quotes by author name', () => {
		const quotes = wrapper.findAll('[data-test="search-results]')
		const filteredQuotes = quotes.filter(...)
	})
})

