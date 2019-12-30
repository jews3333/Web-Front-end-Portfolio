import * as types from './ActionTypes';

export const authState = () => ({
    type: types.AUTH_STATE
})

export const login = () => ({
    type: types.LOGIN
});

export const logout = () => ({
    type: types.LOGOUT
})