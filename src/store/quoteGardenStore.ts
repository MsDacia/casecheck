import Vue from 'vue'

export interface Author {
	firstName: string
	lastName: string
}
export interface Quote {
	author: Author
	id: string
	name: string
	quote: string
}

interface QuoteResponse {
	_id: string
	quoteAuthor: string
	quoteText: string
}

interface QuotesResponse {
	quotes: QuoteResponse[]
}

const state = Vue.observable({
	errorMessage: '',
	isProcessing: false,
	quotes: [] as Quote[],
})

function splitName(name: string) {
	const fullName = name.split(' ')

	const lastName = fullName.pop() || ''
	const firstName = fullName.join(' ')

	return {
		firstName,
		lastName,
	}
}

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
			state.quotes = quotesResponse.quotes.map(quote => {
				return {
					id: quote._id,
					author: splitName(quote.quoteAuthor),
					name: quote.quoteAuthor,
					quote: quote.quoteText,
				}
			})
		} catch (error) {
			console.error(error)
			state.errorMessage = error
			throw error
		} finally {
			state.isProcessing = false
		}
	},
}
