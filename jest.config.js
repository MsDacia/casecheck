module.exports = {
	collectCoverage: true,
	globals: {
		'ts-jest': {
			babelConfig: true,
		},
	},
	moduleFileExtensions: [
		'js',
		'json',
		'jsx',
		'ts',
		'tsx',
		'vue',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	snapshotSerializers: [
		'jest-serializer-vue',
	],
	testMatch: [
		'**/**/*.spec.(js|jsx|ts|tsx)',
		'**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
	],
	testURL: 'http://localhost/',
	transform: {
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.vue$': 'vue-jest',
	},
	transformIgnorePatterns: [
		'/node_modules/',
	],
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
}
