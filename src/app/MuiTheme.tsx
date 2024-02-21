'use client';
import {
	CssBaseline,
	PaletteOptions,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';

interface MuiThemeProps {
	children: React.ReactNode;
	palette: PaletteOptions;
}

const inter = Inter({ subsets: ['latin'] });

const MuiTheme = ({ children, palette }: MuiThemeProps) => {
	const theme = createTheme({
		typography: {
			fontFamily: inter.style.fontFamily,
			h1: {
				fontSize: '58px',
			},
			h3: {
				fontWeight: 700,
				'@media (max-width: 600px)': {
					fontSize: '32px',
				},
			},
		},
		palette,
	});

	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};

export default MuiTheme;
