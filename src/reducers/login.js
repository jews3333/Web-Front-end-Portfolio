import * as types from '../actions/ActionTypes';
import { auth, provider } from '../firebase/init';

const initialState = {

    logged: false,
    user: []

}

const login = (state = initialState, action) => {
    switch (action.type){
        case types.LOGIN:
            return {
                logged: true,
                user:  auth().signInWithRedirect(provider).then((result) => {
                    return result;
                }).catch((err) => {
                    console.log(err);
                    return state;
                })
            }
            
        case types.LOGOUT:
            auth().signOut();
            return state;
            
        default:
            return state;

    }
}

export default login;