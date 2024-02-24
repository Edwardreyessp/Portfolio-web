import { Box, Divider, Stack } from '@mui/material';
import {
	About,
	Contact,
	Header,
	Projects,
	Technologies,
	Trajectory,
} from './components/organisms';

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
				<Trajectory />
				<Divider />
				<Contact />
			</Stack>
		</Box>
	);
}
