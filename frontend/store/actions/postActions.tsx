import * as types from '../types';
import api from '../../services/api';

export const fetchposts = () => async dispatch => {
  const response = await api.get(
    "/products"
  );
  dispatch({
    type: types.GET_PRODUCTS,
    payload: response.data,
  })
}

export const addProduct = (product) => {
  return (dispatch) => {
		api.put('/product', product).then((response) => dispatch((response.data))).catch(console.log);
	};
}
