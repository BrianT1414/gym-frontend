import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Workouts from './Workouts';
import ViewWorkout from './Workouts/View';

const History = (props) => {
	let history = useHistory();

	const goToWorkout = (id) => {
		props.getWorkout(id);
		changePage('/workouts/' + id + '/view');
	}

	const changePage = (page) => {
		history.push('/history' + page);
	}

	return (
		<div>
			<Switch>
				<Route exact path="/history">
					<Menu changePage={changePage} setTitle={props.setTitle} />
				</Route>
				<Route path="/history/trends">
					<div>Trends</div>
				</Route>
				<Route exact path="/history/workouts">
					<Workouts goToWorkout={goToWorkout} {...props} />
				</Route>
				<Route exact path="/history/workouts/:id/view">
					<ViewWorkout changePage={changePage} {...props} />
				</Route>
			</Switch>
		</div>
	);
}

export default History;

const Menu = (props) => {
	React.useEffect(() => {
		props.setTitle('History');
	}, []);

	return (
		<div>
			<Button 
				variant="outlined"
				onClick={() => props.changePage('/trends')}
				fullWidth={true}
				style={{ marginTop: 15 }}
			>
				View Trends
			</Button>
			<Button 
				variant="outlined"
				onClick={() => props.changePage('/workouts')}
				fullWidth={true}
				style={{ marginTop: 15 }}
			>
				View Past Workouts
			</Button>
		</div>
	);
}