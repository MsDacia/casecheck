import { component } from 'vue-tsx-support'

import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'

export default component({
	name: 'Home',
	render() {
		return (
			<main>
				<header>
					<h1 data-test="title">Quote Gardens</h1>
				</header>

				<section>
					<SearchBar />

					{/* Add filter dropdown */}
				</section>

				<section>
					<SearchResults />
				</section>
			</main>
		)
	},
})
