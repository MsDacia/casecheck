import { component } from 'vue-tsx-support'
import quoteStore, { Quote } from '@/store/quoteGardenStore'

export default component({
	name: 'QuoteDetails',
	computed: {
		quote(): Quote {
			return quoteStore.quotes.find(quote => quote.id === this.$route.params.id) as Quote
		},
	},
	render(): JSX.Element {
		return (
			<main>
				<header>
					<h1>Quote Details</h1>
				</header>

				<section>
					<blockquote>{this.quote.quote}</blockquote>
					<em>{this.quote.name}</em>
				</section>
			</main>
		)
	},
})
