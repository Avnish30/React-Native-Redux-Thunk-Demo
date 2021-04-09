import {getData} from './actionTypes';
export const createAction = (actiontype, data) => {
  return {
    type: actiontype,
    payload: data,
  };
};
export const GetDataPost = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res1 => dispatch({type: getData, payload: res1}));
  };
};
