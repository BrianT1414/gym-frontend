import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../../../redux/actions';
import { connectMeta } from '../../../../../redux-meta/src';
import Router from '../../pages';

const mapStateToProps = (state) => {
	return {
		user: state.user,
		muscle_groups: state.muscle_groups,
		muscles: state.muscles,
		exercises: state.exercises,
		sets: state.sets,
		set: state.set,
		workout: state.workout,
		workouts: state.workouts
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		getMuscleGroups: actions.getMuscleGroups,
		getMuscles: actions.getMuscles,
		getExercises: actions.getExercises,
		getSets: actions.getSets,
		getSet: actions.getSet,
		login: actions.login,
		logout: actions.logout,
		checkUser: actions.checkUser,
	}, dispatch);
}

const App = (props) => {
	const checkUserMeta = props.getMeta(actions.checkUser)

	let history = useHistory();

	React.useEffect(() => {
		props.checkUser();
	}, []);

	React.useEffect(() => {
		if (Object.keys(props.user).length === 0 && checkUserMeta.success === true) {
			history.push('/login');
		}
	}, [props.user, checkUserMeta]);

	return (
		<Router 
			user={props.user}
			muscle_groups={props.muscle_groups}
			muscles={props.muscles}
			exercises={props.exercises}
			sets={props.sets}
			set={props.set}
			workout={props.workout}
			workouts={props.workout}
			getMuscleGroups={props.getMuscleGroups}
			getMuscles={props.getMuscles}
			getExercises={props.getExercises}
			getSets={props.getSets}
			getSet={props.getSet}
			login={props.login}
			logout={props.logout}
			checkUser={props.checkUser}
		/>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(App));
