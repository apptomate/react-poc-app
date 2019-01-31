import { combineReducers } from 'redux';
import messages from './messageReducer';
import notifications from './notificationReducer';
import tasks from './taskReducer';
import userprofile from "./userProfileReducer";
import infoboxes from "./infoboxReducer";
import monthlyreport from "./monthlyreportReducer";
import visitorreport from "./visitorreportReducer";
import chatdata from "./chatReducer";
import latestmembers from "./latestmembersReducer";
import report30days from "./report30daysReducer";
import browserusage from "./browserusageReducer";
import students from "./studentReducer";

const rootReducer = combineReducers({
  messages,
  notifications,
  tasks, 
  userprofile,
  infoboxes, 
  monthlyreport, 
  visitorreport, 
  chatdata,
  latestmembers,
  report30days,
  browserusage,
  students
});

export default rootReducer;
