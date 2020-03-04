import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
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
		getMuscleGroups: actions.getMuscleGroups,
		createMuscleGroup: actions.createMuscleGroup,
		updateMuscleGroup: actions.updateMuscleGroup,
		deleteMuscleGroup: actions.deleteMuscleGroup,
		getMuscles: actions.getMuscles,
		createMuscle: actions.createMuscle,
		updateMuscle: actions.updateMuscle,
		deleteMuscle: actions.deleteMuscle,
		getExercises: actions.getExercises,
		createExercise: actions.createExercise,
		updateExercise: actions.updateExercise,
		deleteExercise: actions.deleteExercise,
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
