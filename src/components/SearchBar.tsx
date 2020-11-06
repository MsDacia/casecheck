import { component } from 'vue-tsx-support'

export default component({
	name: 'SearchBar',
	data() {
		return {
			errorMessage: '',
			query: '',
			showErrorMessage: false,
		}
	},
	methods: {
		/**
		 * Execute search
		 */
		async executeSearch(event: KeyboardEvent) {
			try {
				// Search logic
				console.log('search executed')
			} catch (error) {
				this.showErrorMessage = true
				this.errorMessage = error
			}
		},
	},
	render() {
		return (
			<div>
				<input
					type="search"
					name="search"
					placeholder="Search&hellip;"
					v-model_trim={this.query}
					onKeydown={(e) => this.executeSearch(e)}
					data-test="search-quote-gardens"
				/>
				{this.showErrorMessage &&
					<p>{this.errorMessage}</p>
				}
			</div>
		)
	},
})
