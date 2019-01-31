import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function infoboxes(state = initialState.infoboxes, action) {
  switch (action.type) {
    case types.LOAD_INFOBOXES_SUCCESS:
      return action.infoboxes;
    default:
      return state;
  }
}
  
