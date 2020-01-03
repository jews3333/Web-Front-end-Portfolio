import * as types from '../actions/ActionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    list: null
}

const portfolio = handleActions({
    [types.PORTFOLIO]: (state, action) => {
        return {
            list: action.payload //payload : portfolioList(jsonData)
        }
    }
}, initialState);

export default portfolio;