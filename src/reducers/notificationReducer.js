import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function notifications(state = initialState.notifications, action) {
  switch (action.type) {
    case types.LOAD_NOTIFICATIONS_SUCCESS:
      return action.notifications;
    default:
      return state;
  }
}
  
