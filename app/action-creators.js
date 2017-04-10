import  { RECEIVE_CAMPUSES , RECEIVE_STUDENTS} from './constants'

export const receiveCampuses = campuses => ({
  type: RECEIVE_CAMPUSES,
  campuses
})

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
})
