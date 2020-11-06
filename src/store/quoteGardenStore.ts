import Vue from 'vue'

export interface Quote {
	_id: string,
	quoteText: string,
	quoteAuthor: string
}

const state = Vue.observable({
	errorMessage: '',
	filteredQuotes: [] as Quote[],
	isProcessing: false,
	quotes: [] as Quote[],
	quotesByQuery: [] as Quote[],
	searchQuery: '',
	selectedQuote: null as Quote | null,
})

export default {
	// Getters
	get errorMessage() {
		return state.errorMessage
	},
	get filteredQuotes() {
		return state.filteredQuotes
	},
	get isProcessing() {
		return state.isProcessing
	},
	get searchQuery() {
		return state.searchQuery
	},
	get quotes() {
		return state.quotes
	},
	get quotesByQuery() {
		return state.quotesByQuery
	},
	get selectedQuote() {
		return state.selectedQuote
	},

	// Actions
	async fetchQuotes() {
		state.isProcessing = true
		try {
			const response = await fetch('https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10')
			const quotesResponse = await response.json()
			state.quotes = quotesResponse.quotes
		} catch (error) {
			console.error(error)
			state.errorMessage = error
			throw error
		} finally {
			state.isProcessing = false
		}
	},

	filterQuotes() {
		state.quotesByQuery.filter(quote => state.searchQuery === quote.quoteText)
	},

	async searchQuotesByQuery() {
		state.isProcessing = true
		try {
			const response = await fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/:${state.searchQuery}`)
			const quotesResponse = await response.json()
			state.quotesByQuery = quotesResponse.quotes
		} catch (error) {
			console.error(error)
			state.errorMessage = error
			throw error
		} finally {
			state.isProcessing = false
		}
	},
}
