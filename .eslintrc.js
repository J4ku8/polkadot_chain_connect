const commonRules = {
	"newline-before-return": "error",
	"no-console": "error",
	"linebreak-style": [
		"error", "windows"
	],
	"object-curly-spacing": [
		"error", "always"
	],
	"react-hooks/rules-of-hooks": "error",
	"react-hooks/exhaustive-deps": "warn",
	"react/jsx-uses-vars": "error"
}

module.exports = {
	extends:[
		"next/core-web-vitals",
		"plugin:react-hooks/recommended",
		"eslint:recommended",
		"plugin:react/recommended"
	],
	plugins: [
		"react",
		"react-hooks",
		"prettier"
	],
	settings: {
		react: {
			version: "detect"
		}
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	rules: commonRules,
	overrides: [
		{
			files: ['**/*.{ts,tsx}'],
			globals: {
				React: 'writable',
			},
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': ['.ts', '.tsx'],
				},
				'import/resolver': {
					typescript: {
						project: './tsconfig.json',
					},
				},
			},
			parser: '@typescript-eslint/parser',
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: './tsconfig.json',
			},
			plugins: ['@typescript-eslint'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				...commonRules,
				'@typescript-eslint/consistent-type-definitions': 'error',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-return': 'warn',
				"@typescript-eslint/restrict-template-expressions":0,
				'@typescript-eslint/no-unsafe-assignment': 0,
				'@typescript-eslint/no-inferrable-types': 0,
				'@typescript-eslint/no-unnecessary-type-assertion': 0,
				'@typescript-eslint/no-empty-function': 0,
				'@typescript-eslint/no-misused-promises': 0,
				'@typescript-eslint/no-floating-promises': 0,
				'@typescript-eslint/no-unsafe-call': 0,
				'@typescript-eslint/no-unsafe-argument': 'off',
				"@typescript-eslint/no-explicit-any": "off",
				'@typescript-eslint/ban-ts-comment': [
					'error',
					{
						'ts-ignore': 'allow-with-description',
						minimumDescriptionLength: 4,
					},
				],
				'no-extra-boolean-cast': 0,
			},
		},
	],
}
