import { style } from 'typestyle'
import * as theme from '@/ui/theme'
import { margin, percent } from 'csx'

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

				<ul class={styleSearchResults} data-test="search-results">
					{this.filteredQuotes.map(quote => <QuoteItem quote={quote} />)}
				</ul>
			</div>
		)
	},
})

const styleSelect = style({
	...theme.inputStyle,
	appearance: 'none',
	fontSize: percent(200),
	textTransform: 'lowercase',
	width: percent(50),
})

const styleSearchResults = style({
	margin: margin(40, 20),
	padding: 0,
})
