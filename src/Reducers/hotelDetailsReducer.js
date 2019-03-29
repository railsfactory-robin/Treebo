import {
    GET_HOTELS_DETAILS_SUCCESS,
    GET_HOTELS_DETAILS_FAILURE,
    GET_HOTELS_DETAILS_REQUEST,
  } from '../Types/hotel.type';
  
  const initialState = {
    policies:[],
    essentials: [],
    fetching: false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_HOTELS_DETAILS_FAILURE:
        return {
          ...state,
          fetching: true
        }
      case GET_HOTELS_DETAILS_SUCCESS:
        return {
          ...state,
          message: 'Hotel details returned successfully',
          policies: action.policies,
          essentials: action.essentials,
          fetching: false
        }
      case GET_HOTELS_DETAILS_REQUEST:
        return {
          ...state,
          message: 'Sorry, Please try again !',
          policies: [],
          essentials:[],
          fetching: false
        }
      default:
        return state;
    }
  }