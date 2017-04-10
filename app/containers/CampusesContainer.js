import Campuses from '../components/Campuses';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const CampusesContainer = connect(
  mapStateToProps
)(Campuses)

export default CampusesContainer
