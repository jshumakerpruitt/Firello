/*
 * Home Actions
 *
 */

import {
  SUBMIT_SIGNUP,
  SUBMIT_SIGNIN,
  SIGNIN_SUCCESS,
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

export const signinSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  user,
});
