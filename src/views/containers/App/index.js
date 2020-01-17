import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../../../redux/actions';
import TopNav from '../../components/TopNav';
import Settings from '../../pages/Settings';
import Workout from '../../pages/Workout';
import Login from '../../pages/Login';

const mapStateToProps = (state) => {
	return {
		muscle_groups: state.muscle_groups,
		exercises: state.exercises,
		sets: state.sets,
		muscles: state.muscles,
		user: state.user
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		...actions
	}, dispatch);
}

const App = (props) => {
	const [title, setTitle] = React.useState('Workout App');

	let history = useHistory();

	React.useEffect(() => {
		props.checkUser();
	}, []);

	React.useEffect(() => {
		if (Object.keys(props.user).length === 0) {
			history.push('/login');
		}
	}, [props.user]);

	return (
		<>
			<TopNav title={title} {...props} />
			<div style={{ margin: 5 }}>
				<Switch>
					<Route exact path="/">
						<Workout setTitle={setTitle} {...props} />
					</Route>
					<Route path="/settings">
						<Settings setTitle={setTitle} {...props} />
					</Route>
					<Route path="/workout">
						<Workout setTitle={setTitle} {...props} />
					</Route>
					<Route path="/login">
						<Login setTitle={setTitle} {...props} />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
