import Link from 'next/link';
import styles from './customButton.module.scss';
import { Box } from '@mui/material';

export const CustomButton = () => {
	return (
		<Box>
			<Link href='/' className={styles.cta}>
				<span>Mis proyectos</span>
				<svg width='13px' height='10px' viewBox='0 0 13 10'>
					<path d='M1,5 L11,5'></path>
					<polyline points='8 1 12 5 8 9'></polyline>
				</svg>
			</Link>
		</Box>
	);
};
