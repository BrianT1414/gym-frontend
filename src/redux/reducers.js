import types from './types';

function user(state = {}, action) {
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

function muscle_groups(state = [], action) {
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

function muscles(state = [], action) {
	switch(action.type) {
		case types.GET_MUSCLES_SUCCESS:
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

function exercises(state = [], action) {
	switch(action.type) {
		case types.GET_EXERCISES_SUCCESS:
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

function workout(state = {}, action) {
	switch(action.type) {
		case types.START_WORKOUT_SUCCESS:
		case types.GET_WORKOUT_SUCCESS:
		case types.GET_CURRENT_WORKOUT_SUCCESS:
			return action.payload;
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

export default {
	muscle_groups,
	exercises,
	sets,
	set,
	muscles,
	user,
	workout,
	workouts,
	confirmContinueWorkout,
	suggestions
}
