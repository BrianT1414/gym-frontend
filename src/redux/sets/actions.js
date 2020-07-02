import ajax from "../../utils/ajax"
import types from './types';

const api = '/api';

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