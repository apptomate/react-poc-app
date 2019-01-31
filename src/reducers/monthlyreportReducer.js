import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function monthlyreport(state = initialState.monthlyreport, action) {
  switch (action.type) {
    case types.LOAD_MONTHLYREPORT_SUCCESS:
      return action.monthlyreport;
    default:
      return state;
  }
}
  
