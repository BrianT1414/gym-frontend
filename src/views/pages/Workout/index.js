import React from 'react';
import NewSet from './NewSet';
import ChooseWorkout from './ChooseWorkout';

const Workout = (props) => {
	React.useEffect(() => {
		props.checkCurrentWorkout();
	}, []);

	if (props.getCurrentWorkoutLoading) {
		return null;
	} else if (props.workout.id && !props.confirmContinueWorkout) {
		return (
			<NewSet {...props} />
		);
	} else {
		return (
			<ChooseWorkout {...props} />
		);
	}
}

export default Workout;
