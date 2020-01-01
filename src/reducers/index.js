import login from './login';
import portfolio from './portfolio';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    loginData: login,
    portfolioData: portfolio
});

export default reducers;