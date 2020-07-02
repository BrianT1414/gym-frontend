import ajax from "../../utils/ajax"
import types from './types';

const api = '/api';

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