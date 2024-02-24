'use client';
import Image from 'next/image';
import styles from './profile.module.scss';
import me from '../../../../public/images/anime.png';
import { Box, type SxProps, Typography, Stack, useTheme } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

export const Profile = () => {
	const isDark = useTheme().palette.mode === 'dark';
	const devStyles: SxProps = {
		background:
			'linear-gradient(to right, #ffd700, #ffcb00, #ffbe00, #ffb200, #ffa600)',
		WebkitBackgroundClip: 'text',
		backgroundClip: 'text',
		color: 'transparent',
		display: 'inline',
	};

	const styleText: SxProps = {
		display: 'inline',
	};

	const backgroundStyle: SxProps = {
		background: isDark
			? 'linear-gradient(60deg, #23184d 0%, #003d46 100%)'
			: 'linear-gradient(60deg, #543ab7 0%, #00acc1 100%)',
	};

	return (
		<Box className={styles.container}>
			<Box sx={backgroundStyle} className={styles.imageContainer}>
				<Image className={styles.img} src={me} alt='Edward' priority />
				<Stack spacing={2} className={styles.desc}>
					<Box>
						<Typography variant='h3' sx={styleText}>
							Este soy yo,{' '}
						</Typography>
						<Typography sx={devStyles} variant='h3'>
							Edward
						</Typography>
						<Typography sx={styleText} variant='h3'>
							!
						</Typography>
					</Box>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta
						ullam alias molestias sit earum odio aut? Veritatis sunt harum ipsum
						impedit laborum porro magnam voluptatem, itaque cumque nemo veniam.
					</Typography>
					<Box className={styles.social}>
						<Box className={styles.github}>
							<GitHub className={styles.icon} />
						</Box>
						<Box className={styles.instagram}>
							<Instagram className={styles.icon} />
						</Box>
						<Box className={styles.linkedin}>
							<LinkedIn className={styles.icon} />
						</Box>
					</Box>
				</Stack>
			</Box>
			<Box className={styles.s1} />
			<Box sx={backgroundStyle} className={styles.s2} />
			<Box sx={backgroundStyle} className={styles.s3} />
		</Box>
	);
};
