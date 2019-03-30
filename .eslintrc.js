module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'vue/prop-name-casing': ['error', 'camelCase'],
		'vue/script-indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab', {
			attribute: 1,
			closeBracket: 1,
			alignAttributesVertically: true,
			ignores: [],
		}],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
