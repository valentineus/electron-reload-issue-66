import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import commonJs from 'rollup-plugin-commonjs';

module.exports = [{
	input: './src/main.js',
	output: {
		file: 'dist/main.js',
		format: 'cjs'
	},
	external: [
		'electron',
	],
	plugins: [
		babel({
			babelrc: false,
			comments: false,
			exclude: 'node_modules/**',
			presets: [['@babel/preset-env', { modules: false }]],
		}),
		commonJs()
	]
}, {
	input: './src/renderer.js',
	output: {
		file: 'dist/renderer.js',
		format: 'cjs'
	},
	external: [
		'electron',
	],
	plugins: [
		babel({
			babelrc: false,
			comments: false,
			exclude: 'node_modules/**',
			presets: [['@babel/preset-env', { modules: false }]]
		}),
		commonJs(),
		builtins()
	]
}];

