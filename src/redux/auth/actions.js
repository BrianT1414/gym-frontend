import ajax from "../../utils/ajax"
import types from './types';

const api = '/api';

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