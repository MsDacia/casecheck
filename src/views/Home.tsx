import { style } from 'typestyle'
import { border, percent } from 'csx'
import * as theme from '@/ui/theme'

import { component } from 'vue-tsx-support'

import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'

export default component({
	name: 'Home',
	render() {
		return (
			<main>
				<header class={styleHeading}>
					<h1 data-test="title">
						<span class="styled-quotes">&#8220;</span>Quote Gardens
					</h1>
				</header>

				<section>
					<SearchBar />
				</section>

				<section>
					<SearchResults />
				</section>
			</main>
		)
	},
})

const styleHeading = style({
	borderBottom: border({
		color: theme.colorPrimaryDark,
		style: 'solid',
		width: 1,
	}),

	$nest: {
		'h1': {
			fontSize: percent(300),
			lineHeight: 'normal',
			margin: 0,
			position: 'relative',
		},
	},
})
