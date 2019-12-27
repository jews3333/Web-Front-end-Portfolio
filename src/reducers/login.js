import * as types from '../actions/ActionTypes';
import { auth, provider } from '../firebase/init';

const initialState = {
    logged: false,
    user: ''
}

const login = (state = initialState, action) => {
    switch (action.type){
        case types.LOGIN:
            auth().signInWithPopup(provider).then((result) => {
                return {
                    logged: true,
                    user: result
                }
            }).catch((err) => {
                console.log(err);
            })
            
        case types.LOGOUT:
            auth().signOut();
            return {
                logged: false,
                user: 'nn'
            }

        default:
            return state;
    }
}

export default login;