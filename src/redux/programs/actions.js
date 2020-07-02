import ajax from "../../utils/ajax"
import types from './types';

const api = '/api';

export function getPrograms() {
	return {
		types: [
			types.GET_PROGRAMS_REQUEST,
			types.GET_PROGRAMS_SUCCESS,
			types.GET_PROGRAMS_FAILURE,
		],
		promise: () => {
			return ajax({
				url: api + '/programs'
			})
		}
	}
}

export function createProgram(data) {
	return {
		types: [
			types.CREATE_PROGRAM_REQUEST,
			types.CREATE_PROGRAM_SUCCESS,
			types.CREATE_PROGRAM_FAILURE,
		],
		promise: () => {
			return ajax({
				method: 'post',
				url: api + '/programs'
			})
		}
	}
}
