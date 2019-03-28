import {
    GET_PRICE_SUCCESS,
    GET_PRICE_FAILURE,
    GET_PRICE_REQUEST,
  } from '../Types/price.type';

  import Api from './Api';
  
  export const priceListSuccess = (response) => {
    return {
      type: GET_PRICE_SUCCESS,
      prices: response.data
    }
  }
  
  export const priceListFailure = () => {
    return {
      type: GET_PRICE_FAILURE,
    }
  }
  
  export const priceListRequest = () => {
    return {
      type: GET_PRICE_REQUEST
    }
  }
  
  export const getPrices = () => {
    return dispatch => {
      dispatch(priceListRequest())
      return Api.get('/v2/5a7f24f02e00005200b56875')
        .then(response => response.json())
        .then(response => {
            dispatch(priceListSuccess(response));
        })
        .catch((error) => {
          dispatch(priceListFailure());
      });
    }
  }
