import { style } from 'typestyle'
import { percent } from 'csx'
import { component } from 'vue-tsx-support'
import prop from 'vue-strict-prop'

import * as theme from '@/ui/theme'

import { Quote } from '@/store/quoteGardenStore'

export default component({
	name: 'Quote',
	props: {
		quote: prop.ofType<Quote>().required,
	},
	render(): JSX.Element {
		return (
			<ol
				class={styleQuote}
				key={this.quote.id}
				onClick={() => this.$router.push({ name: 'quote', params: { id: this.quote.id } })}
			>
				<p data-test="quote-text">
					<span class="styled-quotes">&#8220;</span>
					<span>{this.quote.quote}</span>
				</p>
			</ol>
		)
	},
})

const styleQuote = style({
	fontSize: percent(200),
	paddingLeft: 0,

	$nest: {
		'&:hover': {
			color: theme.colorSecondaryHover,
			cursor: 'pointer',
		},

		'p': {
			fontSize: percent(130),
			maxWidth: 700,
			overflow: 'hidden',
			position: 'relative',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			width: percent(100),

			$nest: {
				'span': {
					paddingLeft: 35,

					$nest: {
						'&.styled-quotes': {
							fontSize: percent(150),
							left: 10,
							paddingLeft: 0,
							top: -10,
						},
					},
				},
			},
		},
	},
})
