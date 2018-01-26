import auth from './modules/auth/authReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    auth
});
export default appReducer;