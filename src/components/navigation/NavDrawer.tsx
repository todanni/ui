import * as React from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import NavList from './NavList';

export function NavDrawer() {
	return (
		<Drawer
			variant='permanent'
			sx={{
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
			}}>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<NavList />
			</Box>
		</Drawer>
	);
}
