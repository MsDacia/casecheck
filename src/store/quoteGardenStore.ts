import Vue from 'vue'

export interface Quote {
	_id: string,
	quoteText: string,
	quoteAuthor: string
}

interface QuotesResponse {
	quotes: Quote[]
}

const state = Vue.observable({
	errorMessage: '',
	isProcessing: false,
	quotes: [] as Quote[],
})

export default {
	// Getters
	get errorMessage() {
		return state.errorMessage
	},
	get isProcessing() {
		return state.isProcessing
	},
	get quotes() {
		return state.quotes
	},

	// Actions
	async fetchQuotes(searchQuery: string) {
		state.isProcessing = true
		try {
			const response = await fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/${searchQuery}`)
			const quotesResponse: QuotesResponse = await response.json()
			state.quotes = quotesResponse.quotes
			// Transform data from response
		} catch (error) {
			console.error(error)
			state.errorMessage = error
			throw error
		} finally {
			state.isProcessing = false
		}
	},
}
