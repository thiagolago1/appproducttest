import * as types from '../types';

const initialState={
  products: [],
  post: {},
  loading: false,
  error: null
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      }
    case types.ADD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      }
    default:
      return state
  }
};