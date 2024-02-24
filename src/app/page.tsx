import { Box, Divider, Stack } from '@mui/material';
import { About, Header, Projects, Technologies } from './components/organisms';

export default function Home() {
	return (
		<Box>
			<Header />
			<Stack spacing={6} marginY={6}>
				<About />
				<Divider />
				<Projects />
				<Divider />
				<Technologies />
				<Divider />
			</Stack>
		</Box>
	);
}
