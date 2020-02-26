import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Build from '@material-ui/icons/Build';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
}));

const TopNav = (props) => {
	const classes = useStyles();
	let history = useHistory();

	const [navOpen, toggleNav] = React.useState(false);

	const toggleDrawer = (open) => event => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		toggleNav(open);
	};

	const changePage = (page) => (e) => {
		history.push(page);
		toggleNav(false);
	}

	
	return (
		<>
			<SwipeableDrawer
				open={navOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<SideNav changePage={changePage} />
			</SwipeableDrawer>
			<AppBar position="static">
				<Toolbar>
					{Object.keys(props.user).length > 0 ?
						<IconButton 
							edge="start" 
							className={classes.menuButton} 
							onClick={() => toggleNav((prev) => !prev)}
							color="inherit" 
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
					: null}
					<Typography variant="h6" className={classes.title}>
						{props.title}
					</Typography>
					{Object.keys(props.user).length > 0 ?
						<Button color="inherit" onClick={props.logout}>Logout</Button>
					: null}
				</Toolbar>
			</AppBar>
		</>
	);
}

export default TopNav;

const SideNav = (props) => {
	return (
		<List>
			<ListItem
				button
				onClick={props.changePage('/workout')}
			>
				<ListItemIcon><FitnessCenter /></ListItemIcon>
				<ListItemText primary="Workout" />
			</ListItem>
			<ListItem 
				button
				onClick={props.changePage('/history')}
			>
				<ListItemIcon><TrendingUp /></ListItemIcon>
				<ListItemText primary="History" />
			</ListItem>
			<ListItem 
				button
				onClick={props.changePage('/settings')}
			>
				<ListItemIcon><Build /></ListItemIcon>
				<ListItemText primary="Settings" />
			</ListItem>
		</List>
	);
}
