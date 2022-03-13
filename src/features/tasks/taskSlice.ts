import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Task } from '../../types/Task';

export interface TaskState {
	status: 'done' | 'loading' | 'failed';
	tasks: Task[];
}

const initialState: TaskState = {
	status: 'done',
	tasks: [],
};

export const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		setTasks: (state, action) => {
			state.tasks = action.payload;
		},
		setTaskStatus: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const { setTasks } = taskSlice.actions;

// Selectors
export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectTaskStatus = (state: RootState) => state.tasks.status;

// API calls
export const getTasks = (email: string) => async (dispatch: any) => {
	dispatch();
	//TODO: make this a real API call
	dispatch(setTasks(testTasks));
};

const testTasks: Task[] = [];

export default taskSlice.reducer;
