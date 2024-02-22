'use client';
import { Box, PaletteOptions } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CustomLink, ToggleTheme } from '../atoms';

interface NavbarProps {
	setPalette: Dispatch<SetStateAction<PaletteOptions>>;
}

export const Navbar = ({ setPalette }: NavbarProps) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrolled]);

	return (
		<Box position='fixed' top={0} zIndex={20}>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='flex-end'
				gap={3}
				paddingY={1}
				paddingX={{ xs: 2, md: 4 }}
				width='100vw'
				bgcolor={scrolled ? 'background.paper' : 'transparent'}
				sx={{ transition: 'background-color 0.3s ease' }}
				boxShadow={scrolled ? 2 : 0}
				color={scrolled ? 'navbar.dark' : 'navbar.main'}
			>
				<Box display={{ xs: 'none', md: 'flex' }} gap={3} alignItems='center'>
					<CustomLink href='/' text='Home' />
					<CustomLink href='/about' text='About' />
					<CustomLink href='/contact' text='Contact' />
				</Box>
				<ToggleTheme setPalette={setPalette} />
			</Box>
		</Box>
	);
};
