import AuthState from './authState';
import * as types from '../../actionTypes';
import Immutable, { Record, List } from 'immutable';

const authState = new AuthState();
export default function authReducer(state = authState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
             return state.set('isLogin', true);
        case types.LOGIN_FAILURE:
             return state.set('isLogin', false);
        default: 
             return state;
    }
    return state;
}