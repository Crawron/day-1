import uglify from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import progress from 'rollup-plugin-progress'
import path from 'path'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/main.ts',
	output: {
		file: 'build/main.js',
		format: 'iife',
		name: 'main.js',
		sourcemap: !production
	},
	plugins: [
		nodeResolve(),
		commonjs({
			sourceMap: true,
			namedExports: {
				'@tweenjs/tween.js': ['Tween']
			}
		}),
		typescript(),
		progress(),
		production && uglify()
	]
}