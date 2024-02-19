import { darkTheme, lightTheme } from '@/theme';
import { Button, PaletteOptions } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface NavbarProps {
	setPalette: Dispatch<SetStateAction<PaletteOptions>>;
}

export const Navbar = ({ setPalette }: NavbarProps) => {
	const toogleTheme = () => {
		setPalette(prev => {
			if (prev.mode === 'light') {
				return darkTheme;
			} else {
				return lightTheme;
			}
		});
	};

	return <Button onClick={toogleTheme}>Navbar</Button>;
};
