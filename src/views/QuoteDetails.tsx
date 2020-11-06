import { style } from 'typestyle'
import { percent } from 'csx'

import { component } from 'vue-tsx-support'
import quoteStore, { Quote } from '@/store/quoteGardenStore'

export default component({
	name: 'QuoteDetails',
	computed: {
		quote(): Quote | undefined {
			return quoteStore.quotes.find(quote => quote.id === this.$route.params.id)
		},
	},
	render(): JSX.Element {
		return (
			<main>
				<header>
					<button onClick={() => this.$router.go(-1)}>&#8592;</button>
				</header>

				<section>
					{!this.quote ?
						<p class={styleNoResults}>
							No deep thoughts here.<br />
							<a onClick={() => this.$router.go(-1)}>Go back to previous page.</a>
						</p>
						:
						<div>
							<blockquote>{this.quote.quote}</blockquote>
							<em>{this.quote.name}</em>
						</div>
					}
				</section>
			</main>
		)
	},
})

const styleNoResults = style({
	fontSize: 60,
	letterSpacing: -2.5,
	lineHeight: 1.08,
	textAlign: 'center',

	$nest: {
		'a': {
			fontSize: percent(75),
		},
	},
})
