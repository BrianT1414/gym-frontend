import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { muscleGroupActions } from '../../../redux/muscle_groups';
import { muscleActions } from '../../../redux/muscles';
import { exerciseActions } from '../../../redux/exercises';
import { connectMeta } from 'redux-meta';
import Settings from '../../pages/Settings';

const mapStateToProps = (state) => {
	return {
		muscle_groups: state.muscle_groups,
		muscles: state.muscles,
		exercises: state.exercises,
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		getMuscleGroups: muscleGroupActions.getMuscleGroups,
		createMuscleGroup: muscleGroupActions.createMuscleGroup,
		updateMuscleGroup: muscleGroupActions.updateMuscleGroup,
		deleteMuscleGroup: muscleGroupActions.deleteMuscleGroup,
		getMuscles: muscleActions.getMuscles,
		createMuscle: muscleActions.createMuscle,
		updateMuscle: muscleActions.updateMuscle,
		deleteMuscle: muscleActions.deleteMuscle,
		getExercises: exerciseActions.getExercises,
		createExercise: exerciseActions.createExercise,
		updateExercise: exerciseActions.updateExercise,
		deleteExercise: exerciseActions.deleteExercise,
	}, dispatch);
}

const SettingsContainer = (props) => {
  return (
    <Settings
      setTitle={props.setTitle}
      muscle_groups={props.muscle_groups}
      muscles={props.muscles}
      exercises={props.exercises}
      getMuscleGroups={props.getMuscleGroups}
		  createMuscleGroup={props.createMuscleGroup}
		  updateMuscleGroup={props.updateMuscleGroup}
		  deleteMuscleGroup={props.deleteMuscleGroup}
		  getMuscles={props.getMuscles}
		  createMuscle={props.createMuscle}
		  updateMuscle={props.updateMuscle}
		  deleteMuscle={props.deleteMuscle}
		  getExercises={props.getExercises}
		  createExercise={props.createExercise}
		  updateExercise={props.updateExercise}
		  deleteExercise={props.deleteExercise}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(SettingsContainer));
