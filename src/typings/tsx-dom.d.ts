import { LabelHTMLAttributes } from 'vue-tsx-support/types/dom'

import 'vue-tsx-support/enable-check'
import 'vue-tsx-support/options/enable-nativeon'

declare global {
	namespace JSX {
		interface IntrinsicElements {
			label: Omit<LabelHTMLAttributes, 'htmlfor'> & { for: string }
		}
	}
}
