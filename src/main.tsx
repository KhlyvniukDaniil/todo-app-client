import { createRoot } from 'react-dom/client'
import { App } from 'app'
import { BrowserRouter } from 'react-router-dom'
import store from 'store'
import { Provider } from 'react-redux'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// import React from 'react'


const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

root.render(
	// <React.StrictMode>
		<BrowserRouter>
			<Provider store={ store }>
				<App/>
			</Provider>
		</BrowserRouter>
	// </React.StrictMode>
)
