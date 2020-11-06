import { component } from 'vue-tsx-support'
import quoteStore from '@/store/quoteGardenStore'

export default component({
	name: 'SearchBar',
	data() {
		return {
			query: '',
			showErrorMessage: false,
		}
	},
	methods: {
		/**
		 * Method to handle onKeydown to execute search
		 */
		handleKeyDown(event: KeyboardEvent) {
			if (quoteStore.isProcessing) return false

			switch (event.key) {
			case 'Enter':
				quoteStore.fetchQuotes(this.query)
				break
			case 'Esc':
				this.query = ''
				break
			}
		},
	},

	render() {
		return (
			<div>
				<input
					data-test="search-quote-gardens"
					name="search"
					onKeydown={this.handleKeyDown}
					placeholder="Type to search ..."
					type="search"
					v-model_trim={this.query}
				/>
				<button
					data-test="search-quote-grands-button"
					disabled={quoteStore.isProcessing}
					onClick={() => quoteStore.fetchQuotes(this.query)}
				>search</button>
				{quoteStore.errorMessage &&
					<p>{quoteStore.errorMessage}</p>
				}
			</div>
		)
	},
})
