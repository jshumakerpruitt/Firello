/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  SUBMIT_SIGNUP,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  token: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SIGNUP:
      return state.set('token', action.token);
    default:
      return state;
  }
}

export default homeReducer;
