import React, { useEffect } from 'react';
import { Box, Chip, Skeleton } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProjects,
	selectProjects,
	selectProjectStatus,
} from '../../features/projects/projectsSlice';
import { Add } from '@mui/icons-material';

export default function ProjectFilters() {
	const [user] = useAuthState(auth);
	const dispatch = useDispatch();
	const projects = useSelector(selectProjects);
	const status = useSelector(selectProjectStatus);

	useEffect(() => {
		dispatch(getProjects(user?.email!));
	}, []);

	const createProject = () => {
		console.log('open or navigate to create project form');
	};

	return (
		<div style={{ marginLeft: '5px', paddingBottom: '7px' }}>
			<Box display='flex' justifyContent='space-between'>
				{status === 'loading' ? (
					<Skeleton animation='wave' width={240} />
				) : undefined}
				<Box display='flex' gap='4px'>
					{status === 'done' ? (
						projects.map((project, index) => (
							<Chip label={project.title} color={getChipColour(index)} />
						))
					) : (
						<div />
					)}
				</Box>
				<Chip
					label='Create project'
					onClick={createProject}
					onDelete={createProject}
					deleteIcon={<Add />}
					variant='outlined'
				/>
			</Box>
		</div>
	);
}

const getChipColour = (index: number) => {
	switch (index % 3) {
		case 0:
			return 'default';
		case 1:
			return 'primary';
		case 2:
			return 'secondary';
		default:
			return 'default';
	}
};
