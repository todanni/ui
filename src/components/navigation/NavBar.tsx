import { AppBar, Avatar, Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout, signInWithGoogle } from '../../firebase';
import { makeStyles } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React from 'react';

const logo = require('../../images/white_logo_transparent_background.png');

export default function NavBar() {
	const [user] = useAuthState(auth);
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position='fixed'
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2 }}>
					<MenuIcon />
				</IconButton>
				<img
					src={logo}
					alt='white-logo-transparent-background'
					className={classes.logo}
				/>
				<Typography
					component='h1'
					variant='h6'
					color='inherit'
					noWrap
					className={classes.title}
				/>

				{user && (
					<div>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'>
							<Avatar alt={user?.displayName!} src={user?.photoURL!} />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={logout}>Log out</MenuItem>
						</Menu>
					</div>
				)}

				{!user && (
					<Button color='inherit' onClick={signInWithGoogle}>
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}

const useStyles = makeStyles(() => ({
	toolbar: {
		paddingRight: '10px', // keep right padding when drawer closed
		paddingLeft: '16px',
	},
	logo: {
		maxWidth: 160,
	},
	title: {
		flexGrow: 1,
	},
}));
