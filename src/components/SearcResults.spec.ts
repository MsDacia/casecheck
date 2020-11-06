import { mount } from '@vue/test-utils'
import SearchResults from './SearchResults'
import quoteStore from '@/store/quoteGardenStore'

afterEach(() => {
	jest.restoreAllMocks()
})

describe('Filter search results', () => {
	it('should filter quotes by author name', async () => {

		jest.spyOn(quoteStore, 'quotes', 'get')
			.mockImplementation(() => [
				{
					id: '1',
					author: {
						firstName: 'Michael',
						lastName: 'Che',
					},
					name: 'Michael Che',
					quote: 'Welcome to Weekend Update',
				},
				{
					id: '2',
					author: {
						firstName: 'Colin',
						lastName: 'Jost',
					},
					name: 'Colin Jost',
					quote: 'Welcome to Saturday Night Live',
				},
			])

		const wrapper = mount(SearchResults)
		await wrapper.setData({ author: 'Michael' })

		const { filteredQuotes } = wrapper.vm

		expect(filteredQuotes.length).toBe(1)
		expect(filteredQuotes[0].name).toBe('Michael Che')
	})
})

