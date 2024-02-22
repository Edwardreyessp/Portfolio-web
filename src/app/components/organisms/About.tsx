import { Stack } from '@mui/material';
import { Profile } from '../atoms';

export const About = () => {
	return (
		<Stack alignItems='center' spacing={4}>
			{/* <Typography variant='h3'>Quién es Edward?</Typography> */}
			<Profile />
		</Stack>
	);
};
