import types from './types';

export default function user(state = {}, action) {
	switch(action.type) {
		case types.LOGIN_SUCCESS:
			return action.payload;
		case types.GET_USER_SUCCESS:
			if (action.payload.message && action.payload.message == 'Not logged in') {
				return {};
			}
			return action.payload;
		case types.LOGOUT_SUCCESS:
			return {};
		default:
			return state;
	}
}
