'use client';
import {
	CssBaseline,
	PaletteOptions,
	ThemeProvider,
	createTheme,
	useTheme,
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
				[useTheme().breakpoints.down('lg')]: {
					fontSize: '2rem',
				},
				[useTheme().breakpoints.down('sm')]: {
					fontSize: '1.3rem',
				},
			},
			body2: {
				fontWeight: 600,
				fontSize: '1.125rem',
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
