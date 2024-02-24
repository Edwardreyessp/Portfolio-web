'use client';
import { lightTheme } from '@/theme';
import MuiTheme from './MuiTheme';
import { useState } from 'react';
import { Navbar } from './components/molecules';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const [palette, setPalette] = useState(lightTheme);

	return (
		<MuiTheme palette={palette}>
			<Navbar setPalette={setPalette} />
			{children}
		</MuiTheme>
	);
};
