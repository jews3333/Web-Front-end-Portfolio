import * as types from '../actions/ActionTypes';
import { auth, provider } from '../firebase/init';
import { handleActions } from 'redux-actions';

const initialState = {
    logged: false,
    user: []
}


// const login = (state = initialState, action) => {
//     switch (action.type){
//         case types.AUTH_STATE:
//             return {
//                 logged: auth().currentUser !== null ? true : false,
//                 user: auth().currentUser !== null ? auth().currentUser : []
//             }
        
//         case types.LOGIN:
//             return {
//                 logged: true,
//                 user:  auth().signInWithRedirect(provider).then((result) => {
//                     return result.user;
//                 }).catch((err) => {
//                     console.log(err);
//                     return state.user;
//                 })
//             }
            
//         case types.LOGOUT:
//             auth().signOut();
//             return {
//                 logged: false,
//                 user: []
//             };
            
//         default:
//             return state;
//     }
// }

const login = handleActions({
    [types.AUTH_STATE]: (state, action) => {
        return {
            logged: auth().currentUser !== null ? true : false,
            user: auth().currentUser !== null ? auth().currentUser : []
        }
    },
    [types.LOGIN]: (state, action) => {
        auth().signInWithRedirect(provider).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });
    },
    [types.LOGOUT]: (state, action) => {
        auth().signOut();
        return {
            logged: false,
            user: []
        };
    }
}, initialState);

export default login;