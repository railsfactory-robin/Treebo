import {
    GET_HOTELS_DETAILS_SUCCESS,
    GET_HOTELS_DETAILS_FAILURE,
    GET_HOTELS_DETAILS_REQUEST,
  } from '../Types/hotel.type';

  import Api from './Api';
  
  export const hotelDetailsSuccess = (response) => {
    return {
      type: GET_HOTELS_DETAILS_SUCCESS,
      policies: response.data.policies,
      essentials: response.data.essentials
    }
  }
  
  export const hotelDetailsFailure = () => {
    return {
      type: GET_HOTELS_DETAILS_FAILURE,
    }
  }
  
  export const hotelDetailsRequest = () => {
    return {
      type: GET_HOTELS_DETAILS_REQUEST
    }
  }
  
  export const getHotelDetails = () => {
    return dispatch => {
      dispatch(hotelDetailsRequest())
      return Api.get('/v2/5a7f265b2e00005d00b56877')
        .then(response => response.json())
        .then(response => {
            dispatch(hotelDetailsSuccess(response));
        })
        .catch((error) => {
          dispatch(hotelDetailsFailure());
      });
    }
  }
