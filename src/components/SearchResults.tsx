import { style } from 'typestyle'
import * as theme from '@/ui/theme'
import { percent } from 'csx'

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
			<div>
				{this.filteredQuotes.length > 0 &&
					<select
						v-model={this.author}
						class={styleSelect}
						name="author"
					>
						<option value="">filter by name</option>
						{this.filteredQuotes.map(option => <option value={option.name}>{option.name}</option>)}
					</select>
				}

				<ul data-test="search-results">
					{this.filteredQuotes.map(quote => <QuoteItem quote={quote} />)}
				</ul>
			</div>
		)
	},
})

const styleSelect = style({
	...theme.inputStyle,
	appearance: 'none',
	textTransform: 'lowercase',
	width: percent(50),
})
