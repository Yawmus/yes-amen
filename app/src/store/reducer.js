const initialState = {
        highscore: {
                isFetching: false,
                value: 0
        },
        counter: 0,
        email: {
                sent: false,
        },
        error: {
                message: null
        }
}

const reducer = (state = initialState, action) => {
        let error = {
                message: null
        }
        switch (action.type) {
                case "SET_HIGHSCORE_DATA":
                        return Object.assign({}, state, {
                                highscore: {
                                        isFetching: false,
                                        value: action.data.score
                                },
                                error
                        })
                case "FETCH_HIGHSCORE":
                        return Object.assign({}, state, {
                                highscore: {
                                        isFetching: true
                                },
                                error
                        })
                case "INCREMENT":
                        return Object.assign({}, state, {
                                counter: state.counter + 1,
                                error
                        })
                case "DECREMENT":
                        return Object.assign({}, state, {
                                counter: state.counter - 1,
                                error
                        })
                case "SENDING_EMAIL":
                        return Object.assign({}, state, {
                                email: {
                                        sent: false,
                                },
                                error
                        })

                case "SENT_EMAIL":
                        return Object.assign({}, state, {
                                email: {
                                        sent: true,
                                },
                                error
                        })
                case "ERROR":
                        return Object.assign({}, state, {
                                error: {
                                        message: action.error
                                }
                        })
                default:
                        return state
        }
}

export default reducer
