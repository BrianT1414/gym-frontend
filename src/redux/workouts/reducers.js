import { combineReducers } from 'redux';
import types from './types';

function workout(state = {}, action) {
	switch(action.type) {
		case types.START_WORKOUT_SUCCESS:
		case types.GET_WORKOUT_SUCCESS:
		case types.GET_CURRENT_WORKOUT_SUCCESS:
			return action.payload;
		case types.CLEAR_WORKOUT:
			return {};
		default:
			return state;
	}
}

function confirmContinueWorkout(state = false, action) {
	switch(action.type) {
		case types.GET_CURRENT_WORKOUT_SUCCESS:
			// If it returns a workout confirm its the same one
			if (Object.keys(action.payload).length > 0) {
				return true;
			}
			// If it doesn't find a workout, we don't need to confirm
			return false;
		case types.START_WORKOUT_SUCCESS:
		case types.CONTINUE_WORKOUT:
		case types.GET_WORKOUT_SUCCESS:
			return false;
		default:
			return state;
	}
}

function workouts(state = [], action) {
	switch(action.type) {
		case types.GET_WORKOUTS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}

function suggestions(state = {reps: null, weight: null}, action) {
	switch(action.type) {
		case types.GET_SUGGESTION_SUCCESS:
			return action.payload;
		case types.CLEAR_SUGGESTIONS:
			return {reps: null, weight: null}
		default:
			return state;
	}
}

export default combineReducers({
	workout,
	confirmContinueWorkout,
	workouts,
	suggestions
});