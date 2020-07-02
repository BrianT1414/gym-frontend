import { combineReducers } from 'redux';
import types from './types';

function sets(state = [], action) {
	switch(action.type) {
		case types.GET_SETS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}

function set(state = {}, action) {
	switch(action.type) {
		case types.GET_SET_SUCCESS:
			return action.payload;
		case types.CLEAR_SET:
			return {};
		default:
			return state;
	}
}

export default combineReducers({
  sets,
  set
});