import { Box, Divider, LinearProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
	getTasks,
	selectTasks,
	selectTaskStatus,
} from '../../features/tasks/taskSlice';
import ProjectFilters from '../projects/ProjectFilters';

export default function TaskDashboard() {
	const [user] = useAuthState(auth);
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);
	const status = useSelector(selectTaskStatus);

	useEffect(() => {
		// Get all tasks that the user has created or been assigned
		dispatch(getTasks(user?.email!));
	}, []);

	return (
		<Box>
			<ProjectFilters />
			<Divider />
			{status === 'loading' ? <LinearProgress color='secondary' /> : <div />}

			{status === 'done' && tasks.length > 0 ? (
				<Typography>
					Here you will see all the tasks you've created or been assigned
				</Typography>
			) : (
				<div />
			)}

			{status === 'done' && tasks.length === 0 ? (
				<Typography>
					You haven't created any tasks and none have been assigned to you
				</Typography>
			) : (
				<div />
			)}
		</Box>
	);
}
