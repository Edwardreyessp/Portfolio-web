import { Box, Divider, Stack } from '@mui/material';
import {
	About,
	Contact,
	Header,
	Projects,
	Technologies,
	Trajectory,
} from './components/organisms';
import { Footer } from './components/molecules';

export default function Home() {
	return (
		<Box>
			<Header />
			<Stack spacing={6} mt={6}>
				<About />
				<Divider />
				<Projects />
				<Divider />
				<Technologies />
				<Divider />
				<Trajectory />
				<Divider />
				<Contact />
				<Divider />
			</Stack>
			<Footer />
		</Box>
	);
}
