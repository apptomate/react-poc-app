import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function students(state = initialState.students, action) {
  switch (action.type) {
    case types.LOAD_STUDENTSLIST_SUCCESS:
      return action.students;
    case types.DELETE_STUDENT_SUCCESS: {
      const newState = Object.assign([], state.studentslist);
      const indexOfStudentToDelete = state.studentslist.findIndex(student => {
        return student.id == action.student.id
      })
      newState.splice(indexOfStudentToDelete, 1);
      var studentresult = {
        studentslist: newState
      }
      return studentresult;
    }
    case types.ADD_STUDENT_SUCCESS:
      {
        var studentresult = {
          studentslist:
            [
              ...state.studentslist,
              Object.assign({}, action.student.studentinfo.student)
            ]
        }
        return studentresult;
      }
    case types.EDIT_STUDENT_SUCCESS:
      {
        var studentresult = {
          studentslist:
            [
              ...state.studentslist.filter(student => student.id !== action.student.studentinfo.student.id),
              Object.assign({}, action.student.studentinfo.student)
            ]
        }
        return studentresult;
      }
    default:
      return state;
  }
}

