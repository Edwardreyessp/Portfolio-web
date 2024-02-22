import { Box, Stack } from '@mui/material';
import { About, Header } from './components/organisms';

export default function Home() {
	return (
		<Box>
			<Header />
			<Stack spacing={6} marginY={6}>
				<About />
			</Stack>
		</Box>
	);
}
