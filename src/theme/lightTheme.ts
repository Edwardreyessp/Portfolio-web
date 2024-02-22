import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		home: Palette['primary'];
		navbar: Palette['primary'];
	}
	interface PaletteOptions {
		home: PaletteOptions['primary'];
		navbar: PaletteOptions['primary'];
	}
}

export const lightTheme: PaletteOptions = {
	mode: 'light',
	primary: {
		main: '#ffa600',
	},
	secondary: {
		main: '#FA4659',
	},
	home: {
		main: '#F0FFF3',
		dark: '#11CBD7',
	},
	navbar: {
		main: '#FFFFFF',
		dark: '#11CBD7',
	},
};
