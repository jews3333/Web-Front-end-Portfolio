import { storage, database } from '../firebase/init';
import * as actions from '../actions';

export const getPortfolioList = (dispatch) => {
    database.ref("list").on("value", snapshot => {
        let getList = snapshot.val();

        for(let i=0; i<getList.length; i++){
            storage.ref("portfolio").child(getList[i].image).getDownloadURL().then((url) => {
                
                getList[i].push("image_url",url);
            }).catch((err) => {
                console.log(err);
            });
        }

        let portfolioList = getList ? Object.keys(getList).map(async id => 
            await storage.ref('portfolio').child(getList[id].image).getDownloadURL().then((url) => ({
                id,
                ...getList[id],
                url
            }))
            // ({ id, ...getList[id] })
        ) : [];

        console.log(Promise.resolve(portfolioList[0]));

        dispatch(actions.portfolio(portfolioList));
    });
}

export default getPortfolioList;