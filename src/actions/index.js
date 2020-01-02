import * as types from './ActionTypes';
import { createAction } from 'redux-actions';

export const authState = createAction(types.AUTH_STATE);

export const login = createAction(types.LOGIN);

export const logout = createAction(types.LOGOUT);

export const portfolio = createAction(types.PORTFOLIO);