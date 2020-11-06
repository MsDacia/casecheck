import { component } from 'vue-tsx-support'
import prop from 'vue-strict-prop'
import { Quote } from '@/store/quoteGardenStore'

export default component({
	name: 'Quote',
	props: {
		quote: prop.ofType<Quote>().required,
	},
	render(): JSX.Element {
		return (
			<li key={this.quote._id}>
				<p data-test="quote-text">{this.quote.quoteText}</p>
				<p data-test="quote-author">{this.quote.quoteAuthor}</p>
			</li>
		)
	},
})

