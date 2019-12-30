import * as types from '../actions/ActionTypes';
import { auth, provider } from '../firebase/init';

const initialState = {
    logged: false,
    user: []
}


const login = (state = initialState, action) => {
    switch (action.type){
        case types.AUTH_STATE:
            return {
                logged: auth().currentUser !== null ? true : false,
                user: auth().currentUser !== null ? auth().currentUser : []
            }
        
        case types.LOGIN:
            return {
                logged: true,
                user:  auth().signInWithRedirect(provider).then((result) => {
                    return result.user;
                }).catch((err) => {
                    console.log(err);
                    return state.user;
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