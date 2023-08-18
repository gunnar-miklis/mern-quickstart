import { ThemeProvider } from '@mui/material/styles';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme.js';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.StrictMode>
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<BrowserRouter basename='/mern-quickstart'>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</CssBaseline>
	</React.StrictMode>,
);
