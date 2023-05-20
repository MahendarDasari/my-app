import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchJoke(action) {
  const response = yield call(fetch, 'https://official-joke-api.appspot.com/random_joke');
  const joke = yield response.json();
  yield put({ type: 'JOKE_FETCH_SUCCEEDED', joke: joke.setup + ' - ' + joke.punchline });
}

function* jokeSaga() {
  yield takeEvery('JOKE_FETCH_REQUESTED', fetchJoke);
}

export default jokeSaga;
