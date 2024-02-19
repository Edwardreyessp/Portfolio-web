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
