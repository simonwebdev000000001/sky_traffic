
import actionTypes from '../actionTypes'
const UTILS = {
    AUTH_KEY: 'AUTH_KEY'
}

export const isLogedIn = () => (dispatch) => {
    let data = localStorage.getItem(UTILS.AUTH_KEY);
    if (data) {
        data = JSON.parse(data);
        if (!data.isAccess) {
            return localStorage.removeItem(UTILS.AUTH_KEY);
        }
        dispatch({
            type: actionTypes.USER_LOG_IN,
            payload: { data }
        })
    }
}
export const onLogIn = (user) => (dispatch) => {

    if (user.email == 'demo' && user.password == 'demo') {
        user.isAccess = true;
        localStorage.setItem(UTILS.AUTH_KEY, JSON.stringify(user));
        dispatch({
            type: actionTypes.USER_LOG_IN,
            payload: { data: user },
        });
    } else {
        throw new Error("No user Found!!!");
    }

}
