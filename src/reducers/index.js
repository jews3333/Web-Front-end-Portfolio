import login from './login';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    loginData: login
});

export default reducers;