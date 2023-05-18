import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import reactSvg from 'vite-plugin-react-svg'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
	plugins: [
		wasm(),
		topLevelAwait(),
		react(),
		tsconfigPaths(),
		svgr(),
		reactSvg()
	],
	resolve: {
		alias: {
			process: 'process/browser',
			stream: 'stream-browserify',
			zlib: 'browserify-zlib',
			util: 'util'
		}
	},
	build: {
		outDir: './build',
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html')
			}
		}
	}
})
