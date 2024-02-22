'use client';
import { Box, useTheme } from '@mui/material';
import styles from './parallax.module.css';

interface ParallaxProps {
	children: React.ReactNode;
}

export const Parallax = ({ children }: ParallaxProps) => {
	const isDark = useTheme().palette.mode === 'dark';

	return (
		<Box
			className={`${styles.header} ${
				isDark ? styles.headerDark : styles.headerLight
			}`}
			maxWidth='100vw'
			height='100%'
			pt={'58px'}
		>
			<Box
				width='100%'
				height='100%'
				className={`${styles.innerHeader} ${styles.flex}`}
			>
				{children}
			</Box>
			<div>
				<svg
					className={styles.waves}
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					viewBox='0 24 150 28'
					preserveAspectRatio='none'
					shapeRendering='auto'
				>
					<defs>
						<path
							id='gentle-wave'
							d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
						/>
					</defs>
					<g className={styles.parallax}>
						<use
							xlinkHref='#gentle-wave'
							x='48'
							y='0'
							fill={isDark ? 'rgba(18,18,18,0.7)' : 'rgba(255,255,255,0.7)'}
						/>
						<use
							xlinkHref='#gentle-wave'
							x='48'
							y='3'
							fill={isDark ? 'rgba(18,18,18,0.5)' : 'rgba(255,255,255,0.5)'}
						/>
						<use
							xlinkHref='#gentle-wave'
							x='48'
							y='5'
							fill={isDark ? 'rgba(18,18,18,0.3)' : 'rgba(255,255,255,0.3)'}
						/>
						<use
							xlinkHref='#gentle-wave'
							x='48'
							y='7'
							fill={isDark ? '#121212' : '#fff'}
						/>
					</g>
				</svg>
			</div>
		</Box>
	);
};
