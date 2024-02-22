import { Box, Typography } from '@mui/material';
import { ProjectCard } from '../molecules';

export const Projects = () => {
	return (
		<Box paddingX={{ xs: 5, md: 15 }}>
			<Typography variant='body2' color='primary'>
				Proyectos
			</Typography>
			<Typography variant='h3' mb={4}>
				Conoce mi mundo
			</Typography>
			<ProjectCard />
		</Box>
	);
};
