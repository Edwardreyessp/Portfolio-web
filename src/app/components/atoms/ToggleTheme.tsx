'use client';
import { darkTheme, lightTheme } from '@/theme';
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import { IconButton, PaletteOptions, useTheme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface ToggleProps {
	setPalette: Dispatch<SetStateAction<PaletteOptions>>;
}

export const ToggleTheme = ({ setPalette }: ToggleProps) => {
	const toogleTheme = () => {
		setPalette(prev => {
			if (prev.mode === 'light') {
				return darkTheme;
			} else {
				return lightTheme;
			}
		});
	};

	const isDark = useTheme().palette.mode === 'dark';

	return (
		<IconButton onClick={toogleTheme} color='inherit'>
			{isDark ? <DarkModeRounded /> : <LightModeRounded />}
		</IconButton>
	);
};
