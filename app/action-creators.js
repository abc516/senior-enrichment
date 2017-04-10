import
{ RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS,
   RECEIVE_STUDENTS} from './constants'

import axios from 'axios'

export const receiveCampuses = campuses => ({
  type: RECEIVE_CAMPUSES,
  campuses
})

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
})

export const receiveCampus = campus => ({
  type: RECEIVE_CAMPUS,
  campus
})

export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(response => {
        dispatch(receiveCampus(response.data))
      })
  }
}
