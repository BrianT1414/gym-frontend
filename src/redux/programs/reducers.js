import types from './types';

export default function programs(state = [], action) {
	switch(action.type) {
		case types.GET_PROGRAMS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}