import { createAction } from 'redux-actions';

const initialState = {
	user: {
    username: undefined
  }
};

export const SET_USER_INFO = 'SET_USER_INFO';
export const UNSET_USER_INFO = 'UNSET_USER_INFO';
export const setUserInfo = createAction(SET_USER_INFO);
export const unsetUserInfo = createAction(UNSET_USER_INFO);

export default (state = initialState, action) => {
	switch (action.type) {
    case SET_USER_INFO:
			return {
				user: action.payload
      };
    case UNSET_USER_INFO:
		default:
			return initialState;
	}
};