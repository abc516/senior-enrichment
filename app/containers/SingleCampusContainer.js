import SingleCampus from '../components/SingleCampus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campus: state.campus,
    studentsOnCampus:
              state.students
              .filter(student => student.campusId === state.campus.id)
  }
}

const SingleCampusContainer = connect(
  mapStateToProps
)(SingleCampus)

export default SingleCampusContainer
