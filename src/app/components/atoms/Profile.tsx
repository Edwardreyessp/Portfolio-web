'use client';
import Image from 'next/image';
import styles from './profile.module.scss';
import me from '../../../../public/images/Yo6.webp';
import { Box, type SxProps, Typography, Stack, useTheme } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

export const Profile = () => {
	const isDark = useTheme().palette.mode === 'dark';
	const isDesktop = useTheme().breakpoints.up('sm');

	const devStyles: SxProps = {
		background:
			'linear-gradient(to right, #ffd700, #ffcb00, #ffbe00, #ffb200, #ffa600)',
		WebkitBackgroundClip: 'text',
		backgroundClip: 'text',
		color: 'transparent',
		display: 'inline-block',
	};

	const styleText: SxProps = {
		display: 'inline-block',
		mr: 1,
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
						<Typography sx={styleText} variant={isDesktop ? 'h3' : 'h3'}>
							Este soy yo,
						</Typography>
						<Typography sx={devStyles} variant={isDesktop ? 'h3' : 'h3'}>
							Edward!
						</Typography>
					</Box>
					<Typography sx={{ display: { xs: 'none', lg: 'block' } }}>
						Soy un desarrollador apasionado especializado en software web y
						móvil. Me encanta aprender y desafiarme constantemente. Fuera del
						trabajo, disfruto de la música, los videojuegos y la tecnología.
					</Typography>
					<Box
						sx={{ display: { xs: 'none', md: 'block' } }}
						className={styles.social}
					>
						<Link
							href='https://github.com/Edwardreyessp'
							rel='noopener noreferrer'
							target='_blank'
							className={styles.github}
						>
							<GitHub className={styles.icon} />
						</Link>
						<Link
							href='https://www.instagram.com/edwardreyessp/'
							rel='noopener noreferrer'
							target='_blank'
							className={styles.instagram}
						>
							<Instagram className={styles.icon} />
						</Link>
						<Link
							href='http://www.linkedin.com/in/edwardreyessp'
							rel='noopener noreferrer'
							target='_blank'
							className={styles.linkedin}
						>
							<LinkedIn className={styles.icon} />
						</Link>
					</Box>
				</Stack>
			</Box>
			<Box className={styles.s1} />
			<Box sx={backgroundStyle} className={styles.s2} />
			<Box sx={backgroundStyle} className={styles.s3} />
		</Box>
	);
};
