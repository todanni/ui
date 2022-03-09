import { Box, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export default function Tasks() {
	const [user] = useAuthState(auth);

	return (
		<Box>
			<Typography> {user?.email}</Typography>
		</Box>
	)
}