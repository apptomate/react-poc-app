import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function latestmembers(state = initialState.latestmembers, action) {
  switch (action.type) {
    case types.LOAD_LATESTMEMBERS_SUCCESS:
      return action.latestmembers;
    default:
      return state;
  }
}
  
