/**
 * Gets the repositories of the user from Github
 */

import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SUBMIT_SIGNUP } from 'containers/HomePage/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import { auth } from 'utils/firebase';

/**
 * Github repos request/response handler
 */
export function* submitSignup(action) {
  const signIn = (action) => {
    auth.signInWithEmailAndPassword(action.email, action.password) 
  }

  try {
    const response = yield call(signIn, action)
    yield put({type: 'SIGNUP_SUCCESS', user: auth.currentUser});
  } catch (err) {
    console.log(err)
    yield put({type: 'OOPS'});
  }
}

/**
 * Watches for LOAD_REPOS actions and calls getRepos when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* submitSignupWatcher() {
  yield fork(takeLatest, SUBMIT_SIGNUP, submitSignup);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* signupData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(submitSignupWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  signupData,
];
