'use client';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import {
	BackendSkills,
	FrontendSkills,
	MobileSkills,
	SoftSkills,
	ToolsSkills,
} from '../molecules';

export const Technologies = () => {
	const [tab, setTab] = useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setTab(newValue);
	};

	const getTabContent = () => {
		switch (tab) {
			case 0:
				return <FrontendSkills />;
			case 1:
				return <BackendSkills />;
			case 2:
				return <ToolsSkills />;
			case 3:
				return <MobileSkills />;
			default:
				return <SoftSkills />;
		}
	};

	return (
		<Box paddingX={{ xs: 5, md: 15 }}>
			<Typography variant='body2' color='primary'>
				Skills
			</Typography>
			<Typography variant='h3' mb={4}>
				Mi conocimiento
			</Typography>
			<Tabs value={tab} onChange={handleChange} aria-label='basic tabs example'>
				<Tab label='FrontEnd' />
				<Tab label='Backend' />
				<Tab label='Tools' />
				<Tab label='Mobile' />
				<Tab label='Soft Skills' />
			</Tabs>
			<Box minHeight={{ xs: '166px', md: '166px' }}>{getTabContent()}</Box>
		</Box>
	);
};
