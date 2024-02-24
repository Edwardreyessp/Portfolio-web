'use client';
import { Box, Typography } from '@mui/material';
import { Profile } from '../atoms';

export const About = () => {
	return (
		<Box paddingX={{ xs: 5, md: 15 }}>
			<Typography variant='body2' color='primary'>
				Sobre mí
			</Typography>
			<Typography variant='h3' mb={4}>
				Me presento
			</Typography>
			<Typography sx={{ display: { xs: 'block', lg: 'none' } }} mb={4}>
				Soy un desarrollador apasionado especializado en software web y móvil.
				Me encanta aprender y desafiarme constantemente. Fuera del trabajo,
				disfruto de la música, los videojuegos y la tecnología.
			</Typography>
			<Profile />
		</Box>
	);
};
