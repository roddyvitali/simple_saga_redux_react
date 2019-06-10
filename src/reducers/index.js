import { combineReducers } from  'redux';
import login from './../screens/Login/reducer';
import general from './../screens/Main/reducer';

const rootReducer  =  combineReducers({
  login,
  general
})
export default rootReducer;