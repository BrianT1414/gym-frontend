import ajax from "../../utils/ajax"
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
			types.CREATE_MUSCLE_GROUP_REQUEST,
			types.CREATE_MUSCLE_GROUP_SUCCESS,
			types.CREATE_MUSCLE_GROUP_FAILURE,
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
			types.UPDATE_MUSCLE_GROUP_REQUEST,
			types.UPDATE_MUSCLE_GROUP_SUCCESS,
			types.UPDATE_MUSCLE_GROUP_FAILURE,
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
			types.DELETE_MUSCLE_GROUP_REQUEST,
			types.DELETE_MUSCLE_GROUP_SUCCESS,
			types.DELETE_MUSCLE_GROUP_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'DELETE',
				url: api + '/muscle_groups/' + id,
			});
		}
	}
}