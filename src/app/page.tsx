import { Box, Divider, Stack } from '@mui/material';
import { About, Header, Projects } from './components/organisms';

export default function Home() {
	return (
		<Box>
			<Header />
			<Stack spacing={6} marginY={6}>
				<About />
				<Divider />
				<Projects />
				<Divider />
			</Stack>
		</Box>
	);
}
