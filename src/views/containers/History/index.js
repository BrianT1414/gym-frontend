import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { workoutActions } from '../../../redux/workouts';
import { setActions } from '../../../redux/sets';
import { connectMeta } from 'redux-meta';
import History from '../../pages/History';

const mapStateToProps = (state) => {
	return {
    workout: state.workoutsReducer.workout,
    workouts: state.workoutsReducer.workouts
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    getWorkouts: workoutActions.getWorkouts,
    getWorkout: workoutActions.getWorkout,
    clearWorkout: workoutActions.clearWorkout,
		updateSet: setActions.updateSet,
	}, dispatch);
}

const HistoryContainer = (props) => {
  return (
    <History
      setTitle={props.setTitle}
      workout={props.workout}
      workouts={props.workouts}
      getWorkouts={props.getWorkouts}
      getWorkout={props.getWorkout}
      clearWorkout={props.clearWorkout}
      updateSet={props.updateSet}
      {...props}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(HistoryContainer));
