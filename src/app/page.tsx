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
			<Stack spacing={8} mt={6}>
				<Divider id='about' sx={{ opacity: 0 }} />
				<About />
				<Divider id='projects' />
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
