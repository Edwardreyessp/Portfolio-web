'use client';
import { Box, type SxProps, Typography, useTheme } from '@mui/material';
import { ProjectCard } from '../molecules';
import styles from './Projects.module.scss';
import AppPerro from '../../../../public/images/AppPerro.png';
import AxoloteWeb from '../../../../public/images/AxoloteWeb.png';
import DinoApp from '../../../../public/images/DinoApp.png';
import DinoGame from '../../../../public/images/DinoGame.png';
import Fiorel from '../../../../public/images/Fiorel.png';

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
		<Box id='projects'>
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
						<ProjectCard
							image={AxoloteWeb}
							title={'Axolote Web'}
							description={'Crea tu página web con este equipo de Axolotes'}
							link='https://axolote-web.com'
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={AppPerro}
							title={'AppPerro'}
							description={'Aplicación para cuidar a tu perro :D'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={Fiorel}
							title={'Fiorel'}
							description={'Encuentra tu perfume ideal'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={DinoApp}
							title={'Dino App'}
							description={'Gestiona a tus alumnos para que aprendan a leer'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={DinoGame}
							title={'Dino Game'}
							description={'Divertido juego para aprender a leer :D'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={AxoloteWeb}
							title={'Axolote Web'}
							description={'Crea tu página web con este equipo de Axolotes'}
							link='https://axolote-web.com'
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={AppPerro}
							title={'AppPerro'}
							description={'Aplicación para cuidar a tu perro :D'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={Fiorel}
							title={'Fiorel'}
							description={'Encuentra tu perfume ideal'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={DinoApp}
							title={'Dino App'}
							description={'Gestiona a tus alumnos para que aprendan a leer'}
						/>
					</div>
					<div className={styles.slide}>
						<ProjectCard
							image={DinoGame}
							title={'Dino Game'}
							description={'Divertido juego para aprender a leer :D'}
						/>
					</div>
				</div>
			</Box>
		</Box>
	);
};
