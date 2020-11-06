import { component } from 'vue-tsx-support'
import Quote from './Quote'
import quoteStore from '@/store/quoteGardenStore'

export default component({
	name: 'SearchResults',
	async mounted() {
		await quoteStore.fetchQuotes()
	},
	render() {
		return (
			<main>
				<section>
					<ul>
						{quoteStore.quotes.map(quote => <Quote quote={quote} />)}
					</ul>
				</section>
			</main>
		)
	},
})
