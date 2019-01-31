import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function report30days(state = initialState.report30days, action) {
  switch (action.type) {
    case types.LOAD_REPORTFOR30DAYS_SUCCESS:
      return action.report30days;
    default:
      return state;
  }
}
  
