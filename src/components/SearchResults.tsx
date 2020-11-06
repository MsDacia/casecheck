import { component } from 'vue-tsx-support'
import Quote from './Quote'
import quoteStore from '@/store/quoteGardenStore'

export default component({
	name: 'SearchResults',
	render() {
		return (
			<main>
				<section>
					<ul data-test="search-results">
						{quoteStore.quotes.map(quote => <Quote quote={quote} />)}
					</ul>
				</section>
			</main>
		)
	},
})
