import * as types from '../actions/ActionTypes';
import { auth, provider } from '../firebase/init';
import { handleActions } from 'redux-actions';
import { toastMessage } from '../modules';

const initialState = {
    admin: false,
    logged: false,
    user: null
}

const login = handleActions({
    [types.AUTH_STATE]: (state, action) => {
        return {
            admin: action.payload ? action.payload.uid === 'Sml80BIu65YmBUnFm16nIAAUg602' ? true : false : false,
            logged: action.payload ? true : false,
            user: action.payload //payload : userData
        }
    },
    [types.LOGIN]: (state, action) => {
        auth().signInWithRedirect(provider).then((result) => {
            return {
                ...state,
                logged: true,
                user: result.user
            }
        }).catch((err) => {
            console.error(err);
            toastMessage("로그인에 실패하였습니다!");
            return state;
        });
    },
    [types.LOGOUT]: (state, action) => {
        auth().signOut();
        console.log("Logout Success!");
        return {
            admin: false,
            logged: false,
            user: null
        };
    }
}, initialState);

export default login;