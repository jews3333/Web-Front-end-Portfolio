import * as types from '../actions/ActionTypes';
import { auth, provider } from '../firebase/init';
import { handleActions } from 'redux-actions';

const initialState = {
    logged: false,
    user: null
}

const login = handleActions({
    [types.AUTH_STATE]: (state, action) => {
        return {
            logged: action.payload ? true : false,
            user: action.payload //payload : userData
        }
    },
    [types.LOGIN]: (state, action) => {
        auth().signInWithRedirect(provider).then((result) => {
            return {
                logged: true,
                user: result.user
            }
        }).catch((err) => {
            return state;
        });
    },
    [types.LOGOUT]: (state, action) => {
        auth().signOut();
        return {
            logged: false,
            user: null
        };
    }
}, initialState);

export default login;