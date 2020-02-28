import ajax from "../utils/ajax"
import types from './types';

const api = '/api';

export function getMuscleGroups() {
	return {
		types: [
			types.GET_MUSCLE_GROUPS_REQUEST,
			types.GET_MUSCLE_GROUPS_SUCCESS,
			types.GET_MUSCLE_GROUPS_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/muscle_groups'
			});
		}
	}
}

export function createMuscleGroup(data) {
	return {
		types: [
			types.CREATE_MUSCLE_GROUPS_REQUEST,
			types.CREATE_MUSCLE_GROUPS_SUCCESS,
			types.CREATE_MUSCLE_GROUPS_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'POST',
				url: api + '/muscle_groups',
				data: data
			});
		}
	}
}

export function updateMuscleGroup(id, data) {
	return {
		types: [
			types.UPDATE_MUSCLE_GROUPS_REQUEST,
			types.UPDATE_MUSCLE_GROUPS_SUCCESS,
			types.UPDATE_MUSCLE_GROUPS_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'PUT',
				url: api + '/muscle_groups/' + id,
				data: data
			});
		}
	}
}

export function deleteMuscleGroup(id) {
	return {
		types: [
			types.DELETE_MUSCLE_GROUPS_REQUEST,
			types.DELETE_MUSCLE_GROUPS_SUCCESS,
			types.DELETE_MUSCLE_GROUPS_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'DELETE',
				url: api + '/muscle_groups/' + id,
			});
		}
	}
}

export function getMuscles() {
	return {
		types: [
			types.GET_MUSCLES_REQUEST,
			types.GET_MUSCLES_SUCCESS,
			types.GET_MUSCLES_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/muscles'
			});
		}
	}
}

export function createMuscle(data) {
	return {
		types: [
			types.CREATE_MUSCLE_REQUEST,
			types.CREATE_MUSCLE_SUCCESS,
			types.CREATE_MUSCLE_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'POST',
				url: api + '/muscles',
				data: data
			});
		}
	}
}

export function updateMuscle(id, data) {
	return {
		types: [
			types.UPDATE_MUSCLE_REQUEST,
			types.UPDATE_MUSCLE_SUCCESS,
			types.UPDATE_MUSCLE_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'PUT',
				url: api + '/muscles/' + id,
				data: data
			});
		}
	}
}

export function deleteMuscle(id) {
	return {
		types: [
			types.DELETE_MUSCLES_REQUEST,
			types.DELETE_MUSCLES_SUCCESS,
			types.DELETE_MUSCLES_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'DELETE',
				url: api + '/muscles/' + id,
			});
		}
	}
}

export function getExercises(muscle_group_id) {
	return {
		types: [
			types.GET_EXERCISES_REQUEST,
			types.GET_EXERCISES_SUCCESS,
			types.GET_EXERCISES_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/exercises',
				data: { muscle_group_id: muscle_group_id }
			});
		}
	}
}

export function createExercise(data) {
	return {
		types: [
			types.CREATE_EXERCISE_REQUEST,
			types.CREATE_EXERCISE_SUCCESS,
			types.CREATE_EXERCISE_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'POST',
				url: api + '/exercises',
				data: data
			});
		}
	}
}

export function updateExercise(id, data) {
	return {
		types: [
			types.UPDATE_EXERCISE_REQUEST,
			types.UPDATE_EXERCISE_SUCCESS,
			types.UPDATE_EXERCISE_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'PUT',
				url: api + '/exercises/' + id,
				data: data
			});
		}
	}
}

export function deleteExercise(id) {
	return {
		types: [
			types.DELETE_EXERCISE_REQUEST,
			types.DELETE_EXERCISE_SUCCESS,
			types.DELETE_EXERCISE_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'DELETE',
				url: api + '/exercises/' + id
			});
		}
	}
}

export function getSuggestions(id) {
	return {
		types: [
			types.GET_SUGGESTION_REQUEST,
			types.GET_SUGGESTION_SUCCESS,
			types.GET_SUGGESTION_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/exercises/' + id + '/sets/last'
			});
		}
	}
}

export function clearSuggestions() {
	return {
		type: types.CLEAR_SUGGESTIONS
	}
}

export function createSet(data) {
	return {
		types: [
			types.CREATE_SET_REQUEST,
			types.CREATE_SET_SUCCESS,
			types.CREATE_SET_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'POST',
				url: api + '/sets',
				data: data
			});
		}
	}
}

export function getSets(workout_id = null) {
	const data = workout_id ? { workout_id } : {};
	return {
		types: [
			types.GET_SETS_REQUEST,
			types.GET_SETS_SUCCESS,
			types.GET_SETS_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/sets',
				data
			})
		}
	}
}

export function getSet(id) {
	return {
		types: [
			types.GET_SET_REQUEST,
			types.GET_SET_SUCCESS,
			types.GET_SET_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/sets/' + id
			})
		}
	}
}

export function updateSet(id, data) {
	return {
		types: [
			types.UPDATE_SET_REQUEST,
			types.UPDATE_SET_SUCCESS,
			types.UPDATE_SET_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'PUT',
				url: api + '/sets/' + id,
				data: data
			})
		}
	}
}

export function deleteSet(id) {
	return {
		types: [
			types.DELETE_SET_REQUEST,
			types.DELETE_SET_SUCCESS,
			types.DELETE_SET_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'DELETE',
				url: api + '/sets/' + id
			})
		}
	}
}

export function login(values) {
	return {
		types: [
			types.LOGIN_REQUEST,
			types.LOGIN_SUCCESS,
			types.LOGIN_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'POST',
				url: api + '/login',
				data: values
			})
		}
	}
}

export function logout() {
	return {
		types: [
			types.LOGOUT_REQUEST,
			types.LOGOUT_SUCCESS,
			types.LOGOUT_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/logout'
			})
		}
	}
}

export function checkUser() {
	return {
		types: [
			types.GET_USER_REQUEST,
			types.GET_USER_SUCCESS,
			types.GET_USER_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/auth'
			})
		}
	}
}

export function startNewWorkout() {
	return {
		types: [
			types.START_WORKOUT_REQUEST,
			types.START_WORKOUT_SUCCESS,
			types.START_WORKOUT_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/workouts/new'
			})
		}
	}
}

export function continueWorkout() {
	return {
		type: types.CONTINUE_WORKOUT
	}
}

export function getWorkout(id) {
	return {
		types: [
			types.GET_WORKOUT_REQUEST,
			types.GET_WORKOUT_SUCCESS,
			types.GET_WORKOUT_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/workouts/' + id
			})
		}
	}
}

export function checkCurrentWorkout() {
	return {
		types: [
			types.GET_CURRENT_WORKOUT_REQUEST,
			types.GET_CURRENT_WORKOUT_SUCCESS,
			types.GET_CURRENT_WORKOUT_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/workouts/current'
			})
		}
	}
}

export function getWorkouts() {
	return {
		types: [
			types.GET_WORKOUTS_REQUEST,
			types.GET_WORKOUTS_SUCCESS,
			types.GET_WORKOUTS_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/workouts'
			})
		}
	}
}

export function clearSet() {
	return {
		type: types.CLEAR_SET,
	}
}
