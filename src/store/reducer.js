import { CHANGE_INPUT } from './actionTypes';
const defaultState = {
  inputValue: '123',
  list: ['写代码', '你好']
};
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = { ...state };
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'add_todoList_item') {
    let newState = { ...state };
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === 'delete_todoList_item') {
    let newState = { ...state };
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
};
