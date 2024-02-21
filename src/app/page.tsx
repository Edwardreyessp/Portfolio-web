'use client';
import { Box, Stack, type SxProps, Typography } from '@mui/material';
import { CustomButton, Name, Parallax } from './components/atoms';
import Image from 'next/image';
import setup from '../../public/images/setup.png';
import { useEffect, useState } from 'react';

const words = [
	'la tecnología',
	'la programación',
	'la música',
	'los videojuegos',
];

export default function Home() {
	const [word, setWord] = useState(''); // Palabra actual
	const [wordIndex, setWordIndex] = useState(0); // Letra actual
	const [index, setIndex] = useState(0); // Índice de la palabra actual

	useEffect(() => {
		const wordInterval = setInterval(
			() => {
				if (wordIndex < words[index].length) {
					setWord(prevWord => prevWord + words[index][wordIndex]);
					setWordIndex(prevIndex => prevIndex + 1);
				} else {
					// Esperar 1 segundo antes de mostrar la siguiente palabra
					setWordIndex(0);
					setIndex(prevIndex =>
						prevIndex === words.length - 1 ? 0 : prevIndex + 1
					);
					setWord('');
				}
			},
			wordIndex < words[index].length ? 100 : 1000
		);

		return () => clearInterval(wordInterval);
	}, [index, wordIndex]);

	const styles: SxProps = {
		height: '84px',
		display: 'inline',
		'&::after': {
			content: `'_'`,
			animation: 'blink 1s infinite',
		},
		'@keyframes blink': {
			'0%': {
				opacity: 0,
			},
			'50%': {
				opacity: 1,
			},
			'100%': {
				opacity: 0,
			},
		},
	};

	const devStyles: SxProps = {
		// background: 'linear-gradient(45deg, #FFD700, #FF4500)',
		background:
			'linear-gradient(to right, #ffd700, #ffcb00, #ffbe00, #ffb200, #ffa600)',
		WebkitBackgroundClip: 'text',
		backgroundClip: 'text',
		color: 'transparent',
		display: 'inline',
	};

	return (
		<Parallax>
			<Box
				display='flex'
				flexDirection={{ xs: 'column', md: 'row' }}
				width='100%'
				paddingX={{ xs: 2, md: 15 }}
				alignItems='center'
				justifyContent='space-between'
			>
				<Stack
					spacing={2}
					textAlign='left'
					maxWidth={{ xs: '100%', md: '50%' }}
					alignItems='flex-start'
				>
					<Name />
					<div>
						<Typography variant='h3' sx={devStyles}>
							Desarrollador{' '}
						</Typography>
						<Typography sx={styles} variant='h3'>
							de software y apasionado por {word}
						</Typography>
					</div>
					<CustomButton />
				</Stack>
				<Image
					priority
					src={setup}
					alt='Edward'
					style={{ maxWidth: '90vw', maxHeight: '90vw' }}
				/>
			</Box>
		</Parallax>
	);
}
