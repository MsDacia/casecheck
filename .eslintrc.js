module.exports = {
	env: {
		jest: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:@typescript-eslint/eslint-recommended',
		'@vue/typescript',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2017,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	root: true,
	rules: {
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
			imports: 'always-multiline',
			objects: 'always-multiline',
		}],
		'complexity': ['error', 20],
		'indent': ['error', 'tab'],
		'jsx-quotes': ['error', 'prefer-double'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-redeclare': 'off',
		'no-setter-return': 'error',
		'no-useless-computed-key': 'error',
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			asyncArrow: 'always',
			named: 'never',
		}],
		'vue/order-in-components': 'error',
		'vue/return-in-computed-property': 'off',
	},
}
