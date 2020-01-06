import { database } from '../firebase/init';
import * as actions from '../actions';

export const getPortfolioList = (dispatch) => {
    database.ref("list").on("value", snapshot => {
        let getList = snapshot.val();
        let portfolioList = getList ? Object.keys(getList).map(id => ({ id, ...getList[id] })) : [];

        dispatch(actions.portfolio(portfolioList));
    });
}

export default getPortfolioList;