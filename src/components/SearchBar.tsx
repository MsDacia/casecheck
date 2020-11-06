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
			if (event.keyCode === 13) {
				console.log('Enter key pressed')
				quoteStore.fetchQuotes(this.query)
			}
		},
	},

	render() {
		return (
			<div>
				<input
					data-test="search-quote-gardens"
					name="search"
					onKeyup={() => this.handleKeyDown}
					placeholder="Type to search ..."
					type="search"
					v-model_trim={this.query}
				/>
				<button data-test="search-quote-grands-button" onClick={() => quoteStore.fetchQuotes(this.query)}>search</button>
				{quoteStore.errorMessage &&
					<p>{quoteStore.errorMessage}</p>
				}
			</div>
		)
	},
})
