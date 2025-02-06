import { combineReducers } from 'redux';
import adminReducers from '../reducers/AdminReducers'

    const reducers= combineReducers({
        adminReducers
    })

    function reducer(state, action){
        return reducers(state,action)
    }

export default reducer;