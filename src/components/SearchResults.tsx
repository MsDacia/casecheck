import { component } from 'vue-tsx-support'
import QuoteItem from './Quote'
import quoteStore, { Quote } from '@/store/quoteGardenStore'

export default component({
	name: 'SearchResults',
	data() {
		return {
			author: '',
		}
	},
	computed: {
		filteredQuotes(): Quote[] {
			return quoteStore.quotes.filter(quote => quote.name.includes(this.author))
		},
	},
	render(): JSX.Element {
		return (
			<main>
				<section>
					<ul data-test="search-results">
						{this.filteredQuotes.map(quote => <QuoteItem quote={quote} />)}
					</ul>
				</section>

				{this.filteredQuotes.length > 0 &&
					<select v-model={this.author} name="author">
						<option value="">Filter by name</option>
						{this.filteredQuotes.map(option => <option value={option.name}>{option.name}</option>)}
					</select>
				}
			</main>
		)
	},
})
