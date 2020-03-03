import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import { connectMeta } from '../../../../../redux-meta/src';
import History from '../../pages/History';

const mapStateToProps = (state) => {
	return {
    workouts: state.workouts
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    getWorkouts: actions.getWorkouts,
    getWorkout: actions.getWorkout
	}, dispatch);
}

const HistoryContainer = (props) => {
  return (
    <History
      setTitle={props.setTitle}
      workouts={props.workouts}
      getWorkouts={props.getWorkouts}
      getWorkout={props.getWorkout}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(connectMeta(HistoryContainer));
