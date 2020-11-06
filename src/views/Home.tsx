import { style } from 'typestyle'
import { border, color, percent } from 'csx'
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
	borderBottom: border({
		color: theme.colorPrimaryDark,
		style: 'solid',
		width: 1,
	}),

	$nest: {
		'h1': {
			fontSize: percent(220),
			lineHeight: 'normal',
			margin: 0,
			position: 'relative',

			$nest: {
				'span': {
					color: color(theme.colorPrimaryDark).lighten('50%').toHexString(),
					fontSize: percent(200),
					display: 'inline-block',
					left: -12,
					position: 'absolute',
					top: -10,
				},
			},
		},
	},
})
