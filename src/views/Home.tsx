import { style } from 'typestyle'
import { color, percent } from 'csx'
import * as theme from '@/ui/theme'

import { component } from 'vue-tsx-support'

import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'

export default component({
	name: 'Home',
	render() {
		return (
			<main>
				<header>
					<h1 class={styleHeading} data-test="title">
						<span>&#8220;</span>Quote Gardens
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
	fontSize: percent(500),
	lineHeight: 'normal',
	margin: 0,
	position: 'relative',

	$nest: {
		'span': {
			color: color(theme.colorPrimaryDark).lighten('50%').toHexString(),
			fontSize: percent(120),
			display: 'inline-block',
			left: -12,
			position: 'absolute',
			top: -10,
		},
	},
})
