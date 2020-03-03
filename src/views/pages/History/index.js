import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Workouts from './Workouts';
import ViewWorkout from './ViewWorkout';

const History = (props) => {
	let history = useHistory();

	const goToWorkout = (id) => {
		props.getWorkout(id);
		changePage('/workouts/view');
	}

	const changePage = (page) => {
		history.push('/history' + page);
	}

	React.useEffect(() => {
		props.setTitle('History');
	}, []);

	return (
		<div>
			<Switch>
				<Route exact path="/history">
					<div>
						<Button 
							variant="outlined"
							onClick={() => history.push('/history/trends')}
							fullWidth={true}
							style={{ marginTop: 15 }}
						>
							View Trends
						</Button>
						<Button 
							variant="outlined"
							onClick={() => history.push('/history/workouts')}
							fullWidth={true}
							style={{ marginTop: 15 }}
						>
							View Past Workouts
						</Button>
					</div>
				</Route>
				<Route path="/history/trends">
					<div>Trends</div>
				</Route>
				<Route exact path="/history/workouts">
					<Workouts goToWorkout={goToWorkout} {...props} />
				</Route>
				<Route exact path="/history/workouts/view">
					<ViewWorkout changePage={changePage} {...props} />
				</Route>
			</Switch>
		</div>
	);
}

export default History;
