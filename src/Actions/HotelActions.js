import {
    GET_HOTELS_SUCCESS,
    GET_HOTELS_FAILURE,
    GET_HOTELS_REQUEST,
    GET_HOTEL_SUCCESS,
  } from '../Types/hotel.type';

  import Api from './Api';
  
  export const hotelListSuccess = (response) => {
    return {
      type: GET_HOTELS_SUCCESS,
      hotels: response.data
    }
  }
  
  export const hotelListFailure = () => {
    return {
      type: GET_HOTELS_FAILURE,
    }
  }
  
  export const hotelListRequest = () => {
    return {
      type: GET_HOTELS_REQUEST
    }
  }
  
  export const getHotels = () => {
    return dispatch => {
      dispatch(hotelListRequest())
      return Api.get('/v2/5a7f23442e00005000b56873')
        .then(response => response.json())
        .then(response => {
            dispatch(hotelListSuccess(response));
        })
        .catch((error) => {
          dispatch(hotelListFailure());
      });
    }
  }

  export const getHotel = (id) => {
    return {
      type: GET_HOTEL_SUCCESS,
      id: id
    }
  }