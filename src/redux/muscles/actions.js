import ajax from "../../utils/ajax"
import types from './types';

const api = '/api';

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