import React from 'react';
import NewSet from './NewSet';
import ChooseWorkout from './ChooseWorkout';

const Workout = (props) => {
	if (props.workout.id) {
		return (<NewSet {...props} />);
	} else {
		return (<ChooseWorkout {...props} />);
	}
}

export default Workout;
