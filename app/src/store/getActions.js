import { getHighscore } from "./../services/http";
import setActions from "./setActions";



const actions = {
    getHighscore: game => {
        return dispatch => {
            dispatch({
                type: "FETCH_HIGHSCORE",
            })

            getHighscore(game).then(
                data => dispatch({
                    type: "SET_HIGHSCORE_DATA",
                    data
                })
            )
        }
        //let res = await getHighscore(game);
        //console.log(res);
        //return dispatch => {
            //{
                //type: "SET_HIGHSCORE",
                    //res
            //}
        //}



        //return async dispatch => {
                //.then(
                    //data => {
                        //dispatch(setActions.setHighscoreData(data));
                    //},
                    //err => {
                        //console.log('there was a problem', err);
                    //}
                //);
        //};
    },
};

export default actions;
