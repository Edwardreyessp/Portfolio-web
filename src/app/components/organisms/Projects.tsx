'use client';
import { Box, type SxProps, Typography, useTheme } from '@mui/material';
import { ProjectCard } from '../molecules';
import styles from './Projects.module.scss';

export const Projects = () => {
	const isDark = useTheme().palette.mode === 'dark';

	const styleSlider: SxProps = {
		'&::before, &::after': {
			width: { xs: '15%', md: '20%' },
			background: isDark
				? 'linear-gradient(to right, #121212 0%, rgba(18, 18, 18, 0) 100%)'
				: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)',
		},
	};

	return (
		<Box>
			<Box paddingX={{ xs: 5, md: 15 }}>
				<Typography variant='body2' color='primary'>
					Proyectos
				</Typography>
				<Typography variant='h3' mb={4}>
					Conoce mi mundo
				</Typography>
			</Box>
			<Box sx={styleSlider} className={styles.slider}>
				<div className={styles['slide-track']}>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
					<div className={styles.slide}>
						<ProjectCard />
					</div>
				</div>
			</Box>
		</Box>
	);
};
