import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Edward Reyes - Portfolio',
	description: 'Software development engineer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/Logo.png' sizes='any' />
			</head>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
