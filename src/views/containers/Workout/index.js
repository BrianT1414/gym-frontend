import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Workout from '../../pages/Workout';
import { workoutActions } from '../../../redux/workouts';
import { setActions } from '../../../redux/sets';
import { connectMeta } from 'redux-meta';

const mapStateToProps = (state) => {
  return {
    confirmContinueWorkout: state.workoutsReducer.confirmContinueWorkout,
    suggestions: state.workoutsReducer.suggestions
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		createSet: setActions.createSet,
		updateSet: setActions.updateSet,
		startNewWorkout: workoutActions.startNewWorkout,
		continueWorkout: workoutActions.continueWorkout,
		getWorkout: workoutActions.getWorkout,
    getWorkouts: workoutActions.getWorkouts,
    checkCurrentWorkout: workoutActions.checkCurrentWorkout,
    getSuggestions: workoutActions.getSuggestions,
    clearSuggestions: workoutActions.clearSuggestions,
	}, dispatch);
}

const WorkoutContainer = (props) => {
  const getCurrentWorkoutLoading = props.getLoading(workoutActions.checkCurrentWorkout, true);

  return (
    <Workout
      setTitle={props.setTitle}
      confirmContinueWorkout={props.confirmContinueWorkout}
      muscle_groups={props.muscle_groups}
      muscles={props.muscles}
      exercises={props.exercises}
      sets={props.sets}
      workout={props.workout}
      createSet={props.createSet}
      updateSet={props.updateSet}
      startNewWorkout={props.startNewWorkout}
      continueWorkout={props.continueWorkout}
      getWorkout={props.getWorkout}
      getWorkouts={props.getWorkouts}
			getMuscleGroups={props.getMuscleGroups}
			getMuscles={props.getMuscles}
			getExercises={props.getExercises}
			getSets={props.getSets}
      checkCurrentWorkout={props.checkCurrentWorkout}
      getCurrentWorkoutLoading={getCurrentWorkoutLoading}
      getSuggestions={props.getSuggestions}
      suggestions={props.suggestions}
      clearSuggestions={props.clearSuggestions}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(WorkoutContainer));
