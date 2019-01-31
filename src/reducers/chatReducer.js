import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatdata(state = initialState.chatdata, action) {
  switch (action.type) {
    case types.LOAD_CHATMSG_SUCCESS:
      return action.chatdata;
    default:
      return state;
  }
}
  
