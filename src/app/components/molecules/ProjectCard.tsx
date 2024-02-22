import styles from './ProjectCard.module.scss';
import project from '../../../../public/images/anime.png';
import Image from 'next/image';
import { Box, type SxProps, Typography } from '@mui/material';

export const ProjectCard = () => {
	const cardStyle: SxProps = {
		width: { xs: '250px', md: '400px' },
		height: { xs: '250px', md: '400px' },
		'&:before': {
			height: { xs: '100%', md: 0 },
		},
	};

	const contentStyle: SxProps = {
		p: { xs: 2, md: 0 },
		height: { xs: '100px', md: 0 },
	};

	return (
		<Box sx={cardStyle} className={styles.card}>
			<Image
				src={project}
				alt='project'
				priority
				style={{ width: '100%', height: '100%' }}
			/>
			<Box sx={contentStyle} className={styles.content}>
				<Typography variant='body2'>Nombre del Proyecto</Typography>
				<Typography>Proyecto 1</Typography>
			</Box>
		</Box>
	);
};
