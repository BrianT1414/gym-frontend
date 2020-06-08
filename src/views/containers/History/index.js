import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import { connectMeta } from 'redux-meta';
import History from '../../pages/History';

const mapStateToProps = (state) => {
	return {
    workout: state.workout,
    workouts: state.workouts
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    getWorkouts: actions.getWorkouts,
    getWorkout: actions.getWorkout,
    clearWorkout: actions.clearWorkout,
		updateSet: actions.updateSet,
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
