import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				{/* The /* tells it to let App.jsx handle all sub-pages! */}
				<Route path="/*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)