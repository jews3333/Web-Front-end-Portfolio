import { auth } from '../firebase/init';
import * as actions from '../actions';

export const getAuthState = (dispatch) => {
    auth().onAuthStateChanged((result) => {
        let user = result ? result : null;

        dispatch(actions.authState(user));
    })
}

export default getAuthState;