import { useTheme } from '@mui/material';
import Link from 'next/link';

interface LinkProps {
	href: string;
	text: string;
}

export const CustomLink = ({ href, text }: LinkProps) => {
	const primary = useTheme().palette.primary.main;
	const contrastText = useTheme().palette.text.primary;

	return (
		<Link
			style={{
				backgroundImage: `linear-gradient(to right, ${primary}, ${primary} 50%, ${contrastText} 50%)`,
			}}
			href={href}
		>
			{text}
		</Link>
	);
};
