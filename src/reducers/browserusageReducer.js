import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function browserusage(state = initialState.browserusage, action) {
  switch (action.type) {
    case types.LOAD_BROWSERUSAGE_SUCCESS:
      return action.browserusage;
    default:
      return state;
  }
}
  
