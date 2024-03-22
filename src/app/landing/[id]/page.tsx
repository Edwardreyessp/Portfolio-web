import { Banner } from '@/app/components/organisms';
import styles from './Page.module.scss';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { Footer } from '@/app/components/molecules';
import Image from 'next/image';
import { type Project, projects } from '@/app/components/utils';

export default function LandingPage({ params }: { params: { id: string } }) {
	const project: Project =
		projects.find(project => project.id === params.id) || projects[0];

	return (
		<main className={styles.main}>
			<Banner
				project={project}
				href={project.href}
				background={project.background}
			/>
			<div className={styles.container}>
				<Stack spacing={8}>
					<section>
						<Typography variant='body2' color='primary'>
							Descripción
						</Typography>
						<Typography variant='h3' mb={4}>
							Sobre el proyecto
						</Typography>
						<p>{project.description}</p>
						<Box display='flex' gap={2}>
							{project.technologies.map((technology, index) => (
								<Box key={index}>{technology}</Box>
							))}
						</Box>
					</section>
					<section>
						<Typography variant='body2' color='primary'>
							Destacado
						</Typography>
						<Typography variant='h3' mb={4}>
							Mi aporte al proyecto
						</Typography>
						{project.aporte.map((aporte, index) => (
							<Typography key={index} mb={2}>
								⭐ {aporte}
							</Typography>
						))}
					</section>
					<section>
						<Typography variant='body2' color='primary'>
							Contenido
						</Typography>
						<Typography variant='h3' mb={4}>
							Vista previa
						</Typography>
						<Box className={styles.wrapper}>
							<div className={styles['containerImg']}>
								<ul className={styles['image-gallery']}>
									{project.images.map((image, index) => (
										<li key={index}>
											<Image
												className='image'
												src={image}
												alt={project.name}
												style={{ width: '100%' }}
												width={500}
												height={300}
											/>
										</li>
									))}
								</ul>
							</div>
						</Box>
					</section>
					<section>
						<Typography variant='body2' color='primary'>
							Retos
						</Typography>
						<Typography variant='h3' mb={4}>
							Desafíos superados
						</Typography>
						<Box display='flex' flexDirection='column' gap={2}>
							{project.challenges.map((challenge, index) => (
								<Typography key={index}>⭐ {challenge}</Typography>
							))}
						</Box>
					</section>
				</Stack>
			</div>
			<Divider />
			<Footer />
		</main>
	);
}
