import { setHighscore, sendEmail } from "./../services/http";
//import getActions from './getActions';

const actions = {
    setHighscoreData: data => { // Set local highscore value
        return {
            type: "SET_HIGHSCORE_DATA",
            data
        };
    },
    setHighscore: payload => { // Update new highscore
        return dispatch => {
            setHighscore(payload);
        }
    },
    sendEmail: payload => {
        return dispatch => {
            dispatch({
                type: "SENDING_EMAIL"
            })
            sendEmail(payload).then(
                data => dispatch({
                    type: "SENT_EMAIL"
                }),
                err => {
                    dispatch({
                        type: "ERROR",
                        error: "There was an issue sending your email to peter.jacobsen55@gmail.com"
                    })
                }
            )
        }
        // Call mailgun
    }
};

export default actions;

