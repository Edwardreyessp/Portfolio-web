import { Box, Typography } from '@mui/material';
import { ProjectCard } from '../molecules';
import styles from './Projects.module.scss';
import AppPerro from '../../../../public/images/AppPerro.png';
import AxoloteWeb from '../../../../public/images/AxoloteWeb.png';
import DinoApp from '../../../../public/images/DinoApp.png';
import DinoGame from '../../../../public/images/DinoGame.png';
import Fiorel from '../../../../public/images/Fiorel.png';

export const Projects = () => {
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
			<Box className={styles.slider}>
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
