import { Box, Stack } from '@mui/material';
import { Parallax, Name, CustomButton, Description } from '../atoms';
import Image from 'next/image';
import setup from '../../../../public/images/setup.png';

export const Header = () => {
	return (
		<Parallax>
			<Box
				display='flex'
				flexDirection={{ xs: 'column', md: 'row' }}
				width='100%'
				paddingX={{ xs: 2, md: 15 }}
				alignItems='center'
				justifyContent='space-between'
			>
				<Stack
					spacing={2}
					textAlign='left'
					maxWidth={{ xs: '100%', md: '50%' }}
					alignItems='flex-start'
				>
					<Name />
					<Description />
					<CustomButton />
				</Stack>
				<Image
					priority
					src={setup}
					alt='Edward'
					style={{ maxWidth: '90vw', maxHeight: '90vw' }}
				/>
			</Box>
		</Parallax>
	);
};
