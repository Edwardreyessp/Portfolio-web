import { ArrowUpwardRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

export const Trajectory = () => {
	return (
		<Box paddingX={{ xs: 5, md: 15 }}>
			<Typography variant='body2' color='primary'>
				Trayectoria
			</Typography>
			<Typography variant='h3' mb={4}>
				Mi progreso
			</Typography>
			<Stack spacing={2}>
				<Box>
					<Typography display='inline-block' variant='body2'>
						Fiorel Web{' '}
					</Typography>
					<Typography display='inline-block'> - Freelance (2023)</Typography>
					<Typography mt={2}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
						laboriosam rerum nam assumenda animi eius molestias corporis
						incidunt facilis qui?
					</Typography>
				</Box>
				<ArrowUpwardRounded color='primary' sx={{ fontSize: '5rem' }} />
				<Box>
					<Typography display='inline-block' variant='body2'>
						Encuestas Deploy{' '}
					</Typography>
					<Typography display='inline-block'> - Freelance (2023)</Typography>
					<Typography mt={2}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
						laboriosam rerum nam assumenda animi eius molestias corporis
						incidunt facilis qui?
					</Typography>
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
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
						laboriosam rerum nam assumenda animi eius molestias corporis
						incidunt facilis qui?
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
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
						laboriosam rerum nam assumenda animi eius molestias corporis
						incidunt facilis qui?
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
};
