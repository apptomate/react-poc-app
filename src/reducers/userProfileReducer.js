import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userprofile(state = initialState.userprofile, action) {
  switch (action.type) {
    case types.LOAD_USERDETAILS_SUCCESS:
      return action.userprofile;
    default:
      return state;
  }
}
  
