import * as types from '../types';
import axios from 'axios';

export const fetchposts = () => async dispatch => {
  const response = await axios.get(
    "http://localhost:3333/products"
  );
  dispatch({
    type: types.GET_POSTS,
    payload: response.data,
  })
}