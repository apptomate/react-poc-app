import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function visitorreport(state = initialState.visitorreport, action) {
  switch (action.type) {
    case types.LOAD_VISITORREPORT_SUCCESS:
      return action.visitorreport;
    default:
      return state;
  }
}
  
