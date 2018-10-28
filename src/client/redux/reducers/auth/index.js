import actionTypes from '../../actions/actionTypes'


const initialState = {
    user: null

}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOG_IN: {
            return {
                ...state,
                user: action.payload.data,
            }
        }

        default:
            return state;
    }
}

export default auth