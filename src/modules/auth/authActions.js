import * as types from '../../actionTypes';

export function login(userName,password) {
    return {
        type:types.LOGIN_SUCCESS
    }  
}