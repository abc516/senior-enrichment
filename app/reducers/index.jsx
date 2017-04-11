import { combineReducers } from 'redux'
import {RECEIVE_CAMPUSES, RECEIVE_STUDENTS, RECEIVE_CAMPUS, RECEIVE_STUDENT} from '../constants'

const initialState = {
  students: [],
  campuses: [],
  campus: {},
  student: {}
}

const rootReducer = function(state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CAMPUSES:
      newState.campuses = action.campuses
      break
    case RECEIVE_CAMPUS:
      newState.campus = action.campus
      break
    case RECEIVE_STUDENTS:
      newState.students = action.students
      break
    case RECEIVE_STUDENT:
      newState.student = action.student
      break
    default: return state
  }
  return newState
};

export default rootReducer
