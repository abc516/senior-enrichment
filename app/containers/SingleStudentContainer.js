import SingleStudent from '../components/SingleStudent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    student: state.student,
    school: state.campuses
              .find(campus => campus.id === state.student.campusId)
  }
}

const SingleStudentContainer = connect(
  mapStateToProps
)(SingleStudent)

export default SingleStudentContainer
