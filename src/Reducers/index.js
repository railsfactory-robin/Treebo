import { combineReducers } from "redux";
import hotelReducer from './hotelReducer';
import hotelDetailsReducer from './hotelDetailsReducer'
import priceReducer from './priceReducers'

const appReducers = combineReducers({
    hotelReducer,
    hotelDetailsReducer,
    priceReducer
})

export default appReducers;