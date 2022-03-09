import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { auth, signInWithGoogle } from '../../firebase';
import GoogleButton from 'react-google-button'

function Login() {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user) navigate("/tasks");
	}, [user, loading]);
	return (
		<div className="login">
			<div className="login__container">
				<GoogleButton onClick={signInWithGoogle}/>
			</div>
		</div>
	);
}
export default Login;