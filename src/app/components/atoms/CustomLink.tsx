import { useTheme, Typography } from '@mui/material';
import Link from 'next/link';

interface LinkProps {
	href: string;
	text: string;
}

export const CustomLink = ({ href, text }: LinkProps) => {
	const primary = useTheme().palette.primary.main;

	const style = {
		position: 'relative',
		textDecoration: 'none',
		'&::before': {
			content: '""',
			position: 'absolute',
			width: '100%',
			height: '2px',
			background: primary,
			bottom: 0,
			left: 0,
			opacity: 0,
			transition: 'opacity 0.3s ease-in-out',
		},
		'&:hover::before': {
			opacity: 1,
		},
	};

	return (
		<Link href={href}>
			<Typography sx={style}>{text}</Typography>
		</Link>
	);
};
