import { createTheme } from '@mui/material';

export const theme = createTheme( {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					marginRight: '10px',
				},
			},
		},
	},
	typography: {
		h3: {
			textTransform: 'uppercase',
		},
	},
} );
