import React from 'react';
import NewSet from './NewSet';
import ChooseWorkout from './ChooseWorkout';

const Workout = (props) => {
	React.useEffect(() => {
		props.checkCurrentWorkout();
	}, []);

	if (props.getCurrentWorkoutLoading) {
		return null;
	} else if (props.confirmContinueWorkout) {
		return (
			<ChooseWorkout {...props} />
		);
	} else if (props.workout.id) {
		return (
			<NewSet {...props} />
		);
	}
}

export default Workout;
