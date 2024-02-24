import styles from './ProjectCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Box, type SxProps, Typography } from '@mui/material';
import Link from 'next/link';

interface ProjectCardProps {
	image: StaticImageData;
	title: string;
	description: string;
	link?: string;
}

export const ProjectCard = ({
	image,
	title,
	description,
	link,
}: ProjectCardProps) => {
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

	if (link) {
		return (
			<Link href={link} rel='noopener noreferrer' target='_blank'>
				<Box sx={cardStyle} className={styles.card}>
					<Image
						src={image}
						alt='project'
						priority
						style={{ width: '100%', height: '100%' }}
					/>
					<Box sx={contentStyle} className={styles.content}>
						<Typography variant='body2'>{title}</Typography>
						<Typography>{description}</Typography>
					</Box>
				</Box>
			</Link>
		);
	}

	return (
		<Box sx={cardStyle} className={styles.card}>
			<Image
				src={image}
				alt='project'
				priority
				style={{ width: '100%', height: '100%' }}
			/>
			<Box sx={contentStyle} className={styles.content}>
				<Typography variant='body2'>{title}</Typography>
				<Typography>{description}</Typography>
			</Box>
		</Box>
	);
};
