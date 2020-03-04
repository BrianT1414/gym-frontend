import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Workout from '../../pages/Workout';
import * as actions from '../../../redux/actions';
import { connectMeta } from 'redux-meta';

const mapStateToProps = (state) => {
  return {
    confirmContinueWorkout: state.confirmContinueWorkout,
    suggestions: state.suggestions
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		createSet: actions.createSet,
		updateSet: actions.updateSet,
		startNewWorkout: actions.startNewWorkout,
		continueWorkout: actions.continueWorkout,
		getWorkout: actions.getWorkout,
    getWorkouts: actions.getWorkouts,
    checkCurrentWorkout: actions.checkCurrentWorkout,
    getSuggestions: actions.getSuggestions,
    clearSuggestions: actions.clearSuggestions,
	}, dispatch);
}

const WorkoutContainer = (props) => {
  const getCurrentWorkoutLoading = props.getLoading(actions.checkCurrentWorkout, true);

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
