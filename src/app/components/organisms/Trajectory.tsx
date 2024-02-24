'use client';
import { ArrowUpwardRounded } from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import superhero from '../../../../public/images/superhero.png';
import Image from 'next/image';
import {
	IconFigma,
	IconFirebase,
	IconFlask,
	IconHeroku,
	IconJira,
	IconMaterialui,
	IconNextjs,
	IconPython,
	IconReact,
	IconSass,
} from '../molecules';

export const Trajectory = () => {
	const isDark = useTheme().palette.mode === 'dark';

	return (
		<Box paddingX={{ xs: 5, md: 15 }}>
			<Typography variant='body2' color='primary'>
				Trayectoria
			</Typography>
			<Typography variant='h3' mb={4}>
				Mi progreso
			</Typography>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='flex-start'
			>
				<Stack spacing={2}>
					<Box>
						<Typography display='inline-block' variant='body2'>
							Fiorel Web{' '}
						</Typography>
						<Typography display='inline-block'> - Freelance (2023)</Typography>
						<Typography mt={2}>
							En este proyecto desarrollé una página web en equipo para una
							perfumería en la que apliqué conocimientos de diseño y desarrollo
							web como creación de componentes, maquetación, estilos,
							animaciones y responsive design. Así mismo se implementó una base
							de datos para el manejo de productos, usuarios y una gestión de la
							página para el administrador, con el fin de que pueda tener la
							página actualizada.
						</Typography>
						<Box marginY={1} display='flex' gap={2}>
							<IconNextjs width='1.5rem' fill={isDark ? 'white' : 'black'} />
							<IconReact width='1.5rem' />
							<IconMaterialui width='1.5rem' />
							<IconSass width='1.5rem' />
							<IconFirebase width='1.5rem' />
							<IconFigma width='1.5rem' />
							<IconJira width='1.5rem' />
						</Box>
					</Box>
					<ArrowUpwardRounded color='primary' sx={{ fontSize: '5rem' }} />
					<Box>
						<Typography display='inline-block' variant='body2'>
							Encuestas Deploy{' '}
						</Typography>
						<Typography display='inline-block'> - Freelance (2023)</Typography>
						<Typography mt={2}>
							Se dearrollo una web en equipo para un sistema de encuestas donde
							se aplicaron mis conocimientos de consumo de APIs, manejo de
							datos, autenticación de usuarios, manjeo de rutas, diseño y
							desarrollo web. Se implementó una base de datos para el manejo de
							encuestas, usuarios y una gestión de la página para el
							administrador. Se hizo el despliegue del sitio en un servidor para
							que los usuarios puedan acceder a las encuestas.
						</Typography>
						<Box marginY={1} display='flex' gap={2}>
							<IconReact width='1.5rem' />
							<IconFirebase width='1.5rem' />
							<IconFlask width='1.5rem' fill={isDark ? 'white' : 'black'} />
							<IconPython width='1.5rem' />
							<IconHeroku width='1.5rem' />
							<IconFigma width='1.5rem' />
							<IconJira width='1.5rem' />
						</Box>
					</Box>
					<ArrowUpwardRounded color='primary' sx={{ fontSize: '5rem' }} />
					<Box>
						<Typography display='inline-block' variant='body2'>
							Ingeniería en Sistemas Computacionales{' '}
						</Typography>
						<Typography display='inline-block'>
							{' '}
							- ESCOM IPN (2019 - 2024)
						</Typography>
						<Typography mt={2}>
							Durante mi carrera he adquirido conocimientos de análisis de
							proyectos, gestión, desarrollo de software, diseño y desarrollo
							web, bases de datos SQL y No SQL, redes, sistemas operativos,
							inteligencia artificial, entre otros. He participado en proyectos
							de desarrollo de software, y en proyectos de investigación en el
							área de inteligencia artificial.
						</Typography>
					</Box>
					<ArrowUpwardRounded color='primary' sx={{ fontSize: '5rem' }} />
					<Box>
						<Typography display='inline-block' variant='body2'>
							Técnico en Sistemas Digitales{' '}
						</Typography>
						<Typography display='inline-block'>
							{' '}
							- CECyT 1 IPN (2016 - 2019)
						</Typography>
						<Typography mt={2}>
							Durante mi carrera adquirí conocimientos de programación,
							electrónica, redes, sistemas operativos, bases de datos, diseño y
							desarrollo web, entre otros. Participé en proyectos de desarrollo
							de software y en proyectos de investigación en el área de
							electrónica.
						</Typography>
					</Box>
				</Stack>
				<Box sx={{ display: { xs: 'none', md: 'block' } }}>
					<Image
						src={superhero}
						alt='superhero'
						priority
						style={{ width: '30vw', height: '30vw' }}
					/>
				</Box>
			</Box>
		</Box>
	);
};
