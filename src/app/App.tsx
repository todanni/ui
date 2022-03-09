import React, { useEffect } from 'react';
import '../App.css';
import { Box, CircularProgress } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Tasks from '../pages/tasks/Tasks';
import Login from '../pages/login/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import NavBar from '../components/NavBar';

function App() {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user) navigate('/tasks');
	}, [user, loading]);

	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/tasks' element={<Tasks />} />
			</Routes>
		</div>
	);
}

function Loading() {
	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flex={1}
			margin='20px'>
			<CircularProgress />
		</Box>
	);
}

export default App;
