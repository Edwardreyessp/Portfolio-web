import { Box, type SxProps, Typography } from '@mui/material';
import styles from './name.module.scss';
import meImage from '../../../../public/images/setup.jpg';

export const Name = () => {
	const textStyle: SxProps = {
		'&::after': {
			backgroundImage: `url(${meImage.src})`,
		},
		'&:hover::after': {
			top: { xs: '0rem', md: '-10rem' },
		},
	};

	return (
		<Box className={styles.container}>
			<Typography sx={textStyle} className={styles.texto}>
				Hola, soy Edward!
			</Typography>
		</Box>
	);
};
