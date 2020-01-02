import * as types from '../actions/ActionTypes';
import { database } from '../firebase/init';

const initialState = {
    list: null
}


const portfolio = (state = initialState, action) => {
    switch(action.type){
        case types.PORTFOLIO :

            let lists = null;

            database.ref("list").on("value", snapshot => {
                if(snapshot.val() != null){
                    lists = snapshot.val()
                } else {
                    console.log('데이터가 없습니다');
                }

                return {
                    list: lists
                }
            });

        default :
            return state;
    }
}

export default portfolio;