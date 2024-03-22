import Image from 'next/image';
import { type Project } from '../utils';
import styles from './Banner.module.scss';
import { Box, Button, Stack } from '@mui/material';
import Link from 'next/link';

interface Props {
	project: Project;
	href?: string;
	background?: string;
}

export const Banner = ({ project, href, background = '#2f3642' }: Props) => {
	return (
		<Box className={styles.container} sx={{ background }}>
			<Box display='flex' gap={2} alignItems='center'>
				<Image
					priority
					src={project.image}
					alt={project.name}
					sizes='30vw'
					style={{
						width: '30%',
						height: 'auto',
					}}
					width={500}
					height={300}
				/>
				<Stack spacing={2}>
					<h1>{project.name}</h1>
					<p>{project.subtitle}</p>
					{href && (
						<Link href={href} rel='noopener noreferrer' target='_blank'>
							<Button
								sx={{ width: 'fit-content' }}
								variant='contained'
								color='primary'
							>
								Visitar web
							</Button>
						</Link>
					)}
				</Stack>
			</Box>
		</Box>
	);
};
