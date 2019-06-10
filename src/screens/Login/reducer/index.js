import { createAction } from 'redux-actions';
import { toast } from 'react-toastify';

const initialState = {
	requesting: false,
	successful: false,
	messages: [],
	errors: []
};

export const LOGIN_REQUESTING = 'LOGIN_REQUESTING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_UNSUCCESS = 'LOGIN_UNSUCCESS';
export const LOGOUT_REQUESTING = 'LOGOUT_REQUESTING';
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';

export const loginRequesting = createAction(LOGIN_REQUESTING);
export const logoutRequesting = createAction(LOGOUT_REQUESTING);

export const logoutSuccessful = (message) => ({
	type: LOGOUT_SUCCESSFUL,
	message
});

export default (state = initialState, action) => {
	switch (action.type) {
    case LOGIN_REQUESTING:
			return {
				requesting: true,
				successful: false,
				messages: [],
				errors: []
			};
		case LOGIN_SUCCESS:
			toast.success("Felicidades Accediste!", {
				position: toast.POSITION.TOP_CENTER
			});
			return {
				requesting: false,
				successful: true,
				messages: [],
				errors: []
			};
		case LOGIN_UNSUCCESS:
			toast.warn("Ups credenciales incorrectas!", {
				position: toast.POSITION.BOTTOM_LEFT
			});
			return {
				requesting: false,
				successful: false,
				messages: [
					{
						body: `${action.response.data.msg}`
					}
				],
				errors: []
			};
		case LOGIN_ERROR:
			toast.error(action.error.toString(), {
				position: toast.POSITION.TOP_LEFT
			});
			return {
				requesting: false,
				successful: false,
				messages: [],
				errors: state.errors.concat([
					{
						body: action.error.toString()
					}
				])
			};
		case LOGOUT_SUCCESSFUL:
			return {
				requesting: false,
				successful: false,
				messages: [
					{
						body: `${action.message}`
					}
				],
				errors: []
			};
		default:
			return initialState;
	}
};