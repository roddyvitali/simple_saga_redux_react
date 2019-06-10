import jwtDecode from 'jwt-decode';
import { store } from './../';
import { setUserInfo } from './../screens/Main/reducer';

const setUserData = () => {
  let user = localStorage.getItem('user');
  let userData = JSON.parse(user);
	store.dispatch(setUserInfo(userData));
};

export const isLoggedIn = () => {
	if ( localStorage.getItem('token') && localStorage.getItem('user') ) {
    let token = localStorage.getItem('token');
		if (jwtDecode(token).exp < Date.now() / 1000) {
			localStorage.clear();
			return false;
		}
		setUserData();
		return true;
	}
	return false;
};