import {
    GET_HOTELS_SUCCESS,
    GET_HOTELS_FAILURE,
    GET_HOTELS_REQUEST,
  } from '../Types/hotel.type';
  
  const initialState = {
    hotels:[],
    fetching: false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_HOTELS_REQUEST:
        return {
          ...state,
          fetching: true
        }
      case GET_HOTELS_SUCCESS:
        return {
          ...state,
          message: 'Hotels returned successfully',
          hotels: action.hotels,
          fetching: false
        }
      case GET_HOTELS_FAILURE:
        return {
          ...state,
          message: 'Sorry, Please try again !',
          hotels: [],
          fetching: false
        }
      default:
        return state;
    }
  }