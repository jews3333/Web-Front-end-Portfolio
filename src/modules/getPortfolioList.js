import { storage, database } from '../firebase/init';
import * as actions from '../actions';

export const getPortfolioList = (dispatch) => {
    console.log("start");
    database.ref("list").on("value", async (snapshot) => {
        const getList = snapshot.val();

        // for(let i=0; i<getList.length; i++){
        //     storage.ref("portfolio").child(getList[i].image).getDownloadURL().then((url) => {
        //         getList[i].push("image_url",url);
        //     }).catch((err) => {
        //         console.log(err);
        //     });
        // }

        const promiseList = getList ? Object.keys(getList).map(async (id) => {
            let image = null;
            await storage.ref('portfolio').child(getList[id].image).getDownloadURL().then((url) => {
                image = url;
            }).catch((err) => {
                console.error(err);
            });
            return {
                id,
                ...getList[id],
                image
            }
        }) : [];

        const portfolioList = new Array();

        if(promiseList){

            for(let i=0; i<promiseList.length; i++){
                await Promise.resolve(promiseList[i]).then((response) => {
                    portfolioList.push(response);
                }).catch((err) => {
                    console.error(err);
                })
            }

        }

        await dispatch(actions.portfolio(portfolioList));
    });
}

export default getPortfolioList;