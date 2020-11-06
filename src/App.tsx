import { cssRaw, cssRule } from 'typestyle'
import { color, percent, viewHeight } from 'csx'
import { component } from 'vue-tsx-support'

import * as theme from '@/ui/theme'

export default component({
	name: 'App',
	render() {
		return (
			<router-view />
		)
	},
})

cssRaw('@import url("https://fonts.googleapis.com/css2?family=Literata:wght@200;300;400;700;900&display=swap" rel="stylesheet")')

cssRule('*, ::before, ::after', {
	boxSizing: 'border-box',
})

cssRule('html, body', {
	backgroundColor: theme.colorPrimaryLight,
	color: theme.colorPrimaryDark,
	fontFamily: theme.fontFamily,
	fontSize: theme.emSize,
	height: viewHeight(100),
	margin: 0,
	minHeight: viewHeight(100),
})

cssRule('main', {
	display: 'flex',
	flexDirection: 'column',
	height: viewHeight(100),
	margin: '0 auto',
	maxWidth: 1440,
	position: 'relative',

	$nest: {
		'header, section': {
			padding: 20,
		},
	},
})

cssRule('a', {
	color: theme.colorSecondaryMedium,
	fontWeight: 200,

	$nest: {
		'&:hover': {
			color: theme.colorSecondaryHover,
			cursor: 'pointer',
			textDecoration: 'underline',
		},
	},
})

cssRule('button', {
	...theme.inputStyle,
	minWidth: 300,
	justifyContent: 'center',
	textAlign: 'center',

	$nest: {
		'&:hover': {
			color: theme.colorSecondaryHover,
			cursor: 'pointer',
		},
	},
})

cssRule('.styled-quotes', {
	color: color(theme.colorPrimaryDark).lighten('50%').toHexString(),
	fontSize: percent(120),
	display: 'inline-block',
	left: -12,
	position: 'absolute',
	top: -10,
})
