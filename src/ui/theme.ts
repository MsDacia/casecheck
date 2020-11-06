import { color, border, padding } from 'csx'
import { NestedCSSProperties } from 'typestyle/lib/types'

export const emSize = 14
export const fontFamily = '"Literata", serif'

export const computerBreakpoint = 767
export const largeMonitorBreakpoint = 1600

export const colorLight = '#dedede'
export const colorDark = '#000'

export const colorPrimaryDark = '#2F1c1c'
export const colorPrimaryMedium = '#deb881'
export const colorPrimaryLight = '#f1e9e7'

export const colorSecondaryMedium = '#198F2F'
export const colorSecondaryHover = color(colorSecondaryMedium).darken('5%').toHexString()

export const inputStyle: NestedCSSProperties = {
	alignItems: 'center',
	backgroundColor: 'transparent',
	border: border({
		color: colorPrimaryDark,
		style: 'solid',
		width: 1,
	}),
	borderRadius: 0,
	boxShadow: 'none',
	color: colorPrimaryDark,
	display: 'flex',
	flex: '1 0 auto',
	flexWrap: 'wrap',
	fontFamily: fontFamily,
	fontSize: 40,
	fontStyle: 'italic',
	fontWeight: 200,
	height: 'auto',
	justifyContent: 'flex-start',
	letterSpacing: -2,
	lineHeight: 1.1,
	margin: 0,
	outline: 0,
	padding: padding(10),
	position: 'relative',
	textAlign: 'left',
	transition: 'border .2s,opacity .4s,transform .4s,-webkit-transform .4s',

	$nest: {
		'&:hover, &:active, &.active, &:focus': {
			borderColor: colorSecondaryHover,
			cursor: 'pointer',
			outline: '0 none',
		},
	},
}
