'use client';
import { Typography } from '@mui/material';
import { Parallax } from './components/atoms';

export default function Home() {
	return (
		<Parallax>
			<Typography variant='h1'>Hola mundo</Typography>
		</Parallax>
	);
}
