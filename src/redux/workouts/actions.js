import ajax from "../../utils/ajax"
import types from './types';

const api = '/api';

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

export function clearWorkout() {
	return {
		type: types.CLEAR_WORKOUT
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