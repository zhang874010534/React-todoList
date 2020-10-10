import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
function* getInitList() {
  try {
    const res = yield axios.get('/list.json');
    const action = {
      type: 'get_init_list',
      value: res
    };
    yield put(action);
  } catch (error) {}

  axios.get('/list.json').then((res) => {
    console.log(res);
  });
}

function* mySaga() {
  yield takeEvery('get_init_list', getInitList);
}
export default mySaga;
