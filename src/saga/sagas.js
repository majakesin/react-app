import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as types from "../redux/types";
const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);

    yield put({ type: types.GET_USER_SUCCESS, users: users });
  } catch (exception) {
    yield put({ type: types.GET_USER_FAILED, message: exception.message });
  }
}

function* userSaga() {
  yield takeLatest(types.GET_USER_REQUESTED, fetchUsers);
}
export default userSaga;
