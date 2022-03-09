import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#36393f',
			light: '#e2e2e2',
			dark: '#333333',
			contrastText: '#fff'
		},
		secondary: {
			main: '#44ee93',
			light: '#61ffac',
			dark: '#00a24f',
			contrastText: '#fff'
		}
	}
});