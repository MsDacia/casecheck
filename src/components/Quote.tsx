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
			<li key={this.quote.id} onClick={() => this.$router.push({ name: 'quote', params: { id: this.quote.id } })}>
				<p data-test="quote-text">{this.quote.quote}</p>
			</li>
		)
	},
})

