import { ListItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import * as React from 'react';
import {
	LibraryAddCheckTwoTone,
	LibraryBooksTwoTone,
	SupervisorAccountTwoTone,
	TimelineTwoTone,
	WidgetsTwoTone,
} from '@mui/icons-material';
import { styled } from '@mui/styles';

const navigationItems = [
	{ key: 'Tasks', to: '/tasks', icon: <LibraryAddCheckTwoTone /> },
	{ key: 'Projects', to: '/projects', icon: <LibraryBooksTwoTone /> },
	{ key: 'Planning', to: '/planning', icon: <WidgetsTwoTone /> },
	{ key: 'Teams', to: '/teams', icon: <SupervisorAccountTwoTone /> },
	{ key: 'Activity', to: '/activity', icon: <TimelineTwoTone /> },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
	'& .MuiListItemButton-root': {
		paddingLeft: 26,
		paddingRight: 20,
	},
	'& .MuiListItemIcon-root': {
		minWidth: 0,
		marginTop: '5px', // space navigation icons
	},
	'& .MuiSvgIcon-root': {
		fontSize: 26,
	},
});

export default function NavList() {
	return (
		<FireNav disablePadding>
			{navigationItems.map((item) => (
				<ListItem button key={item.key} component={Link} to={item.to}>
					<ListItemIcon>{item.icon}</ListItemIcon>
				</ListItem>
			))}
		</FireNav>
	);
}
