import { CHANGE_INPUT } from './actionTypes';
import axios from 'axios';
export const changeInputAction = (value) => {
  return {
    type: CHANGE_INPUT,
    value
  };
};
export const getTodoList = () => {
  return (dispatch) => {
    // 这个dispatch就是store的那个dispatch,应该是redux-thunk内部处理的
    axios.get('/list.json').then((res) => {
      console.log(res);
    });
  };
  4;
};
