import { Box, Typography } from '@mui/material';

interface IconSkillProps {
	icon: React.ReactNode;
	text: string;
}

export const IconSkill = ({ text, icon }: IconSkillProps) => {
	return (
		<Box maxWidth='7rem' textAlign='center'>
			{icon}
			<Typography>{text}</Typography>
		</Box>
	);
};
