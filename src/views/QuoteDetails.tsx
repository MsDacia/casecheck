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
	async mounted() {
		if (!this.quote) {
			await quoteStore.fetchQuotes('')
			quoteStore.quotes.find(quote => quote.id === this.$route.params.id)
		}
	},
	render(): JSX.Element {
		return (
			<main>
				<header>
					<button
						class={styleBackButton}
						onClick={() => this.$router.go(-1)}
					>&#10094;</button>
				</header>

				{!quoteStore.isProcessing &&
					<section>
						{!this.quote ?
							<p class={styleNoResults}>
								No deep thoughts here.<br />
								<a onClick={() => this.$router.go(-1)}>Go back to previous page.</a>
							</p>
							:
							<div class={styleBlockQuote}>
								<span class="styled-quotes">&#8220;</span>
								<blockquote>{this.quote.quote}</blockquote>
								<em>&mdash; {this.quote.name ? this.quote.name : 'unknown'}</em>
							</div>
						}
					</section>
				}
			</main>
		)
	},
})

const styleBackButton = style({
	fontStyle: 'normal',
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

const styleBlockQuote = style({
	fontSize: percent(300),
	margin: '0 auto',
	maxWidth: 700,
	position: 'relative',
	width: percent(100),

	$nest: {
		'span': {
			$nest: {
				'&.styled-quotes': {
					fontSize: percent(400),
					left: -38,
					top: -30,
				},
			},
		},

		'blockquote': {
			fontSize: percent(200),
		},
	},
})
