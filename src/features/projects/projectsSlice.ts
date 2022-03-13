import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Project } from '../../types/Project';

export interface ProjectState {
	status: 'done' | 'loading' | 'failed';
	projects: Project[];
}

const initialState: ProjectState = {
	status: 'done',
	projects: [],
};

export const projectSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setProjects: (state, action) => {
			console.log(action.payload);
			state.projects = action.payload;
		},
	},
});

export const { setProjects } = projectSlice.actions;

// Selectors
export const selectProjects = (state: RootState) => state.projects.projects;
export const selectProjectStatus = (state: RootState) => state.projects.status;

// API calls
export const getProjects = (email: string) => async (dispatch: any) => {
	// TODO: make this a real API call
	dispatch(setProjects(testProjects));
};

const testProjects: Project[] = [
	{
		id: 'clanking-oversold-203490',
		title: 'Admin Service',
		description: 'Test description',
		createdAt: '01-01-2022',
		modifiedAt: '01-01-2022',
		logo: '',
	},
	{
		id: 'skyward-regally-518103',
		title: 'Platform Auth',
		description: 'Test description',
		createdAt: '01-01-2022',
		modifiedAt: '01-01-2022',
		logo: '',
	},
	{
		id: 'elm-guts-139496',
		title: 'IMS Console',
		description: 'Test description',
		createdAt: '01-01-2022',
		modifiedAt: '01-01-2022',
		logo: '',
	},
];

export default projectSlice.reducer;
