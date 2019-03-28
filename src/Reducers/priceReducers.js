import {
    GET_PRICE_SUCCESS,
    GET_PRICE_FAILURE,
    GET_PRICE_REQUEST,
  } from '../Types/price.type';
  
  const initialState = {
    prices:[]
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_PRICE_REQUEST:
        return {
          ...state
        }
      case GET_PRICE_SUCCESS:
        return {
          ...state,
          message: 'Prices returned successfully',
          prices: action.prices
        }
      case GET_PRICE_FAILURE:
        return {
          ...state,
          message: 'Sorry, Please try again !',
          prices: []
        }
      default:
        return state;
    }
  }