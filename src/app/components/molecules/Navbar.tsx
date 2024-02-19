import { Box, Divider, PaletteOptions } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { CustomLink, Name, ToggleTheme } from '../atoms';

interface NavbarProps {
	setPalette: Dispatch<SetStateAction<PaletteOptions>>;
}

export const Navbar = ({ setPalette }: NavbarProps) => {
	return (
		<>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='space-evenly'
				paddingY={1}
			>
				<Name />
				<Box display='flex' gap={3}>
					<CustomLink href='/' text='Home' />
					<CustomLink href='/about' text='About' />
					<CustomLink href='/contact' text='Contact' />
				</Box>
				<ToggleTheme setPalette={setPalette} />
			</Box>
			<Divider />
		</>
	);
};
