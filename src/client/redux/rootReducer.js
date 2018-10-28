import { combineReducers } from 'redux'


import auth from './reducers/auth';

import dashboard from './reducers/dashboard';

const rootReducer = combineReducers({
	auth,
	dashboard
})

export default rootReducer