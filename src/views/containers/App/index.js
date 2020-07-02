import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../../redux/auth';
import { muscleGroupActions } from '../../../redux/muscle_groups';
import { muscleActions } from '../../../redux/muscles';
import { exerciseActions } from '../../../redux/exercises';
import { setActions } from '../../../redux/sets';
import { connectMeta } from 'redux-meta';
import Router from '../../pages';

const mapStateToProps = (state) => {
	console.log(state)
	return {
		user: state.auth,
		muscle_groups: state.muscle_groups,
		muscles: state.muscles,
		exercises: state.exercises,
		sets: state.setsReducer.sets,
		set: state.setsReducer.set,
		workout: state.workoutsReducer.workout,
		workouts: state.workoutsReducer.workouts
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		getMuscleGroups: muscleGroupActions.getMuscleGroups,
		getMuscles: muscleActions.getMuscles,
		getExercises: exerciseActions.getExercises,
		getSets: setActions.getSets,
		getSet: setActions.getSet,
		login: authActions.login,
		logout: authActions.logout,
		checkUser: authActions.checkUser,
	}, dispatch);
}

const App = (props) => {
	const checkUserMeta = props.getMeta(authActions.checkUser)

	let history = useHistory();

	React.useEffect(() => {
		props.checkUser();
		props.getMuscleGroups();
		props.getMuscles();
		props.getExercises();
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
