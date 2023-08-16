import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.StrictMode>
		<BrowserRouter basename='/practice-app'>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);