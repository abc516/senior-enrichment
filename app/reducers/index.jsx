import { combineReducers } from 'redux'
import {RECEIVE_CAMPUSES, RECEIVE_STUDENTS} from '../constants'

const initialState = {
  students: [],
  campuses: []
}

const rootReducer = function(state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CAMPUSES:
      newState.campuses = action.campuses
      break
    case RECEIVE_STUDENTS:
      newState.students = action.students
      break
    default: return state
  }
  return newState
};

export default rootReducer
