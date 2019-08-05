import { getHighscore } from "./../services/http";
//import setActions from "./setActions";

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
    },
};

export default actions;
