import { Box, Typography } from '@mui/material';
import styles from './name.module.scss';

export const Name = () => {
	return (
		<Box className={styles.container}>
			<Typography className={styles.texto}>Hola, soy Edward!</Typography>
		</Box>
	);
};
