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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta ullam
				alias molestias sit earum odio aut? Veritatis sunt harum ipsum impedit
				laborum porro magnam voluptatem, itaque cumque nemo veniam.
			</Typography>
			<Profile />
		</Box>
	);
};
