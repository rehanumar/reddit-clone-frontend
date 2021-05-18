import { put, takeLatest } from 'redux-saga/effects';
import { getRequest } from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
import response from './mockResponse.json';

function* subRedditSaga(action) {
  try {
    const data = yield getRequest(`subreddit/${action.topic}.json`);
    yield put(actions.loadSubRedditSuccess(response, data));
  } catch (e) {
    yield put(actions.setError());
  }
}

export default function* subRedditWatcher() {
  yield takeLatest(constants.LOAD_SUB_REDDIT, subRedditSaga);
}
