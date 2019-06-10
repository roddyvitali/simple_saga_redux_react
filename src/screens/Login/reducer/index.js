import { createAction } from 'redux-actions';
import { toast } from 'react-toastify';

const initialState = {
	requesting: false,
	successful: false
};

export const LOGIN_REQUESTING = 'LOGIN_REQUESTING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_UNSUCCESS = 'LOGIN_UNSUCCESS';

export const loginRequesting = createAction(LOGIN_REQUESTING);

export default (state = initialState, action) => {
	switch (action.type) {
    case LOGIN_REQUESTING:
			return {
				requesting: true,
				successful: false
			};
		case LOGIN_SUCCESS:
			toast.success("Felicidades Accediste!", {
				position: toast.POSITION.TOP_CENTER
			});
			return {
				requesting: false,
				successful: true
			};
		case LOGIN_UNSUCCESS:
			toast.warn("Ups credenciales incorrectas!", {
				position: toast.POSITION.BOTTOM_LEFT
			});
			return {
				requesting: false,
				successful: false
			};
		case LOGIN_ERROR:
			toast.error(action.error.toString(), {
				position: toast.POSITION.TOP_LEFT
			});
			return {
				requesting: false,
				successful: false
			};
		default:
			return initialState;
	}
};