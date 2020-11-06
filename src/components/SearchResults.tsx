import { component } from 'vue-tsx-support'
import Item from './Item'

export default component({
	name: 'SearchResults',
	render() {
		return (
			<main>
				<section>
					<ul>
						<Item />
					</ul>
				</section>
			</main>
		)
	},
})
