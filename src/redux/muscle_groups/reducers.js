import types from './types';

export default function muscle_groups(state = [], action) {
	switch(action.type) {
		case types.GET_MUSCLE_GROUPS_SUCCESS:
			return action.payload.sort(function (a,b) {
				const first = a.name.toLowerCase();
				const second = b.name.toLowerCase();
				if (first < second) { //sort string ascending
					  return -1;
				}
				if (first > second) {
					  return 1;
				}
				return 0;
			});
		default:
			return state;
	}
}
