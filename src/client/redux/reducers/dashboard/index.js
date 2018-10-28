import actionTypes from '../../actions/actionTypes'


const initialState = {
    airportList: []
}

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOARD_AIRPORTS: {
            return {
                ...state,
                airportList: action.payload.data,
            }
        }
        case actionTypes.DASHBOARD_AIRPORT_DATA: {
            return {
                ...state,
                airportList: [
                    ...state.airportList.map((el) => {
                        return { ...el }
                    })
                ],
            }
        }

        default:
            return state;
    }
}

export default dashboard