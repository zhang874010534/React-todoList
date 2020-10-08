import { CHANGE_INPUT } from './actionTypes';
export const changeInputAction = (value) => {
  return {
    type: CHANGE_INPUT,
    value
  };
};
