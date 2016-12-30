/*
 * Home Actions
 *
 */

import {
  SUBMIT_SIGNUP,
  SUBMIT_SIGNIN,
} from './constants';

export const submitSignUp = (email, password) => ({
  type: SUBMIT_SIGNUP,
  email,
  password,
});

export const submitSignIn = (email, password) => ({
  type: SUBMIT_SIGNIN,
  email,
  password,
});

export const receiveSignIn = (user) => ({
  type: RECEIVE_SIGNIN,
  user,
});
